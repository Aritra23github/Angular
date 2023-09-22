import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  isButtonDisabled = true;

  constructor() {
    setTimeout(() => {
      this.isButtonDisabled = false;
    }, 2000);
  }
}
