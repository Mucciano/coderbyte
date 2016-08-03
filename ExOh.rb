def ExOh(str)

@x = str.scan(/[o, O]/).size

@y = str.scan(/[x, X]/).size

if @x == @y
return "true"
end

if @x != @y
return "false"
end
end