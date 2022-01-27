import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    allowNewServer = false;
    serverCreatingStatus = "No Server is created";
    serverName = "test server";
    serverCreated = false;
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = false;
    }, 2000);
  }
  ngOnInit(): void {
  }
  onCreateServer(){
    this.serverCreated = true;
    this.serverCreatingStatus = "Server is Created "+this.serverName;
  }

  onUpdateServerName(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
