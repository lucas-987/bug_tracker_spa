import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Bug } from '../../model/Bug'

@Component({
  selector: '[app-bug]',
  templateUrl: './bug.component.html',
  styleUrls: ['./bug.component.scss']
})
export class BugComponent implements OnInit {

  @Input() bug!: Bug
  @Output() onDeleteBug: EventEmitter<Bug> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  deleteButtonClicked(bug: Bug): void {
    this.onDeleteBug.emit(bug);
  }

}
