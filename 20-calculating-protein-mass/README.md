# Calculating Protein Mass

## Problem
In a weighted alphabet, every symbol is assigned a positive real number called a weight. A string formed from a weighted alphabet is called a weighted string, and its weight is equal to the sum of the weights of its symbols.

The standard weight assigned to each member of the 20-symbol amino acid alphabet is the monoisotopic mass of the corresponding amino acid.

**Given:** A protein string *P* of length at most 1000 [aa](https://en.wikipedia.org/wiki/Amino_acid).
**Return:** The total weight of *P*. Consult the [monoisotopic mass table](https://en.wikipedia.org/wiki/Proteinogenic_amino_acid#Mass_spectrometry).

## Data Set
```
SKADYEK
```

## Sample Output
```
821.392
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
[http://rosalind.info/problems/prtm/](http://rosalind.info/problems/prtm/)
