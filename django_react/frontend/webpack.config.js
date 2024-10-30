module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,  // Exclude only node_modules
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,  // This rule handles CSS files
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
