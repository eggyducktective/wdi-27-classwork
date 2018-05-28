# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



puts "Creating awesome bear artists"
# Clear the DB
Artist.destroy_all

a1 = Artist.create name: 'Space Teddy', nationality: 'Japanese', dob: '2015/1/1', period: '21st century', roundness: 'A very gracious teddy', image: 'https://i.pinimg.com/originals/2f/51/af/2f51af7f7fb83965565b2daed879effb.jpg'
a2 = Artist.create name: 'Big Teddy', nationality: 'Australian', dob: '2015/1/3', period: '21st century', roundness: 'Evil teddy with a jetpack', image: 'https://sc02.alicdn.com/kf/HTB1CCgRLpXXXXcQXFXXq6xXFXXX7/Big-Large-Giant-Brown-Teddy-Bear-Plush.jpg'
a3 = Artist.create name: 'Rilakkuma San', nationality: 'Japanese', dob: '2010/12/4', period: '21st century', roundness: 'A relaxed bear', image: 'https://cdn.shopify.com/s/files/1/1145/4632/products/a3914be58b1b0b7132a56d2b8a4e7095.jpg?v=1517973629'

puts "Created #{Artist.all.length} bear artists:"
puts Artist.pluck(:name).join(', ')





Work.destroy_all
puts "Creating works..."
#Space Teddy
Work.create title: "Movement", year: '1946', medium: 'oil on canvas', style: 'abstract expressionism', image: 'http://www.fillmurray/200/300', artist: a1
#Big Teddy
Work.create title: "Gothic Landscape", year: '1961', medium: 'oil on canvas', style: 'abstract expressionism', image: 'http://www.fillmurray/200/400', artist: a2
#Big Teddy
Work.create title: "Working Model", year: '1957', medium: 'bronze sculpture', style: 'modernism', image: 'http://www.fillmurray/400/400', artist: a2
#Rilakkuma
Work.create title: "City with Animals", year: '1943', medium: 'oil on wood', style: 'surreal', image: 'http://www.fillmurray/500/200', artist: a3
#Rilakkuma
Work.create title: "Khom o day", year: '1946', medium: 'oil', style: 'abstract expressionism', image: 'http://www.fillmurray/500/300', artist: a3


puts "Created #{Work.all.length} works:"
puts Work.pluck(:title).join(', ')
