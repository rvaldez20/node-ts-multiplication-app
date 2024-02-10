import fs from 'fs';
import path from 'path';
import { yarg } from './config/plugins/args.plugin';

// console.log(yarg)

const createTableNumber = (base: number) => {



   let myData = '';
   const limit = yarg.l;
   const header = `
=============================
         Table ${base}
=============================
`;

   const pathFile = path.join(__dirname, '../', `outputs/tabla-${base}.txt`);

   for (let i = 1; i <= limit; i++) {
      myData += `${base} X ${i} = ${base * i}\n`;
      // console.log(`${base} X ${i} = ${base * i}`);
   }

   myData = header + '\n' + myData;

   if (yarg.s) {
      console.log(myData)
   }

   //? Save in file and directory
   // fs.mkdirSync(pathFile, { recursive: true });
   fs.writeFileSync(pathFile, myData);
   console.log('File craeted!');
}

createTableNumber(yarg.b);


