import markFormats from "../../../components/editor/markFormats";

const renderMarkStyle = (mark) => {
    let styles = {};
markFormats.forEach(format => {

    if(mark[format]) {
        console.log(format);
        styles = {...styles,...format.styles}
    }
})

return styles;
    // if mark.bold ? return {fontWEIGHT}
}
export default renderMarkStyle;