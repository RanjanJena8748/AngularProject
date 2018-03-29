import { Component, OnInit } from '@angular/core';
import { PausereasonService } from '../../services/pausereason.service';
import { PauseReason } from '../../models/pausereason';

@Component({
  selector: 'app-pausereasons',
  templateUrl: './pausereasons.component.html',
  styleUrls: ['./pausereasons.component.css'],
  providers: [PausereasonService]
})
export class PausereasonsComponent implements OnInit {
  pausereasons: PauseReason;
  constructor(private pausereasonservice: PausereasonService) { }

  ngOnInit() {
    return this.pausereasonservice.getpausereasons().subscribe(res => this.pausereasons = res);
  }

}
