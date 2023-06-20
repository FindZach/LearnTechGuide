import { Injectable } from '@angular/core';
import { ColorScheme, Theme, ThemeColorSchemes } from 'src/app/models/theme/colorscheme.model';
@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  private currentTheme: Theme = Theme.Dark;

  constructor() {}

  setTheme(theme: Theme) {
    this.currentTheme = theme;
  }

  getTheme(): Theme {
    return this.currentTheme;
  }

  getColorScheme(): ColorScheme {
    return ThemeColorSchemes[this.currentTheme];
  }

  public getErrorColorBackground() : string {
    return 'bg-red-500';
  }
  public getErrorColorText() : string {
    return 'text-red-500';
  }

  public getPrimaryColor(): string {
    return this.getColorScheme().primary;
  }

  public getAccentColor(): string {
    return this.getColorScheme().accent;
  }

  public getSecondaryColor(): string {
    return this.getColorScheme().secondary;
  }

  public getBackgroundColor(): string {
    return this.getColorScheme().background;
  }

  public getSecondaryBackgroundColor(): string {
    return this.getColorScheme().secondaryBackground;
  }

  public getTextColor(): string {
    return this.getColorScheme().text;
  }
}
