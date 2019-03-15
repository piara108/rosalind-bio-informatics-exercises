// Exercise Name:   Counting DNA Nucleotides
// Exercise Number: 01

export const nucleotideCount = (strandDNA = undefined) => {
  let count = { 'A': 0, 'C': 0, 'G': 0, 'T': 0 };

  if(strandDNA === undefined) { return '0 0 0 0'}

  strandDNA.split('').map(function(nt) { count[nt] += 1; });

  return `${count['A']} ${count['C']} ${count['G']} ${count['T']}`;
}
