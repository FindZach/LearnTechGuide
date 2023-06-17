import { Injectable } from '@angular/core';
import { Tutorial } from '../models/tutorial/tutorial.model';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {
  private tutorials: Tutorial[] = [
    { id: 1, title: 'Introduction to HTML', description: 'Learn the basics of HTML markup.', author: 'John Doe' },
    { id: 2, title: 'CSS Basics', description: 'Explore the fundamentals of CSS styling.', author: 'Jane Smith' },
    { id: 3, title: 'JavaScript Fundamentals', description: 'Master the core concepts of JavaScript.', author: 'Alex Johnson' }
  ];

  constructor() {}

  getTutorials(): Tutorial[] {
    return this.tutorials;
  }

  getTutorialById(id: number): Tutorial | undefined {
    return this.tutorials.find(tutorial => tutorial.id === id);
  }
}
