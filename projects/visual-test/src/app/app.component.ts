import { Component } from '@angular/core';

@Component({
  selector: 'bbb-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor() {}

  onClickMe() {
    alert('I was clicked!');
  }
}
