import { Component, OnInit } from '@angular/core';
import { ShiftsService } from '../../services/shifts.service';
import { Shift } from '../../models/shift';
import { ZoneService } from '../../services/zone.service';
import { Zone } from '../../models/zone';
import { Roster } from '../../models/roster';
import { RosterService } from '../../services/roster.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  shifts: Shift[];
  selectedShift: string;
  zones: Zone[];
  rosteredUser: Roster[];
  allUser: Roster[];
  constructor(private shiftService: ShiftsService, private zoneService: ZoneService, private rosterService: RosterService) { }

  ngOnInit() {
    this.shiftService.getAllShifts().subscribe((data: Shift[]) => {
      this.shifts = data.filter(shift => {
        return shift.Active === true;
      });
      this.selectedShift = '0';
    });
    this.zoneService.getZonesAll().subscribe((data: Zone[]) => {
      this.zones = data.filter(zone => {
        return zone.Active === true;
      });
    });
    this.rosterService.getRoster().subscribe((data: [Roster]) => {
      this.allUser = data;
    });
  }
  shiftChange() {
    this.rosteredUser = this.allUser.filter(data => {
      return data.isRoster === 1 && data.ShiftId === this.selectedShift;
    });
  }
}
