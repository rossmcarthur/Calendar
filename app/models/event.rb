class Event < ApplicationRecord
  validates :description, :start, :end, :description, presence: true
  validate :does_not_overlap_approved_request

  def overlapping_events
  Event
    .where.not('start > :end OR end < :start',
      start: self.start, end: self.end)
  end

def does_not_overlap_approved_request
  unless overlapping_events.empty?
    errors[:base] << 'Event overlaps with existing event'
  end
end

end
