#99 Bottles of Beer on the Wall

beer = 99

while beer != 0
	puts beer.to_s + ' bottles of beer on the wall!'
	puts beer.to_s + ' bottles of beer!'
	beer = beer - 1
	puts 'take one down, pass it around'

	if beer == 1
		puts beer.to_s + ' bottle of beer on the wall!'
	else
		puts beer.to_s + ' bottles of beer on the wall!'
	end

	puts ''

	if beer == 1
		puts beer.to_s + ' bottle of beer on the wall!'
		puts beer.to_s + ' bottle of beer!'
		beer = beer - 1
		puts 'take one down, pass it around'
		puts beer.to_s + ' bottles of beer on the wall!'
	end
end
puts 'Now you\'re trashed!'