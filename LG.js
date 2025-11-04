var IDlinha = 1;
let linha = document.getElementById("linha" + IDlinha);
let btn = document.getElementById("BT")
let input = document.getElementById("input")
let NUM = 0;

btn.addEventListener("click",test)
input.addEventListener("keydown", detecent)
let certa = "anemo";
//variaveis que limitam o num de letras
var limita =0
var limitb =0
var limitc =0
var limitd =0
var limite =0
var limitf =0
var limitg =0
var limith =0
var limiti =0
var limitj =0
var limitk =0
var limitl =0
var limitm =0
var limitn =0
var limito =0
var limitp =0
var limitq =0
var limitr =0
var limits =0
var limitt =0
var limitu =0
var limitv =0
var limitw =0
var limitx =0
var limity =0
var limitz =0
//variaveis que contabilizam as letras ja pintadas
var pa =0
var pb =0
var pc =0
var pd =0
var pe =0
var pf =0
var pg =0
var ph =0
var pi =0
var pj =0
var pk =0
var pl =0
var pm =0
var pn =0
var po =0
var pp =0
var pq =0
var pr =0
var ps =0
var pt =0
var pu =0
var pv =0
var pw =0
var px =0
var py =0
var pz =0

//função que conta todas al letras da palavra certa e seta o limit
function contador(){
    certa = certa.toUpperCase();
    for(i=0; i < certa.length; i++){
         
        if( certa[i] == "A" ){
           limita++ 
        }
        if( certa[i] == "B" ){
           limitb++ 
        }
        if( certa[i] == "C" ){
           limitc++ 
        }
        if( certa[i] == "D" ){
           limitd++ 
        }
        if( certa[i] == "E" ){
           limite++ 
        }
        if( certa[i] == "F" ){
           limitf++ 
        }
        if( certa[i] == "G" ){
           limitg++ 
        }
        if( certa[i] == "H" ){
           limith++ 
        }
        if( certa[i] == "I" ){
           limiti++ 
        }
        if( certa[i] == "J" ){
           limitj++ 
        }
        if( certa[i] == "K" ){
           limitk++ 
        }
        if( certa[i] == "L" ){
           limitl++ 
        }
        if( certa[i] == "M" ){
           limitm++ 
        }
        if( certa[i] == "N" ){
           limitn++ 
        }
        if( certa[i] == "O" ){
           limito++ 
        }
        if( certa[i] == "P" ){
           limitp++ 
        }
        if( certa[i] == "Q" ){
           limitq++ 
        }
        if( certa[i] == "R" ){
           limitr++ 
        }
        if( certa[i] == "S" ){
           limits++ 
        }
        if( certa[i] == "T" ){
           limitt++ 
        }
        if( certa[i] == "U" ){
           limitu++ 
        }
        if( certa[i] == "V" ){
           limitv++ 
        }
        if( certa[i] == "W" ){
           limitw++ 
        }
        if( certa[i] == "X" ){
           limitx++ 
        }
        if( certa[i] == "Y" ){
           limity++ 
        }
        if( certa[i] == "Z" ){
           limitz++ 
        }

        

    }
    console.log(limite)
    console.log(pe)
    if(limite > pe){
        console.log("Pronto pra pintar")
    }

    
}
//chamando contador
contador();
//função do botão
function detecent(tecla){
    if(tecla.key === "Enter"){
        test();
    }
}
//função que testa as letras
function test(){
    palavra = document.getElementById("input").value;
    certa = certa.toUpperCase();
    palavra = palavra.toUpperCase();
    if(palavra.length == 5 && IDlinha < 7 && NUM == 0){
        //verificacção gigante das verdes
         for(i=0; i < palavra.length; i++){
            if( palavra[i] == certa[i] ){
                addverde(palavra[i]);
                   //--------------a
                if (palavra[i] == "A" && limita > pa)
                {
                    pa++;
                } 
                //-------------b
                if (palavra[i] == "B" && limitb > pb)
                {
                    pb++;
                } 
                //--------------c
                if (palavra[i] == "C" && limitc > pc)
                {
                    pc++;
                } 
                //--------------d
                if (palavra[i] == "D" && limitd > pd)
                {
                    pd++;
                } 
                //--------------e
                if (palavra[i] == "E" && limite > pe)
                {
                    pe++;
                } 
                //--------------f
                if (palavra[i] == "F" && limitf > pf)
                {
                    pf++;
                }
                //--------------g
                if (palavra[i] == "G" && limitg > pg)
                {
                    pg++;
                }
                //--------------h
                if (palavra[i] == "H" && limith > ph)
                {
                    ph++;
                } 
                //--------------i
                if (palavra[i] == "I" && limiti > pi)
                {
                   
                    pi++;
                } 
                //--------------j
                if (palavra[i] == "J" && limitj > pj)
                {

                    pj++;
                } 
                //--------------k
                if (palavra[i] == "K" && limitk > pk)
                {
                    pk++;
                } 
                //--------------l
                if (palavra[i] == "L" && limitl > pl)
                {
                   
                    pl++;
                } 
                //--------------m
                if (palavra[i] == "M" && limitm > pm)
                {
                  
                    pm++;
                }
                //--------------n
                if (palavra[i] == "N" && limitn > pn)
                {
                  
                    pn++;
                } 
                //--------------o
                if (palavra[i] == "O" && limito > po)
                {
                   
                    po++;
                }
                //--------------p
                if (palavra[i] == "P" && limitp > pp)
                {
                  
                    pp++;
                } 
                //--------------q
                if (palavra[i] == "Q" && limitq > pq)
                {
                   
                    pq++;
                }
                //--------------r
                if (palavra[i] == "R" && limitr > pr )
                {
                    
                    pr++;
                }
                //--------------s
                if (palavra[i] == "S" && limits > ps)
                {
                   
                    ps++;
                } 
                //--------------t
                if (palavra[i] == "T" && limitt > pt)
                {
                   
                    pt++;
                } 
                //--------------u
                if (palavra[i] == "U" && limitu > pu)
                {
                    
                    pu++;
                } 
                //--------------v
                if (palavra[i] == "V" && limitv > pv)
                {
                   
                    pv++;
                } 
                //--------------w
                if (palavra[i] == "W" && limitw > pw)
                {
                   
                    pw++;
                } 
                //--------------x
                if (palavra[i] == "X" && limitx > px)
                {
                  
                    px++;
                } 
                //--------------y
                if (palavra[i] == "Y" && limity > py)
                {
                   
                    py++;
                }
                //--------------z
                if (palavra[i] == "Z" && limitz > pz)
                {
                    
                    pa++;
                } 
                //-----------
            }
            //verificacção gigante das amarelas e pretas
            else if (certa.includes(palavra[i])){
                console.log(palavra[i] + "amarele")
                console.log(limite)
                //--------------a
                if (palavra[i] == "A" && limita > pa)
                {
                    addmeio(palavra[i]);
                    pa++;
                } else if (palavra[i] == "A"){
                    adderra(palavra[i]);
                }
                //--------------b
                if (palavra[i] == "B" && limitb > pb)
                {
                    addmeio(palavra[i]);
                    pb++;
                } else if (palavra[i] == "B"){
                    adderra(palavra[i]);
                }
                //--------------c
                if (palavra[i] == "C" && limitc > pc)
                {
                    addmeio(palavra[i]);
                    pc++;
                } else if (palavra[i] == "C"){
                    adderra(palavra[i]);
                }
                //--------------d
                if (palavra[i] == "D" && limitd > pd)
                {
                    addmeio(palavra[i]);
                    pd++;
                } else if (palavra[i] == "D"){
                    adderra(palavra[i]);
                }
                //--------------e
                if (palavra[i] == "E" && limite > pe)
                {
                    addmeio(palavra[i]);
                    pe++;
                } else if (palavra[i] == "E"){
                    adderra(palavra[i]);
                }
                //--------------f
                if (palavra[i] == "F" && limitf > pf)
                {
                    addmeio(palavra[i]);
                    pf++;
                } else if (palavra[i] == "F"){
                    adderra(palavra[i]);
                }
                //--------------g
                if (palavra[i] == "G" && limitg > pg)
                {
                    addmeio(palavra[i]);
                    pg++;
                } else if (palavra[i] == "G"){
                    adderra(palavra[i]);
                }
                //--------------h
                if (palavra[i] == "H" && limith > ph)
                {
                    addmeio(palavra[i]);
                    ph++;
                } else if (palavra[i] == "H"){
                    adderra(palavra[i]);
                }
                //--------------i
                if (palavra[i] == "I" && limiti > pi)
                {
                    addmeio(palavra[i]);
                    pi++;
                } else if (palavra[i] == "I"){
                    adderra(palavra[i]);
                }
                //--------------j
                if (palavra[i] == "J" && limitj > pj)
                {
                    addmeio(palavra[i]);
                    pj++;
                } else if (palavra[i] == "J"){
                    adderra(palavra[i]);
                }
                //--------------k
                if (palavra[i] == "K" && limitk > pk)
                {
                    addmeio(palavra[i]);
                    pk++;
                } else if (palavra[i] == "K"){
                    adderra(palavra[i]);
                }
                //--------------l
                if (palavra[i] == "L" && limitl > pl)
                {
                    addmeio(palavra[i]);
                    pl++;
                } else if (palavra[i] == "L"){
                    adderra(palavra[i]);
                }
                //--------------m
                if (palavra[i] == "M" && limitm > pm)
                {
                    addmeio(palavra[i]);
                    pm++;
                } else if (palavra[i] == "M"){
                    adderra(palavra[i]);
                }
                //--------------n
                if (palavra[i] == "N" && limitn > pn)
                {
                    addmeio(palavra[i]);
                    pn++;
                } else if (palavra[i] == "N"){
                    adderra(palavra[i]);
                }
                //--------------o
                if (palavra[i] == "O" && limito > po)
                {
                    addmeio(palavra[i]);
                    po++;
                } else if (palavra[i] == "O"){
                    adderra(palavra[i]);
                }
                //--------------p
                if (palavra[i] == "P" && limitp > pp)
                {
                    addmeio(palavra[i]);
                    pp++;
                } else if (palavra[i] == "P"){
                    adderra(palavra[i]);
                }
                //--------------q
                if (palavra[i] == "Q" && limitq > pq)
                {
                    addmeio(palavra[i]);
                    pq++;
                } else if (palavra[i] == "Q"){
                    adderra(palavra[i]);
                }
                //--------------r
                if (palavra[i] == "R" && limitr > pr )
                {
                    addmeio(palavra[i]);
                    pr++;
                } else if (palavra[i] == "R"){
                    adderra(palavra[i]);
                }
                //--------------s
                if (palavra[i] == "S" && limits > ps)
                {
                    addmeio(palavra[i]);
                    ps++;
                } else if (palavra[i] == "S"){
                    adderra(palavra[i]);
                }
                //--------------t
                if (palavra[i] == "T" && limitt > pt)
                {
                    addmeio(palavra[i]);
                    pt++;
                } else if (palavra[i] == "T"){
                    adderra(palavra[i]);
                }
                //--------------u
                if (palavra[i] == "U" && limitu > pu)
                {
                    addmeio(palavra[i]);
                    pu++;
                } else if (palavra[i] == "U"){
                    adderra(palavra[i]);
                }
                //--------------v
                if (palavra[i] == "V" && limitv > pv)
                {
                    addmeio(palavra[i]);
                    pv++;
                } else if (palavra[i] == "V"){
                    adderra(palavra[i]);
                }
                //--------------w
                if (palavra[i] == "W" && limitw > pw)
                {
                    addmeio(palavra[i]);
                    pw++;
                } else if (palavra[i] == "W"){
                    adderra(palavra[i]);
                }
                //--------------x
                if (palavra[i] == "X" && limitx > px)
                {
                    addmeio(palavra[i]);
                    px++;
                } else if (palavra[i] == "X"){
                    adderra(palavra[i]);
                }
                //--------------y
                if (palavra[i] == "Y" && limity > py)
                {
                    addmeio(palavra[i]);
                    py++;
                } else if (palavra[i] == "Y"){
                    adderra(palavra[i]);
                }
                //--------------z
                if (palavra[i] == "Z" && limitz > pz)
                {
                    addmeio(palavra[i]);
                    pa++;
                } else if (palavra[i] == "Z"){
                    adderra(palavra[i]);
                }
                //--------------


             

            }
            else{
                adderra(palavra[i]);
            }
      
        }
    //arumando as variaves pra proxima linha
    IDlinha++
    pa =0
    pb =0
    pc =0
    pd =0
    pe =0
    pf =0
    pg =0
    ph =0
    pi =0
    pj =0
    pk =0
    pl =0
    pm =0
    pn =0
    po =0
    pp =0
    pq =0
    pr =0
    ps =0
    pt =0
    pu =0
    pv =0
    pw =0
    px =0
    py =0
    pz =0



    //--------------

    linha = document.getElementById("linha" + IDlinha);
    } else {
        console.log("impossivel")
    }
    if (palavra == certa){
        NUM = 1
    }
    
   

}
//função que pinta de verde
function addverde(txt){
    console.log(txt);
    let div = document.createElement("div");
    div.classList.add("quadro");
    div.classList.add("verde");
    div.textContent = txt;
    linha.appendChild(div);
}
//função que não pinta kk
function adderra(txte){
    console.log(txte);
    let div = document.createElement("div");
    div.classList.add("quadro");
    div.textContent = txte;
    linha.appendChild(div);
}
//função que pinta de amarelo
function addmeio(txtm){
    console.log(txtm);
    let div = document.createElement("div");
    div.classList.add("quadro");
    div.classList.add("amarelo");
    div.textContent = txtm;
    linha.appendChild(div);
}


