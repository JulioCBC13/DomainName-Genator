let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let exten = [".com", ".net", ".us", ".io", ".dev"];

pronoun.forEach(pronombres => {
  adj.forEach(adjetivo => {
    noun.forEach(sustantivo => {
      exten.forEach(extensiones => {
        console.log(`${pronombres}${adjetivo}${sustantivo}${extensiones}`);
      });
    });
  });
});
