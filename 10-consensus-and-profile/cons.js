// Exercise Name: Consensus and Profile
// Exercise Number: 10

/* eslint-disable no-console */
const fs = require('fs');

// Reads text from FASTA-formatted text file
const readFromFile = (fileName) => {
  return fs.readFileSync(fileName, 'utf8');
};

// Split and scrub file text to just the DNA strand strings
const parseDNAStrings = (stringsFromFile) => {
  const stringArray = stringsFromFile.split(/>strand_/).filter(e => e.replace(/(\r)/gm, ''));
  const scrubbedArray = [];

  stringArray.forEach((strand) => {
    scrubbedArray.push(strand.replace(/[^A-Za-z]/g, ''));
  });

  return scrubbedArray;
};

const consensusStringAndMatrix = (stringsDNAFile) => {
  const stringsDNA = readFromFile(stringsDNAFile);

  const splitDNA = parseDNAStrings(stringsDNA);

  console.log(splitDNA);
};

consensusStringAndMatrix('stringsDNA.txt');
