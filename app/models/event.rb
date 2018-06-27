class Event < ApplicationRecord
  validates :description, :start_time, :end_time, :description, presence: true
  validate :does_not_start_before_end

  def start_before_end
  Event
    .where(':start_time > :end_time OR :end_time < :start_time',
      start_time: self.start_time, end_time: self.end_time)
  end

def does_not_start_before_end
  unless start_before_end.empty?
    errors[:base] << 'Event cannot have a start time earlier than end time'
  end
end

end
