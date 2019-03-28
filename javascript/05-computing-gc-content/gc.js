// Exercise:  Computing GC Content
// Number:    05

/*  The main space where functions are called
    and most code is run */
export const contentOfGC = (fastaDNA) => {
  let ratioGC = {};
  // let labelDNA = {};

  let labelDNA = parseFASTA(fastaDNA);

  for(let tag in labelDNA) {
    ratioGC[tag] = calculateGCRatio(labelDNA[tag]);
    // console.log(`${tag}: ${ratioGC[tag]}`);
  }

  let highestRatio = Object.keys(ratioGC).reduce(
    (a, b) => ratioGC[a] > ratioGC[b] ? a : b
  );

  console.log(`${highestRatio}\n${ratioGC[highestRatio]}`);

  return `${highestRatio}\n${ratioGC[highestRatio]}`;
}

/*  Parses FASTA-formatted string into object
    w/ key=tag and value=dna sequence */
const parseFASTA = (stringInFASTA) => {
  let strandsDNA = stringInFASTA.split('>');
  let labelDNA = {};

  strandsDNA.map(function(line) {
    let tag = line.trim().substring(0, line.indexOf('\n'));
    line = line.replace(tag, '');
    let strandDNA = line.replace(/\r?\n|\r/g, '');

    if(tag !== '') labelDNA[tag] = strandDNA;

  });

  // console.log(labelDNA);

  let objectLength = Object.getOwnPropertyNames(labelDNA);
  // console.log(`Object Size: ${objectLength.length}`);

  return labelDNA;
};

/*  Calculates the ratio of G and C nucleotides to
    all of the nucleotides in the DNA strand */
const calculateGCRatio = (strandDNA) => {
  let amountGC = 0;

  // console.log(strandDNA);
  // console.log('====================================');
  const strandLength = strandDNA.length;

  strandDNA.split('').map(function(nt) {
    if(nt === 'G' || nt === 'C') amountGC += 1;
  });

  return (amountGC / strandLength) * 100;
};

// ====================== Driver Code ======================

const fastaTest1 = `>Rosalind_6404
CCTGCGGAAGATCGGCACTAGAATAGCCAGAACCGTTTCTCTGAGGCTTCCGGCCTTCCCTCCCACTAA
TAATTCTGAGG
>Rosalind_5959
CCATCGGTAGCGCATCCTTAGTCCAATTAAGTCCCTATCCAGGCGCTCCGCCGAAGGTCTATATCCATT
TGTCAGCAGACACGC
>Rosalind_0808
CCACCCTCGTGGTATGGCTAGGCATTCAGGAACCGGAGAACGCTTCAGACCAGCCCGGACTGGGAACCT
GCGGGCAGTAGGTGGAAT`;

contentOfGC(fastaTest1);

// console.log(contentOfGC(fastaTest1));

// let dnaString = contentOfGC(fastaTest1);
// //
// if(dnaString === 'Rosalind_0808\n60.91954022988506') {
//   console.log('Yaaay, c\'est vrai!');
// }

const fastaTest2 = `>Rosalind_5150
ACAAGATGCCATTGTCCCCCGGCCTCCTGCTGCTGCTGCTCTCCGGGGCCACGGCCACCGCTGCTCTGC
CCCTGGAGGGTGGCCCCACCGGCCG
>Rosalind_0707
AGACAGCGAGCATATGCAGGAAGCGGCAGGAATAAGGAAAAGCAGCCTCCTGACTTTCCTCGCTTGGTG
GTTTGAGTGGACCTCCCAGGCCAGTGCCGGGCCCCTCATAGGAGAGG
>Rosalind_0423
AAGCTCGGGAGGTGGCCAGGCGGCAGGAAGGCGCACCCCCCCAGCAATCCGCGCGCCGGGACAGAATGC
CCTGCAGGAACTTCTTCTG
>Rosalind_0616
GAAGACCTTCTCCTCCTGCAAATAAAACCTCACCCATGAATGCTCACGCAAGTTTAATTACAGACCTGAA`;

// contentOfGC(fastaTest2);