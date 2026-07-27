# Creating a calculator that can perform basic arithmetic operations like addition, subtraction, multiplication, and division.

def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y

def divide(x, y):
    if y == 0:
        return "Error: Division by zero is not allowed."
    return x / y

print("Welcome to the Calculator!")
print("Select operation:")
print("1. Add")
print("2. Subtract")
print("3. Multiply")
print("4. Divide")

operation = input("Enter the number corresponding to the operation (1/2/3/4): ")
if operation not in {'1', '2', '3', '4'}:
    print("Invalid operation selected. Please choose a valid option.")
    exit()

print("Enter two numbers:")

# Defining a function to get numbers.
def get_number(prompt):
    while True:
        try:
            return float(input(prompt))
        except ValueError:
            print("Invalid input. Please enter a number.")

num1 = get_number("Enter first number: ")
num2 = get_number("Enter second number: ")

if operation == '1':
    print(f"The result of addition is: {add(num1, num2)}")
elif operation == '2':
    print(f"The result of subtraction is: {subtract(num1, num2)}")
elif operation == '3':
    print(f"The result of multiplication is: {multiply(num1, num2)}")
elif operation == '4':
    print(f"The result of division is: {divide(num1, num2)}")
