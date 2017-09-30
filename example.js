let events = {
  "events": [{
    "group_sys_name": "code-louisville",
    "date": "Monday 1/1/2017", // from ical
    "event_name": "our event", // from ical
    "event_description": "here is what we're doing", // from ical
    "event_location": "1234 broadway" // from ical
  },
  {
    "group_sys_name": "cda",
    "date": "Tuesday 1/2/2017", // from ical
    "event_name": "our event", // from ical
    "event_description": "here is what we're doing", // from ical
    "event_location": "1234 broadway" // from ical
  }]
};

// then, separately:

let groups = {
  "groups": [{
    "code-louisville": {
      "site": "codelouisville.org",
      "icon-url": "../assets/code-louiville.png"
    }
  },
  {
    "cda": {
      "site": "civicdataalliance.org",
      "icon-url": "../assets/cda.png"
    }
  }
  ]
};
