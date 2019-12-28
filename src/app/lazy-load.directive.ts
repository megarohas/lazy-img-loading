import { Directive, ElementRef, Input } from "@angular/core";

@Directive({
  selector: "[appLazyLoad]"
})
export class LazyLoadDirective {
  @Input() srcdata: string;
  el: ElementRef;
  observer: Object;
  loading_img: string;
  error_img: string;

  loadImg(el: ElementRef) {
    let { srcdata, observer, error_img } = this;

    el.nativeElement.src = srcdata;
    el.nativeElement.onerror = () => {
      el.nativeElement.src = error_img;
    };
    if (observer) observer.unobserve(el.nativeElement);
  }

  constructor(el: ElementRef) {
    this.el = el;
    this.error_img = "https://clck.ru/LaNDr";
    this.loading_img = "https://clck.ru/LaQ32";
  }

  ngOnInit() {
    let { el, observer, loading_img } = this;
    let intersection_observer_config = {
      rootMargin: "100px"
    };

    el.nativeElement.src = loading_img;
    observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.loadImg(el);
        }
      });
    }, intersection_observer_config);
    observer.observe(el.nativeElement);
  }
}
