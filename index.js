'use strict'

var total_essai=0;
function Check() {
    var tabc=Check.arguments; 
    var ok=0;
    var tab="azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBN0123456789_$&#@";

    for (var no=0;no<tabc.length;no++) {
        checksum=tabc[no];
        var password="00000";
        var nbpass=password.length;
        var sum=1;
        var n=Math.max(nblog,nbpass)
        for (var i=0;i<n;i++) {
            var index=tab.indexOf(password.substring(i,i+1))+10;
            sum=sum+(index*(i+1)*(i+1));
        }
        if (sum==checksum) {
            alert("password found");
            ok++;
        }

    }
    if (ok==0) {
        total_essai++;
    }else{
        alert(index);
    }
}

function Verifie() {
Check()
}