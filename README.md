frankenstein
============

Pile of htlm5 widgets for prototyping comm stuff.

Here is the step by step guide on how to add yet another widget.

1 - Add HTML page that will present the widget. This will be embedded in <iframe> from the chat page
    Include js/args.js to parse the args being sent along
2 - Add code to js/insert.js that will add JSON object to Firebase chat flow. This object
    persists argumets to the page created in step 1.
    Example that stores text string shown by text.html:
    function ins_text(text             /* message */, 
                      conversationRef  /* chat flow container persisted by Firebase */,
                      localMsisdn,     /* msisdn of sender */
                      partnerMsisdn    /* msisdn of receiver */ ) {
              conversationRef.push({sentBy:localMsisdn, 
                                    text:'<widget name="git" filename="text.html" parameters="text=' 
                                    + escape(text) + '&height=h1"/>'});
    } 

3 - Add menu item to menu.part that will in turn call JS created in 2
    example:
    <li><a href="javascript:ins_text('OK', conversationRef, localMsisdn, partnerMsisdn);$('#menu').trigger('close');">OK</a></li>
    Note: conversationRef, localMsisdn, partnerMsisdn - all are coming from chat.html page in heroku repo

4 - Push to Git and the code is ready for test

For more details check out text.html that renders static text and todo.html that shows the ToDo list using angular and own persistancy area in Firebase.

