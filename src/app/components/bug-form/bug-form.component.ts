import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'
import { Bug } from '../../model/Bug'
import { BugService } from '../../services/bug.service'

@Component({
  selector: 'app-bug-form',
  templateUrl: './bug-form.component.html',
  styleUrls: ['./bug-form.component.scss']
})
export class BugFormComponent implements OnInit {

  @Input() update!: boolean
  bugId: number | undefined

  bug: Bug | undefined

  title: string = ""
  description: string = ""
  status: number = 0
  priority: number = 0
  nbReport: number = 0

  constructor(
    private bugService: BugService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.bugId = parseInt(params['id']);

        if (this.bugId != NaN) {
          console.log("retrieving bug")
          this.bug = this.bugService.getById(this.bugId)
          console.log("bug : ")
          console.log(this.bug)

          this.title = this.bug!.title
          this.description = this.bug!.description
          this.status = this.bug!.status
          this.priority = this.bug!.priority
          this.nbReport = this.bug!.nbReport
        }
        else {
          // TODO handle unvalid id
        }
      }
    });

    this.route.data.subscribe(data => {
      if(data['update'])
        this.update = data['update']
    });
  }

  onSubmit(): void {
    // validation
    if (!this.title || this.title.length == 0) return
    if (!this.description || this.description.length == 0) return

    const bug: Bug = {
      id: typeof (this.bug) == "undefined" ? undefined : this.bug.id,
      title: this.title,
      description: this.description,
      status: this.status,
      priority: this.priority,
      nbReport: this.nbReport,
      createdDate: new Date(),
    };

    if (this.update) {
      this.bugService.update(bug).subscribe(() => {
        console.log("bug updated");
      });

    }
    else {

      this.bugService.create(bug).subscribe(() => {
        console.log("bug created");
      });
    }
  }
}
