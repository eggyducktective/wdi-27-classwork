$really_global = 10

# Person is superclass of Comedian
# person constructor

class Person
  # Class method: you can call Person.introdude on the class itself, not on an instand object
  def self.introduce
    puts "Greetings, I am #{@name}"
  end

  @@people = 0 # class variable, visible to all objects of that class

  # automatically create getter and setter methods for @name and @argument
  attr_accessor :name, :age

  # # GETTER for @name instance variable
  # def name
  #   @name
  # end
  # # SETTER for @name
  # def name=( new_name )
  #   @name = new_name
  # end

  # make age argument optional by assigning it to some value
  def initialize(name, age = 27)
    puts "Making a new person object #{$really_global}"
    @name = name
    @age = age
    @@people += 1
    $test = 'test'
  end

  def say_hello
    puts 'Hi, I am a person'
    puts "My name is #{@name}, I am number #{@@people}"
  end

  def die
    puts 'Uhhhhh why me?'
  end

  def laugh
    puts 'Ha ha ha'
  end
end

# inherit from parent class
class Comedian < Person
  def tell_joke
    print "What's brown and sticky"
    3.times do
      print '.'
      sleep 0.4
    end
    puts 'A stick'
  end

  def laugh
    puts 'Ha ha I am funny'
    super # get the laugh method from parent class too
  end
end

class SerialKiller < Person
  def laugh
    puts 'MUAHAHHAHAHAHAHHAHAHAHAHAHA'
  end

  def taunt_police
    puts 'You can never catch me'
  end

  def kill(victim)
    return 'Immortal' unless victim.respond_to? :die
    victim.die
    puts 'u ded'

    if victim.respond_to? :die
      victim.die
      puts 'u ded'
    end
  end
end

require 'pry'; binding.pry
puts 'Done'
