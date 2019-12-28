import { Directive, ElementRef, Input } from "@angular/core";

@Directive({
  selector: "[appLazyLoad]"
})
export class LazyLoadDirective {
  @Input() srcdata: string;
  el: ElementRef;

  constructor(el: ElementRef) {
    this.el = el;
  }

  ngOnInit() {
    let el = this.el;
    let actual_src = this.srcdata;
    el.nativeElement.src =
      "https://static-steelkiwi-dev.s3.amazonaws.com/media/filer_public/1c/30/1c302b65-8285-4934-8917-7165523e766b/9382e6fa-5df6-433b-a4f3-4ed97bbeaf37.gif";

    let observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.nativeElement.src = actual_src;
          observer.unobserve(el.nativeElement);
        }
      });
    });
    observer.observe(el.nativeElement);
  }
}
