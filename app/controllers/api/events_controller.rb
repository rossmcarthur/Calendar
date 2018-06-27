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
    @events = Event.all
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
