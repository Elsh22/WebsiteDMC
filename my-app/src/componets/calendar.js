import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'; // Import the styles

const localizer = momentLocalizer(moment);

const events = [
  {
    title: "Academic Committee Chair Meeting @ 4:30 pm MOC STEM Study Session",
    start: "2023-04-04T16:30:00",
  },
  {
    title: "E-Board Meeting @ 7:15pm",
    start: "2023-04-05T19:15:00",
  },
  {
    title: "PD Committee Chair Meeting @ 5 pm",
    start: "2023-04-06T17:00:00",
  },
  {
    title: "Academic Committee Chair Meeting @ 4:30 pm",
    start: "2023-04-06T16:30:00",
  },
  {
    title: "DMC Agenda Meeting @ 11 am (No Mentoring because of Spring break for them)",
    start: "2023-04-07T11:00:00",
  },
  {
    title: "Academic Committee Chair Meeting @ 4:30 pm MOC STEM Study Session",
    start: "2023-04-11T16:30:00",
  },
  {
    title: "E-Board Meeting @ 7:15pm",
    start: "2023-04-12T19:15:00",
  },
  {
    title: "Academic Committee Chair Meeting @ 4:30pm",
    start: "2023-04-13T16:30:00",
  },
  {
    title: "Suit Day @ 5pm",
    start: "2023-04-13T17:00:00",
    backgroundColor: "orange",
  },
  {
    title: "DMC Agenda Meeting @ 11 am",
    start: "2023-04-14T11:00:00",
  },
  {
    title: "Benford Mentoring @ 2-3:15pm",
    start: "2023-04-14T14:00:00",
    end: "2023-04-14T15:15:00",
    backgroundColor: "orange",
  },
  {
    title: "Academic Committee Chair Meeting @ 4:30 pm MOC STEM Study Session",
    start: "2023-04-18T16:30:00",
  },
  {
    title: "3rd GBM @ 7pm",
    start: "2023-04-19T19:00:00",
    backgroundColor: "orange",
  },
  {
    title: "PD Committee Chair Meeting @ 5 pm",
    start: "2023-04-20T17:00:00",
  },
  {
    title: "Academic Committee Chair Meeting @ 4:30pm",
    start: "2023-04-20T16:30:00",
  },
  {
    title: "DMC Agenda Meeting @ 11 am",
    start: "2023-04-21T11:00:00",
  },
  {
    title: "Benford Mentoring @ 2-3:15pm",
    start: "2023-04-21T14:00:00",
    end: "2023-04-21T15:15:00",
  },
  {
    title: "Academic Committee Chair Meeting @ 4:30 pm MOC STEM Study Session",
    start: "2023-04-25T16:30:00",
  },
  {
    title: "E-Board Meeting @ 7:15pm",
    start: "2023-04-26T19:15:00",
  },
  {
    title: "PD Committee Chair Meeting @ 5 pm",
    start: "2023-04-27T17:00:00",
  },
  {
    title: "Academic Committee Chair Meeting @ 4:30pm",
    start: "2023-04-27T16:30:00",
  },
  {
    title: "DMC Agenda Meeting @ 11 am",
    start: "2023-04-28T11:00:00",
  },
  {
    title: "Benford Mentoring @ 2-3:15pm",
    start: "2023-04-28T14:00:00",
    end: "2023-04-28T15:15:00",
  },
];

function getDate(dayString) {
    const today = new Date();
    const year = today.getFullYear().toString();
    let month = (today.getMonth() + 1).toString();

    if (month.length === 1) {
      month = "0" + month;
    }

    return dayString.replace("YEAR", year).replace("MONTH", month);
}

const CalendarWrapper = () => {
  return (
    <div className="Calendar">
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events.map((event) => ({
          ...event,
          start: new Date(event.start),
          end: new Date(event.start)
        }))}
        style={{ height: '100vh' }}
      />
    </div>
  );
};

export default CalendarWrapper;
