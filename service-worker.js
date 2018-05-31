/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "16eaabe8e920848963acbdc4d5fcc075"
  },
  {
    "url": "assets/css/86.styles.64f0d63b.css",
    "revision": "312edf9e8d59b0f813ec916291a06e29"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.8a878c1b.js",
    "revision": "e14a69278b53f4de69d0d9dcd8a4d968"
  },
  {
    "url": "assets/js/1.b1c1a2ea.js",
    "revision": "22b06ced134445eae09440b0b1f5ddc8"
  },
  {
    "url": "assets/js/10.da24d5ba.js",
    "revision": "2bb5850d341ec5cc2e63aa4eb6ce34b9"
  },
  {
    "url": "assets/js/11.442813cc.js",
    "revision": "cd806be0e3bcf315779cc03f8bad6470"
  },
  {
    "url": "assets/js/12.32c694f7.js",
    "revision": "c59b77370cebafe8cd0c01e0e33359ba"
  },
  {
    "url": "assets/js/13.7e4ecb62.js",
    "revision": "6b2ef6722a9fba2ce18ec7e52be6f554"
  },
  {
    "url": "assets/js/14.0fc41024.js",
    "revision": "f96d6ed8c9dd14ae8d141e391896f1f1"
  },
  {
    "url": "assets/js/15.34dce108.js",
    "revision": "6d8e1de9e623af20e6fcb9731a384947"
  },
  {
    "url": "assets/js/16.e0a8e32c.js",
    "revision": "6aaf3acc6a760607cc2aa32cf003faa9"
  },
  {
    "url": "assets/js/17.e1539099.js",
    "revision": "91e93918377958ca7ccb240f7a63acba"
  },
  {
    "url": "assets/js/18.18817f05.js",
    "revision": "19f7034a9fd846cc8e2e5f104614818c"
  },
  {
    "url": "assets/js/19.d35c8d09.js",
    "revision": "fdea299ce2d47b446f32db83285c70ec"
  },
  {
    "url": "assets/js/2.537438ad.js",
    "revision": "19177754d02979c3f967c94a0c9ae04d"
  },
  {
    "url": "assets/js/20.c84ebe20.js",
    "revision": "bb64ff72cca141404b994de84146fea2"
  },
  {
    "url": "assets/js/21.7f0522c0.js",
    "revision": "5f1319c0fe0f29bededeb1de0a1df282"
  },
  {
    "url": "assets/js/22.8d52dde1.js",
    "revision": "32dadcd917e3cc305d67286ae4e0c566"
  },
  {
    "url": "assets/js/23.defdb32e.js",
    "revision": "b265b45d7e02ba2cbb93cdebea3bc19e"
  },
  {
    "url": "assets/js/24.acb69414.js",
    "revision": "dade67caf8fd8229b9b3bcd5ca4c4cbb"
  },
  {
    "url": "assets/js/25.57d627ed.js",
    "revision": "c5e3b51d902fe5d8e9d8b312cbb09be1"
  },
  {
    "url": "assets/js/26.872de1ab.js",
    "revision": "5dd9b2fda02d12fb19708606e7e51c04"
  },
  {
    "url": "assets/js/27.b97cd86c.js",
    "revision": "ffaebd7181080c3fa5a2808e19cc4f03"
  },
  {
    "url": "assets/js/28.97bce00c.js",
    "revision": "8dccfa2b8138d5f94ddd6f6f7897695d"
  },
  {
    "url": "assets/js/29.39880eb3.js",
    "revision": "2a5ea91d2548645f201dc97c54517109"
  },
  {
    "url": "assets/js/3.9d5fc46e.js",
    "revision": "5fd429fdf6f50758315fda6bd98115a6"
  },
  {
    "url": "assets/js/30.4ed96349.js",
    "revision": "d0178f4194a9ed564cecb081a1059b77"
  },
  {
    "url": "assets/js/31.b1480341.js",
    "revision": "9caba1a5d787e47e3c5c1ae2810a0154"
  },
  {
    "url": "assets/js/32.a814207f.js",
    "revision": "13681901211539c54e6b912fc2a85faa"
  },
  {
    "url": "assets/js/33.00f3f7ca.js",
    "revision": "2abadb52ce649340a18d907ad9c332bf"
  },
  {
    "url": "assets/js/34.38e12cf8.js",
    "revision": "2c89efe485c51e51932350b2959c35b7"
  },
  {
    "url": "assets/js/35.946a2b41.js",
    "revision": "173ca883fb1cb11ac2d145adc47268c1"
  },
  {
    "url": "assets/js/36.64eb45aa.js",
    "revision": "c3bd83db090230ebcac72662e29b6f03"
  },
  {
    "url": "assets/js/37.bac1a7d6.js",
    "revision": "ff860562c56c204a735d0ce35a91bf7d"
  },
  {
    "url": "assets/js/38.4ded015a.js",
    "revision": "2fecf5163a8f9c2845d5d2768e1c855f"
  },
  {
    "url": "assets/js/39.8fcca644.js",
    "revision": "ac919a2e8394b3ba80055245c3e12c2c"
  },
  {
    "url": "assets/js/4.72eda510.js",
    "revision": "59d523b13839d3e321a719ea75f69d37"
  },
  {
    "url": "assets/js/40.f8580345.js",
    "revision": "ed4012ba823eaef9b30df6a03d4c8711"
  },
  {
    "url": "assets/js/41.6d68e0c3.js",
    "revision": "622244a09f4a92422fb7fb2e9403930f"
  },
  {
    "url": "assets/js/42.d92a5b64.js",
    "revision": "a381b30a55f2ef5656f3117475d864fe"
  },
  {
    "url": "assets/js/43.46a1f8ea.js",
    "revision": "e261917bccb915c9eabfcc8ac2cb45b8"
  },
  {
    "url": "assets/js/44.d31c123f.js",
    "revision": "2a110f3cf576eab6d262207d00160a4d"
  },
  {
    "url": "assets/js/45.e7665429.js",
    "revision": "ea63783dbf7e0328ffb5aea3685752d7"
  },
  {
    "url": "assets/js/46.d8e30068.js",
    "revision": "17bd6348c9d92a7acad3bc4766a213e5"
  },
  {
    "url": "assets/js/47.f9089848.js",
    "revision": "d9b34cf86e9f17d8a54e18e4fc96cf4e"
  },
  {
    "url": "assets/js/48.afb893e5.js",
    "revision": "29dee0ad626519a6d1d3f338c4c9560d"
  },
  {
    "url": "assets/js/49.89851a41.js",
    "revision": "077b050427b892ef73e849f8f7b5a920"
  },
  {
    "url": "assets/js/5.acf5be82.js",
    "revision": "4affb8525f65d71af65ce784eaec13e8"
  },
  {
    "url": "assets/js/50.7442adad.js",
    "revision": "d33c2d6bc5f212120d3b4c846ea8eba9"
  },
  {
    "url": "assets/js/51.adb3d055.js",
    "revision": "bf77da58ba34abdf868ac8de436a1caa"
  },
  {
    "url": "assets/js/52.56a85d8b.js",
    "revision": "dccf3c5ffc933f6e141f0873598b876e"
  },
  {
    "url": "assets/js/53.9e2ce875.js",
    "revision": "e45178b82d76129fdce655fc6820506e"
  },
  {
    "url": "assets/js/54.643cdd94.js",
    "revision": "105a14c325ddc3ecc9e4a7e9cac33b1c"
  },
  {
    "url": "assets/js/55.e94b1723.js",
    "revision": "c48c1f20d6561a8691cba6205110a070"
  },
  {
    "url": "assets/js/56.5558052b.js",
    "revision": "ebe4676cc3d9b57ab63463e99ca6708a"
  },
  {
    "url": "assets/js/57.f26664bf.js",
    "revision": "c3c67450978ba6e458ff6d9cc38c2ad8"
  },
  {
    "url": "assets/js/58.ab7f77e6.js",
    "revision": "bd44bbb9b08195b8a456ce21ce9cbd96"
  },
  {
    "url": "assets/js/59.a14a8830.js",
    "revision": "7dfeb685595eae2848362ad7eb3c336e"
  },
  {
    "url": "assets/js/6.2c9aabb7.js",
    "revision": "22bb18d92c46d2530497b8e4dd83f2d0"
  },
  {
    "url": "assets/js/60.0c842fe0.js",
    "revision": "2ef5b7bf423b393eb8d5b8b48a580b7a"
  },
  {
    "url": "assets/js/61.eb1a17b8.js",
    "revision": "6114b939e8132268ce5dd359bae935eb"
  },
  {
    "url": "assets/js/62.e3125f38.js",
    "revision": "7e15ab5a8d9f9ea5ac6ce19a4569f713"
  },
  {
    "url": "assets/js/63.60786fea.js",
    "revision": "086c08820698944c8049c7869887e669"
  },
  {
    "url": "assets/js/64.a363b799.js",
    "revision": "5aa2e0c4d56adc50097f8ba8518036c2"
  },
  {
    "url": "assets/js/65.94f1d017.js",
    "revision": "dbec43d65d80b71b35a6260e24221c49"
  },
  {
    "url": "assets/js/66.113357e5.js",
    "revision": "2ffb1d96e026775cdd04a906c99f1a93"
  },
  {
    "url": "assets/js/67.dd8c6a13.js",
    "revision": "69b196c90dc3d3db08265a71f0018b15"
  },
  {
    "url": "assets/js/68.c6d2e61f.js",
    "revision": "c79bfb802eaeb8357fea48b47640197a"
  },
  {
    "url": "assets/js/69.97f0331e.js",
    "revision": "fdffe3d01ec70668773db0410df08d81"
  },
  {
    "url": "assets/js/7.d2bee633.js",
    "revision": "0b9bc0f74ebe6badffbfbfbddfa69793"
  },
  {
    "url": "assets/js/70.77f4656e.js",
    "revision": "14cf04accb02405c2109880a69a92ce1"
  },
  {
    "url": "assets/js/71.2d774526.js",
    "revision": "30f073fc85d6f363aa968e000bb3dea7"
  },
  {
    "url": "assets/js/72.862ce7f3.js",
    "revision": "19e2fee7676dce78eb9f02dcb61759a0"
  },
  {
    "url": "assets/js/73.21eb436c.js",
    "revision": "43496524ce457d4ff06bc5ab1af4ba01"
  },
  {
    "url": "assets/js/74.682a5d09.js",
    "revision": "bf22b69e1cdf75d967e1c8b3d7d63647"
  },
  {
    "url": "assets/js/75.a16b092e.js",
    "revision": "bb0a6fe63cfabf72e66f0e643832286b"
  },
  {
    "url": "assets/js/76.4b79c461.js",
    "revision": "c96bc2786542aeb4e4c2bad3b24992aa"
  },
  {
    "url": "assets/js/77.fd4dd50b.js",
    "revision": "5196db3f112e640a8a4a5f704a2e0611"
  },
  {
    "url": "assets/js/78.d776d125.js",
    "revision": "67d4a94991b5039c569f298703f71c25"
  },
  {
    "url": "assets/js/79.791e0b8f.js",
    "revision": "9dbe0fd034e481ae1b91f5a804adf447"
  },
  {
    "url": "assets/js/8.815822fb.js",
    "revision": "348cb91b0bc54e42391021d89b37855d"
  },
  {
    "url": "assets/js/80.860c1501.js",
    "revision": "e6935a94f56f8a9551b8caaee0bba84f"
  },
  {
    "url": "assets/js/81.20066afa.js",
    "revision": "d7c41576a46800b5add3cd8862ece5e8"
  },
  {
    "url": "assets/js/82.4078c08f.js",
    "revision": "880c30a6b20862567a55d07f760c5ed7"
  },
  {
    "url": "assets/js/83.50b0cf52.js",
    "revision": "44f554dec311d95578461bc3d22d3670"
  },
  {
    "url": "assets/js/84.8f3589b2.js",
    "revision": "c242f6f00b4b6a76b7257eb156b55542"
  },
  {
    "url": "assets/js/85.dc0bf315.js",
    "revision": "fc25a4568ac6d2d27ceb4a7e639c8f07"
  },
  {
    "url": "assets/js/9.6bc681fb.js",
    "revision": "191d118a8cf7670bcb85046875c3ea24"
  },
  {
    "url": "assets/js/app.5886ca36.js",
    "revision": "6ea6f7f3fda9cc4155e73ac3f4660b57"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "1085169a7c9dcc6fc15332db77861e47"
  },
  {
    "url": "index.html",
    "revision": "a1076db19d8f22dea2107771134c2251"
  },
  {
    "url": "rules/index.html",
    "revision": "aec7998634ef735a4ce4e973380e6b75"
  },
  {
    "url": "rules/no-accessor-properties.html",
    "revision": "0c46ef31cff8bee2bef01f3d4b161626"
  },
  {
    "url": "rules/no-array-from.html",
    "revision": "586643b44c255c8b5de1dcd4d0c2cf58"
  },
  {
    "url": "rules/no-array-of.html",
    "revision": "6bf852c2f49e87bbea81719c956abda7"
  },
  {
    "url": "rules/no-arrow-functions.html",
    "revision": "b5814610a021752c90e0ef61b5505cac"
  },
  {
    "url": "rules/no-async-functions.html",
    "revision": "64c0569e97fe5314909e2599ee704004"
  },
  {
    "url": "rules/no-async-iteration.html",
    "revision": "b78f29af9fe7af2929a8d378cec87d97"
  },
  {
    "url": "rules/no-atomics.html",
    "revision": "85462845afd72cfee6e0e9924cca5d77"
  },
  {
    "url": "rules/no-binary-numeric-literals.html",
    "revision": "75b6e7a9f06c805cf99c3e02f72fea99"
  },
  {
    "url": "rules/no-block-scoped-functions.html",
    "revision": "6c9241fb139a7b37fe13baedac4e2226"
  },
  {
    "url": "rules/no-block-scoped-variables.html",
    "revision": "ffa4bc59dd348099d39e73f3b183faf3"
  },
  {
    "url": "rules/no-classes.html",
    "revision": "09cfb9b0679be3b03df52bbc08fb09bd"
  },
  {
    "url": "rules/no-computed-properties.html",
    "revision": "47930f7ea970ad4e2ed65a4a26aec6c9"
  },
  {
    "url": "rules/no-default-parameters.html",
    "revision": "6c03c5a09da6e94b8967354a2f5da1ba"
  },
  {
    "url": "rules/no-destructuring.html",
    "revision": "88ba05cb0aa844701eb9b6c16c4b918c"
  },
  {
    "url": "rules/no-exponential-operators.html",
    "revision": "abbfd4b91bf73e273ccd440740cb78ba"
  },
  {
    "url": "rules/no-for-of-loops.html",
    "revision": "0ec316d59cd6ceac3f434e724e62425b"
  },
  {
    "url": "rules/no-generators.html",
    "revision": "b6a4dd9f07663b535d0872b9459bd93f"
  },
  {
    "url": "rules/no-keyword-properties.html",
    "revision": "9b9dbaf7d267893f4836554f0caacdf6"
  },
  {
    "url": "rules/no-malformed-template-literals.html",
    "revision": "9cee2bc7e36feb5a651d91469e8d2c97"
  },
  {
    "url": "rules/no-map.html",
    "revision": "4a26156e6847c9f435b73ae4f26dd977"
  },
  {
    "url": "rules/no-math-acosh.html",
    "revision": "8ee6938836113d86b1e3500650de3f6b"
  },
  {
    "url": "rules/no-math-asinh.html",
    "revision": "a7b9d5c0bbf471c23da8e8b3a5b3abf9"
  },
  {
    "url": "rules/no-math-atanh.html",
    "revision": "701591e0829ce5ac9bd329e4128b0e9e"
  },
  {
    "url": "rules/no-math-cbrt.html",
    "revision": "32215a88b19a422cfb499da475619e63"
  },
  {
    "url": "rules/no-math-clz32.html",
    "revision": "395539eb4c0724c412b9ee80a7757998"
  },
  {
    "url": "rules/no-math-cosh.html",
    "revision": "cb8cf6bb5cc09d9efcf96c7671ed9083"
  },
  {
    "url": "rules/no-math-expm1.html",
    "revision": "08182733213ce74361d433f4b1575415"
  },
  {
    "url": "rules/no-math-fround.html",
    "revision": "fbea148074bfa502020208c1bdf5d718"
  },
  {
    "url": "rules/no-math-hypot.html",
    "revision": "255cfefef6c9e997044dffff2d409bdd"
  },
  {
    "url": "rules/no-math-imul.html",
    "revision": "d4e2999e1b228e2a87615c6f3246b549"
  },
  {
    "url": "rules/no-math-log10.html",
    "revision": "9d1d95cd95f0306d1f5936ac48acc542"
  },
  {
    "url": "rules/no-math-log1p.html",
    "revision": "17e86df855cbf6e8d20643c3dbb099d7"
  },
  {
    "url": "rules/no-math-log2.html",
    "revision": "945b469fc4233359bcf6fc055eab22bf"
  },
  {
    "url": "rules/no-math-sign.html",
    "revision": "3b5a459b1e016676cc9eef6b7a1195b3"
  },
  {
    "url": "rules/no-math-sinh.html",
    "revision": "35e908f0dce0987c4c7e72126353985b"
  },
  {
    "url": "rules/no-math-tanh.html",
    "revision": "8c9e5c940721fdc48bd6ff4b26c5b1f8"
  },
  {
    "url": "rules/no-math-trunc.html",
    "revision": "6d40f82d6af942d1bcc7cee07907fe9c"
  },
  {
    "url": "rules/no-modules.html",
    "revision": "2c4cc9d396d195146a9416d8cd012044"
  },
  {
    "url": "rules/no-new-target.html",
    "revision": "bf17afc1a8d951d9cd3ae98751d04d49"
  },
  {
    "url": "rules/no-number-epsilon.html",
    "revision": "e7a2f552439bb094bb7fa845c03e8364"
  },
  {
    "url": "rules/no-number-isfinite.html",
    "revision": "8868cb8d9c4593a90befb7a612b38819"
  },
  {
    "url": "rules/no-number-isinteger.html",
    "revision": "ccdd17e95712dbc8cb23cfe2df963d40"
  },
  {
    "url": "rules/no-number-isnan.html",
    "revision": "8ad51e812915da894b73b61e5211bc05"
  },
  {
    "url": "rules/no-number-issafeinteger.html",
    "revision": "900493b4b7ea3b418cc86ab66c04fb78"
  },
  {
    "url": "rules/no-number-maxsafeinteger.html",
    "revision": "d3ad3228bf1a35fd814a42db13450d0a"
  },
  {
    "url": "rules/no-number-minsafeinteger.html",
    "revision": "5e44a0d1927e35ee3ee95209019aef9b"
  },
  {
    "url": "rules/no-number-parsefloat.html",
    "revision": "c6efb8deb9e173cffe0ad49bdadb865a"
  },
  {
    "url": "rules/no-number-parseint.html",
    "revision": "def9f963913ba0c7f5221690f817fa34"
  },
  {
    "url": "rules/no-object-assign.html",
    "revision": "f8bd182b4a136447045e3f818b7389a3"
  },
  {
    "url": "rules/no-object-entries.html",
    "revision": "2246775fbd7da5a34b80edb07796e76a"
  },
  {
    "url": "rules/no-object-getownpropertydescriptors.html",
    "revision": "39ffb966e15aa2464eda12382be5f37e"
  },
  {
    "url": "rules/no-object-getownpropertysymbols.html",
    "revision": "efd05547fc68a189de2b3b12f4cfc25c"
  },
  {
    "url": "rules/no-object-is.html",
    "revision": "a159e043a94e226ee66424944a209ce9"
  },
  {
    "url": "rules/no-object-setprototypeof.html",
    "revision": "3b31a22f9ccdcb104aa5ccfcbc217a52"
  },
  {
    "url": "rules/no-object-super-properties.html",
    "revision": "a7cdba50e0e623b70008a23db99e7ed3"
  },
  {
    "url": "rules/no-object-values.html",
    "revision": "d3d256e8cfa9f54bb729c01b93a61515"
  },
  {
    "url": "rules/no-octal-numeric-literals.html",
    "revision": "1fca5decee617788c9a882036d04e9cb"
  },
  {
    "url": "rules/no-promise.html",
    "revision": "82839e9c58b1260043e6e82de1562542"
  },
  {
    "url": "rules/no-property-shorthands.html",
    "revision": "ecccac9a70b8f6096e70ee3ff88925ca"
  },
  {
    "url": "rules/no-proxy.html",
    "revision": "6d6a63bbb75906557bafa7c865cd45c4"
  },
  {
    "url": "rules/no-reflect.html",
    "revision": "809db09345a3bdedf99ef915924950f3"
  },
  {
    "url": "rules/no-regexp-lookbehind-assertions.html",
    "revision": "4839a0a239ff5af3e5b9ab902afd7392"
  },
  {
    "url": "rules/no-regexp-named-capture-groups.html",
    "revision": "5e8bc4c5ebdf211629d276b7b7bc5eff"
  },
  {
    "url": "rules/no-regexp-s-flag.html",
    "revision": "dfbda7ae08ad77201ac85716b7c94599"
  },
  {
    "url": "rules/no-regexp-u-flag.html",
    "revision": "17fa475424815de774a979049e0baf5a"
  },
  {
    "url": "rules/no-regexp-unicode-property-escapes.html",
    "revision": "4adb139c7c14782f373135d38e1beba0"
  },
  {
    "url": "rules/no-regexp-y-flag.html",
    "revision": "6328d469afebf0e30df0cf8559fbc098"
  },
  {
    "url": "rules/no-rest-parameters.html",
    "revision": "20294fcd304980678d4a4ac922ff4712"
  },
  {
    "url": "rules/no-rest-spread-properties.html",
    "revision": "963640cc8c33c5f3c6ca1503ee6935e0"
  },
  {
    "url": "rules/no-set.html",
    "revision": "db8e23633ad52747a2f941c7e21a79cf"
  },
  {
    "url": "rules/no-shared-array-buffer.html",
    "revision": "3a4efc15af5a4177294571d6b1cc1544"
  },
  {
    "url": "rules/no-spread-elements.html",
    "revision": "83a290b8c583aea4676d2c41ef203781"
  },
  {
    "url": "rules/no-string-fromcodepoint.html",
    "revision": "b47415ef4b8d52984b9441d831745ef9"
  },
  {
    "url": "rules/no-string-raw.html",
    "revision": "7041b13ad26ffdb4a27cc08aa7f9545b"
  },
  {
    "url": "rules/no-subclassing-builtins.html",
    "revision": "741667cbb6eefc240ed03969e63f67ce"
  },
  {
    "url": "rules/no-symbol.html",
    "revision": "9778016774a7e61bdf2f59bd732aa1df"
  },
  {
    "url": "rules/no-template-literals.html",
    "revision": "ab213f36a7749aaf7b7cb9e54c5bfdee"
  },
  {
    "url": "rules/no-trailing-commas.html",
    "revision": "0faa9a5432af7b8fd54e2ec4828dd4e9"
  },
  {
    "url": "rules/no-trailing-function-commas.html",
    "revision": "0fadf99b41e30e0ff85510331caefed5"
  },
  {
    "url": "rules/no-typed-arrays.html",
    "revision": "dc0d4869a18b619831a58a8adfffc1b8"
  },
  {
    "url": "rules/no-unicode-codepoint-escapes.html",
    "revision": "f3e1c42a3105d450c7a7747ed129cedc"
  },
  {
    "url": "rules/no-weak-map.html",
    "revision": "86ff42d0dfe8cf44fe3a717d43fd7e77"
  },
  {
    "url": "rules/no-weak-set.html",
    "revision": "f922bcea7a6085bb402a749743219494"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
