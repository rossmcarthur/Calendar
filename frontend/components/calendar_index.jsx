import React from 'react';
import { fetchEvents } from '../actions/event_actions';
import { connect } from 'react-redux';

class CalendarIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: null
    };
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    debugger
    return (
      <div>
        <h1> HEY!!</h1>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    events: state.entities.events
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchEvents: () => dispatch(fetchEvents())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarIndex);
