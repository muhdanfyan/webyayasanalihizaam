exports.ids = [1];
exports.modules = {

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(39);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("95a33002", content, true, context)
};

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_587dc539_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_587dc539_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_587dc539_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_587dc539_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_587dc539_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".tentang-kami .row{background-color:#24b17b;padding:20px;color:wheat}.tentang-kami .title{padding:50px 0;text-align:center}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/About.vue?vue&type=template&id=587dc539&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "tentang-kami"
  }, [_vm._ssrNode("<div class=\"container\"><h2 class=\"title\">Tentang Kami</h2> <div class=\"row\"><div class=\"col-md-6\"><h3 class=\"subtitle\">Sejarah</h3> <p class=\"description\">\n            Yayasan Pendidikan Sosial Islam Ali Hizaam didirikan pada tahun 2010 oleh sekumpulan orang yang peduli terhadap masa depan anak-anak Indonesia. Berdasarkan prinsip-prinsip Islam yang sejahtera, yayasan ini bertujuan mengembangkan sistem pendidikan yang inovatif dan berorientasi pada kemajuan umat.\n          </p></div> <div class=\"col-md-6\"><h3 class=\"subtitle\">Visi dan Misi</h3> <p class=\"description\">\n            Visi yayasan adalah menjadi yayasan pendidikan sosial Islam terkemuka di Indonesia yang menghasilkan lulusan berkualitas dan berbudaya. Misi yayasan adalah:\n            <ul><li>Mengembangkan sistem pendidikan sosial Islam yang inovatif dan berorientasi pada kemajuan umat.</li> <li>Menghasilkan lulusan yang berkualitas dan memiliki keunggulan kompetitif di bidangnya.</li> <li>Mendorong terwujudnya masyarakat Indonesia yang sejahtera, bermartabat, dan beradab.</li></ul></p></div></div> <div class=\"row\"><div class=\"col-md-6 justify-content-center\"><h3 class=\"subtitle\">Struktur Organisasi</h3> <p class=\"description\">\n          Yayasan Pendidikan Sosial Islam Ali Hizaam memiliki struktur organisasi yang terdiri dari Dewan Pembina, Dewan Pengurus, dan Departemen-departemen yang menangani kegiatan-kegiatan yayasan. Masing-masing departemen dipimpin oleh seorang ketua yang bertanggung jawab terhadap keberlangsungan dan kemajuan kegiatan-kegiatan di bawahnya.\n        </p></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/About.vue?vue&type=template&id=587dc539&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/About.vue?vue&type=script&lang=js&
/* harmony default export */ var Aboutvue_type_script_lang_js_ = ({
  name: 'TentangKami'
});
// CONCATENATED MODULE: ./components/About.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Aboutvue_type_script_lang_js_ = (Aboutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/About.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(38)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Aboutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "f875a5f6"
  
)

/* harmony default export */ var About = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=about.js.map