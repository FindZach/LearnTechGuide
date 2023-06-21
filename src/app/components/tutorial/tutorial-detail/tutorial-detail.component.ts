import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ColorScheme } from 'src/app/models/theme/colorscheme.model';
import { Tutorial } from 'src/app/models/tutorial/tutorial.model';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorial-detail',
  templateUrl: './tutorial-detail.component.html',
  styleUrls: ['./tutorial-detail.component.scss']
})
export class TutorialDetailComponent implements OnInit, AfterViewInit {
  colorScheme?: ColorScheme;

  ngAfterViewInit(): void {
    this.themeService?.getColorSchemeObservable().subscribe((colorScheme: ColorScheme) => {
      this.colorScheme = colorScheme;
      this.ref.detectChanges();
    });
  }
  tutorial: Tutorial | undefined;

  constructor(
    private route: ActivatedRoute,
    private tutorialService: TutorialService,
    protected themeService: ThemeService, private ref: ChangeDetectorRef) {
      this.colorScheme = themeService.getColorScheme();
    }

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.tutorial = slug ? this.tutorialService.getTutorialBySlug(slug) : undefined;
  }
}
