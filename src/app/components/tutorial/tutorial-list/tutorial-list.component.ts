import { AfterViewInit, Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { ColorScheme } from 'src/app/models/theme/colorscheme.model';
import { Tutorial } from 'src/app/models/tutorial/tutorial.model';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorial-list',
  templateUrl: './tutorial-list.component.html',
  styleUrls: ['./tutorial-list.component.scss']
})
export class TutorialListComponent implements OnInit, OnDestroy, AfterViewInit {

  tutorials: Tutorial[] = [];

  protected colorScheme?: ColorScheme;

  constructor(private tutorialService: TutorialService, protected themeService: ThemeService, private ref: ChangeDetectorRef) {
    this.colorScheme = this.themeService.getColorScheme();
  }

  ngAfterViewInit(): void {
    this.themeService?.getColorSchemeObservable().subscribe((colorScheme: ColorScheme) => {
      console.log('Color scheme changed to ' + JSON.stringify(colorScheme));
      this.colorScheme = colorScheme;
      this.ref.detectChanges();
    });
  }

  ngOnInit(): void {
    this.tutorials = this.tutorialService.getTutorials();
  }

  ngOnDestroy(): void {

  }
}
