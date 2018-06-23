import React from 'react';
import { fetchEvents } from '../actions/event_actions';



class CalendarIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: null
    };
  }

  componentDidMount() {
    fetchEvents().then( events => {
      this.setState({ events });
    });
  }

  render() {
    
  }

}
