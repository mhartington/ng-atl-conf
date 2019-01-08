import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
  styleUrls: ['./map.scss']
})
export class MapPage implements AfterViewInit {
  @ViewChild('mapCanvas') mapElement: ElementRef;


  async ngAfterViewInit() {
    const googleMaps = await getGoogleMaps(
      'AIzaSyBSrd2c8lfdoyzQzU7egIb-CzzQWFX4_ms'
    );
    const mapEle = this.mapElement.nativeElement;

    const map = new googleMaps.Map(mapEle, {
      center: { lat: 34.071530999958846, lng: -84.27271337505712 },
      zoom: 18
    });

    googleMaps.event.addListenerOnce(map, 'idle', () => {
      mapEle.classList.add('show-map');
    });
  }
}

function getGoogleMaps(apiKey: string): Promise<any> {
  const win = window as any;
  const googleModule = win.google;
  if (googleModule && googleModule.maps) {
    return Promise.resolve(googleModule.maps);
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=weekly`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    script.onload = () => {
      const googleModule2 = win.google;
      if (googleModule2 && googleModule2.maps) {
        resolve(googleModule2.maps);
      } else {
        reject('google maps not available');
      }
    };
  });
}
