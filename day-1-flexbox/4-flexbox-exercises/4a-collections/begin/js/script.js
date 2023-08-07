const isSameDomain = (styleSheet) => {
if (!styleSheet.href) {
    return true;
}

return styleSheet.href.indexOf(window.location.origin) === 0;
};

const isStyleRule = (rule) => rule.type === 1;

const getCSSCustomPropIndex = () =>
[...document.styleSheets].filter(isSameDomain).reduce(
    (finalArr, sheet) =>
    finalArr.concat(
        [...sheet.cssRules].filter(isStyleRule).reduce((propValArr, rule) => {
        const props = [...rule.style]
            .map((propName) => [
            propName.trim(),
            rule.style.getPropertyValue(propName).trim()
            ])
            .filter(([propName]) => propName.indexOf("--") === 0);

        return [...propValArr, ...props];
        }, [])
    ),
    []
);


const padZero = (str, len) => {
    len = len || 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
};

const invertColor = (hex, bw) => {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    var r = parseInt(hex.slice(0, 2), 16),
        g = parseInt(hex.slice(2, 4), 16),
        b = parseInt(hex.slice(4, 6), 16);
    if (bw) {
        // https://stackoverflow.com/a/3943023/112731
        return (r * 0.299 + g * 0.587 + b * 0.114) > 186
            ? '#000000'
            : '#FFFFFF';
    }
    // invert color components
    r = (255 - r).toString(16);
    g = (255 - g).toString(16);
    b = (255 - b).toString(16);
    // pad each with zeros and return
    return "#" + padZero(r) + padZero(g) + padZero(b);
};

$(document).ready(function() {
    let cssCustomPropIndex = getCSSCustomPropIndex();
    let i = 3;

    //if getting the root variables failed (thanks Firefox/CORS), enter them manually
    if(cssCustomPropIndex.length == 0) {
        cssCustomPropIndex = [
            ['--color1', '#001219'],
            ['--color2', '#005f73'],
            ['--color3', '#3d9397'],
            ['--color4', '#94d28d'],
            ['--color5', '#e9d8a6'],
            ['--color6', '#ee9800'],
            ['--color7', '#ca6702'],
            ['--color8', '#bb3e03'],
            ['--color9', '#ae2012'],
            ['--color10', '#9b2226']
        ];
    }
    let n = 0;

    $("figure").each(function(){
        i = Math.floor(Math.random()*cssCustomPropIndex.length);
        $(this).css("border-color", cssCustomPropIndex[i][1]);
        //$(this).find("figcaption").css("background", invertColor(cssCustomPropIndex[i][1], 1));
        //$(this).find("figcaption > a").css("color", cssCustomPropIndex[i][1]);
        $(this).find("figcaption > a").css("color", cssCustomPropIndex[0][1]);
    });
});