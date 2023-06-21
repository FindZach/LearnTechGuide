import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ColorScheme } from 'src/app/models/theme/colorscheme.model';
import { ThemeService } from 'src/app/services/theme/theme.service';

@Component({
  selector: 'app-tutorial-admin',
  templateUrl: './tutorial-admin.component.html',
  styleUrls: ['./tutorial-admin.component.scss']
})
export class TutorialAdminComponent implements AfterViewInit {
  colorScheme?: ColorScheme;

  constructor(protected themeService: ThemeService, private ref: ChangeDetectorRef) {
    this.colorScheme = themeService.getColorScheme();
  }

  ngAfterViewInit(): void {
    this.themeService?.getColorSchemeObservable().subscribe((colorScheme: ColorScheme) => {
      this.colorScheme = colorScheme;
      this.ref.detectChanges();
    });
  }


}
