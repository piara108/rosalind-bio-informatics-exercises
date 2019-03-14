# Computing GC Content

## Problem

The GC-content of a [DNA string](https://en.wikipedia.org/wiki/DNA) is given by the percentage of [symbols](https://en.wikipedia.org/wiki/String_(computer_science)) in the string that are 'C' or 'G'. For example, the GC-content of "AGCTATAG" is 37.5%. Note that the [reverse complement](https://en.wikipedia.org/wiki/Complementarity_(molecular_biology)) of any DNA string has the same GC-content.

DNA strings must be labeled when they are consolidated into a database. A commonly used method of string labeling is called [FASTA format](https://en.wikipedia.org/wiki/FASTA_format). In this format, the string is introduced by a line that begins with '>', followed by some labeling information. Subsequent lines contain the string itself; the first line to begin with '>' indicates the label of the next string.

In Rosalind's implementation, a string in FASTA format will be labeled by the ID "Rosalind_xxxx", where "xxxx" denotes a four-digit code between 0000 and 9999.

Given: At most 10 [DNA strings](https://en.wikipedia.org/wiki/DNA) in FASTA format (of length at most 1 [kbp](http://en.wikipedia.org/wiki/Base_pair#Length_measurements) each).

Return: The ID of the string having the highest GC-content, followed by the GC-content of that string. Rosalind allows for a default error of 0.001 in all decimal answers unless otherwise stated; please see the note on absolute error below.

## Data Set

```
>Rosalind_6404
CCTGCGGAAGATCGGCACTAGAATAGCCAGAACCGTTTCTCTGAGGCTTCCGGCCTTCCC
TCCCACTAATAATTCTGAGG
>Rosalind_5959
CCATCGGTAGCGCATCCTTAGTCCAATTAAGTCCCTATCCAGGCGCTCCGCCGAAGGTCT
ATATCCATTTGTCAGCAGACACGC
>Rosalind_0808
CCACCCTCGTGGTATGGCTAGGCATTCAGGAACCGGAGAACGCTTCAGACCAGCCCGGAC
TGGGAACCTGCGGGCAGTAGGTGGAAT
```

## Sample Output

```
Rosalind_0808
60.919540
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

[rosalind.info](http://rosalind.info/problems/gc/)