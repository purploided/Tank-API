// tankapi source

function tankAPI() { // tankapi
    tank1 = document.createElement("img");
    tank1.src = "https://cdn.discordapp.com/attachments/984720122180694066/985029929580232743/tank.png";
    
    var body = document.getElementsByTagName("body")[0];

    tank2 = document.createElement("img");
    tank2.src = "https://cdn.discordapp.com/attachments/984720122180694066/985030797658578964/tank1.png"; 

    tank3 = document.createElement("img");
    tank3.src = "https://cdn.discordapp.com/attachments/984720122180694066/985031506412044328/tank2.png"; 

    tank4 = document.createElement("img");
    tank4.src = "https://cdn.discordapp.com/attachments/984720122180694066/985031929860616222/tank3.png"; 
    
    tank5 = document.createElement("img");
    tank5.src = "https://cdn.discordapp.com/attachments/984720073203789874/985032965761404958/tank4.png"; 

    tank6 = document.createElement("img");
    tank6.src = "https://cdn.discordapp.com/attachments/984720073203789874/985033436412661890/tank5.png"; 

    tank7 = document.createElement("img");
    tank7.src = "https://cdn.discordapp.com/attachments/984720073203789874/985034469188726864/tank6.png"; 

    tank8 = document.createElement("img");
    tank8.src = "https://cdn.discordapp.com/attachments/984720160122368020/985034506153123840/tank7.png"; 

    // found legendary tank?

    legendaryFound = document.createElement("img");

    legendaryFound.style.transition = "all 1s";
    legendaryFound.style.position = "absolute";
    legendaryFound.style.top = "-10%";
    legendaryFound.style.left = "50%";
    legendaryFound.style.transform = "translate(-50%, 0%)";

    legendaryFound.src = "https://cdn.discordapp.com/attachments/984720160122368020/985072665154965534/foundlegendary.png";

    num = Math.floor(Math.random() * 8); // random number gen

    button = document.getElementById("INSERTBUTTONNAMEHERE");

    button.disabled = true;

    setTimeout(() => { button.disabled = false; }, 2000); // hide button

    switch (num) {
        case 0:
            body.appendChild(tank1);
            localStorage.setItem('Common Tank 1', tank1);
            break;
        case 1:
            body.appendChild(tank2);
            localStorage.setItem('Common Tank 2', tank2);
            break;
        case 2:
            body.appendChild(tank3);
            localStorage.setItem('Common Tank 3', tank3);
            break;
        case 3:
            body.appendChild(tank4);
            localStorage.setItem('Common Tank 4', tank4);
            break;
        case 4:
            body.appendChild(tank5);
            localStorage.setItem('Rare Tank 1', tank5);
            break;
        case 5:
            body.appendChild(tank6);
            localStorage.setItem('Rare Tank 2', tank6);
            break;
        case 6:
            body.appendChild(tank7);
            localStorage.setItem('Rare Tank 3', tank7);
            break;
        case 7:
            body.appendChild(tank8);
            localStorage.setItem('Legendary Tank', tank8);
            body.appendChild(legendaryFound);

            setTimeout(() => { legendaryFound.style.top = "1%"; }, 0);
            setTimeout(() => { legendaryFound.style.top = "-50%"; }, 1000);
            break;
    }
}
