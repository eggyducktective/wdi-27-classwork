class Album < ApplicationRecord
  has_many :songs #gives us Album.first.songs
  has_many :artists, through: :songs # gives us Album.first.artists

  def artist
    artist.uniq.first # this is applied to the current object, i.e self.artists.unique
  end
end
