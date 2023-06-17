import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialEditorComponent } from './tutorial-editor.component';

describe('TutorialEditorComponent', () => {
  let component: TutorialEditorComponent;
  let fixture: ComponentFixture<TutorialEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorialEditorComponent]
    });
    fixture = TestBed.createComponent(TutorialEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
