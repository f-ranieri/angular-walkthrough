import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;

  serverCreationStatus = 'No servers has been created so far!';

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3500);
  }

  onCreateNewServer() {
    this.serverCreationStatus = 'There is at least one active server!';
  }
}
