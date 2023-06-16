window.onscroll = function () { scrollFunction() };

function scrollFunction() {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 50) {
                document.getElementById("navbar").style.top = "0";
                document.getElementById("navbar").style.backgroundColor = "#29323c";
        } else {
                document.getElementById("navbar").style.top = "0px";
                document.getElementById("navbar").style.backgroundColor = "transparent";
        }
}