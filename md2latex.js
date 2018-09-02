const marked = require('marked');
const TexRenderer = require('marked-tex-renderer');

marked.setOptions({
    renderer: new TexRenderer(),
    imageRenderer: TexRenderer.imageImpl,
    linkRenderer: TexRenderer.linkImpl
});

const latexPreamble = `
\\makeatletter
\\renewcommand{\\@seccntformat}[1]{}
\\makeatother
`;

module.exports = function(mdContent) {
    return latexPreamble + marked(mdContent);
};
