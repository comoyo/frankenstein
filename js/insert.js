function ins_wow(conversationRef, localMsisdn, partnerMsisdn) {
    ins_text('WOW', conversationRef, localMsisdn, partnerMsisdn);
}
function ins_text(text, conversationRef, localMsisdn, partnerMsisdn) {
     conversationRef.push({sentBy:localMsisdn, text:'<widget name="git" filename="text.html" parameters="text=' + escape(text) + "&id=" + new Date().getTime() + '&height=h1"/>'});
}
function ins_todo(conversationRef, localMsisdn, partnerMsisdn, uniqueId) {
    uniqueId = new Date().getTime();
    var params = "partnerMsisdn=+" + partnerMsisdn.trim() + "&localMsisdn=+" + localMsisdn.trim() + "&id=" + uniqueId;
    conversationRef.push({sentBy:localMsisdn, text:'<widget name="git" filename="todo.html" parameters="' + params + '"/>'});
}
function ins_plain_text(txt, conversationRef, localMsisdn, partnerMsisdn) {
     conversationRef.push({sentBy:localMsisdn, text:txt});
}
function ins_map(conversationRef, localMsisdn, partnerMsisdn) {
    var params = ' id="' + new Date().getTime() +'"';
    conversationRef.push({sentBy:localMsisdn, text:'<widget name="map" ' + params + '/>'});
}
function ins_live_map(conversationRef, localMsisdn, partnerMsisdn) {
    var params = ' id="' + new Date().getTime() +'"';
    conversationRef.push({sentBy:localMsisdn, text:'<widget name="livemap" ' + params + '/>'});
}
function ins_call_me(conversationRef, localMsisdn, partnerMsisdn) {
    var params = ' id="' + new Date().getTime() +'"';
    conversationRef.push({sentBy:localMsisdn, text:'<widget name="callme" ' + params + '/>'});
}
function ins_todo_2(conversationRef, localMsisdn, partnerMsisdn) {
    var params = ' id="' + new Date().getTime() +'"';
    conversationRef.push({sentBy:localMsisdn, text:'<widget name="todo" ' + params + '/>'});
}
