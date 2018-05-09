# #Array and Hash access
#
# ### A. Given the following data structure:
#
# ```ruby
# a = ["Anil", "Erik", "Jonathan"]
# ```
#
# 1. How would you return the string `"Erik"`?
# 1. How would you add your name to the array?

a = ["Anil", "Erik", "Jonathan"]
p a[1]

p a.push("Anna")
# or
a << "Anna"




#
# ### B. Given the following data structure:
#
# ```ruby
# h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}
h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}

# 1. How would you return the string `"One"`?
p h.fetch(1)
# or
h[1]


# 1. How would you return the string `"Two"`?
p h.fetch(:two)
#or
h[:two]

# 1. How would you return the number `2`?
p h.fetch("two")
#or
h["two"]

# 1. How would you add `{3 => "Three"}` to the hash?
p h[3] = "Three"
# 1. How would you add `{:four => 4}` to the hash?
p h[:four] = 4
#


p h







# ### C. Given the following data structure:
#
# ```ruby
# is = {true => "It's true!", false => "It's false"}
# ```
#
# 1. What is the return value of `is[2 + 2 == 4]`?
# 1. What is the return value of `is["Erik" == "Jonathan"]`?
# 1. What is the return value of `is[9 > 10]`?
# 1. What is the return value of `is[0]`?
# 1. What is the return value of `is["Erik"]`?

is = {true => "It's true!", false => "It's false"}

p is[2 + 2 == 4] # returns "true"
p is["Erik" == "Jonathan"] # returns "false"
p is[9 > 10] # returns "false"
p is[0] # returns "nil" -> because it is not a key of the hash
p is["Erik"] # returns nil





# ### D. Given the following data structure:
#
# ```ruby
users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}

#
# 1. How would you access Jonathan's Twitter handle (i.e. the string `"tronathan"`)?

# require "pry"; binding.pry
# p "hello"


p jon = users.fetch("Jonathan")
p jon
p jon.fetch(:twitter)

users["Jonathan"][:twitter]

# 1. How would you add the number `7` to Erik's favorite numbers?

#longer way
p eric = users.fetch("Erik")
p eric
p erik_favorite_numbers = eric.fetch(:favorite_numbers)
p erik_favorite_numbers.push(7)
p users


users["Erik"][:favorite_numbers] << 7


# 1. How would you add yourself to the users hash?

users["Anna"] = { twitter: "eggyducktective", favorite_numbers: [20, 4, 10, 12]}

# 1. How would you return the array of Erik's favorite numbers?

p erik_favorite_numbers

# 1. How would you return the smallest of Erik's favorite numbers?
erik_favorite_numbers = [8, 12, 24, 7]
min = erik_favorite_numbers.min
erik_favorite_numbers.select {|i| i == min}
p min

users["Erik"][:favorite_numbers].min
#or
users["Erik"][:favorite_numbers].sort.first



# 1. How would you return an array of Anil's favorite numbers that are also even?

# p anil = users.fetch("Anil")
# p anil
# p anil_fav_numbers = anil.fetch(:favorite_numbers)
# even_numbers = anil_fav_numbers.each {|x| p x if x.even?}
#
# p even_numbers


anil_even = users["Anil"][:favorite_numbers].select do |num|
  num.even?
end

p anil_even



# 1. How would you return an array of the favorite numbers common to all users?

# use intersect method, to get the common appearance of arrays

faves = []
users.values.each do |x|

# p x[:favorite_numbers]
  if faves.empty?
  faves = x[:favorite_numbers]
  end
  faves = faves & x[:favorite_numbers]
end;

p faves


# use map to get just the value of one key
p users.values.map { |data| data[:favorite_numbers] }.reduce &:&

# 1. How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?

# flatten method takesn the nested array

p users.values.map { |data| data[:favorite_numbers] }.flatten.uniq.sort
