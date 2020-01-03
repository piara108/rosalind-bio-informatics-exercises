// Exercise Name:   Transcribing DNA into RNA
// Exercise Number: 02

export const toRNA = (strandDNA = undefined) => {
  let strandRNA = '';

  strandDNA.split('').map(function(nt) {
    strandRNA += (nt === 'T') ? 'U' : nt;
  });

  return strandRNA;
}
