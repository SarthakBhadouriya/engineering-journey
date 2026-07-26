"""Functions for creating, transforming, and adding prefixes to strings."""


def add_prefix_un(word):
    return "un"+word

def make_word_groups(vocab_words):
    separator = " :: "+vocab_words[0]
    return separator.join(vocab_words)

def remove_suffix_ness(word):
    word = word[:-4]
    if word[-1] == "i":
        word = word[:-1]+"y"
        return word
    return word

def adjective_to_verb(sentence, index):
    sentence_split = sentence.split(" ")
    selected_word = sentence_split[index]

    if selected_word.endswith("."):
        selected_word = selected_word[:-1] + "en"
        return selected_word
        
    return selected_word + "en"
