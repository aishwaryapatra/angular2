import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {LoginComponent} from './login/login.component';
import {HeaderComponent} from './header/header.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { NotesService } from './services/notes.service';
import { RouterService } from './services/router.service';
import { CanActivateRouteGuard } from './can-activate-route.guard';
import { AuthenticationService } from './services/authentication.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';


const routes: Routes = [
    { path: '', component : DashboardComponent,
      canActivate : [CanActivateRouteGuard] },
    { path : 'login', component: LoginComponent },
    { path : 'dashboard', component : DashboardComponent }
    // Will be activated by the login-guard to check user is authorised to access admin page.
];
@NgModule({
  declarations: [AppComponent, HeaderComponent, LoginComponent, DashboardComponent],
  imports: [RouterModule.forRoot(routes),
  BrowserModule,
  BrowserAnimationsModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  FormsModule,
  MatFormFieldModule,
  ReactiveFormsModule,
  HttpClientModule,
  MatToolbarModule,
  MatExpansionModule],
  providers: [NotesService, RouterService, CanActivateRouteGuard, AuthenticationService],
  bootstrap: [AppComponent ]
})

export class AppModule { }
