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
    { src: '../assets/images/payramid.png', alt: 'Image 1', active: true },
    { src: '../assets/images/cairo.png', alt: 'Image 2', active: false },
    { src: '../assets/images/Egipt.png', alt: 'Image 3', active: false },
  ];

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

    this.heroBg =  this.images[index].src;
}
}
