import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { EventModel } from '../../models/event.model';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  events: EventModel[] = [];


  constructor(private _es: EventsService) { }

  ngOnInit() {
  }

}
