export interface Proyecto {
    imagen: string;
    titulo: string;
    descripcion: string;
    tecnologias: string[];
    imagenes: string[];
    fancybox: string;
    enlaces: Enlace[];
}

interface Enlace {
    nombre: string;
    url: string;
}

export interface Habilidades {
    imagen: string;
    nombre: string;
    width: string | number;
    height: string | number;
}


