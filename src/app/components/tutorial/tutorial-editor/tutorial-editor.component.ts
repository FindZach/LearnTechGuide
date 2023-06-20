import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

declare const ClassicEditor: any;

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

  constructor(private tutorialService: TutorialService) {
    this.tutorials = this.tutorialService.getTutorials();
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
