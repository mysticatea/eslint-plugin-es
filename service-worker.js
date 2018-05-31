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
    "revision": "d1ab36e5413157645b87cb68b9f2ceec"
  },
  {
    "url": "assets/css/87.styles.86cd0440.css",
    "revision": "312edf9e8d59b0f813ec916291a06e29"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.31ad8c1e.js",
    "revision": "70238a7768e13874ae73d03b0b0cf46b"
  },
  {
    "url": "assets/js/1.b18228da.js",
    "revision": "7a95b1e2e451529820c3f9ba42344298"
  },
  {
    "url": "assets/js/10.6fbf9fcc.js",
    "revision": "9587b4358c05388bde54feb8a4299ad6"
  },
  {
    "url": "assets/js/11.706cc193.js",
    "revision": "dd39ae8b1cb91981a490367eae2f4494"
  },
  {
    "url": "assets/js/12.d9174bab.js",
    "revision": "48b9fbaf4142263205ba6747eda76a9d"
  },
  {
    "url": "assets/js/13.608c3adc.js",
    "revision": "74fd1986059ac2fb82be9481df218081"
  },
  {
    "url": "assets/js/14.9a253b68.js",
    "revision": "814207d631ef6fa496a9d8fd45f99a8a"
  },
  {
    "url": "assets/js/15.0743ebab.js",
    "revision": "93651c54f6351a9a927f0a14f2b7ad96"
  },
  {
    "url": "assets/js/16.942d8830.js",
    "revision": "202e46c37de208d64b23df1d3707b063"
  },
  {
    "url": "assets/js/17.b543c111.js",
    "revision": "d8c5444b0dde9b5522969bf94626db2d"
  },
  {
    "url": "assets/js/18.336d53e9.js",
    "revision": "8d3a3c1b3d1f1301ad8e92b860f8a90d"
  },
  {
    "url": "assets/js/19.eaa54067.js",
    "revision": "496d13e3f43a47b8d22adae259e71ec5"
  },
  {
    "url": "assets/js/2.08450764.js",
    "revision": "28363ed0ae34e090515d78cd7ed3c022"
  },
  {
    "url": "assets/js/20.3a3f378f.js",
    "revision": "a6af57b7b67c8457a2af260399748e91"
  },
  {
    "url": "assets/js/21.6f780add.js",
    "revision": "457059bb0e62bd93b198f253975c68b2"
  },
  {
    "url": "assets/js/22.69383ae2.js",
    "revision": "6d21287e48e53a669e5cda1d2e581187"
  },
  {
    "url": "assets/js/23.a7580738.js",
    "revision": "dc655908c2b7dff9046a70c50bf0e0d6"
  },
  {
    "url": "assets/js/24.bee39abb.js",
    "revision": "2169e2b9bace7f1a6598c4dd64afa4b2"
  },
  {
    "url": "assets/js/25.fd06e36f.js",
    "revision": "f778d11245d55e4bbb5d5263f4f89f29"
  },
  {
    "url": "assets/js/26.68611cf1.js",
    "revision": "3a3969f3c33dd86ca1773bc3fe0d5579"
  },
  {
    "url": "assets/js/27.ba7bc8b6.js",
    "revision": "40ef337b28bcd21cecf24519f8ce214a"
  },
  {
    "url": "assets/js/28.478dc03a.js",
    "revision": "7d82de20e9b1845675223e1877d23ddd"
  },
  {
    "url": "assets/js/29.de24d1b4.js",
    "revision": "af283e41054e302eac5103c2cb8787cc"
  },
  {
    "url": "assets/js/3.fa868822.js",
    "revision": "7143fc7f2a1f52b1ba32bb2a0d710805"
  },
  {
    "url": "assets/js/30.0f7ae841.js",
    "revision": "5cb4c981fab9439044e844d3474c7b4e"
  },
  {
    "url": "assets/js/31.3bb32b14.js",
    "revision": "0c7d2b7007825c4f537cfe828b0ac688"
  },
  {
    "url": "assets/js/32.b481a0b9.js",
    "revision": "84a41266940950a40a1f20c1ec22141a"
  },
  {
    "url": "assets/js/33.b8c92c19.js",
    "revision": "2995464c4c4321aa7b20489ef55fbab6"
  },
  {
    "url": "assets/js/34.88f5a2db.js",
    "revision": "0e3578d6a9de84aadaff8ee530fa7413"
  },
  {
    "url": "assets/js/35.c3057287.js",
    "revision": "43309c0e54b9a0adb3833f8136cf2f21"
  },
  {
    "url": "assets/js/36.3824e97f.js",
    "revision": "1c161489fdd45d2bd79cda9f1acfab3f"
  },
  {
    "url": "assets/js/37.8d693a36.js",
    "revision": "262322a5246195eb6b1597c629f3066d"
  },
  {
    "url": "assets/js/38.cba3279d.js",
    "revision": "a892201a6411cae26814e29e8db7aa05"
  },
  {
    "url": "assets/js/39.efc540ca.js",
    "revision": "bc406ba96e68c5c432c61aaae1545e91"
  },
  {
    "url": "assets/js/4.842d6ef7.js",
    "revision": "32f71a3304c1d2f3babf0ae6254e29ce"
  },
  {
    "url": "assets/js/40.651c3e60.js",
    "revision": "02c7deb50f34779c0c35a7a15398e89b"
  },
  {
    "url": "assets/js/41.8d9c65fd.js",
    "revision": "a3cf3077b272544fab9fba86688d16ef"
  },
  {
    "url": "assets/js/42.68f54c3c.js",
    "revision": "2b42bfacadd80b3398ba93395ef72703"
  },
  {
    "url": "assets/js/43.236afe0b.js",
    "revision": "33184ecf424f30e9596a04f40b6ac9e3"
  },
  {
    "url": "assets/js/44.45d359ed.js",
    "revision": "a20adb041f49cd5b06ee33e3f4f23cde"
  },
  {
    "url": "assets/js/45.12c31d60.js",
    "revision": "fb121fcb8853541e342aefcb52196cc8"
  },
  {
    "url": "assets/js/46.4b37c4b0.js",
    "revision": "319759f3635ecf34089668b8ea9321ef"
  },
  {
    "url": "assets/js/47.67a2ae55.js",
    "revision": "5f313e7d5954f8338329f6bb4d4a4f30"
  },
  {
    "url": "assets/js/48.25733cda.js",
    "revision": "c5f10fc58923214b7328e1f637fed03e"
  },
  {
    "url": "assets/js/49.c79527a0.js",
    "revision": "915ca21a3dd52a5f870b4bfc6e0a8d23"
  },
  {
    "url": "assets/js/5.b78a5bc9.js",
    "revision": "8e2353e8f7dfb015807f11e7e16b8963"
  },
  {
    "url": "assets/js/50.94fede9a.js",
    "revision": "a339472a8b9b662b86bde5f70928708c"
  },
  {
    "url": "assets/js/51.4c8111e8.js",
    "revision": "0f339c57e6e1b160be85cfbcf644ce8e"
  },
  {
    "url": "assets/js/52.c9a79d68.js",
    "revision": "b58f2476dc823b57fded310a47b7e9a6"
  },
  {
    "url": "assets/js/53.41792420.js",
    "revision": "4e8f58d2b4c1e0684f08ecb9714a8804"
  },
  {
    "url": "assets/js/54.1f2f82de.js",
    "revision": "cc834c6eb76a447392716360b5ae859a"
  },
  {
    "url": "assets/js/55.b8dfa8ae.js",
    "revision": "00655b7719af25f5fb4f170983911e21"
  },
  {
    "url": "assets/js/56.5f8729dc.js",
    "revision": "fea9f3a4dc752335e23533dab187437d"
  },
  {
    "url": "assets/js/57.7748ece8.js",
    "revision": "afb7a35232fc642720f9936ac4862ae7"
  },
  {
    "url": "assets/js/58.d756c033.js",
    "revision": "d9c19cf81c60eb3f4223e5d635bba343"
  },
  {
    "url": "assets/js/59.559c14ed.js",
    "revision": "cd5588bd0c885f3da843764e5a73d171"
  },
  {
    "url": "assets/js/6.cf2b33f3.js",
    "revision": "8bfa662166217847913bd632d8719bd3"
  },
  {
    "url": "assets/js/60.9d659b3e.js",
    "revision": "2dc64900a36a5d1e996a28eb896e9bca"
  },
  {
    "url": "assets/js/61.56e98bbd.js",
    "revision": "3eb21836449dd68e8d45fb7d6382c42c"
  },
  {
    "url": "assets/js/62.93989fd5.js",
    "revision": "b2c12f9b958f4f6f1ba9ee2469bf4be6"
  },
  {
    "url": "assets/js/63.03746b7c.js",
    "revision": "06bc1fcadbccb7bebc60d6fda528b046"
  },
  {
    "url": "assets/js/64.8a484882.js",
    "revision": "a34b1129b1d3f62780fb8fcff25388cf"
  },
  {
    "url": "assets/js/65.d7ab8771.js",
    "revision": "a862e6183ba0c225b85a68dbe2cea9a6"
  },
  {
    "url": "assets/js/66.85a6998b.js",
    "revision": "c9af3e16681a2de9e0380270df83f3f3"
  },
  {
    "url": "assets/js/67.5e9a092c.js",
    "revision": "ade2010018704a7747090a6168b6c5f8"
  },
  {
    "url": "assets/js/68.68456a1f.js",
    "revision": "e7cedc48de158a0e5433ad7f4c51a328"
  },
  {
    "url": "assets/js/69.77865878.js",
    "revision": "578fdc1057db08524e214147cbb70c6b"
  },
  {
    "url": "assets/js/7.d36355fa.js",
    "revision": "c1993bf1d7bfc4112d8cd2bbdca1550c"
  },
  {
    "url": "assets/js/70.79f185ee.js",
    "revision": "1af75de9da282de4bf35595baf500f9b"
  },
  {
    "url": "assets/js/71.cec2e73d.js",
    "revision": "d2882baa8a627e237ddd08c059a7ff66"
  },
  {
    "url": "assets/js/72.e6ef7b69.js",
    "revision": "72a39c3a8d957b5e8113ef9a9e1f3345"
  },
  {
    "url": "assets/js/73.2d92ec33.js",
    "revision": "6ef2a22ee69ebf7a578ad063cedf454f"
  },
  {
    "url": "assets/js/74.a79cabdd.js",
    "revision": "c45667bac538898985a844ebf88dd1f2"
  },
  {
    "url": "assets/js/75.55c29706.js",
    "revision": "aec6f35f1d9248f6e279435fb81c3e4b"
  },
  {
    "url": "assets/js/76.155fbdef.js",
    "revision": "c446040a9030ae1390bc4dbe0278cad6"
  },
  {
    "url": "assets/js/77.3854717b.js",
    "revision": "f136cae9aaab8daaa484a7e716439b79"
  },
  {
    "url": "assets/js/78.a85754a2.js",
    "revision": "63624b950c3fe8dd2d071023fcf5d9a5"
  },
  {
    "url": "assets/js/79.fb22beff.js",
    "revision": "a660ea0ca4492d256d1977b27a6672a0"
  },
  {
    "url": "assets/js/8.02b286eb.js",
    "revision": "0af9220b7b0a329f0b0f00f4df792ce9"
  },
  {
    "url": "assets/js/80.4aab1d93.js",
    "revision": "9b7ce842ec99c86a71ada4d2f3fdae5a"
  },
  {
    "url": "assets/js/81.c956da4c.js",
    "revision": "91eb5d9663c877f132b832363c7761de"
  },
  {
    "url": "assets/js/82.13044de4.js",
    "revision": "56d9f4b011da0705281f3e376f31f42c"
  },
  {
    "url": "assets/js/83.ba9fded8.js",
    "revision": "d52a3bd0d9df6e6700f05f7b125902d2"
  },
  {
    "url": "assets/js/84.a07d38fd.js",
    "revision": "352abe335e7a04f95a883bde29699abd"
  },
  {
    "url": "assets/js/85.2fdcab0a.js",
    "revision": "89d969ceb87301088b267eae2914196b"
  },
  {
    "url": "assets/js/86.6272da60.js",
    "revision": "a883201f9c9bf417fe4f921ae90adc80"
  },
  {
    "url": "assets/js/9.1bb788a8.js",
    "revision": "4a6775ecfa9c05004a71b882c1b54851"
  },
  {
    "url": "assets/js/app.a1807bdc.js",
    "revision": "4b04be64fca480097743c46d213a7153"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "586e15e51e511ffc1314dbee5d949b04"
  },
  {
    "url": "index.html",
    "revision": "449aac90e9d8bcefc6cc8195c53dab9d"
  },
  {
    "url": "rules/index.html",
    "revision": "9d1a092d74acd04fbe40fd5e153d9bae"
  },
  {
    "url": "rules/no-accessor-properties.html",
    "revision": "79619bb208e2001847237abc64e9d331"
  },
  {
    "url": "rules/no-array-from.html",
    "revision": "fb4bbe673edd50751ef46680f94da218"
  },
  {
    "url": "rules/no-array-of.html",
    "revision": "b6ac5318863c73aea2697ffb50e25500"
  },
  {
    "url": "rules/no-arrow-functions.html",
    "revision": "bd46b4f29663fa2ae060f9f4fe5c35ea"
  },
  {
    "url": "rules/no-async-functions.html",
    "revision": "662a8be1af77a2e35c7306c9ddc20dfb"
  },
  {
    "url": "rules/no-async-iteration.html",
    "revision": "95fb8fd393e3c12e3a8bb033a39ab49f"
  },
  {
    "url": "rules/no-atomics.html",
    "revision": "3fb7674d9ddd16e72d4f03885df78076"
  },
  {
    "url": "rules/no-binary-numeric-literals.html",
    "revision": "9ee555145b10005295ad6671a4313608"
  },
  {
    "url": "rules/no-block-scoped-functions.html",
    "revision": "5241d2accaa6621471025051dcf54e50"
  },
  {
    "url": "rules/no-block-scoped-variables.html",
    "revision": "d1c6700467cc10cc54bed261bf8ad8b1"
  },
  {
    "url": "rules/no-classes.html",
    "revision": "524b791d29f268221bc3fa4cc87dc61b"
  },
  {
    "url": "rules/no-computed-properties.html",
    "revision": "2084114f27ffe2b5de6899fe0b0ac5c9"
  },
  {
    "url": "rules/no-default-parameters.html",
    "revision": "aa9f31ac3c74742b86225ffb7646f62b"
  },
  {
    "url": "rules/no-destructuring.html",
    "revision": "5ee8b06b3b44f1d0605620f1c59409d6"
  },
  {
    "url": "rules/no-exponential-operators.html",
    "revision": "e32b887c3e082a048542d81bda189a5b"
  },
  {
    "url": "rules/no-for-of-loops.html",
    "revision": "27f61ce76d432cd5d0333d4c381e5b50"
  },
  {
    "url": "rules/no-generators.html",
    "revision": "cb578758fc03a60a4adb3b5135fcd269"
  },
  {
    "url": "rules/no-keyword-properties.html",
    "revision": "0a57459371994a27c1e68a7f5f6e4b65"
  },
  {
    "url": "rules/no-malformed-template-literals.html",
    "revision": "4b74195064f4101e8fb85ad5ef8c248d"
  },
  {
    "url": "rules/no-map.html",
    "revision": "86b88c6ddbe629a6ccda4efa9dcc3624"
  },
  {
    "url": "rules/no-math-acosh.html",
    "revision": "6bd2718caafff17d9fbd8f313d7a2f18"
  },
  {
    "url": "rules/no-math-asinh.html",
    "revision": "e27187b354d9cb46be7c45367e829193"
  },
  {
    "url": "rules/no-math-atanh.html",
    "revision": "7719e39bc420106ae215fe6dfac92587"
  },
  {
    "url": "rules/no-math-cbrt.html",
    "revision": "13199e7ef26f7d2587531569f9cf29e2"
  },
  {
    "url": "rules/no-math-clz32.html",
    "revision": "fb68dd8fb0954ad5eb15ceb0d77ca2b5"
  },
  {
    "url": "rules/no-math-cosh.html",
    "revision": "44cb9890585bd11c79203b0671d1c9cc"
  },
  {
    "url": "rules/no-math-expm1.html",
    "revision": "1b448a63b7ced23824620184d57acae5"
  },
  {
    "url": "rules/no-math-fround.html",
    "revision": "10101bdd66c0ab23b725ca0c87feb5eb"
  },
  {
    "url": "rules/no-math-hypot.html",
    "revision": "6bf77f469b7867b68508c5038655ab70"
  },
  {
    "url": "rules/no-math-imul.html",
    "revision": "2b67df29b6b59d4094f8a08233cfe664"
  },
  {
    "url": "rules/no-math-log10.html",
    "revision": "bbcd671c60cd39dd89b0a22e90933691"
  },
  {
    "url": "rules/no-math-log1p.html",
    "revision": "64e5f0bc36992466f5a3952e33844a3c"
  },
  {
    "url": "rules/no-math-log2.html",
    "revision": "4fe3b1c1a32ca20dbdbadc8653b54ef3"
  },
  {
    "url": "rules/no-math-sign.html",
    "revision": "3ac6f8603385fcd5f3312598290e17e0"
  },
  {
    "url": "rules/no-math-sinh.html",
    "revision": "9ce1655671c99c9c3f18aaba4c77e3db"
  },
  {
    "url": "rules/no-math-tanh.html",
    "revision": "4f94d5627f5763a50f91373639149e3a"
  },
  {
    "url": "rules/no-math-trunc.html",
    "revision": "1a0802532434073562e6c386866d0313"
  },
  {
    "url": "rules/no-modules.html",
    "revision": "d85ad562314c597006eea677ffea107e"
  },
  {
    "url": "rules/no-new-target.html",
    "revision": "85433dbae7a2f5db13e581b88ab5706a"
  },
  {
    "url": "rules/no-number-epsilon.html",
    "revision": "e67348464aceebf59336e01194872584"
  },
  {
    "url": "rules/no-number-isfinite.html",
    "revision": "b4328a41502ac10b9a1d4a0a4d781c84"
  },
  {
    "url": "rules/no-number-isinteger.html",
    "revision": "a419ab3fe297b320619a486b98d51edb"
  },
  {
    "url": "rules/no-number-isnan.html",
    "revision": "d9ec0d057199bc1d04e0769599fd210e"
  },
  {
    "url": "rules/no-number-issafeinteger.html",
    "revision": "b752646eaccd8756c6f497ae76a37acf"
  },
  {
    "url": "rules/no-number-maxsafeinteger.html",
    "revision": "5c77afb18896930ef1f5f8509c4302de"
  },
  {
    "url": "rules/no-number-minsafeinteger.html",
    "revision": "27c24e0ba9b9ee6383c8ff4e54ce34bd"
  },
  {
    "url": "rules/no-number-parsefloat.html",
    "revision": "538da7517eabaef835c0768a05cf7fc8"
  },
  {
    "url": "rules/no-number-parseint.html",
    "revision": "14e5d4013e1397f3b3e9c6c96f2538bd"
  },
  {
    "url": "rules/no-object-assign.html",
    "revision": "dc76007632ff6875d48a5a5d7ad21b42"
  },
  {
    "url": "rules/no-object-entries.html",
    "revision": "215eb222e2f866abfaf2914585680403"
  },
  {
    "url": "rules/no-object-getownpropertydescriptors.html",
    "revision": "90d8677b9f47c126af7eeb391070de31"
  },
  {
    "url": "rules/no-object-getownpropertysymbols.html",
    "revision": "fc3c1bf953884df6528839048bb8e524"
  },
  {
    "url": "rules/no-object-is.html",
    "revision": "912f0bdf293c464449b652629b65783b"
  },
  {
    "url": "rules/no-object-setprototypeof.html",
    "revision": "06ede70ef7e5f23c8f914d9dd18011ce"
  },
  {
    "url": "rules/no-object-super-properties.html",
    "revision": "5712f338d87dce34b8635459805e9978"
  },
  {
    "url": "rules/no-object-values.html",
    "revision": "fabbec50b131ecfe74a496a476429a44"
  },
  {
    "url": "rules/no-octal-numeric-literals.html",
    "revision": "cd64ca4bf50aaa4bff824a6b6ba99d2a"
  },
  {
    "url": "rules/no-optional-catch-binding.html",
    "revision": "3b7b5a201755e0a809599f595fedef36"
  },
  {
    "url": "rules/no-promise.html",
    "revision": "3b9a7618ba99500add9b96d2e5793aec"
  },
  {
    "url": "rules/no-property-shorthands.html",
    "revision": "5ee130d121e1a1197e825dcdd1d9ebb3"
  },
  {
    "url": "rules/no-proxy.html",
    "revision": "fbf184c1a3474f3a18ce2a3a5b8f331a"
  },
  {
    "url": "rules/no-reflect.html",
    "revision": "9561963888b15e101822226a0c6f7fb7"
  },
  {
    "url": "rules/no-regexp-lookbehind-assertions.html",
    "revision": "a325aacb745c0797c943f0746a4d5a6a"
  },
  {
    "url": "rules/no-regexp-named-capture-groups.html",
    "revision": "65724046f018ae1430c1ff9e92f49891"
  },
  {
    "url": "rules/no-regexp-s-flag.html",
    "revision": "0053912c513949854a10f26d17d940b0"
  },
  {
    "url": "rules/no-regexp-u-flag.html",
    "revision": "51e4c151e75ff9cfe9e5df088d7baebe"
  },
  {
    "url": "rules/no-regexp-unicode-property-escapes.html",
    "revision": "6d656a3abc49c3e44fb891ed3dae5187"
  },
  {
    "url": "rules/no-regexp-y-flag.html",
    "revision": "169b0cbea5f5b7c11e07034517b5a37c"
  },
  {
    "url": "rules/no-rest-parameters.html",
    "revision": "97470b87d596b612287d480791f3d06e"
  },
  {
    "url": "rules/no-rest-spread-properties.html",
    "revision": "84ca68f2e6771a46b039058b420d1ad5"
  },
  {
    "url": "rules/no-set.html",
    "revision": "9d30d856902d731525619cf50ba67e3a"
  },
  {
    "url": "rules/no-shared-array-buffer.html",
    "revision": "f95e4f3e4c5dd3890bb8cb6132d2c751"
  },
  {
    "url": "rules/no-spread-elements.html",
    "revision": "493765ae2c8541c5ed8a55f5ea9ea5b1"
  },
  {
    "url": "rules/no-string-fromcodepoint.html",
    "revision": "ea67b49ba82651d7d2a530d28aa37963"
  },
  {
    "url": "rules/no-string-raw.html",
    "revision": "b47a3e49b80b83e57344fe7609c3a38c"
  },
  {
    "url": "rules/no-subclassing-builtins.html",
    "revision": "909001cc15c23564283685f9d79b939e"
  },
  {
    "url": "rules/no-symbol.html",
    "revision": "d89263e9c4bec74b99a8c5e41f54968b"
  },
  {
    "url": "rules/no-template-literals.html",
    "revision": "b8f5ab9cc3c12c25ffeaa04ed2834b9b"
  },
  {
    "url": "rules/no-trailing-commas.html",
    "revision": "46d5e46e858c2346664c7b338d1a2573"
  },
  {
    "url": "rules/no-trailing-function-commas.html",
    "revision": "1e26a90d772b098531f7ac932b9ceb13"
  },
  {
    "url": "rules/no-typed-arrays.html",
    "revision": "bd917bdbdd9001290b1f09d3f9238b5f"
  },
  {
    "url": "rules/no-unicode-codepoint-escapes.html",
    "revision": "c1c5731663825b51705d67b416d8d1e0"
  },
  {
    "url": "rules/no-weak-map.html",
    "revision": "341af815d060aacd69bd0356a784123f"
  },
  {
    "url": "rules/no-weak-set.html",
    "revision": "fd1fda22de730c0e731752b03f9b7fde"
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
