import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { RosterComponent } from './roster/roster.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { WorklogComponent } from './worklog/worklog.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { SessionComponent } from './session/session.component';
import { ViewnotesComponent } from './viewnotes/viewnotes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import { ZonesComponent } from './zones/zones.component';
import { WorkingarrangmentComponent } from './workingarrangment/workingarrangment.component';
import { JobsComponent } from './jobs/jobs.component';
import { LevelofcleanlinessComponent } from './levelofcleanliness/levelofcleanliness.component';
import { TranslationsComponent } from './translations/translations.component';
import { InterruptComponent } from './interrupt/interrupt.component';
import { NotesComponent } from './notes/notes.component';
import { DeviceComponent } from './device/device.component';
import { PausereasonsComponent } from './pausereasons/pausereasons.component';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TemplatesComponent } from './templates/templates.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ShiftsService } from './services/shifts.service';
import { UserService } from './services/user.services';
import { ZoneService } from './services/zone.service';
import { ChildchecklistPipe } from './pipes/checklist.pipe';
import { RosterService } from './services/roster.service';
import { UniquePipe } from './pipes/unique.pipe';

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
  { path: 'roster', component: RosterComponent },
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
    RouterModule.forRoot(appRoutes,
      { enableTracing: true, useHash: true } // <-- debugging purposes only
    )
  ],

  providers: [ShiftsService, UserService, ZoneService, RosterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
