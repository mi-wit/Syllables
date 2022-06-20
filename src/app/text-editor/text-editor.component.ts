import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements OnInit {

  text: string = `Lorem ipsum dolor sit amet,
  consectetur adipiscing elit.
  Donec quis elit eget mauris vehicula suscipit eget sit amet mi.
  Curabitur eu molestie elit.
  Vivamus condimentum efficitur interdum.
  Morbi eu odio mollis nisl ullamcorper dapibus eu eu odio.
  Suspendisse est ante, varius eu lorem a, feugiat rhoncus nisi.
  Duis hendrerit maximus enim eu venenatis.
  Donec a ex fringilla, vehicula libero vitae, lobortis ipsum.
  Curabitur ut luctus orci, nec porttitor tellus.
  Quisque ac laoreet quam. 
  Ut maximus interdum velit vulputate consectetur.
  
  Suspendisse mi purus, porta a tellus in, mollis sollicitudin quam. 
  Sed euismod dolor non ex cursus, vitae gravida nulla lacinia. 
  Nunc tempor magna a libero malesuada euismod. 
  Duis iaculis malesuada consequat. 
  Sed feugiat ante felis, eget sodales erat facilisis quis. 
  Etiam lacus orci, aliquet vel ligula at, mattis ornare libero. 
  Sed luctus dolor convallis consectetur finibus. 
  Donec ac pretium enim, ut sollicitudin augue. 
  Phasellus a diam eget elit lacinia rutrum sit amet non mauris. 
  Aenean vel ex efficitur, scelerisque tellus eu, facilisis ante. 
  `;
  constructor() { }

  ngOnInit(): void {
  }

}
