import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { RosterComponent } from './components/roster/roster.component';
import { AssignmentComponent } from './components/assignment/assignment.component';
import { TasklistComponent } from './components/tasklist/tasklist.component';
import { WorklogComponent } from './components/worklog/worklog.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { SessionComponent } from './components/session/session.component';
import { ViewnotesComponent } from './components/viewnotes/viewnotes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersComponent } from './components/users/users.component';
import { RolesComponent } from './components/roles/roles.component';
import { ZonesComponent } from './components/zones/zones.component';
import { WorkingarrangmentComponent } from './components/workingarrangment/workingarrangment.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { LevelofcleanlinessComponent } from './components/levelofcleanliness/levelofcleanliness.component';
import { TranslationsComponent } from './components/translations/translations.component';
import { InterruptComponent } from './components/interrupt/interrupt.component';
import { NotesComponent } from './components/notes/notes.component';
import { DeviceComponent } from './components/device/device.component';
import { PausereasonsComponent } from './components/pausereasons/pausereasons.component';
import { QrcodeComponent } from './components/qrcode/qrcode.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { ShiftsService } from './services/shifts.service';
import { UserService } from './services/user.services';
import { ZoneService } from './services/zone.service';
import { ChildchecklistPipe } from './pipes/checklist.pipe';
import { RosterService } from './services/roster.service';
import { UniquePipe } from './pipes/unique.pipe';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import {FlashMessageModule} from 'angular-flash-message';

const appRoutes: Routes = [
  { path: 'assingment', component: AssignmentComponent },
  { path: 'tasklist', component: TasklistComponent },
  {
    path: 'worklog',
    component: WorklogComponent,
    data: { title: 'worklog' }
  },
  {
    path: 'configuration', component: ConfigurationComponent,
    // canActivateChild: true,
    children: [
      {path: '', redirectTo: 'users', pathMatch: 'full'},
      { path: 'users', component: UsersComponent },
      { path: 'roles', component: RolesComponent },
      { path: 'workingarrangment', component: WorkingarrangmentComponent },
      { path: 'zones', component: ZonesComponent },
      { path: 'jobs', component: JobsComponent },
      { path: 'levelofcleanliness', component: LevelofcleanlinessComponent },
      { path: 'translations', component: TranslationsComponent },
      { path: 'interrupt', component: InterruptComponent },
      { path: 'notes', component: NotesComponent },
      { path: 'device', component: DeviceComponent },
      { path: 'pausereasons', component: PausereasonsComponent },
      { path: 'qrcode', component: QrcodeComponent }
    ]
  },
  { path: 'session', component: SessionComponent },
  { path: 'viewnotes', component: ViewnotesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'viewnotes', component: ViewnotesComponent },
  { path: 'session', component: SessionComponent },
  { path: 'roster', component: RosterComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    redirectTo: '/roster',
    pathMatch: 'full'
  },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RosterComponent,
    AssignmentComponent,
    TasklistComponent,
    WorklogComponent,
    ConfigurationComponent,
    SessionComponent,
    ViewnotesComponent,
    DashboardComponent,
    UsersComponent,
    RolesComponent,
    ZonesComponent,
    WorkingarrangmentComponent,
    JobsComponent,
    LevelofcleanlinessComponent,
    TranslationsComponent,
    InterruptComponent,
    NotesComponent,
    DeviceComponent,
    PausereasonsComponent,
    QrcodeComponent,
    PagenotfoundComponent,
    TemplatesComponent,
    LoginComponent,
    AdminComponent,
    ChildchecklistPipe,
    UniquePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    FlashMessageModule,
    RouterModule.forRoot(appRoutes,
      { enableTracing: true, useHash: true } // <-- debugging purposes only
    )
  ],

  providers: [ShiftsService, UserService, ZoneService, RosterService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
