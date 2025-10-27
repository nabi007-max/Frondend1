
export default {
  basePath: 'https://nabi007-max.github.io/Frondend1',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
