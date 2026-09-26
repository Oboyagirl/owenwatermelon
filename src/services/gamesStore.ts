import { useState, useEffect } from 'react';
import { Game } from '../types/game';
import { DEFAULT_GAMES } from '../data/defaultGames';

const STORAGE_KEY = 'owen_watermelon_v3_games_v12';
const FAVORITES_KEY = 'owen_watermelon_v3_favorites';

export function resolveAssetUrl(url: string): string {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:') || url.startsWith('blob:')) {
    return url;
  }
  const clean = url.startsWith('/') ? url.slice(1) : url;
  const base = import.meta.env.BASE_URL || '/';
  if (base.endsWith('/')) {
    return `${base}${clean}`;
  }
  return `${base}/${clean}`;
}

const defaultGamesMap = new Map(DEFAULT_GAMES.map(g => [g.id, g]));

function sanitizeGame(game: Game): Game {
  const authoritative = defaultGamesMap.get(game.id);
  if (authoritative) {
    return {
      ...game,
      thumbnail: authoritative.thumbnail,
      banner: authoritative.banner,
      iframeSrc: authoritative.iframeSrc,
      source: authoritative.source || game.source || 'unblocked',
      mirrors: authoritative.mirrors || game.mirrors,
      controls: authoritative.controls || game.controls
    };
  }

  let thumb = game.thumbnail || '';
  if (thumb.includes('arcade_hero_banner') || thumb.includes('watermelon_logo') || thumb.includes('retro_bowl_thumb') || thumb.includes('granny_horror_thumb')) {
    thumb = 'https://raw.githubusercontent.com/ubghyper/GameList.github.io/main/Slope/slope.jpg';
  }

  let iframeSrc = game.iframeSrc;
  if (iframeSrc && iframeSrc.startsWith('/games/')) {
    iframeSrc = iframeSrc.slice(1);
  }

  return { ...game, thumbnail: thumb, iframeSrc, source: game.source || 'unblocked' };
}

export function useGamesStore() {
  const [games, setGames] = useState<Game[]>(() => {
    try {
      const cached = localStorage.getItem(STORAGE_KEY);
      if (cached) {
        const parsed: Game[] = JSON.parse(cached);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const sanitized = parsed.map(sanitizeGame);
          const existingIds = new Set(sanitized.map(g => g.id));
          const missingDefaults = DEFAULT_GAMES.filter(dg => !existingIds.has(dg.id));
          if (missingDefaults.length > 0) {
            return [...sanitized, ...missingDefaults];
          }
          return sanitized;
        }
      }
    } catch (e) {
      console.error('Failed to parse cached games', e);
    }
    return DEFAULT_GAMES;
  });

  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const cached = localStorage.getItem(FAVORITES_KEY);
      return cached ? JSON.parse(cached) : ['watermelon-merge', 'basket-random', 'retro-bowl'];
    } catch {
      return ['watermelon-merge', 'basket-random', 'retro-bowl'];
    }
  });

  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(games));
    } catch (e) {
      console.error('Failed to save games to localStorage', e);
    }
  }, [games]);

  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    } catch (e) {
      console.error('Failed to save favorites', e);
    }
  }, [favorites]);

  const toggleFavorite = (gameId: string) => {
    setFavorites(prev =>
      prev.includes(gameId) ? prev.filter(id => id !== gameId) : [...prev, gameId]
    );
  };

  const recordPlay = (gameId: string) => {
    setGames(prev =>
      prev.map(g => (g.id === gameId ? { ...g, plays: g.plays + 1 } : g))
    );
  };

  const updateGame = (gameId: string, updates: Partial<Game>) => {
    setGames(prev =>
      prev.map(g => (g.id === gameId ? { ...g, ...updates } : g))
    );
    if (selectedGame?.id === gameId) {
      setSelectedGame(prev => (prev ? { ...prev, ...updates } : null));
    }
  };

  return {
    games,
    favorites,
    selectedGame,
    setSelectedGame,
    toggleFavorite,
    updateGame,
    recordPlay
  };
}

export function openAboutBlankGame(game: Game) {
  try {
    const win = window.open('about:blank', '_blank');
    if (!win) return;

    win.document.title = game.title;
    const doc = win.document;
    doc.body.style.margin = '0';
    doc.body.style.height = '100vh';
    doc.body.style.overflow = 'hidden';
    doc.body.style.backgroundColor = '#08140e';

    const iframe = doc.createElement('iframe');
    iframe.style.border = 'none';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.margin = '0';
    iframe.setAttribute('allowfullscreen', 'true');
    iframe.setAttribute('allow', 'autoplay; fullscreen; gamepad; pointer-lock');

    if (game.iframeSrc.startsWith('http') || game.iframeSrc.startsWith('data:')) {
      iframe.src = game.iframeSrc;
    } else if (game.customHtml) {
      iframe.srcdoc = game.customHtml;
    } else {
      iframe.src = resolveAssetUrl(game.iframeSrc);
    }

    doc.body.appendChild(iframe);
  } catch (err) {
    console.error('Failed to open about:blank window', err);
  }
}
