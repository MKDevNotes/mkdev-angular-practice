import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mk-angular4-databinding-project';
  obj = {
    id: '1',
    name: 'Muthukumar'
  }
  fruitsArray = ['Apple', 'Orange', 'Mango', 'Banna', 'Graps', 'Cherry'];
  isVarTrue = false;
  userName = 'MKs';

}
