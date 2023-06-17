import { Component } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  tutorials: Tutorial[] = [];

  constructor(private tutorialService: TutorialService) {}

  ngOnInit() {
    this.tutorials = this.tutorialService.getTutorials();
  }
}
