import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme/theme.service';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {

  constructor(private themeService: ThemeService) {
  }

  public getThemeService(): ThemeService {
    return this.themeService;
  }

  ngOnInit(): void {
  }
}
