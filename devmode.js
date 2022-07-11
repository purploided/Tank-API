/*
    Dev Mode
*/

function devMode(codeEntry) {

    if (codeEntry == null) {
        console.log (
            "%cTank API\n%cHey Developer!\n%cWelcome in, Local Storage is below!",
            "color:#013220;font-size:48px;font-weight:600;",
            "color:green;font-size:20px;",
            "color:#90EE90;font-size:12px;"
        );

        a = localStorage.getItem('Common Tank 1');
        b = localStorage.getItem('Common Tank 2');
        c = localStorage.getItem('Common Tank 3');
        d = localStorage.getItem('Common Tank 4');
        e = localStorage.getItem('Rare Tank 1');
        f = localStorage.getItem('Rare Tank 2');
        g = localStorage.getItem('Rare Tank 3');
        h = localStorage.getItem('Gold Tank 1');
        i = localStorage.getItem('Gold Tank 2');
        j = localStorage.getItem('Legendary Tank');

        console.log(" Common Tank 1: "+a+"\n","Common Tank 2: "+b+"\n","Common Tank 3: "+c+"\n","Common Tank 4: "+d+"\n","Rare Tank 1: "+e+"\n","Rare Tank 2: "+f+"\n","Rare Tank 3: "+g+"\n","Gold Tank 1: "+h+"\n","Gold Tank 2: "+i+"\n","Legendary Tank: "+j);
    }
}