import { useState, useEffect } from 'react';
import { Game } from '../types/game';
import { DEFAULT_GAMES } from '../data/defaultGames';

const STORAGE_KEY = 'owen_watermelon_v3_games_v6';
const PREV_KEY = 'owen_watermelon_v3_games_v5';
const FAVORITES_KEY = 'owen_watermelon_v3_favorites';

export function resolveAssetUrl(url: string): string {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:') || url.startsWith('blob:')) {
    return url;
  }
  const clean = url.startsWith('/') ? url.slice(1) : url;
  const base = import.meta.env.BASE_URL || './';
  if (base === './' || base === '') {
    return clean;
  }
  return `${base.endsWith('/') ? base : base + '/'}${clean}`;
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

  return { ...game, thumbnail: thumb, iframeSrc };
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
      } else {
        const prev = localStorage.getItem(PREV_KEY);
        if (prev) {
          try {
            const prevParsed: Game[] = JSON.parse(prev);
            const customGames = prevParsed.filter(g => g.isCustom);
            if (customGames.length > 0) {
              return [...customGames, ...DEFAULT_GAMES];
            }
          } catch {}
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
      return cached ? JSON.parse(cached) : ['watermelon-merge'];
    } catch {
      return ['watermelon-merge'];
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

  const addGame = (newGame: Omit<Game, 'id' | 'plays' | 'rating'>) => {
    const id = 'custom-' + Date.now();
    const game: Game = {
      ...newGame,
      id,
      plays: 1,
      rating: 5.0,
      isCustom: true
    };
    setGames(prev => [game, ...prev]);
    return game;
  };

  const removeGame = (gameId: string) => {
    setGames(prev => prev.filter(g => g.id !== gameId));
    if (selectedGame?.id === gameId) {
      setSelectedGame(null);
    }
  };

  const updateGame = (gameId: string, updates: Partial<Game>) => {
    setGames(prev =>
      prev.map(g => (g.id === gameId ? { ...g, ...updates } : g))
    );
    if (selectedGame?.id === gameId) {
      setSelectedGame(prev => (prev ? { ...prev, ...updates } : null));
    }
  };

  const resetToDefault = () => {
    setGames(DEFAULT_GAMES);
    localStorage.removeItem(STORAGE_KEY);
  };

  const importJsonCatalog = (jsonString: string): boolean => {
    try {
      const parsed = JSON.parse(jsonString);
      if (Array.isArray(parsed) && parsed.length > 0) {
        setGames(parsed);
        return true;
      }
    } catch (err) {
      console.error('Invalid JSON file', err);
    }
    return false;
  };

  const downloadJson = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(games, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', 'games.json');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const recordPlay = (gameId: string) => {
    setGames(prev =>
      prev.map(g => (g.id === gameId ? { ...g, plays: g.plays + 1 } : g))
    );
  };

  return {
    games,
    favorites,
    selectedGame,
    setSelectedGame,
    toggleFavorite,
    addGame,
    removeGame,
    updateGame,
    resetToDefault,
    importJsonCatalog,
    downloadJson,
    recordPlay
  };
}

export function openAboutBlankGame(game: Game) {
  const win = window.open('about:blank', '_blank');
  if (!win) {
    alert('Popup was blocked. Please allow popups for about:blank cloaking.');
    return;
  }

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
  iframe.setAttribute('allow', 'autoplay; fullscreen; keyboard; gamepad; pointer-lock; focus-without-user-activation *');
  if (game.sandbox) {
    iframe.setAttribute('sandbox', game.sandbox);
  }

  if (game.iframeSrc.startsWith('http') || game.iframeSrc.startsWith('data:')) {
    iframe.src = game.iframeSrc;
  } else if (game.customHtml) {
    iframe.srcdoc = game.customHtml;
  } else {
    const fullUrl = new URL(resolveAssetUrl(game.iframeSrc), window.location.href).href;
    iframe.src = fullUrl;
  }


  doc.body.appendChild(iframe);
}
