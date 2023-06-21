import { Injectable, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ColorScheme, Theme, ThemeColorSchemes } from 'src/app/models/theme/colorscheme.model';

export enum ColorType {
  BG = 'bg-',
  TEXT = 'text-',
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  private currentTheme: Theme = Theme.Light;
  private colorScheme: ColorScheme = ThemeColorSchemes[this.currentTheme];

  private colorSchemeSubject: Subject<ColorScheme> = new Subject<ColorScheme>();

  private colorPrefixes = ['bg-', 'text-'];

  constructor() {}

  setTheme(theme: Theme) {
    console.log('Setting theme ' + JSON.stringify(theme));
    this.currentTheme = theme;
    this.colorScheme = ThemeColorSchemes[this.currentTheme];

    this.colorSchemeSubject.next(this.colorScheme);
  }

  toggleTheme() {
    console.log('Toggled theme');
    if (this.currentTheme === Theme.Dark) {
      this.setTheme(Theme.Light);
    } else {
      this.setTheme(Theme.Dark);
    }
  }

  getColorClassName(className: string | undefined, prefix: string): string {
    console.log('Received className:', className);

    if (!className) {
      console.log('Returning empty string due to undefined className.');
      return '';
    }

    const modifiedClassName = className.startsWith(prefix) ? className : prefix + className;
    console.log('Modified className:', modifiedClassName);

    return modifiedClassName;
  }

  getColorSchemeObservable(): Observable<ColorScheme> {
    console.log('observing..');
    return this.colorSchemeSubject.asObservable();
  }

  getTheme(): Theme {
    return this.currentTheme;
  }

  getColorScheme(): ColorScheme {
    return this.colorScheme;
  }

  public getError(): string {
    return 'bg-red-500';
  }

  public getErrorColorText(): string {
    return 'text-red-500';
  }

  public getPrimary(): string {
    return this.colorScheme.primary;
  }

  public getAccent(): string {
    return this.getColorScheme().accent;
  }

  public getSecondary(): string {
    console.log('SECONDARY COLOR: ' + this.getColorScheme().secondary);
    return this.getColorScheme().secondary;
  }

  public getBackgroundColor(): string {
    return this.getColorScheme().background;
  }

  public getTextColor(): string {
    return this.getColorScheme().text;
  }
}
