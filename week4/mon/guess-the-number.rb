# # Title: Guess The Number
#
# ### Activity:
# - You are to generate a basic "guess my number" game.  The computer will pick a random number between 0 and 10.  The user will guess the number until they guess correctly.
#
# ### Specification:
# - The user should be asked to guess a number
# - If the user's guess is correct, the user should see a congratulatory message
# - If the user's guess is not correct, the user should be asked to guess the number again.
#
# ### Extensions:
# - Let the user choose the maximum value (so they can play a long game with a random value between 0 and 10000, for example).
# - Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"


require "colorize"

MAX_VALUE = 10

secret_number = Random.rand(0..MAX_VALUE)

guess = -1

while guess != secret_number
  puts "guess a number (0-#{MAX_VALUE}):"
  guess = gets.to_i
  # if number == secret_number
  #   puts "congratulations"
  if guess < secret_number
    puts "wrong, guess higher".yellow
  elsif guess > secret_number
    puts "wrong, guess lower".red
  end
  # puts "guess a number (0-10): "
  # guess = gets.to_i
end

#if we exit the loop, we know the number has been guessed correctly
puts "congratulations".green
