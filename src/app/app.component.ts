import { Component } from '@angular/core';
import {environment} from "../environments/environment";
import {API} from "../environments/environment";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  demo = environment.api;
  title = 'ALO';
  name = API.name;
}
