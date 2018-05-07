# ### 3. Sydney Suburbs
# - Create a program that asks what suburbs you live in.
# - Depending on the answer, print an appropriate response of your choosing (you should be able to give a custom response for at least 3 different suburbs).


puts "enter a suburb:"
suburb = gets.chomp.downcase


response = case suburb
when "sydney city" then "what an awesome place"
when "north sydney" then "it is the second business district"
when "wollongong" then "it is so far away"
else
  "i'm sure it is nice there"
end

p response



# if suburb == "bondi"
#   puts "nice boat shoes, codger"
# elsif suburb == "newport"
#   puts "oh, so you're a white supremacist"
# elsif suburb == "Manly"
#   puts "surf's up bro, watch out for tourists"
# elsif suburb == "newtown"
#   puts "Cool piercings, smash the state"
# else
#   puts "I'm pretty sure it is nice there"
# end
