
var pages = [];
// pages.push(["coinspt2", "A Very Specific Puzzle on Coin Flipping Part 2"])
pages.push(["zomebuilds", "My Zome Builds","Go To My Zome Builds"])
pages.push(['coinspt1', 'A Very Specific Puzzle on Coin Flipping Part 1', "Learn about a very specifc puzzle on coin flipping"])

function main()
{
    pageLinks = []
    for(var i = 0; i < pages.length; i++) {
        var page = pages[i][0]
        var pageLink = "./" + page + ".html"
        pageLinks.push(pageLink)
    }
    $("body").append("<div id='pageLinks'></div>")
    for(var i = 0; i < pageLinks.length; i++) {
        var pageLink = pageLinks[i]
        $("#pageLinks").append("<span class=\'link\'><a href='" + pageLink + "' class = \'newpage\' aria-label=\""+pages[i][2] +"\">" + pages[i][1] + "</a></span>")
        $("#pageLinks").append("<div class = \"spacer-div-20px\"></div>")
    }


}
$(document).ready(main)
console.log("a")
