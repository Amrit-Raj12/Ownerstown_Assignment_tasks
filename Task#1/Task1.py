def f(x):
    print(x%5+1,end='')
    f(x+1)
f(0)
