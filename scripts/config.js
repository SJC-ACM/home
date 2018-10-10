/**
 * Created by user on 10/5/2018.
 */
var clubImage = "css/img/club-in-action.jpg";

var quote = "\"Here at the St. Joseph's ACM club we love to hang out, eat pizza, play video games, as well as get to know others within our field!\" <br />- Jared Scarito";

var about_us =
"The ACM Club is the Computer Science club at St. Joseph's College. We have a driven focus to expand our understanding of the computing disciples " +
"while helping others learn along the way. Our club actively participates in the computing world by holding workshops, inviting guest speakers from " +
"the field to talk about their careers, as well as holding video game tournaments! Our club meetings usually take place every Wednesday at common " +
"hour. Feel free to stop by to casually chill with others in the field as well as play some PS4 \"Disc Jam\".";

var advisorPicture = "";
var advisorName = "";

var presidentPicture = "css/img/president.png";
var presidentName = "Kerri McMahon";

var vicePresidentPicture = "css/img/vice-president.png";
var vicePresidentName = "Kyle Waldron";

var secretaryPicture = "css/img/secretary.png";
var secretaryName = "Josh Papello";

var treasurerPicture = "css/img/treasurer.png";
var tresurerName = "Alana Caporale";

var joinNowEmail = "acm.li@student.sjcny.edu";

var discordLink = "";





/**
 * ^^^ Edit the variables above to change the website ^^^
 *
 * Don't mess with what's down here (unless you know JavaScript of course):
 */
function setup() {
    var clubDiv = document.getElementById("club-action");
    var quoteDiv = document.getElementById("quote");
    var aboutParagraph = document.getElementById("about-edit");
    var officersDiv = document.getElementById("officers");

    // Change the parallax image to the defined clubImage image URL
    clubDiv.setAttribute("data-image-src", clubImage);

    // Change the quoteDiv's paragraph element inner HTML to variable quote's
    var quoteP = quoteDiv.firstElementChild;
    quoteP.innerHTML = quote;

    // Change aboutDiv's paragraph element inner HTML to variable about_us'
    aboutParagraph.innerHTML = about_us;

    // TODO officers needs to be done still:
}