import React, { Component } from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';
import '../App.css';

export default class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <section className="planet">
          {Planets.map((planet) => (
            <PlanetCard
              key={planet.name}
              planetName={planet.name}
              planetImage={planet.image}
            />
          ))}
        </section>
      </div>
    );
  }
}
