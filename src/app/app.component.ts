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


  setOption(option: string) {
    this.selectedOption = option;
  }

  setTransportOption(option: string) {
    this.selectedTransportOption = option;
  }


  setTab(tab: string) {
    this.activeTab = tab;
  }
}
