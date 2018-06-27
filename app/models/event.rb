class Event < ApplicationRecord
  validates :description, :start_time, :end_time, :description, presence: true
  validate :does_not_start_before_end, :does_not_overlap_approved_request

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

def overlapping_events
  Event
    .where.not(id: self.id)
    .where.not('start_time > :end_time OR end_time < :start_time',
                start_time: self.start_time, end_time: self.end_time)
end

def does_not_overlap_approved_request
  unless overlapping_events.empty?
    errors[:base] << 'Event overlaps with existing event'
  end
end

end
