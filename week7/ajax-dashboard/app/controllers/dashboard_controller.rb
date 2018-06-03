
class DashboardController < ApplicationController

def uptime
  @up = `uptime`

  render plain: @up
end

def dogs
  render json: Dog.all
end

def cpu_hog

  hog = `ps xr|head -n 2`.split("\n")[1]
  time = `date`

  response = {
    biggest_hog: hog,
    current_time: time
  }

  @hogdata = hog

  # render json: response # rendering JSON for use by AJAX/js
  respond_to do |format|
    format.html #render default template, ie app/views/dashboard/cpu_hog.html.erb
    format.json {render json: response}
  end

end

def app
end


end
