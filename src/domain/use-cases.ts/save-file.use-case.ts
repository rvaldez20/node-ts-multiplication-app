import fs from 'fs';

export interface SaveFileUseCase {
   execute: ( options: Options ) => boolean;
}

export interface Options {
   fileContent : string;
   fileDestination?: string;
   fileName?   : string;
}


export class SaveFile implements SaveFileUseCase {

   constructor(
      /** repository: Storage Repository */
   ) {}

   execute( {
      fileContent,
      fileDestination = 'outputs',
      fileName = 'table',
   } : Options ):boolean {

      try {
         fs.mkdirSync(fileDestination, { recursive: true });
         fs.writeFileSync(`${ fileDestination }/${ fileName  }.txt`, fileContent);
         // console.log('File craeted!');
         return true;

      } catch (error) {
         console.error(error)
         return false
      }
   }
}
