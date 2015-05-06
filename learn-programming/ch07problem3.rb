#Table of Contents

contents = ['Table of Contents', 'Chapter 1:  Numbers', 'page 1', 'Chapter 2:  Letters', 'page 72', 'Chapter 3:  Variables', 'page 118']
page_width = 80
puts (contents[0].center(page_width))
puts ''
puts (contents[1].ljust(page_width/2) + contents[2].rjust(page_width/2))
puts (contents[3].ljust(page_width/2) + contents[4].rjust(page_width/2))
puts (contents[5].ljust(page_width/2) + contents[6].rjust(page_width/2))