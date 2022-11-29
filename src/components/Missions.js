import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionsCard from './MissionCard';

export default class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <section className='mission'>
        {missions.map((mission) => (
          <MissionsCard
            key={ mission.name }
            name={ mission.name }
            year={ mission.year }
            country={ mission.country }
            destination={ mission.destination }
          />
        ))}
        </section>
      </div>
    );
  }
}
