# Nucleotide Count
# DNA is represented by an alphabet of the following symbols: 'A', 'C', 'G', and 'T'.
#
# Each symbol represents a nucleotide, which is a fancy name for the particular molecules that happen to make up a large part of DNA.
#
# Write a program in ruby that will tell you how many times each nucleotide occurs in a string (i.e. how many times 'A', 'C', 'G' and 'T' appear in a given string).
#
# It should also tell you if a character in the string is not a valid nucleotide (i.e. NOT 'A', 'C', 'G', and 'T').
#
# Example:
#
# count_nucleotides "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"
# # output:
# A: 20
# C: 12
# G: 17
# T: 21
# Source
# The Calculating DNA Nucleotides problem at Rosalind



# string = "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"
#
#
# def count_nucleotides(string, substring)
#   string.scan(/(?=#{substring})/).count
# end
#
#
# p count_nucleotides(string, "A")
# p count_nucleotides(string, "C")
# p count_nucleotides(string, "G")
# p count_nucleotides(string, "T")
#



# Nucleotide Count
# DNA is represented by an alphabet of the following symbols: 'A', 'C', 'G', and 'T'.
#
# Each symbol represents a nucleotide, which is a fancy name for the particular molecules that happen to make up a large part of DNA.
#
# Write a program in ruby that will tell you how many times each nucleotide occurs in a string (i.e. how many times 'A', 'C', 'G' and 'T' appear in a given string).
#
# It should also tell you if a character in the string is not a valid nucleotide (i.e. NOT 'A', 'C', 'G', and 'T').
#
# Example:
#
# count_nucleotides "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"
# # output:
# A: 20
# C: 12
# G: 17
# T: 21
# Source
# The Calculating DNA Nucleotides problem at Rosalind



string = "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"


def count_nucleotides(string, substring)
  string.scan(/(?=#{substring})/).count
end


p count_nucleotides(string, "A")
p count_nucleotides(string, "C")
p count_nucleotides(string, "G")
p count_nucleotides(string, "T")




def count_nucleotides(input)
  bases = {
    'A' => 0,
    'C' => 0,
    'G' => 0,
    'T' => 0
  }
  dna = []
  input.upcase.chars do |letter|
    is_nucleotide = true
    # puts "#{letter}"
    bases.each do |key, value|
      #put "#{key}: #{value}"
      if letter == key
        bases[key] += 1
        is_nucleotide = true
      end #if
    end #end bases
    if nucleotide == false
      dna.push "#{letter} is not a nucleotide"
    end # if is_nucleotide
  end # input.chars

  bases.each do |key, value|
    dna.push "#{key} : #{value}"
end


count_nucleotides("AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC")
