import { mkdir } from 'node:fs/promises';
import {resolve} from "node:path"


async function makeDir(dirName,recursive=false){
  /* 
    define path from arguments parameters
  */
  const basePath = resolve(dirName);
  try {
    const folderName = new URL(basePath, import.meta.url); /* initial foldername */

    const createDir = await mkdir(folderName, { recursive: recursive }); /* create directory */
     
  } catch (error) {
    console.error(error.message); /* throwing error message */
  }  
}

export default makeDir

