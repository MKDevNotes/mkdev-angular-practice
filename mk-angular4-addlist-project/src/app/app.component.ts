import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'mk-angular4-addlist-project';
  itemList = ["Java","DotNet","angular4","React"]
  newItem = "";
  pushItem = function () {
    if(this.newItem !=""){
      this.itemList.push(this.newItem);
      this.newItem="";
    }
  }

  removeItem = function(index){
    this.itemList.splice(index,1);
  }
}
