import path from 'path';

export default {
  entry: path.join(__dirname, '/client/index.js'),
  output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
      },
    module: {
        loaders: [
            {test: /\.js$/, include: path.join(__dirname, 'client'), loader: "babel"}
        ]
    },
    resolve: {
      extentions: [ '', '.js' ]
    }
}
