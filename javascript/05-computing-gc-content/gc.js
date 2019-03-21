// Exercise:  Computing GC Content
// Number:    05

export const computeGC = (stringDNA = undefined) => {
  let strandsDNA = [];
  let countGC = 0;
  let labelDNA = {};
  let ratiosGC = {};

  // Code here to separate FASTA formatted strings into individual DNA
  // strands w/ correct tag
  // stringDNA = stringDNA.trim();
  strandsDNA = stringDNA.split('>');
  if(strandsDNA[0] === '') strandsDNA.shift();

  console.log('-------');
  strandsDNA.map(function(line) {
    line = line.trim()

    let splitTag = line.substring(0, line.indexOf('\n'));
    line = line.replace(splitTag, '');
    let splitLine = line.replace(/\r?\n|\r/g, '');

    console.log(splitLine);
    // console.log(splitTag);
    // console.log(line);
    console.log('-------');
  });



  // console.log('-------');
  // stringDNA.split('').map(function(nt) {
  //   let start = '';
  //   let end = ''
  //   // console.log(nt);
  //
  //   if(nt === '>') {
  //
  //   }
  // });
  // strandsDNA = stringDNA.split('\n');

  // console.log(strandsDNA.length);

  stringDNA.split('').map(function(nt) {
    if(nt === 'G' || nt === 'C') {
      countGC++;
    }
  });

  let ratioGC = countGC / stringDNA.length;

  // console.log('GC Ratio: ' + countGC);

  return ratioGC;
}

const fastaString = `>Rosalind_6404
CCTGCGGAAGATCGGCACTAGAATAGCCAGAACCGTTTCTCTGAGGCTTCCGGCCTTCCC
TCCCACTAATAATTCTGAGG
>Rosalind_5959
CCATCGGTAGCGCATCCTTAGTCCAATTAAGTCCCTATCCAGGCGCTCCGCCGAAGGTCT
ATATCCATTTGTCAGCAGACACGC
>Rosalind_0808
CCACCCTCGTGGTATGGCTAGGCATTCAGGAACCGGAGAACGCTTCAGACCAGCCCGGAC
TGGGAACCTGCGGGCAGTAGGTGGAAT`;

// computeGC('ATGC');        => .5
computeGC(fastaString);