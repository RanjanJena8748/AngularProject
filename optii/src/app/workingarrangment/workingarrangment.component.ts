import { Component, OnInit } from '@angular/core';
import { Shift } from '../models/shift';
import { ShiftsService } from '../services/shifts.service';
import { WorkingarrangementService } from '../services/workingarrangement.service';
import { WorkingArrangement } from '../models/workingarrangement';

@Component({
  selector: 'app-workingarrangment',
  templateUrl: './workingarrangment.component.html',
  styleUrls: ['./workingarrangment.component.css'],
  providers: [WorkingarrangementService]
})
export class WorkingarrangmentComponent implements OnInit {
  shifts: Shift[];
  workingarrangements: WorkingArrangement[];
  constructor(private shiftService: ShiftsService, private workingarrangementService: WorkingarrangementService) { }

  ngOnInit() {
    this.shiftService.getAllShifts().subscribe((data: Shift[]) => {
      this.shifts = data;
    });
    this.workingarrangementService.getWorkingArrangement().subscribe((data: WorkingArrangement[]) => {
      this.workingarrangements = data;
    });
  }
}
