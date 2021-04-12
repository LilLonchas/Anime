//doc --> apunta al inicio del documento HTML <html>
var doc = $(document);
//ready --> cuando se HA CARGADO EL HTML COMPLETO:
// - recursos del HEAD: css, fuentes, script js, fontawesonne ...
// - del BODY: TODO EL HTML + imagenes ...,
// SE EJECUTARÁ LA FUNCIÓN iniciar
doc.ready(iniciar);

function iniciar() {
    console.log('Hola Mundo ...');
    var xqsomos = $("header nav a#qsomos");
    var xinformacion = $("header nav a#informacion");
    var xpeliculas = $("header nav a#peliculas");
    var xseries = $("header nav a#series");
    var xcontactos  = $("header nav a#contactos");
    var xhome = $("header figure#home")
    xqsomos.click(cargarqsomos);
    xinformacion.click(cargarinformacion);
    xpeliculas.click(cargarpeliculas);
    xseries.click(cargarseries);
    xcontactos.click(cargarcontactos);
    xhome.click(cargarhome);
    
    cargarhome();
}

function cargarhome(){
    $("main").load("html/home.html");
    $("head").children().last().remove();
    $("head")
    .append ("<link rel='stylesheet' href='../css/home.css'>" )
}


function cargarqsomos(){
    console.log('clikeado qsomos...');
//cargar el fichero /html/qsomos.html en la <main>   
    $("main").load("html/qsomos.html");
}
function cargarinformacion(){
    console.log('clikeado informacion...');
//cargar el fichero /html/informacion.html en la <main>   
    $("main").load("html/informacion.html");
}

function cargarpeliculas(){
    console.log('clikeado peliculas...');
//cargar el fichero /html/peliculas.html en la <main>   
    $("main").load("html/peliculas.html");
    $("head").children().last().remove();
    $("head")
        .append ("<link rel='stylesheet' href='../css/peliculas.css'>" )
}

function cargarseries(){
    console.log('clikeado series...');
//cargar el fichero /html/series.html en la <main>   
    $("main").load("html/series.html");
    $("head").children().last().remove();
    $("head")
        .append ("<link rel='stylesheet' href='../css/series.css'>" )

}
function cargarcontactos(){
    console.log('clikeado contactos...');
//cargar el fichero /html/contactos.html en la <main>   
    $("main").load("html/contactos.html");
}