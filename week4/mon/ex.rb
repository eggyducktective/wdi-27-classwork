puts "enter a number:"
num = gets.chomp.to_i # change string to interger

case
when num < 5
  puts "it is smaller than 5"
when num == 10
  puts "it is 10."

when num > 7
  puts "it is greater than 7"

else
  puts "something else."
end
