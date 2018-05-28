class MoviesController < ApplicationController

  # Extract constants used by multiple methods to the top of the class
  # This is only something you can do with constants, not normal variables
  # or instance variables
  BASE_URL = "https://api.themoviedb.org/3"
  API_KEY  = "24d863d54c86392e6e1df55b9a328755"

  def search_form
  end

  def results
    @query = params[:query]  # from our URL "movies/results?query=QUERYHERE"
    url = "#{ BASE_URL }/search/movie?api_key=#{API_KEY}&query=#{ @query }"
    @results = HTTParty.get( url )
    # o = { a:1, b: 2}
    cl( @results )
    @img_base_url = "https://image.tmdb.org/t/p/w185"

  end

  def show
    @id = params[:id]   # comes from our URL "/movies/IDHERE"
    url = "#{ BASE_URL }/movie/#{ @id }?api_key=#{API_KEY}"
    @movie = HTTParty.get( url )
    cl(@movie)
    @img_base_url = "https://image.tmdb.org/t/p/w500"  # larger poster
  end

  


end
