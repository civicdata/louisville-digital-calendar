import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { EventComponent } from './components/event/event.component';
import { GroupComponent } from './components/group/group.component';

import { EventsService } from './services/events.service';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    EventComponent,
    GroupComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
