const path = require('path')

const mapToFolder = (dependencies, folder) =>
  dependencies.reduce(
    (acc, dependency) => ({
      [dependency]: path.resolve(`${folder}/${dependency}`),
      ...acc,
    }),
    {}
  )

module.exports = {
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      ...mapToFolder(
        ['react', 'react-dom', 'styled-components'],
        './node_modules'
      ),
    },
  },
}
