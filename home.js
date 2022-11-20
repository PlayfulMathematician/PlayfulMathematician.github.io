
var pages = ['coinspt1']

function main()
{
    pageLinks = []
    for(var i = 0; i < pages.length; i++) {
        var page = pages[i]
        var pageLink = "https://playfulmathematician.github.io/" + page + ".html"
        pageLinks.push(pageLink)
    }
    $("body").append("<ul id='pageLinks'></ul>")
    for(var i = 0; i < pageLinks.length; i++) {
        var pageLink = pageLinks[i]
        $("#pageLinks").append("<li><a href='" + pageLink + "'>" + pages[i] + "</a></li>")
    }


}
$(document).ready(main)
