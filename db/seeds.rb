require 'date'

Event.destroy_all

event1 = Event.create!(description: "Soccer practice", start: DateTime.new(2018, 1, 5, 4, 30), end: DateTime.new(2018, 1, 5, 5, 30))
event2 = Event.create!(description: "Math Exam", start: DateTime.new(2018, 1, 10, 10, 30), end: DateTime.new(2018, 1, 10, 11, 30))
event3 = Event.create!(description: "Fred's Birthday", start: DateTime.new(2018, 1, 16, 17, 15), end: DateTime.new(2018, 1, 16, 17, 45))
event4 = Event.create!(description: "Dinner Plans", start: DateTime.new(2018, 1, 22, 9, 20), end: DateTime.new(2018, 1, 22, 9, 50))
event5 = Event.create!(description: "Art Gallery Opening", start: DateTime.new(2018, 1, 27, 11, 30), end: DateTime.new(2018, 1, 27, 13, 30))
