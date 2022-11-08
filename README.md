# DaisyDir

directory management libary in NodeJs

## using npm 
```
npm i daisydir
```

## how to use 
* **ES6**
```js
import {makeDir,readDir,readFiles} from "daisydir"

makeDir("directory_name") // for creating directory

console.log(await readDir("images")); // read directory folder return array list of folder

console.log(await readFiles("images/notes.md")); // read files return string 

```
if you any suggesstion for next features you can open pull request in github pages.

enjoy :)