import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-bug-description]',
  templateUrl: './bug-description.component.html',
  styleUrls: ['./bug-description.component.scss']
})
export class BugDescriptionComponent implements OnInit {

  @Input() description: string | undefined;
  expanded: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  checkOverflow(element: HTMLElement) {
    return element.offsetHeight < element.scrollHeight ||
      element.offsetWidth < element.scrollWidth;
  }

  toggleExpanded() {
    this.expanded = !this.expanded;
  }
}
