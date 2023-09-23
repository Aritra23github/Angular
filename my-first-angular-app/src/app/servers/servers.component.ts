import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  isButtonDisabled = true;
  serverCreationStatus = "No server created!!!";
  serverName = "";

  constructor() {
    setTimeout(() => {
      this.isButtonDisabled = false;
    }, 2000);
  }

  onServerCreated() {
    this.serverCreationStatus = "Server created!!!";
  }

  generateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
