// This file exports a function that parses the content of Markdown files, extracting the text and any relevant metadata needed for posting.

const marked = require('marked');

function parseMarkdown(content) {
    const tokens = marked.lexer(content);
    const parsedContent = {
        text: '',
        title: '',
        images: []
    };

    tokens.forEach(token => {
        if (token.type === 'heading' && token.depth === 1) {
            parsedContent.title = token.text;
        } else if (token.type === 'paragraph') {
            parsedContent.text += token.text + '\n';
        } else if (token.type === 'image') {
            parsedContent.images.push(token.href);
        }
    });

    return parsedContent;
}

module.exports = parseMarkdown;