import { CreateTable } from "../domain/use-cases.ts/create-table.use-case";

interface RunOptions {
   base: number;
   limit: number;
   showTable: boolean;
}


export class ServerApp {



   //* Methods
   static run( { base, limit, showTable} : RunOptions ){
      console.log('Server running...');

      const table = new CreateTable().execute({ base, limit});

      if(showTable) console.log(table)

   }

}
