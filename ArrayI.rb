def ArrayI(arr)

@x = 0 
arr.sort

while @x < (arr.length-1) 
 
p (arr[@x] + arr[@x+1])
@x +=1 

end
end