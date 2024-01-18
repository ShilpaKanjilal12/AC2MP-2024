data = `
<div class="footer row justify-content-center" style="background-color:rgb(238, 238, 238);
padding: 5%;">
<div class="col-sm-4 mt-3 d-flex justify-content-center">
    <div style="max-width:100%;overflow:hidden;color:red;width:500px;height:500px;">
        <div id="my-map-canvas" style="height:100%; width:100%;max-width:100%;"><iframe
                style="height:100%;width:100%;border:0;" frameborder="0"
                src="https://www.google.com/maps/embed/v1/place?q=IIT+Patna,+Bihta+Kanpa+Road,+Patna,+Dayalpur+Daulatpur,+Bihar,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
        </div><a class="embed-map-html" href="https://www.bootstrapskins.com/themes" id="auth-map-data">premium
            bootstrap themes</a>
        <style>
            .map-generator {
                max-width: 100%;
                max-height: 100%;
                background: none;
            }
        </style>
    </div>
</div>
<div class="container col-sm-4 mt-3 justify-content-center font-l">
    Department of Physics,<br /> Indian Institute of Technology Patna<br /><br />
    <div class="container">
        <a href="" class="footer-link row" style="text-decoration: none;">Contact No.</a>
        <a href="" class="footer-link row" style="text-decoration: none;">Email ID</a>

    </div>

</div>
<div class="col-sm-4 mt-3">
    <a href="index.html" class="footer-link row font-l justify-content-center"
        style="text-decoration: none; color: black;">Home</a><br />
    <a href="about.html" class="footer-link row font-l justify-content-center"
        style="text-decoration: none; color: black;">About</a><br />
    <a href="register.html" class="footer-link row font-l justify-content-center"
        style="text-decoration: none; color: black;">Registration</a><br />
    <a href="abstract.html" class="footer-link row font-l justify-content-center"
        style="text-decoration: none; color: black;">Abstract Submission</a><br />
    <a href="" class="footer-link row font-l justify-content-center"
        style="text-decoration: none; color: black;">Program</a><br />
    <a href="" class="footer-link row font-l justify-content-center"
        style="text-decoration: none; color: black;">Visa Information</a><br />
    <a href="" class="footer-link row font-l justify-content-center"
        style="text-decoration: none; color: black;">Accomodation</a><br />
    <a href="" class="footer-link row font-l justify-content-center"
        style="text-decoration: none; color: black;">Transportation</a><br />
    <a href="" class="footer-link row font-l justify-content-center"
        style="text-decoration: none; color: black;">Local Attraction</a><br />
    <a href="" class="footer-link row font-l justify-content-center"
        style="text-decoration: none; color: black;">Orgainsing Committee</a><br />



</div>
</div>`
document.getElementById("footerContainer").innerHTML = data;
