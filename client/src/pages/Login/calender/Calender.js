import React, { useState } from 'react'

import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";

import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import '../CSS/calender.css'



const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {   id:1,
        title: "Insider Series 1",
        allDay: true,
        start: new Date(2023, 5, 20 ),
        end: new Date(2023, 5, 20),
        
        
    },
    {   id:2,
        title: "Insider Series 2",
        start: new Date(2023,6, 23 ),
        end: new Date(2023, 6, 23),
    },
    {   id:3,
        title: "Bootcamp Start",
        start: new Date(2023, 5,5),
        end: new Date(2023, 5, 5 ),
    },
    {   id:4,
      title: "Insider 3",
      start: new Date(2023, 7,18),
      end: new Date(2023, 7, 18 ),
  },
];




const Calender = ({eventid}) => {

  const [allEvents, setAllEvents] = useState(events);

  const handleEventClick = (event) => {
    const eventId = event.id;
    eventid(eventId)
  };

      
  return (
    <div className='calender'>
       <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" onSelectEvent={handleEventClick} />
       
    </div>

    
  )
}


export default Calender