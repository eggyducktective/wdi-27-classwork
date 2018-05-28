class CalculatorController < ApplicationController
  def home
    
  end

  def do_calc
    # binding.pry
    # result = x + y # template can only see instance variables
    @first = params[:first].to_i
    @second = params[:second].to_i
    @op = params[:op]
    @result = @first.send(@op, @second) #5.(+3) == 5 + 3
    # raise "hell" # debugging
    # @op = "/" if @op == "div" # not necessary! 6.div(3) works
  end
end
