import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import '../App.css';

export default class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div  data-testid="planet-card" className='planet-card'>
        <h3 data-testid="planet-name">{planetName}</h3>
        <img className='img-planet' src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};
