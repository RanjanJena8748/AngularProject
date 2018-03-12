import { Component, OnInit } from '@angular/core';
import { InterruptreasonService } from '../services/interruptreason.service';
import { InterruptReason } from '../models/interruptreason';

@Component({
  selector: 'app-interrupt',
  templateUrl: './interrupt.component.html',
  styleUrls: ['./interrupt.component.css'],
  providers: [InterruptreasonService]
})
export class InterruptComponent implements OnInit {
  interruptreasons: InterruptReason[];
  constructor(private interruptreasonservice: InterruptreasonService) { }

  ngOnInit() {
    return this.interruptreasonservice.getInterruptReasons().subscribe(res => this.interruptreasons = res);
  }

}
