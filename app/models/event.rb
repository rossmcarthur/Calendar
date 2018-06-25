class Event < ApplicationRecord
  validates :description, :start_time, :end_time, :description, presence: true
  validate :does_not_overlap_approved_request

  def overlapping_events
  Event
    .where(':start_time > :end_time OR :end_time < :start_time',
      start_time: self.start_time, end_time: self.end_time)
  end

def does_not_overlap_approved_request
  unless overlapping_events.empty?
    errors[:base] << 'Event overlaps with existing event'
  end
end

end
