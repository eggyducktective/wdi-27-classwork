# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Populating our solar system"

Planet.destroy_all

Planet.create name: "Earth", orbit: 1, moons: 1, mass: 1, diameter: 1, temperature: 1
Planet.create name: "Mars", orbit: 687, moons: 2, mass: 2, diameter: 0.5, temperature: 0.2
Planet.create name: "Venus", orbit: 0.7, moons: 2, mass: 2, diameter: 0.2, temperature: 6
Planet.create name: "Jupiter", orbit: 700, moons: 8, mass: 100, diameter: 0.1, temperature: 0.1

puts "Created #{ Planet.all.length }:"
puts Planet.all.pluck(:name).join(', ') # pluck pulls out the single content of data, return an array, convert to string.
