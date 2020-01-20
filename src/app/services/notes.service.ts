import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Note } from '../note';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { AuthenticationService } from '../services/authentication.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/do';

@Injectable()
export class NotesService {
  notes:Array<Note>=[];
  subject: BehaviorSubject<Array<Note>> = new BehaviorSubject(this.notes);

  fetchNotesFromServer() {
    return this.httpClient.get<Array<Note>>('http://localhost:3000/api/v1/notes', {headers : new HttpHeaders().set(`Authorization` ,
    `Bearer ${this.authService.getBearerToken()}`)
     }).subscribe(data => {
       this.notes=data;
       this.subject.next(this.notes);
     })

  }

  constructor(private httpClient: HttpClient, private authService: AuthenticationService) {
    this.fetchNotesFromServer();
  }

  getNotes(): Observable<Array<Note>> {
    return this.subject;
    // return this.httpClient.get<Array<Note>>('http://localhost:3000/api/v1/notes', {headers : new HttpHeaders().set(`Authorization` ,
    // `Bearer ${this.authService.getBearerToken()}`)
    //  });
}
  addNote(note: Note): Observable<Note> {
    return this.httpClient.post<Note>('http://localhost:3000/api/v1/notes', note,
          {headers : new HttpHeaders().set(`Authorization` ,
    `Bearer ${this.authService.getBearerToken()}`)
  }).do(newnote => {
       this.notes.push(newnote);
       this.subject.next(this.notes);
     })
 }

 editNoteById(noteId) {
  //  const y=this.notes.find(x => x.id===noteId);
  //  return y;
  const note=this.notes.find(note => note.id===noteId);
  return Object.assign({},note);
 }

 editNote(note) {
  return this.httpClient.put<Note>(`http://localhost:3000/api/v1/notes/${note.id}`, note,
  {headers : new HttpHeaders().set(`Authorization` ,
`Bearer ${this.authService.getBearerToken()}`)
}).do(editNote => {
  const note=this.notes.find(note => note.id===editNote.id);
  Object.assign(note,editNote);
  this.subject.next(this.notes);
})

 }
}
