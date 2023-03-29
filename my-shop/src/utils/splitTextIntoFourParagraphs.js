//todo

export const splitBySentence = (str) => {
   const paragraphs = str.replace(/([.?!])(\s)*(?=[A-Z])/g, "|")
   .split('\n')
      .filter(sentence => !!sentence)
      .map(sentence => sentence.trim());

      let index = parseInt(paragraphs.length/4); 
      console.log(paragraphs)
      let newParagr = [];
      for(let i = 0; i < index; i++){
          newParagr.push(paragraphs[i])
      }
      console.log(newParagr)
    return  newParagr;
}

