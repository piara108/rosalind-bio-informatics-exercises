# Consensus and Profile

## Problem
A [matrix](https://en.wikipedia.org/wiki/Matrix_(mathematics)) is a rectangular table of values divided into rows and columns. An *m*×*n* matrix has *m* rows and *n* columns. Given a matrix *A*, we write *Ai,j* to indicate the value found at the intersection of row *i* and column *j*.

Say that we have a collection of [DNA strings](https://en.wikipedia.org/wiki/DNA), all having the same length *n*. Their [profile matrix](https://en.wikipedia.org/wiki/Sequence_alignment#Motif_finding) is a 4×*n* [matrix](https://en.wikipedia.org/wiki/Matrix_(mathematics)) *P* in which *P1,j* represents the number of times that 'A' occurs in the j**th position of one of the strings, *P2,j* represents the number of times that C occurs in the *j*th position, and so on (see below).

A [consensus string](https://en.wikipedia.org/wiki/Consensus_sequence) *c* is a string of length *n* formed from our collection by taking the most common symbol at each position; the *j*th symbol of *c* therefore corresponds to the symbol having the maximum value in the *j*-th column of the profile matrix. Of course, there may be more than one most common symbol, leading to multiple possible consensus strings.

                                      DNA Strings
                                    A T C C A G C T
                                    G G G C A A C T
                                    A T G G A T C T
                                    A A G C A A C C
                                    T T G G A A C T
                                    A T G C C A T T
                                    A T G G C A C T

                                  -------------------                            
                                      Profile
                                  A   5 1 0 0 5 5 0 0
                                  C   0 0 1 4 2 0 6 1
                                  G   1 1 6 3 0 1 0 0
                                  T   1 5 0 0 0 1 1 6

                               --------------------------

                               Consensus	A T G C A A C T


**Given:** A collection of at most 10 [10 DNA strings](https://en.wikipedia.org/wiki/DNA) of equal length (at most 1 [kbp](https://en.wikipedia.org/wiki/Base_pair#Length_measurements)) in [FASTA format](https://en.wikipedia.org/wiki/FASTA_format).

**Return:** A consensus string and profile matrix for the collection. (If several possible consensus strings exist, then you may return any one of them.)

## Data Set
```
>Rosalind_1
ATCCAGCT
>Rosalind_2
GGGCAACT
>Rosalind_3
ATGGATCT
>Rosalind_4
AAGCAACC
>Rosalind_5
TTGGAACT
>Rosalind_6
ATGCCATT
>Rosalind_7
ATGGCACT
```

## Sample Output
```
ATGCAACT
A: 5 1 0 0 5 5 0 0
C: 0 0 1 4 2 0 6 1
G: 1 1 6 3 0 1 0 0
T: 1 5 0 0 0 1 1 6
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

Delete the x in `xtest` in order to run the test.

## Source
[Consensus and Profile](http://rosalind.info/problems/cons/)