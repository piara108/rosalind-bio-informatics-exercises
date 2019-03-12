// Exercise:  Complementing a Strand of DNA
// Number:    03

export const convertDNA = (strandDNA = undefined) => {
  let strandRNA = '';
  const pair = {
    'A': 'T',
    'C': 'G',
    'G': 'C',
    'T': 'A'
  };

  strandDNA.split('').map(function(nt) {
    strandRNA += pair[nt];
  });

  return strandRNA.reverse();
}