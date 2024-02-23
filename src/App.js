import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import SearchForm from './container/search-form/search-form';
import FlightsGrid from './components/flights-grid/flights-grid';
import { getFlights } from './actions';
import AllFlights from './components/all-flights/all-flights';

function App(props) {
  const { getFlights, flights, routes } = props;

  useEffect(() => {
    getFlights();
  }, [getFlights]);

  const { origin, destination, departureDate, returnDate } = props.filters || {};

  return (
    <div className="App">
      <header className="App-header">
        <h2>Flight Search App</h2>
      </header>
      <section className="Main-container">
        <aside className="Search-section">
          <SearchForm/>
        </aside>
        <section className="Results-section">
          {!props.routes && (
            <div style={{width: '1080px'}}>
              <AllFlights/>
            </div>
          )}
          {routes && routes.onwards && (
            <FlightsGrid 
              flights={routes.onwards} 
              criteria={{origin, destination, date: departureDate}}
            />
          )}
          {routes && routes.return && (
            <FlightsGrid 
              flights={routes.return}
              criteria={{origin: destination, destination: origin, date: returnDate}}
            />
          )}
        </section>
      </section>   
    </div>
  );
}

const mapStateToProps = (state) => ({
  flights: state.flights,
  routes: state.routes,
  filters: state.filters
})

const mapDispatchToProps = {
  getFlights
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
