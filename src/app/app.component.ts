import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "lazy-img-loading";
  links = [];

  constructor() {
    this.links = [
      {
        url: "https://img.wallpapersafari.com/tablet/2560/1700/96/25/CPBNzQ.jpg"
      },
      {
        url:
          "https://img.wallpapersafari.com/tab23let/2560/1700/93/67/efWJLU.jpg"
      },
      {
        url: "https://img.wallpapersafari.com/tablet/2560/1700/39/73/uJOVbP.jpg"
      },
      {
        url: "https://img.wallpapersafari.com/tablet/2560/1700/94/17/xPiBnz.jpg"
      },
      {
        url: "https://img.wallpapersafari.com/tablet/2560/1700/33/15/H0xd3O.jpg"
      },
      {
        url: "https://img.wallpapersafari.com/tablet/2560/1700/74/9/VLjGQk.jpg"
      },
      {
        url: "https://img.wallpapersafari.com/tablet/2560/1700/96/36/vKl0jY.jpg"
      },
      {
        url: "https://img.wallpapersafari.com/tablet/2560/1700/51/70/Q7GoMx.jpg"
      },
      {
        url: "https://img.wallpapersafari.com/tablet/2560/1700/54/90/bA74uy.jpg"
      },
      {
        url:
          "https://img.wallpapersafari.com/tab23let/2560/1700/76/53/6oEO7I.jpg"
      }
    ];
  }
}
