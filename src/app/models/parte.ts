export interface Parte{
    idParte?: Number;
    idObra:  Number;
    nombreObra: String;
    clienteObra: String;
    idTarea:  Number;
    nombreTarea: String;
    idUsuario:  Number;
    nombreUsuario: String;
    inicio:  Number;
    final:  Number;
    observacion:  String;
    fotografias?:String [];
}