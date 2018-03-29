import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';
import { CheckList } from '../../models/job';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
  providers: [JobService]
})
export class JobsComponent implements OnInit {
allChecklist: CheckList[];

  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.jobService.getAllChecklist().subscribe((data: CheckList[]) => {
      this.allChecklist = data;
    });
  }
  parentChecklist(checkList) {
    return checkList.filter(chk => {
      return chk.ParentId == null;
    });
  }
}
