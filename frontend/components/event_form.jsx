import React from 'react';
import moment from 'moment';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.event;
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
    const { description, id } = this.state;
    let start_time = new Date(this.openingDate + this.state.start_time + ":00");
    let end_time = new Date(this.openingDate + this.state.end_time + ":00");
    start_time = moment(start_time).toISOString();
    end_time = moment(end_time).toISOString();
    e.preventDefault();
    this.props.formAction({ description, start_time, end_time, id })
    .then(() => {
        this.setState({
          description: '',
          start_time: '',
          end_time: ''
        });
        this.props.closeModal();
      }
    );
    e.stopPropagation();
  }

  renderErrors() {
    return (
      <ul className='errors'>
        {this.props.errors.map ((error, i) => {
          <li className='error-message' key={i}>{error}</li>;
        })}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <form>
          {this.renderErrors()}
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

export default EventForm;
