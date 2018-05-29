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
    "revision": "e86b763208d3df6ac1b4b3da15182dac"
  },
  {
    "url": "assets/css/86.styles.a8f3cc34.css",
    "revision": "1bb8042e23999c140733563c458ad2d4"
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
    "url": "assets/js/71.4ac64b60.js",
    "revision": "08090055f0cdef749eb60fbaed8af0d2"
  },
  {
    "url": "assets/js/72.862ce7f3.js",
    "revision": "19e2fee7676dce78eb9f02dcb61759a0"
  },
  {
    "url": "assets/js/73.1294f52b.js",
    "revision": "7dd614b596a989ae2074c7b5640271fc"
  },
  {
    "url": "assets/js/74.682a5d09.js",
    "revision": "bf22b69e1cdf75d967e1c8b3d7d63647"
  },
  {
    "url": "assets/js/75.d9f68480.js",
    "revision": "ecf270565f010880cb01b77c882aa2d8"
  },
  {
    "url": "assets/js/76.4b79c461.js",
    "revision": "c96bc2786542aeb4e4c2bad3b24992aa"
  },
  {
    "url": "assets/js/77.1dbb7b18.js",
    "revision": "9e12becbe5189f327001d295b272d237"
  },
  {
    "url": "assets/js/78.d776d125.js",
    "revision": "67d4a94991b5039c569f298703f71c25"
  },
  {
    "url": "assets/js/79.7002f72f.js",
    "revision": "e5638d136f2c84dcc6637b0dc7a76974"
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
    "url": "assets/js/81.97ca4ac3.js",
    "revision": "535721a905a3e9fde80d915fe83b2799"
  },
  {
    "url": "assets/js/82.d6db6d81.js",
    "revision": "6468426baf922db63689a5b628d89efb"
  },
  {
    "url": "assets/js/83.366f64fa.js",
    "revision": "32a949504891de9430a32b5e1a8c031a"
  },
  {
    "url": "assets/js/84.6be1468f.js",
    "revision": "e86f45ab796110418b963ef35465e426"
  },
  {
    "url": "assets/js/85.1e2b4ccf.js",
    "revision": "2cfc691ebc1ab3e04645f148f3b8b660"
  },
  {
    "url": "assets/js/9.6bc681fb.js",
    "revision": "191d118a8cf7670bcb85046875c3ea24"
  },
  {
    "url": "assets/js/app.2f0c2ad5.js",
    "revision": "51ea4c07f8f5182ff5336249dff079fa"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "f5c7c14a6ac4644db3a610dcc01e6558"
  },
  {
    "url": "index.html",
    "revision": "739da3143c8784b0b55b371f05c8f161"
  },
  {
    "url": "rules/index.html",
    "revision": "7479213cee38729079f1774459cc95c1"
  },
  {
    "url": "rules/no-accessor-properties.html",
    "revision": "630be69021c118e78ae5f1be6b1e9557"
  },
  {
    "url": "rules/no-array-from.html",
    "revision": "9099434b630d74e47e3cf0e589e48f20"
  },
  {
    "url": "rules/no-array-of.html",
    "revision": "520f92e9b3ee97f89eb50688d5d69035"
  },
  {
    "url": "rules/no-arrow-functions.html",
    "revision": "dc3452c20c9172afad7a28d3126f7791"
  },
  {
    "url": "rules/no-async-functions.html",
    "revision": "ca768c5af1d2672b35953e17324cd6c9"
  },
  {
    "url": "rules/no-async-iteration.html",
    "revision": "3af941da61d50291b7863a9bd89cb5de"
  },
  {
    "url": "rules/no-atomics.html",
    "revision": "8cb9b3726ac0f900534149d7553e032b"
  },
  {
    "url": "rules/no-binary-numeric-literals.html",
    "revision": "7c87d873590df8084c37448c42a77305"
  },
  {
    "url": "rules/no-block-scoped-functions.html",
    "revision": "32f2948c447fb21f5f8b601ff6a103ac"
  },
  {
    "url": "rules/no-block-scoped-variables.html",
    "revision": "6c94d058e6583b7ce8fe5b306622f322"
  },
  {
    "url": "rules/no-classes.html",
    "revision": "b1862cf77efb0a6630bd8aff99d91f69"
  },
  {
    "url": "rules/no-computed-properties.html",
    "revision": "0e944b9edb3425900a49957a10cda6b7"
  },
  {
    "url": "rules/no-default-parameters.html",
    "revision": "4e3aed1ed6d96956c6c3dd5febb39229"
  },
  {
    "url": "rules/no-destructuring.html",
    "revision": "1cd63892949758d594779806bfab9653"
  },
  {
    "url": "rules/no-exponential-operators.html",
    "revision": "912489eb9e9bd401c433c9b7deaaa65c"
  },
  {
    "url": "rules/no-for-of-loops.html",
    "revision": "3211a752bc8637132febf8b94fe0f03e"
  },
  {
    "url": "rules/no-generators.html",
    "revision": "d1019b5b13afc6238eee22ce41460dbc"
  },
  {
    "url": "rules/no-keyword-properties.html",
    "revision": "103d6d07a315288a4d552ac684b39e07"
  },
  {
    "url": "rules/no-malformed-template-literals.html",
    "revision": "951ae3858d91a8cedc6e70ffb6105e6a"
  },
  {
    "url": "rules/no-map.html",
    "revision": "35cbbd59ad12ffe7c9314eec9bc281df"
  },
  {
    "url": "rules/no-math-acosh.html",
    "revision": "843ac6844c89c30a1156bb8f7026c5a4"
  },
  {
    "url": "rules/no-math-asinh.html",
    "revision": "33d351417b76e4876166dd36403998f1"
  },
  {
    "url": "rules/no-math-atanh.html",
    "revision": "3a5e8032a70d1f1e70f7a8ad4536ab6c"
  },
  {
    "url": "rules/no-math-cbrt.html",
    "revision": "86aada6a6f11fd8484a3cbedc9ef3a50"
  },
  {
    "url": "rules/no-math-clz32.html",
    "revision": "d8a818e8b60c5b80e05e6324d162eecd"
  },
  {
    "url": "rules/no-math-cosh.html",
    "revision": "450b395123fe2be87aabbbcfa7a5fcb1"
  },
  {
    "url": "rules/no-math-expm1.html",
    "revision": "2b61d67ecc32d1ef24b8bec034bc5f08"
  },
  {
    "url": "rules/no-math-fround.html",
    "revision": "6116cbf5a820f35bd8f772e1f569836e"
  },
  {
    "url": "rules/no-math-hypot.html",
    "revision": "b6c61de0e4e007425b32af9466e2f4dc"
  },
  {
    "url": "rules/no-math-imul.html",
    "revision": "94fdd96f59b9bb44d62567e22b029190"
  },
  {
    "url": "rules/no-math-log10.html",
    "revision": "ad19d1ddb3633e42a8d65eba7934b441"
  },
  {
    "url": "rules/no-math-log1p.html",
    "revision": "3affc89ecbd5f374f73fb61f2d776c06"
  },
  {
    "url": "rules/no-math-log2.html",
    "revision": "e1eb0d18e6e7858d30b36ea5be0a2dfa"
  },
  {
    "url": "rules/no-math-sign.html",
    "revision": "f3660608f6902600901519d107d68c18"
  },
  {
    "url": "rules/no-math-sinh.html",
    "revision": "ab5f2a7a99f7362f357bd0bf64c523be"
  },
  {
    "url": "rules/no-math-tanh.html",
    "revision": "75367a7f9238a2035ce7dc7ab1986d93"
  },
  {
    "url": "rules/no-math-trunc.html",
    "revision": "838d259429286b2d090aec714c61ea99"
  },
  {
    "url": "rules/no-modules.html",
    "revision": "c3666e21fad6f37a26a80e4dca962484"
  },
  {
    "url": "rules/no-new-target.html",
    "revision": "f5c13e16fb8d13de3c103f33d2eeb35a"
  },
  {
    "url": "rules/no-number-epsilon.html",
    "revision": "c4b6e837250885412f0b1fee490ea6cf"
  },
  {
    "url": "rules/no-number-isfinite.html",
    "revision": "575afe8b7baca262d4f0c4b60e3c0a3f"
  },
  {
    "url": "rules/no-number-isinteger.html",
    "revision": "6c41026762c7058a1e4e46ce3e47efca"
  },
  {
    "url": "rules/no-number-isnan.html",
    "revision": "bf3a6ab66590b06eef966a22eea9ff85"
  },
  {
    "url": "rules/no-number-issafeinteger.html",
    "revision": "ac12eeb3a56fafc39783e8351ba00cc2"
  },
  {
    "url": "rules/no-number-maxsafeinteger.html",
    "revision": "792cd504db3e1dd007562cfed04ab6d0"
  },
  {
    "url": "rules/no-number-minsafeinteger.html",
    "revision": "b1d0ea0a4e89e0ddeace88070a4fedbf"
  },
  {
    "url": "rules/no-number-parsefloat.html",
    "revision": "18813a9f6499d41526f9a38520291b4d"
  },
  {
    "url": "rules/no-number-parseint.html",
    "revision": "749365011d5d7abf932c8ea0909ea85c"
  },
  {
    "url": "rules/no-object-assign.html",
    "revision": "2a6225cc3f32ff37f961f022b7a5d62a"
  },
  {
    "url": "rules/no-object-entries.html",
    "revision": "4bf1c9cad57e0924fa534476fb7e69d6"
  },
  {
    "url": "rules/no-object-getownpropertydescriptors.html",
    "revision": "aba0ec9d72df81e287aa1654d60f5f0e"
  },
  {
    "url": "rules/no-object-getownpropertysymbols.html",
    "revision": "28e4b43b2d116db85a2c336ac81ce732"
  },
  {
    "url": "rules/no-object-is.html",
    "revision": "126cc692e1e042b30315b3f0a5d7eb5e"
  },
  {
    "url": "rules/no-object-setprototypeof.html",
    "revision": "632bbaf75b932d5fbc6710ef301a4f8a"
  },
  {
    "url": "rules/no-object-super-properties.html",
    "revision": "91289cc59bf5b6bda30a6f41411b5bb0"
  },
  {
    "url": "rules/no-object-values.html",
    "revision": "d84606fea39746a0804840e30a859e6c"
  },
  {
    "url": "rules/no-octal-numeric-literals.html",
    "revision": "dce717e5ea2fd271a2d2a4f9f9e185ec"
  },
  {
    "url": "rules/no-promise.html",
    "revision": "5c1edfa3871def468209d7a7995f85a7"
  },
  {
    "url": "rules/no-property-shorthands.html",
    "revision": "e0b4c76b7abafd2355a52b8b3392135b"
  },
  {
    "url": "rules/no-proxy.html",
    "revision": "02cf4aa613b2e427acc4999319f5123a"
  },
  {
    "url": "rules/no-reflect.html",
    "revision": "7290235bf58f8af09766ef2a9603892b"
  },
  {
    "url": "rules/no-regexp-lookbehind-assertions.html",
    "revision": "13fc1837910e85451a064c3b8d49d165"
  },
  {
    "url": "rules/no-regexp-named-capture-groups.html",
    "revision": "50e203bb29eb6b278b4b3a38e5f889c7"
  },
  {
    "url": "rules/no-regexp-s-flag.html",
    "revision": "76d06653318d56cabcef55e6519eff20"
  },
  {
    "url": "rules/no-regexp-u-flag.html",
    "revision": "b849919fa9ca46c5d12018054261dd06"
  },
  {
    "url": "rules/no-regexp-unicode-property-escapes.html",
    "revision": "557c2f7567014106690e94c5b2503b63"
  },
  {
    "url": "rules/no-regexp-y-flag.html",
    "revision": "3676aa4affc0c4bef6de307d0ea34363"
  },
  {
    "url": "rules/no-rest-parameters.html",
    "revision": "b0365fe309a352de103b9c518556531b"
  },
  {
    "url": "rules/no-rest-spread-properties.html",
    "revision": "8e20ce183b7454723b5ebc5f995bf3bd"
  },
  {
    "url": "rules/no-set.html",
    "revision": "a2c3b30c176572b29802ad5596b386c2"
  },
  {
    "url": "rules/no-shared-array-buffer.html",
    "revision": "c1dc6bee99a050569c17124cd9610515"
  },
  {
    "url": "rules/no-spread-elements.html",
    "revision": "8ef5966886aacc030166e0018d5f29e6"
  },
  {
    "url": "rules/no-string-fromcodepoint.html",
    "revision": "02943a57d8463af9f84e16ad509f1529"
  },
  {
    "url": "rules/no-string-raw.html",
    "revision": "e7c9bd8edff7cecf1776eba380ecd19b"
  },
  {
    "url": "rules/no-subclassing-builtins.html",
    "revision": "a0368114298aed64a291c7c14929a0f0"
  },
  {
    "url": "rules/no-symbol.html",
    "revision": "774311aa028aed0ad87f0e30fbf3cd12"
  },
  {
    "url": "rules/no-template-literals.html",
    "revision": "d6b7243de93319b63ec2bf86ba702c2c"
  },
  {
    "url": "rules/no-trailing-commas.html",
    "revision": "aca01cb9399e83679cc23cd693ab6384"
  },
  {
    "url": "rules/no-trailing-function-commas.html",
    "revision": "a4b30ce90eb4fe1d5c73d26a6d3e4264"
  },
  {
    "url": "rules/no-typed-arrays.html",
    "revision": "e295393ff4389f9b1ab0aabb3280f1f0"
  },
  {
    "url": "rules/no-unicode-codepoint-escapes.html",
    "revision": "d4713adcc9f7fd51d14802c1f8543860"
  },
  {
    "url": "rules/no-weak-map.html",
    "revision": "d09ba24edfaa5360d57a228783ae4f4e"
  },
  {
    "url": "rules/no-weak-set.html",
    "revision": "7c30eaa196d658079041a079cac62a2e"
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
