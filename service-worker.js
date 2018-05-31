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
    "revision": "3553b9250465d7c28c60c789003dca6b"
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
    "url": "assets/js/85.2f7fcdbe.js",
    "revision": "7b560e193b9867f935dd9858ee159fa7"
  },
  {
    "url": "assets/js/9.6bc681fb.js",
    "revision": "191d118a8cf7670bcb85046875c3ea24"
  },
  {
    "url": "assets/js/app.773ddc58.js",
    "revision": "31dadb7769fa8c8c8f7bf564b0459eff"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "acb671d33f478a542de5d7b2e70ebc8c"
  },
  {
    "url": "index.html",
    "revision": "e3ced7a8e8b7ad641a0d811cb46f91a7"
  },
  {
    "url": "rules/index.html",
    "revision": "b5380f188e9b3244a0c8a85560e3e5bb"
  },
  {
    "url": "rules/no-accessor-properties.html",
    "revision": "9c57ab9d152b593dcbca5f6b932a72f6"
  },
  {
    "url": "rules/no-array-from.html",
    "revision": "c08908c14076afd0ee1104999e2e9276"
  },
  {
    "url": "rules/no-array-of.html",
    "revision": "61a9bcd225f20e01f05150a97fcd2888"
  },
  {
    "url": "rules/no-arrow-functions.html",
    "revision": "6820f72cc31b3c95026a2892d3b014a6"
  },
  {
    "url": "rules/no-async-functions.html",
    "revision": "77f60a73b6f3f8bc6ca00895dab6df37"
  },
  {
    "url": "rules/no-async-iteration.html",
    "revision": "783ac27162967952785896a1199b8b8d"
  },
  {
    "url": "rules/no-atomics.html",
    "revision": "2e33a618dbddff04661f9b7f5f81385d"
  },
  {
    "url": "rules/no-binary-numeric-literals.html",
    "revision": "de11d45e164ae6a26787f03fec33321e"
  },
  {
    "url": "rules/no-block-scoped-functions.html",
    "revision": "c74f4534d7c28a8b7004b9ed65e0d92b"
  },
  {
    "url": "rules/no-block-scoped-variables.html",
    "revision": "8fcdb2c707e22af798d3e99a39c4690a"
  },
  {
    "url": "rules/no-classes.html",
    "revision": "f49fc6af2111f952eaa6e2f908dccb2e"
  },
  {
    "url": "rules/no-computed-properties.html",
    "revision": "eaab08248b342a4a4cfcfbf09d4fb9b7"
  },
  {
    "url": "rules/no-default-parameters.html",
    "revision": "a8bfceac1a2262770b2860f6423d2317"
  },
  {
    "url": "rules/no-destructuring.html",
    "revision": "9ccc3a6944156d54e1583e45c0706d35"
  },
  {
    "url": "rules/no-exponential-operators.html",
    "revision": "c967d10b265495e91e3fac7dcdf4808b"
  },
  {
    "url": "rules/no-for-of-loops.html",
    "revision": "ede9416352415bae347461c74fd8fed9"
  },
  {
    "url": "rules/no-generators.html",
    "revision": "0054bc63bf6de74fb366d4b06dc97d1c"
  },
  {
    "url": "rules/no-keyword-properties.html",
    "revision": "2814a1bd955a69dd21fecda6a542de85"
  },
  {
    "url": "rules/no-malformed-template-literals.html",
    "revision": "a5e22c1d7b2de119ec4cd98a66394995"
  },
  {
    "url": "rules/no-map.html",
    "revision": "338bdfa8914bfbbd31ea8cc7c6763946"
  },
  {
    "url": "rules/no-math-acosh.html",
    "revision": "a0268538e6d7c0bc5900c00c2c1c1f7d"
  },
  {
    "url": "rules/no-math-asinh.html",
    "revision": "3d7bdc011c284a2b4196ea461cb6f143"
  },
  {
    "url": "rules/no-math-atanh.html",
    "revision": "55c765b988f2760bf99aa160e1726035"
  },
  {
    "url": "rules/no-math-cbrt.html",
    "revision": "fbd5bf6c38862252cb0814f96cbac0b7"
  },
  {
    "url": "rules/no-math-clz32.html",
    "revision": "8a7588e13c693c3ccd56ddb9b705e5ad"
  },
  {
    "url": "rules/no-math-cosh.html",
    "revision": "857b7378db55155b5704582a91e896f5"
  },
  {
    "url": "rules/no-math-expm1.html",
    "revision": "7cc63815321ee24e1c191f338c721788"
  },
  {
    "url": "rules/no-math-fround.html",
    "revision": "aa45f675aa9f1e2d36c7508a7bf106bf"
  },
  {
    "url": "rules/no-math-hypot.html",
    "revision": "131029fada5044fe6a0be62e80f8bd25"
  },
  {
    "url": "rules/no-math-imul.html",
    "revision": "9ae33d5b5cc508e56bbd0402f15fd2aa"
  },
  {
    "url": "rules/no-math-log10.html",
    "revision": "cdf291bf69e37768aba9022f85de7e4b"
  },
  {
    "url": "rules/no-math-log1p.html",
    "revision": "4cc09f2beecdcc705b4c441989046157"
  },
  {
    "url": "rules/no-math-log2.html",
    "revision": "b9d39f5f449101218486d2361540b4ed"
  },
  {
    "url": "rules/no-math-sign.html",
    "revision": "2f0d02636c68b190c0e77b4b642a885f"
  },
  {
    "url": "rules/no-math-sinh.html",
    "revision": "c3581845a4f72d7ca0fbf9b106429ab7"
  },
  {
    "url": "rules/no-math-tanh.html",
    "revision": "208cde327ecf9f74f63da376473e6438"
  },
  {
    "url": "rules/no-math-trunc.html",
    "revision": "0d95c2e7e1f0a5b50dc2c1a50a369041"
  },
  {
    "url": "rules/no-modules.html",
    "revision": "4ea5dae4ba6d9b292448bfb36f5efd97"
  },
  {
    "url": "rules/no-new-target.html",
    "revision": "167d1c0ee21d2aae41dba2f487a57603"
  },
  {
    "url": "rules/no-number-epsilon.html",
    "revision": "acecd3a9409734c575630b8d01e39db0"
  },
  {
    "url": "rules/no-number-isfinite.html",
    "revision": "8622db37d29916328becb814b2926b99"
  },
  {
    "url": "rules/no-number-isinteger.html",
    "revision": "8c953497696f9bf64d9dec9d76ff31c9"
  },
  {
    "url": "rules/no-number-isnan.html",
    "revision": "8c28dfed0608f30139ef0c2d84bb4b49"
  },
  {
    "url": "rules/no-number-issafeinteger.html",
    "revision": "c41511c62c82df2004b0592d4298e673"
  },
  {
    "url": "rules/no-number-maxsafeinteger.html",
    "revision": "d881821bd7726ae2450db1e42a66700a"
  },
  {
    "url": "rules/no-number-minsafeinteger.html",
    "revision": "74d636ba54e57f7f397c9f15b29481b6"
  },
  {
    "url": "rules/no-number-parsefloat.html",
    "revision": "6385247c4b45fa97ed2814aac662be5d"
  },
  {
    "url": "rules/no-number-parseint.html",
    "revision": "11fe3612733fe51e99201f120e5004f1"
  },
  {
    "url": "rules/no-object-assign.html",
    "revision": "90d7c29ca2ca6c9c215fb76a35f4b41d"
  },
  {
    "url": "rules/no-object-entries.html",
    "revision": "1633926c08d18ac7e2611fb11ca16142"
  },
  {
    "url": "rules/no-object-getownpropertydescriptors.html",
    "revision": "b723fbafeca5d9073a4c9024f058b36c"
  },
  {
    "url": "rules/no-object-getownpropertysymbols.html",
    "revision": "b9739d8a8dc34b3afdd28ca697bae41c"
  },
  {
    "url": "rules/no-object-is.html",
    "revision": "a141f6e1288744a716c9bd4947549f52"
  },
  {
    "url": "rules/no-object-setprototypeof.html",
    "revision": "28e0cd001347f2c89e3c68b2b304760a"
  },
  {
    "url": "rules/no-object-super-properties.html",
    "revision": "8e4e448a48e3f5bf4fc5023fad798cde"
  },
  {
    "url": "rules/no-object-values.html",
    "revision": "a303632ccc2169f8f7f13b31135cbb77"
  },
  {
    "url": "rules/no-octal-numeric-literals.html",
    "revision": "3401f8c0524e6df03ac825ec5ea9d553"
  },
  {
    "url": "rules/no-promise.html",
    "revision": "a3cab6ea5bcd57d242de7b3edf651ecc"
  },
  {
    "url": "rules/no-property-shorthands.html",
    "revision": "38432d69751b96b539eaec509a61f34e"
  },
  {
    "url": "rules/no-proxy.html",
    "revision": "4b6e5c661988058c0a2721f4fe928e2b"
  },
  {
    "url": "rules/no-reflect.html",
    "revision": "7779452f862486e8441301a3a398e19b"
  },
  {
    "url": "rules/no-regexp-lookbehind-assertions.html",
    "revision": "fa04fc6224682298a5ac3ba9010bd03d"
  },
  {
    "url": "rules/no-regexp-named-capture-groups.html",
    "revision": "5ce020da0db5bc1cc4b7de36d109c26c"
  },
  {
    "url": "rules/no-regexp-s-flag.html",
    "revision": "77640e52720940a6f5ce5942c341b1f4"
  },
  {
    "url": "rules/no-regexp-u-flag.html",
    "revision": "341c68b24649f2f3284cae30ee3db326"
  },
  {
    "url": "rules/no-regexp-unicode-property-escapes.html",
    "revision": "c902ed18de37b0af8a66cfda48481f2d"
  },
  {
    "url": "rules/no-regexp-y-flag.html",
    "revision": "1ed65a6323b450bc08148d27277884c4"
  },
  {
    "url": "rules/no-rest-parameters.html",
    "revision": "1d1aabf254d46291d871e4fd090247be"
  },
  {
    "url": "rules/no-rest-spread-properties.html",
    "revision": "7ad9e6dc81c3d08bf807f54826d00724"
  },
  {
    "url": "rules/no-set.html",
    "revision": "2c0447583b1345dd9e848a9bee055ddc"
  },
  {
    "url": "rules/no-shared-array-buffer.html",
    "revision": "da031d05568133369056ab866f471c23"
  },
  {
    "url": "rules/no-spread-elements.html",
    "revision": "a8742a8ba7336d6033240ec459c1f8b5"
  },
  {
    "url": "rules/no-string-fromcodepoint.html",
    "revision": "c5c120550f00e30e55ebdd636ea989f2"
  },
  {
    "url": "rules/no-string-raw.html",
    "revision": "f418c4d8fdb6e5e156b9e49fefaa4014"
  },
  {
    "url": "rules/no-subclassing-builtins.html",
    "revision": "c16d0960608649e15e8ee3ae68379728"
  },
  {
    "url": "rules/no-symbol.html",
    "revision": "e9840a0319a2ee628dc909719132ebb7"
  },
  {
    "url": "rules/no-template-literals.html",
    "revision": "7cd17a9adc0c6b0ccc5eaa44a29ea6a7"
  },
  {
    "url": "rules/no-trailing-commas.html",
    "revision": "5a44d12b1d733fa7d0c7b0a4b7dfc9b1"
  },
  {
    "url": "rules/no-trailing-function-commas.html",
    "revision": "dc1748e5015ca08127d2846ed7b48b6d"
  },
  {
    "url": "rules/no-typed-arrays.html",
    "revision": "8010cad03ec9e1a29f30b950afb04cb8"
  },
  {
    "url": "rules/no-unicode-codepoint-escapes.html",
    "revision": "cf5cf3e67af81c6057848a1e98a513fc"
  },
  {
    "url": "rules/no-weak-map.html",
    "revision": "15d4697682d6ec33b398ae4c1f0c61e1"
  },
  {
    "url": "rules/no-weak-set.html",
    "revision": "4b7aacc74764bf62417932359f2ef05d"
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
