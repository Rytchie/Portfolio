// Opening and showing the contents of a tablink

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents= document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Hide or Show for small screens

var sidemenu = document.getElementById("sidemenu")

function openmenu() {
    sidemenu.style.right = "0"
}

function closemenu() {
    sidemenu.style.right = "-200px"
}

// Navigation bar active a links

var links = document.getElementsByClassName("active");

function active (active) {
    if (links != active) {
        style.color.active = none;
    }
}