import { Directive, ElementRef, Input } from "@angular/core";

@Directive({
  selector: "[appLazyLoad]"
})
export class LazyLoadDirective {
  @Input() srcdata: string;
  el: ElementRef;
  observer: Object;

  loadImg(el: ElementRef) {
    let actual_src = this.srcdata;
    let observer = this.observer;

    el.nativeElement.src = actual_src;
    observer.unobserve(el.nativeElement);
  }

  constructor(el: ElementRef) {
    this.el = el;
  }

  ngOnInit() {
    let el = this.el;
    let observer = this.observer;
    el.nativeElement.src = "https://clck.ru/LaADc";

    observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.loadImg(el);
          }
        });
      },
      { rootMargin: "100px" }
    );
    observer.observe(el.nativeElement);
  }
}
