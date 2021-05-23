/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
   public: {url: '/', static: true},
   src: '/_dist_',
  },
  plugins: [
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-postcss',
    '@snowpack/plugin-sass',
  ],
  packageOptions: {
    polyfillNode: true
  },
  alias: {
    components: './src/components',
    pages: './src/pages'
  }
};
