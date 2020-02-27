function regExpEscape (valueToEscape) {
    // eslint-disable-next-line no-useless-escape
    return valueToEscape.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

const betaUrl = "https://beta.demo.com";
const devUrl = "http://dev.demo.com";
var currentLocation = window.location.href;

//defining regexes
var areWeOnBetaUrlRegEx = new RegExp(regExpEscape(betaUrl), 'g');
var areWeOnDevUrlRegEx = new RegExp(regExpEscape(devUrl), 'g');

//executing regexes
var areWeOnBeta = areWeOnBetaUrlRegEx.test(currentLocation);
var areWeOnDev = areWeOnDevUrlRegEx.test(currentLocation);

if (areWeOnBeta) {
    window.location.href = currentLocation.replace(betaUrl, devUrl);
}
else if (areWeOnDev) {
    window.location.href = currentLocation.replace(devUrl, betaUrl);
}
