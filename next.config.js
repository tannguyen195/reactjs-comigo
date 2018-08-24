
module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.(less)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]',
        }
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'babel-loader' },
          { loader: 'raw-loader' },
          {
            loader: 'less-loader',
            options: {
              modifyVars: {
                "@primary-color": "#1774e6",
                "@font-family": "AvenirNextLTPro",
              },
            }
          }],

      },
      {
        test: /\.(jpe?g|png)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-loader?pngScale=2'
      },
      {
        test: /[\/\\]node_modules[\/\\]some-module[\/\\]index\.js$/,
        loader: "imports-loader?this=>window"
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',

        }
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
         
        }]
      }

    );
    return config;
  },
};

