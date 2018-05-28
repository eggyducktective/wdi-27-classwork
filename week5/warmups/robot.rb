# Robot Name
# You run a robot factory. As robots are created, they roll off the conveyor belt as empty, mindless husks of machinery -- until you first boot them up.
#
# The first time you boot them up, a random name is randomly generated, and assigned to itself by the robot.
#
# Names typically take the format of things like "BX777" or "SD234".
#
# For instance:
#
# robot1 = Robot.new
#
# puts robot1.name
# => "BX777"
#
# robot2 = Robot.new
#
# puts robot2.name
# => "SD234"
#
# puts robot2.name
# => "SD234"
# Every once in a while we need to reset a robot to its factory settings, which means that their name gets wiped. The next time you ask, it gives a new name.
#
# if I say:
#
# robot3 = Robot.new
#
# puts robot3.name
# => "RF629"
#
# robot3.reset
#
# puts robot3.name
# => "ZC532"
# Extensions
# Counters
# It's important that we not overwork our robots. While resetting to factory defaults is great, the wear and tear on the robot mechanisms doesn't go away.
#
# For every action our robot takes, we should keep track of it.
#
# robot3 = Robot.new
# puts robot3.name
# puts robot3.name
#
# robot3.reset
# puts robot3.name
# puts robot3.name
#
# puts robot3.instruction_count
# => 5
# Robot Time
# Number of instructions is important, but so is the total age of the robot.
#
# robot3 = Robot.new
# puts robot3.timers
# => "21 seconds since last boot, 21 seconds since creation"
#
# robot3.reset
# puts robot3.timers
# => "8 seconds since last boot, 29 seconds since creation"

require 'pry'

# create a robot name using 2 letters and 3 numbers
# create a reset method to reset the name of the robot

class Robot

  # The initialize method will run as soon as an instance of the class has been created. it will store the variables that have been defined.
  def initialize
    @instruction_count = 0
    @name = make_name

    # we capture the current time with Time class.
    @created_at = Time.now
    @reset_at = Time.now
  end

  # This function will create the random name for the robot.
  def make_name
    # incrementing the count for each action the robot makes
    @instruction_count += 1
    # creating an array with an alphabetical range from A to Z then 'samples' two random letters
    robo_letters = ("A".."Z").to_a.sample(2)
    # creating an array with a numerical range from 0 to 9 then 'samples' three random letters
    robo_numbers = (0..9).to_a.sample(3)
    # Concatinating the two arrays together then stripping it from the array.
    name_pool = robo_letters.concat(robo_numbers).join
  end

  # this method will be able to call the name of the robot without resetting the name.
  def name
    @instruction_count += 1
    @name
  end

  def reset
    @instruction_count += 1
    @name = make_name
    # resetting the @boot_date variable
    @reset_at = Time.now
    p "Rebooting Robot...."
  end

  # Timers - Give me the times since creation and last boot.
  def timers
    @instruction_count += 1
    p "Unit has been active for #{Time.now - @created_at} seconds. #{Time.now - @reset_at} since reboot cycle"
  end


end
binding.pry

# creating a new instance of the Robot class.
# Because we are using a class, we require the 'new' keyword.
r1 = Robot.new
