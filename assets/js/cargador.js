var index=1;
var sumaTotal=0;
function PedidoModelo(categoria,producto,unidad,cantidad,precio,descripcion2,subtotal){
    this.categoria=categoria;
    this.producto=producto;
    this.unidad=unidad;
    this.cantidad=cantidad;
    this.precio=precio;
    this.descripcion2=descripcion2;
    this.subtotal=subtotal;
}
function CargarProducto(){
    let eleccion=document.querySelector('#categoriaPedido');
    console.log(eleccion.value);
    var categoriaS=eleccion.options[eleccion.selectedIndex].text;
    let eleccion2=document.getElementById("categoriaDetalles");
    var productoS=eleccion2.options[eleccion2.selectedIndex].text;
    var unidadS=document.getElementById("unidadDetalles").value;
    var cantidadS=document.getElementById("cantidadDetalles").value;
    var precioS=document.getElementById("precioUnitario").value;
    var descripcion2S=document.getElementById("descripcionDetalles").value;
    var subtotalS=cantidadS*precioS;
    sumaTotal=sumaTotal+subtotalS;

    var Pedido1=new PedidoModelo(categoriaS,productoS,unidadS,cantidadS,precioS,descripcion2S,subtotalS);
    console.log(Pedido1);

    var table1=document.getElementById("tablaSolicitud");
    var row = table1.insertRow(-1);
    var cell1=row.insertCell(0);
    var cell2 =row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4 =row.insertCell(3);
    var cell5=row.insertCell(4);
    var cell6 =row.insertCell(5);
    var cell7 =row.insertCell(6);
    var cell8 =row.insertCell(7);
    cell1.innerHTML=index;
    cell1.style="color: var(--bs-white);border-width: 3px;border-style: solid;"
    cell2.innerHTML=Pedido1.categoria;
    cell2.style="color: var(--bs-white);border-width: 3px;border-style: solid;"
    cell3.innerHTML=Pedido1.producto;
    cell3.style="color: var(--bs-white);border-width: 3px;border-style: solid;"
    cell4.innerHTML=Pedido1.descripcion2;
    cell4.style="color: var(--bs-white);border-width: 3px;border-style: solid;"
    cell5.innerHTML=Pedido1.unidad;
    cell5.style="color: var(--bs-white);border-width: 3px;border-style: solid;"
    cell6.innerHTML=Pedido1.cantidad;
    cell6.style="color: var(--bs-white);border-width: 3px;border-style: solid;"
    cell7.innerHTML=Pedido1.precio;
    cell7.style="color: var(--bs-white);border-width: 3px;border-style: solid;"
    cell8.innerHTML=Pedido1.subtotal;
    cell8.style="color: var(--bs-white);border-width: 3px;border-style: solid;"
    
    document.getElementById("resultadoEgreso").innerHTML=sumaTotal+" Bs.";
    index++;
}