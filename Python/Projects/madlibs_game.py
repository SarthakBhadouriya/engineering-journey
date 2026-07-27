# Create a madlibs game that takes user input for various parts of speech (e.g., nouns, verbs, adjectives) and generates a funny story using those inputs. The program should also handle typecasting to ensure that the inputs are treated as strings.

# Madlibs Game
# Taking user inputs for various parts of speech
noun = input("Enter a noun: ")
verb = input("Enter a verb: ")
adjective = input("Enter an adjective: ")
# Generating a funny story using the inputs
story = f"Once upon a time, there was a {adjective} {noun} who loved to {verb} all day long. One day, the {noun} decided to go on an adventure and {verb} through the forest. It was a {adjective} experience that the {noun} would never forget!"
print(story)