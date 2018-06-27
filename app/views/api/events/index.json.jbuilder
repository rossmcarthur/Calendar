@events.each do |event|
  json.set! event.start_time do
    json.partial! 'event', event: event
  end
end
