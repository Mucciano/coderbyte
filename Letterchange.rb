def LC(str)

@x = str.gsub(/\s+/, "111")

@y = (@x.scan(/[a-z]/).each { |x| print x.next })

@y.join.gsub(/\d/, " ")

end