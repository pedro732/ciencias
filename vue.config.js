module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/ciencias/'
    : '/',
    outputDir:'docs'
}