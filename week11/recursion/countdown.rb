def countdown( n=10 )
  while n >= 0
    puts n
    n -= 1
    sleep 0.3
  end
  puts "Exploration of Space"
end

# countdown

# Recursion can only be used in languages that have:
# variables
# functions
# conditionals (if statements/branching)

# we dont have to change the value of the variable, no mutation of any variable
def countdown_r( n = 10 )
  # define a base case
  # (condition under which the function will stop calling itself)
  if n < 0
    puts "Magical"
  else
    # recursive case
    # the function calls itself, but in a way that always
    # brings us a step closer to the terminating base case
    puts n
    sleep 0.3
    countdown_r( n - 1)
  end
  puts "no more magical stuff happening here: n =#{n}"
end

countdown_r
