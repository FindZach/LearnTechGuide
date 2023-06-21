export interface ColorScheme {
  primary: string;
  secondary: string;
  accent: string;
  text: string;
  background: string;
  // Add more color properties as needed
}

export enum Theme {
  Dark = 'dark',
  Light = 'light',
}

export const ThemeColorSchemes: { [key in Theme]: ColorScheme } = {
  [Theme.Dark]: {
    primary: 'green-800',
    secondary: 'teal-500',
    accent: 'cyan-500',
    text: 'text-white',
    background: 'bg-slate-700'
    // Add more color values
  },
  [Theme.Light]: {
    primary: 'red-500',
    secondary: 'pink-500',
    accent: 'yellow-400',
    text: 'text-gray-800',
    background: 'bg-slate-100'
    // Add more color values
  },
};
