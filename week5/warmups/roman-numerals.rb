# Roman Numerals
# The Romans were a clever bunch. They conquered most of Europe and ruled it for hundreds of years. They invented concrete and straight roads and even bikinis. One thing they never discovered though was the number zero. This made writing and dating extensive histories of their exploits slightly more challenging, but the system of numbers they came up with is still in use today. For example, the BBC uses Roman numerals to date their programmes.
#
# The Romans wrote numbers using letters - I, V, X, L, C, D, M. (notice these letters have lots of straight lines and are hence easy to hack into stone tablets using a chisel).
#
#  1  => I
# 10  => X
#  7  => VII
# Write a program that will convert Arabic numerals to Roman numerals.
#
# There is no need to be able to convert numbers larger than about 3000. (The Romans themselves didn't tend to go any higher)
#
# Wikipedia says: "Modern Roman numerals ... are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero."
#
# To see this in practice, consider the example of 1990.
#
# In Roman numerals 1990 is MCMXC:
#
# 1000=M 900=CM 90=XC
#
# 2008 is written as MMVIII:
#
# 2000=MM 8=VIII
#
# See also: http://www.novaroma.org/via_romana/numbers.html
#
# Do this in Ruby.




class Roman
  # we need to set up this instance variable in our initialize method...
  # we can't just declare it in the class itself - it will not be set
  # NOTE that Class variables DO behave this way, so that is an alternative
  def initialize
    @romans = {
      1000 => 'M',
      900 => 'CM',
      500 => 'D',
      400 => 'CD',
      100 => 'C',
      90 =>  'XC',
      50 =>  'L',
      40 =>  'XL',
      10 =>  'X',
      9  =>  'IX',
      5  =>  'V',
      4  =>  'IV',
      1  =>  'I'
    }
  end

  def to_roman(number)
    output = ''

    # loop through the @romans obj
    @romans.each do |key, value|

      # while the input number is greater than or equal to the key
      while number >= key
        # add the key's value to the output string
        output += value

        # then subtract the key amount from the input number
        number -= key

      end

    end

    output
  end


end # class


test = Roman.new

p test.to_roman(1990)
