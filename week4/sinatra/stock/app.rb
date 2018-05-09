require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote'

# show empty form
get "/stock" do
  erb :form
end


# for submits here, and display Result
get "/stock/quote" do
  # @result = @stock.latest_price
  @stock = StockQuote::Stock.quote(params[:symbol])
  # p @stock
  erb :quote
end
