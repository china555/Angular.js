import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div class="app">
      <h1 [innerHTML]="title"></h1>
      <h1>{{ title }}</h1>
      <img [src]="logo" />
      <button (click)="handleClick()">click</button>
      <input
        type="text"
        [ngModel]="name"
        (ngModelChange)="handleInput($event)"
      />
      <input type="text" [(ngModel)]="name" />
      <div>{{ name }}</div>
    </div>
  `,
})
export class AppComponent {
  title: string;
  logo: string = "img/logo.svg";
  name: string = "wadawd";
  handleClick(event: any) {
    this.name = "motto";
  }
  handleInput(value: string) {
    this.name = value;
  }
  handleBlur(event: any) {
    this.name = event.target.value;
  }
  constructor() {
    this.title = "Ultimate Angular";
  }
}
