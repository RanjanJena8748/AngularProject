import { Component, OnInit } from '@angular/core';
import { Shift } from '../../models/shift';
import { ShiftsService } from '../../services/shifts.service';
import { RosterService } from '../../services/roster.service';
import { Roster } from '../../models/roster';
import { isNull } from 'util';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css'],
})
export class RosterComponent implements OnInit {
  isRostered: boolean;
  selectedShift: string;
  shifts: Shift[];
  allRoster: Roster[];
  rostered: Roster[];
  onDutyUser: Roster[];
  offDutyUser: Roster[];
  constructor(private shiftServices: ShiftsService, private rosterServices: RosterService) {
  }

  ngOnInit() {
    this.shiftServices.getAllShifts().subscribe(shift => {
      this.shifts = shift;
      this.selectedShift = shift[0].ShiftId;
    });
    this.rosterServices.getRoster().subscribe((data) => {
    this.allRoster = data;
    this.rostered = this.allRoster.filter(ros => ros.isRoster === 1);
    this.isRostered = this.allRoster.some(abc => abc.isRoster === 1);
    });
  }
  addOnduty(item) {
    const index = this.offDutyUser.findIndex(a => a.UserId === item.UserId);
    this.offDutyUser.splice(index, 1);
    this.onDutyUser.push(item);
  }
  addOffduty(item) {
    const index = this.onDutyUser.findIndex(a => a.UserId === item.UserId);
    this.onDutyUser.splice(index, 1);
    this.offDutyUser.push(item);
  }
  AddUser() {
    this.isRostered = this.allRoster.some(abc => abc.isRoster === 1);
    if (this.isRostered) {
      this.onDutyUser = this.allRoster.filter(ros => ros.isRoster === 1 && ros.ShiftId === this.selectedShift);
      this.offDutyUser = this.allRoster.filter(ros => ros.isRoster === 0 && ros.ShiftId !== this.selectedShift);
    } else {
      this.onDutyUser = this.allRoster.filter(ros => ros.OnDuty === 1 && ros.ShiftId === this.selectedShift);
      this.offDutyUser = this.allRoster.filter(ros => ros.ShiftId !== this.selectedShift || isNull(ros.ShiftId));
    }
  }
  shiftChange() {
    console.log(this.selectedShift);
  }
  AddBulk() {
    this.offDutyUser.forEach(item => {
      this.onDutyUser.push(item);
    });
    this.offDutyUser.length = 0;
  }
  RemoveBulk() {
    this.onDutyUser.forEach(item => {
      this.offDutyUser.push(item);
    });
    this.onDutyUser.length = 0;
  }
  saveRoster() {
    this.onDutyUser.forEach(item => {
      this.rosterServices.saveRoster(item).subscribe(roster => {
        // this.allRoster = roster;
      });
    });
  }
  removeRoster(userid) {
    console.log(userid);
  }
}
