// Exercise Name:   Translating RNA into Protein
// Exercise Number: 08

const aminoAcids = {
  'GCA': 'A', 'GCC': 'A', 'GCG': 'A', 'GCU': 'A',
  'UGC': 'C', 'UGU': 'C',
  'GAU': 'D', 'GAC': 'D',
  'GAA': 'E', 'GAG': 'E',
  'UUC': 'F', 'UUU': 'F',
  'GGA': 'G', 'GGC': 'G', 'GGG': 'G', 'GGU': 'G',
  'CAC': 'H', 'CAU': 'H',
  'AUA': 'I', 'AUC': 'I', 'AUU': 'I',
  'AAA': 'K', 'AAG': 'K',
  'UUA': 'L', 'CUC': 'L', 'CUU': 'L', 'UUG': 'L', 'CUA': 'L', 'CUG': 'L',
  'AUG': 'M',
  'AAU': 'N', 'AAC': 'N',
  'CCU': 'P', 'CCC': 'P', 'CCA': 'P', 'CCG': 'P',
  'CAA': 'Q', 'CAG': 'Q',
  'CGU': 'R', 'CGC': 'R', 'CGA': 'R', 'AGA': 'R', 'AGG': 'R', 'CGG': 'R',
  'UCU': 'S', 'UCC': 'S', 'UCA': 'S', 'UCG': 'S', 'AGU': 'S', 'AGC': 'S',
  'ACU': 'T', 'ACC': 'T', 'ACA': 'T', 'ACG': 'T',
  'UGG': 'W',
  'GUU': 'V', 'GUC': 'V', 'GUA': 'V', 'GUG': 'V',
  'UAU': 'Y', 'UAC': 'Y',
  'UAA': 'STOP', 'UAG': 'STOP', 'UGA': 'STOP'
}

export const translateRNA = (strandRNA) => {
  let protein = '';

  strandRNA.match(/.{1,3}/g).map(function(nt) {
    console.log('RNA: ' + nt);
    for(let amino in aminoAcids) {
      let letter = aminoAcids[amino];

      // console.log('Amino: ' + amino);
      // console.log(letter);

      if(letter === 'STOP') {
        // console.log(letter);
        // protein += '';
        // console.log("Break ");
        return protein;
      }
      else if(amino === nt) {
        protein += letter;
      }
    }
  });

  return protein;
};

// ============================== Driver Code ==============================

// console.log(translateRNA('GCGAACGCACUC'));

console.log(translateRNA('AUGGCCAUGGCGUGAAUGGCCAUGGCG'));
// => MAMA


// console.log(translateRNA('CCCAGAACUGAGAUCAAUAGUACCCGUAUUAACGGGUGA'));