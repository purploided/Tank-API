function mslAPI() {
    const msl = document.createElement("img");
    msl.src = "@DLC/@MISSILE-LAUNCHER/missilelauncher.png";
    msl.style.width = "300px";
    msl.style.height = "300px";

    const body = document.getElementsByTagName("body")[0];
    const mslbtn = document.createElement("button");

    mslbtn.innerText = ("Grab a Missile Launcher!");
    body.appendChild(mslbtn);

    mslbtn.addEventListener("click", function(){
        body.appendChild(msl);
        mslbtn.hidden = true;
    });
}

mslAPI();