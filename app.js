window.onload = () => {
    h=0; m=0; s=0; mls=0; timeStar=0;

    time = document.getElementById('tiempo');
    btnStart = document.getElementById('star');
    btnStop = document.getElementById('stop');
    btnReset = document.getElementById('reset');
    btnSave = document.getElementById('save');
    list = document.getElementById('listado');
    eventos();
};
function eventos(){
    btnStart.addEventListener("click", start);
    btnStop.addEventListener("click", stopp);
    btnReset.addEventListener("click", reset);
    btnSave.addEventListener("click", save);
}
function listar(){
    let hs,ms,seg,mlst;
    mls++;


    if(mls > 99){s++; mls=0}
    if(s > 59){m++; s=0}
    if(m > 59){h++; m=0}
    if(h > 24){h=0}

    mlst = ('0' + mls).slice(-2);
    seg = ('0' + s).slice(-2);
    ms = ('0' + m).slice(-2);
    hs = ('0' + h).slice(-2);

    time.innerHTML = `${hs}:${ms}:${seg}.${mlst}`;
}
function start(){
    listar();
    timeStar = setInterval(listar,10);
    btnStart.removeEventListener("click",start);
}
function stopp(){
    //guardar()
    clearInterval(timeStar);
    btnStart.addEventListener("click",start);
}
function reset(){
    clearInterval(timeStar);
    time.innerHTML = '00:00:00.00';
    h=0; m=0; s=0;
    btnStart.addEventListener("click",start);
}
function save(){
    let ul = document.createElement('ul');
    if (time.innerHTML == '00:00:00.00') {
        alert('Por favor inicializar el Cronometro!!!');
    }else{
        ul.innerHTML = `<li>  --- ${time.innerHTML} --- </li>`;
    }
    list.appendChild(ul);
}