require 'pry'

#TODO: Research using 'Struct' to create a new Class with simple attributes
# Node = Struct.new(:value, :next)


class SinglyLinkedList

  attr_accessor :head

  class Node
    attr_accessor :next, :value

    def initialize(value)
      @value = value
      @next = nil
    end

  end # end node

  def initialize( value )
    # create a new instance of the Node class, pass on the value to it, and set it as the @head of the list.
    @head = Node.new( value )
  end

  # equivalent of .push()
  def append( value )
    # need .last method
    # self.last
    last.next = Node.new(value)
  end

  def prepend(value)
    new_node = Node.new(value)
    new_node.next = @head
    @head = new_node
  end

  def last
    node = @head
    while node && node.next
      node = node.next # i = i +1
    end
    node
  end

  def to_s
    output = ''
    node = @head
    while node
      output += node.value + ', '
      node = node.next
    end
    output
  end

  def at_index(n)
    # returns Node object at position n in List
  end

  def find(needle)
    # returns Node object whose value === needle
  end

  def shift
    # removes the first element of the list and return its value (destructive)
  end

  def insert_after(node, value)
    #insert a new node after the given node arguement, with the given value
    # returns new node
  end

  def length
    # returns the length of the list
  end

  def reverse
    #return the reversed version of the list, without changing the list itself
  end

  def reverse!
    # destructive version: returns a reversed version of list, and sets list itself to that
  end

  def each
    # takes a block, and applies block to each node in list (ie node is provided as goalpost arg to block)
    # look up yield
  end

  # bonus: map, inject

end

list = SinglyLinkedList.new 'Groucho'
list.append 'Harpo'
list.append 'Chico'
list.prepend 'Zeppo'

binding.pry

puts 'done'
