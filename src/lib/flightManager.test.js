import { findPaths } from './flightManager';
import mockFlights from './../data.json';

describe('Flights calculation algorithm', () => {

  it('should find available direct flights from Pune to Mumbai ', () => {
    const criteria = {
      date: "2024/03/10",
      destination: "Mumbai (BOM)",
      origin: "Pune (PNQ)"
    }
    expect(findPaths({flights: mockFlights, criteria }).nonStopFlights.length).toBe(1);
    expect(findPaths({flights: mockFlights, criteria }).nonStopFlights[0].flightNo).toBe('TW-119');
  });

  it('should find available direct flights from Mumbai to Delhi ', () => {
    const criteria = {
      date: "2024/04/26",
      destination: "Delhi (DEL)",
      origin: "Mumbai (BOM)"
    }
    expect(findPaths({flights: mockFlights, criteria }).nonStopFlights.length).toBe(1);
    expect(findPaths({flights: mockFlights, criteria }).nonStopFlights.find(flight=>flight.flightNo === '6E-132').flightNo).toBe('6E-132');
  });

  it('should find available direct flights from Delhi to Pune ', () => {
    const criteria = {
      date: "2024/03/21",
      destination: "Pune (PNQ)",
      origin: "Delhi (DEL)"
    }
    expect(findPaths({flights: mockFlights, criteria }).nonStopFlights.length).toBe(2);
    expect(findPaths({flights: mockFlights, criteria }).nonStopFlights.find(flight=>flight.flightNo === 'AI-104').flightNo).toBe('AI-104');
  }); 
  
  it('should find available direct flights from Delhi to Mumbai', () => {
    const criteria = {
      date: "2024/07/04",
      destination: "Mumbai (BOM)",
      origin: "Delhi (DEL)"
    }
    expect(findPaths({flights: mockFlights, criteria }).nonStopFlights.length).toBe(1);
    expect(findPaths({flights: mockFlights, criteria }).nonStopFlights.find(flight=>flight.flightNo === 'AI-131').flightNo).toBe('AI-131');
  });

  it('should find available multi airline flights from Pune to Delhi ', () => {
    const criteria = {
      date: "2024/03/01",
      destination: "Delhi (DEL)",
      origin: "Pune (PNQ)"
    }
    const searchFn = (route) => {
      return route.flights.find(flight => flight.flightNo === 'SJ-106') && route.flights.find(flight => flight.flightNo === 'SJ-107');
    }

    expect(findPaths({flights: mockFlights, criteria }).multiStopFlights.findIndex(searchFn) >=0).toBe(true);
  });

  it('should find available multi airline flights from Mumbai to Delhi ', () => {
    const criteria = {
      date: "2024/03/21",
      destination: "Delhi (DEL)",
      origin: "Mumbai (BOM)"
    }
    const searchFn = (route) => {
      return route.flights.find(flight => flight.flightNo === 'AI-133') && route.flights.find(flight => flight.flightNo === 'AI-134');
    }

    expect(findPaths({flights: mockFlights, criteria }).multiStopFlights.findIndex(searchFn) >=0).toBe(true);
  });

  it('should find available multi airline flights from Delhi to Pune ', () => {
    const criteria = {
      date: "2024/05/01",
      destination: "Pune (PNQ)",
      origin: "Delhi (DEL)"
    }
    const searchFn = (route) => {
      return route.flights.find(flight => flight.flightNo === '6E-101') && route.flights.find(flight => flight.flightNo === '6E-104');
    }

    expect(findPaths({flights: mockFlights, criteria }).multiStopFlights.findIndex(searchFn) >=0).toBe(true);
  });

  it('should find available multi airline flights from Delhi to Mumbai ', () => {
    const criteria = {
      date: "2024/04/01",
      destination: "Mumbai (BOM)",
      origin: "Delhi (DEL)"
    }
    const searchFn = (route) => {
      return route.flights.find(flight => flight.flightNo === 'AI-111') && route.flights.find(flight => flight.flightNo === 'AI-121');
    }

    expect(findPaths({flights: mockFlights, criteria }).multiStopFlights.findIndex(searchFn) >=0).toBe(true);
  });
})


