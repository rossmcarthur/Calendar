import React from 'react';
import { createEvent } from '../actions/event_actions';
import { connect } from 'react-redux';

class CreateEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      start_time: '',
      end_time: ''
    };
    this.openingDate = String(this.props.date).slice(0, 16);
    this.closingDate = String(this.props.date).slice(24);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    const { description } = this.state;
    const start_time = new Date(this.openingDate + this.state.start_time + ":00");
    const end_time = new Date(this.openingDate + this.state.end_time + ":00");
    e.preventDefault();
    this.props.createEvent({ description, start_time, end_time});
    this.setState({
      description: '',
      start_time: '',
      end_time: ''
    });
    this.props.closeModal();
    e.stopPropagation();
  }

  render() {
    return (
      <div>
        <form>
          <label>{this.props.day}&nbsp;{this.props.month}</label>
          <label>Description:</label>
            <input
              type='textarea'
              value={this.state.description}
              onChange={this.update('description')}
              />
          <label>Start time:</label>
          <input
            type='time'
            value={this.state.start_time}
            onChange={this.update('start_time')}
            />
        <label>End Time:</label>
        <input
          type='time'
          value={this.state.end_time}
          onChange={this.update('end_time')}
          />
        <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }

}

const mapDispatchToProps = dispatch => {
  return {
    createEvent: event => dispatch(createEvent(event))
  };
};

export default connect(null, mapDispatchToProps)(CreateEvent);
