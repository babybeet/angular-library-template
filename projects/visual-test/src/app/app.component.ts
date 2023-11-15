import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'lc-root',
  standalone: true,
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor() {}

  onClickMe() {
    alert('I was clicked!');
  }
}
