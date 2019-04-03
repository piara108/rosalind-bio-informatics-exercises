# Translating RNA into Protein

## Problem
The 20 commonly occurring amino acids are abbreviated by using 20 letters from the English [alphabet](https://en.wikipedia.org/wiki/Alphabet_(computer_science)) (all letters except for B, J, O, U, X, and Z). **[Protein strings](https://en.wikipedia.org/wiki/Protein)** are constructed from these 20 symbols. Henceforth, the term **[genetic string](https://en.wikipedia.org/wiki/Polymer)** will incorporate protein strings along with [DNA strings](https://en.wikipedia.org/wiki/DNA) and [RNA strings](https://en.wikipedia.org/wiki/RNA).

The **[RNA codon table](https://en.wikipedia.org/wiki/Genetic_code#RNA_codon_table)** dictates the details regarding the encoding of specific codons into the amino acid alphabet.

**Given:** An [RNA string](https://en.wikipedia.org/wiki/RNA) *s* corresponding to a strand of mRNA (of length at most 10 [kbp](https://en.wikipedia.org/wiki/Base_pair#Length_measurements).

**Return:** The protein string encoded by *s*.

## Data Set
```
AUGGCCAUGGCGCCCAGAACUGAGAUCAAUAGUACCCGUAUUAACGGGUGA
```

## Sample Output
```
MAMAPRTEINSTRING
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

[rosalind.info](http://rosalind.info/problems/prot/)