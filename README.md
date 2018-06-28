[https://spot-calendar.herokuapp.com/#/](https://spot-calendar.herokuapp.com/#/)

# FRONT END
## Must Have Specs
- [x]The UI should have one month hard coded view (Pick any month)
- [x]Ignore users/login, just have one hardcoded user
- [x]Click on a day box, and be able to create a new event on that day which gets sent to the backend on clicking submit.
   - [x]The form should have start time, end time, description and submit.
   - [x]Once submit is clicked the form should disappear.
   - [x]Event should now appear in that day’s box.
   - [x]Events cannot span multiple days. Must start and end the same day.
- [x]Show all events the user has on their calendar.
- [x]The UI should have 4 rows of 7 boxes (simple case of a 28 day month).
- [x]The application should communicate with an API backend using JSON. Don’t spend a lot of time on the UI making it look beautiful; just make it functional.

### Optional Specs (Not required; bonus points available for inclusion of one or more features)
- [x]Switch between months
- [x]Week or day view (ONLY DAY VIEW)
- [ ]Handle events spanning multiple days
- [x]Handle too many events to fit in your box UI on a given day.
- [x]You should be able to update/delete events. How you implement this UX is up to you.
- [x]The UI should have 5 rows of 7 boxes with the correct date on the correct days.

#### Specs I added
- [x] Does not allow overlapping event booking.
- [x] Does not allow events with an end time that is earlier than the start time.
- [x] Shows errors on form when an event does not get saved to database.

# BACK END
Build the backend of the calendar application. The API for the calendar should be the following:

### Events (Minimum Required API)
●     POST /events
  - [x] Should create an event

●     GET /events
  - [x]Should return all events

### Events (Optional API. Not required; bonus points available)
●     DELETE /events/:id
  - [x]Should delete an event
●     PUT /events/:id
  - [x]     Should update an existing event
