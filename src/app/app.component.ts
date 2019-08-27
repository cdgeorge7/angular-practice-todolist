import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name: string = "Chris";

  constructor() {
    this.changeName("Biscuits");
  }

  changeName(name: string): void {
    this.name = name;
  }
}
