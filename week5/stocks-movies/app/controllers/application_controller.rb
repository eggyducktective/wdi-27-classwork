class ApplicationController < ActionController::Base
  # every controller will have access from this controller
  def cl (val)
    @cl_debug = [] if @cl_debug.nil?
    # @cl_debug_string = @cl_debug_string || []
    # @cl_debug_string ||= [] #a = a+1, a += 1

    @cl_debug << val.to_json #create a json object from this ruby object

  end
end
