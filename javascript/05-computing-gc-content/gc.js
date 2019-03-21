// Exercise:  Computing GC Content
// Number:    05

export const computeGC = (strand = undefined) => {
  let strandsDNA = [];
  let countGC = 0;
  let dnaGC = {};

  // Code here to separate FASTA formatted strings into individual DNA
  // strands w/ correct tag


  strand.split('').map(function(nt) {
    if(nt === 'G' || nt === 'C') {
      countGC++;
    }
  });

  let ratioGC = countGC / strand.length;

  // console.log('GC Ratio: ' + countGC);

  return ratioGC;
}

computeGC('ATGC');