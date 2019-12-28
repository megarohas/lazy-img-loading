import { Directive, ElementRef, Input } from "@angular/core";

interface ObserverType {
  observe(beingObserved: any, callback?: (update: any) => any): void;
  unobserve(beingObserved: any, callback?: (update: any) => any): void;
}

@Directive({
  selector: "[appLazyLoad]"
})
export class LazyLoadDirective {
  @Input() srcdata: string;
  private el: ElementRef;
  private observer: ObserverType;
  private loading_img: string;
  private error_img: string;

  private loadImg(el: ElementRef): void {
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

  private ngOnInit(): void {
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
    if (observer) observer.observe(el.nativeElement);
  }
}
