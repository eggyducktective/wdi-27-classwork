class Artist < ApplicationRecord

  has_many :songs # gives us Artist.first.songs (via table songs artist_id)

  has_many :albums, through: :songs # :through => :songs gives us Artist.first.albums
  has_many :genres, through: :songs # gives us Artist.first.genres
end
