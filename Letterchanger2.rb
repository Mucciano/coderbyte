def LC(str)

@x = str.each_byte.to_a

@y = (@x.map { |x| x.next })

@z = (@y.map { |x| x.chr })

@a = (@z.map { |x| x.gsub('!', ' ') }) 

@a = @a.map { |x| print x }

end