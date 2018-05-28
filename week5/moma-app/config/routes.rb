Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "artists#index" # /route



  #CREATE
  get "/artists/new"  => "artists#new" # 3rd step path helper: artists_new_path
  post "/artists"     => "artists#create" # just use the artists_path helper for this


  #READ
  get "/artists"      => "artists#index" #first step / automatically get a path helper "artist_path"
  get "/artists/:id"  => "artists#show", as: "artist" #second step / gives us "artist_path(id)' helper


  #UPDATE
  get  "/artists/:id/edit"  => "artists#edit", as: "artist_edit"
  patch "/artists/:id"       => "artists#update" # just use "artist_path" from the show page

  #DESTROY
  delete "/artists/:id" => "artists#destroy"



  #works:

  resources :works

end
