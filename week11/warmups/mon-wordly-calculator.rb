# Wordy Calculator
# Write Ruby code that takes word problems in the following formats:
#
# What is 5 plus 13?
#
# What is 7 minus 5?
#
# What is -6 multiplied by 4?
#
# What is 25 divided by -5?
#
# and returns the answer as an integer.
#
# You should define a Calculator class which uses the constructor function (initialize) to set the question, and an answer method to return the answer.
#
# Use a regular expression to parse the question.
#
# HINT: You will probably want to use Ruby's match method, and in particular a capture group which uses parentheses in the regex, and returns a MatchData array. Also refer to the Ruby Regexp documentation and Ruby Regexp group matching



class Calculator

  attr_accessor
  def initialize(question)
    @question = question
    matches
  end

  def matches

    # (\d)/
    # MatchData "1" 1:"1"

    # /(\d)/
    # Match data "3 plus" 1: "3" 2:"plus"

    #/(\d) (\w+)/
    # MatchData "3 plus 4" 1:"3" 2:"plus" 3: "4"
    # number between 0 and 9
    @matches = @question.match( /(-?\d+) (plus|minus|multiplied by|divided by)(-?\d+)/ )

    puts "#{@matches}"

    @matches.nil? ? (raise ArgumentError, "That is too complicated") : @matches

  end # end matches

  def first_number
    puts "@matches[1]: #{matches[1]}"
    @matches[1].to_i
  end # first_number

  def second_number
    puts "@matches[3]: #{matches[3]}"
    @matches[3].to_i
  end #second_number

  def operator
    puts "@operator: #{matches[2]}"
    case @matches[2]
    when 'plus' then :+
    when 'minus' then :-
    when 'multiplied by' then :*
    when 'divided by' then :/
    end # case
  end # operator

  def answer
    @answer = first_number.send(operation, second_number)
  end

end

c = Calculator.new('What is -10 divided by 5?')
puts c.answer
