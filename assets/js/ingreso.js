var index=1;
function FichaMadre(a,b,c,d,e,f,g,h,i,j){
    this.a=a;
    this.b=b;
    this.c=c;
    this.d=d;
    this.e=e;
    this.f=f;
    this.g=g;
    this.h=h;
    this.i=i;
    this.j=j;
}
function CargarIngreso1(){
    var aS=document.getElementById("fechaGest").value;
    var bS=document.getElementById("lechonesVGest").value;
    var cS=document.getElementById("lechonesMGest").value;
    var dS=document.getElementById("lechonesMMGest").value;
    var eS=document.getElementById("pesoPromedioGest").value;
    var fS=document.getElementById("vivos48Gest").value;
    var gS=document.getElementById("21NGest").value;
    var hS=document.getElementById("21PGest").value;
    var iS=document.getElementById("DestNGest").value;
    var jS=document.getElementById("DestPGest").value;
    var sumaLechon=parseInt(bS)+parseInt(cS)+parseInt(dS);
    var Ingreso1= new FichaMadre(aS,bS,cS,dS,eS,fS,gS,hS,iS,jS);
    console.log(Ingreso1);

    var table1=document.getElementById("tablaIngreso1");
    var row = table1.insertRow(-1);
    var cell1=row.insertCell(0);
    var cell2 =row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4 =row.insertCell(3);
    var cell5=row.insertCell(4);
    var cell6 =row.insertCell(5);
    var cell7 =row.insertCell(6);
    var cell8 =row.insertCell(7);
    var cell9 =row.insertCell(8);
    var cell10 =row.insertCell(9);
    var cell11=row.insertCell(10);
    var cell12=row.insertCell(11);
    cell1.innerHTML=index;
    cell1.style="color: var(--bs-white);border-width: 3px;border-style: solid;"
    cell2.innerHTML=Ingreso1.a;
    cell2.style="color: var(--bs-white);border-width: 3px;border-style: solid;"
    cell3.innerHTML=Ingreso1.b;
    cell3.style="color: var(--bs-white);border-width: 3px;border-style: solid;"
    cell4.innerHTML=Ingreso1.c;
    cell4.style="color: var(--bs-white);border-width: 3px;border-style: solid;"
    cell5.innerHTML=Ingreso1.d;
    cell5.style="color: var(--bs-white);border-width: 3px;border-style: solid;"
    cell6.innerHTML=sumaLechon;
    cell6.style="color: var(--bs-white);border-width: 3px;border-style: solid;"
    cell7.innerHTML=Ingreso1.e;
    cell7.style="color: var(--bs-white);border-width: 3px;border-style: solid;"
    cell8.innerHTML=Ingreso1.f;
    cell8.style="color: var(--bs-white);border-width: 3px;border-style: solid;"
    cell9.innerHTML=Ingreso1.g;
    cell9.style="color: var(--bs-white);border-width: 3px;border-style: solid;"
    cell10.innerHTML=Ingreso1.h;
    cell10.style="color: var(--bs-white);border-width: 3px;border-style: solid;"
    cell11.innerHTML=Ingreso1.i;
    cell11.style="color: var(--bs-white);border-width: 3px;border-style: solid;"
    cell12.innerHTML=Ingreso1.j;
    cell12.style="color: var(--bs-white);border-width: 3px;border-style: solid;"
    index++;
}