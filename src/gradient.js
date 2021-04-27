//-----------------------------
var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
var degree = 0;

var v = color1.toString()
var r = 0;
var g = 1;
var b = 2;

var grey1 = false;
var grey2 = false;
var increment = false;
var decrement = false;

var rVal1;
var gVal1;
var bVal1;
var rVal2;
var gVal2;
var bVal2;

var max1 = ["",0];
var min1 = ["",255];

var max2 = ["",0];
var min2 = ["",255];

var cycle1 = -1;
var cycle2 = -1;

function iconChange(tick) {
    setTimeout(function() {
        icon.href = "/i19cumjul/favicoljulian" + (tick ? "1" : "") + ".ico";
        iconChange(!tick);
    }, 1000);
}

//Funzioni addette al cambiamento smooth del colore

function colorIncrement(){
    if(!grey1){
        cycleChoice(); 
        switch(cycle1){
            case 0:
                if(gVal1 == min1[1]){
                    min1[1] = gVal1;
                    min1[0] = g;
                }else{
                    gVal1--;
                }
                break;
            case 1:
                if(gVal1 == max1[1]){
                    max1[1] = gVal1;
                    max1[0] = g;
                }else{
                    gVal1++;
                }
                break;
            case 2:
                if(rVal1 == max1[1]){
                    max1[1] = rVal1;
                    max1[0] = r;
                }else{
                    rVal1++;
                }
                break;
            case 3:
                if(rVal1 == min1[1]){
                    min1[1] = rVal1;
                    min1[0] = r;
                }else{
                    rVal1--;
                }
                break;
            case 4:
                if(bVal1 == max1[1]){
                    max1[1] = bVal1;
                    max1[0] = b;
                }else{
                    bVal1++;
                }
                break;
            case 5:
                if(bVal1 == min1[1]){
                    min1[1] = bVal1;
                    min1[0] = b;
                }else{
                    bVal1--;
                }
                break;
        }
    }
    if(!grey2){
        switch(cycle2){
            case 0:
                if(gVal2 == min2[1]){
                    min2[1] = gVal2;
                    min2[0] = g;
                }else{
                    gVal2--;
                }
                break;
            case 1:
                if(gVal2 == max2[1]){
                    max2[1] = gVal2;
                    max2[0] = g;
                }else{
                    gVal2++;
                }
                break;
            case 2:
                if(rVal2 == max2[1]){
                    max2[1] = rVal2;
                    max2[0] = r;
                }else{
                    rVal2++;
                }
                break;
            case 3:
                if(rVal2 == min2[1]){
                    min2[1] = rVal2;
                    min2[0] = r;
                }else{
                    rVal2--;
                }
                break;
            case 4:
                if(bVal2 == max2[1]){
                    max2[1] = bVal2;
                    max2[0] = b;
                }else{
                    bVal2++;
                }
                break;
            case 5:
                if(bVal2 == min2[1]){
                    min2[1] = bVal2;
                    min2[0] = b;
                }else{
                    bVal2--;
                }
                break;
        }
    }
    color1.value = "#"+(rVal1<16?"0":"")+rVal1.toString(16)+(gVal1<16?"0":"")+gVal1.toString(16)+(bVal1<16?"0":"")+bVal1.toString(16);
    
    
    color2.value = "#"+(rVal2<16?"0":"")+rVal2.toString(16)+(gVal2<16?"0":"")+gVal2.toString(16)+(bVal2<16?"0":"")+bVal2.toString(16);

}

function greyScaleIncrement(){
    if(grey1){
        rVal1 = gVal1 = bVal1;
    
        //A questo punto tutti e tre i valori sono uguali
        if(rVal1 > 0 && !increment){
            rVal1--;
            gVal1--;
            bVal1--;
        }else if(rVal1 < 255){
            rVal1++;
            gVal1++;
            bVal1++;
            increment = true;
        }else{
            increment = false;
        }
        if(rVal1 < 16){
            color1.value = "#0"+rVal1.toString(16)+"0"+gVal1.toString(16)+"0"+bVal1.toString(16);
        }else{
            color1.value = "#"+rVal1.toString(16)+gVal1.toString(16)+bVal1.toString(16);
        }

    }
    if(grey2){
        rVal2 = gVal2 = bVal2;
    
        if(rVal2 < 255 && !decrement){
            rVal2++;
            gVal2++;
            bVal2++;
        }else if(rVal2 > 0){
            rVal2--;
            gVal2--;
            bVal2--;
            decrement = true;
        }else{
            decrement = false;
        }
        if(rVal2 < 16){
            color2.value = "#0"+rVal2.toString(16)+"0"+gVal2.toString(16)+"0"+bVal2.toString(16);
        }else{
            color2.value = "#"+rVal2.toString(16)+gVal2.toString(16)+bVal2.toString(16);
        }
    }

    
}
function cycleChoice(){
    minimum();
    maximum();

    if(max1[0]==r){
        if(min1[0]==g){
            cycle1 = 5;
        }else if(min1[0]==b){
            cycle1 = 1;
        }
    }else if(max1[0]==g){
        if(min1[0]==b){
            cycle1 = 3;
        }else if(min1[0]==r){
            cycle1 = 4;
        }
    }else if(max1[0]==b){
        if(min1[0]==g){
            cycle1 = 2;
        }else if(min1[0]==r){
            cycle1 = 0;
        }
    }

    if(max2[0]==r){
        if(min2[0]==g){
            cycle2 = 5;
        }else if(min1[0]==b){
            cycle2 = 1;
        }
    }else if(max2[0]==g){
        if(min2[0]==b){
            cycle2 = 3;
        }else if(min1[0]==r){
            cycle2 = 4;
        }
    }else if(max2[0]==b){
        if(min2[0]==g){
            cycle2 = 2;
        }else if(min1[0]==r){
            cycle2 = 0;
        }
    }
}
function minimum(){
    if(rVal1 < min1[1]){
        min1[1] = rVal1;
        min1[0] = r;
    }
    if(gVal1 < min1[1]){
        min1[1] = gVal1;
        min1[0] = g;
    }
    if(bVal1 < min1[1]){
        min1[1] = bVal1;
        min1[0] = b;
    }

    if(rVal2 < min2[1]){
        min2[1] = rVal2;
        min2[0] = r;
    }
    if(gVal2 < min2[1]){
        min2[1] = gVal2;
        min2[0] = g;
    }
    if(bVal2 < min2[1]){
        min2[1] = bVal2;
        min2[0] = b;
    }
}
function maximum(){
    if(rVal1 > max1[1]){
        max1[1] = rVal1;
        max1[0] = r;
    }
    if(gVal1 > max1[1]){
        max1[1] = gVal1;
        max1[0] = g;
    }
    if(bVal1 > max1[1]){
        max1[1] = bVal1;
        max1[0] = b;
    }

    if(rVal2 > max2[1]){
        max2[1] = rVal2;
        max2[0] = r;
    }
    if(gVal2 > max2[1]){
        max2[1] = gVal2;
        max2[0] = g;
    }
    if(bVal2 > max2[1]){
        max2[1] = bVal2;
        max2[0] = b;
    }
}
function importantValuesFinder(){
    color1 = document.getElementById('color1');
    color2 = document.getElementById('color2'); 

    rVal1 = parseInt(color1.value.charAt(1)+color1.value.charAt(2),16);
    rVal1 == 0 ? rVal1=1 : rVal1=rVal1;
    
    gVal1 = parseInt(color1.value.charAt(3)+color1.value.charAt(4),16);
    gVal1 == 0 ? gVal1=1 : gVal1=gVal1;
    
    bVal1 = parseInt(color1.value.charAt(5)+color1.value.charAt(6),16);
    bVal1 == 0 ? bVal1=1 : bVal1=bVal1;


    rVal2 = parseInt(color2.value.charAt(1)+color2.value.charAt(2),16);
    rVal2 == 0 ? rVal2=1 : rVal2=rVal2;

    gVal2 = parseInt(color2.value.charAt(3)+color2.value.charAt(4),16);
    gVal2 == 0 ? gVal2=1 : gVal2=gVal2;

    bVal2 = parseInt(color2.value.charAt(5)+color2.value.charAt(6),16);
    bVal2 == 0 ? bVal2=1 : bVal2=bVal2;
    

    minimum();
    maximum();

    if(max1[1] - 15 <= min1[1] || rVal1+gVal1+bVal1 < 30){
        grey1 = true;
    }
    if(max2[1] - 15 <= min2[1] || rVal2+gVal2+bVal2 < 30){
        grey2 = true;
    }
}
//-------------------------------------------------


//Funzioni addette al cambiamento di sfondo

//Fa sparire gli elementi della scelta del colore
function dissappear(){
    var array = ["color1","color2","dissappear","range"];
    for(var i = 0; i < array.length; i++){
        document.getElementById(array[i]).style.display ="none";
    }
    importantValuesFinder();
    setInterval(increaseDegree, 20);
}
//Aumenta i gradi del gradient con i dovuti controlli
function increaseDegree(){
    if(degree > 360){
        degree = 0;
    }else{
        degree++
    }
    greyScaleIncrement();
    colorIncrement();
    
    degreeChoice(degree);
}
//Riveve i gradi da impostare al gradient
function degreeChoice(value){
    degree = value;
    document.getElementById("sfondo").style.background = "linear-gradient(" + value +"deg," + color1.value+","+ color2.value+")";
    document.getElementById("sfondo").style.backgroundAttachment = "fixed";
}

//-----------------------------------------

//Event Listener dei due input color: cambieranno lo sfondo della pagina in tempo reale se verranno modificati
color1.addEventListener("input", function() {
    document.getElementById("sfondo").style.background = "linear-gradient(" + degree +"deg," + color1.value+","+ color2.value+")";
    document.getElementById("sfondo").style.backgroundAttachment = "fixed";
}, false);
color2.addEventListener("input", function() {
    document.getElementById("sfondo").style.background = "linear-gradient(" + degree + "deg," + color1.value+","+ color2.value+")";
    document.getElementById("sfondo").style.backgroundAttachment = "fixed";
}, false);
//------------------------------------------------------------------------------------------------------------

