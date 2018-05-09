#!/usr/bin/env ruby
# Scrabble Score
# Write a program that, given a word, computes the scrabble score for that word.
#
# scrabble("cabbage")
# # => 14
# Your program should be in a file named scrabble.rb. You should be able to compute the score for any word entered by the user.
#
# Letter Values
# Letter                           Value
# A, E, I, O, U, L, N, R, S, T       1
# D, G                               2
# B, C, M, P                         3
# F, H, V, W, Y                      4
# K                                  5
# J, X                               8
# Q, Z                               10
# Extensions
# You can play a =>double or a =>triple letter.
# You can play a =>double or a =>triple word.



#
# require 'pry'; binding.pry
scrabble_letters = {
     1 => %w{A E I O U L N R S T},
     2 => %w{D G},
     3 => %w{B C M P},
     4 => %w{F H V W Y},
     5 => %w{K},
     8 => %w{J K },
     10 => %w{Q Z}
}

score = 0

puts "enter a word: "
word = gets.chomp
p word

word.upcase.chars.each do |letter|
  # puts "#{letter}"

  scrabble_letters.each do |key, value|
    # if scrabble_letters[key].include?(letter)
    #   score += key
    # end
    score += key if value.include?(letter)
 end
end

puts "The word you entered was #{word}, the score is #{score}"
