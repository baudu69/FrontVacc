import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontVacc';
  token: string | null
  username: string | null | undefined
  constructor() {
    this.token = localStorage.getItem('token')
    this.username = localStorage.getItem("username")
  }

  ngOnInit() {
  }
}
