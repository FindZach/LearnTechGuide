import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinyMCEEditorComponent } from './tiny-mceeditor.component';

describe('TinyMCEEditorComponent', () => {
  let component: TinyMCEEditorComponent;
  let fixture: ComponentFixture<TinyMCEEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TinyMCEEditorComponent]
    });
    fixture = TestBed.createComponent(TinyMCEEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
