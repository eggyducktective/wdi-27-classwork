require 'sinatra'
require 'sinatra/reloader'
# require 'sqlite3'

require 'active_record'

ActiveRecord::Base.establish_connection(
  adapter: "sqlite3",
  database: "database.db"
)


ActiveRecord::Base.logger = Logger.new(STDERR)


# always singular version of the table's name which is plural
class Animal < ActiveRecord::Base
  has_many :spotters # this requires the animal_id field in spotters
end

class Spotter < ActiveRecord::Base
  belongs_to :animal # requires the animal_id field in this class' table

end


# index of all animals
get "/animals" do
  # @animals = db_query("SELECT * FROM animals;")
  @animals = Animal.all

  erb :animals_index
end

# show Add animals form / animals/new appears first to not be confused with animals/:id
get "/animals/new" do
  erb :animals_new
end

# Add animals form submits here, to actually create row in DB
post "/animals" do

  #
  # sql = "INSERT INTO animals (first_name, last_name, species, description, roundness, alive, age, image_url)
  #       VALUES (
  #         '#{ params["first_name"] }',
  #         '#{ params["last_name"] }',
  #         '#{ params["species"] }',
  #         '#{ params["description"] }',
  #          #{ params["roundness"] },
  #          #{ params["alive"] },
  #          #{ params["age"] },
  #         '#{ params["image_url"] }'
  #       );"
  #
  #
  # db_query( sql )

  animal = Animal.new

  # set its table fields (by setting values into attributes of the object)
  animal.first_name = params[:first_name]
  animal.last_name = params[:last_name]
  animal.species = params[:species]
  animal.description = params[:description]
  animal.roundness = params[:roundness]
  animal.alive = params[:alive]
  animal.age = params[:age]
  animal.image_url = params[:image_url]

  animal.save # store the new object in the Database


  # sorter way to do this, nxt week
  # Animal.create(
  #   first_name: params[:first_name],
  #   last_name: params[:last_name], # ....
  # )

    redirect "/animals" # no template for the create, we redirect to the index instead
end



# READ variation 2: show page (details for a single item)
get "/animals/:id" do
  # id = params[:id]
  # @animal = db_query("SELECT * FROM animals WHERE id = #{id};") # an array of every results
  # @animal = @animal.first # get the first element of the array
  @animal = Animal.find params[:id]
  erb :animals_show
end

# UPDATE part 1: show edit form
get "/animals/:id/edit" do
  #retreive the item from the database, so we can populate the form with its fields
  # @animal = db_query("SELECT * FROM animals WHERE id = #{params["id"]};")
  # @animal = @animal.first
  @animal = Animal.find params[:id]

  erb :animals_edit
end


# UPDATE part 2: form submits to here, then update DB and redirect

post "/animals/:id" do
  # sql = "UPDATE animals SET
  # first_name = '#{ params["first_name"] }',
  # last_name = '#{ params["last_name"] }',
  # species= '#{ params["species"] }',
  # description = '#{ params["description"] }',
  # roundness = #{ params["roundness"] },
  # alive = #{ params["alive"] },
  # age = #{ params["age"] },
  # image_url = '#{ params["image_url"] }'
  # WHERE id = #{ params[:id] };"

  # db_query(sql)
  animal = Animal.find params[:id]

  animal.first_name = params[:first_name]
  animal.last_name = params[:last_name]
  animal.species = params[:species]
  animal.description = params[:description]
  animal.roundness = params[:roundness]
  animal.alive = params[:alive]
  animal.age = params[:age]
  animal.image_url = params[:image_url]

  animal.save # store the new attributes in the
 # shorter version


 #
 # animal.update(
 #   first_name: params[:first_name]
 # )
  redirect "/animals/#{params["id"]}"
end


# DELETE: remove item from DB and redirect to index
get "/animals/:id/delete" do
  # db_query( "DELETE FROM animals WHERE id = #{ params["id"] };" )
  # redirect "/animals/#{params["id"]}"
  animal = Animal.find params[:id]
  animal.destroy
  redirect "/animals"
end


# Spotters CRUD system

# CREATE part 1: empty form
get "/spotters/new" do

  erb :spotters_new
end

# CREATE part 2: form submits to here
post "/spotters" do

  spotter = Spotter.new
  spotter.name = params[:name]
  spotter.location = params[:location]
  spotter.spotted = params[:spotted]
  spotter.animal_id = params[:animal_id]

  spotter.save

  redirect "/spotters"
end

# READ 1: index of all spotters_new
get "/spotters" do
  @spotters = Spotter.all

  erb :spotters_index
end

#READ @ :
get "/spotters/:id" do
  @spotter = Spotter.find params[:id]

  erb :spotters_show
end


# UPDATE part1
get "/spotters/:id/edit" do

  @spotter = Spotter.find params[:id]

  erb :spotters_edit
end


# UPDATE part2
post "/spotters/:id" do

  spotter = Spotter.find params[:id]

  spotter.name = params[:name]
  spotter.location = params[:location]
  spotter.spotted = params[:spotted]
  spotter.animal_id = params[:animal_id]

  spotter.save # store the new attributes in the
 # shorter version


  redirect "/spotters/#{params["id"]}"
end


# DELETE: remove item from DB and redirect to index
get "/spotters/:id/delete" do

  spotter = Spotter.find params[:id]
  spotter.destroy
  redirect "/spotters"
end
