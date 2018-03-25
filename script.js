function displaySideMenu() {
    if (document.getElementById("mainSideMenu").style.display != "block") {
        document.getElementById("mainSideMenu").style.display = "block";
    } else {
        document.getElementById("mainSideMenu").style.display = "none";
        document.getElementById("projectsSideMenu").style.display = "none";
        document.getElementById("sub-componentsSideMenu").style.display = "none";
        document.getElementById("blogSideMenu").style.display = "none";
        document.getElementById("contactSideMenu").style.display = "none";
        document.getElementById("projectsOption").style.background = "white";
        document.getElementById("sub-componentsOption").style.background = "white";
        document.getElementById("blogOption").style.background = "white";
        document.getElementById("contactOption").style.background = "white";
    }
}

function projectsOption() {
    if (document.getElementById("projectsSideMenu").style.display != "block") {
            document.getElementById("projectsOption").style.background = "crimson";
            document.getElementById("projectsSideMenu").style.display = "block";
            document.getElementById("sub-componentsOption").style.background = "white";
            document.getElementById("sub-componentsSideMenu").style.display = "none";
            document.getElementById("blogOption").style.background = "white";
            document.getElementById("blogSideMenu").style.display = "none";
            document.getElementById("contactOption").style.background = "white";
            document.getElementById("contactSideMenu").style.display = "none";
    } else {
        document.getElementById("projectsOption").style.background = "white";
        document.getElementById("projectsSideMenu").style.display = "none";
    }
}

function subComponentsOption() {
    if (document.getElementById("sub-componentsSideMenu").style.display != "block") {
        document.getElementById("projectsOption").style.background = "white";
        document.getElementById("projectsSideMenu").style.display = "none";
        document.getElementById("sub-componentsOption").style.background = "crimson";
        document.getElementById("sub-componentsSideMenu").style.display = "block";
        document.getElementById("blogOption").style.background = "white";
        document.getElementById("blogSideMenu").style.display = "none";
        document.getElementById("contactOption").style.background = "white";
        document.getElementById("contactSideMenu").style.display = "none";
    } else {
        document.getElementById("sub-componentsOption").style.background = "white";
        document.getElementById("sub-componentsSideMenu").style.display = "none";
    }
}

function blogOption() {
    if (document.getElementById("blogSideMenu").style.display != "block") {
        document.getElementById("projectsOption").style.background = "white";
        document.getElementById("projectsSideMenu").style.display = "none";
        document.getElementById("sub-componentsOption").style.background = "white";
        document.getElementById("sub-componentsSideMenu").style.display = "none";
        document.getElementById("blogOption").style.background = "crimson";
        document.getElementById("blogSideMenu").style.display = "block";
        document.getElementById("contactOption").style.background = "white";
        document.getElementById("contactSideMenu").style.display = "none";
    } else {
        document.getElementById("blogOption").style.background = "white";
        document.getElementById("blogSideMenu").style.display = "none";
    }
}

function contactOption() {
    if (document.getElementById("contactSideMenu").style.display != "block") {
        document.getElementById("projectsOption").style.background = "white";
        document.getElementById("projectsSideMenu").style.display = "none";
        document.getElementById("sub-componentsOption").style.background = "white";
        document.getElementById("sub-componentsSideMenu").style.display = "none";
        document.getElementById("blogOption").style.background = "white";
        document.getElementById("blogSideMenu").style.display = "none";
        document.getElementById("contactOption").style.background = "crimson";
        document.getElementById("contactSideMenu").style.display = "block";
    } else {
        document.getElementById("contactOption").style.background = "white";
        document.getElementById("contactSideMenu").style.display = "none";
    }
}