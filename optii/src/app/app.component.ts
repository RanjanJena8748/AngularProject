import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  expanded = false;
  userprofile = false;
  getOptiiVersion() {
    if (this.expanded) {
      return '';
    } else {
      return '18px';
    }
  }
}
