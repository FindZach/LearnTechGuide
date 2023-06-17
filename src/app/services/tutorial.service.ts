import { Injectable } from '@angular/core';
import { Tutorial } from '../models/tutorial/tutorial.model';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {
  private tutorials: Tutorial[] = [
    {
      id: 1,
      title: 'Introduction to HTML',
      description: 'Learn the basics of HTML markup.',
      author: 'John Doe',
      slug: 'introduction-to-html',
      content: '<h1>This is the</h1> content of the Introduction to HTML tutorial.'
    },
    {
      id: 2,
      title: 'CSS Basics',
      description: 'Explore the fundamentals of CSS styling.',
      author: 'Jane Smith',
      slug: 'css-basics',
      content: 'This is the content of the CSS Basics tutorial.'
    },
    {
      id: 3,
      title: 'JavaScript Fundamentals',
      description: 'Master the core concepts of JavaScript.',
      author: 'Alex Johnson',
      slug: 'javascript-fundamentals',
      content: 'This is the content of the JavaScript Fundamentals tutorial.'
    }
  ];


  constructor() {}

  getTutorials(): Tutorial[] {
    return this.tutorials;
  }

  getTutorialBySlug(slug: string): Tutorial | undefined {
    return this.tutorials.find(tutorial => tutorial.slug === slug);
  }

  getTutorialById(id: number): Tutorial | undefined {
    return this.tutorials.find(tutorial => tutorial.id === id);
  }

  addTutorial(tutorial: Tutorial) {
    // Generate a new ID for the tutorial
    const newId = this.generateNewId();

    // Generate a slug based on the tutorial title
    const slug = this.generateSlug(tutorial.title);

    // Assign the new ID and slug to the tutorial
    tutorial.id = newId;
    tutorial.slug = slug;

    // Add the tutorial to the tutorials array
    this.tutorials.push(tutorial);
  }

  updateTutorial(tutorial: Tutorial) {
    const existingTutorial = this.getTutorialById(tutorial.id);
    if (existingTutorial) {
      existingTutorial.title = tutorial.title;
      existingTutorial.description = tutorial.description;
      existingTutorial.author = tutorial.author;
      existingTutorial.content = tutorial.content;
    }
  }

  deleteTutorial(tutorial: Tutorial) {
    const index = this.tutorials.findIndex(t => t.id === tutorial.id);
    if (index !== -1) {
      this.tutorials.splice(index, 1);
    }
  }

  private generateNewId(): number {
    const maxId = Math.max(...this.tutorials.map(tutorial => tutorial.id));
    return maxId + 1;
  }

  private generateSlug(title: string): string {
    const cleanedTitle = title.replace(/[^\w\s-]/g, '').toLowerCase();
    return cleanedTitle.replace(/\s+/g, '-');
  }
}
