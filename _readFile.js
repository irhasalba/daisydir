import { readFile } from 'node:fs/promises';
import {resolve} from "node:path"

async function readFiles(filePath,options={encoding : 'utf8'}){
    try {
        /* 
         define path from arguments parameters
       */
        const basePath = resolve(filePath); /* initial foldername */

        const fileDirectory = new URL(basePath,import.meta.url) /* instance url directory */

        const readFileDir = await readFile(fileDirectory,options) /* read file  */

        return readFileDir;

    } catch (error) {
        console.log(error.message) /* throwing error message */
    }
}

export default readFiles