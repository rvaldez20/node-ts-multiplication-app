import fs from 'fs';
import path from 'path';

const createTableNumber = (base: number) => {

   let myData = '';
   const limit = 10;
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
   console.log(myData)

   //? Save in file and directory
   // fs.mkdirSync(pathFile, { recursive: true });
   fs.writeFileSync(pathFile, myData);
}

createTableNumber(8);


