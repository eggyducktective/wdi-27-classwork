require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'


def db_query( sql )
  db = SQLite3::Database.new("database.db") #dont need parentheses with only 1 argument
  db.results_as_hash = true # easier to access results as has keys
  puts "="*100
  puts sql # debugging output
  puts "="*100
  result = db.execute(sql) # run the query
  db.close # close the connection
  result
end

# index of all animals
get "/animals" do
  @animals = db_query("SELECT * FROM animals;")

  erb :index
end

# show Add animals form / animals/new appears first to not be confused with animals/:id
get "/animals/new" do
  erb :new
end

# Add animals form submits here, to actually create row in DB
post "/animals" do


  sql = "INSERT INTO animals (first_name, last_name, species, description, roundness, alive, age, image_url)
        VALUES (
          '#{ params["first_name"] }',
          '#{ params["last_name"] }',
          '#{ params["species"] }',
          '#{ params["description"] }',
           #{ params["roundness"] },
           #{ params["alive"] },
           #{ params["age"] },
          '#{ params["image_url"] }'
        );"


  db_query( sql )
  redirect "/animals/#{id}" # no template for the create, we redirect to the index instead
end




get "/animals/:id" do
  id = params[:id]
  @animal = db_query("SELECT * FROM animals WHERE id = #{id};") # an array of every results
  @animal = @animal.first # get the first element of the array

  erb :show
end

# UPDATE part 1: show edit form
get "/animals/:id/edit" do
  #retreive the item from the database, so we can populate the form with its fields
  @animal = db_query("SELECT * FROM animals WHERE id = #{params["id"]};")
  @animal = @animal.first

erb :edit
end


# UPDATE part 2: form submits to here, then update DB and redirect

post "/animals/:id" do
  sql = "UPDATE animals SET
  first_name = '#{ params["first_name"] }',
  last_name = '#{ params["last_name"] }',
  species= '#{ params["species"] }',
  description = '#{ params["description"] }',
  roundness = #{ params["roundness"] },
  alive = #{ params["alive"] },
  age = #{ params["age"] },
  image_url = '#{ params["image_url"] }'
  WHERE id = #{ params[:id] };"

  db_query(sql)
  redirect "/animals/#{params["id"]}"
end


# DELETE: remove item from DB and redirect to index
get "/animals/:id/delete" do
  db_query( "DELETE FROM animals WHERE id = #{ params["id"] };" )
  redirect "/animals/#{params["id"]}"
end
