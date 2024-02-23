import React from 'react';
import FlightData from '../../data.json';
import { FlightInfo } from '../flight-info/flight-info';
import { MultiFlightInfo } from '../multi-flight-info/multi-flight-info';
import './all-flights.css';

const AllFlightsList = () => {
  return (
    <div>
      <h2 style={{margin: '40px', alignSelf: 'flex-start', display:'flex'}}>
        Available Flights
      </h2>
      {FlightData.map((flight, index) => (
        <div key={index} className="list-flights">
          {flight.flights ? (
            <MultiFlightInfo data={flight} />
          ) : (
            <FlightInfo data={flight} />
          )}
        </div>
      ))}
    </div>
  );
};

export default AllFlightsList;