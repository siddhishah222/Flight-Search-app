import React from 'react';
import './flight-search-info.css';
import flight from '../../assets/flight.jpg';

export const FlightSearchInfo = (props) => {
  const { origin, destination, date } = props.criteria;

  // Function to format the date
  const formatDateString = (dateString) => {
    const formattedDate = new Date(dateString);
    formattedDate.setDate(formattedDate.getDate() + 1);
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const dayOfWeek = daysOfWeek[formattedDate.getDay()];
    const dayOfMonth = formattedDate.getDate();
    const month = monthsOfYear[formattedDate.getMonth()];

    const getDayOfMonthWithSuffix = (day) => {
      if (day > 3 && day < 21) return `${day}th`;
      switch (day % 10) {
        case 1: return `${day}st`;
        case 2: return `${day}nd`;
        case 3: return `${day}rd`;
        default: return `${day}th`;
      }
    };

    return `${dayOfWeek}, ${getDayOfMonthWithSuffix(dayOfMonth)} ${month}`;
  };

  return (
    <section className="flight-search-info">
      <div>
        <img src={flight} width="40px" height="40px" alt="Flight" />
        <h3>{`${origin} to ${destination}`}</h3>
      </div>
      <p>{props.count} flights found &nbsp; {formatDateString(date)}</p>
    </section>
  );
};
