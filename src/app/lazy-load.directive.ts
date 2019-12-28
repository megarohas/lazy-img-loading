import { Directive, ElementRef, Input } from "@angular/core";

@Directive({
  selector: "[appLazyLoad]"
})
export class LazyLoadDirective {
  constructor(el: ElementRef) {
    let actual_src = el.nativeElement.getAttribute("srcdata");
    el.nativeElement.src =
      "https://static-steelkiwi-dev.s3.amazonaws.com/media/filer_public/1c/30/1c302b65-8285-4934-8917-7165523e766b/9382e6fa-5df6-433b-a4f3-4ed97bbeaf37.gif";

    let observer = new IntersectionObserver((entries, obs) => {
      console.log(entries.length);
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log("entry:", entry.isIntersecting);
          el.nativeElement.src = actual_src;
          observer.unobserve(el.nativeElement);
        }
      });
    });
    observer.observe(el.nativeElement);
  }
}
