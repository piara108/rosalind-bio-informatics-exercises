// Exercise:  Computing GC Content
// Number:    05

/*  The main space where functions are called
    and most code is run */
export const contentOfGC = (fastaDNA = undefined) => {
  let strandsDNA = [];
  let contentGC = {};
  let labelDNA = {};
  let countGC = 0;
  let ratioGC = 0;

  labelDNA = parseFASTA(fastaDNA);

  for(let tag in labelDNA) {
    contentGC[tag] = calculateGC(labelDNA[tag]);
    console.log(`${contentGC[tag]}`);
  }


  let highestRatio = Object.keys(contentGC).reduce(
    (a, b) => contentGC[a] > contentGC[b] ? a : b
  );

  // console.log(`${highestRatio}\n${contentGC[highestRatio]}`);

  return `${highestRatio}\n${contentGC[highestRatio]}`;
}

/*  Parses FASTA-formatted string into object
    w/ key=tag and value=dna sequence */
const parseFASTA = (stringInFASTA) => {
  let strandsDNA = stringInFASTA.split('>');
  let labelDNA = {};

  if(strandsDNA[0] === '') strandsDNA.shift();

  strandsDNA.map(function(line) {
    let tag = line.trim().substring(0, line.indexOf('\n'));
    line = line.replace(tag, '');
    let strandDNA = line.replace(/\r?\n|\r/g, '');

    labelDNA[tag] = strandDNA;
  });

  return labelDNA;
};

/*  Calculates the ratio of G and C nucleotides to
    all of the nucleotides in the DNA strand */
const calculateGC = (strandDNA) => {
  let amountGC = 0;

  strandDNA.split('').map(function(nt) {
    if(nt === 'G' || nt === 'C') amountGC++;
  });

  return (amountGC / strandDNA.length) * 100;
};

// ====================== Driver Code ======================

const fastaString1 = `>Rosalind_6404
CCTGCGGAAGATCGGCACTAGAATAGCCAGAACCGTTTCTCTGAGGCTTCCGGCCTTCCC
TCCCACTAATAATTCTGAGG
>Rosalind_5959
CCATCGGTAGCGCATCCTTAGTCCAATTAAGTCCCTATCCAGGCGCTCCGCCGAAGGTCT
ATATCCATTTGTCAGCAGACACGC
>Rosalind_0808
CCACCCTCGTGGTATGGCTAGGCATTCAGGAACCGGAGAACGCTTCAGACCAGCCCGGAC
TGGGAACCTGCGGGCAGTAGGTGGAAT`;

contentOfGC(fastaString1);

const fastaString2 = `>Rosalind_5150
ACAAGATGCCATTGTCCCCCGGCCTCCTGCTGCTGCTGCTCTCCGGGGCCACGGCCACCGCTGCTCTGCC
CCTGGAGGGTGGCCCCACCGGCCG
>Rosalind_0707
AGACAGCGAGCATATGCAGGAAGCGGCAGGAATAAGGAAAAGCAGC
CTCCTGACTTTCCTCGCTTGGTGGTTTGAGTGGACCTCCCAGGCCAGTGCCGGGCCCCTCATAGGAGAGG
>Rosalind_0423
AAGCTCGGGAGGTGGCCAGGCGGCAGGAAGGCGCACCCCCCCAGCAATCCGCGCGCCGGGACAGAATGCC
CTGCAGGAACTTCTTCTG
>Rosalind_0616
GAAGACCTTCTCCTCCTGCAAATAAAACCTCACCCATGAATGCTCACGCAAG
TTTAATTACAGACCTGAA`

contentOfGC(fastaString2);