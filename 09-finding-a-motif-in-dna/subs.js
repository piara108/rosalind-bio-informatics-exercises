// Exercise Name:   Finding a Motif In DNA
// Exercise Number: 09

export const substringFinder = (t, s) => {
  const substrandLength = t.length;
  const strandLength = s.length;
  let locations = [];

  if(substrandLength === 0 || strandLength === 0) {
    throw new Error('Substrand or Strand length must be greater than 0 bp');
  }
  else if(substrandLength >= strandLength) {
    throw new Error('Substrand(t) must be shorter than Strand(s)')
  }

  for(var x = 0; x < strandLength; x++) {
    var strandSlice = s.slice(x, x + substrandLength);
    var index = x + 1;

    if(t === strandSlice) { locations.push(index); }
  }

  return (locations.length > 0) ? locations : 'No motives found';
};
