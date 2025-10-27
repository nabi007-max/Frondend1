
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://nabi007-max.github.io/Frondend1/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Frondend1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QCQMNCEM.js"
    ],
    "route": "/Frondend1/about"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KOGCYKPO.js"
    ],
    "route": "/Frondend1/experiencia"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XAL2DG7U.js"
    ],
    "route": "/Frondend1/educacion"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UBUHI4WO.js"
    ],
    "route": "/Frondend1/habilidades"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VRWR67NE.js",
      "chunk-5OOQNVOX.js"
    ],
    "route": "/Frondend1/interes"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PKNQ35VM.js",
      "chunk-5OOQNVOX.js"
    ],
    "route": "/Frondend1/reconocimientos"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 7844, hash: '4e2d0a5ec9d93d38a02dbab9018ecb749b2a0202d1b0b11f20c06ccb5c3ddc8c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 8363, hash: 'ed0475ddf80f72c21d3275d28297f8a80a0162acb8873103c86ef4bff829f1c3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 9853, hash: '13fabf1efc8addcf2b773b9af1bcf53c6dbc64b1d3d930ee74c5f90441c73154', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'experiencia/index.html': {size: 17720, hash: '8dec5be8ed574db0041b9a45f46aeead266bd8458cbeed12fda2f599d31eeb74', text: () => import('./assets-chunks/experiencia_index_html.mjs').then(m => m.default)},
    'habilidades/index.html': {size: 10966, hash: '978b197a43c9bcf317d1e4535af449b624b7c4b112e60f08109bb97567e73817', text: () => import('./assets-chunks/habilidades_index_html.mjs').then(m => m.default)},
    'educacion/index.html': {size: 10338, hash: '044932e384ace77b1158d3a1b53456d71ea430df158e770a46b25a410713b94f', text: () => import('./assets-chunks/educacion_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 11433, hash: 'e4420ffd27210816269c371741ddae5e2dfe7581611b68d2845081330e531072', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'reconocimientos/index.html': {size: 14994, hash: '7e3020f6c99cd021454468ad3cb73fa6db7c4d97477c60ce6c287b2989a246a8', text: () => import('./assets-chunks/reconocimientos_index_html.mjs').then(m => m.default)},
    'interes/index.html': {size: 13755, hash: 'ec92071d81f86957477115f0355208cb32a7a7d7bf3fcc5f8ec1f3e568717e22', text: () => import('./assets-chunks/interes_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
