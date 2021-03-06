import { Component, OnInit } from '@angular/core';
import { Note } from '../../models/note';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  providers: [NoteService]
})
export class NotesComponent implements OnInit {
notes: Note[];
  constructor(private noteservice: NoteService) { }

  ngOnInit() {
    return this.noteservice.getNotes().subscribe(res => this.notes = res);
  }

}
