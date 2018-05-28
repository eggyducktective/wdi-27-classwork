#plural
class PlanetsController < ApplicationController
  #stop rails from doing some (useful!) security checking
  skip_before_action :verify_authenticity_token, raise: false

    #CREATE 1: new form
    def new
    end
    #CREATE 2: form submits here
    def create
      Planet.create(
        name: params[:name],
        image: params[:image],
        orbit: params[:orbit],
        diameter: params[:diameter],
        mass: params[:mass],
        temperature: params[:temperature],
        moons: params[:moons]
      )

      #create has no template of its own
      redirect_to(planets_path)
    end

    #UPDATE 1: show pre-filled edit form
    def edit
      @planet = Planet.find params[:id] #id comes from the routes "/planets/:id/edit"
    end

    #UPDATE 2: form submits there
    def update
     # edit form submits to here
     planet = Planet.find params[:id]
     planet.update(
       name: params[:name],
       image: params[:image],
       orbit: params[:orbit],
       diameter: params[:diameter],
       mass: params[:mass],
       moons: params[:moons],
       temperature: params[:temperature]
     )

     redirect_to planet_path(planet.id)

     end

    #READ: index
    def index
      @planets = Planet.all
    end

    def show
      @planet = Planet.find params[:id]
    end

    #DESTROY
    def destroy
      planet = Planet.find params[:id]
      planet.destroy

      redirect_to planets_path
    end
end
