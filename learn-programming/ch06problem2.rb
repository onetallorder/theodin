#Deaf Grandma

question = 'How are you, Grandma?'
puts 'Ask Grandma a question.'
while question != 'BYE'
question = gets.chomp
while question != question.upcase
	puts 'HUH? SPEAK UP, SONNY!'
	question = gets.chomp
end
year = rand(21) + 1930
puts 'No, not since ' + year.to_s	
end