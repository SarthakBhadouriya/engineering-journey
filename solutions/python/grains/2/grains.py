def square(number):
    if number > 64 or number < 1 :
        raise ValueError("square must be between 1 and 64")

    return 2**(number-1)

def total():
    total_grains = 0
    for square in range (0,64):
        total_grains += 2**square
    return total_grains
