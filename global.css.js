/**
 * > See web.dev guide {@link https://web.dev/articles/constructable-stylesheets}
 */
const styling$global = new CSSStyleSheet();
    styling$global
    .insertRule(/* style */`
        body,
        body * {
            box-sizing: border-box;
            padding: 0;
            margin: 0;
        }
    `);
    styling$global.insertRule(/* style */`
        body {
            overflow: hidden;
        }
    `);
document.adoptedStyleSheets.push(styling$global);