import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'travel-app-demo';
  selectedOption: string = ''; // default nothing selected
  selectedTransportOption: string = ''; // default nothing selected
  activeTab: string = 'tab1';
  cards = [
    {
      title: 'Informatii utile',
      open: false,
      contentTitle: 'Informatii utile',
      bullets: [
        { icon: '../assets/icons/building.png', text: 'Populatie: Aproximativ 10 milioane locuitori (zona metropolitana depaseste 20 milioane)' },
        { icon: '../assets/icons/japnese-text.png', text: 'Limba: Araba (limba oficiala), Engleza frecvent folosita in zonele turistice' },
        { icon: '../assets/icons/cloud.png', text: 'Clima: Clima desertica, verile extrem de calde, iernile blande.' },
        { icon: '../assets/icons/currency.png', text: 'Moneda: Lira Egipteana (EGP)' },
        { icon: '../assets/icons/clock.png', text: 'Fus orar: UTC+02:00' }
      ]
    }
    ,

    {
      title: 'Transport Public',
      open: false,
      contentTitle: 'Informatii utile despre Cairo, Transport public',
      bullets: [
        { icon: '../assets/icons/building.png', text: 'Populatie: Aproximativ 10 milioane locuitori (zona metropolitana depaseste 20 milioane)' },
        { icon: '../assets/icons/japnese-text.png', text: 'Limba: Araba (limba oficiala), Engleza frecvent folosita in zonele turistice' },
        { icon: '../assets/icons/cloud.png', text: 'Clima: Clima desertica, verile extrem de calde, iernile blande.' },
        { icon: '../assets/icons/currency.png', text: 'Moneda: Lira Egipteana (EGP)' },
        { icon: '../assets/icons/clock.png', text: 'Fus orar: UTC+02:00' }
      ]
    }
    ,
    {
      title: 'Bucatarie Locala ',
      open: false,
      contentTitle: 'Informatii utile Bucatarie locala',
      bullets: [
        { icon: '../assets/icons/building.png', text: 'Populatie: Aproximativ 10 milioane locuitori (zona metropolitana depaseste 20 milioane)' },
        { icon: '../assets/icons/japnese-text.png', text: 'Limba: Araba (limba oficiala), Engleza frecvent folosita in zonele turistice' },
        { icon: '../assets/icons/cloud.png', text: 'Clima: Clima desertica, verile extrem de calde, iernile blande.' },
        { icon: '../assets/icons/currency.png', text: 'Moneda: Lira Egipteana (EGP)' },
        { icon: '../assets/icons/clock.png', text: 'Fus orar: UTC+02:00' }
      ]
    }
    ,
  ];

  images = [
    {
      src: '../assets/images/payramid.png', alt: 'Image 1', active: true,

      title: 'Piramidele din Gyza',
      description: 'Ridicate in urma cu peste 4500 de ani, Piramidele din Gyza raman una dintre cele mai mari enigme ale umanitatii. Constructii grandioase dedicate faraonilor, aceste monumente impresionante combina perfect maretia arhitecturala cu misterul istoriei. Viziteaza cel mai faimos sit antic al Egiptului si paseste intr-o lume plina de legende si descoperiri fascinante.',
      bullets: [
        {
          icon: '../assets/icons/location.png',
          text: 'Cairo, Egipt'
        }
        ,
        {
          icon: '../assets/icons/clock-03.png',
          text: 'Durata vizitei: 5 - 6 ore'
        }
      ]

    },
    {
      src: '../assets/images/cairo.png', alt: 'Image 2', active: false,

      title: 'Cairo',
      description: 'Cairo este capitala Egiptului si se afla in nordul tarii, pe malurile fluviului Nil. Cunoscut pentru istoria sa milenara si pentru obiectivele sale legendare, precum Piramidele din Giza si Sfinxul, orasul atrage milioane de turisti in fiecare an. De la bazarurile pline de culoare si moscheile grandioase pana la muzeele renumite si viata urbana vibranta, Cairo ofera o experienta unica pentru orice calator.',
      bullets: [
        {
          icon: '../assets/icons/red-flag.png',
          text: 'Egipt'
        }
        ,
        {
          icon: '../assets/icons/sun-cloud.png',
          text: 'Clima desertica, verile extrem de calde, iernile blande.'
        }
      ]




    },
    {
      src: '../assets/images/Egipt.png', alt: 'Image 3', active: false,



      title: 'Egipt',
      description: 'Egiptul este situat in nord-estul Africii si este strabatut de fluviul Nil, sursa vietii de-a lungul mileniilor. Renumit pentru civilizatia sa antica, tara adaposteste comori legendare precum Piramidele, Valea Regilor si templele de la Luxor. De la deserturile spectaculoase si Marea Rosie pana la siturile arheologice unice si orasele pline de energie, Egiptul imbina traditia si modernitatea intr-o destinatie fascinanta pentru orice calator.',
      bullets: [
        {
          icon: '../assets/icons/earth-globe.png',
          text: 'Continentul African'
        }
        ,
        {
          icon: '../assets/icons/city.png',
          text: '118,6 milioane de locuitori'
        }
      ]


    },
  ];
  selectedCity = this.images[0];

  heroBg: string = '../assets/images/payramid.png'; // default background

  setOption(option: string) {
    this.selectedOption = option;
  }

  setTransportOption(option: string) {
    this.selectedTransportOption = option;
  }


  setTab(tab: string) {
    this.activeTab = tab;
  }

  toggleCard(card: any) {
    card.open = !card.open; // Toggle open/close
  }

  setActiveImage(index: number) {
    this.images.forEach((img, i) => img.active = i === index);

    this.heroBg = this.images[index].src;
    this.selectedCity =  this.images[index]
  }

  findActiveImageIndex() {
    return this.images.findIndex(img => img.active);
  }

  // Go to previous image
  prevImage() {
    let currentIndex = this.findActiveImageIndex();
    let prevIndex = currentIndex > 0 ? currentIndex - 1 : this.images.length - 1;
    this.setActiveImage(prevIndex);
  }

  // Go to next image
  nextImage() {
    let currentIndex = this.findActiveImageIndex();
    let nextIndex = currentIndex < this.images.length - 1 ? currentIndex + 1 : 0;
    this.setActiveImage(nextIndex);
  }
}
