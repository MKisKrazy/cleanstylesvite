#!/usr/bin/env node
import path from "path"
import fs from "fs"

const appComponentPath= path.join(process.cwd(),'src','App.jsx')

const styleFiles=[ path.join(process.cwd(), 'src', 'index.css'),
    path.join(process.cwd(), 'src', 'App.css')]

const newAppjsx=`function App() {
        return (
          <>
      
          </>
        )
      }
      export default App`

try{

    fs.writeFileSync(appComponentPath,newAppjsx,'utf-8')
    console.log("Reset the App.jsx to empty compinent template")

    }catch(e){

    console.log("Couldnt Reset the App.jsx template:"+e)

    }


styleFiles.forEach((styleFilePath)=>{
    try{
        fs.writeFileSync(styleFilePath,'','utf-8')
    }catch(e){
        console.log(`Couldn't clear ${path.basename(styleFilePath)}.css: ${e}`)
    }
    
})
console.log("Cleared Standard Styles in both App.css and index.css")