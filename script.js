const taka=document.getElementById("tk");
const usdolar=document.getElementById("dolar");
const indianrupi=document.getElementById("indianRs");
const euro=document.getElementById("euro");


taka.addEventListener("input",bdTktoOthers);
function bdTktoOthers(){
    const bdtk = parseFloat(taka.value);
    const usd=bdtk*0.012;
    const ir = bdtk*0.86;
    const er = bdtk*0.0099;
    
    usdolar.value = usd;
    indianrupi.value=ir;
    euro.value=er;
}



usdolar.addEventListener("input",usdTktoOthers);
function usdTktoOthers(){
    const usd = parseFloat(usdolar.value);
    const bdtk=usd*84.73;
    const ir = usd*73.23;
    const er = usd*0.84;
    
    taka.value = bdtk;
    indianrupi.value=ir;
    euro.value=er;
}

indianrupi.addEventListener("input",inrTOothers);
function  inrTOothers(){
    const ir= parseFloat(indianrupi.value);
    const bdtk = ir*1.15;
    const usd = ir*0.013;
    const er=ir*0.011;
    taka.value = bdtk;
    usdolar.value = usd;
    euro.value=er;

}

lankanrupi.addEventListener("input",eurotoother);
function eurotoother(){

    const er = parseFloat(euro.value);
    const bdtk = er*100.57;
    const usd  = er*1.19;
    const ir  = er*87.97 ;
    taka.value = bdtk;
    usdolar.value = usd;
    indianrupi.value=ir;

}


function main(){
    bdTktoOthers();
    usdTktoOthers();
    inrTOothers();
    eurotoother();
}
main();