import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "";

  testBoolean = false;

  printText(){
    console.log("Hey There!");
    this.testBoolean = !this.testBoolean;
  }
}
