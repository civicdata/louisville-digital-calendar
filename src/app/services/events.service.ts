import { Injectable } from '@angular/core';
import { EventModel } from '../models/event.model';

@Injectable()
export class EventsService {
  events: EventModel[] = [];

  constructor() { }

  getMockEvents(): Promise<any> {
    return Promise.resolve()
    .then(() => {
      return [];
    });
  }

}
