import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial/tutorial.model';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorial-list',
  templateUrl: './tutorial-list.component.html',
  styleUrls: ['./tutorial-list.component.scss']
})
export class TutorialListComponent implements OnInit {
  tutorials: Tutorial[] = [];

  ngOnInit(): void {
    this.themeService.getAccentColor();
  }

  constructor(private tutorialService: TutorialService, private themeService: ThemeService) {
    this.tutorials = this.tutorialService.getTutorials();
  }

  public getThemeService(): ThemeService {
    return this.themeService;
  }
}
