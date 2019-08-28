import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mk-angular4-piple-example';
  userName = "muthuKumar";
  dateOfBirth = new Date(1982,3,5);
  shortArray  = [3,7,3,2,5,4,1,0,-2]; 
}
