# Finding a Motif in DNA

## Problem

Given two [strings](https://en.wikipedia.org/wiki/String_(computer_science)) *s* and *t*, *t* is a substring of *s* if *t* is contained as a contiguous collection of symbols in *s* (as a result, *t* must be no longer than *s*).

The position of a symbol in a string is the total number of symbols found to its left, including itself (e.g., the positions of all occurrences of 'U' in "AUGCUUCAGAAAGGUCUUACG" are 2, 5, 6, 15, 17, and 18). The symbol at position *i* of *s* is denoted by *s*[*i*].

A substring of *s* can be represented as *s*[*j*:*k*], where *j* and *k* represent the starting and ending positions of the substring in *s*; for example, if *s* = "AUGCUUCAGAAAGGUCUUACG", then *s*[2:5] = "UGCU".

The [location](https://en.wikipedia.org/wiki/String_searching_algorithm) of a substring *s*[*j*:*k*] is its beginning position *j*; note that *t* will have multiple locations in *s* if it occurs more than once as a substring of *s* (see the Sample below).

**Given:** Two [DNA strings](http://en.wikipedia.org/wiki/DNA) *s* and *t* (each of length at most 1 [kbp](http://en.wikipedia.org/wiki/Base_pair#Length_measurements)).

**Return:** All locations of *t* as a substring of *s*.

## Data Set
```
GATATATGCATATACTT
ATAT
```

## Sample Output
```
2 4 10
```

## Requirements

Install necessary dependencies:
```bash
$ npm install
```

## Making the Test Suite Pass

Run the Test Suite using:
```bash
$ npm test
```

Delete the the x in `xtest` in order to run the test.

## Source

[Finding a Motif in DNA](http://rosalind.info/problems/subs/)