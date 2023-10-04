import React from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'; // Import the styles
import './CalendarStyles.css';

const localizer = momentLocalizer(moment);

const events = [
  {
    title: "Men of color mixer in the commons",
    start: "2023-09-17T16:00:00",
    end: "2023-09-17T19:00:00"
  },
  {
    title: "1st GBM at 7pm in the ram lounge",
    start: "2023-09-20T19:00:00",
    end: "2023-09-20T21:00:00"
  },
  {
    title: "DMC Linkedin/Internship Workshop",
    start: "2023-09-28T19:00:00",
    end: "2023-09-28T21:00:00"
  },
  {
    title: "2nd GBM @7pm @Stem Building room 218 and 216",
    start: "2023-10-18T19:00:00",
    end: "2023-10-18T21:00:00"
  },
  {
    title: "Jacob Chance Kickball",
    start: "2023-10-28T11:00:00",
    end: "2023-10-28T12:30:00"
  },
  {
    title: "3rd GBM at 7pm in the Rams Lounge",
    start: "2023-11-15T19:00:00",
    end: "2023-11-15T21:00:00"
  },
  {
    title: "Fall break",
    start: "2023-11-20T00:00:00",
    end: "2023-11-25T00:00:00"
  },
  {
    title: "5th GBM at 7pm in the Rams Lounge",
    start: "2023-12-06T19:00:00"
  },
  {
    title: "Finals start",
    start: "2023-12-12T00:00:00",
    end: "2023-12-19T00:00:00"
  },
  {
    title: "Winter break",
    start: "2023-12-20T00:00:00"
  }
];


const formatEvents = (events) => {
  return events.map((event) => ({
    ...event,
    start: new Date(event.start),
    end: new Date(event.end || event.start)
  }));
};

// Custom event rendering
const EventComponent = ({ event }) => {
  return (
    <div className="custom-event">
      <span className="event-title">{event.title}</span>
    </div>
  );
};

const CalendarWrapper = () => {
  return (
    <div className="Calendar">
      <Calendar
        localizer={localizer}
        events={formatEvents(events)}
        defaultDate={new Date()}
        defaultView={Views.MONTH}
        style={{ height: '100vh', width: '90%', margin: 'auto'}}
        components={{
          event: EventComponent,
        }}
      />
    </div>
  );
};

export default CalendarWrapper;
