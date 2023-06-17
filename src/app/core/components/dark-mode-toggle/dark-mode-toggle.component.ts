import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.scss']
})
export class DarkModeToggleComponent implements OnInit {
  isDarkMode: boolean = true;

  ngOnInit() {
    // Check local storage for dark mode preference
    const storedPreference = localStorage.getItem('darkMode');
    this.isDarkMode = storedPreference === 'true';

    // Apply dark mode class to the document body
    this.updateDarkModeClass();
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;

    // Store dark mode preference in local storage
    localStorage.setItem('darkMode', this.isDarkMode.toString());

    // Apply dark mode class to the document body
    this.updateDarkModeClass();
  }

  private updateDarkModeClass() {
    const body = document.querySelector('body');
    if (body) {
      if (this.isDarkMode) {
        body.classList.add('dark');
      } else {
        body.classList.remove('dark');
      }
    }
  }
}
