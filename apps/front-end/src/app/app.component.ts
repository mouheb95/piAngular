import { Component, Input } from '@angular/core';
import { PfeFileModule } from './pfe-file/pfe-file.module';
import { StudentModule } from './student/student.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [StudentModule]
})
export class AppComponent {
  loginSuccess = true;
  list_pfefile :PfeFileModule[]
}
