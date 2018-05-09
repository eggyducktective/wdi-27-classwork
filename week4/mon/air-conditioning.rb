# ### 2. Air Conditioning
# - Ask the user what the current temperature is, if the A/C is functional, and what temperature they wish it was.
#     - If the airconditioner is functional and the current temperature is above the the desired temperature... display "Turn on the A/C Please"
#     - If the airconditioner is non-functional and the current temperature is above the the desired temperature... display "Fix the A/C now!  It's hot!"
#     - If the airconditioner is non-functional and the current temperature is below the the desired temperature... display "Fix the A/C whenever you have the chance...  It's cool..."

puts "what is the current temperature:"
current_temp = gets.to_f


puts "is the A/C functional (y/n)"
ac_working = gets.chomp.downcase # convert to lower case to make conditional simpler


puts "what is the desired temp?"
desired_temp = gets.to_f


p current_temp, ac_working, desired_temp

if ac_working == "y"
  if current_temp > desired_temp
    puts "turn on the A/C"
  end

else
  #ac not working
  if current_temp > desired_temp
    puts "fix the A/C, it is very hot"
  else
    puts "fix the A/C whenever, it is cool"
  end
end


# if air_conditioner == "true" && temperature > 30
#   puts "please turn on the air conditioner"
# elsif air_conditioner == "false" && temperature > 30
#   puts "fix the aircon please, it is hot"
# elsif
#   puts "fix the aircon whenever, it is cool"
# end
