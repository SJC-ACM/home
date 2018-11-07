/**
 * Created by user on 10/5/2018.
 */


/**
 * Home
 * TODO Maybe add in a "Welcome" message above clubImage?
 */
var clubImage = "css/img/club-in-action.jpg";

/**
 * Quote
 */
var quote = "\"Here at the St. Joseph's ACM club we love to hang out, eat pizza, play video games, as well as get to know others within our field!\" <br />- Jared Scarito";

/**
 * About Us
 */
var aboutPicture = "css/img/dog-at-computer.png";
var about_us =
"The ACM Club is the Computer Science club at St. Joseph's College. We have a driven focus to expand our understanding of the computing disciples " +
"while helping others learn along the way. Our club actively participates in the computing world by holding workshops, inviting guest speakers from " +
"the field to talk about their careers, as well as holding video game tournaments! Our club meetings usually take place every Wednesday at common " +
"hour. Feel free to stop by to casually chill with others in the field as well as play some PS4 \"Disc Jam\".";

/**
 * Officers
 */
var presidentPicture = "css/img/president.png";
var presidentName = "Kerri McMahon";
var presidentEmail = "kmcmahon4@student.sjcny.edu";

var vicePresidentPicture = "css/img/no-profile-pic.png";
var vicePresidentName = "Kyle Waldron";
var vicePresidentEmail = "kwaldron2@student.sjcny.edu";

var secretaryPicture = "css/img/no-profile-pic.png";
var secretaryName = "Josh Papello";
var secretaryEmail = "jpapello@student.sjcny.edu";

var treasurerPicture = "css/img/no-profile-pic.png";
var treasurerName = "Alana Caporale";
var treasurerEmail = "acaporale@student.sjcny.edu";

/**
 * Social Buttons
 */
var githubPage = "https://github.com/SJC-ACM/home"; // Shouldn't need to change this. If someone needs access to the git, let me know...
var twitterPage = "https://twitter.com/SJCACM1";
var facebookPage = "https://www.facebook.com/groups/917415211658767/";





/**
 * ^^^ Edit the variables above to change the website ^^^
 *
 * Don't mess with what's down here (unless you know JavaScript of course):
 */
function setup() {
    /**
     * Club in Action
     */
    var clubDiv = document.getElementById("club-action");

    /**
     * Quote
     */
    var quoteDiv = document.getElementById("quote");

    /**
     * About Us
     */
    var aboutParagraph = document.getElementById("about-edit");
    var aboutDiv = document.getElementById("about-us");

    /**
     * Officers
     */
    var officersDiv = document.getElementById("officers");
    var presidentNameVar = document.getElementById("president-name");
    var presidentEmailVar = document.getElementById("president-email");
    var vicePresidentNameVar = document.getElementById("vice-president-name");
    var vicePresidentEmailVar = document.getElementById("vice-president-email");
    var secretaryNameVar = document.getElementById("secretary-name");
    var secretaryEmailVar = document.getElementById("secretary-email");
    var treasurerNameVar = document.getElementById("treasurer-name");
    var treasurerEmailVar = document.getElementById("treasurer-email");
    // Officers Pictures
    var president = document.getElementById("president");
    var vicePresident = document.getElementById("vice-president");
    var secretary = document.getElementById("secretary");
    var treasurer = document.getElementById("treasurer");

    /**
     * Social Buttons
     */
    var github = document.getElementById("github");
    var twitter = document.getElementById("twitter");
    var facebook = document.getElementById("facebook");


        // Change the parallax image to the defined clubImage image URL
    clubDiv.setAttribute("data-image-src", clubImage);

    // Change the quoteDiv's paragraph element inner HTML to variable quote's
    var quoteP = quoteDiv.firstElementChild;
    quoteP.innerHTML = quote;

    // Change aboutDiv's paragraph element inner HTML to variable about_us'
    aboutDiv.setAttribute("data-img-src", aboutPicture);
    aboutParagraph.innerHTML = about_us;

    // Change Officers info:
    presidentNameVar.innerText = presidentName;
    presidentEmailVar.setAttribute("href", "mailto:" + presidentEmail);

    vicePresidentNameVar.innerText = vicePresidentName;
    vicePresidentEmailVar.setAttribute("href", "mailto:" + vicePresidentEmail);

    secretaryNameVar.innerText = secretaryName;
    secretaryEmailVar.setAttribute("href", "mailto:" + secretaryEmail);

    treasurerNameVar.innerText = treasurerName;
    treasurerEmailVar.setAttribute("href", "mailto:" + treasurerEmail);

    // Change Officers pictures:
    president.style.backgroundImage = "url(" + presidentPicture + ")";
    vicePresident.style.backgroundImage = "url(" + vicePresidentPicture + ")";
    secretary.style.backgroundImage = "url(" + secretaryPicture + ")";
    treasurer.style.backgroundImage = "url(" + treasurerPicture + ")";

    // Change Social Buttons' links
    github.setAttribute("href", githubPage);
    twitter.setAttribute("href", twitterPage);
    facebook.setAttribute("href", facebookPage);
}
