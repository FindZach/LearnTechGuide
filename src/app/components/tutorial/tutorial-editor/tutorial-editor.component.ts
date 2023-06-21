import { Component, AfterViewInit, ChangeDetectorRef, OnInit, Output } from '@angular/core';
import { ColorScheme } from 'src/app/models/theme/colorscheme.model';
import { Tutorial } from 'src/app/models/tutorial/tutorial.model';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorial-editor',
  templateUrl: './tutorial-editor.component.html',
  styleUrls: ['./tutorial-editor.component.scss']
})
export class TutorialEditorComponent implements OnInit, AfterViewInit {
  colorScheme?: ColorScheme;

  ngAfterViewInit(): void {
    this.themeService?.getColorSchemeObservable().subscribe((colorScheme: ColorScheme) => {
      this.colorScheme = colorScheme;
      this.ref.detectChanges();
    });
  }


  tutorials: Tutorial[] = [];
  newTutorial: Tutorial = {
    id: 0,
    title: '',
    description: '',
    author: '',
    slug: '',
    content: ''
  };
  selectedTutorial: Tutorial | undefined;

  constructor(private tutorialService: TutorialService, protected themeService: ThemeService, private ref: ChangeDetectorRef) {
    this.tutorials = this.tutorialService.getTutorials();

    this.colorScheme = themeService.getColorScheme();
  }

  ngOnInit() {
  }


  onEditorContentChange(content: string) {
    if (this.selectedTutorial) {
      this.selectedTutorial.content = content;
    }
  }

  addTutorial() {
    this.tutorialService.addTutorial(this.newTutorial);
    this.newTutorial = {
      id: 0,
      title: '',
      description: '',
      author: '',
      slug: '',
      content: ''
    };
  }

  updateTutorial() {
    if (this.selectedTutorial) {
      this.tutorialService.updateTutorial(this.selectedTutorial);
      this.selectedTutorial = undefined;
    }
  }

  updateContent(content: string) {
    // Update the content of the selected tutorial
    this.selectedTutorial!.content = content;
  }

  selectTutorial(tutorial: Tutorial) {
    this.selectedTutorial = { ...tutorial };
  }

  deleteTutorial(tutorial: Tutorial) {
    this.tutorialService.deleteTutorial(tutorial);
    if (this.selectedTutorial && this.selectedTutorial.id === tutorial.id) {
      this.selectedTutorial = undefined;
    }
  }
}
