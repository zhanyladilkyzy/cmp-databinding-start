import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-clockpit',
  templateUrl: './clockpit.component.html',
  styleUrls: ['./clockpit.component.css']
})
export class ClockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverComponent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{blueServerName: string, blueServerComponent: string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', {static: false}) serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverComponent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      blueServerName: nameInput.value,
      blueServerComponent: this.serverContentInput.nativeElement.value
    });
  }
}
