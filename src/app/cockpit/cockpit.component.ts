import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverAdded = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpAdded') blueprintAdded = new EventEmitter<{serverName: string, serverContent: string}>();

  // newServerName = '';
  // newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverInputName: HTMLInputElement, serverInputContent: HTMLInputElement) {
    this.serverAdded.emit({
      serverName: serverInputName.value,
      serverContent: serverInputContent.value
      // serverName: this.newServerName,
      // serverContent: this.newServerContent
    });
  }

  onAddBlueprint(serverInputName: HTMLInputElement, serverInputContent: HTMLInputElement) {
    this.blueprintAdded.emit({
      serverName: serverInputName.value,
      serverContent: serverInputContent.value
      // serverName: this.newServerName,
      // serverContent: this.newServerContent
    });
  }

}
