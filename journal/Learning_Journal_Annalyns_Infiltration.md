# Learning Journal — Annalyn's Infiltration

## What Happened

I spent approximately 1.5 hours trying to solve the fourth task of Annalyn's Infiltration on Exercism.

My initial approach was to solve the entire problem using only logical operators (`&&`, `||`, and `!`). I repeatedly tried different combinations of boolean expressions, truth tables, and logical simplifications, but I kept failing because there were too many combinations to account for and I was forcing myself into a single style of solution.

After many failed attempts, I changed my approach and used `if` statements instead. I identified the conditions under which the function should return `true`, wrote those conditions explicitly, and used `return false` as the default case.

The solution worked on the first attempt.

## What I Learned

The biggest mistake was not a lack of JavaScript knowledge. The mistake was assuming that the problem had to be solved in a specific way.

I was asking:

> "How do I write one perfect boolean expression?"

when I should have been asking:

> "How do I make the program return the correct answer?"

Changing the question changed the solution.

## Key Insight

Do not confuse a clever solution with a good solution.

A solution that is correct, readable, and easy to modify is often more valuable than a compact or clever one.

## Principles to Remember

1. First make it work.
2. Then make it right.
3. Then make it fast (if needed).

> A super-fast algorithm that gives the wrong answer is worthless.

## Reflection

This experience taught me that programming is not only about syntax, operators, or language features. It is also about problem-solving and knowing when to abandon an unproductive approach.

When stuck for a long time, ask:

> "Am I trying to solve the problem, or am I trying to solve the problem in a specific way?"

That question alone can save hours of frustration.
