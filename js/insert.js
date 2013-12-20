function ins_wow(dataRef, localMsisdn, partnerMsisdn) {
     conversationRef.push({sentBy:localMsisdn, text:'<widget name="git" filename="text.html" parameters="text=WOW&height=h1"/>'});
}
function ins_text(text, dataRef, localMsisdn, partnerMsisdn) {
     conversationRef.push({sentBy:localMsisdn, text:'<widget name="git" filename="text.html" parameters="text=' + text + '&height=h1"/>'});
}
function ins_todo(dataRef, localMsisdn, partnerMsisdn) {
    var params = "partnerMsisdn=" + parnterMsisdn + "&localMsisdn=" + localMsisdn + 
        "&uniqueId=" + new Date().getTime();
     conversationRef.push({sentBy:localMsisdn, text:'<widget name="git" filename="todo.html" parameters="' + params + '"/>'});
}
