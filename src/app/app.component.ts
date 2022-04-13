import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Testserver', content: 'Just a server!'}];

  onServerAdd(serverData: {serverName: string, serverComponent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverComponent
    });
  }

  onBlueprintAdded(blueServerData: { blueServerName: string; blueServerComponent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueServerData.blueServerName,
      content: blueServerData.blueServerComponent
    });
  }
  onChangesFirst() {
    this.serverElements[0].name = 'Changed!';
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }
}
