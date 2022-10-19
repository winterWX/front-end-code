const path = require('path');

module.exports ={
    entry:"./src/main.ts",
    output:{
      path: path.resolve(__dirname,"./dist"),
      filename:"bundle.js" 
    },
    resolve:{
        extensions: [".ts"]
    },
    module:{
        rules:{
            test:/\.ts$/,
            loader:"ts-loader"
        }
    }
}