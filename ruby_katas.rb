# 7 kyu - Disemvowel Trolls

# Trolls are attacking your comment section!

# A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

# Your task is to write a function that takes a string and return a new string with all vowels removed.

# For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

# Note: for this kata y isn't considered a vowel.


def disemvowel(str)
  str.tr('aeiouAEIOU', '')
end

str = "This website is for losers LOL!" 

p disemvowel(str)


#7 kyu - Highest and Lowest

# In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

# Examples
# high_and_low("1 2 3 4 5")  # return "5 1"
# high_and_low("1 2 -3 4 5") # return "5 -3"
# high_and_low("1 9 3 4 -5") # return "9 -5"
# Notes
# All numbers are valid Int32, no need to validate them.
# There will always be at least one number in the input string.
# Output string must be two numbers separated by a single space, and highest number is first.

# def high_and_low(str)
#   arr = (str.split(" ").collect {|str| str.to_i})
#   return "#{arr.max} #{arr.min}"
# end


#refactor 

def high_and_low(numbers)
  numbers.split(" ").map(&:to_i).minmax.reverse
end


arr = ("8 3 -5 42 -1 0 0 -9 4 7 4 -4")
p high_and_low(arr)

