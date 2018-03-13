import { Component, OnInit } from '@angular/core';
import { CleannesslevelService } from '../services/cleannesslevel.service';
import { Cleannesslevel } from '../models/cleannesslevel';

@Component({
  selector: 'app-levelofcleanliness',
  templateUrl: './levelofcleanliness.component.html',
  styleUrls: ['./levelofcleanliness.component.css'],
  providers: [CleannesslevelService]
})
export class LevelofcleanlinessComponent implements OnInit {
  cleanlinesslevel: Cleannesslevel[];
  constructor(private cleannesslevelservice: CleannesslevelService) { }

  ngOnInit() {
    return this.cleannesslevelservice.getCleannessLevel().subscribe((data: Cleannesslevel[]) => {
        this.cleanlinesslevel = data;
      });
  }
}
