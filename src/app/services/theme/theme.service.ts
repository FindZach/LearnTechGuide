import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ColorScheme, Theme, ThemeColorSchemes } from 'src/app/models/theme/colorscheme.model';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentTheme: Theme = Theme.Dark;
  private colorScheme: ColorScheme = ThemeColorSchemes[this.currentTheme];
  private colorSchemeSubject: Subject<ColorScheme> = new Subject<ColorScheme>();

  constructor() {}

  setTheme(theme: Theme): void {
    this.currentTheme = theme;
    this.colorScheme = ThemeColorSchemes[theme];
    this.colorSchemeSubject.next(this.colorScheme);
  }

  getAvailableThemes(): Theme[] {
    return Object.values(Theme);
  }

  transformColor(className: string | undefined, prefix: string): string {
    if (!className) {
      return '';
    }

    const modifiedClassName = className.startsWith(prefix) ? className : prefix + className;
    return modifiedClassName;
  }

  getColorSchemeObservable(): Observable<ColorScheme> {
    return this.colorSchemeSubject.asObservable();
  }

  getTheme(): Theme {
    return this.currentTheme;
  }

  getColorScheme(): ColorScheme {
    return this.colorScheme;
  }

  getError(): string {
    return 'bg-red-500';
  }

  getErrorColorText(): string {
    return 'text-red-500';
  }
}
