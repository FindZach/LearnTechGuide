import { Component } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorial-list',
  templateUrl: './tutorial-list.component.html',
  styleUrls: ['./tutorial-list.component.scss']
})
export class TutorialListComponent {
  tutorials: Tutorial[] = [];

  constructor(private tutorialService: TutorialService) {
    this.tutorials = this.tutorialService.getTutorials();
  }
}
