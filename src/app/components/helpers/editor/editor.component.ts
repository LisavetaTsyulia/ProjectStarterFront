import {Component, OnDestroy, AfterViewInit, EventEmitter, Input, Output, OnChanges} from '@angular/core';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'app-text-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements AfterViewInit, OnDestroy, OnChanges {
  @Input() elementId: String;
  @Input() value: any;
  @Output() onEditorKeyup = new EventEmitter<any>();

  didSetValue = false;

  editor;

  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      plugins: ['link', 'paste', 'table'],
      skin_url: '../../../assets/skins/lightgray',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent();
          this.onEditorKeyup.emit(content);
        });
      },
    });
  }

  ngOnChanges() {
    if (!isNullOrUndefined(this.editor) && this.value && !this.didSetValue) {
      this.didSetValue = true;
      this.editor.setContent(this.value);
    }
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}
