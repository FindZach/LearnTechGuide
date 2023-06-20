import { Component, OnInit } from '@angular/core';
import { ColorScheme } from 'src/app/models/theme/colorscheme.model';
import { ThemeService } from 'src/app/services/theme/theme.service';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {

  private colorScheme?: ColorScheme;

  constructor(private themeService: ThemeService) {
    this.colorScheme = themeService.getColorScheme();
  }

  public getThemeService(): ThemeService {
    return this.themeService;
  }

  ngOnInit(): void {
    this.colorScheme = this.themeService.getColorScheme();
  }
}
