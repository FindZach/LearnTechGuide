export interface ColorScheme {
  primary: string;
  secondary: string;
  accent: string;
  text: string;
  background: string;
  secondaryBackground: string;
  // Add more color properties as needed
}

export enum Theme {
  Dark = 'dark',
  Light = 'light',
}

export const ThemeColorSchemes: { [key in Theme]: ColorScheme } = {
  [Theme.Dark]: {
    primary: 'text-blue-500',
    secondary: 'text-yellow-400',
    accent: 'text-red-500',
    text: 'text-white',
    background: 'bg-gray-800',
    secondaryBackground: 'bg-blue-700',
    // Add more color values
  },
  [Theme.Light]: {
    primary: 'text-indigo-500',
    secondary: 'text-pink-500',
    accent: 'text-yellow-400',
    text: 'text-gray-800',
    background: 'bg-white',
    secondaryBackground: 'bg-gray-300',
    // Add more color values
  },
};
