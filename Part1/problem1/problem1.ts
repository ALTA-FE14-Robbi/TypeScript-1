// Program Acronym

export const acronym = (phrase: string) => {
  const words = phrase.split(' ');
  let acronym = '';

  for (let i = 0; i < words.length; i++) {
    const firstLetter = words[i].charAt(0);
    acronym += firstLetter.toUpperCase();
  }

  return acronym;
}


// console.log(acronym("Portable Network Graphics")); // PNG
// console.log(acronym("Correct me if I'm wrong")); // CMIIW
// console.log(acronym("Thanks god It's Friday")); // TGIF
