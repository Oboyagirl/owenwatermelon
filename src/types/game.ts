export interface GameControl {
  key: string;
  action: string;
}

export interface Game {
  id: string;
  title: string;
  description: string;
  category: 'Action' | 'Arcade' | 'Puzzle' | 'Casual' | 'Sports' | 'Retro' | 'Custom' | 'Racing' | 'Horror' | 'Platformer' | 'Strategy' | 'Multiplayer' | 'Sandbox' | 'Shooter' | (string & {});
  thumbnail: string;
  banner?: string;
  tags: string[];
  rating: number;
  plays: number;
  author: string;
  source?: 'poki' | 'crazygames' | 'unblocked' | 'original';
  featured?: boolean;
  iframeSrc: string;
  iframeCode: string;
  mirrors?: string[];
  sandbox?: string;
  controls?: GameControl[];

  customHtml?: string;
  isCustom?: boolean;
}

export interface CloakPreset {
  id: string;
  name: string;
  title: string;
  icon: string;
  faviconUrl: string;
}
