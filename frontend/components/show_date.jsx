import React from 'react';
import moment from 'moment';

const ShowDate = ({ day, events, date }) => {
  const showEvents = events.map( (event, i) => {
        if (moment(date).format('MMM D YYYY') ===
            moment(event.start_time).format('MMM D YYYY')) {
              return (
                <div key={i}>
                  <h1>{event.description}</h1>
                </div>
              );
        }
      });
  return (
    <div className='show-date-container'>
      <h1>{day}</h1>
      <h1>{showEvents}</h1>
    </div>
  );
};

export default ShowDate;
