export class Mensagem {
    
    constructor(
        public id: number,
        public cDCLIENTE: number, 
        public tEXTO: string,
        public dATA: Date,
        public nRMATRICULAGERENTE: number, 
        public situacao: boolean,
        public sQCOMUNICACAO: number) {

    }
        
}