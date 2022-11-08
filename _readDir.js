import {readdir} from "node:fs/promises"
import {resolve} from "node:path"

async function readDir(pathDir,options=null){
    /* 
      define path from arguments parameters
    */
    const basePath = resolve(pathDir); /* initial foldername */

    const files = await readdir(basePath,options); /* read directory */

    let fileList = []; /* temp listing file into array  */

    /* loop listing files and insert to arrays */

    for(let file of files){ 
        fileList.push(file)
    }

    /* return in array type */
    return fileList
}
export default readDir