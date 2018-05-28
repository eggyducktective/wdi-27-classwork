class SongsController < ApplicationController
  def new
    @song = Song.new

  end
  def create
    Song.create song_params # use strong params to prevent form hackked
    redirect_to songs_path # back to index
  end

  def index
    @songs = Song.all
  end

  def show
    @song = Song.find params[:id]
  end

  def edit
    @song = Song.find params[:id]
  end


  def update
  song = Song.find params[:id] # PATCH /works/:# # ID
  song.update song_params
  redirect_to song
  #same as redirect_to_work_path(work), because show is the default crud action
  end

  def destroy
    Song.destroy params[:id]
    redirect_to songs_path
  end

  private

  def song_params
    params.require(:song).permit(:title, :artist_id)
  end
end
