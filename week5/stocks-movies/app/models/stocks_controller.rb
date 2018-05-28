class StocksController < ApplicationController

  def search_form
  end

  def search_results
    cl (params) # it will overide the old value
    @code = params[:stock_symbol]
    @result = StockQuote::Stock.quote( @code )
    cl(@results)
    # raise 'hell'
  end

end
