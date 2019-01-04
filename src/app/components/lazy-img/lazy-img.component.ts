import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  HostBinding
} from '@angular/core';

@Component({
  selector: 'lazy-img',
  templateUrl: './lazy-img.component.html',
  styleUrls: ['./lazy-img.component.scss']
})
export class LazyImgComponent {
  hasLoaded: boolean = false;
  observer: IntersectionObserver;
  @Input() src = '';
  @Input() alt = '';
  @HostBinding('class.loaded') isLoaded: boolean = false;
  @ViewChild('lazyImage') lazyImage: ElementRef;

  constructor() {}

  ngAfterViewInit() {
    const options: IntersectionObserverInit = {
      root: this.lazyImage.nativeElement.closest('ion-content')
    };

    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(
        this.onObserve.bind(this),
        options
      );
      this.observer.observe(this.lazyImage.nativeElement);
    } else {
      setTimeout(() => this.preload(this.lazyImage.nativeElement), 200);
    }
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }

  onObserve(data): IntersectionObserverCallback {
    if (data[0].isIntersecting) {
      console.log('is in');
      this.preload(data[0].target).then(() => {
        this.observer.disconnect();
      });
    }
    return;
  }

  applyImage(target: HTMLImageElement, src) {
    return new Promise((resolve, reject) => {
      target.src = src;
      resolve();
    });
  }

  fetchImage(url) {
    return new Promise((resolve, reject) => {
      let image = new Image();
      image.src = url;
      image.onload = resolve;
      image.onerror = reject;
    });
  }

  preload(targetEl) {
    return this.fetchImage(this.src)
      .then(() => {
        this.applyImage(targetEl, this.src);
        this.hasLoaded = true;
      })
      .then(() => (this.isLoaded = true));
  }
}
