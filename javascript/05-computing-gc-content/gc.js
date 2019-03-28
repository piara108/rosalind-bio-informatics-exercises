// Exercise:  Computing GC Content
// Number:    05

export class fastaDNA {
  constructor(strandDNA) {
    this.strandHashDNA = parseFASTAToHash(strandDNA);
  }

  contentOfGC(fastaDNA) {
    let ratioGC = {};

    let labelDNA = parseFASTAToHash(fastaDNA);

    for(let tag in labelDNA) {
      ratioGC[tag] = calculateGCRatio(labelDNA[tag]);
    }

    let highestRatio = Object.keys(ratioGC).reduce(
      (a, b) => ratioGC[a] > ratioGC[b] ? a : b
    );

    return `${highestRatio}\n${ratioGC[highestRatio]}`;
  }

  parseFASTAToHash(stringInFASTA) {
    let strandsDNA = stringInFASTA.split('>');
    let labelDNA = {};

    strandsDNA.map(function(line) {
      let tag = line.trim().substring(0, line.indexOf('\n'));
      line = line.replace(tag, '');
      let strandDNA = line.replace(/\r?\n|\r/g, '');

      if(tag !== '') labelDNA[tag] = strandDNA.split('');
    });

    return labelDNA;
  }

  calculateGCRatio(strandDNArray) {
    let amountGC = 0;

    strandDNArray.map(function(nt) {
      if(nt === 'G' || nt === 'C') amountGC += 1;
    });

    return (amountGC / strandDNArray.length) * 100;
  }
}

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

let dnaRatio1 = fastaDNA

console.log('================================');

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
