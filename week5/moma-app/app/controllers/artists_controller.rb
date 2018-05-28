class ArtistsController < ApplicationController

  #CREATE
  def new
    @artist = Artist.new # new helper path form_for
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


  #READ
  def index
    @artists = Artist.all
  end

  def show
    @artist = Artist.find params[:id]
  end


  #UPDATE
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
    redirect_to artist_path( artist )  # can also write "redirect_to artist"
    end
  end


  # DELETE

  def destroy
    Artist.destroy params[:id] #artist = Artist.find params[:id]
    redirect_to artists_path
  end





  private # everything below this is only accessible from inside the method
  #strong params in rails, only lets through the specified form fieldset, dont let users mess with form format
  def artist_params
    params.require(:artist).permit( :name, :nationality, :dob, :period, :image, :roundness )
  end

end
