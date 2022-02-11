import { Component, OnInit } from '@angular/core';
import { Bug } from '../../model/Bug'
import { BugService } from '../../services/bug.service'

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.scss']
})
export class BugsComponent implements OnInit {

  bugs: Bug[] = []

  constructor(private bugService: BugService) {}

  ngOnInit(): void {
    this.bugService.getAll().subscribe((bugs) => {
      this.bugs = bugs;
      console.log("updating bug");
      console.log(bugs);
    })
  }

  deleteBug(bug: Bug) {
    this.bugService.delete(bug).subscribe();
  }
}
