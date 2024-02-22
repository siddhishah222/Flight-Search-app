export const transformFlightDates = (flights) => {
  return flights.map(flight => {
    return {
      ...flight,
      arrivalTimeStamp: new Date(`${flight.date} ${flight.arrivalTime}`).getTime(),
      departureTimeStamp: new Date(`${flight.date} ${flight.departureTime}`).getTime()
    }
  })
};

export const getTimeDifferece = (timeDiff) => {
  const timeInHrs = String(Math.floor((timeDiff) / 3600000)).padStart(2, '0');
  const timeInMins = String(Math.round(((timeDiff % 86400000) % 3600000) / 60000)).padStart(2, '0');
  return `${timeInHrs}h ${timeInMins}m`;
}
