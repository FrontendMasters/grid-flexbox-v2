

function include(filename, onload) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.src = filename;
    script.type = 'text/javascript';
    script.onload = script.onreadystatechange = function() {
        if (script.readyState) {
            if (script.readyState === 'complete' || script.readyState === 'loaded') {
                script.onreadystatechange = null;                                                  
                onload();
            }
        } 
        else {
            onload();          
        }
    };
    head.appendChild(script);
}


/*
 Check if the stylesheet is internal or hosted on the current domain.
 If it isn't, attempting to access sheet.cssRules will throw a cross origin error.
 See https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet#Notes
 
 NOTE: One problem this could raise is hosting stylesheets on a CDN with a
 different domain. Those would be cross origin, so you can't access them.
*/
const isSameDomain = (styleSheet) => {
    // Internal style blocks won't have an href value
    if (!styleSheet.href) {
      return true;
    }
  
    return styleSheet.href.indexOf(window.location.origin) === 0;
};

/*
Determine if the given rule is a CSSStyleRule
See: https://developer.mozilla.org/en-US/docs/Web/API/CSSRule#Type_constants
*/
const isStyleRule = (rule) => rule.type === 1;

/**
 * Get all custom properties on a page
 * @return array<array[string, string]>
 * ex; [["--color-accent", "#b9f500"], ["--color-text", "#252525"], ...]
 */
const getCSSCustomPropIndex = () =>
// styleSheets is array-like, so we convert it to an array.
// Filter out any stylesheets not on this domain
[...document.styleSheets].filter(isSameDomain).reduce(
    (finalArr, sheet) =>
    finalArr.concat(
        // cssRules is array-like, so we convert it to an array
        [...sheet.cssRules].filter(isStyleRule).reduce((propValArr, rule) => {
        const props = [...rule.style]
            .map((propName) => [
            propName.trim(),
            rule.style.getPropertyValue(propName).trim()
            ])
            // Discard any props that don't start with "--". Custom props are required to.
            .filter(([propName]) => propName.indexOf("--") === 0);

        return [...propValArr, ...props];
        }, [])
    ),
    []
);

include('http://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js', function() {
    $(document).ready(function() {
        let cssCustomPropIndex = getCSSCustomPropIndex();
        console.log(cssCustomPropIndex);

        let i = 0;
        //cssCustomPropIndex.forEach((item,index)=>{console.log(`${index}` + "'s value is: " +`${item[1]}`)});
        $("figure").each(function(){
            //console.log($(this).css());
            $(this).css("color", cssCustomPropIndex[i][1]);
            $(this).find("figcaption > a").css("color", cssCustomPropIndex[i][1]);
            i++;
        });
    });
});