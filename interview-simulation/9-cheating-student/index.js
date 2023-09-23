/*
You are running a classroom and suspect that some of your students are passing around the answer to a multiple-choice question disguised as a random note.

Your task is to write a function that, given a list of words and a note, finds and returns the word in the list that is scrambled inside the note, if any exists. If none exist, it returns the result "-" as a string. There will be at most one matching word. The letters don't need to be in order or next to each other. The letters cannot be reused.

Example:  
words = ["baby", "referee", "cat", "dada", "dog", "bird", "ax", "baz"]
note1 = "ctay"
find(words, note1) => "cat"   (the letters do not have to be in order)  
  
note2 = "bcanihjsrrrferet"
find(words, note2) => "cat"   (the letters do not have to be together)  
  
note3 = "tbaykkjlga"
find(words, note3) => "-"     (the letters cannot be reused)  
  
note4 = "bbbblkkjbaby"
find(words, note4) => "baby"    
  
note5 = "dad"
find(words, note5) => "-"    
  
note6 = "breadmaking"
find(words, note6) => "bird"    

note7 = "dadaa"
find(words, note7) => "dada"    

All Test Cases:
find(words, note1) -> "cat"
find(words, note2) -> "cat"
find(words, note3) -> "-"
find(words, note4) -> "baby"
find(words, note5) -> "-"
find(words, note6) -> "bird"
find(words, note7) -> "dada"
  
Complexity analysis variables:  
  
W = number of words in `words`  
S = maximal length of each word or of the note  
*/

const words = ["baby", "referee", "cat", "dada", "dog", "bird", "ax", "baz"];
const note1 = "ctay";
const note2 = "bcanihjsrrrferet";
const note3 = "tbaykkjlga";
const note4 = "bbbblkkjbaby";
const note5 = "dad";
const note6 = "breadmaking";
const note7 = "dadaa";

console.log(find2(words, note7))

//TOCHECK: broken, non-working
function find(words, note) {
  var incommingString = new Set()

  for (let x = 0; x < note.length; x++) {
    incommingString.add(note[x])
  }

  console.log(incommingString)

  let foundString = "";

  for (let wordIndex = 0; wordIndex < words.length; wordIndex++) {
    for (let letterIndex = 0; letterIndex < words[wordIndex].length; letterIndex++) {
      if (incommingString.has(words[wordIndex][letterIndex])) {
        foundString += words[wordIndex][letterIndex]
        incommingString.delete(words[wordIndex][letterIndex])
        console.log(incommingString)
      }
    }

    if (foundString === words[wordIndex]) {
      return words[wordIndex]
    } else {
      foundString = "";
      continue;
    }
  }

  if (foundString = "") {
    console.log("-")
    return "-"
  }
}

//TOCHECK: working, O (m * n)
function find2(words, note) {
  var incommingString = {}

  for (let x = 0; x < note.length; x++) {
    incommingString[note[x]] ? incommingString[note[x]]++ : incommingString[note[x]] = 1
  }

  let foundString = "";

  for (let wordIndex = 0; wordIndex < words.length; wordIndex++) {
    let incommingStringCopy = { ...incommingString }
    for (let letterIndex = 0; letterIndex < words[wordIndex].length; letterIndex++) {
      if (incommingStringCopy[words[wordIndex][letterIndex]] && incommingStringCopy[words[wordIndex][letterIndex]] > 0) {
        foundString += words[wordIndex][letterIndex]
        incommingStringCopy[words[wordIndex][letterIndex]]--
      }
    }

    if (foundString === words[wordIndex]) {
      return words[wordIndex]
    } else {
      foundString = "";
      continue;
    }
  }

  return "-"
}