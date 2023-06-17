import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorial-editor',
  templateUrl: './tutorial-editor.component.html',
  styleUrls: ['./tutorial-editor.component.scss']
})
export class TutorialEditorComponent implements OnInit {
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

  ngOnInit() {

  }

  constructor(private tutorialService: TutorialService) {
    this.tutorials = this.tutorialService.getTutorials();
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
