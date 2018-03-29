import { Component, OnInit } from '@angular/core';
import { QrcodeService } from '../../services/qrcode.service';
import { QrCode } from '../../models/qrcode';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css'],
  providers: [QrcodeService]
})
export class QrcodeComponent implements OnInit {
  qrcodes: QrCode[];
  showpopup = true;
  reasonname: string;
  constructor(private qrcodeService: QrcodeService) { }

  ngOnInit() {
    this.qrcodeService.getAllQrcode().subscribe((data: QrCode[]) => {
      this.qrcodes = data;
    });
  }
  showEditPopup() {
  }
  ranjan(st) {
    this.reasonname = this.qrcodes.filter(data => {
      return data.ReasonId === st;
    })[0].Reasons;
    // console.log(reasonname);
  }
}
