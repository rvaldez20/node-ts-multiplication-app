//! usando pakage yargs
import { yarg } from "./config/plugins/args.plugin";
import { ServerApp } from "./presentation/server-app";


(async() => {
   await main();
})();



async function main() {

   const { b:base, l:limit, s:showTable } = yarg;
   // console.log(yarg);

   ServerApp.run({ base, limit, showTable });

}

