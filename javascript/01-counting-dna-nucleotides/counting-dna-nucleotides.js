// Exercise Name:   Counting DNA Nucleotides
// Exercise Number: 01

var nucleotideCount = (strandDNA) => {
  let count = { 'A': 0, 'C': 0, 'G': 0, 'T': 0 };

  strandDNA.split('').map(function(nt) { count[nt] += 1; });

  return `${count['A']} ${count['C']} ${count['G']} ${count['T']}`;
}
