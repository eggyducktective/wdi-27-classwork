# require "pry"
#
# puts "line 1"
#
#
# # other stuff
#
# first_name = "Anna"
# binding.pry # like "debugger;"
#
#
# puts "line 2"
#
# puts "line 3"


#
# ### 1. Drinking age?
# - Ask the user for their age.
#     - Remember that anytime you get input, it is a string, so you will need to change the age input to a number.
# - If age is less than 18, print an appropriate message.
# - If the age is equal to or over 18, print a different message.


puts "enter age:"
age = gets.to_i # to_i will get rid of anything that is not a number
p age

case
when age < 18
  puts "YOU CAN NOT DRINK YET"
else
  puts "DRINK AS MUCH ALCOHOL AS YOU WANT"
end


#
# if age < 18  use if, when there are only 2 conditions
