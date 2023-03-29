export const splitBySentence = (str) => {
    const paragraphs = str.replace(/([.?!])(\s)*(?=[A-Z])/g, "|")
        .split('|')
        .filter(sentence => !!sentence)
        .map(sentence => sentence.trim());

    let index = parseInt(paragraphs.length / 4);

    let firstParagraph = [];
    let secondParagraph = [];
    let thirdParagraph = [];
    let fourtParagraph = [];
    for (let i = 0; i < index; i++) {
        firstParagraph.push(paragraphs[i]);
        secondParagraph.push(paragraphs[i + index]);
        thirdParagraph.push(paragraphs[i + 2 * index]);
        fourtParagraph.push(paragraphs[i + 3 * index]);
    }

    return [firstParagraph, secondParagraph, thirdParagraph, fourtParagraph];
}

