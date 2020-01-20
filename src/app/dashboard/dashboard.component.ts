import { Component, OnInit} from '@angular/core';
// import {Note} from '../note';
// import { NotesService } from '../services/notes.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // errMessage: string;
  //   id_check: number;
  //   note: Note = new Note();
  //   notes: Array<Note> = [];
    // collection: Array<Note> = [];

    // constructor(private notesService: NotesService) {
    //   for (let i = 1; i < 10; i++ ) {
    //     this.collection.push(this.note[i]);
    //   }
    // }

  ngOnInit() {
  //    this.note = new Note();
  //    this.notesService.getNotes().subscribe(
  //    data => {
  //      console.log(data);
  //      this.notes = data;
  //    },
  //    error => {
  //      // console.log(error);
  //      this.errMessage = error.message;
  //   }
  //  );
  }

//  takeNote() {
//   if ( ( this.note.title || this.note.text ) !== '') {
//    this.notesService.addNote(this.note).subscribe(
//      data => {
//         this.notes.push(data);
//       },
//      error => {
//        this.errMessage = error.message;
//       }
//    );
//     } else {
//     this.errMessage = 'Title and Text both are required fields';
//       console.log(this.errMessage);
//   }
// }
}
