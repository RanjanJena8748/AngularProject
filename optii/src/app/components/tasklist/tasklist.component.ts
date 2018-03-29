import { Component, OnInit } from '@angular/core';
import { ShiftsService } from '../../services/shifts.service';
import { Shift } from '../../models/shift';
import { TaskList } from '../../models/tasklist';
import { TasklistService } from '../../services/tasklist.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css'],
  providers: [TasklistService]
})
export class TasklistComponent implements OnInit {
  userid = 0;
  shifts: Shift[];
  tasklists: TaskList[] = new Array();
  tasklist: TaskList = new TaskList();
  constructor(private shiftService: ShiftsService, private tasklistService: TasklistService) {
    this.tasklists = new Array<TaskList>();
  }

  ngOnInit() {
    this.shiftService.getAllShifts().subscribe((data: Shift[]) => {
      this.shifts = data;
    });
    this.tasklistService.getTasklist().subscribe((data: TaskList[]) => {
      this.tasklists = data;
    });
  }
}
