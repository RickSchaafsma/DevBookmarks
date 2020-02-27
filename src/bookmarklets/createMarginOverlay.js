var borders = 16;
var cssToInject = `
body::before{
    display: block;
    height:100%;
    width:100%;
    position:fixed;
    border-left: ${borders}px solid rgba(255,0,0, 0.2);
    border-right: ${borders}px solid rgba(255,0,0, 0.2);
    content: "";
    z-index:1000;
    pointer-events:none;
    box-sizing: border-box;
}

`
document.head.insertAdjacentHTML("beforeend", `<style>${cssToInject}</style>`);