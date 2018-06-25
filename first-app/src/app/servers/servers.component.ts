import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  allowAddServer = false;
  serverCreationStatus = "Server Not Created Yet";
  serverName = "Server Default Name";

  constructor() {
    setTimeout(() => {
      this.allowAddServer = true;
    }, 2000);
  }

  ngOnInit() {}

  onClick() {
    this.serverCreationStatus = "Server " + this.serverName + " Was Created";
  }
}
