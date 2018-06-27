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
        this.props.clearEventErrors();
      }
    );
    e.stopPropagation();
  }

  renderErrors() {

    if (this.props.errors.length > 0) {
      return (
        <ul className='errors'>
          {this.props.errors.map ((error, i) => {
            return <li className='error-message' key={i}>{error}</li>;
          })}
        </ul>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <form className='create-edit-form'>
        <label>{this.props.day}&nbsp;{this.props.month}</label>
        {this.renderErrors()}
        <div className='create-edit-content'>
          <div className='create-edit-times'>
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
          </div>
          <label className='create-edit-label'>Description:</label>
            <textarea
              className='form-description-box'
              type='textarea'
              value={this.state.description}
              onChange={this.update('description')}
              />
          </div>
          <button className='create-edit-submit' onClick={this.handleSubmit}>Submit</button>
        </form>
    );
  }

}

export default EventForm;
