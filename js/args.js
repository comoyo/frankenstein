function getUrlVars() { // Read a page's GET URL variables and return them as an associative array.
    var vars = [],
        hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = unescape(hash[1]);
    }
    return vars;
}
parameters = getUrlVars();
// hack to say frankenstein widget is loaded
if (typeof window.talk != "undefined") {
    window.talk.viewLoadFinished(parameters['id']);
}

