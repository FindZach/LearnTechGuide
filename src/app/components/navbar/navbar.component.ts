import { Component, OnInit, OnDestroy, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ColorScheme, Theme } from 'src/app/models/theme/colorscheme.model';
import { ThemeService } from 'src/app/services/theme/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy, AfterViewInit {
  colorScheme?: ColorScheme;
  isDropdownOpen = false;

  constructor(protected themeService: ThemeService, private ref: ChangeDetectorRef) {
    this.colorScheme = themeService.getColorScheme();
  }

  ngAfterViewInit(): void {
    this.themeService?.getColorSchemeObservable().subscribe((colorScheme: ColorScheme) => {
      this.colorScheme = colorScheme;
      this.ref.detectChanges();
    });
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectTheme(theme: Theme) {
    this.themeService.setTheme(theme);
    this.isDropdownOpen = false;
  }

  getColorClassName(className: string | undefined, prefix: string): string {
    console.log('hello; '+this.themeService.transformColor(className, prefix));
    if (className === undefined) return '';
    return this.themeService.transformColor(className, prefix);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {

  }
}
