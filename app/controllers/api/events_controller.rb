require 'date'

class Api::EventsController < ApplicationController

  def create
    @event = Event.new(event_params)
    if @event.save
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def update
    @event = Event.find_by(id: params[:id])
    if @event.update_attributes(event_params)
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def show
    @event = Event.find(params[:id])
    render :show
  end

  def index
    ordered_events = [];
    Event.order(:start_time).each do |event|
      ordered_events << event
    end
    @events = ordered_events
    render :index
  end

  def destroy
    @event = Event.find(params[:id])
    if @event
      @event.destroy
      render :show
    end
  end

  private

  def event_params
    params.require(:event).permit(:description, :start_time, :end_time)
  end

end
