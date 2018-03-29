import { Component, OnInit } from '@angular/core';
import { Device } from '../../models/device';
import { DeviceService } from '../../services/device.service';
@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css'],
  providers: [DeviceService]
})
export class DeviceComponent implements OnInit {
  devices: Device[];
  deviceAccess = [
    {id: 1, name: 'Allowed' },
    {id: 2, name: 'Not Allowed' },
    {id: 3, name: 'Attempted Login' },
    {id: 4, name: 'Not Defined' },
  ];
  constructor(private deviceServices: DeviceService) { }

  ngOnInit() {
    this.deviceServices.getAllDevice().subscribe((data: Device[]) => {
      this.devices = data;
    });
  }

}
