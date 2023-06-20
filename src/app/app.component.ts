import { Component, OnInit } from '@angular/core';
import { Carousel, Dropdown, initTE, Collapse, Ripple} from 'tw-elements';
import { ThemeService } from './services/theme/theme.service';
import { ColorScheme } from './models/theme/colorscheme.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit() {
    initTE({ Carousel, Dropdown, Collapse, Ripple });

    this.colorScheme = this.themeService.getColorScheme();
    console.log('BG Color: ' + this.colorScheme.background);
  }

  private colorScheme?: ColorScheme;

  constructor(private themeService: ThemeService) {}

  public getThemeService(): ThemeService {
    return this.themeService;
  }
}
