def Cap(str)

@x = str.split

@y = @x.map { |x| x.capitalize }

@y.join(' ')

end