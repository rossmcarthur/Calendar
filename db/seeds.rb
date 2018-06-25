require 'date'

Event.destroy_all

event1 = Event.create!(description: "Soccer practice", start_time: DateTime.new(2018, 6, 1, 4, 30), end_time: DateTime.new(2018, 6, 1, 5, 30))
event2 = Event.create!(description: "Math Exam", start_time: DateTime.new(2018, 6, 10, 10, 30), end_time: DateTime.new(2018, 6, 10, 11, 30))
event3 = Event.create!(description: "Fred's Birthday", start_time: DateTime.new(2018, 6, 16, 17, 15), end_time: DateTime.new(2018, 6, 16, 17, 45))
event4 = Event.create!(description: "Dinner Plans", start_time: DateTime.new(2018, 6, 22, 9, 20), end_time: DateTime.new(2018, 6, 22, 9, 50))
event5 = Event.create!(description: "Art Gallery Opening", start_time: DateTime.new(2018, 6, 27, 11, 30), end_time: DateTime.new(2018, 6, 27, 13, 30))
