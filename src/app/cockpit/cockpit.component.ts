import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

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
  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverInputName: HTMLInputElement, serverInputContent: HTMLInputElement) {
    this.serverAdded.emit({
      serverName: serverInputName.value,
      serverContent: this.serverContentInput.nativeElement.value
      // serverName: this.newServerName,
      // serverContent: this.newServerContent
    });
  }

  onAddBlueprint(serverInputName: HTMLInputElement, serverInputContent: HTMLInputElement) {
    this.blueprintAdded.emit({
      serverName: serverInputName.value,
      serverContent: this.serverContentInput.nativeElement.value
      // serverName: this.newServerName,
      // serverContent: this.newServerContent
    });
  }

}
