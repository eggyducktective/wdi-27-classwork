

arr = [1, 2, 3, 4, 5, 6] #(1..6).to_a

# a.each do |number|
#   p number
# end


# solve the problem in a shorter way.

def recursive_iteration(arr, indent=0)

  # remove the first element from the array and print it
  # base case: stop recursing. If there are any elements left in the array
  # call ourselves again with the shorter array
  # first = arr.shift # mutates the arg(arr)

  # first = arr.first
  # rest = arr[1..-1]

  # JS: const [first, ...rest] = arr
  first, *rest = arr # takes arr[0] into first variable, *rest means taking everything else and puts it into "rest" variable
  # destructuring, rest is [2, 3, 4, 5, 6]

  spaces = "    " * indent
  puts "#{spaces} recursive_iteration(#{arr.to_s})"
  puts "#{spaces} first: #{first}"
  puts "#{spaces} rest: #{rest.to_s}"
  # puts first
  puts first
  if rest.any?
    recursive_iteration(rest, indent+1)
  end

  puts "#{spaces} ---returning from recursive_iteration(#{arr.to_s}), first: #{first}"
end

recursive_iteration(arr)
