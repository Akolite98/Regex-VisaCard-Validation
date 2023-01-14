I validated a Visa Card number using Regular Expression and also testing for some use cases.

The valid Visa Card number satisfied the following conditions:

It should be 13 or 16 digits long, new cards have 16 digits and old cards have 13 digits.
It should start with 4.
If the cards have 13 digits the next twelve digits should be any number between 0-9.
If the cards have 16 digits the next fifteen digits should be any number between 0-9.
It should not contain any alphabet or special characters.

APPROACH

Get the String.
Create a regular expression to check valid Visa Card number as mentioned below:

regex = "^4[0-9]{12}(?:[0-9]{3})?$";

Where:
^ represents the starting of the string.
4 represents the string that should start with 4.
[0-9]{12} represents the next twelve digits should be any between 0-9.
( represents the start of the group.
? represents the 0 or 1 time.
[0-9]{3} represents the next three digits should be any between 0-9.
) represents the ending of the group.
? represents the 0 or 1 time.
$ represents the ending of the string.
Match the given string with the Regular Expression.
In Java, this can be done by using Pattern.matcher().
In C++, this can be done by using regex_match().
Return true if the string matches with the given regular expression, else return false.

TEST CASES RESULTS;
true
true
false
false
false
false
