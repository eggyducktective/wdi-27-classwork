class ArtistsController < ApplicationController
  def new
    @artist = Artist.new
  end

  def create
   artist = Artist.create artist_params

   # only redirect to index if the artist was successfully created
   # ie if our validations did not cause the create to fail.

   if artist.persisted?  # artist.id.present?
     redirect_to artists_path # back to the index
   else
     flash[:errors] = artist.errors # This will be set ONLY for the next page load
     redirect_to artists_new_path
   end

  end

  def index
    @artists = Artist.all
  end

  def show
    @artist = Artist.find params[:id]
  end

  def edit
    @artist = Artist.find params[:id]
  end

  def update
    artist = Artist.find params[:id]
    artist.update artist_params

    if artist.errors.any?
      flash[:errors] = artist.errors
      redirect_to artist_edit_path( artist )
    else
      redirect_to artist_path( artist )
    end
  end

  def destroy
    Artist.destroy params[:id]
    redirect_to artists_path
  end
end
