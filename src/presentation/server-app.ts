import { CreateTable } from "../domain/use-cases.ts/create-table.use-case";
import { SaveFile } from "../domain/use-cases.ts/save-file.use-case";

interface RunOptions {
   base           : number;
   limit          : number;
   showTable      : boolean;
   fileDestination: string;
   fileName       : string;
}


export class ServerApp {


   //* Methods
   static run( { base, limit, showTable, fileDestination, fileName } : RunOptions ){
      console.log('Server running...');

      const table = new CreateTable().execute({ base, limit});
      const wasCreated = new SaveFile().execute({
         fileContent: table,
         fileDestination: fileDestination,
         fileName: fileName,
      })

      if(showTable) {
         console.log(table)
      }

      ( wasCreated)
         ? console.log('File created!')
         : console.log('File not created!');

   }

}
