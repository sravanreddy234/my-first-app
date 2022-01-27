import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: ['h3{color: green;}']
})
export class AppComponent {
  showSecret = false;
  log = [];
  onToggleDetails(){
    this.showSecret = !this.showSecret;
    this.log.push(new Date());
  }
}
