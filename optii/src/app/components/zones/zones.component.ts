import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../services/location.service';
import { Location } from '../../models/location';

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.css'],
  providers: [LocationService]
})
export class ZonesComponent implements OnInit {
locations: Location[];
  constructor(private locationService: LocationService) { }

  ngOnInit() {
    this.locationService.getAllLocation().subscribe((data: Location[]) => {
      this.locations = data;
    });
  }
}
