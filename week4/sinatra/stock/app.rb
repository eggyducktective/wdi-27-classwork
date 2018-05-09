require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote'

# show empty form
get "/stock/form" do
    @stock = StockQuote::Stock.quote('AAPL')
  erb :stockform
end

# for submits here, and display Result
get "/stock/result" do
  @result = @stock.latest_price
  erb :stockresult
end
