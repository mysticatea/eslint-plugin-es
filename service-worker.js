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
    "revision": "eb7d010f78df04310db08c4f5a38f793"
  },
  {
    "url": "assets/css/88.styles.a2788f1f.css",
    "revision": "312edf9e8d59b0f813ec916291a06e29"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.a02d8b0e.js",
    "revision": "587369bb8245b117fc19fa76f825197f"
  },
  {
    "url": "assets/js/1.7ee0df9d.js",
    "revision": "d5184e891c2df26aeabc875ec6849a4b"
  },
  {
    "url": "assets/js/10.ca9f54dd.js",
    "revision": "364f56db9fcf9edf7b00958c98f7bea3"
  },
  {
    "url": "assets/js/11.cabeee0b.js",
    "revision": "890115cb7040635ffd82e9ab8b6fe585"
  },
  {
    "url": "assets/js/12.307176b3.js",
    "revision": "df9b8d08b942f661a86afd270cc46a03"
  },
  {
    "url": "assets/js/13.591b7311.js",
    "revision": "2657605224445897c9a9ac19f7772fe8"
  },
  {
    "url": "assets/js/14.591e1cc5.js",
    "revision": "78b927f1e3fd02fc5e5d6131d075a06c"
  },
  {
    "url": "assets/js/15.9c4b6cfa.js",
    "revision": "f6b97f1e6ebda5deff6bd5ca753ad857"
  },
  {
    "url": "assets/js/16.8d358705.js",
    "revision": "07843a08cf613321769177d15cab5c5f"
  },
  {
    "url": "assets/js/17.81091af0.js",
    "revision": "faf35504d5c2bbdd8ff929b1afeb79e5"
  },
  {
    "url": "assets/js/18.177be3bc.js",
    "revision": "c94a524c6ff76538f2f86aac561ac9d5"
  },
  {
    "url": "assets/js/19.04d5b246.js",
    "revision": "1eed0ffa0503c461ec606ad695692ee3"
  },
  {
    "url": "assets/js/2.8eef98d6.js",
    "revision": "609bfc46b216073acddb0c8998d2ebc6"
  },
  {
    "url": "assets/js/20.2a77c9e2.js",
    "revision": "6dccf4f63b1732bae7571543a1d13e3d"
  },
  {
    "url": "assets/js/21.0da45ecd.js",
    "revision": "426eeab8837515d9f6d65bda31c62b30"
  },
  {
    "url": "assets/js/22.e4dfe610.js",
    "revision": "ec50e21b1155f7bacb07502f463821f7"
  },
  {
    "url": "assets/js/23.3cad3938.js",
    "revision": "0a183a409c66baab43074c29f3f396ae"
  },
  {
    "url": "assets/js/24.51ff0fe2.js",
    "revision": "1afaa1ef9fb292189cb707749eacf9e5"
  },
  {
    "url": "assets/js/25.5176ab51.js",
    "revision": "a605dd1b8af32112c821529158e3af01"
  },
  {
    "url": "assets/js/26.534659a0.js",
    "revision": "5e022d55a71ac8c4fb684017da77599e"
  },
  {
    "url": "assets/js/27.99bb1d65.js",
    "revision": "f0c20d5b57bafa415f6319b1bc5eccd7"
  },
  {
    "url": "assets/js/28.18c2570b.js",
    "revision": "accbe395c68b691a5686dd23e091b6bf"
  },
  {
    "url": "assets/js/29.2eb6a3e7.js",
    "revision": "d908274816563effc1ca2dad455e2437"
  },
  {
    "url": "assets/js/3.a2601bc6.js",
    "revision": "0f16c283cdd10683bc91aedfad947313"
  },
  {
    "url": "assets/js/30.b4ff5187.js",
    "revision": "5be36d085dee0f1a8e7085fc20202763"
  },
  {
    "url": "assets/js/31.dcae5535.js",
    "revision": "858ccebc25982cd685ea8ba2b48109b2"
  },
  {
    "url": "assets/js/32.983367aa.js",
    "revision": "e0991c1a87cbb134dc6530e3e63849ce"
  },
  {
    "url": "assets/js/33.2f41420d.js",
    "revision": "986def6872f9ad76e48842740517f961"
  },
  {
    "url": "assets/js/34.8fd88f40.js",
    "revision": "2882a5f6ff3154df4839c9517f2a5705"
  },
  {
    "url": "assets/js/35.28c8b3b6.js",
    "revision": "83d0a5b565f6a7e3ec09e0f97cd806ab"
  },
  {
    "url": "assets/js/36.c47e3f09.js",
    "revision": "60943de122f21f94e2f0dfa86ecba697"
  },
  {
    "url": "assets/js/37.919e855c.js",
    "revision": "ca5609871ffee659e282a2ef0e30174b"
  },
  {
    "url": "assets/js/38.35ab54b6.js",
    "revision": "64ec5281fd086c536ff6b4dec43db9c4"
  },
  {
    "url": "assets/js/39.21d865d0.js",
    "revision": "c8764bfd555b8c19f34dbe69a348b127"
  },
  {
    "url": "assets/js/4.1121738a.js",
    "revision": "8c624af90d76c90d8c2488637d10fab7"
  },
  {
    "url": "assets/js/40.eb281fc5.js",
    "revision": "136eead44c60a1583cc1cc955bbe39ee"
  },
  {
    "url": "assets/js/41.39d62341.js",
    "revision": "8d49d5416958a2ca8378acf449d1acb1"
  },
  {
    "url": "assets/js/42.9a393e2e.js",
    "revision": "f9527a97896374c34f6a17a72f1e0657"
  },
  {
    "url": "assets/js/43.03d3cc52.js",
    "revision": "ca8985958ff162864d13f4bebcd42c10"
  },
  {
    "url": "assets/js/44.d848e0ae.js",
    "revision": "2dff535a936cc9ad76ce03e23f716277"
  },
  {
    "url": "assets/js/45.630b3aca.js",
    "revision": "0b6ff778661a9f35431599ca52e5dd73"
  },
  {
    "url": "assets/js/46.d6bc6356.js",
    "revision": "afc2308036b7511cde6cd149d979aecd"
  },
  {
    "url": "assets/js/47.bdc84ab3.js",
    "revision": "5a8695ca0e2bf261425ec4146cbf02f7"
  },
  {
    "url": "assets/js/48.9f566a12.js",
    "revision": "f69d4cd1b62347392091d01ebe776f5d"
  },
  {
    "url": "assets/js/49.56891750.js",
    "revision": "fa4baf3e19efb360ef939c86cee7afab"
  },
  {
    "url": "assets/js/5.3bd27d8e.js",
    "revision": "1cf97ca8d16a034f9782858da4688263"
  },
  {
    "url": "assets/js/50.d8cd395a.js",
    "revision": "4570ba0e1af4f955b22d6d0b20d0ea41"
  },
  {
    "url": "assets/js/51.08a07ae5.js",
    "revision": "812af7aa3010e68584130561ea7fe6f3"
  },
  {
    "url": "assets/js/52.8373cf50.js",
    "revision": "d7c34c17e9f3edde126c3dcf5d5f7f49"
  },
  {
    "url": "assets/js/53.b729e5be.js",
    "revision": "3f17f5c4fb4003ac6dcf43aadc652135"
  },
  {
    "url": "assets/js/54.c7d37dae.js",
    "revision": "6284d7fafe799089c3b641c6a6004fac"
  },
  {
    "url": "assets/js/55.24e4c93a.js",
    "revision": "2afbcd88bf2082f6ed990193dc8a14e7"
  },
  {
    "url": "assets/js/56.5b4cd0a6.js",
    "revision": "bdb5a5eea4ca585c6398ac1d4a95461c"
  },
  {
    "url": "assets/js/57.9f684bab.js",
    "revision": "1e7d153ba6cab32778079ff94b3b98bd"
  },
  {
    "url": "assets/js/58.8f8343e4.js",
    "revision": "7b83ee5a427a072ba1283eecaaddabd4"
  },
  {
    "url": "assets/js/59.4e3614ad.js",
    "revision": "371b362c40175fd31974f0252983a95e"
  },
  {
    "url": "assets/js/6.8806dbe9.js",
    "revision": "1cfa1ee246b9eef8e7bf0b022a8c2fc0"
  },
  {
    "url": "assets/js/60.79b3c5a6.js",
    "revision": "4fc89fdb1e4e89a40c4187d47eda0e07"
  },
  {
    "url": "assets/js/61.0b985172.js",
    "revision": "ba12d6dc52d71f84f1c8e048d4be16b1"
  },
  {
    "url": "assets/js/62.85f0e33c.js",
    "revision": "6204f8f529639caa4a11b55102a260d0"
  },
  {
    "url": "assets/js/63.6bd38de1.js",
    "revision": "8ba5162f3dc768ab2e5eb541e608acbc"
  },
  {
    "url": "assets/js/64.989690ee.js",
    "revision": "7abd0b3a873b34b6a9a0f206a38bb22b"
  },
  {
    "url": "assets/js/65.a66bf283.js",
    "revision": "a862e6183ba0c225b85a68dbe2cea9a6"
  },
  {
    "url": "assets/js/66.9bd42bc4.js",
    "revision": "2c9595452ba084441b548801daf9164a"
  },
  {
    "url": "assets/js/67.cdddc206.js",
    "revision": "8bc12c4e50ea549f986532c6d8899548"
  },
  {
    "url": "assets/js/68.be6b4bce.js",
    "revision": "cec4a1c0a072b0790565dec1afa54723"
  },
  {
    "url": "assets/js/69.c7be3efc.js",
    "revision": "ad14421b8bd0c0f846d2a4cca777ed69"
  },
  {
    "url": "assets/js/7.ac9a2804.js",
    "revision": "347378ade91d68e18284af93fcf8d357"
  },
  {
    "url": "assets/js/70.1bbe7142.js",
    "revision": "fc784b130e523b9cb4be7deef1d7703a"
  },
  {
    "url": "assets/js/71.bdee7bbe.js",
    "revision": "5ac88a4eef18df7a316bbacc09e143c0"
  },
  {
    "url": "assets/js/72.da6af196.js",
    "revision": "ce7d10a5006f5df247ef1d5d2484c07b"
  },
  {
    "url": "assets/js/73.ea51194c.js",
    "revision": "53f16e6d61c70db882b6c8277a060320"
  },
  {
    "url": "assets/js/74.3507b9c8.js",
    "revision": "5feaff7ccdafd456c95a9e877aa1b5a3"
  },
  {
    "url": "assets/js/75.3adac766.js",
    "revision": "436be3524fbcb6f6715ff0bf22f7520d"
  },
  {
    "url": "assets/js/76.5c5b9d47.js",
    "revision": "c44c645bca0ecc7569d364b79c1fbba8"
  },
  {
    "url": "assets/js/77.a7217ffc.js",
    "revision": "c486ed4903fcea3325886da386c6fe24"
  },
  {
    "url": "assets/js/78.bdda1312.js",
    "revision": "c1dffc173c965382b50500dda114cab7"
  },
  {
    "url": "assets/js/79.dacdf845.js",
    "revision": "80f5377a19f60f467f56a3ee5527ec3d"
  },
  {
    "url": "assets/js/8.be2ad4f2.js",
    "revision": "abc05ec8d8db18b7b05a63bcc171b09b"
  },
  {
    "url": "assets/js/80.08f7f5a0.js",
    "revision": "a3ec218ee795d62fcb078f0f778c100b"
  },
  {
    "url": "assets/js/81.293eeb9a.js",
    "revision": "00e07de105ca01556b55c5caca4dc3af"
  },
  {
    "url": "assets/js/82.72b954db.js",
    "revision": "ddbcde48bd0735218360fcb19148906e"
  },
  {
    "url": "assets/js/83.96d20eff.js",
    "revision": "9b815e60a2c2e0611682a90182dd8db3"
  },
  {
    "url": "assets/js/84.1aa22721.js",
    "revision": "8460dc556046463e2e5921fe3c5e2b79"
  },
  {
    "url": "assets/js/85.ac39cdf5.js",
    "revision": "3de9bfea0c3c6755c1c5be74c3fddffa"
  },
  {
    "url": "assets/js/86.63df1666.js",
    "revision": "727432973deed36e6292ae7106e238c9"
  },
  {
    "url": "assets/js/87.185e00ad.js",
    "revision": "9a50b3ec8eb1d6679c2a44d34ef383ec"
  },
  {
    "url": "assets/js/9.d03c2591.js",
    "revision": "cc3039ace7c76ab10e8fd9e7c48bf5d6"
  },
  {
    "url": "assets/js/app.5926d0eb.js",
    "revision": "5ab5e9a41801349eef7f34842af41d5c"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "e97c5b7c172620fc452be5c56344840b"
  },
  {
    "url": "index.html",
    "revision": "ae1dc499832a953b672ced8d2228b4c3"
  },
  {
    "url": "rules/index.html",
    "revision": "525d3af24ae59966cf5e6848c50037e9"
  },
  {
    "url": "rules/no-accessor-properties.html",
    "revision": "b2d567a41a44d3bcb990991f34a5e192"
  },
  {
    "url": "rules/no-array-from.html",
    "revision": "9dbe741c7a033101d0410b085ad81d83"
  },
  {
    "url": "rules/no-array-of.html",
    "revision": "9a181e1edc3a3c932ae9f556a7582684"
  },
  {
    "url": "rules/no-arrow-functions.html",
    "revision": "9a3bf4c2fb7cc0b241eeaf3d8548295c"
  },
  {
    "url": "rules/no-async-functions.html",
    "revision": "fcbe0d4814735371da42234b0ae5562f"
  },
  {
    "url": "rules/no-async-iteration.html",
    "revision": "49cb95b5544879d7e87f3005f34e8c91"
  },
  {
    "url": "rules/no-atomics.html",
    "revision": "45fef27a09c8ac783a7366d7bcfc868c"
  },
  {
    "url": "rules/no-binary-numeric-literals.html",
    "revision": "e733f9fea1d7daff2020fbb4cde10267"
  },
  {
    "url": "rules/no-block-scoped-functions.html",
    "revision": "41a54e535d24b911bb1c2fb1d93c9227"
  },
  {
    "url": "rules/no-block-scoped-variables.html",
    "revision": "089edee0a0137ddaeb26226e2274bd0d"
  },
  {
    "url": "rules/no-classes.html",
    "revision": "dde1de010952457c1603b7fc436f359a"
  },
  {
    "url": "rules/no-computed-properties.html",
    "revision": "2375835ae6547e914b361fa2768ddef6"
  },
  {
    "url": "rules/no-default-parameters.html",
    "revision": "5547e8ad3ecfd15c8d2985980e426344"
  },
  {
    "url": "rules/no-destructuring.html",
    "revision": "042fde5b518c143e4f0d28bc5efcdfa5"
  },
  {
    "url": "rules/no-exponential-operators.html",
    "revision": "222d6f2b2226a36c1e152d4547033c4d"
  },
  {
    "url": "rules/no-for-of-loops.html",
    "revision": "88436f1791d1e62ca335dc69291edd16"
  },
  {
    "url": "rules/no-generators.html",
    "revision": "e08e89b529f7dbf2f64e3a71f513a178"
  },
  {
    "url": "rules/no-json-superset.html",
    "revision": "da96a7bf6921cb5861a53c27a8dd832e"
  },
  {
    "url": "rules/no-keyword-properties.html",
    "revision": "0622071db9b74db381214457119c43f7"
  },
  {
    "url": "rules/no-malformed-template-literals.html",
    "revision": "6c484ded7995a94649e04feae2b1baa4"
  },
  {
    "url": "rules/no-map.html",
    "revision": "68bcfbd320083f19e9139eb3379de19f"
  },
  {
    "url": "rules/no-math-acosh.html",
    "revision": "f3a90b8179f99858f73d84ae23a29103"
  },
  {
    "url": "rules/no-math-asinh.html",
    "revision": "a35c8e2ff29b82a6eaa699a534a3809b"
  },
  {
    "url": "rules/no-math-atanh.html",
    "revision": "5ab81dd06fb0bf20241c2927b2ffa73a"
  },
  {
    "url": "rules/no-math-cbrt.html",
    "revision": "72e5736ace0f963b0248df8fcc5dfb4b"
  },
  {
    "url": "rules/no-math-clz32.html",
    "revision": "4b78f32c6db03640485649f12fd15770"
  },
  {
    "url": "rules/no-math-cosh.html",
    "revision": "8c7ae9880e7ec878aa6278025869c50b"
  },
  {
    "url": "rules/no-math-expm1.html",
    "revision": "ddf6a0d3e2481854f3d30b4b80ce0279"
  },
  {
    "url": "rules/no-math-fround.html",
    "revision": "bf9b921771835192223fe8efb153ae46"
  },
  {
    "url": "rules/no-math-hypot.html",
    "revision": "202a467e0bb991530ef73689074101a7"
  },
  {
    "url": "rules/no-math-imul.html",
    "revision": "e91a9399016d05970ae37183d6e10933"
  },
  {
    "url": "rules/no-math-log10.html",
    "revision": "df8f1c7b5bfd8ccdd653fed7c0c0aab0"
  },
  {
    "url": "rules/no-math-log1p.html",
    "revision": "24ce5495e6a6250ad149c288b87a39c8"
  },
  {
    "url": "rules/no-math-log2.html",
    "revision": "eec313932e2f82731ee135bbd8758989"
  },
  {
    "url": "rules/no-math-sign.html",
    "revision": "5e736e74c2162ec7650259bfe093931d"
  },
  {
    "url": "rules/no-math-sinh.html",
    "revision": "2f3eb5f52cdccb372fda53d4ecaf6463"
  },
  {
    "url": "rules/no-math-tanh.html",
    "revision": "01b8383e709cb8aff484592d72285fea"
  },
  {
    "url": "rules/no-math-trunc.html",
    "revision": "c352f0752199e9476a3961b093e7f4d7"
  },
  {
    "url": "rules/no-modules.html",
    "revision": "0c5e4e148914dcd1b099297047d79eff"
  },
  {
    "url": "rules/no-new-target.html",
    "revision": "0c903064365d65b054dc2bc49a97b33f"
  },
  {
    "url": "rules/no-number-epsilon.html",
    "revision": "d96a53e6455fdff5d3bd9f88679716b1"
  },
  {
    "url": "rules/no-number-isfinite.html",
    "revision": "e0d89bdacf6318aa76f37f46d2071fc7"
  },
  {
    "url": "rules/no-number-isinteger.html",
    "revision": "9f2fe47f8760a8eb81124f9ec12df214"
  },
  {
    "url": "rules/no-number-isnan.html",
    "revision": "99cbab818021fe67256ca7c1d1680046"
  },
  {
    "url": "rules/no-number-issafeinteger.html",
    "revision": "a4147642d38a8058015132ee11668fe4"
  },
  {
    "url": "rules/no-number-maxsafeinteger.html",
    "revision": "0fa58df92e2d79ad28cfc93024207079"
  },
  {
    "url": "rules/no-number-minsafeinteger.html",
    "revision": "6881f0cf3d2e63efb7fdd26bd9ba1ec3"
  },
  {
    "url": "rules/no-number-parsefloat.html",
    "revision": "a7e9381121fa19db0ea2ff907f7b4c15"
  },
  {
    "url": "rules/no-number-parseint.html",
    "revision": "cb0b44e82784910c72c4fd6620709240"
  },
  {
    "url": "rules/no-object-assign.html",
    "revision": "894116406d25e1c6799a43bd3c6a5c1f"
  },
  {
    "url": "rules/no-object-entries.html",
    "revision": "376de38044cce3275ab50f60dc1c5438"
  },
  {
    "url": "rules/no-object-getownpropertydescriptors.html",
    "revision": "294e81bf452b38e7b8374bce8adf55c5"
  },
  {
    "url": "rules/no-object-getownpropertysymbols.html",
    "revision": "6ac3c369ea95ddf86b09dc0b4eb1bf85"
  },
  {
    "url": "rules/no-object-is.html",
    "revision": "d1a3288ee7011cf1ac99b51a21060f0b"
  },
  {
    "url": "rules/no-object-setprototypeof.html",
    "revision": "28d777e9d060946986b39c98c87be1d1"
  },
  {
    "url": "rules/no-object-super-properties.html",
    "revision": "0028e9bd959436301b828159081561b3"
  },
  {
    "url": "rules/no-object-values.html",
    "revision": "5fbd5fbcd9fc4e34fc928042f06003b4"
  },
  {
    "url": "rules/no-octal-numeric-literals.html",
    "revision": "36253bc3b25db1af1eb19b5feec8637a"
  },
  {
    "url": "rules/no-optional-catch-binding.html",
    "revision": "b779d3f13c1c30653a8eeb418ff02b6d"
  },
  {
    "url": "rules/no-promise.html",
    "revision": "f915bcf8d572a8f953dc284c6fc7f933"
  },
  {
    "url": "rules/no-property-shorthands.html",
    "revision": "73e14983b36da1b198fa9eb7525a8c91"
  },
  {
    "url": "rules/no-proxy.html",
    "revision": "294d72182c7fab15616672c0d70f55d1"
  },
  {
    "url": "rules/no-reflect.html",
    "revision": "288c03c0e6c30106a4f00b5c8f5b8d7e"
  },
  {
    "url": "rules/no-regexp-lookbehind-assertions.html",
    "revision": "d3ab44e110f2c5e11fe87db650009fa9"
  },
  {
    "url": "rules/no-regexp-named-capture-groups.html",
    "revision": "4433fcf1111092ad0b3f7668fd2b7e7e"
  },
  {
    "url": "rules/no-regexp-s-flag.html",
    "revision": "9a4f45f79a32c191339a8e805c80f8f2"
  },
  {
    "url": "rules/no-regexp-u-flag.html",
    "revision": "7b79b310a04730a9dce92d9f3dca94ff"
  },
  {
    "url": "rules/no-regexp-unicode-property-escapes.html",
    "revision": "d3f16ab6616af19074d2c35170379071"
  },
  {
    "url": "rules/no-regexp-y-flag.html",
    "revision": "9009b4ae8c04606ae1c2d455b82b73d4"
  },
  {
    "url": "rules/no-rest-parameters.html",
    "revision": "7f04387e375e00b2174c24f074a63c84"
  },
  {
    "url": "rules/no-rest-spread-properties.html",
    "revision": "298cf1f485ada68929ef9c40b3c3c3ea"
  },
  {
    "url": "rules/no-set.html",
    "revision": "1a86d48e653a465c5e773909520b9610"
  },
  {
    "url": "rules/no-shared-array-buffer.html",
    "revision": "fd76d56d1d32d5142d78bc0792e50cc6"
  },
  {
    "url": "rules/no-spread-elements.html",
    "revision": "565f14b2d700fc9bfd123e84e0617906"
  },
  {
    "url": "rules/no-string-fromcodepoint.html",
    "revision": "4e2dd621f8cc933e2aea4a994981f7d6"
  },
  {
    "url": "rules/no-string-raw.html",
    "revision": "06f5a6891213569b9f0a69449122aa60"
  },
  {
    "url": "rules/no-subclassing-builtins.html",
    "revision": "d89ff9ce53c5c6597fbd6d5807d7fdbf"
  },
  {
    "url": "rules/no-symbol.html",
    "revision": "62f1eef59c512e756c1aa40382733ae3"
  },
  {
    "url": "rules/no-template-literals.html",
    "revision": "a62ac3eea7d245e3c6bb484a94060b57"
  },
  {
    "url": "rules/no-trailing-commas.html",
    "revision": "84dd254147e4e174967be825e9c33779"
  },
  {
    "url": "rules/no-trailing-function-commas.html",
    "revision": "01e497f071344345975a1f47e4070529"
  },
  {
    "url": "rules/no-typed-arrays.html",
    "revision": "508b01dc37253dc00dbc07b35b2f1ca0"
  },
  {
    "url": "rules/no-unicode-codepoint-escapes.html",
    "revision": "8abd8ab16d0e6c9fbc311b625e4b1fd0"
  },
  {
    "url": "rules/no-weak-map.html",
    "revision": "62ddb26ff75c28d6dab2f0ac0693b616"
  },
  {
    "url": "rules/no-weak-set.html",
    "revision": "f0b43fc47f262f25bf2388267dc96ffb"
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
