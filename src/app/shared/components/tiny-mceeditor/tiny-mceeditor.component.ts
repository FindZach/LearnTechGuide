import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Editor } from 'tinymce';

declare const tinymce: any;

@Component({
  selector: 'app-tiny-mce-editor',
  template: `
    <textarea [(ngModel)]="content"></textarea>
  `,
})
export class TinyMCEEditorComponent implements OnInit, OnDestroy {
  @Input() content: string = '';
  @Output() contentChange = new EventEmitter<string>();

  editor: Editor | undefined;

  ngOnInit() {
    this.initializeEditor();
  }

  ngOnDestroy() {
    if (this.editor) {
      this.editor.destroy();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['content'] && this.editor) {
      this.editor.setContent(this.content);
    }
  }

  initializeEditor() {
    tinymce.init({
      selector: 'app-tiny-mce-editor textarea',
      plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
      toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
      setup: (editor: Editor) => {
        this.editor = editor;
        editor.on('input', () => {
          console.log('Edit Detected: ' + editor.getContent());
          const newContent = editor.getContent();
          this.contentChange.emit(newContent);
        });
      },
    });
  }
}
