import fs from 'fs';
import path from 'path';

const createTableNumber = (numberTable: number) => {

   // const numberTable: number = 5;
   const archivo = path.join(__dirname, `outputs/tabla-${numberTable}.txt`);


   let myData = '';
   console.log('=============================')
   console.log(`        Table ${numberTable}`)
   console.log('=============================')

   myData += '=============================\n';
   myData += `          Table ${numberTable}\n`
   myData += '=============================\n';

   try {

      for (let i = 1; i <= 10; i++) {
         console.log(`${numberTable} X ${i} = ${numberTable * i}`);
         myData += `${numberTable} X ${i} = ${numberTable * i}\n`;
         fs.writeFileSync(archivo, myData);
      }

   } catch (error) {
      console.log(error);
   }
}


createTableNumber(6);


