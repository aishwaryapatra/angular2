import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common'


@Injectable()
export class RouterService {

  constructor(private router: Router,private location:Location) { }

  routeToDashboard() {
    this.router.navigate(['dashboard']);
  }

  routeToLogin() {
    this.router.navigate(['login']);
  }

  routeToEdit(noteId) {
    this.router.navigate(['dashboard', {
      outlets: {
        noteEditOutlet:['note',noteId,'edit']
      }
    }])
  }

  back() {
    this.location.back();
  }
}
