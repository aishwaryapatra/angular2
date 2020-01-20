import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { RouterService } from '../services/router.service';
import { EditnoteComponent } from '../editnote/editnote.component';

@Component({
  selector: 'app-editnoteview',
  templateUrl: './editnoteview.component.html',
  styleUrls: ['./editnoteview.component.css']
})
export class EditnoteviewComponent implements OnInit {

  constructor(private dialog:MatDialog,private activatedRoute:ActivatedRoute,private routerService:RouterService) { 
    const id= +this.activatedRoute.snapshot.paramMap.get('noteId');
    this.dialog.open(EditnoteComponent,{
      data: {
        noteId:id
      }
    }).afterClosed().subscribe(result => {
      this.routerService.back();

    })
  }

  ngOnInit() {
  }

}
