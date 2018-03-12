import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Note } from '../models/note';

@Injectable()
export class NoteService {
notes: Note[];
  constructor(private _http: Http) { }
  getNotes() {
    const _url = 'http://localhost:3000/api/notes';
    return this._http.get(_url).map(res => res.json());
  }

}
