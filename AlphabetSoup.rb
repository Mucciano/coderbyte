def AlphabetSoup(str)

@x = str.scan(/\w/) 

@y = @x.map {|x| x.ord} 

@z = @y.sort.map { |x| x.chr }

return @z.join

end

