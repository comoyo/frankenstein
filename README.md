frankenstein
============

Pile of htlm5 widgets for prototyping comm stuff.

Here is the step by step guide on how to add yet another widget.

1 - Add HTML page that will present the widget.
-----------------------------------------------
This page will be embedded in "iframe" tag from the parent chat.html page. The chat.html page is the part of herokuapp server and does not reside in this repo.

Include js/args.js to parse the URL's parameters that were being sent along. The parameters can be message text and font size for example.

2 - Modify js/insert.js.
-----------------------------
In insert.js append the code that will add JSON object to Firebase chat flow.

This object will persists URL parameters sent to the page created in step 1.

Example that stores text string shown by text.html:

```javascript
function ins_text(text, // chat's text - store it!
    conversationRef,  // chat flow container persisted by Firebase
    localMsisdn,      // msisdn of sender
    partnerMsisdn,    // msisdn of receiver
    ) {
    conversationRef.push({sentBy:localMsisdn,
        text:'<widget name="git" filename="text.html" parameters="text=' 
        + escape(text) + '&height=h1"/>'});
    } 
```

3 - Add corresponding menu item to menu.part.
-------------------------------------
Append entry to menu.part. Entry has description and code section that will call function  created in step 2 effectively adding instance of the widget to the chat flow in Firebase.
    
Example of menu entry that will add "OK" message to the chat:
```html
    <li><a href="javascript:ins_text('OK', 
    conversationRef, localMsisdn, partnerMsisdn);
    $('#menu').trigger('close');">OK</a></li>
```
Note: conversationRef, localMsisdn, partnerMsisdn - all are coming from chat.html page in heroku repo

4 - Push to Git and the code is ready for test.
----------------------------------------------

For more details check out text.html that renders static text and todo.html that shows the ToDo list using angular and own persistancy area in Firebase.

