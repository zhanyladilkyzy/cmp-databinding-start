import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-clockpit',
  templateUrl: './clockpit.component.html',
  styleUrls: ['./clockpit.component.css']
})
export class ClockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverComponent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{blueServerName: string, blueServerComponent: string}>();
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }
  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverComponent: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      blueServerName: this.newServerName,
      blueServerComponent: this.newServerContent
    });
  }
}
