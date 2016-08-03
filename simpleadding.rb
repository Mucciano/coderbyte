def add(n)
  if n == 0
    0
  else
    n + add(n-1)
  end
end