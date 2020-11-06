export default {
  target: 'static',

  buildModules: [
    '@nuxt/serverless'
  ],

  generate: {
    cache: {
      // TODO: remove with nuxt sls update
      ignore: [
        'api/',
        'vercel.json'
      ]
    }
  },


  serverless: {
    static: [
      '/2'
    ],
    target: 'vercel',
  }
}
