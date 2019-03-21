// Exercise:  Computing GC Content
// Number:    05

export const contentOfGC = (fastaDNA = undefined) => {
  let strandsDNA = [];
  let contentGC = {};
  let labelDNA = {};
  let countGC = 0;
  let ratioGC = 0;

  /*  Code here to separate FASTA formatted strings into individual DNA
      strands w/ correct tag  */
  // fastaDNA = fastaDNA.trim();

  // Parses the FASTA format into an object of tag and DNA strand
  labelDNA = parseFASTA(fastaDNA);

  for(let tag in labelDNA) {
    // console.log(`${tag}: ${labelDNA[tag]}`);
    contentGC[tag] = calculateGC(labelDNA[tag]);
  }

  for(let str in contentGC) {
    console.log(`${str}:  ${contentGC[str]}`);
  }

  // labelDNA.map(function(tag, dna) {
  //   console.log(`${tag}: ${dna}`);
  // });

  // console.log('-------');
  // fastaDNA.split('').map(function(nt) {
  //   let start = '';
  //   let end = ''
  //   // console.log(nt);
  //
  //   if(nt === '>') {
  //
  //   }
  // });
  // strandsDNA = fastaDNA.split('\n');

  // console.log(strandsDNA.length);

  // fastaDNA.split('').map(function(nt) {
  //   if(nt === 'G' || nt === 'C') {
  //     countGC++;
  //   }
  // });

  // let ratioGC = countGC / fastaDNA.length;

  // console.log('GC Ratio: ' + countGC);

  return ratioGC;
}

const parseFASTA = (stringInFASTA) => {
  let labelDNA = {};
  let strandsDNA = stringInFASTA.split('>');

  if(strandsDNA[0] === '') strandsDNA.shift();

  // console.log('-------');
  strandsDNA.map(function(line) {
    line = line.trim()

    let tag = line.substring(0, line.indexOf('\n'));
    line = line.replace(tag, '');
    let strandDNA = line.replace(/\r?\n|\r/g, '');
    labelDNA[tag] = strandDNA;

    // console.log(strandDNA);
    // console.log(tag);
    // console.log(line);
    // console.log('-------');
  });

  return labelDNA;
};

const calculateGC = (strandDNA) => {
  let amountGC = 0;
  // let ratioGC = 0;

  strandDNA.split('').map(function(nt) {
    if(nt === 'G' || nt === 'C') amountGC++;
  });

  let ratioGC = amountGC / strandDNA.length;

  // console.log(`G & C:     ${amountGC}`);
  console.log(`GC Ratio:  ${ratioGC}`);

  return ratioGC;
};

// ====================== Driver Code ======================

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
contentOfGC(fastaString);