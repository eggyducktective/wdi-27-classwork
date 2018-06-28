Rails.application.routes.draw do


  root to: 'pages#home'

  get '/flex'       => 'pages#flex'
  get '/grid'       => 'pages#grid'
  get '/responsive' => 'pages#responsive'
end
