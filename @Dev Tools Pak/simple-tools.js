function importTanksFromLocalStorage(tankName) {

    var body = document.getElementsByTagName("body")[0];

    if (tankName == "Common Tank 1") {
        cmn1 = localStorage.getItem('Common Tank 1');
        cmn1e = document.createElement("img");
        cmn1e.src = cmn1; 
        body.appendChild(cmn1e);
    }
    else if (tankName == "Common Tank 2") {
        cmn2 = localStorage.getItem('Common Tank 2');
        cmn2e = document.createElement("img");
        cmn2e.src = cmn2; 
        body.appendChild(cmn2e);
    }
    else if (tankName == "Common Tank 3") {
        cmn3 = localStorage.getItem('Common Tank 3');
        cmn3e = document.createElement("img");
        cmn3e.src = cmn3; 
        body.appendChild(cmn3e);
    }
    else if (tankName == "Common Tank 4") {
        cmn4 = localStorage.getItem('Common Tank 4');
        cmn4e = document.createElement("img");
        cmn4e.src = cmn4; 
        body.appendChild(cmn4e);
    }
    else if (tankName == "Rare Tank 1") {
        rar1 = localStorage.getItem('Rare Tank 1');
        rar1e = document.createElement("img");
        rar1e.src = rar1; 
        body.appendChild(rar1e);
    }
    else if (tankName == "Rare Tank 2") {
        rar2 = localStorage.getItem('Rare Tank 2');
        rar2e = document.createElement("img");
        rar2e.src = rar2; 
        body.appendChild(rar2e);
    }
    else if (tankName == "Rare Tank 3") {
        rar3 = localStorage.getItem('Rare Tank 3');
        rar3e = document.createElement("img");
        rar3e.src = rar3; 
        body.appendChild(rar3e);
    }
    else if (tankName == "Gold Tank 1") {
        gld1 = localStorage.getItem('Gold Tank 1');
        gld1e = document.createElement("img");
        gld1e.src = gld1; 
        body.appendChild(gld1e);
    }
    else if (tankName == "Gold Tank 2") {
        gld2 = localStorage.getItem('Gold Tank 2');
        gld2e = document.createElement("img");
        gld2e.src = gld2; 
        body.appendChild(gld2e);
    }
    else if (tankName == "Legendary Tank") {
        lgn = localStorage.getItem('Legendary Tank');
        lgne = document.createElement("img");
        lgne.src = lgn; 
        body.appendChild(lgne);
    }
    else if (tankName == "Baby Legendary Tank") {
        Blgn = localStorage.getItem('Baby Legendary Tank');
        Blgne = document.createElement("img");
        Blgne.src = Blgn; 
        body.appendChild(Blgne);
    }
    else if (tankName == "Baby Blurred Camo Tank") {
        Bbct = localStorage.getItem('Baby Blurred Camo Tank');
        Bbcte = document.createElement("img");
        Bbcte.src = Bbct; 
        body.appendChild(Bbct);
    }
    else if (tankName) {
        console.error("Could not find tank and/or you do not have this tank.");
    }
}

function listLocalStorage() {
    console.log(localStorage);
}