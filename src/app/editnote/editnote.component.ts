import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotesService } from '../services/notes.service';
import { Note } from '../note';

@Component({
  selector: 'app-editnote',
  templateUrl: './editnote.component.html',
  styleUrls: ['./editnote.component.css']
})
export class EditnoteComponent implements OnInit {

  note:Note;

  constructor(private dialogRef:MatDialogRef<EditnoteComponent>,@Inject(MAT_DIALOG_DATA)private data:any,private noteService:NotesService) { }

  ngOnInit() {
    this.note=this.noteService.editNoteById(this.data.noteId);
  }

  saveNote() {
    this.noteService.editNote(this.note).subscribe((data) => {
      this.dialogRef.close();

    })

  }

}
