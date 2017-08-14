export class Alerta{
    constructor (public id: number, public sQALERTA: number, public cDCLIENTE: number, 
     public dATA: Date, public tEXTOALERTA: string,
     public campanha: {id: number, dESCRICAOCAMPANHA: string, 
       sQCAMPANHA: number, tEXTOCAMPANHA: string }) {

    }
}