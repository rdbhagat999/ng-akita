import { Component } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-akita';

  constructor(private themeService: ThemeService) {}

  changeTheme(name) {
    this.themeService.setTheme(name);
  }

}
