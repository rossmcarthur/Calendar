const fetchEvents = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/events'
  });
};

const fetchEvent = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/events/${id}`
  });
};

const createEvent = event => {
  return $.ajax({
    method: 'POST',
    url: '/api/events',
    data: { event }
  });
};

const updateEvent = id => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/events/${id}`,
    data: { event }
  });
};

const deleteEvent = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/events/${id}`
  });
};
