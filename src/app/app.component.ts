import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'starter-ng-storybook';
  menuItems = [
    { path: '/page-upload', label: 'Upload' },
  ];
}
