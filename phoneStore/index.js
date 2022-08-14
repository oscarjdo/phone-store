class celulares {
    constructor(color,peso,resolucionDePantalla,resolucionDeCamara,memoriaRam){
        this.color = color;
        this.peso = peso;
        this.rdp = resolucionDePantalla;
        this.rdc =resolucionDeCamara;
        this.ram = memoriaRam;
        this.encendido = false;
    }
    verInfo(){
        document.write(`Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Memoria RAM: <b>${this.ram}</b><br>
        Resolución de cámara: <b>${this.rdc}</b><br>
        Resolución de pantalla: <b>${this.rdp}</b></br></br>`);
    }
    botonDeEncendido(){
        if (this.encendido == false){
            this.encendido = true;
            alert("El telefono se ha encendido");
        }
        else {
            this.encendido = false;
            alert("El telefono se ha apagado");
        }
    }
    reiniciar(){
        if (this.encendido == true){
            alert("El telefono se está reiniciando...");
        }
        else {
            alert("El telefono está apagado");
        }
    }
    tomarFoto(){
        alert(`Se ha tomado una foto con una resolución en ${this.rdc}`);
    }
    grabarVideo(){
        alert(`Se está grabando un video con una resolución en ${this.rdc}...`);
    }
}

document.write("<b>CELULARES DE GAMA MEDIA BAJA</b><br><br>");

const celular1 = new celulares ("gris","140gm","5'","hd","2GB");
const celular2 = new celulares ("negro","141gm","5.2'","full hd","4GB");
const celular3 = new celulares ("blanco","144gm","5.5'","full hd","4GB");

celular1.verInfo();
celular2.verInfo();
celular3.verInfo();

// celular1.botonDeEncendido();
// celular1.reiniciar();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.botonDeEncendido();

class celularesGamaAlta extends celulares {
    constructor(color,peso,resolucionDePantalla,resolucionDeCamara,memoriaRam,camaraExtra){
        super(color,peso,resolucionDePantalla,resolucionDeCamara,memoriaRam);
        this.camaraX = camaraExtra;
    }
    verInfo(){
        document.write(`Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Memoria RAM: <b>${this.ram}</b><br>
        Resolución de cámara: <b>${this.rdc}</b><br>
        Resolución de pantalla: <b>${this.rdp}</b></br>
        Resolución de camara extra: <b>${this.camaraX}</b><br><br>`)
    }
    botonDeEncendido(){
        if (this.encendido == false){
            this.encendido = true;
            alert("El telefono se ha encendido");
        }
        else {
            this.encendido = false;
            alert("El telefono se ha apagado");
        }
    }
    reiniciar(){
        if (this.encendido == true){
            alert("El telefono se está reiniciando...");
        }
        else {
            alert("El telefono está apagado");
        }
    }
    tomarFoto(){
        alert(`Se ha tomado una foto con una resolución de ${this.rdc}`);
    }
    grabarVideo(){
        alert(`Se está grabando un video con una resolución de ${this.rdc}...`);
    }      
}

document.write("<b>CELULARES DE GAMA ALTA</b><br><br>");

const celularG1 = new celularesGamaAlta ("negro","159gm","6.8'","180MP","6GB","42MP");
const celularG2 = new celularesGamaAlta ("gris","151gm","6.2'","192MP","8GB","52MP");

celularG1.verInfo();
celularG2.verInfo();

// celularG1.botonDeEncendido();
// celularG1.reiniciar();
// celularG1.tomarFoto();
// celularG1.grabarVideo();
// celularG1.botonDeEncendido();