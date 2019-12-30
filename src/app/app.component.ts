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
        url:
          "https://images.wallpaperscraft.com/image/mountain_peak_snowy_152626_3840x2160.jpg"
      },
      {
        url:
          "https://000images.wallpaperscraft.com/image/mountain_peak_snow_138292_3840x2160.jpg"
      },
      {
        url:
          "https://images.wallpaperscraft.com/image/mountain_peak_snowy_151176_3840x2160.jpg"
      },
      {
        url:
          "https://images.wallpaperscraft.com/image/mountain_peak_snowy_152403_3840x2160.jpg"
      },
      {
        url:
          "https://images.wallpaperscraft.com/image/mountain_peak_climber_141764_3840x2160.jpg"
      },
      {
        url:
          "https://images.wallpaperscraft.com/image/mountain_peak_slope_151716_3840x2160.jpg"
      },
      {
        url:
          "https://images.wallpaperscraft.com/image/mountain_peak_snowy_149998_3840x2160.jpg"
      },
      {
        url:
          "https://images.wallpaperscraft.com/image/mountain_peak_snow_133763_3840x2160.jpg"
      },
      {
        url:
          "https://images.wallpaperscraft.com/image/mountain_peak_top_snow_fog_sky_110674_3840x2160.jpg"
      },
      {
        url:
          "https://000images.wallpaperscraft.com/image/mountain_peak_snow_141605_3840x2160.jpg"
      }
    ];
  }
}
