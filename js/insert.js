function ins_wow(conversationRef, localMsisdn, partnerMsisdn) {
     conversationRef.push({sentBy:localMsisdn, text:'<widget name="git" filename="text.html" parameters="text=WOW&height=h1"/>'});
}
function ins_text(text, conversationRef, localMsisdn, partnerMsisdn) {
     conversationRef.push({sentBy:localMsisdn, text:'<widget name="git" filename="text.html" parameters="text=' + escape(text) + '&height=h1"/>'});
}
function ins_todo(conversationRef, localMsisdn, partnerMsisdn) {
    var params = "partnerMsisdn=+" + partnerMsisdn.trim() + "&localMsisdn=+" + localMsisdn.trim() + 
        "&uniqueId=" + new Date().getTime();
     conversationRef.push({sentBy:localMsisdn, text:'<widget name="git" filename="todo.html" parameters="' + params + '"/>'});
}
function ins_plain_text(txt, conversationRef, localMsisdn, partnerMsisdn) {
     conversationRef.push({sentBy:localMsisdn, text:txt});
}
