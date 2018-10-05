/**
 * Created by user on 10/5/2018.
 */
var clubImage = "css/img/club-in-action.jpg";

var quote = "\"Here at the St. Joseph's ACM club we love to hang out, eat pizza, play video games, as well as get to know others within our field!\" <br />- Jared Scarito";

var about_us = "";

var advisorPicture = "";
var advisorName = "";

var presidentPicture = "css/img/president.png";
var presidentName = "Kerri McMahon";

var vicePresidentPicture = "";
var vicePresidentName = "";

var secretaryPicture = "";
var secretaryName = "";

var treasurerPicture = "";
var tresurerName = "";

var joinNowEmail = "";


/**
 * ^^^ Edit the variables above to change the website ^^^
 *
 * Don't mess with what's down here (unless you know JavaScript of course):
 */
function setup() {
    var clubDiv = document.getElementById("club-action");
    var quoteDiv = document.getElementById("quote");
    var aboutDiv = document.getElementById("about-us");
    var officersDiv = document.getElementById("officers");

    // Change the parallax image to the defined clubImage image URL
    clubDiv.setAttribute("data-image-src", clubImage);

    // Change the quoteDiv's paragraph element inner HTML to variable quote's
    var quoteP = quoteDiv.firstElementChild;
    quoteP.innerHTML = quote;

    // Change aboutDiv's paragraph element inner HTML to variable about_us'
    var aboutP = aboutDiv.firstElementChild;
    aboutP.innerHTML = about_us;
}