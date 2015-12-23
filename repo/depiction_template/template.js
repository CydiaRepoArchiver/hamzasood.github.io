var description = document.getElementById('description').innerHTML;
var changelog = document.getElementById('changelog').innerHTML;

document.documentElement.innerHTML = ' \
<!DOCTYPE html> \
<html> \
\
\
<head> \
<style> \
div#container { \
    width: 90%; \
    margin: 0 auto; \
} \
.box { \
    border-radius: 10px; \
    padding: 8px; \
    background-color: white;\
    margin-top: 2px; \
    position: relative; \
} \
a.box { \
    display: block; \
    color: inherit; \
    text-decoration: none; \
} \
img.icon { \
    width: 24px; \
    height: 24px; \
    vertical-align: middle; \
    margin-right: 8px; \
} \
img.arrow { \
    position: absolute; \
    width: 8px; \
    height: 13px; \
    right: 8; \
    top: 50%; \
    margin-top: -6.5px; \
} \
</style>\
</head> \
\
\
<body bgcolor="#EFEFF4"> \
<div id="container"> \
\
Description: \
<div class="box"> \
    ' + description + ' \
</div> \
\
<br> \
\
Changelog: \
<div class="box"> \
    ' + changelog + ' \
</div> \
\
<br> \
\
Links: \
<a href="https://twitter.com/hamzasood" class="box"> \
    <img class="icon" src="../../depiction_template/twitter.png" srcset="../../depiction_template/twitter.png 1x, ../../depiction_template/twitter@2x.png 2x"> \
    <span style="vertical-align: middle;">My Twitter Page</span> \
    <img class="arrow" src="../../depiction_template/arrow.png" srcset="../../depiction_template/arrow.png 1x, ../../depiction_template/arrow@2x.png 2x"> \
</a> \
<a href="https://github.com/hamzasood" class="box"> \
    <img class="icon" src="../../depiction_template/github.png" srcset="../../depiction_template/github.png 1x, ../../depiction_template/github@2x.png 2x"> \
    <span style="vertical-align: middle;">My Github Page</span> \
    <img class="arrow" src="../../depiction_template/arrow.png" srcset="../../depiction_template/arrow.png 1x, ../../depiction_template/arrow@2x.png 2x"> \
</a> \
\
</div> \
</body> \
\
</html> \
';
