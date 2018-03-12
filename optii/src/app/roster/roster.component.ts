import { Component, OnInit } from '@angular/core';
import { Shift } from '../models/shift';
import { ShiftsService } from '../services/shifts.service';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css'],
  providers: [ShiftsService]
})
export class RosterComponent implements OnInit {
shifts: Shift[];
  constructor(private shiftServices: ShiftsService) { }

  ngOnInit() {
    this.shiftServices.getAllShifts().subscribe(shift => this.shifts = shift);
  }

}
