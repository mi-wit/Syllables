import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TextEditorComponent } from './text-editor/text-editor.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(TextEditorComponent) editor!: TextEditorComponent;
  title = 'Syllables';
  
  spellcheck = new FormControl(false);
  english = new FormControl(false);

  ngOnInit(): void {
    this.spellcheck.valueChanges.subscribe(
      {
        next: (value) => this.editor.spellcheck = value
      }
    );

    this.english.valueChanges.subscribe(
      {
        next: (value) => {
          this.editor.language = value;
          this.editor.rerenderText();
        }
      }
    );
  }

}
