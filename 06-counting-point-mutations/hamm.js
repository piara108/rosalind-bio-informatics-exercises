// Exercise Name:   Counting Point Mutations
// Exercise Number: 06

export const distanceHamming = (strandDNA1, strandDNA2) => {
  let dist = 0;

  if(!(strandDNA1.length === strandDNA2.length)) {
    throw new Error('Strands must be equal in length');
  }
  else if(strandDNA1.length === 0 || strandDNA2.length === 0) {
    throw new Error('Strands must be greater than 0 in length');
  }
  else {
    for(var x = 0; x < strandDNA1.length; x++) {
      if(strandDNA1[x] !== strandDNA2[x]) dist++;
    }
  }

  return dist++;
};
