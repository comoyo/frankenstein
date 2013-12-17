frankenstein
============

Pile of htlm5 widgets for prototyping comm stuff.

To use any of the widgets in this directory client should push the
following item to the Firebase conversation:

text: \<widget name="git" filename="widget_file_name.html" parameters="a=url_escaped_value1&b=url_escaped_value2"\>

For example the following chat item:

\<widget name="git" filename="text.html" parameters="text=hereGoesTheMessage&height=h1"\>


will be expand into following HTML sent to the client:


 <iframe style="height: 100%;width: 100%" frameborder="0" scrolling="yes" src="/waps/comoyo/frankenstein/master/text.html?text=hereGoesTheMessage&height=h1"
