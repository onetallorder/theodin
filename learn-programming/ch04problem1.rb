puts 'Good day, my name is Rupert.  Welcome to the Ruby Initiation Center.  What is your first name?'
first_name = gets.chomp
puts 'Thank you.  And your middle name?'
middle_name = gets.chomp
puts 'Great.  And finally, may I have your last name, please?'
last_name = gets.chomp
puts 'Excellent!  I am very pleased to meet you ' + first_name + ' ' +  middle_name + ' ' + last_name + '.'

# Alternative method using string interpolation to print final statement:
#puts "Excellent! I am very pleased to meet you #{first_name} #{middle_name} #{last_name}"