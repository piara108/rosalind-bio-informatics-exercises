# Complementing a String of DNA

## Problem

In DNA strings, symbols 'A' and 'T' are complements of each other, as are 'C' and 'G'.

The reverse complement of a DNA string s is the string sc formed by reversing the symbols of s, then taking the complement of each symbol (e.g., the reverse complement of "GTCA" is "TGAC").

Given: A DNA string s of length at most 1000 bp.

Return: The reverse complement s^c of s.

## Data Set
```
AAAACCCGGT
```

## Sample Output
```
ACCGGGTTTT
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

[Complementing a Strand of DNA](http://rosalind.info/problems/revc/)