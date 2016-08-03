def LW(sen)

@sen = sen 

@x = ( @sen.to_s.scan(/\w+/).sort { |word| word.length } )

p @x[0]

end
