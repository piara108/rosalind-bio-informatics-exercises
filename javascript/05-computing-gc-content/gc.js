// Exercise:  Computing GC Content
// Number:    05

export const computeGC = (strand = undefined) => {
  let countGC = 0;

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