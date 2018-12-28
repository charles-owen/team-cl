(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Team"] = factory();
	else
		root["Team"] = factory();
})(window, function() {
return (window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["Team"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/console/js/ConsoleComponentBase.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/console/js/ConsoleComponentBase.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var users_cl_js_Vue_UserVueBase_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! users-cl/js/Vue/UserVueBase.vue */ "./vendor/cl/users/js/Vue/UserVueBase.vue");
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  'extends': users_cl_js_Vue_UserVueBase_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  methods: {
    /**
     * Add an option to the nav2 menu.
     * @param title Title of the option to add.
     * @param order Order in the menu.
     * @param closure Function to call when selected.
     */
    addNav2: function addNav2(title, order, closure) {
      var item = this.$site.console.components.addNav2Link(this, title, order, closure);
      this.components1.push(item);
      return item;
    },

    /**
     * Add an option to the nav2 menu that is a router link
     * @param title Title of the option to add.
     * @param order Order in the menu.
     * @param link Link without Site.root
     */
    addNav2Link: function addNav2Link(title, order, link) {
      var _this = this;

      this.addNav2(title, order, function () {
        _this.$router.push(Site.root + link);
      });
    },
    removeNav2: function removeNav2(item) {
      var i = this.components1.indexOf(item);

      if (i >= 0) {
        this.components1.splice(i, 1);
      }

      this.$site.console.components.removeNav2(this, item);
    }
  },
  created: function created() {
    this.components1 = [];
  },
  beforeDestroy: function beforeDestroy() {
    this.$site.console.components.removeNav2(this, this.components1);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/site/js/UI/Menu.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/site/js/UI/Menu.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//

/**
 * General-purpose menu system Vue component.
 *
 * Supports simple menus where a click opens and closes a pull-down menu.
 * @example
 * // Include this component
 * import MenuVue from 'site-cl/js/UI/Menu.vue';
 * @example
 * // Add as a component to the Vue:
 * components: {
 *   menuVue: MenuVue
 * },
 * @example
 * // Use in the template
 * <menu-vue v-on:open="select"><a class="float-right"><img :src="root + '/vendor/cl/site/img/menubars.png'" alt="Menu"></a>
 *   <ul>
 *     <li><a>First option</a></li>
 *     <li><a>Second option</a></li>
 *   </ul>
 * </menu-vue>
 * @constructor MenuVue
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['addClass'],
  data: function data() {
    return {
      useClass: 'cl-menu'
    };
  },
  mounted: function mounted() {
    var _this = this;

    if (this.addClass !== undefined) {
      this.useClass += ' ' + this.addClass;
    } //
    // Collect up the elements
    //


    var links = [];
    var uls = [];
    var open = false;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = this.$refs['menu'].children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var child = _step.value;

        if (child.tagName === 'A') {
          links.push(child);
        } else if (child.tagName === 'UL') {
          uls.push(child);
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    var closeListener = function closeListener(event) {
      // Did we click on something that is a child of
      // this menu div?
      var element = event.target;

      do {
        // We are okay with clicks on children of
        // the pop-up menu
        if (uls.indexOf(element) >= 0) {
          break;
        }

        if (element === _this.$refs['menu']) {
          return;
        }

        element = element.parentElement;
      } while (element !== null);

      closeAll();
    }; //
    // Close all menus
    //


    var closeAll = function closeAll() {
      // This timeout ensures the click on
      // the menu is processed before the menu
      // is hidden.
      setTimeout(function () {
        for (var _i = 0; _i < uls.length; _i++) {
          var ul = uls[_i];
          ul.style.display = 'none';
        }
      }, 200);
      open = false;
      document.removeEventListener('click', closeListener);
      document.removeEventListener('mousedown', closeListener);
    }; //
    // Click listeners on the links
    //


    for (var _i2 = 0; _i2 < links.length; _i2++) {
      var link = links[_i2];
      link.addEventListener('click', function (event) {
        event.preventDefault(); // We have clicked on a menu link

        if (!open) {
          // Open the menu!
          open = true;

          for (var _i3 = 0; _i3 < uls.length; _i3++) {
            var ul = uls[_i3];
            ul.style.display = 'block';
          }

          document.addEventListener('click', closeListener);
          document.addEventListener('mousedown', closeListener);

          _this.$emit('open');
        } else {
          // Close the menu
          closeAll();
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/site/js/Vue/PageVueBase.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/site/js/Vue/PageVueBase.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
  * Base component for pages.
  * @constructor PageVueBase
  */
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      /**
        * Site object
        * @memberof PageVueBase
        * @instance
        * @member {Site} site
        */
      site: Site,

      /**
        * Site root path (Site.root)
        * @memberof PageVueBase
        * @instance
        * @member {string} root
        */
      root: Site.root
    };
  },
  methods: {
    /**
      * Set the page title
      * @memberof PageVueBase
      * @instance
     * @param {string} title
     */
    setTitle: function setTitle(title) {
      this.$parent.setTitle(title);
    },
    setMenu: function setMenu(menu) {
      this.$parent.setMenu(menu);
    },
    getMenu: function getMenu() {
      return this.$parent.getMenu();
    },
    clearMenu: function clearMenu() {
      this.setMenu([]);
    },

    /**
     * Add an option to the nav2 menu.
     * @param title Title of the option to add.
     * @param closure Function to call when selected.
     */
    addMenu: function addMenu(title, closure) {
      var menu = this.getMenu();
      menu.push({
        name: title,
        click: closure
      });
      this.setMenu(menu);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/site/js/Vue/VueDialog.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/site/js/Vue/VueDialog.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    close: function close() {
      this.$dialog.close();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/team/js/Console/TeamDistributer.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/team/js/Console/TeamDistributer.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var site_cl_js_Vue_VueDialog_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! site-cl/js/Vue/VueDialog.vue */ "./vendor/cl/site/js/Vue/VueDialog.vue");
/* harmony import */ var dialog_cl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dialog-cl */ "./packages/dialog-cl/src/app.modules.js");
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  'extends': site_cl_js_Vue_VueDialog_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  props: ['teamingid', 'parent'],
  data: function data() {
    return {
      size: 5
    };
  },
  mounted: function mounted() {
    this.$refs['size'].select();
    this.$refs['size'].focus();
  },
  methods: {
    submit: function submit() {
      var _this = this;

      var size = +this.size;

      if (size < 1 || size > 100) {
        new dialog_cl__WEBPACK_IMPORTED_MODULE_1__["default"].MessageBox('Must enter size', 'You must provide a size from 1 to 100', dialog_cl__WEBPACK_IMPORTED_MODULE_1__["default"].MessageBox.OK);
        return;
      }

      var params = {
        size: size
      };
      this.$site.api.post('/api/team/teams/' + this.teamingid + '/distribute', params).then(function (response) {
        if (!response.hasError()) {
          _this.parent.take(response);

          _this.$dialog.close();
        } else {
          _this.$site.toast(_this, response);
        }
      }).catch(function (error) {
        _this.$site.toast(_this, error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/team/js/Console/TeamEditor.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/team/js/Console/TeamEditor.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var site_cl_js_Vue_VueDialog_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! site-cl/js/Vue/VueDialog.vue */ "./vendor/cl/site/js/Vue/VueDialog.vue");
/* harmony import */ var dialog_cl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dialog-cl */ "./packages/dialog-cl/src/app.modules.js");
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  'extends': site_cl_js_Vue_VueDialog_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  props: ['team', 'teamingid', 'operation', 'parent'],
  mounted: function mounted() {
    this.$refs['name'].focus();
  },
  methods: {
    submit: function submit() {
      var _this = this;

      if (this.team.name.trim() === '') {
        new dialog_cl__WEBPACK_IMPORTED_MODULE_1__["default"].MessageBox('Must enter name', 'You must provide a non-empty name', dialog_cl__WEBPACK_IMPORTED_MODULE_1__["default"].MessageBox.OK);
        return;
      }

      var params = {
        id: this.team.id,
        name: this.team.name.trim()
      };
      this.$site.api.post('/api/team/teams/' + this.teamingid + '/' + this.operation, params).then(function (response) {
        if (!response.hasError()) {
          _this.parent.take(response);

          _this.$dialog.close();
        } else {
          _this.$site.toast(_this, response);
        }
      }).catch(function (error) {
        _this.$site.toast(_this, error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/team/js/Console/TeamNameLoader.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/team/js/Console/TeamNameLoader.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var site_cl_js_Vue_VueDialog_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! site-cl/js/Vue/VueDialog.vue */ "./vendor/cl/site/js/Vue/VueDialog.vue");
/* harmony import */ var dialog_cl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dialog-cl */ "./packages/dialog-cl/src/app.modules.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  'extends': site_cl_js_Vue_VueDialog_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  props: ['teamingid', 'parent'],
  data: function data() {
    return {
      names: ''
    };
  },
  mounted: function mounted() {
    this.$refs['names'].focus();
  },
  methods: {
    submit: function submit() {
      var _this = this;

      var names1 = this.names.trim().split("\n");
      var names = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = names1[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var name = _step.value;
          name = name.trim();

          if (name !== '') {
            names.push(name);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      if (names.length === 0) {
        new dialog_cl__WEBPACK_IMPORTED_MODULE_1__["default"].MessageBox('Must enter names', 'You must enter one or more names to use.', dialog_cl__WEBPACK_IMPORTED_MODULE_1__["default"].MessageBox.OK);
        return;
      }

      var params = {
        names: names
      };
      this.$site.api.post('/api/team/teams/' + this.teamingid + '/names', params).then(function (response) {
        if (!response.hasError()) {
          _this.parent.take(response);

          _this.$dialog.close();
        } else {
          _this.$site.toast(_this, response);
        }
      }).catch(function (error) {
        _this.$site.toast(_this, error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/team/js/Console/TeamingEditor.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/team/js/Console/TeamingEditor.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['teaming'],
  mounted: function mounted() {
    this.$refs['tag'].focus();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/team/js/Console/TeamingsEditor.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/team/js/Console/TeamingsEditor.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var console_cl_js_ConsoleComponentBase_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! console-cl/js/ConsoleComponentBase.vue */ "./vendor/cl/console/js/ConsoleComponentBase.vue");
/* harmony import */ var dialog_cl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dialog-cl */ "./packages/dialog-cl/src/app.modules.js");
/* harmony import */ var _Teaming__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Teaming */ "./vendor/cl/team/js/Teaming.js");
/* harmony import */ var _TeamingEditor_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TeamingEditor.vue */ "./vendor/cl/team/js/Console/TeamingEditor.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  extends: console_cl_js_ConsoleComponentBase_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  data: function data() {
    return {
      teamings: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.setTitle(': Teamings');
    this.addNav2('Add Teaming', 5, function () {
      _this.add();
    });
    this.$site.api.get('/api/team/teamings', {}).then(function (response) {
      if (!response.hasError()) {
        _this.take(response);
      } else {
        _this.$site.toast(_this, response);
      }
    }).catch(function (error) {
      _this.$site.toast(_this, error);
    });
  },
  methods: {
    take: function take(response) {
      var data = response.getData('teamings').attributes;
      this.teamings = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var row = _step.value;
          this.teamings.push(new _Teaming__WEBPACK_IMPORTED_MODULE_2__["Teaming"](row));
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    },
    add: function add() {
      var _this2 = this;

      var teaming = new _Teaming__WEBPACK_IMPORTED_MODULE_2__["Teaming"]();
      new dialog_cl__WEBPACK_IMPORTED_MODULE_1__["default"]({
        title: 'New Teaming',
        content: '<div id="cl-teaming"></div>',
        addClass: 'cl-dialog-narrow',
        buttons: [{
          contents: 'Add',
          focus: true,
          click: function click(dialog) {
            if (!_this2.$site.Tags.validate(teaming.tag)) {
              return;
            }

            if (teaming.name.trim() === '') {
              new dialog_cl__WEBPACK_IMPORTED_MODULE_1__["default"].MessageBox('Must enter name', 'You must provide a non-empty name', dialog_cl__WEBPACK_IMPORTED_MODULE_1__["default"].MessageBox.OK);
              return;
            }

            var params = {
              tag: teaming.tag.trim(),
              name: teaming.name.trim(),
              public: teaming.public
            };

            _this2.$site.api.post('/api/team/teamings/new', params).then(function (response) {
              if (!response.hasError()) {
                _this2.take(response);

                dialog.close();
              } else {
                _this2.$site.toast(_this2, response);
              }
            }).catch(function (error) {
              _this2.$site.toast(_this2, error);
            });
          }
        }, {
          contents: 'Cancel',
          click: function click(dialog) {
            dialog.close();
          }
        }]
      }); // Create a Vue inside the dialog box

      new this.$site.Vue({
        el: '#cl-teaming',
        data: function data() {
          return {
            teaming: teaming
          };
        },
        template: "<editor :teaming=\"teaming\"></editor>",
        components: {
          editor: _TeamingEditor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
        }
      });
    },
    editer: function editer(teaming) {
      var _this3 = this;

      teaming = teaming.clone();
      new dialog_cl__WEBPACK_IMPORTED_MODULE_1__["default"]({
        title: 'Edit Teaming',
        content: '<div id="cl-teaming"></div>',
        addClass: 'cl-dialog-narrow',
        buttons: [{
          contents: 'Update',
          focus: true,
          click: function click(dialog) {
            if (!_this3.$site.Tags.validate(teaming.tag)) {
              return;
            }

            if (teaming.name.trim() === '') {
              new dialog_cl__WEBPACK_IMPORTED_MODULE_1__["default"].MessageBox('Must enter name', 'You must provide a non-empty name', dialog_cl__WEBPACK_IMPORTED_MODULE_1__["default"].MessageBox.OK);
              return;
            }

            var params = {
              id: teaming.id,
              tag: teaming.tag.trim(),
              name: teaming.name.trim(),
              public: teaming.public
            };

            _this3.$site.api.post('/api/team/teamings/update', params).then(function (response) {
              if (!response.hasError()) {
                _this3.take(response);

                dialog.close();
              } else {
                _this3.$site.toast(_this3, response);
              }
            }).catch(function (error) {
              _this3.$site.toast(_this3, error);
            });
          }
        }, {
          contents: 'Cancel',
          click: function click(dialog) {
            dialog.close();
          }
        }]
      }); // Create a Vue inside the dialog box

      new this.$site.Vue({
        el: '#cl-teaming',
        data: function data() {
          return {
            teaming: teaming
          };
        },
        template: "<editor :teaming=\"teaming\"></editor>",
        components: {
          editor: _TeamingEditor_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
        }
      });
    },
    deleter: function deleter(teaming) {
      var _this4 = this;

      new dialog_cl__WEBPACK_IMPORTED_MODULE_1__["default"].MessageBox('Are you sure?', 'Are you sure you want to delete ' + teaming.name, dialog_cl__WEBPACK_IMPORTED_MODULE_1__["default"].MessageBox.OKCANCEL, function () {
        _this4.$site.api.post('/api/team/teamings/delete', {
          id: teaming.id
        }).then(function (response) {
          if (!response.hasError()) {
            _this4.take(response);

            dialog.close();
          } else {
            _this4.$site.toast(_this4, response);
          }
        }).catch(function (error) {
          _this4.$site.toast(_this4, error);
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/team/js/Console/TeamsEditor.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/team/js/Console/TeamsEditor.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var console_cl_js_ConsoleComponentBase_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! console-cl/js/ConsoleComponentBase.vue */ "./vendor/cl/console/js/ConsoleComponentBase.vue");
/* harmony import */ var _TeamEditor_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TeamEditor.vue */ "./vendor/cl/team/js/Console/TeamEditor.vue");
/* harmony import */ var dialog_cl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dialog-cl */ "./packages/dialog-cl/src/app.modules.js");
/* harmony import */ var _Team__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Team */ "./vendor/cl/team/js/Team.js");
/* harmony import */ var site_cl_js_UI_Menu_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! site-cl/js/UI/Menu.vue */ "./vendor/cl/site/js/UI/Menu.vue");
/* harmony import */ var site_cl_js_Vue_VueDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! site-cl/js/Vue/VueDialog */ "./vendor/cl/site/js/Vue/VueDialog.js");
/* harmony import */ var _TeamDistributer_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TeamDistributer.vue */ "./vendor/cl/team/js/Console/TeamDistributer.vue");
/* harmony import */ var _TeamNameLoader_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TeamNameLoader.vue */ "./vendor/cl/team/js/Console/TeamNameLoader.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ __webpack_exports__["default"] = ({
  extends: console_cl_js_ConsoleComponentBase_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  props: ['id'],
  data: function data() {
    return {
      teams: null,
      open: []
    };
  },
  computed: {
    /**
      * Computed parameter that totals all team memberships
     * @returns {number}
     */
    totals: function totals() {
      var cnt = 0;
      var unaffil = 0;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.teams[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var team = _step.value;

          if (team.name !== null) {
            cnt += team.members.length;
          } else {
            unaffil += team.members.length;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var response = cnt + ' team members / ' + (this.teams.length - 1) + " teams";

      if (unaffil > 0) {
        response += ' / ' + unaffil + ' unassigned';
      }

      return response;
    }
  },
  components: {
    clMenu: site_cl_js_UI_Menu_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  mounted: function mounted() {
    var _this = this;

    this.addNav2Link('Teamings', 3, '/cl/console/teams');
    this.addNav2('Add Team', 5, function () {
      _this.add();
    });
    this.addNav2('Load Names', 6, function () {
      _this.loadNames();
    });
    this.addNav2('Expand All', 7, function () {
      _this.expandAll();
    });
    this.$site.api.get('/api/team/teams/' + this.id, {}).then(function (response) {
      if (!response.hasError()) {
        _this.take(response);
      } else {
        _this.$site.toast(_this, response);
      }
    }).catch(function (error) {
      _this.$site.toast(_this, error);
    });
  },
  beforeDestroy: function beforeDestroy() {},
  methods: {
    take: function take(response) {
      var teams = response.getData('teams').attributes;
      this.teams = [];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = teams[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var team = _step2.value;
          this.teams.push(new _Team__WEBPACK_IMPORTED_MODULE_3__["Team"](team));
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    },
    toggle: function toggle(team) {
      if (this.open[team.id] === true) {
        this.$set(this.open, team.id, false);
      } else {
        this.$set(this.open, team.id, true);
      }
    },
    add: function add() {
      var team = new _Team__WEBPACK_IMPORTED_MODULE_3__["Team"]();
      var teamingId = this.id;
      new site_cl_js_Vue_VueDialog__WEBPACK_IMPORTED_MODULE_5__["VueDialog"](this.$site, {
        title: 'New Team',
        vue: _TeamEditor_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
        data: function data() {
          return {
            team: team,
            teamingid: teamingId,
            operation: 'new'
          };
        },
        buttons: false,
        parent: this
      });
    },
    editer: function editer(team) {
      team = team.clone();
      var teamingId = this.id;
      new site_cl_js_Vue_VueDialog__WEBPACK_IMPORTED_MODULE_5__["VueDialog"](this.$site, {
        title: 'Edit Team',
        vue: _TeamEditor_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
        data: function data() {
          return {
            team: team,
            teamingid: teamingId,
            operation: 'update'
          };
        },
        buttons: false,
        parent: this
      });
    },
    deleter: function deleter(team) {
      var _this2 = this;

      new dialog_cl__WEBPACK_IMPORTED_MODULE_2__["default"].MessageBox('Are you sure?', 'Are you sure you want to delete ' + team.name, dialog_cl__WEBPACK_IMPORTED_MODULE_2__["default"].MessageBox.OKCANCEL, function () {
        _this2.$site.api.post('/api/team/teams/' + _this2.id + '/delete', {
          id: team.id
        }).then(function (response) {
          if (!response.hasError()) {
            _this2.take(response);
          } else {
            _this2.$site.toast(_this2, response);
          }
        }).catch(function (error) {
          _this2.$site.toast(_this2, error);
        });
      });
    },
    move: function move(member, team) {
      var _this3 = this;

      var params = {
        member: member.memberid,
        team: team !== null ? team.id : 0
      };
      this.$site.api.post('/api/team/teams/' + this.id + '/move', params).then(function (response) {
        if (!response.hasError()) {
          _this3.take(response);
        } else {
          _this3.$site.toast(_this3, response);
        }
      }).catch(function (error) {
        _this3.$site.toast(_this3, error);
      });
    },
    distribute: function distribute() {
      var teamingId = this.id;
      new site_cl_js_Vue_VueDialog__WEBPACK_IMPORTED_MODULE_5__["VueDialog"](this.$site, {
        title: 'Team Distributer',
        vue: _TeamDistributer_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
        data: function data() {
          return {
            teamingid: teamingId
          };
        },
        buttons: false,
        parent: this
      });
    },
    loadNames: function loadNames() {
      var teamingId = this.id;
      new site_cl_js_Vue_VueDialog__WEBPACK_IMPORTED_MODULE_5__["VueDialog"](this.$site, {
        title: 'Team Name Loader',
        vue: _TeamNameLoader_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
        addClass: 'cl-teams-editor-dlg',
        data: function data() {
          return {
            teamingid: teamingId
          };
        },
        buttons: false,
        parent: this
      });
    },
    expandAll: function expandAll() {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.teams[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var team = _step3.value;
          this.$set(this.open, team.id, true);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    },
    teamHeading: function teamHeading(team) {
      if (team.name === null) {
        return 'Unassigned';
      }

      var html = team.name;
      var email = '';
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = team.members[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var member = _step4.value;

          if (email !== '') {
            email += ';';
          }

          email += member.email;
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      return "".concat(team.name, " <a class=\"cl-email\" href=\"mailto:").concat(email, "\">email</a>");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/users/js/Vue/UserVueBase.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/users/js/Vue/UserVueBase.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var site_cl_js_Vue_PageVueBase_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! site-cl/js/Vue/PageVueBase.vue */ "./vendor/cl/site/js/Vue/PageVueBase.vue");
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  'extends': site_cl_js_Vue_PageVueBase_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  computed: {
    user: function user() {
      return this.$store.state.user.user;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/team/js/Console/TeamingEditor.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/team/js/Console/TeamingEditor.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.cl-teaming-editor {\n  text-align: center;\n}\ndiv.cl-teaming-editor > div {\n  display: inline-block;\n  padding: 1.5em 0 2.0em 0;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/team/js/Console/TeamsEditor.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/team/js/Console/TeamsEditor.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.cl-teams-editor th:nth-child(2) {\n  min-width: 30em;\n}\ndiv.cl-teams-editor td:nth-child(2) {\n  min-width: 5em;\n}\ndiv.cl-teams-editor td:nth-child(3) {\n  min-width: 10em;\n}\ndiv.cl-teams-editor a.cl-email {\n  float: right;\n  font-weight: normal;\n  font-size: 0.85em;\n  display: inline-block;\n  padding-right: 1em;\n  font-style: italic;\n}\ndiv.cl-teams-editor-dlg {\n  min-height: 400px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/site/js/UI/Menu.vue?vue&type=template&id=d4b05102&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/site/js/UI/Menu.vue?vue&type=template&id=d4b05102& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { ref: "menu", class: _vm.useClass }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/team/js/Console/TeamDistributer.vue?vue&type=template&id=51482dab&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/team/js/Console/TeamDistributer.vue?vue&type=template&id=51482dab& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "cl-center-in" }, [
    _c(
      "form",
      {
        staticClass: "cl-inline-padded",
        on: {
          submit: function($event) {
            $event.preventDefault()
            _vm.submit()
          }
        }
      },
      [
        _c("p", [
          _c("label", [
            _vm._v("Team Size"),
            _c("br"),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.size,
                  expression: "size"
                }
              ],
              ref: "size",
              staticClass: "center",
              staticStyle: { width: "8em" },
              attrs: { type: "text" },
              domProps: { value: _vm.size },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.size = $event.target.value
                }
              }
            })
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "cl-dialog-bottom" }, [
      _c(
        "button",
        {
          attrs: { type: "submit" },
          on: {
            click: function($event) {
              $event.preventDefault()
              _vm.submit()
            }
          }
        },
        [_vm._v("Distribute")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          attrs: { type: "submit" },
          on: {
            click: function($event) {
              $event.preventDefault()
              _vm.close()
            }
          }
        },
        [_vm._v("Cancel")]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/team/js/Console/TeamEditor.vue?vue&type=template&id=2ce7ab63&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/team/js/Console/TeamEditor.vue?vue&type=template&id=2ce7ab63& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "cl-center-in" }, [
    _c(
      "form",
      {
        staticClass: "cl-inline-padded",
        on: {
          submit: function($event) {
            $event.preventDefault()
            _vm.submit()
          }
        }
      },
      [
        _c("p", [
          _c("label", [
            _vm._v("Name"),
            _c("br"),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.team.name,
                  expression: "team.name"
                }
              ],
              ref: "name",
              attrs: { type: "text" },
              domProps: { value: _vm.team.name },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.team, "name", $event.target.value)
                }
              }
            })
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "cl-dialog-bottom" }, [
      _c(
        "button",
        {
          attrs: { type: "submit" },
          on: {
            click: function($event) {
              $event.preventDefault()
              _vm.submit()
            }
          }
        },
        [_vm._v(_vm._s(_vm.operation === "new" ? "Add" : "Update"))]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          attrs: { type: "submit" },
          on: {
            click: function($event) {
              $event.preventDefault()
              _vm.close()
            }
          }
        },
        [_vm._v("Cancel")]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/team/js/Console/TeamNameLoader.vue?vue&type=template&id=1784bcf4&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/team/js/Console/TeamNameLoader.vue?vue&type=template&id=1784bcf4& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "cl-center-in" }, [
    _c(
      "form",
      {
        staticClass: "cl-inline-padded",
        on: {
          submit: function($event) {
            $event.preventDefault()
            _vm.submit()
          }
        }
      },
      [
        _c("p", [
          _c("label", [
            _vm._v("Team Names"),
            _c("br"),
            _vm._v(" "),
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.names,
                  expression: "names"
                }
              ],
              ref: "names",
              attrs: { rows: "15" },
              domProps: { value: _vm.names },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.names = $event.target.value
                }
              }
            })
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "cl-dialog-bottom" }, [
      _c(
        "button",
        {
          attrs: { type: "submit" },
          on: {
            click: function($event) {
              $event.preventDefault()
              _vm.submit()
            }
          }
        },
        [_vm._v("Set Names")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          attrs: { type: "submit" },
          on: {
            click: function($event) {
              $event.preventDefault()
              _vm.close()
            }
          }
        },
        [_vm._v("Cancel")]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/team/js/Console/TeamingEditor.vue?vue&type=template&id=46c1c6ee&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/team/js/Console/TeamingEditor.vue?vue&type=template&id=46c1c6ee& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "cl-teaming-editor" }, [
    _c("div", [
      _c("form", [
        _c("p", [
          _c("label", [
            _vm._v("Tag"),
            _c("br"),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.teaming.tag,
                  expression: "teaming.tag"
                }
              ],
              ref: "tag",
              attrs: { type: "text" },
              domProps: { value: _vm.teaming.tag },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.teaming, "tag", $event.target.value)
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("p", [
          _c("label", [
            _vm._v("Name"),
            _c("br"),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.teaming.name,
                  expression: "teaming.name"
                }
              ],
              attrs: { type: "text" },
              domProps: { value: _vm.teaming.name },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.teaming, "name", $event.target.value)
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "center" }, [
          _c("label", [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.teaming.public,
                  expression: "teaming.public"
                }
              ],
              attrs: { type: "checkbox" },
              domProps: {
                checked: Array.isArray(_vm.teaming.public)
                  ? _vm._i(_vm.teaming.public, null) > -1
                  : _vm.teaming.public
              },
              on: {
                change: function($event) {
                  var $$a = _vm.teaming.public,
                    $$el = $event.target,
                    $$c = $$el.checked ? true : false
                  if (Array.isArray($$a)) {
                    var $$v = null,
                      $$i = _vm._i($$a, $$v)
                    if ($$el.checked) {
                      $$i < 0 &&
                        _vm.$set(_vm.teaming, "public", $$a.concat([$$v]))
                    } else {
                      $$i > -1 &&
                        _vm.$set(
                          _vm.teaming,
                          "public",
                          $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                        )
                    }
                  } else {
                    _vm.$set(_vm.teaming, "public", $$c)
                  }
                }
              }
            }),
            _vm._v(" Public")
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/team/js/Console/TeamingsEditor.vue?vue&type=template&id=e31a2018&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/team/js/Console/TeamingsEditor.vue?vue&type=template&id=e31a2018& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content" }, [
    _vm.teamings !== null
      ? _c("div", { staticClass: "full" }, [
          _vm.teamings.length > 0
            ? _c(
                "table",
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _vm._l(_vm.teamings, function(teaming) {
                    return _c("tr", { key: teaming.id }, [
                      _c("td", [
                        _c(
                          "a",
                          {
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                _vm.editer(teaming)
                              }
                            }
                          },
                          [
                            _c("img", {
                              attrs: {
                                src:
                                  _vm.root + "/vendor/cl/site/img/pencil16.png",
                                alt: "Edit",
                                title: "Edit"
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                _vm.deleter(teaming)
                              }
                            }
                          },
                          [
                            _c("img", {
                              attrs: {
                                src: _vm.root + "/vendor/cl/site/img/x.png",
                                alt: "Delete",
                                title: "Delete"
                              }
                            })
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c(
                            "router-link",
                            {
                              attrs: {
                                to: _vm.root + "/cl/console/team/" + teaming.id
                              }
                            },
                            [_vm._v(_vm._s(teaming.tag))]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(teaming.name))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(teaming.public ? "Public" : "Private"))
                      ])
                    ])
                  })
                ],
                2
              )
            : _c("div", { staticClass: "center" }, [
                _c("p", [_vm._v("There are currently no defined teamings.")]),
                _vm._v(" "),
                _c("p", [_vm._v("Choose Add Teaming to add a new teaming.")])
              ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th"),
      _vm._v(" "),
      _c("th", [_vm._v("Tag")]),
      _vm._v(" "),
      _c("th", [_vm._v("Name")]),
      _vm._v(" "),
      _c("th", [_vm._v("Visibility")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/team/js/Console/TeamsEditor.vue?vue&type=template&id=473c3c5a&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/team/js/Console/TeamsEditor.vue?vue&type=template&id=473c3c5a& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content" }, [
    _vm.teams !== null
      ? _c("div", { staticClass: "full cl-teams-editor" }, [
          _c(
            "table",
            { staticClass: "small" },
            [
              _vm._l(_vm.teams, function(team) {
                return [
                  _c("tr", { key: team.id, staticClass: "cl-internal" }, [
                    _c(
                      "th",
                      { staticClass: "right" },
                      [
                        team.name !== null
                          ? _c("span", [
                              _c(
                                "a",
                                {
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      _vm.editer(team)
                                    }
                                  }
                                },
                                [
                                  _c("img", {
                                    attrs: {
                                      src:
                                        _vm.root +
                                        "/vendor/cl/site/img/pencil16.png",
                                      alt: "Edit",
                                      title: "Edit"
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      _vm.deleter(team)
                                    }
                                  }
                                },
                                [
                                  _c("img", {
                                    attrs: {
                                      src:
                                        _vm.root + "/vendor/cl/site/img/x.png",
                                      alt: "Delete",
                                      title: "Delete"
                                    }
                                  })
                                ]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        team.name === null
                          ? _c(
                              "cl-menu",
                              { attrs: { "add-class": "cl-inline" } },
                              [
                                _c("a", [
                                  _c("img", {
                                    attrs: {
                                      src:
                                        _vm.root +
                                        "/vendor/cl/site/img/menubars.png"
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("ul", [
                                  _c("li", [
                                    _c(
                                      "a",
                                      {
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            _vm.distribute()
                                          }
                                        }
                                      },
                                      [_vm._v("Distribute")]
                                    )
                                  ])
                                ])
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                _vm.toggle(team)
                              }
                            }
                          },
                          [
                            _c("img", {
                              attrs: {
                                src:
                                  _vm.$site.root +
                                  "/vendor/cl/site/img/" +
                                  (_vm.open[team.id] === true
                                    ? "minus.png"
                                    : "plus.png")
                              }
                            })
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("th", {
                      attrs: { colspan: "2" },
                      domProps: { innerHTML: _vm._s(_vm.teamHeading(team)) }
                    }),
                    _vm._v(" "),
                    _c("th", { staticClass: "center" }, [
                      _vm._v(_vm._s(team.members.length))
                    ])
                  ]),
                  _vm._v(" "),
                  _vm.open[team.id] === true
                    ? [
                        team.members.length === 0
                          ? _c("tr", [
                              _c(
                                "td",
                                {
                                  staticClass: "center",
                                  attrs: { colspan: "4" }
                                },
                                [_vm._v("*** empty ***")]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm._l(team.members, function(member) {
                          return _c("tr", [
                            _c(
                              "td",
                              { staticClass: "right" },
                              [
                                _c("cl-menu", [
                                  _c("a", [
                                    _c("img", {
                                      attrs: {
                                        src:
                                          _vm.root +
                                          "/vendor/cl/site/img/menubars.png"
                                      }
                                    })
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "ul",
                                    _vm._l(_vm.teams, function(team1) {
                                      return _c("li", [
                                        _c(
                                          "a",
                                          {
                                            on: {
                                              click: function($event) {
                                                $event.preventDefault()
                                                _vm.move(member, team1)
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                team1.name !== null
                                                  ? team1.name
                                                  : "Unassigned"
                                              )
                                            ),
                                            team === team1
                                              ? _c("img", {
                                                  attrs: {
                                                    src:
                                                      _vm.root +
                                                      "/vendor/cl/site/img/check16.png"
                                                  }
                                                })
                                              : _vm._e()
                                          ]
                                        )
                                      ])
                                    }),
                                    0
                                  )
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "a",
                                { attrs: { href: "mailto:" + member.email } },
                                [_vm._v(_vm._s(member.user))]
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(member.name))]),
                            _vm._v(" "),
                            _c("td")
                          ])
                        })
                      ]
                    : _vm._e()
                ]
              })
            ],
            2
          ),
          _vm._v(" "),
          _c("p", { staticClass: "center" }, [
            _c("em", [_vm._v(_vm._s(_vm.totals))])
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/team/js/Console/TeamingEditor.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/team/js/Console/TeamingEditor.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/lib/loader.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TeamingEditor.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/team/js/Console/TeamingEditor.vue?vue&type=style&index=0&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3988e320", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/lib/loader.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TeamingEditor.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/team/js/Console/TeamingEditor.vue?vue&type=style&index=0&lang=scss&", function() {
     var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/lib/loader.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TeamingEditor.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/team/js/Console/TeamingEditor.vue?vue&type=style&index=0&lang=scss&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/team/js/Console/TeamsEditor.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/team/js/Console/TeamsEditor.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/lib/loader.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TeamsEditor.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/team/js/Console/TeamsEditor.vue?vue&type=style&index=0&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("04b147d2", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/lib/loader.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TeamsEditor.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/team/js/Console/TeamsEditor.vue?vue&type=style&index=0&lang=scss&", function() {
     var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/lib/loader.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TeamsEditor.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/team/js/Console/TeamsEditor.vue?vue&type=style&index=0&lang=scss&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./vendor/cl/console/js/ConsoleComponentBase.vue":
/*!*******************************************************!*\
  !*** ./vendor/cl/console/js/ConsoleComponentBase.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ConsoleComponentBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConsoleComponentBase.vue?vue&type=script&lang=js& */ "./vendor/cl/console/js/ConsoleComponentBase.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _ConsoleComponentBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('69e355a8', component.options)
    } else {
      api.reload('69e355a8', component.options)
    }
    
  }
}
component.options.__file = "vendor/cl/console/js/ConsoleComponentBase.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/console/js/ConsoleComponentBase.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./vendor/cl/console/js/ConsoleComponentBase.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ConsoleComponentBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ConsoleComponentBase.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/console/js/ConsoleComponentBase.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ConsoleComponentBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/course/js/Members/Member.js":
/*!***********************************************!*\
  !*** ./vendor/cl/course/js/Members/Member.js ***!
  \***********************************************/
/*! exports provided: Member */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Member", function() { return Member; });
/* harmony import */ var _users_js_Users_Membership_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../users/js/Users/Membership.js */ "./vendor/cl/users/js/Users/Membership.js");
/**
 * @file Member of a course
 * Attaches to a user Object
 */


var Member = function Member(json) {
  _users_js_Users_Membership_js__WEBPACK_IMPORTED_MODULE_0__["Membership"].call(this);
  var role = 'G';

  if (json !== undefined) {
    this.id = json.id;
    this.semester = json.semester;
    this.section = json.section;
    role = json.role;
  } else {
    this.id = 0; // System membership ID

    this.semester = null; // Semester code

    this.section = null; // Section Id

    role = null; // Membership role
  }

  this.role = function () {
    return role;
  };

  this.setRole = function (role_) {
    role = role_;
  };
};

Member.prototype = Object.create(_users_js_Users_Membership_js__WEBPACK_IMPORTED_MODULE_0__["Membership"].prototype);
Member.prototype.constructor = Member;
/**
 * Get the course section for a member
 * @param store Vuex store
 * @returns {*}
 */

Member.prototype.getSection = function (store) {
  return store.getters['course/section'](this.semester, this.section);
};
/**
 * Get an assignment for a member
 * @param store Vuex store
 * @param assigntag Assignment tag
 */


Member.prototype.getAssignment = function (store, assigntag) {
  var section = this.getSection(store);
  return section.getAssignment(assigntag);
}; // The possible member roles
// Must match values in Member.php


Member.GUEST = 'G'; ///< Guest user visiting the site

Member.USER = 'U'; ///< Standard user from User, don't use for Member

Member.DROPPED = 'D'; ///< User has dropped the course

Member.STUDENT = 'T'; ///< Enrolled student in course

Member.STAFF = 'S'; ///< Any course staff

Member.GRADER = 'R'; ///< Graders

Member.TA = 'E'; ///< Teaching assistant

Member.INSTRUCTOR = 'I'; ///< Course instructor

Member.ADMIN = 'A'; ///< Admin

Member.prototype.getRoles = function () {
  var roles = {};
  roles[Member.GUEST] = {
    name: 'Guest',
    priority: 1
  };
  roles[Member.DROPPED] = {
    name: 'Dropped',
    priority: 2
  };
  roles[Member.USER] = {
    name: 'User',
    priority: 3,
    skip: true
  };
  roles[Member.STUDENT] = {
    name: 'Student',
    priority: 4
  };
  roles[Member.STAFF] = {
    name: 'Staff',
    priority: 5,
    skip: true
  };
  roles[Member.GRADER] = {
    name: 'Grader',
    priority: 6
  };
  roles[Member.TA] = {
    name: 'Teaching Assistant',
    priority: 7
  };
  roles[Member.INSTRUCTOR] = {
    name: 'Instructor',
    priority: 8
  };
  roles[Member.ADMIN] = {
    name: 'Admin',
    priority: 100
  };
  return roles;
};



/***/ }),

/***/ "./vendor/cl/site/js/UI/Menu.vue":
/*!***************************************!*\
  !*** ./vendor/cl/site/js/UI/Menu.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Menu_vue_vue_type_template_id_d4b05102___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu.vue?vue&type=template&id=d4b05102& */ "./vendor/cl/site/js/UI/Menu.vue?vue&type=template&id=d4b05102&");
/* harmony import */ var _Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu.vue?vue&type=script&lang=js& */ "./vendor/cl/site/js/UI/Menu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Menu_vue_vue_type_template_id_d4b05102___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Menu_vue_vue_type_template_id_d4b05102___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('d4b05102', component.options)
    } else {
      api.reload('d4b05102', component.options)
    }
    module.hot.accept(/*! ./Menu.vue?vue&type=template&id=d4b05102& */ "./vendor/cl/site/js/UI/Menu.vue?vue&type=template&id=d4b05102&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Menu_vue_vue_type_template_id_d4b05102___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu.vue?vue&type=template&id=d4b05102& */ "./vendor/cl/site/js/UI/Menu.vue?vue&type=template&id=d4b05102&");
(function () {
      api.rerender('d4b05102', {
        render: _Menu_vue_vue_type_template_id_d4b05102___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Menu_vue_vue_type_template_id_d4b05102___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/site/js/UI/Menu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/site/js/UI/Menu.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./vendor/cl/site/js/UI/Menu.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Menu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/site/js/UI/Menu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/site/js/UI/Menu.vue?vue&type=template&id=d4b05102&":
/*!**********************************************************************!*\
  !*** ./vendor/cl/site/js/UI/Menu.vue?vue&type=template&id=d4b05102& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_d4b05102___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Menu.vue?vue&type=template&id=d4b05102& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/site/js/UI/Menu.vue?vue&type=template&id=d4b05102&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_d4b05102___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_d4b05102___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/site/js/Vue/PageVueBase.vue":
/*!***********************************************!*\
  !*** ./vendor/cl/site/js/Vue/PageVueBase.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageVueBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageVueBase.vue?vue&type=script&lang=js& */ "./vendor/cl/site/js/Vue/PageVueBase.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _PageVueBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('12bbaef8', component.options)
    } else {
      api.reload('12bbaef8', component.options)
    }
    
  }
}
component.options.__file = "vendor/cl/site/js/Vue/PageVueBase.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/site/js/Vue/PageVueBase.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./vendor/cl/site/js/Vue/PageVueBase.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PageVueBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PageVueBase.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/site/js/Vue/PageVueBase.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PageVueBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/site/js/Vue/VueDialog.js":
/*!********************************************!*\
  !*** ./vendor/cl/site/js/Vue/VueDialog.js ***!
  \********************************************/
/*! exports provided: VueDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VueDialog", function() { return VueDialog; });
/* harmony import */ var dialog_cl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dialog-cl */ "./packages/dialog-cl/src/app.modules.js");

/**
 * Dialog box that contains a Vue component
 * @constructor
 */

var VueDialog = function VueDialog(site, config) {
  var vue = null;
  var _data = null;
  var parent = null;
  var configD = {};

  for (var key in config) {
    switch (key) {
      case 'vue':
        vue = config.vue;
        break;

      case 'data':
        _data = config.data;
        break;

      case 'parent':
        parent = config.parent;
        break;

      default:
        // Move these over for the dialog box
        configD[key] = config[key];
        break;
    }
  }

  VueDialog.id++;
  var id = 'cl-dialog-' + VueDialog.id;
  configD.content = "<div id=\"".concat(id, "\"></div>");
  var dialog = new dialog_cl__WEBPACK_IMPORTED_MODULE_0__["default"](configD);
  var template = '<vue';

  for (var _key in _data()) {
    template += " :".concat(_key, "=\"").concat(_key, "\"");
  }

  if (parent !== null) {
    template += " :parent=\"parent\"";
  }

  template += '></vue>'; // Create a Vue inside the dialog box

  new site.Vue({
    el: '#' + id,
    site: site,
    dialog: dialog,
    data: function data() {
      var d = _data();

      if (parent !== null) {
        d.parent = parent;
      }

      return d;
    },
    template: template,
    components: {
      vue: vue
    }
  });
};
VueDialog.id = 0;

/***/ }),

/***/ "./vendor/cl/site/js/Vue/VueDialog.vue":
/*!*********************************************!*\
  !*** ./vendor/cl/site/js/Vue/VueDialog.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VueDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VueDialog.vue?vue&type=script&lang=js& */ "./vendor/cl/site/js/Vue/VueDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _VueDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('2502050a', component.options)
    } else {
      api.reload('2502050a', component.options)
    }
    
  }
}
component.options.__file = "vendor/cl/site/js/Vue/VueDialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/site/js/Vue/VueDialog.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./vendor/cl/site/js/Vue/VueDialog.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VueDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VueDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/site/js/Vue/VueDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VueDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/team/index.js":
/*!*********************************!*\
  !*** ./vendor/cl/team/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_TeamFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/TeamFactory */ "./vendor/cl/team/js/TeamFactory.js");
/* harmony import */ var _js_Console_TeamConsole__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/Console/TeamConsole */ "./vendor/cl/team/js/Console/TeamConsole.js");
/**
 * @file
 * The main Team entry point
 */

 //
// Create the team runtime component
//

_js_TeamFactory__WEBPACK_IMPORTED_MODULE_0__["TeamFactory"].create(Site.Site); //
// Install the console components
//

if (Site.Site.console !== undefined) {
  _js_Console_TeamConsole__WEBPACK_IMPORTED_MODULE_1__["TeamConsole"].setup(Site.Site.console);
}

/***/ }),

/***/ "./vendor/cl/team/js/Console/TeamConsole.js":
/*!**************************************************!*\
  !*** ./vendor/cl/team/js/Console/TeamConsole.js ***!
  \**************************************************/
/*! exports provided: TeamConsole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamConsole", function() { return TeamConsole; });
/* harmony import */ var course_cl_js_Members_Member__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! course-cl/js/Members/Member */ "./vendor/cl/course/js/Members/Member.js");
/* harmony import */ var _TeamingsEditor_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TeamingsEditor.vue */ "./vendor/cl/team/js/Console/TeamingsEditor.vue");
/* harmony import */ var _TeamsEditor_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TeamsEditor.vue */ "./vendor/cl/team/js/Console/TeamsEditor.vue");



/**
 * @file
 * Team system console components
 */

var TeamConsole = function TeamConsole() {};

TeamConsole.setup = function (Console) {
  Console.tables.add({
    title: 'Teams',
    order: 20,
    api: '/api/team/tables'
  });
  var page = {
    title: 'Main',
    route: '',
    order: 1
  };
  Console.components.addOption({
    atLeast: course_cl_js_Members_Member__WEBPACK_IMPORTED_MODULE_0__["Member"].TA,
    page: page,
    section: {
      title: 'Course',
      order: 5
    },
    title: 'Teams',
    order: 10,
    route: '/teams',
    routes: [{
      route: '/teams',
      component: _TeamingsEditor_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
    }]
  });
  Console.components.addRoutes([{
    route: '/team/:id',
    component: _TeamsEditor_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    props: true
  }]);
};

/***/ }),

/***/ "./vendor/cl/team/js/Console/TeamDistributer.vue":
/*!*******************************************************!*\
  !*** ./vendor/cl/team/js/Console/TeamDistributer.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TeamDistributer_vue_vue_type_template_id_51482dab___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TeamDistributer.vue?vue&type=template&id=51482dab& */ "./vendor/cl/team/js/Console/TeamDistributer.vue?vue&type=template&id=51482dab&");
/* harmony import */ var _TeamDistributer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TeamDistributer.vue?vue&type=script&lang=js& */ "./vendor/cl/team/js/Console/TeamDistributer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TeamDistributer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TeamDistributer_vue_vue_type_template_id_51482dab___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TeamDistributer_vue_vue_type_template_id_51482dab___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('51482dab', component.options)
    } else {
      api.reload('51482dab', component.options)
    }
    module.hot.accept(/*! ./TeamDistributer.vue?vue&type=template&id=51482dab& */ "./vendor/cl/team/js/Console/TeamDistributer.vue?vue&type=template&id=51482dab&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _TeamDistributer_vue_vue_type_template_id_51482dab___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TeamDistributer.vue?vue&type=template&id=51482dab& */ "./vendor/cl/team/js/Console/TeamDistributer.vue?vue&type=template&id=51482dab&");
(function () {
      api.rerender('51482dab', {
        render: _TeamDistributer_vue_vue_type_template_id_51482dab___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _TeamDistributer_vue_vue_type_template_id_51482dab___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/team/js/Console/TeamDistributer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/team/js/Console/TeamDistributer.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./vendor/cl/team/js/Console/TeamDistributer.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamDistributer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TeamDistributer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/team/js/Console/TeamDistributer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamDistributer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/team/js/Console/TeamDistributer.vue?vue&type=template&id=51482dab&":
/*!**************************************************************************************!*\
  !*** ./vendor/cl/team/js/Console/TeamDistributer.vue?vue&type=template&id=51482dab& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamDistributer_vue_vue_type_template_id_51482dab___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TeamDistributer.vue?vue&type=template&id=51482dab& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/team/js/Console/TeamDistributer.vue?vue&type=template&id=51482dab&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamDistributer_vue_vue_type_template_id_51482dab___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamDistributer_vue_vue_type_template_id_51482dab___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/team/js/Console/TeamEditor.vue":
/*!**************************************************!*\
  !*** ./vendor/cl/team/js/Console/TeamEditor.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TeamEditor_vue_vue_type_template_id_2ce7ab63___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TeamEditor.vue?vue&type=template&id=2ce7ab63& */ "./vendor/cl/team/js/Console/TeamEditor.vue?vue&type=template&id=2ce7ab63&");
/* harmony import */ var _TeamEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TeamEditor.vue?vue&type=script&lang=js& */ "./vendor/cl/team/js/Console/TeamEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TeamEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TeamEditor_vue_vue_type_template_id_2ce7ab63___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TeamEditor_vue_vue_type_template_id_2ce7ab63___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('2ce7ab63', component.options)
    } else {
      api.reload('2ce7ab63', component.options)
    }
    module.hot.accept(/*! ./TeamEditor.vue?vue&type=template&id=2ce7ab63& */ "./vendor/cl/team/js/Console/TeamEditor.vue?vue&type=template&id=2ce7ab63&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _TeamEditor_vue_vue_type_template_id_2ce7ab63___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TeamEditor.vue?vue&type=template&id=2ce7ab63& */ "./vendor/cl/team/js/Console/TeamEditor.vue?vue&type=template&id=2ce7ab63&");
(function () {
      api.rerender('2ce7ab63', {
        render: _TeamEditor_vue_vue_type_template_id_2ce7ab63___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _TeamEditor_vue_vue_type_template_id_2ce7ab63___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/team/js/Console/TeamEditor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/team/js/Console/TeamEditor.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./vendor/cl/team/js/Console/TeamEditor.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TeamEditor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/team/js/Console/TeamEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/team/js/Console/TeamEditor.vue?vue&type=template&id=2ce7ab63&":
/*!*********************************************************************************!*\
  !*** ./vendor/cl/team/js/Console/TeamEditor.vue?vue&type=template&id=2ce7ab63& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamEditor_vue_vue_type_template_id_2ce7ab63___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TeamEditor.vue?vue&type=template&id=2ce7ab63& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/team/js/Console/TeamEditor.vue?vue&type=template&id=2ce7ab63&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamEditor_vue_vue_type_template_id_2ce7ab63___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamEditor_vue_vue_type_template_id_2ce7ab63___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/team/js/Console/TeamNameLoader.vue":
/*!******************************************************!*\
  !*** ./vendor/cl/team/js/Console/TeamNameLoader.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TeamNameLoader_vue_vue_type_template_id_1784bcf4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TeamNameLoader.vue?vue&type=template&id=1784bcf4& */ "./vendor/cl/team/js/Console/TeamNameLoader.vue?vue&type=template&id=1784bcf4&");
/* harmony import */ var _TeamNameLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TeamNameLoader.vue?vue&type=script&lang=js& */ "./vendor/cl/team/js/Console/TeamNameLoader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TeamNameLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TeamNameLoader_vue_vue_type_template_id_1784bcf4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TeamNameLoader_vue_vue_type_template_id_1784bcf4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('1784bcf4', component.options)
    } else {
      api.reload('1784bcf4', component.options)
    }
    module.hot.accept(/*! ./TeamNameLoader.vue?vue&type=template&id=1784bcf4& */ "./vendor/cl/team/js/Console/TeamNameLoader.vue?vue&type=template&id=1784bcf4&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _TeamNameLoader_vue_vue_type_template_id_1784bcf4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TeamNameLoader.vue?vue&type=template&id=1784bcf4& */ "./vendor/cl/team/js/Console/TeamNameLoader.vue?vue&type=template&id=1784bcf4&");
(function () {
      api.rerender('1784bcf4', {
        render: _TeamNameLoader_vue_vue_type_template_id_1784bcf4___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _TeamNameLoader_vue_vue_type_template_id_1784bcf4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/team/js/Console/TeamNameLoader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/team/js/Console/TeamNameLoader.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./vendor/cl/team/js/Console/TeamNameLoader.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamNameLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TeamNameLoader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/team/js/Console/TeamNameLoader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamNameLoader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/team/js/Console/TeamNameLoader.vue?vue&type=template&id=1784bcf4&":
/*!*************************************************************************************!*\
  !*** ./vendor/cl/team/js/Console/TeamNameLoader.vue?vue&type=template&id=1784bcf4& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamNameLoader_vue_vue_type_template_id_1784bcf4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TeamNameLoader.vue?vue&type=template&id=1784bcf4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/team/js/Console/TeamNameLoader.vue?vue&type=template&id=1784bcf4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamNameLoader_vue_vue_type_template_id_1784bcf4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamNameLoader_vue_vue_type_template_id_1784bcf4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/team/js/Console/TeamingEditor.vue":
/*!*****************************************************!*\
  !*** ./vendor/cl/team/js/Console/TeamingEditor.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TeamingEditor_vue_vue_type_template_id_46c1c6ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TeamingEditor.vue?vue&type=template&id=46c1c6ee& */ "./vendor/cl/team/js/Console/TeamingEditor.vue?vue&type=template&id=46c1c6ee&");
/* harmony import */ var _TeamingEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TeamingEditor.vue?vue&type=script&lang=js& */ "./vendor/cl/team/js/Console/TeamingEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TeamingEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TeamingEditor.vue?vue&type=style&index=0&lang=scss& */ "./vendor/cl/team/js/Console/TeamingEditor.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TeamingEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TeamingEditor_vue_vue_type_template_id_46c1c6ee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TeamingEditor_vue_vue_type_template_id_46c1c6ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('46c1c6ee', component.options)
    } else {
      api.reload('46c1c6ee', component.options)
    }
    module.hot.accept(/*! ./TeamingEditor.vue?vue&type=template&id=46c1c6ee& */ "./vendor/cl/team/js/Console/TeamingEditor.vue?vue&type=template&id=46c1c6ee&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _TeamingEditor_vue_vue_type_template_id_46c1c6ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TeamingEditor.vue?vue&type=template&id=46c1c6ee& */ "./vendor/cl/team/js/Console/TeamingEditor.vue?vue&type=template&id=46c1c6ee&");
(function () {
      api.rerender('46c1c6ee', {
        render: _TeamingEditor_vue_vue_type_template_id_46c1c6ee___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _TeamingEditor_vue_vue_type_template_id_46c1c6ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/team/js/Console/TeamingEditor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/team/js/Console/TeamingEditor.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./vendor/cl/team/js/Console/TeamingEditor.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamingEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TeamingEditor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/team/js/Console/TeamingEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamingEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/team/js/Console/TeamingEditor.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************!*\
  !*** ./vendor/cl/team/js/Console/TeamingEditor.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamingEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/lib/loader.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TeamingEditor.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/team/js/Console/TeamingEditor.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamingEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamingEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamingEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamingEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamingEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./vendor/cl/team/js/Console/TeamingEditor.vue?vue&type=template&id=46c1c6ee&":
/*!************************************************************************************!*\
  !*** ./vendor/cl/team/js/Console/TeamingEditor.vue?vue&type=template&id=46c1c6ee& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamingEditor_vue_vue_type_template_id_46c1c6ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TeamingEditor.vue?vue&type=template&id=46c1c6ee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/team/js/Console/TeamingEditor.vue?vue&type=template&id=46c1c6ee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamingEditor_vue_vue_type_template_id_46c1c6ee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamingEditor_vue_vue_type_template_id_46c1c6ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/team/js/Console/TeamingsEditor.vue":
/*!******************************************************!*\
  !*** ./vendor/cl/team/js/Console/TeamingsEditor.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TeamingsEditor_vue_vue_type_template_id_e31a2018___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TeamingsEditor.vue?vue&type=template&id=e31a2018& */ "./vendor/cl/team/js/Console/TeamingsEditor.vue?vue&type=template&id=e31a2018&");
/* harmony import */ var _TeamingsEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TeamingsEditor.vue?vue&type=script&lang=js& */ "./vendor/cl/team/js/Console/TeamingsEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TeamingsEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TeamingsEditor_vue_vue_type_template_id_e31a2018___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TeamingsEditor_vue_vue_type_template_id_e31a2018___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('e31a2018', component.options)
    } else {
      api.reload('e31a2018', component.options)
    }
    module.hot.accept(/*! ./TeamingsEditor.vue?vue&type=template&id=e31a2018& */ "./vendor/cl/team/js/Console/TeamingsEditor.vue?vue&type=template&id=e31a2018&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _TeamingsEditor_vue_vue_type_template_id_e31a2018___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TeamingsEditor.vue?vue&type=template&id=e31a2018& */ "./vendor/cl/team/js/Console/TeamingsEditor.vue?vue&type=template&id=e31a2018&");
(function () {
      api.rerender('e31a2018', {
        render: _TeamingsEditor_vue_vue_type_template_id_e31a2018___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _TeamingsEditor_vue_vue_type_template_id_e31a2018___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/team/js/Console/TeamingsEditor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/team/js/Console/TeamingsEditor.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./vendor/cl/team/js/Console/TeamingsEditor.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamingsEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TeamingsEditor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/team/js/Console/TeamingsEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamingsEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/team/js/Console/TeamingsEditor.vue?vue&type=template&id=e31a2018&":
/*!*************************************************************************************!*\
  !*** ./vendor/cl/team/js/Console/TeamingsEditor.vue?vue&type=template&id=e31a2018& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamingsEditor_vue_vue_type_template_id_e31a2018___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TeamingsEditor.vue?vue&type=template&id=e31a2018& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/team/js/Console/TeamingsEditor.vue?vue&type=template&id=e31a2018&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamingsEditor_vue_vue_type_template_id_e31a2018___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamingsEditor_vue_vue_type_template_id_e31a2018___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/team/js/Console/TeamsEditor.vue":
/*!***************************************************!*\
  !*** ./vendor/cl/team/js/Console/TeamsEditor.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TeamsEditor_vue_vue_type_template_id_473c3c5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TeamsEditor.vue?vue&type=template&id=473c3c5a& */ "./vendor/cl/team/js/Console/TeamsEditor.vue?vue&type=template&id=473c3c5a&");
/* harmony import */ var _TeamsEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TeamsEditor.vue?vue&type=script&lang=js& */ "./vendor/cl/team/js/Console/TeamsEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TeamsEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TeamsEditor.vue?vue&type=style&index=0&lang=scss& */ "./vendor/cl/team/js/Console/TeamsEditor.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TeamsEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TeamsEditor_vue_vue_type_template_id_473c3c5a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TeamsEditor_vue_vue_type_template_id_473c3c5a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('473c3c5a', component.options)
    } else {
      api.reload('473c3c5a', component.options)
    }
    module.hot.accept(/*! ./TeamsEditor.vue?vue&type=template&id=473c3c5a& */ "./vendor/cl/team/js/Console/TeamsEditor.vue?vue&type=template&id=473c3c5a&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _TeamsEditor_vue_vue_type_template_id_473c3c5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TeamsEditor.vue?vue&type=template&id=473c3c5a& */ "./vendor/cl/team/js/Console/TeamsEditor.vue?vue&type=template&id=473c3c5a&");
(function () {
      api.rerender('473c3c5a', {
        render: _TeamsEditor_vue_vue_type_template_id_473c3c5a___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _TeamsEditor_vue_vue_type_template_id_473c3c5a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/team/js/Console/TeamsEditor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/team/js/Console/TeamsEditor.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./vendor/cl/team/js/Console/TeamsEditor.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamsEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TeamsEditor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/team/js/Console/TeamsEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamsEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/team/js/Console/TeamsEditor.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************!*\
  !*** ./vendor/cl/team/js/Console/TeamsEditor.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamsEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/lib/loader.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TeamsEditor.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/team/js/Console/TeamsEditor.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamsEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamsEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamsEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamsEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamsEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./vendor/cl/team/js/Console/TeamsEditor.vue?vue&type=template&id=473c3c5a&":
/*!**********************************************************************************!*\
  !*** ./vendor/cl/team/js/Console/TeamsEditor.vue?vue&type=template&id=473c3c5a& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamsEditor_vue_vue_type_template_id_473c3c5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TeamsEditor.vue?vue&type=template&id=473c3c5a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/team/js/Console/TeamsEditor.vue?vue&type=template&id=473c3c5a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamsEditor_vue_vue_type_template_id_473c3c5a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TeamsEditor_vue_vue_type_template_id_473c3c5a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/team/js/Team.js":
/*!***********************************!*\
  !*** ./vendor/cl/team/js/Team.js ***!
  \***********************************/
/*! exports provided: Team */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Team", function() { return Team; });
var Team = function Team(data) {
  if (data !== undefined) {
    this.name = data.name;
    this.id = data.id;
    this.members = data.members;
  } else {
    this.name = '';
    this.id = 0;
    this.members = [];
  }

  this.clone = function () {
    return new Team(this);
  };
};

/***/ }),

/***/ "./vendor/cl/team/js/TeamFactory.js":
/*!******************************************!*\
  !*** ./vendor/cl/team/js/TeamFactory.js ***!
  \******************************************/
/*! exports provided: TeamFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamFactory", function() { return TeamFactory; });
/* harmony import */ var _Team__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Team */ "./vendor/cl/team/js/Team.js");

var TeamFactory = function TeamFactory() {};

TeamFactory.create = function (site) {
  new _Team__WEBPACK_IMPORTED_MODULE_0__["Team"](site);
};

/***/ }),

/***/ "./vendor/cl/team/js/Teaming.js":
/*!**************************************!*\
  !*** ./vendor/cl/team/js/Teaming.js ***!
  \**************************************/
/*! exports provided: Teaming */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Teaming", function() { return Teaming; });
/**
 * Object the represents a teaming
 * @param data
 * @constructor
 */
var Teaming = function Teaming(data) {
  if (data !== undefined) {
    this.id = data.id;
    this.tag = data.tag;
    this.name = data.name;
    this.public = data.public;
  } else {
    this.id = 0;
    this.tag = '';
    this.name = '';
    this.public = true;
  }

  this.clone = function () {
    return new Teaming(this);
  };
};

/***/ }),

/***/ "./vendor/cl/users/js/Users/Membership.js":
/*!************************************************!*\
  !*** ./vendor/cl/users/js/Users/Membership.js ***!
  \************************************************/
/*! exports provided: Membership */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Membership", function() { return Membership; });
/**
 * @file
 * A membership associated with a user.
 *
 * This is a base object that will be inherited by
 * actual membership objects.
 */
var Membership = function Membership() {
  /// The User object for this membership
  this.user = null;
};



/***/ }),

/***/ "./vendor/cl/users/js/Vue/UserVueBase.vue":
/*!************************************************!*\
  !*** ./vendor/cl/users/js/Vue/UserVueBase.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserVueBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserVueBase.vue?vue&type=script&lang=js& */ "./vendor/cl/users/js/Vue/UserVueBase.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _UserVueBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('c7e4e49e', component.options)
    } else {
      api.reload('c7e4e49e', component.options)
    }
    
  }
}
component.options.__file = "vendor/cl/users/js/Vue/UserVueBase.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/users/js/Vue/UserVueBase.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./vendor/cl/users/js/Vue/UserVueBase.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserVueBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserVueBase.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/users/js/Vue/UserVueBase.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserVueBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

},[["./vendor/cl/team/index.js","runtime","vendor"]]]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvY29uc29sZS9qcy9Db25zb2xlQ29tcG9uZW50QmFzZS52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9zaXRlL2pzL1VJL01lbnUudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvc2l0ZS9qcy9WdWUvUGFnZVZ1ZUJhc2UudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvc2l0ZS9qcy9WdWUvVnVlRGlhbG9nLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL3RlYW0vanMvQ29uc29sZS9UZWFtRGlzdHJpYnV0ZXIudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvdGVhbS9qcy9Db25zb2xlL1RlYW1FZGl0b3IudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvdGVhbS9qcy9Db25zb2xlL1RlYW1OYW1lTG9hZGVyLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL3RlYW0vanMvQ29uc29sZS9UZWFtaW5nRWRpdG9yLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL3RlYW0vanMvQ29uc29sZS9UZWFtaW5nc0VkaXRvci52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC90ZWFtL2pzL0NvbnNvbGUvVGVhbXNFZGl0b3IudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvdXNlcnMvanMvVnVlL1VzZXJWdWVCYXNlLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdGVhbS9qcy9Db25zb2xlL1RlYW1pbmdFZGl0b3IudnVlPzUwZjUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3RlYW0vanMvQ29uc29sZS9UZWFtc0VkaXRvci52dWU/YjdlNCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvc2l0ZS9qcy9VSS9NZW51LnZ1ZT85ZjJhIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC90ZWFtL2pzL0NvbnNvbGUvVGVhbURpc3RyaWJ1dGVyLnZ1ZT8yZDlmIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC90ZWFtL2pzL0NvbnNvbGUvVGVhbUVkaXRvci52dWU/NjQ4NCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdGVhbS9qcy9Db25zb2xlL1RlYW1OYW1lTG9hZGVyLnZ1ZT9jM2NlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC90ZWFtL2pzL0NvbnNvbGUvVGVhbWluZ0VkaXRvci52dWU/N2E5OCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdGVhbS9qcy9Db25zb2xlL1RlYW1pbmdzRWRpdG9yLnZ1ZT9mZmM1Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC90ZWFtL2pzL0NvbnNvbGUvVGVhbXNFZGl0b3IudnVlPzMzOWMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3RlYW0vanMvQ29uc29sZS9UZWFtaW5nRWRpdG9yLnZ1ZT9iYzZhIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC90ZWFtL2pzL0NvbnNvbGUvVGVhbXNFZGl0b3IudnVlPzA1NWEiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvQ29uc29sZUNvbXBvbmVudEJhc2UudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL0NvbnNvbGVDb21wb25lbnRCYXNlLnZ1ZT84OGQxIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvTWVtYmVycy9NZW1iZXIuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3NpdGUvanMvVUkvTWVudS52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3NpdGUvanMvVUkvTWVudS52dWU/YmQ5NiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvc2l0ZS9qcy9VSS9NZW51LnZ1ZT8wYTk3Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9zaXRlL2pzL1Z1ZS9QYWdlVnVlQmFzZS52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3NpdGUvanMvVnVlL1BhZ2VWdWVCYXNlLnZ1ZT8xMThhIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9zaXRlL2pzL1Z1ZS9WdWVEaWFsb2cuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3NpdGUvanMvVnVlL1Z1ZURpYWxvZy52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3NpdGUvanMvVnVlL1Z1ZURpYWxvZy52dWU/NDZiMiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdGVhbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdGVhbS9qcy9Db25zb2xlL1RlYW1Db25zb2xlLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC90ZWFtL2pzL0NvbnNvbGUvVGVhbURpc3RyaWJ1dGVyLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdGVhbS9qcy9Db25zb2xlL1RlYW1EaXN0cmlidXRlci52dWU/MWIwOCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdGVhbS9qcy9Db25zb2xlL1RlYW1EaXN0cmlidXRlci52dWU/NmQ5YSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdGVhbS9qcy9Db25zb2xlL1RlYW1FZGl0b3IudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC90ZWFtL2pzL0NvbnNvbGUvVGVhbUVkaXRvci52dWU/MGU4YSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdGVhbS9qcy9Db25zb2xlL1RlYW1FZGl0b3IudnVlPzU3NTMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3RlYW0vanMvQ29uc29sZS9UZWFtTmFtZUxvYWRlci52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3RlYW0vanMvQ29uc29sZS9UZWFtTmFtZUxvYWRlci52dWU/ZjdlZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdGVhbS9qcy9Db25zb2xlL1RlYW1OYW1lTG9hZGVyLnZ1ZT9hM2RkIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC90ZWFtL2pzL0NvbnNvbGUvVGVhbWluZ0VkaXRvci52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3RlYW0vanMvQ29uc29sZS9UZWFtaW5nRWRpdG9yLnZ1ZT9hZDRkIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC90ZWFtL2pzL0NvbnNvbGUvVGVhbWluZ0VkaXRvci52dWU/MTAyZCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdGVhbS9qcy9Db25zb2xlL1RlYW1pbmdFZGl0b3IudnVlPzUwMWMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3RlYW0vanMvQ29uc29sZS9UZWFtaW5nc0VkaXRvci52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3RlYW0vanMvQ29uc29sZS9UZWFtaW5nc0VkaXRvci52dWU/Mzc5MyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdGVhbS9qcy9Db25zb2xlL1RlYW1pbmdzRWRpdG9yLnZ1ZT83YzdmIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC90ZWFtL2pzL0NvbnNvbGUvVGVhbXNFZGl0b3IudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC90ZWFtL2pzL0NvbnNvbGUvVGVhbXNFZGl0b3IudnVlP2JhNTYiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3RlYW0vanMvQ29uc29sZS9UZWFtc0VkaXRvci52dWU/ODQ1YyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdGVhbS9qcy9Db25zb2xlL1RlYW1zRWRpdG9yLnZ1ZT83Y2ZhIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC90ZWFtL2pzL1RlYW0uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3RlYW0vanMvVGVhbUZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3RlYW0vanMvVGVhbWluZy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdXNlcnMvanMvVXNlcnMvTWVtYmVyc2hpcC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdXNlcnMvanMvVnVlL1VzZXJWdWVCYXNlLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdXNlcnMvanMvVnVlL1VzZXJWdWVCYXNlLnZ1ZT9iNmUxIl0sIm5hbWVzIjpbIk1lbWJlciIsImpzb24iLCJNZW1iZXJzaGlwIiwiY2FsbCIsInJvbGUiLCJ1bmRlZmluZWQiLCJpZCIsInNlbWVzdGVyIiwic2VjdGlvbiIsInNldFJvbGUiLCJyb2xlXyIsInByb3RvdHlwZSIsIk9iamVjdCIsImNyZWF0ZSIsImNvbnN0cnVjdG9yIiwiZ2V0U2VjdGlvbiIsInN0b3JlIiwiZ2V0dGVycyIsImdldEFzc2lnbm1lbnQiLCJhc3NpZ250YWciLCJHVUVTVCIsIlVTRVIiLCJEUk9QUEVEIiwiU1RVREVOVCIsIlNUQUZGIiwiR1JBREVSIiwiVEEiLCJJTlNUUlVDVE9SIiwiQURNSU4iLCJnZXRSb2xlcyIsInJvbGVzIiwibmFtZSIsInByaW9yaXR5Iiwic2tpcCIsIlZ1ZURpYWxvZyIsInNpdGUiLCJjb25maWciLCJ2dWUiLCJkYXRhIiwicGFyZW50IiwiY29uZmlnRCIsImtleSIsImNvbnRlbnQiLCJkaWFsb2ciLCJEaWFsb2ciLCJ0ZW1wbGF0ZSIsIlZ1ZSIsImVsIiwiZCIsImNvbXBvbmVudHMiLCJUZWFtRmFjdG9yeSIsIlNpdGUiLCJjb25zb2xlIiwiVGVhbUNvbnNvbGUiLCJzZXR1cCIsIkNvbnNvbGUiLCJ0YWJsZXMiLCJhZGQiLCJ0aXRsZSIsIm9yZGVyIiwiYXBpIiwicGFnZSIsInJvdXRlIiwiYWRkT3B0aW9uIiwiYXRMZWFzdCIsInJvdXRlcyIsImNvbXBvbmVudCIsIlRlYW1pbmdzRWRpdG9yVnVlIiwiYWRkUm91dGVzIiwiVGVhbXNFZGl0b3JWdWUiLCJwcm9wcyIsIlRlYW0iLCJtZW1iZXJzIiwiY2xvbmUiLCJUZWFtaW5nIiwidGFnIiwicHVibGljIiwidXNlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFFQTtBQUNBLG9GQURBO0FBRUE7QUFDQTs7Ozs7O0FBTUEsV0FQQSxtQkFPQSxLQVBBLEVBT0EsS0FQQSxFQU9BLE9BUEEsRUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBWEE7O0FBYUE7Ozs7OztBQU1BLGVBbkJBLHVCQW1CQSxLQW5CQSxFQW1CQSxLQW5CQSxFQW1CQSxJQW5CQSxFQW1CQTtBQUFBOztBQUNBO0FBQ0E7QUFDQSxPQUZBO0FBR0EsS0F2QkE7QUF5QkEsY0F6QkEsc0JBeUJBLElBekJBLEVBeUJBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFoQ0EsR0FGQTtBQW9DQSxTQXBDQSxxQkFvQ0E7QUFDQTtBQUNBLEdBdENBO0FBdUNBLGVBdkNBLDJCQXVDQTtBQUNBO0FBQ0E7QUF6Q0EsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQTtBQUNBLHFCQURBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQSxHQU5BO0FBT0EsU0FQQSxxQkFPQTtBQUFBOztBQUNBO0FBQ0E7QUFDQSxLQUhBLENBS0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQUFBO0FBQUE7O0FBQUE7QUFZQTtBQUFBOztBQUNBO0FBQ0E7QUFDQSxTQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFsQkE7QUFBQTtBQUFBO0FB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O0FBQ0EsU0FBSzZDLE1BQUwsR0FBY3RDLElBQUksQ0FBQ3NDLE1BQW5CO0FBQ0EsR0FMRCxNQUtPO0FBQ04sU0FBS3RFLEVBQUwsR0FBVSxDQUFWO0FBQ0EsU0FBS3FFLEdBQUwsR0FBVyxFQUFYO0FBQ0EsU0FBSzVDLElBQUwsR0FBWSxFQUFaO0FBQ0EsU0FBSzZDLE1BQUwsR0FBYyxJQUFkO0FBQ0E7O0FBRUQsT0FBS0gsS0FBTCxHQUFhLFlBQVc7QUFDdkIsV0FBTyxJQUFJQyxPQUFKLENBQVksSUFBWixDQUFQO0FBQ0EsR0FGRDtBQUdBLENBaEJNLEM7Ozs7Ozs7Ozs7OztBQ0xQO0FBQUE7QUFBQTs7Ozs7OztBQVFBLElBQUl4RSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFXO0FBRXhCO0FBQ0EsT0FBSzJFLElBQUwsR0FBWSxJQUFaO0FBQ0gsQ0FKRDs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUMrRDtBQUNMOzs7QUFHMUQ7QUFDbUc7QUFDbkcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsaUZBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLElBQVU7QUFDZCxZQUFZLG1CQUFPLENBQUMsd0dBQXFHO0FBQ3pILGNBQWMsbUJBQU8sQ0FBQywrQ0FBSztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUNqQ2Y7QUFBQTtBQUFBLHdDQUFxTSxDQUFnQixxUEFBRyxFQUFDLEMiLCJmaWxlIjoidGVhbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlRlYW1cIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiVGVhbVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiPCEtLVxyXG5AZmlsZVxyXG5CYXNlIGNvbXBvbmVudCBmb3IgY29uc29sZSBwYWdlcy5cclxuXHJcblByb3ZpZGVzOlxyXG5uYXYyIG1lbnUgc3VwcG9ydCB3aXRoIGF1dG9tYXRpYyByZW1vdmFsLlxyXG4tLT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgVXNlclZ1ZUJhc2UgZnJvbSAndXNlcnMtY2wvanMvVnVlL1VzZXJWdWVCYXNlLnZ1ZSc7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAnZXh0ZW5kcyc6IFVzZXJWdWVCYXNlLFxyXG4gICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAvKipcclxuICAgICAgICAgICAqIEFkZCBhbiBvcHRpb24gdG8gdGhlIG5hdjIgbWVudS5cclxuICAgICAgICAgICAqIEBwYXJhbSB0aXRsZSBUaXRsZSBvZiB0aGUgb3B0aW9uIHRvIGFkZC5cclxuICAgICAgICAgICAqIEBwYXJhbSBvcmRlciBPcmRlciBpbiB0aGUgbWVudS5cclxuICAgICAgICAgICAqIEBwYXJhbSBjbG9zdXJlIEZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBzZWxlY3RlZC5cclxuICAgICAgICAgICAqL1xyXG4gICAgICAgICAgYWRkTmF2Mih0aXRsZSwgb3JkZXIsIGNsb3N1cmUpIHtcclxuICAgICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy4kc2l0ZS5jb25zb2xlLmNvbXBvbmVudHMuYWRkTmF2MkxpbmsodGhpcywgdGl0bGUsIG9yZGVyLCBjbG9zdXJlKTtcclxuICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudHMxLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICogQWRkIGFuIG9wdGlvbiB0byB0aGUgbmF2MiBtZW51IHRoYXQgaXMgYSByb3V0ZXIgbGlua1xyXG4gICAgICAgICAgICogQHBhcmFtIHRpdGxlIFRpdGxlIG9mIHRoZSBvcHRpb24gdG8gYWRkLlxyXG4gICAgICAgICAgICogQHBhcmFtIG9yZGVyIE9yZGVyIGluIHRoZSBtZW51LlxyXG4gICAgICAgICAgICogQHBhcmFtIGxpbmsgTGluayB3aXRob3V0IFNpdGUucm9vdFxyXG4gICAgICAgICAgICovXHJcbiAgICAgICAgICBhZGROYXYyTGluayh0aXRsZSwgb3JkZXIsIGxpbmspIHtcclxuICAgICAgICAgICAgICB0aGlzLmFkZE5hdjIodGl0bGUsIG9yZGVyLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKFNpdGUucm9vdCArIGxpbmspO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICByZW1vdmVOYXYyKGl0ZW0pIHtcclxuICAgICAgICAgICAgICBsZXQgaSA9IHRoaXMuY29tcG9uZW50czEuaW5kZXhPZihpdGVtKTtcclxuICAgICAgICAgICAgICBpZihpID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzMS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuXHQgICAgICAgICAgdGhpcy4kc2l0ZS5jb25zb2xlLmNvbXBvbmVudHMucmVtb3ZlTmF2Mih0aGlzLCBpdGVtKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgY3JlYXRlZCgpIHtcclxuICAgICAgXHR0aGlzLmNvbXBvbmVudHMxID0gW107XHJcbiAgICAgIH0sXHJcbiAgICAgIGJlZm9yZURlc3Ryb3koKSB7XHJcbiAgICAgIFx0dGhpcy4kc2l0ZS5jb25zb2xlLmNvbXBvbmVudHMucmVtb3ZlTmF2Mih0aGlzLCB0aGlzLmNvbXBvbmVudHMxKTtcclxuICAgICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IHJlZj1cIm1lbnVcIiA6Y2xhc3M9XCJ1c2VDbGFzc1wiPlxyXG4gICAgPHNsb3Q+PC9zbG90PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhbC1wdXJwb3NlIG1lbnUgc3lzdGVtIFZ1ZSBjb21wb25lbnQuXHJcbiAgICAgKlxyXG4gICAgICogU3VwcG9ydHMgc2ltcGxlIG1lbnVzIHdoZXJlIGEgY2xpY2sgb3BlbnMgYW5kIGNsb3NlcyBhIHB1bGwtZG93biBtZW51LlxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIC8vIEluY2x1ZGUgdGhpcyBjb21wb25lbnRcclxuICAgICAqIGltcG9ydCBNZW51VnVlIGZyb20gJ3NpdGUtY2wvanMvVUkvTWVudS52dWUnO1xyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIC8vIEFkZCBhcyBhIGNvbXBvbmVudCB0byB0aGUgVnVlOlxyXG4gICAgICogY29tcG9uZW50czoge1xyXG4gICAgICogICBtZW51VnVlOiBNZW51VnVlXHJcbiAgICAgKiB9LFxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIC8vIFVzZSBpbiB0aGUgdGVtcGxhdGVcclxuICAgICAqIDxtZW51LXZ1ZSB2LW9uOm9wZW49XCJzZWxlY3RcIj48YSBjbGFzcz1cImZsb2F0LXJpZ2h0XCI+PGltZyA6c3JjPVwicm9vdCArICcvdmVuZG9yL2NsL3NpdGUvaW1nL21lbnViYXJzLnBuZydcIiBhbHQ9XCJNZW51XCI+PC9hPlxyXG4gICAgICogICA8dWw+XHJcbiAgICAgKiAgICAgPGxpPjxhPkZpcnN0IG9wdGlvbjwvYT48L2xpPlxyXG4gICAgICogICAgIDxsaT48YT5TZWNvbmQgb3B0aW9uPC9hPjwvbGk+XHJcbiAgICAgKiAgIDwvdWw+XHJcbiAgICAgKiA8L21lbnUtdnVlPlxyXG4gICAgICogQGNvbnN0cnVjdG9yIE1lbnVWdWVcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgXHQgIHByb3BzOiBbJ2FkZENsYXNzJ10sXHJcbiAgICAgICAgZGF0YTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBcdHVzZUNsYXNzOiAnY2wtbWVudSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91bnRlZCgpIHtcclxuICAgIFx0ICBcdCAgaWYodGhpcy5hZGRDbGFzcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBcdCAgXHRcdCAgdGhpcy51c2VDbGFzcyArPSAnICcgKyB0aGlzLmFkZENsYXNzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBDb2xsZWN0IHVwIHRoZSBlbGVtZW50c1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBsZXQgbGlua3MgPSBbXTtcclxuICAgICAgICAgICAgbGV0IHVscyA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgb3BlbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy4kcmVmc1snbWVudSddLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQudGFnTmFtZSA9PT0gJ0EnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlua3MucHVzaChjaGlsZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNoaWxkLnRhZ05hbWUgPT09ICdVTCcpIHtcclxuICAgICAgICAgICAgICAgICAgICB1bHMucHVzaChjaGlsZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBjbG9zZUxpc3RlbmVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBEaWQgd2UgY2xpY2sgb24gc29tZXRoaW5nIHRoYXQgaXMgYSBjaGlsZCBvZlxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBtZW51IGRpdj9cclxuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIGFyZSBva2F5IHdpdGggY2xpY2tzIG9uIGNoaWxkcmVuIG9mXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHBvcC11cCBtZW51XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVscy5pbmRleE9mKGVsZW1lbnQpID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCA9PT0gdGhpcy4kcmVmc1snbWVudSddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICB9IHdoaWxlIChlbGVtZW50ICE9PSBudWxsKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjbG9zZUFsbCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBDbG9zZSBhbGwgbWVudXNcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgbGV0IGNsb3NlQWxsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gVGhpcyB0aW1lb3V0IGVuc3VyZXMgdGhlIGNsaWNrIG9uXHJcbiAgICAgICAgICAgICAgICAvLyB0aGUgbWVudSBpcyBwcm9jZXNzZWQgYmVmb3JlIHRoZSBtZW51XHJcbiAgICAgICAgICAgICAgICAvLyBpcyBoaWRkZW4uXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB1bCBvZiB1bHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCAyMDApO1xyXG5cclxuICAgICAgICAgICAgICAgIG9wZW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTGlzdGVuZXIpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2xvc2VMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIENsaWNrIGxpc3RlbmVycyBvbiB0aGUgbGlua3NcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgZm9yIChsZXQgbGluayBvZiBsaW5rcykge1xyXG4gICAgICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIGhhdmUgY2xpY2tlZCBvbiBhIG1lbnUgbGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghb3Blbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPcGVuIHRoZSBtZW51IVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgdWwgb2YgdWxzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUxpc3RlbmVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2xvc2VMaXN0ZW5lcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdvcGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2xvc2UgdGhlIG1lbnVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VBbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuPC9zY3JpcHQ+IiwiPHNjcmlwdD5cclxuXHQvKipcclxuICAgKiBCYXNlIGNvbXBvbmVudCBmb3IgcGFnZXMuXHJcbiAgICogQGNvbnN0cnVjdG9yIFBhZ2VWdWVCYXNlXHJcbiAgICovXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG5cdCAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAqIFNpdGUgb2JqZWN0XHJcbiAgICAgICAgICAgICAgICogQG1lbWJlcm9mIFBhZ2VWdWVCYXNlXHJcbiAgICAgICAgICAgICAgICogQGluc3RhbmNlXHJcbiAgICAgICAgICAgICAgICogQG1lbWJlciB7U2l0ZX0gc2l0ZVxyXG4gICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgIHNpdGU6IFNpdGUsXHJcblx0ICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICogU2l0ZSByb290IHBhdGggKFNpdGUucm9vdClcclxuICAgICAgICAgICAgICAgKiBAbWVtYmVyb2YgUGFnZVZ1ZUJhc2VcclxuICAgICAgICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgICAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IHJvb3RcclxuICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICByb290OiBTaXRlLnJvb3RcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG5cdCAgICAgICAgLyoqXHJcbiAgICAgICAgICAgKiBTZXQgdGhlIHBhZ2UgdGl0bGVcclxuICAgICAgICAgICAqIEBtZW1iZXJvZiBQYWdlVnVlQmFzZVxyXG4gICAgICAgICAgICogQGluc3RhbmNlXHJcblx0ICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGVcclxuXHQgICAgICAgICAqL1xyXG4gICAgICAgICAgIHNldFRpdGxlKHRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuc2V0VGl0bGUodGl0bGUpO1xyXG4gICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgc2V0TWVudTogZnVuY3Rpb24obWVudSkge1xyXG5cdCAgICAgICAgICAgdGhpcy4kcGFyZW50LnNldE1lbnUobWVudSk7XHJcbiAgICAgICAgICAgfSxcclxuICAgICAgICAgICBnZXRNZW51OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICBcdCByZXR1cm4gdGhpcy4kcGFyZW50LmdldE1lbnUoKTtcclxuICAgICAgICAgICB9LFxyXG4gICAgICAgICAgIGNsZWFyTWVudSgpIHtcclxuICAgICAgICAgICBcdCAgdGhpcy5zZXRNZW51KFtdKTtcclxuICAgICAgICAgICB9LFxyXG5cdCAgICAgICAgIC8qKlxyXG5cdCAgICAgICAgICAqIEFkZCBhbiBvcHRpb24gdG8gdGhlIG5hdjIgbWVudS5cclxuXHQgICAgICAgICAgKiBAcGFyYW0gdGl0bGUgVGl0bGUgb2YgdGhlIG9wdGlvbiB0byBhZGQuXHJcblx0ICAgICAgICAgICogQHBhcmFtIGNsb3N1cmUgRnVuY3Rpb24gdG8gY2FsbCB3aGVuIHNlbGVjdGVkLlxyXG5cdCAgICAgICAgICAqL1xyXG5cdCAgICAgICAgIGFkZE1lbnUodGl0bGUsIGNsb3N1cmUpIHtcclxuXHRcdCAgICAgICAgIGxldCBtZW51ID0gdGhpcy5nZXRNZW51KCk7XHJcblx0XHQgICAgICAgICBtZW51LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogdGl0bGUsXHJcbiAgICAgICAgICAgICAgICBjbGljazogY2xvc3VyZVxyXG4gICAgICAgICAgICAgfSk7XHJcblx0XHQgICAgICAgICB0aGlzLnNldE1lbnUobWVudSk7XHJcblx0ICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcbiIsIjxzY3JpcHQ+XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0bWV0aG9kczoge1xyXG5cdFx0Y2xvc2UoKSB7XHJcblx0XHRcdHRoaXMuJGRpYWxvZy5jbG9zZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNsLWNlbnRlci1pblwiPlxyXG4gICAgPGZvcm0gY2xhc3M9XCJjbC1pbmxpbmUtcGFkZGVkXCIgQHN1Ym1pdC5wcmV2ZW50PVwic3VibWl0KClcIj5cclxuICAgICAgPHA+PGxhYmVsPlRlYW0gU2l6ZTxicj48aW5wdXQgc3R5bGU9XCJ3aWR0aDogOGVtXCIgY2xhc3M9XCJjZW50ZXJcIiByZWY9XCJzaXplXCIgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwic2l6ZVwiPjwvbGFiZWw+PC9wPlxyXG4gICAgPC9mb3JtPlxyXG4gICAgPGRpdiBjbGFzcz1cImNsLWRpYWxvZy1ib3R0b21cIj5cclxuICAgICAgPGJ1dHRvbiBAY2xpY2sucHJldmVudD1cInN1Ym1pdCgpXCIgdHlwZT1cInN1Ym1pdFwiPkRpc3RyaWJ1dGU8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBAY2xpY2sucHJldmVudD1cImNsb3NlKClcIiB0eXBlPVwic3VibWl0XCI+Q2FuY2VsPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IFZ1ZURpYWxvZ1Z1ZSBmcm9tICdzaXRlLWNsL2pzL1Z1ZS9WdWVEaWFsb2cudnVlJztcclxuICBpbXBvcnQgRGlhbG9nIGZyb20gJ2RpYWxvZy1jbCc7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICBcdCdleHRlbmRzJzogVnVlRGlhbG9nVnVlLFxyXG4gIFx0cHJvcHM6IFsndGVhbWluZ2lkJywgJ3BhcmVudCddLFxyXG4gICAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgXHRcdHJldHVybiB7XHJcbiAgXHRcdFx0c2l6ZTogNVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIFx0bW91bnRlZCgpIHtcclxuXHQgICAgdGhpcy4kcmVmc1snc2l6ZSddLnNlbGVjdCgpO1xyXG4gIFx0XHR0aGlzLiRyZWZzWydzaXplJ10uZm9jdXMoKTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgXHRcdHN1Ym1pdCgpIHtcclxuICBcdFx0XHRsZXQgc2l6ZSA9ICt0aGlzLnNpemU7XHJcbiAgXHRcdFx0aWYoc2l6ZSA8IDEgfHwgc2l6ZSA+IDEwMCkge1xyXG4gICAgICAgICAgbmV3IERpYWxvZy5NZXNzYWdlQm94KCdNdXN0IGVudGVyIHNpemUnLCAnWW91IG11c3QgcHJvdmlkZSBhIHNpemUgZnJvbSAxIHRvIDEwMCcsXHJcbiAgICAgICAgICAgIERpYWxvZy5NZXNzYWdlQm94Lk9LKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICBzaXplOiBzaXplXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiRzaXRlLmFwaS5wb3N0KCcvYXBpL3RlYW0vdGVhbXMvJyArIHRoaXMudGVhbWluZ2lkICsgJy9kaXN0cmlidXRlJywgcGFyYW1zKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG4gICAgICAgICAgICAgIHRoaXMucGFyZW50LnRha2UocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgIHRoaXMuJGRpYWxvZy5jbG9zZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNsLWNlbnRlci1pblwiPlxyXG4gICAgPGZvcm0gY2xhc3M9XCJjbC1pbmxpbmUtcGFkZGVkXCIgQHN1Ym1pdC5wcmV2ZW50PVwic3VibWl0KClcIj5cclxuICAgICAgPHA+PGxhYmVsPk5hbWU8YnI+PGlucHV0IHJlZj1cIm5hbWVcIiB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJ0ZWFtLm5hbWVcIj48L2xhYmVsPjwvcD5cclxuICAgIDwvZm9ybT5cclxuICAgIDxkaXYgY2xhc3M9XCJjbC1kaWFsb2ctYm90dG9tXCI+XHJcbiAgICAgIDxidXR0b24gQGNsaWNrLnByZXZlbnQ9XCJzdWJtaXQoKVwiIHR5cGU9XCJzdWJtaXRcIj57e29wZXJhdGlvbj09PSduZXcnID8gJ0FkZCcgOiAnVXBkYXRlJ319PC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gQGNsaWNrLnByZXZlbnQ9XCJjbG9zZSgpXCIgdHlwZT1cInN1Ym1pdFwiPkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCBWdWVEaWFsb2dWdWUgZnJvbSAnc2l0ZS1jbC9qcy9WdWUvVnVlRGlhbG9nLnZ1ZSc7XHJcbiAgaW1wb3J0IERpYWxvZyBmcm9tICdkaWFsb2ctY2wnO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgXHQnZXh0ZW5kcyc6IFZ1ZURpYWxvZ1Z1ZSxcclxuICBcdHByb3BzOiBbJ3RlYW0nLCAndGVhbWluZ2lkJywgJ29wZXJhdGlvbicsICdwYXJlbnQnXSxcclxuICBcdG1vdW50ZWQoKSB7XHJcbiAgXHRcdHRoaXMuJHJlZnNbJ25hbWUnXS5mb2N1cygpO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICBcdFx0c3VibWl0KCkge1xyXG4gICAgICAgIGlmKHRoaXMudGVhbS5uYW1lLnRyaW0oKSA9PT0gJycpIHtcclxuICAgICAgICAgIG5ldyBEaWFsb2cuTWVzc2FnZUJveCgnTXVzdCBlbnRlciBuYW1lJywgJ1lvdSBtdXN0IHByb3ZpZGUgYSBub24tZW1wdHkgbmFtZScsXHJcbiAgICAgICAgICAgIERpYWxvZy5NZXNzYWdlQm94Lk9LKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICBpZDogdGhpcy50ZWFtLmlkLFxyXG4gICAgICAgICAgbmFtZTogdGhpcy50ZWFtLm5hbWUudHJpbSgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiRzaXRlLmFwaS5wb3N0KCcvYXBpL3RlYW0vdGVhbXMvJyArIHRoaXMudGVhbWluZ2lkICsgJy8nICsgdGhpcy5vcGVyYXRpb24sIHBhcmFtcylcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuICAgICAgICAgICAgICB0aGlzLnBhcmVudC50YWtlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICB0aGlzLiRkaWFsb2cuY2xvc2UoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjbC1jZW50ZXItaW5cIj5cclxuICAgIDxmb3JtIGNsYXNzPVwiY2wtaW5saW5lLXBhZGRlZFwiIEBzdWJtaXQucHJldmVudD1cInN1Ym1pdCgpXCI+XHJcbiAgICAgIDxwPjxsYWJlbD5UZWFtIE5hbWVzPGJyPlxyXG4gICAgICAgIDx0ZXh0YXJlYSByZWY9XCJuYW1lc1wiIHYtbW9kZWw9XCJuYW1lc1wiIHJvd3M9XCIxNVwiPjwvdGV4dGFyZWE+XHJcbiAgICAgIDwvbGFiZWw+PC9wPlxyXG4gICAgPC9mb3JtPlxyXG4gICAgPGRpdiBjbGFzcz1cImNsLWRpYWxvZy1ib3R0b21cIj5cclxuICAgICAgPGJ1dHRvbiBAY2xpY2sucHJldmVudD1cInN1Ym1pdCgpXCIgdHlwZT1cInN1Ym1pdFwiPlNldCBOYW1lczwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIEBjbGljay5wcmV2ZW50PVwiY2xvc2UoKVwiIHR5cGU9XCJzdWJtaXRcIj5DYW5jZWw8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgVnVlRGlhbG9nVnVlIGZyb20gJ3NpdGUtY2wvanMvVnVlL1Z1ZURpYWxvZy52dWUnO1xyXG4gIGltcG9ydCBEaWFsb2cgZnJvbSAnZGlhbG9nLWNsJztcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gIFx0J2V4dGVuZHMnOiBWdWVEaWFsb2dWdWUsXHJcbiAgXHRwcm9wczogWyd0ZWFtaW5naWQnLCAncGFyZW50J10sXHJcbiAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICBcdFx0cmV0dXJuIHtcclxuICBcdFx0XHRuYW1lczogJydcclxuICAgICAgfVxyXG4gICAgfSxcclxuICBcdG1vdW50ZWQoKSB7XHJcbiAgXHRcdHRoaXMuJHJlZnNbJ25hbWVzJ10uZm9jdXMoKTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgXHRcdHN1Ym1pdCgpIHtcclxuICAgICAgICBsZXQgbmFtZXMxID0gdGhpcy5uYW1lcy50cmltKCkuc3BsaXQoXCJcXG5cIik7XHJcbiAgICAgICAgbGV0IG5hbWVzID0gW107XHJcbiAgICAgICAgZm9yKGxldCBuYW1lIG9mIG5hbWVzMSkge1xyXG4gICAgICAgIFx0bmFtZSA9IG5hbWUudHJpbSgpO1xyXG4gICAgICAgIFx0aWYobmFtZSAhPT0gJycpIHtcclxuICAgICAgICBcdFx0bmFtZXMucHVzaChuYW1lKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKG5hbWVzLmxlbmd0aCA9PT0gMCkge1xyXG5cdCAgICAgICAgbmV3IERpYWxvZy5NZXNzYWdlQm94KCdNdXN0IGVudGVyIG5hbWVzJywgJ1lvdSBtdXN0IGVudGVyIG9uZSBvciBtb3JlIG5hbWVzIHRvIHVzZS4nLFxyXG5cdFx0ICAgICAgICBEaWFsb2cuTWVzc2FnZUJveC5PSyk7XHJcblx0ICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuXHRcdCAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgbmFtZXM6IG5hbWVzXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiRzaXRlLmFwaS5wb3N0KCcvYXBpL3RlYW0vdGVhbXMvJyArIHRoaXMudGVhbWluZ2lkICsgJy9uYW1lcycsIHBhcmFtcylcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuICAgICAgICAgICAgICB0aGlzLnBhcmVudC50YWtlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICB0aGlzLiRkaWFsb2cuY2xvc2UoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjbC10ZWFtaW5nLWVkaXRvclwiPlxyXG4gICAgPGRpdj5cclxuICAgICAgPGZvcm0+XHJcbiAgICAgICAgPHA+PGxhYmVsPlRhZzxicj48aW5wdXQgcmVmPVwidGFnXCIgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwidGVhbWluZy50YWdcIj48L2xhYmVsPjwvcD5cclxuICAgICAgICA8cD48bGFiZWw+TmFtZTxicj48aW5wdXQgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwidGVhbWluZy5uYW1lXCI+PC9sYWJlbD48L3A+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJjZW50ZXJcIj48bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHYtbW9kZWw9XCJ0ZWFtaW5nLnB1YmxpY1wiPiBQdWJsaWM8L2xhYmVsPjwvcD5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgXHRwcm9wczogWyd0ZWFtaW5nJ10sXHJcbiAgXHRtb3VudGVkKCkge1xyXG4gIFx0XHR0aGlzLiRyZWZzWyd0YWcnXS5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuICBkaXYuY2wtdGVhbWluZy1lZGl0b3Ige1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgID5kaXYge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBhZGRpbmc6IDEuNWVtIDAgMi4wZW0gMDtcclxuICAgIH1cclxuICB9XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICA8ZGl2IHYtaWY9XCJ0ZWFtaW5ncyAhPT0gbnVsbFwiIGNsYXNzPVwiZnVsbFwiPlxyXG4gICAgPHRhYmxlIHYtaWY9XCJ0ZWFtaW5ncy5sZW5ndGggPiAwXCI+XHJcbiAgICAgIDx0cj5cclxuICAgICAgICA8dGg+PC90aD5cclxuICAgICAgICA8dGg+VGFnPC90aD5cclxuICAgICAgICA8dGg+TmFtZTwvdGg+XHJcbiAgICAgICAgPHRoPlZpc2liaWxpdHk8L3RoPlxyXG4gICAgICA8L3RyPlxyXG4gICAgICA8dHIgdi1mb3I9XCJ0ZWFtaW5nIGluIHRlYW1pbmdzXCIgOmtleT1cInRlYW1pbmcuaWRcIj5cclxuICAgICAgICA8dGQ+PGEgQGNsaWNrLnByZXZlbnQ9XCJlZGl0ZXIodGVhbWluZylcIj48aW1nIDpzcmM9XCJyb290ICsgJy92ZW5kb3IvY2wvc2l0ZS9pbWcvcGVuY2lsMTYucG5nJ1wiIGFsdD1cIkVkaXRcIiB0aXRsZT1cIkVkaXRcIj48L2E+XHJcbiAgICAgICAgICA8YSBAY2xpY2sucHJldmVudD1cImRlbGV0ZXIodGVhbWluZylcIj48aW1nIDpzcmM9XCJyb290ICsgJy92ZW5kb3IvY2wvc2l0ZS9pbWcveC5wbmcnXCIgYWx0PVwiRGVsZXRlXCIgdGl0bGU9XCJEZWxldGVcIj48L2E+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgICA8dGQ+PHJvdXRlci1saW5rIDp0bz1cInJvb3QgKyAnL2NsL2NvbnNvbGUvdGVhbS8nICsgdGVhbWluZy5pZFwiPnt7dGVhbWluZy50YWd9fTwvcm91dGVyLWxpbms+PC90ZD5cclxuICAgICAgICA8dGQ+e3t0ZWFtaW5nLm5hbWV9fTwvdGQ+XHJcbiAgICAgICAgPHRkPnt7dGVhbWluZy5wdWJsaWMgPyAnUHVibGljJyA6ICdQcml2YXRlJ319PC90ZD5cclxuICAgICAgPC90cj5cclxuICAgIDwvdGFibGU+XHJcbiAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cImNlbnRlclwiPlxyXG4gICAgICA8cD5UaGVyZSBhcmUgY3VycmVudGx5IG5vIGRlZmluZWQgdGVhbWluZ3MuPC9wPlxyXG4gICAgICA8cD5DaG9vc2UgQWRkIFRlYW1pbmcgdG8gYWRkIGEgbmV3IHRlYW1pbmcuPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IENvbnNvbGVDb21wb25lbnRCYXNlIGZyb20gJ2NvbnNvbGUtY2wvanMvQ29uc29sZUNvbXBvbmVudEJhc2UudnVlJztcclxuXHRpbXBvcnQgRGlhbG9nIGZyb20gJ2RpYWxvZy1jbCc7XHJcbiAgaW1wb3J0IHtUZWFtaW5nfSBmcm9tICcuLi9UZWFtaW5nJztcclxuICBpbXBvcnQgVGVhbWluZ0VkaXRvclZ1ZSBmcm9tICcuL1RlYW1pbmdFZGl0b3IudnVlJztcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gIFx0ZXh0ZW5kczogQ29uc29sZUNvbXBvbmVudEJhc2UsXHJcbiAgXHRkYXRhOiBmdW5jdGlvbigpIHtcclxuICBcdFx0cmV0dXJuIHtcclxuICBcdFx0ICB0ZWFtaW5nczogbnVsbFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIFx0bW91bnRlZCgpIHtcclxuICBcdFx0dGhpcy5zZXRUaXRsZSgnOiBUZWFtaW5ncycpO1xyXG5cdCAgICB0aGlzLmFkZE5hdjIoJ0FkZCBUZWFtaW5nJywgNSwgKCkgPT4ge1xyXG5cdFx0ICAgIHRoaXMuYWRkKCk7XHJcblx0ICAgIH0pO1xyXG5cclxuXHQgICAgdGhpcy4kc2l0ZS5hcGkuZ2V0KCcvYXBpL3RlYW0vdGVhbWluZ3MnLCB7fSlcclxuXHRcdCAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0ICAgIGlmICghcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG5cdFx0XHQgICAgXHR0aGlzLnRha2UocmVzcG9uc2UpO1xyXG5cdFx0XHQgICAgfSBlbHNlIHtcclxuXHRcdFx0XHQgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcblx0XHRcdCAgICB9XHJcblxyXG5cdFx0ICAgIH0pXHJcblx0XHQgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG5cdFx0XHQgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcblx0XHQgICAgfSk7XHJcbiAgICB9LFxyXG5cdCAgbWV0aG9kczoge1xyXG4gIFx0XHR0YWtlKHJlc3BvbnNlKSB7XHJcbiAgXHRcdFx0bGV0IGRhdGEgPSByZXNwb25zZS5nZXREYXRhKCd0ZWFtaW5ncycpLmF0dHJpYnV0ZXM7XHJcblxyXG4gIFx0XHRcdHRoaXMudGVhbWluZ3MgPSBbXTtcclxuICBcdFx0XHRmb3IobGV0IHJvdyBvZiBkYXRhKSB7XHJcbiAgXHRcdFx0XHR0aGlzLnRlYW1pbmdzLnB1c2gobmV3IFRlYW1pbmcocm93KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gIFx0XHRhZGQoKSB7XHJcbiAgXHRcdFx0Y29uc3QgdGVhbWluZyA9IG5ldyBUZWFtaW5nKCk7XHJcblxyXG4gIFx0XHRcdG5ldyBEaWFsb2coe1xyXG4gICAgICAgICAgICB0aXRsZTogJ05ldyBUZWFtaW5nJyxcclxuICAgICAgICAgICAgY29udGVudDogJzxkaXYgaWQ9XCJjbC10ZWFtaW5nXCI+PC9kaXY+JyxcclxuICAgIFx0XHQgICAgYWRkQ2xhc3M6ICdjbC1kaWFsb2ctbmFycm93JyxcclxuICAgICAgICAgICAgYnV0dG9uczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXHQgIGNvbnRlbnRzOiAnQWRkJyxcclxuICAgICAgICAgICAgICAgICAgICBmb2N1czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBjbGljazogKGRpYWxvZykgPT4ge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMuJHNpdGUuVGFncy52YWxpZGF0ZSh0ZWFtaW5nLnRhZykpIHtcclxuXHRcdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHQgICAgICAgICAgICAgICAgICAgIGlmKHRlYW1pbmcubmFtZS50cmltKCkgPT09ICcnKSB7XHJcblx0XHQgICAgICAgICAgICAgICAgICAgIG5ldyBEaWFsb2cuTWVzc2FnZUJveCgnTXVzdCBlbnRlciBuYW1lJywgJ1lvdSBtdXN0IHByb3ZpZGUgYSBub24tZW1wdHkgbmFtZScsXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgRGlhbG9nLk1lc3NhZ2VCb3guT0spO1xyXG5cdFx0ICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcblx0ICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgXHQgIFx0bGV0IHBhcmFtcyA9IHtcclxuXHQgICAgICAgICAgICAgICAgICAgIFx0ICB0YWc6IHRlYW1pbmcudGFnLnRyaW0oKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0ZWFtaW5nLm5hbWUudHJpbSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHB1YmxpYzogdGVhbWluZy5wdWJsaWNcclxuICAgICAgICAgICAgICAgIFx0ICBcdH1cclxuXHJcbiAgICAgICAgICAgICAgICBcdCAgXHR0aGlzLiRzaXRlLmFwaS5wb3N0KCcvYXBpL3RlYW0vdGVhbWluZ3MvbmV3JywgcGFyYW1zKVxyXG4gICAgICAgICAgICAgICAgXHQgIFx0ICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgXHQgIFx0ICAgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRha2UocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZy5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgXHQgIFx0ICAgICAgICB9IGVsc2Uge1xyXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgXHQgIFx0ICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgXHQgIFx0ICAgIH0pXHJcbiAgICAgICAgICAgICAgICBcdCAgXHQgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICBcdCAgXHQgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcdCAgY29udGVudHM6ICdDYW5jZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiAoZGlhbG9nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBcdCAgXHRkaWFsb2cuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gIFx0XHRcdC8vIENyZWF0ZSBhIFZ1ZSBpbnNpZGUgdGhlIGRpYWxvZyBib3hcclxuICAgICAgICBuZXcgdGhpcy4kc2l0ZS5WdWUoe1xyXG4gICAgICAgICAgZWw6ICcjY2wtdGVhbWluZycsXHJcbiAgICAgICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICB0ZWFtaW5nOiB0ZWFtaW5nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB0ZW1wbGF0ZTogYDxlZGl0b3IgOnRlYW1pbmc9XCJ0ZWFtaW5nXCI+PC9lZGl0b3I+YCxcclxuICAgICAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgZWRpdG9yOiBUZWFtaW5nRWRpdG9yVnVlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgZWRpdGVyKHRlYW1pbmcpIHtcclxuICBcdFx0XHR0ZWFtaW5nID0gdGVhbWluZy5jbG9uZSgpO1xyXG5cclxuXHQgICAgICBuZXcgRGlhbG9nKHtcclxuXHRcdCAgICAgIHRpdGxlOiAnRWRpdCBUZWFtaW5nJyxcclxuXHRcdCAgICAgIGNvbnRlbnQ6ICc8ZGl2IGlkPVwiY2wtdGVhbWluZ1wiPjwvZGl2PicsXHJcblx0ICAgICAgICBhZGRDbGFzczogJ2NsLWRpYWxvZy1uYXJyb3cnLFxyXG5cdFx0ICAgICAgYnV0dG9uczogW1xyXG5cdFx0XHQgICAgICB7XHJcblx0XHRcdFx0ICAgICAgY29udGVudHM6ICdVcGRhdGUnLFxyXG5cdFx0XHRcdCAgICAgIGZvY3VzOiB0cnVlLFxyXG5cdFx0XHRcdCAgICAgIGNsaWNrOiAoZGlhbG9nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZighdGhpcy4kc2l0ZS5UYWdzLnZhbGlkYXRlKHRlYW1pbmcudGFnKSkge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cdFx0XHRcdFx0ICAgICAgaWYodGVhbWluZy5uYW1lLnRyaW0oKSA9PT0gJycpIHtcclxuXHRcdFx0XHRcdFx0ICAgICAgbmV3IERpYWxvZy5NZXNzYWdlQm94KCdNdXN0IGVudGVyIG5hbWUnLCAnWW91IG11c3QgcHJvdmlkZSBhIG5vbi1lbXB0eSBuYW1lJyxcclxuXHRcdFx0XHRcdFx0XHQgICAgICBEaWFsb2cuTWVzc2FnZUJveC5PSyk7XHJcblx0XHRcdFx0XHRcdCAgICAgIHJldHVybjtcclxuXHRcdFx0XHRcdCAgICAgIH1cclxuXHJcblx0XHRcdFx0XHQgICAgICBsZXQgcGFyYW1zID0ge1xyXG5cdFx0XHRcdFx0ICAgICAgXHRpZDogdGVhbWluZy5pZCxcclxuXHRcdFx0XHRcdFx0ICAgICAgdGFnOiB0ZWFtaW5nLnRhZy50cmltKCksXHJcblx0XHRcdFx0XHRcdCAgICAgIG5hbWU6IHRlYW1pbmcubmFtZS50cmltKCksXHJcblx0XHRcdFx0XHRcdCAgICAgIHB1YmxpYzogdGVhbWluZy5wdWJsaWNcclxuXHRcdFx0XHRcdCAgICAgIH1cclxuXHJcblx0XHRcdFx0XHQgICAgICB0aGlzLiRzaXRlLmFwaS5wb3N0KCcvYXBpL3RlYW0vdGVhbWluZ3MvdXBkYXRlJywgcGFyYW1zKVxyXG5cdFx0XHRcdFx0XHQgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRcdFx0XHQgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdCAgICAgIHRoaXMudGFrZShyZXNwb25zZSk7XHJcblx0XHRcdFx0XHRcdFx0XHQgICAgICBkaWFsb2cuY2xvc2UoKTtcclxuXHRcdFx0XHRcdFx0XHQgICAgICB9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0ICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcblx0XHRcdFx0XHRcdFx0ICAgICAgfVxyXG5cclxuXHRcdFx0XHRcdFx0ICAgICAgfSlcclxuXHRcdFx0XHRcdFx0ICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdCAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG5cdFx0XHRcdFx0XHQgICAgICB9KTtcclxuXHJcblx0XHRcdFx0ICAgICAgfVxyXG5cdFx0XHQgICAgICB9LFxyXG5cdFx0XHQgICAgICB7XHJcblx0XHRcdFx0ICAgICAgY29udGVudHM6ICdDYW5jZWwnLFxyXG5cdFx0XHRcdCAgICAgIGNsaWNrOiAoZGlhbG9nKSA9PiB7XHJcblx0XHRcdFx0XHQgICAgICBkaWFsb2cuY2xvc2UoKTtcclxuXHRcdFx0XHQgICAgICB9XHJcblx0XHRcdCAgICAgIH1cclxuXHRcdCAgICAgIF1cclxuXHJcblx0ICAgICAgfSk7XHJcblxyXG5cdCAgICAgIC8vIENyZWF0ZSBhIFZ1ZSBpbnNpZGUgdGhlIGRpYWxvZyBib3hcclxuXHQgICAgICBuZXcgdGhpcy4kc2l0ZS5WdWUoe1xyXG5cdFx0ICAgICAgZWw6ICcjY2wtdGVhbWluZycsXHJcblx0XHQgICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0ICAgICAgcmV0dXJuIHtcclxuXHRcdFx0XHQgICAgICB0ZWFtaW5nOiB0ZWFtaW5nXHJcblx0XHRcdCAgICAgIH1cclxuXHRcdCAgICAgIH0sXHJcblx0XHQgICAgICB0ZW1wbGF0ZTogYDxlZGl0b3IgOnRlYW1pbmc9XCJ0ZWFtaW5nXCI+PC9lZGl0b3I+YCxcclxuXHRcdCAgICAgIGNvbXBvbmVudHM6IHtcclxuXHRcdFx0ICAgICAgZWRpdG9yOiBUZWFtaW5nRWRpdG9yVnVlXHJcblx0XHQgICAgICB9XHJcblx0ICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgZGVsZXRlcih0ZWFtaW5nKSB7XHJcblx0ICAgICAgbmV3IERpYWxvZy5NZXNzYWdlQm94KCdBcmUgeW91IHN1cmU/JywgJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgJyArIHRlYW1pbmcubmFtZSxcclxuXHRcdCAgICAgIERpYWxvZy5NZXNzYWdlQm94Lk9LQ0FOQ0VMLCAoKSA9PiB7XHJcblx0XHQgICAgICAgIHRoaXMuJHNpdGUuYXBpLnBvc3QoJy9hcGkvdGVhbS90ZWFtaW5ncy9kZWxldGUnLCB7aWQ6IHRlYW1pbmcuaWR9KVxyXG5cdFx0XHQgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdCAgICAgICAgaWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcblx0XHRcdFx0XHQgICAgICAgIHRoaXMudGFrZShyZXNwb25zZSk7XHJcblx0XHRcdFx0XHQgICAgICAgIGRpYWxvZy5jbG9zZSgpO1xyXG5cdFx0XHRcdCAgICAgICAgfSBlbHNlIHtcclxuXHRcdFx0XHRcdCAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcblx0XHRcdFx0ICAgICAgICB9XHJcblxyXG5cdFx0XHQgICAgICAgIH0pXHJcblx0XHRcdCAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdCAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcblx0XHRcdCAgICAgICAgfSk7XHJcblx0XHQgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImZ1bGwgY2wtdGVhbXMtZWRpdG9yXCIgdi1pZj1cInRlYW1zICE9PSBudWxsXCI+XHJcbiAgICAgIDx0YWJsZSBjbGFzcz1cInNtYWxsXCI+XHJcbiAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwidGVhbSBpbiB0ZWFtc1wiPlxyXG4gICAgICAgICAgPHRyIDprZXk9XCJ0ZWFtLmlkXCIgY2xhc3M9XCJjbC1pbnRlcm5hbFwiPlxyXG4gICAgICAgICAgICA8dGggY2xhc3M9XCJyaWdodFwiPjxzcGFuIHYtaWY9XCJ0ZWFtLm5hbWUgIT09IG51bGxcIj5cclxuICAgICAgICAgICAgICA8YSBAY2xpY2sucHJldmVudD1cImVkaXRlcih0ZWFtKVwiPjxpbWcgOnNyYz1cInJvb3QgKyAnL3ZlbmRvci9jbC9zaXRlL2ltZy9wZW5jaWwxNi5wbmcnXCIgYWx0PVwiRWRpdFwiIHRpdGxlPVwiRWRpdFwiPjwvYT5cclxuICAgICAgICAgICAgICA8YSBAY2xpY2sucHJldmVudD1cImRlbGV0ZXIodGVhbSlcIj48aW1nIDpzcmM9XCJyb290ICsgJy92ZW5kb3IvY2wvc2l0ZS9pbWcveC5wbmcnXCIgYWx0PVwiRGVsZXRlXCIgdGl0bGU9XCJEZWxldGVcIj48L2E+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxjbC1tZW51IGFkZC1jbGFzcz1cImNsLWlubGluZVwiIHYtaWY9XCJ0ZWFtLm5hbWUgPT09IG51bGxcIj5cclxuICAgICAgICAgICAgICAgIDxhPjxpbWcgOnNyYz1cInJvb3QgKyAnL3ZlbmRvci9jbC9zaXRlL2ltZy9tZW51YmFycy5wbmcnXCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+PGEgQGNsaWNrLnByZXZlbnQ9XCJkaXN0cmlidXRlKClcIj5EaXN0cmlidXRlPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvY2wtbWVudT5cclxuICAgICAgICAgICAgICA8YSBAY2xpY2sucHJldmVudD1cInRvZ2dsZSh0ZWFtKVwiPjxpbWcgOnNyYz1cIiRzaXRlLnJvb3QgKyAnL3ZlbmRvci9jbC9zaXRlL2ltZy8nICsgKG9wZW5bdGVhbS5pZF0gPT09IHRydWUgPyAnbWludXMucG5nJyA6ICdwbHVzLnBuZycpXCI+PC9hPlxyXG4gICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICA8dGggY29sc3Bhbj1cIjJcIiB2LWh0bWw9XCJ0ZWFtSGVhZGluZyh0ZWFtKVwiPjwvdGg+XHJcbiAgICAgICAgICAgIDx0aCBjbGFzcz1cImNlbnRlclwiPnt7dGVhbS5tZW1iZXJzLmxlbmd0aH19PC90aD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cIm9wZW5bdGVhbS5pZF0gPT09IHRydWVcIj5cclxuICAgICAgICAgICAgPHRyIHYtaWY9XCJ0ZWFtLm1lbWJlcnMubGVuZ3RoID09PSAwXCI+XHJcbiAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XCI0XCIgY2xhc3M9XCJjZW50ZXJcIj4qKiogZW1wdHkgKioqPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPHRyIHYtZm9yPVwibWVtYmVyIGluIHRlYW0ubWVtYmVyc1wiPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8Y2wtbWVudT5cclxuICAgICAgICAgICAgICAgICAgPGE+PGltZyA6c3JjPVwicm9vdCArICcvdmVuZG9yL2NsL3NpdGUvaW1nL21lbnViYXJzLnBuZydcIj48L2E+XHJcbiAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgdi1mb3I9XCJ0ZWFtMSBpbiB0ZWFtc1wiPjxhIEBjbGljay5wcmV2ZW50PVwibW92ZShtZW1iZXIsIHRlYW0xKVwiPnt7dGVhbTEubmFtZSAhPT0gbnVsbCA/IHRlYW0xLm5hbWUgOiAnVW5hc3NpZ25lZCd9fTxpbWcgdi1pZj1cInRlYW0gPT09IHRlYW0xXCIgOnNyYz1cInJvb3QgKyAnL3ZlbmRvci9jbC9zaXRlL2ltZy9jaGVjazE2LnBuZydcIj48L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvY2wtbWVudT5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD48YSA6aHJlZj1cIidtYWlsdG86JyArIG1lbWJlci5lbWFpbFwiPnt7bWVtYmVyLnVzZXJ9fTwvYT48L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57e21lbWJlci5uYW1lfX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgICA8cCBjbGFzcz1cImNlbnRlclwiPjxlbT57e3RvdGFsc319PC9lbT48L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBDb25zb2xlQ29tcG9uZW50QmFzZSBmcm9tICdjb25zb2xlLWNsL2pzL0NvbnNvbGVDb21wb25lbnRCYXNlLnZ1ZSc7XHJcblx0aW1wb3J0IFRlYW1FZGl0b3JWdWUgZnJvbSAnLi9UZWFtRWRpdG9yLnZ1ZSc7XHJcbiAgaW1wb3J0IERpYWxvZyBmcm9tICdkaWFsb2ctY2wnO1xyXG4gIGltcG9ydCB7VGVhbX0gZnJvbSAnLi4vVGVhbSc7XHJcbiAgaW1wb3J0IE1lbnVWdWUgZnJvbSAnc2l0ZS1jbC9qcy9VSS9NZW51LnZ1ZSdcclxuICBpbXBvcnQge1Z1ZURpYWxvZ30gZnJvbSAnc2l0ZS1jbC9qcy9WdWUvVnVlRGlhbG9nJztcclxuICBpbXBvcnQgVGVhbURpc3RyaWJ1dGVyVnVlIGZyb20gJy4vVGVhbURpc3RyaWJ1dGVyLnZ1ZSc7XHJcbiAgaW1wb3J0IFRlYW1OYW1lTG9hZGVyVnVlIGZyb20gJy4vVGVhbU5hbWVMb2FkZXIudnVlJztcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG5cdCAgICBleHRlbmRzOiBDb25zb2xlQ29tcG9uZW50QmFzZSxcclxuICBcdCAgcHJvcHM6IFsnaWQnXSxcclxuICAgICAgZGF0YTogZnVuY3Rpb24oKSB7XHJcblx0ICAgIFx0ICByZXR1cm4ge1xyXG5cdCAgICBcdCAgXHR0ZWFtczogbnVsbCxcclxuICAgICAgICAgICAgb3BlbjogW11cclxuICAgICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgY29tcHV0ZWQ6IHtcclxuXHQgICAgICAvKipcclxuICAgICAgICAgKiBDb21wdXRlZCBwYXJhbWV0ZXIgdGhhdCB0b3RhbHMgYWxsIHRlYW0gbWVtYmVyc2hpcHNcclxuXHQgICAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG5cdCAgICAgICAqL1xyXG5cdCAgICBcdHRvdGFscygpIHtcclxuXHQgICAgXHRcdGxldCBjbnQgPSAwO1xyXG5cdCAgICBcdFx0bGV0IHVuYWZmaWwgPSAwO1xyXG5cdCAgICBcdFx0Zm9yKGNvbnN0IHRlYW0gb2YgdGhpcy50ZWFtcykge1xyXG5cdCAgICBcdFx0XHRpZih0ZWFtLm5hbWUgIT09IG51bGwpIHtcclxuXHRcdFx0ICAgICAgICBjbnQgKz0gdGVhbS5tZW1iZXJzLmxlbmd0aDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgXHRcdFx0XHR1bmFmZmlsICs9IHRlYW0ubWVtYmVycy5sZW5ndGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHQgICAgXHRcdGxldCByZXNwb25zZSA9IGNudCArICcgdGVhbSBtZW1iZXJzIC8gJyArICh0aGlzLnRlYW1zLmxlbmd0aC0xKSArIFwiIHRlYW1zXCI7XHJcblx0ICAgIFx0XHRpZih1bmFmZmlsID4gMCkge1xyXG5cdCAgICBcdFx0XHRyZXNwb25zZSArPSAnIC8gJyArIHVuYWZmaWwgKyAnIHVuYXNzaWduZWQnO1xyXG4gICAgICAgICAgfVxyXG5cdCAgICBcdFx0cmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgY29tcG9uZW50czoge1xyXG5cdCAgICAgIGNsTWVudTogTWVudVZ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBtb3VudGVkKCkge1xyXG5cdCAgICAgIHRoaXMuYWRkTmF2MkxpbmsoJ1RlYW1pbmdzJywgMywgJy9jbC9jb25zb2xlL3RlYW1zJyk7XHJcblxyXG5cdCAgICAgIHRoaXMuYWRkTmF2MignQWRkIFRlYW0nLCA1LCAoKSA9PiB7XHJcblx0XHQgICAgICB0aGlzLmFkZCgpO1xyXG5cdCAgICAgIH0pO1xyXG5cclxuXHQgICAgICB0aGlzLmFkZE5hdjIoJ0xvYWQgTmFtZXMnLCA2LCAoKSA9PiB7XHJcblx0XHQgICAgICB0aGlzLmxvYWROYW1lcygpO1xyXG5cdCAgICAgIH0pO1xyXG5cclxuXHQgICAgICB0aGlzLmFkZE5hdjIoJ0V4cGFuZCBBbGwnLCA3LCAoKSA9PiB7XHJcblx0ICAgICAgXHR0aGlzLmV4cGFuZEFsbCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHQgICAgICB0aGlzLiRzaXRlLmFwaS5nZXQoJy9hcGkvdGVhbS90ZWFtcy8nICsgdGhpcy5pZCwge30pXHJcblx0ICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdCAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcblx0ICAgICAgICAgICAgICAgIHRoaXMudGFrZShyZXNwb25zZSk7XHJcblx0ICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuXHQgICAgICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAgIH0pXHJcblx0ICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHQgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuXHQgICAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGJlZm9yZURlc3Ryb3koKSB7XHJcbiAgICAgIH0sXHJcbiAgICAgIG1ldGhvZHM6IHtcclxuXHQgICAgXHR0YWtlKHJlc3BvbnNlKSB7XHJcblx0ICAgIFx0XHQgIGxldCB0ZWFtcyA9IHJlc3BvbnNlLmdldERhdGEoJ3RlYW1zJykuYXR0cmlidXRlcztcclxuXHJcblx0ICAgIFx0XHQgIHRoaXMudGVhbXMgPSBbXTtcclxuXHQgICAgXHRcdCAgZm9yKGxldCB0ZWFtIG9mIHRlYW1zKSB7XHJcblx0ICAgIFx0XHQgIFx0dGhpcy50ZWFtcy5wdXNoKG5ldyBUZWFtKHRlYW0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdG9nZ2xlKHRlYW0pIHtcclxuXHQgICAgXHRcdGlmKHRoaXMub3Blblt0ZWFtLmlkXSA9PT0gdHJ1ZSkge1xyXG5cdCAgICBcdFx0XHR0aGlzLiRzZXQodGhpcy5vcGVuLCB0ZWFtLmlkLCBmYWxzZSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG5cdFx0ICAgICAgICB0aGlzLiRzZXQodGhpcy5vcGVuLCB0ZWFtLmlkLCB0cnVlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cdCAgICBcdGFkZCgpIHtcclxuXHQgICAgXHRcdGxldCB0ZWFtID0gbmV3IFRlYW0oKTtcclxuICAgICAgICAgIGNvbnN0IHRlYW1pbmdJZCA9IHRoaXMuaWQ7XHJcblxyXG4gICAgICAgICAgbmV3IFZ1ZURpYWxvZyh0aGlzLiRzaXRlLCB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTmV3IFRlYW0nLFxyXG4gICAgICAgICAgICB2dWU6IFRlYW1FZGl0b3JWdWUsXHJcbiAgICAgICAgICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB0ZWFtOiB0ZWFtLFxyXG4gICAgICAgICAgICAgICAgdGVhbWluZ2lkOiB0ZWFtaW5nSWQsXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRpb246ICduZXcnXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBidXR0b25zOiBmYWxzZSxcclxuICAgICAgICAgICAgcGFyZW50OiB0aGlzXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG5cdCAgICAgIGVkaXRlcih0ZWFtKSB7XHJcblx0XHQgICAgICB0ZWFtID0gdGVhbS5jbG9uZSgpO1xyXG5cdFx0ICAgICAgY29uc3QgdGVhbWluZ0lkID0gdGhpcy5pZDtcclxuXHJcblx0ICAgICAgICBuZXcgVnVlRGlhbG9nKHRoaXMuJHNpdGUsIHtcclxuXHRcdCAgICAgICAgdGl0bGU6ICdFZGl0IFRlYW0nLFxyXG5cdFx0ICAgICAgICB2dWU6IFRlYW1FZGl0b3JWdWUsXHJcblx0XHQgICAgICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQgICAgICAgIHJldHVybiB7XHJcblx0XHRcdFx0ICAgICAgICB0ZWFtOiB0ZWFtLFxyXG4gICAgICAgICAgICAgICAgdGVhbWluZ2lkOiB0ZWFtaW5nSWQsXHJcbiAgICAgICAgICAgICAgICBvcGVyYXRpb246ICd1cGRhdGUnXHJcblx0XHRcdCAgICAgICAgfVxyXG5cdFx0ICAgICAgICB9LFxyXG4gICAgICAgICAgICBidXR0b25zOiBmYWxzZSxcclxuICAgICAgICAgICAgcGFyZW50OiB0aGlzXHJcblx0XHQgICAgICB9KTtcclxuXHQgICAgICB9LFxyXG4gICAgICAgIGRlbGV0ZXIodGVhbSkge1xyXG5cdFx0ICAgICAgbmV3IERpYWxvZy5NZXNzYWdlQm94KCdBcmUgeW91IHN1cmU/JywgJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgJyArIHRlYW0ubmFtZSxcclxuXHRcdFx0ICAgICAgRGlhbG9nLk1lc3NhZ2VCb3guT0tDQU5DRUwsICgpID0+IHtcclxuXHRcdFx0XHQgICAgICB0aGlzLiRzaXRlLmFwaS5wb3N0KCcvYXBpL3RlYW0vdGVhbXMvJyArIHRoaXMuaWQgKyAnL2RlbGV0ZScsIHtpZDogdGVhbS5pZH0pXHJcblx0XHRcdFx0XHQgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRcdFx0ICAgICAgaWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcblx0XHRcdFx0XHRcdFx0ICAgICAgdGhpcy50YWtlKHJlc3BvbnNlKTtcclxuXHRcdFx0XHRcdFx0ICAgICAgfSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHQgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuXHRcdFx0XHRcdFx0ICAgICAgfVxyXG5cclxuXHRcdFx0XHRcdCAgICAgIH0pXHJcblx0XHRcdFx0XHQgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcblx0XHRcdFx0XHRcdCAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG5cdFx0XHRcdFx0ICAgICAgfSk7XHJcblx0XHRcdCAgICAgIH0pO1xyXG5cdCAgICAgIH0sXHJcbiAgICAgICAgbW92ZShtZW1iZXIsIHRlYW0pIHtcclxuXHQgICAgXHRcdGxldCBwYXJhbXMgPSB7XHJcblx0ICAgIFx0XHRcdG1lbWJlcjogbWVtYmVyLm1lbWJlcmlkLFxyXG4gICAgICAgICAgICB0ZWFtOiB0ZWFtICE9PSBudWxsPyB0ZWFtLmlkIDogMFxyXG4gICAgICAgICAgfVxyXG5cclxuXHQgICAgICAgIHRoaXMuJHNpdGUuYXBpLnBvc3QoJy9hcGkvdGVhbS90ZWFtcy8nICsgdGhpcy5pZCArICcvbW92ZScsIHBhcmFtcylcclxuXHRcdCAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdCAgICAgICAgaWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcblx0XHRcdFx0ICAgICAgICB0aGlzLnRha2UocmVzcG9uc2UpO1xyXG5cdFx0XHQgICAgICAgIH0gZWxzZSB7XHJcblx0XHRcdFx0ICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuXHRcdFx0ICAgICAgICB9XHJcblxyXG5cdFx0ICAgICAgICB9KVxyXG5cdFx0ICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcblx0XHRcdCAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcblx0XHQgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGlzdHJpYnV0ZSgpIHtcclxuXHQgICAgICAgIGNvbnN0IHRlYW1pbmdJZCA9IHRoaXMuaWQ7XHJcblxyXG5cdCAgICAgICAgbmV3IFZ1ZURpYWxvZyh0aGlzLiRzaXRlLCB7XHJcblx0XHQgICAgICAgIHRpdGxlOiAnVGVhbSBEaXN0cmlidXRlcicsXHJcblx0XHQgICAgICAgIHZ1ZTogVGVhbURpc3RyaWJ1dGVyVnVlLFxyXG5cdFx0ICAgICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0ICAgICAgICByZXR1cm4ge1xyXG5cdFx0XHRcdCAgICAgICAgdGVhbWluZ2lkOiB0ZWFtaW5nSWRcclxuXHRcdFx0ICAgICAgICB9XHJcblx0XHQgICAgICAgIH0sXHJcblx0XHQgICAgICAgIGJ1dHRvbnM6IGZhbHNlLFxyXG5cdFx0ICAgICAgICBwYXJlbnQ6IHRoaXNcclxuXHQgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9hZE5hbWVzKCkge1xyXG5cdCAgICAgICAgY29uc3QgdGVhbWluZ0lkID0gdGhpcy5pZDtcclxuXHJcblx0ICAgICAgICBuZXcgVnVlRGlhbG9nKHRoaXMuJHNpdGUsIHtcclxuXHRcdCAgICAgICAgdGl0bGU6ICdUZWFtIE5hbWUgTG9hZGVyJyxcclxuXHRcdCAgICAgICAgdnVlOiBUZWFtTmFtZUxvYWRlclZ1ZSxcclxuICAgICAgICAgICAgYWRkQ2xhc3M6ICdjbC10ZWFtcy1lZGl0b3ItZGxnJyxcclxuXHRcdCAgICAgICAgZGF0YTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdCAgICAgICAgcmV0dXJuIHtcclxuXHRcdFx0XHQgICAgICAgIHRlYW1pbmdpZDogdGVhbWluZ0lkXHJcblx0XHRcdCAgICAgICAgfVxyXG5cdFx0ICAgICAgICB9LFxyXG5cdFx0ICAgICAgICBidXR0b25zOiBmYWxzZSxcclxuXHRcdCAgICAgICAgcGFyZW50OiB0aGlzXHJcblx0ICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGV4cGFuZEFsbCgpIHtcclxuXHQgICAgXHRcdGZvcihsZXQgdGVhbSBvZiB0aGlzLnRlYW1zKSB7XHJcblx0ICAgIFx0XHRcdHRoaXMuJHNldCh0aGlzLm9wZW4sIHRlYW0uaWQsIHRydWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGVhbUhlYWRpbmcodGVhbSkge1xyXG5cdCAgICBcdFx0aWYodGVhbS5uYW1lID09PSBudWxsKSB7XHJcblx0ICAgIFx0XHRcdHJldHVybiAnVW5hc3NpZ25lZCc7XHJcbiAgICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgbGV0IGh0bWwgPSB0ZWFtLm5hbWU7XHJcblxyXG5cdCAgICBcdFx0bGV0IGVtYWlsID0gJyc7XHJcblx0ICAgIFx0XHRmb3IobGV0IG1lbWJlciBvZiB0ZWFtLm1lbWJlcnMpIHtcclxuXHQgICAgXHRcdFx0aWYoZW1haWwgIT09ICcnKSB7XHJcblx0ICAgIFx0XHRcdFx0ZW1haWwgKz0gJzsnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBlbWFpbCArPSBtZW1iZXIuZW1haWw7XHJcbiAgICAgICAgICB9XHJcblxyXG5cdCAgICBcdFx0cmV0dXJuIGAke3RlYW0ubmFtZX0gPGEgY2xhc3M9XCJjbC1lbWFpbFwiIGhyZWY9XCJtYWlsdG86JHtlbWFpbH1cIj5lbWFpbDwvYT5gO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuICBkaXYuY2wtdGVhbXMtZWRpdG9yIHtcclxuXHJcbiAgICB0aDpudGgtY2hpbGQoMikge1xyXG4gICAgICBtaW4td2lkdGg6IDMwZW07XHJcbiAgICB9XHJcblxyXG4gICAgdGQ6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgbWluLXdpZHRoOiA1ZW07XHJcbiAgICB9XHJcblxyXG4gICAgdGQ6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgbWluLXdpZHRoOiAxMGVtO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhLmNsLWVtYWlsIHtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBmb250LXNpemU6IDAuODVlbTtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XHJcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBkaXYuY2wtdGVhbXMtZWRpdG9yLWRsZyB7XHJcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICB9XHJcblxyXG48L3N0eWxlPiIsIjwhLS1cclxuQGZpbGVcclxuQmFzZSBjb21wb25lbnQgZm9yIHBhZ2VzIHRoYXQgaW5jbHVkZXMgc3VwcG9ydCBmb3IgdGhpcy51c2VyXHJcblxyXG5Qcm92aWRlczpcclxuc2V0VGl0bGVcclxudGhpcy5yb290XHJcbi0tPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBQYWdlVnVlQmFzZSBmcm9tICdzaXRlLWNsL2pzL1Z1ZS9QYWdlVnVlQmFzZS52dWUnO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICAnZXh0ZW5kcyc6IFBhZ2VWdWVCYXNlLFxyXG4gICAgICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgXHR1c2VyKCkge1xyXG4gICAgICAgIFx0XHRyZXR1cm4gIHRoaXMuJHN0b3JlLnN0YXRlLnVzZXIudXNlclxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJkaXYuY2wtdGVhbWluZy1lZGl0b3Ige1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5kaXYuY2wtdGVhbWluZy1lZGl0b3IgPiBkaXYge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMS41ZW0gMCAyLjBlbSAwO1xcbn1cXG5cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImRpdi5jbC10ZWFtcy1lZGl0b3IgdGg6bnRoLWNoaWxkKDIpIHtcXG4gIG1pbi13aWR0aDogMzBlbTtcXG59XFxuZGl2LmNsLXRlYW1zLWVkaXRvciB0ZDpudGgtY2hpbGQoMikge1xcbiAgbWluLXdpZHRoOiA1ZW07XFxufVxcbmRpdi5jbC10ZWFtcy1lZGl0b3IgdGQ6bnRoLWNoaWxkKDMpIHtcXG4gIG1pbi13aWR0aDogMTBlbTtcXG59XFxuZGl2LmNsLXRlYW1zLWVkaXRvciBhLmNsLWVtYWlsIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDAuODVlbTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuZGl2LmNsLXRlYW1zLWVkaXRvci1kbGcge1xcbiAgbWluLWhlaWdodDogNDAwcHg7XFxufVxcblxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyByZWY6IFwibWVudVwiLCBjbGFzczogX3ZtLnVzZUNsYXNzIH0sIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMilcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2wtY2VudGVyLWluXCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJmb3JtXCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImNsLWlubGluZS1wYWRkZWRcIixcbiAgICAgICAgb246IHtcbiAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIF92bS5zdWJtaXQoKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICBfYyhcImxhYmVsXCIsIFtcbiAgICAgICAgICAgIF92bS5fdihcIlRlYW0gU2l6ZVwiKSxcbiAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zaXplLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzaXplXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHJlZjogXCJzaXplXCIsXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCI4ZW1cIiB9LFxuICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnNpemUgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBfdm0uc2l6ZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF1cbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbC1kaWFsb2ctYm90dG9tXCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgX3ZtLnN1Ym1pdCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl92KFwiRGlzdHJpYnV0ZVwiKV1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgX3ZtLmNsb3NlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3YoXCJDYW5jZWxcIildXG4gICAgICApXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2wtY2VudGVyLWluXCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJmb3JtXCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImNsLWlubGluZS1wYWRkZWRcIixcbiAgICAgICAgb246IHtcbiAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIF92bS5zdWJtaXQoKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICBfYyhcImxhYmVsXCIsIFtcbiAgICAgICAgICAgIF92bS5fdihcIk5hbWVcIiksXG4gICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udGVhbS5uYW1lLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ0ZWFtLm5hbWVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgcmVmOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS50ZWFtLm5hbWUgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0udGVhbSwgXCJuYW1lXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2wtZGlhbG9nLWJvdHRvbVwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIF92bS5zdWJtaXQoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLm9wZXJhdGlvbiA9PT0gXCJuZXdcIiA/IFwiQWRkXCIgOiBcIlVwZGF0ZVwiKSldXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIF92bS5jbG9zZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl92KFwiQ2FuY2VsXCIpXVxuICAgICAgKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsLWNlbnRlci1pblwiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZm9ybVwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJjbC1pbmxpbmUtcGFkZGVkXCIsXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICBfdm0uc3VibWl0KClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgX2MoXCJsYWJlbFwiLCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJUZWFtIE5hbWVzXCIpLFxuICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRleHRhcmVhXCIsIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5uYW1lcyxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibmFtZXNcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgcmVmOiBcIm5hbWVzXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHJvd3M6IFwiMTVcIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLm5hbWVzIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgX3ZtLm5hbWVzID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsLWRpYWxvZy1ib3R0b21cIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICBfdm0uc3VibWl0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3YoXCJTZXQgTmFtZXNcIildXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIF92bS5jbG9zZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl92KFwiQ2FuY2VsXCIpXVxuICAgICAgKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsLXRlYW1pbmctZWRpdG9yXCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgIF9jKFwiZm9ybVwiLCBbXG4gICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgX2MoXCJsYWJlbFwiLCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJUYWdcIiksXG4gICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udGVhbWluZy50YWcsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInRlYW1pbmcudGFnXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHJlZjogXCJ0YWdcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS50ZWFtaW5nLnRhZyB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS50ZWFtaW5nLCBcInRhZ1wiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICBfYyhcImxhYmVsXCIsIFtcbiAgICAgICAgICAgIF92bS5fdihcIk5hbWVcIiksXG4gICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udGVhbWluZy5uYW1lLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ0ZWFtaW5nLm5hbWVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS50ZWFtaW5nLm5hbWUgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0udGVhbWluZywgXCJuYW1lXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJcIiB9LCBbXG4gICAgICAgICAgX2MoXCJsYWJlbFwiLCBbXG4gICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS50ZWFtaW5nLnB1YmxpYyxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidGVhbWluZy5wdWJsaWNcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJjaGVja2JveFwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgY2hlY2tlZDogQXJyYXkuaXNBcnJheShfdm0udGVhbWluZy5wdWJsaWMpXG4gICAgICAgICAgICAgICAgICA/IF92bS5faShfdm0udGVhbWluZy5wdWJsaWMsIG51bGwpID4gLTFcbiAgICAgICAgICAgICAgICAgIDogX3ZtLnRlYW1pbmcucHVibGljXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHZhciAkJGEgPSBfdm0udGVhbWluZy5wdWJsaWMsXG4gICAgICAgICAgICAgICAgICAgICQkZWwgPSAkZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICAkJGMgPSAkJGVsLmNoZWNrZWQgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyICQkdiA9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgJCRpID0gX3ZtLl9pKCQkYSwgJCR2KVxuICAgICAgICAgICAgICAgICAgICBpZiAoJCRlbC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgJCRpIDwgMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnRlYW1pbmcsIFwicHVibGljXCIsICQkYS5jb25jYXQoWyQkdl0pKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICQkaSA+IC0xICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRlYW1pbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicHVibGljXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICQkYS5zbGljZSgwLCAkJGkpLmNvbmNhdCgkJGEuc2xpY2UoJCRpICsgMSkpXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS50ZWFtaW5nLCBcInB1YmxpY1wiLCAkJGMpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBQdWJsaWNcIilcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50XCIgfSwgW1xuICAgIF92bS50ZWFtaW5ncyAhPT0gbnVsbFxuICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZ1bGxcIiB9LCBbXG4gICAgICAgICAgX3ZtLnRlYW1pbmdzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJ0YWJsZVwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnRlYW1pbmdzLCBmdW5jdGlvbih0ZWFtaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInRyXCIsIHsga2V5OiB0ZWFtaW5nLmlkIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lZGl0ZXIodGVhbWluZylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJvb3QgKyBcIi92ZW5kb3IvY2wvc2l0ZS9pbWcvcGVuY2lsMTYucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJFZGl0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkVkaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlbGV0ZXIodGVhbWluZylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5yb290ICsgXCIvdmVuZG9yL2NsL3NpdGUvaW1nL3gucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJEZWxldGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRGVsZXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiBfdm0ucm9vdCArIFwiL2NsL2NvbnNvbGUvdGVhbS9cIiArIHRlYW1pbmcuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHRlYW1pbmcudGFnKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModGVhbWluZy5uYW1lKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyh0ZWFtaW5nLnB1YmxpYyA/IFwiUHVibGljXCIgOiBcIlByaXZhdGVcIikpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCJUaGVyZSBhcmUgY3VycmVudGx5IG5vIGRlZmluZWQgdGVhbWluZ3MuXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIkNob29zZSBBZGQgVGVhbWluZyB0byBhZGQgYSBuZXcgdGVhbWluZy5cIildKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgOiBfdm0uX2UoKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJ0clwiLCBbXG4gICAgICBfYyhcInRoXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlRhZ1wiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIk5hbWVcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJWaXNpYmlsaXR5XCIpXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50XCIgfSwgW1xuICAgIF92bS50ZWFtcyAhPT0gbnVsbFxuICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZ1bGwgY2wtdGVhbXMtZWRpdG9yXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ0YWJsZVwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzbWFsbFwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fbChfdm0udGVhbXMsIGZ1bmN0aW9uKHRlYW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0clwiLCB7IGtleTogdGVhbS5pZCwgc3RhdGljQ2xhc3M6IFwiY2wtaW50ZXJuYWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidGhcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInJpZ2h0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZWFtLm5hbWUgIT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVkaXRlcih0ZWFtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvdmVuZG9yL2NsL3NpdGUvaW1nL3BlbmNpbDE2LnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiRWRpdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJFZGl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZWxldGVyKHRlYW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yb290ICsgXCIvdmVuZG9yL2NsL3NpdGUvaW1nL3gucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJEZWxldGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRGVsZXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZWFtLm5hbWUgPT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2wtbWVudVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBcImFkZC1jbGFzc1wiOiBcImNsLWlubGluZVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJhXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJvb3QgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL3ZlbmRvci9jbC9zaXRlL2ltZy9tZW51YmFycy5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInVsXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kaXN0cmlidXRlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJEaXN0cmlidXRlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50b2dnbGUodGVhbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzaXRlLnJvb3QgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL3ZlbmRvci9jbC9zaXRlL2ltZy9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKF92bS5vcGVuW3RlYW0uaWRdID09PSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwibWludXMucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJwbHVzLnBuZ1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sc3BhbjogXCIyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0udGVhbUhlYWRpbmcodGVhbSkpIH1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyh0ZWFtLm1lbWJlcnMubGVuZ3RoKSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5vcGVuW3RlYW0uaWRdID09PSB0cnVlXG4gICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVhbS5tZW1iZXJzLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbHNwYW46IFwiNFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIioqKiBlbXB0eSAqKipcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2wodGVhbS5tZW1iZXJzLCBmdW5jdGlvbihtZW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJyaWdodFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiY2wtbWVudVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJhXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi92ZW5kb3IvY2wvc2l0ZS9pbWcvbWVudWJhcnMucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1bFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS50ZWFtcywgZnVuY3Rpb24odGVhbTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5tb3ZlKG1lbWJlciwgdGVhbTEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbTEubmFtZSAhPT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRlYW0xLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlVuYXNzaWduZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbSA9PT0gdGVhbTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi92ZW5kb3IvY2wvc2l0ZS9pbWcvY2hlY2sxNi5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBocmVmOiBcIm1haWx0bzpcIiArIG1lbWJlci5lbWFpbCB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKG1lbWJlci51c2VyKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKG1lbWJlci5uYW1lKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJlbVwiLCBbX3ZtLl92KF92bS5fcyhfdm0udG90YWxzKSldKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICA6IF92bS5fZSgpXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RlYW1pbmdFZGl0b3IudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIzOTg4ZTMyMFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGVhbWluZ0VkaXRvci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RlYW1pbmdFZGl0b3IudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RlYW1zRWRpdG9yLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMDRiMTQ3ZDJcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RlYW1zRWRpdG9yLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGVhbXNFZGl0b3IudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0NvbnNvbGVDb21wb25lbnRCYXNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQ29uc29sZUNvbXBvbmVudEJhc2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxjaGFybFxcXFxEb2N1bWVudHNcXFxcQ2xhc3Nlc1xcXFxDU0UzMjBcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2OWUzNTVhOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2OWUzNTVhOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvY29uc29sZS9qcy9Db25zb2xlQ29tcG9uZW50QmFzZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db25zb2xlQ29tcG9uZW50QmFzZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbnNvbGVDb21wb25lbnRCYXNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIi8qKlxyXG4gKiBAZmlsZSBNZW1iZXIgb2YgYSBjb3Vyc2VcclxuICogQXR0YWNoZXMgdG8gYSB1c2VyIE9iamVjdFxyXG4gKi9cclxuXHJcbmltcG9ydCB7TWVtYmVyc2hpcH0gZnJvbSAnLi4vLi4vLi4vdXNlcnMvanMvVXNlcnMvTWVtYmVyc2hpcC5qcyc7XHJcblxyXG5sZXQgTWVtYmVyID0gZnVuY3Rpb24oanNvbikge1xyXG4gICAgTWVtYmVyc2hpcC5jYWxsKHRoaXMpO1xyXG5cclxuICAgIGxldCByb2xlID0gJ0cnO1xyXG5cclxuICAgIGlmKGpzb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBqc29uLmlkO1xyXG4gICAgICAgIHRoaXMuc2VtZXN0ZXIgPSBqc29uLnNlbWVzdGVyO1xyXG4gICAgICAgIHRoaXMuc2VjdGlvbiA9IGpzb24uc2VjdGlvbjtcclxuICAgICAgICByb2xlID0ganNvbi5yb2xlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmlkID0gMDsgICAgLy8gU3lzdGVtIG1lbWJlcnNoaXAgSURcclxuICAgICAgICB0aGlzLnNlbWVzdGVyID0gbnVsbDsgICAvLyBTZW1lc3RlciBjb2RlXHJcbiAgICAgICAgdGhpcy5zZWN0aW9uID0gbnVsbDsgIC8vIFNlY3Rpb24gSWRcclxuICAgICAgICByb2xlID0gbnVsbDsgICAgICAgLy8gTWVtYmVyc2hpcCByb2xlXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yb2xlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHJvbGU7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRSb2xlID0gZnVuY3Rpb24ocm9sZV8pIHtcclxuICAgICAgICByb2xlID0gcm9sZV87XHJcbiAgICB9XHJcbn1cclxuXHJcbk1lbWJlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKE1lbWJlcnNoaXAucHJvdG90eXBlKTtcclxuTWVtYmVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE1lbWJlcjtcclxuXHJcbi8qKlxyXG4gKiBHZXQgdGhlIGNvdXJzZSBzZWN0aW9uIGZvciBhIG1lbWJlclxyXG4gKiBAcGFyYW0gc3RvcmUgVnVleCBzdG9yZVxyXG4gKiBAcmV0dXJucyB7Kn1cclxuICovXHJcbk1lbWJlci5wcm90b3R5cGUuZ2V0U2VjdGlvbiA9IGZ1bmN0aW9uKHN0b3JlKSB7XHJcbiAgICByZXR1cm4gc3RvcmUuZ2V0dGVyc1snY291cnNlL3NlY3Rpb24nXSh0aGlzLnNlbWVzdGVyLCB0aGlzLnNlY3Rpb24pO1xyXG59XHJcblxyXG4vKipcclxuICogR2V0IGFuIGFzc2lnbm1lbnQgZm9yIGEgbWVtYmVyXHJcbiAqIEBwYXJhbSBzdG9yZSBWdWV4IHN0b3JlXHJcbiAqIEBwYXJhbSBhc3NpZ250YWcgQXNzaWdubWVudCB0YWdcclxuICovXHJcbk1lbWJlci5wcm90b3R5cGUuZ2V0QXNzaWdubWVudCA9IGZ1bmN0aW9uKHN0b3JlLCBhc3NpZ250YWcpIHtcclxuICAgIGNvbnN0IHNlY3Rpb24gPSB0aGlzLmdldFNlY3Rpb24oc3RvcmUpO1xyXG4gICAgcmV0dXJuIHNlY3Rpb24uZ2V0QXNzaWdubWVudChhc3NpZ250YWcpO1xyXG59XHJcblxyXG5cclxuLy8gVGhlIHBvc3NpYmxlIG1lbWJlciByb2xlc1xyXG4vLyBNdXN0IG1hdGNoIHZhbHVlcyBpbiBNZW1iZXIucGhwXHJcbk1lbWJlci5HVUVTVCA9ICdHJzsgICAgIC8vLzwgR3Vlc3QgdXNlciB2aXNpdGluZyB0aGUgc2l0ZVxyXG5NZW1iZXIuVVNFUiA9ICdVJzsgICAgICAvLy88IFN0YW5kYXJkIHVzZXIgZnJvbSBVc2VyLCBkb24ndCB1c2UgZm9yIE1lbWJlclxyXG5NZW1iZXIuRFJPUFBFRCA9ICdEJzsgICAvLy88IFVzZXIgaGFzIGRyb3BwZWQgdGhlIGNvdXJzZVxyXG5NZW1iZXIuU1RVREVOVCA9ICdUJzsgICAvLy88IEVucm9sbGVkIHN0dWRlbnQgaW4gY291cnNlXHJcbk1lbWJlci5TVEFGRiA9ICdTJzsgICAgIC8vLzwgQW55IGNvdXJzZSBzdGFmZlxyXG5NZW1iZXIuR1JBREVSID0gJ1InOyAgICAvLy88IEdyYWRlcnNcclxuTWVtYmVyLlRBID0gJ0UnOyAgICAgICAgLy8vPCBUZWFjaGluZyBhc3Npc3RhbnRcclxuTWVtYmVyLklOU1RSVUNUT1IgPSAnSSc7ICAgIC8vLzwgQ291cnNlIGluc3RydWN0b3JcclxuTWVtYmVyLkFETUlOID0gJ0EnOyAgICAgLy8vPCBBZG1pblxyXG5cclxuTWVtYmVyLnByb3RvdHlwZS5nZXRSb2xlcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IHJvbGVzID0ge307XHJcbiAgICByb2xlc1tNZW1iZXIuR1VFU1RdID0ge25hbWU6ICdHdWVzdCcsIHByaW9yaXR5OiAxfTtcclxuICAgIHJvbGVzW01lbWJlci5EUk9QUEVEXSA9IHtuYW1lOiAnRHJvcHBlZCcsIHByaW9yaXR5OiAyfTtcclxuICAgIHJvbGVzW01lbWJlci5VU0VSXSA9IHtuYW1lOiAnVXNlcicsIHByaW9yaXR5OiAzLCBza2lwOiB0cnVlfTtcclxuICAgIHJvbGVzW01lbWJlci5TVFVERU5UXSA9IHtuYW1lOiAnU3R1ZGVudCcsIHByaW9yaXR5OiA0fTtcclxuICAgIHJvbGVzW01lbWJlci5TVEFGRl0gPSB7bmFtZTogJ1N0YWZmJywgcHJpb3JpdHk6IDUsIHNraXA6IHRydWV9O1xyXG4gICAgcm9sZXNbTWVtYmVyLkdSQURFUl0gPSB7bmFtZTogJ0dyYWRlcicsIHByaW9yaXR5OiA2fTtcclxuICAgIHJvbGVzW01lbWJlci5UQV0gPSB7bmFtZTogJ1RlYWNoaW5nIEFzc2lzdGFudCcsIHByaW9yaXR5OiA3fTtcclxuICAgIHJvbGVzW01lbWJlci5JTlNUUlVDVE9SXSA9IHtuYW1lOiAnSW5zdHJ1Y3RvcicsIHByaW9yaXR5OiA4fTtcclxuICAgIHJvbGVzW01lbWJlci5BRE1JTl0gPSB7bmFtZTogJ0FkbWluJywgcHJpb3JpdHk6IDEwMH07XHJcblxyXG4gICAgcmV0dXJuIHJvbGVzO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IHtNZW1iZXJ9O1xyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL01lbnUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQ0YjA1MTAyJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL01lbnUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9NZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZDRiMDUxMDInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZDRiMDUxMDInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL01lbnUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQ0YjA1MTAyJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2Q0YjA1MTAyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvc2l0ZS9qcy9VSS9NZW51LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01lbnUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NZW51LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kNGIwNTEwMiZcIiIsInZhciByZW5kZXIsIHN0YXRpY1JlbmRlckZuc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9QYWdlVnVlQmFzZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1BhZ2VWdWVCYXNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMTJiYmFlZjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMTJiYmFlZjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL3NpdGUvanMvVnVlL1BhZ2VWdWVCYXNlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BhZ2VWdWVCYXNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGFnZVZ1ZUJhc2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IERpYWxvZyBmcm9tICdkaWFsb2ctY2wnO1xyXG5cclxuLyoqXHJcbiAqIERpYWxvZyBib3ggdGhhdCBjb250YWlucyBhIFZ1ZSBjb21wb25lbnRcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgVnVlRGlhbG9nID0gZnVuY3Rpb24oc2l0ZSwgY29uZmlnKSB7XHJcblx0bGV0IHZ1ZSA9IG51bGw7XHJcblx0bGV0IGRhdGEgPSBudWxsO1xyXG5cdGxldCBwYXJlbnQgPSBudWxsO1xyXG5cclxuXHRsZXQgY29uZmlnRCA9IHt9O1xyXG5cdGZvcihsZXQga2V5IGluIGNvbmZpZykge1xyXG5cdFx0c3dpdGNoKGtleSkge1xyXG5cdFx0XHRjYXNlICd2dWUnOlxyXG5cdFx0XHRcdHZ1ZSA9IGNvbmZpZy52dWU7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlICdkYXRhJzpcclxuXHRcdFx0XHRkYXRhID0gY29uZmlnLmRhdGE7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlICdwYXJlbnQnOlxyXG5cdFx0XHRcdHBhcmVudCA9IGNvbmZpZy5wYXJlbnQ7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdC8vIE1vdmUgdGhlc2Ugb3ZlciBmb3IgdGhlIGRpYWxvZyBib3hcclxuXHRcdFx0XHRjb25maWdEW2tleV0gPSBjb25maWdba2V5XTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdFZ1ZURpYWxvZy5pZCsrO1xyXG5cdGxldCBpZCA9ICdjbC1kaWFsb2ctJyArIFZ1ZURpYWxvZy5pZDtcclxuXHRjb25maWdELmNvbnRlbnQgPSBgPGRpdiBpZD1cIiR7aWR9XCI+PC9kaXY+YDtcclxuXHJcblx0bGV0IGRpYWxvZyA9IG5ldyBEaWFsb2coY29uZmlnRCk7XHJcblxyXG5cdGxldCB0ZW1wbGF0ZSA9ICc8dnVlJztcclxuXHRmb3IobGV0IGtleSBpbiBkYXRhKCkpIHtcclxuXHRcdHRlbXBsYXRlICs9IGAgOiR7a2V5fT1cIiR7a2V5fVwiYDtcclxuXHR9XHJcblxyXG5cdGlmKHBhcmVudCAhPT0gbnVsbCkge1xyXG5cdFx0dGVtcGxhdGUgKz0gYCA6cGFyZW50PVwicGFyZW50XCJgO1xyXG5cdH1cclxuXHJcblx0dGVtcGxhdGUgKz0gJz48L3Z1ZT4nO1xyXG5cclxuXHQvLyBDcmVhdGUgYSBWdWUgaW5zaWRlIHRoZSBkaWFsb2cgYm94XHJcblx0bmV3IHNpdGUuVnVlKHtcclxuXHRcdGVsOiAnIycgKyBpZCxcclxuXHRcdHNpdGUsXHJcblx0XHRkaWFsb2csXHJcblx0XHRkYXRhOiBmdW5jdGlvbigpIHtcclxuXHRcdCAgIGxldCBkID0gZGF0YSgpO1xyXG5cdFx0ICAgaWYocGFyZW50ICE9PSBudWxsKSB7XHJcblx0XHRcdCAgIGQucGFyZW50ID0gcGFyZW50O1xyXG5cdFx0ICAgfVxyXG5cdFx0ICAgcmV0dXJuIGQ7XHJcblx0XHR9LFxyXG5cdFx0dGVtcGxhdGU6IHRlbXBsYXRlLFxyXG5cdFx0Y29tcG9uZW50czoge1xyXG5cdFx0XHR2dWU6IHZ1ZVxyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcblZ1ZURpYWxvZy5pZCA9IDA7XHJcbiIsInZhciByZW5kZXIsIHN0YXRpY1JlbmRlckZuc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9WdWVEaWFsb2cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9WdWVEaWFsb2cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxjaGFybFxcXFxEb2N1bWVudHNcXFxcQ2xhc3Nlc1xcXFxDU0UzMjBcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyNTAyMDUwYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyNTAyMDUwYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvc2l0ZS9qcy9WdWUvVnVlRGlhbG9nLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Z1ZURpYWxvZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Z1ZURpYWxvZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCIvKipcclxuICogQGZpbGVcclxuICogVGhlIG1haW4gVGVhbSBlbnRyeSBwb2ludFxyXG4gKi9cclxuXHJcbmltcG9ydCB7VGVhbUZhY3Rvcnl9IGZyb20gXCIuL2pzL1RlYW1GYWN0b3J5XCI7XHJcbmltcG9ydCB7VGVhbUNvbnNvbGV9IGZyb20gJy4vanMvQ29uc29sZS9UZWFtQ29uc29sZSc7XHJcblxyXG4vL1xyXG4vLyBDcmVhdGUgdGhlIHRlYW0gcnVudGltZSBjb21wb25lbnRcclxuLy9cclxuVGVhbUZhY3RvcnkuY3JlYXRlKFNpdGUuU2l0ZSk7XHJcblxyXG4vL1xyXG4vLyBJbnN0YWxsIHRoZSBjb25zb2xlIGNvbXBvbmVudHNcclxuLy9cclxuXHJcbmlmKFNpdGUuU2l0ZS5jb25zb2xlICE9PSB1bmRlZmluZWQpIHtcclxuXHRUZWFtQ29uc29sZS5zZXR1cChTaXRlLlNpdGUuY29uc29sZSk7XHJcbn1cclxuIiwiaW1wb3J0IHtNZW1iZXJ9IGZyb20gXCJjb3Vyc2UtY2wvanMvTWVtYmVycy9NZW1iZXJcIjtcclxuaW1wb3J0IFRlYW1pbmdzRWRpdG9yVnVlIGZyb20gJy4vVGVhbWluZ3NFZGl0b3IudnVlJztcclxuaW1wb3J0IFRlYW1zRWRpdG9yVnVlIGZyb20gJy4vVGVhbXNFZGl0b3IudnVlJztcclxuXHJcbi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBUZWFtIHN5c3RlbSBjb25zb2xlIGNvbXBvbmVudHNcclxuICovXHJcblxyXG5leHBvcnQgbGV0IFRlYW1Db25zb2xlID0gZnVuY3Rpb24oKSB7XHJcbn1cclxuXHJcblRlYW1Db25zb2xlLnNldHVwID0gZnVuY3Rpb24oQ29uc29sZSkge1xyXG4gICAgQ29uc29sZS50YWJsZXMuYWRkKHtcclxuICAgICAgICB0aXRsZTogJ1RlYW1zJyxcclxuICAgICAgICBvcmRlcjogMjAsXHJcbiAgICAgICAgYXBpOiAnL2FwaS90ZWFtL3RhYmxlcydcclxuICAgIH0pO1xyXG5cclxuXHRjb25zdCBwYWdlID0ge3RpdGxlOiAnTWFpbicsIHJvdXRlOiAnJywgb3JkZXI6IDF9O1xyXG5cclxuXHRDb25zb2xlLmNvbXBvbmVudHMuYWRkT3B0aW9uKHtcclxuXHRcdGF0TGVhc3Q6IE1lbWJlci5UQSxcclxuXHRcdHBhZ2U6IHBhZ2UsXHJcblx0XHRzZWN0aW9uOiB7dGl0bGU6ICdDb3Vyc2UnLCBvcmRlcjogNX0sXHJcblx0XHR0aXRsZTogJ1RlYW1zJyxcclxuXHRcdG9yZGVyOiAxMCxcclxuXHRcdHJvdXRlOiAnL3RlYW1zJyxcclxuXHRcdHJvdXRlczogW1xyXG5cdFx0XHR7cm91dGU6ICcvdGVhbXMnLCBjb21wb25lbnQ6IFRlYW1pbmdzRWRpdG9yVnVlfVxyXG5cdFx0XVxyXG5cdH0pO1xyXG5cclxuXHRDb25zb2xlLmNvbXBvbmVudHMuYWRkUm91dGVzKFtcclxuXHRcdHtyb3V0ZTogJy90ZWFtLzppZCcsIGNvbXBvbmVudDogVGVhbXNFZGl0b3JWdWUsIHByb3BzOiB0cnVlfVxyXG5cdF0pO1xyXG5cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9UZWFtRGlzdHJpYnV0ZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUxNDgyZGFiJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1RlYW1EaXN0cmlidXRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1RlYW1EaXN0cmlidXRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXERvY3VtZW50c1xcXFxDbGFzc2VzXFxcXENTRTMyMFxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzUxNDgyZGFiJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzUxNDgyZGFiJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9UZWFtRGlzdHJpYnV0ZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUxNDgyZGFiJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzUxNDgyZGFiJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvdGVhbS9qcy9Db25zb2xlL1RlYW1EaXN0cmlidXRlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UZWFtRGlzdHJpYnV0ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UZWFtRGlzdHJpYnV0ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RlYW1EaXN0cmlidXRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTE0ODJkYWImXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1RlYW1FZGl0b3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJjZTdhYjYzJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1RlYW1FZGl0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9UZWFtRWRpdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMmNlN2FiNjMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMmNlN2FiNjMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1RlYW1FZGl0b3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJjZTdhYjYzJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzJjZTdhYjYzJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvdGVhbS9qcy9Db25zb2xlL1RlYW1FZGl0b3IudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGVhbUVkaXRvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RlYW1FZGl0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RlYW1FZGl0b3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJjZTdhYjYzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9UZWFtTmFtZUxvYWRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTc4NGJjZjQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVGVhbU5hbWVMb2FkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9UZWFtTmFtZUxvYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXERvY3VtZW50c1xcXFxDbGFzc2VzXFxcXENTRTMyMFxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzE3ODRiY2Y0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzE3ODRiY2Y0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9UZWFtTmFtZUxvYWRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTc4NGJjZjQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMTc4NGJjZjQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC90ZWFtL2pzL0NvbnNvbGUvVGVhbU5hbWVMb2FkZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGVhbU5hbWVMb2FkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UZWFtTmFtZUxvYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGVhbU5hbWVMb2FkZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE3ODRiY2Y0JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9UZWFtaW5nRWRpdG9yLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NmMxYzZlZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9UZWFtaW5nRWRpdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVGVhbWluZ0VkaXRvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vVGVhbWluZ0VkaXRvci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXERvY3VtZW50c1xcXFxDbGFzc2VzXFxcXENTRTMyMFxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzQ2YzFjNmVlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzQ2YzFjNmVlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9UZWFtaW5nRWRpdG9yLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NmMxYzZlZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0NmMxYzZlZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL3RlYW0vanMvQ29uc29sZS9UZWFtaW5nRWRpdG9yLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RlYW1pbmdFZGl0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UZWFtaW5nRWRpdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGVhbWluZ0VkaXRvci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGVhbWluZ0VkaXRvci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGVhbWluZ0VkaXRvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDZjMWM2ZWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1RlYW1pbmdzRWRpdG9yLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lMzFhMjAxOCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9UZWFtaW5nc0VkaXRvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1RlYW1pbmdzRWRpdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZTMxYTIwMTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZTMxYTIwMTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1RlYW1pbmdzRWRpdG9yLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lMzFhMjAxOCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdlMzFhMjAxOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL3RlYW0vanMvQ29uc29sZS9UZWFtaW5nc0VkaXRvci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UZWFtaW5nc0VkaXRvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RlYW1pbmdzRWRpdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UZWFtaW5nc0VkaXRvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTMxYTIwMTgmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1RlYW1zRWRpdG9yLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NzNjM2M1YSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9UZWFtc0VkaXRvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1RlYW1zRWRpdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9UZWFtc0VkaXRvci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXERvY3VtZW50c1xcXFxDbGFzc2VzXFxcXENTRTMyMFxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzQ3M2MzYzVhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzQ3M2MzYzVhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9UZWFtc0VkaXRvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDczYzNjNWEmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDczYzNjNWEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC90ZWFtL2pzL0NvbnNvbGUvVGVhbXNFZGl0b3IudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGVhbXNFZGl0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UZWFtc0VkaXRvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RlYW1zRWRpdG9yLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UZWFtc0VkaXRvci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGVhbXNFZGl0b3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ3M2MzYzVhJlwiIiwiXHJcbmV4cG9ydCBjb25zdCBUZWFtID0gZnVuY3Rpb24oZGF0YSkge1xyXG5cdGlmKGRhdGEgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0dGhpcy5uYW1lID0gZGF0YS5uYW1lO1xyXG5cdFx0dGhpcy5pZCA9IGRhdGEuaWQ7XHJcblx0XHR0aGlzLm1lbWJlcnMgPSBkYXRhLm1lbWJlcnM7XHJcblx0fSBlbHNlIHtcclxuXHRcdHRoaXMubmFtZSA9ICcnO1xyXG5cdFx0dGhpcy5pZCA9IDA7XHJcblx0XHR0aGlzLm1lbWJlcnMgPSBbXTtcclxuXHR9XHJcblxyXG5cdHRoaXMuY2xvbmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiBuZXcgVGVhbSh0aGlzKTtcclxuXHR9XHJcbn0iLCJpbXBvcnQge1RlYW19IGZyb20gXCIuL1RlYW1cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBUZWFtRmFjdG9yeSA9IGZ1bmN0aW9uKCkge1xyXG59XHJcblxyXG5UZWFtRmFjdG9yeS5jcmVhdGUgPSBmdW5jdGlvbihzaXRlKSB7XHJcblxyXG5cdG5ldyBUZWFtKHNpdGUpO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBPYmplY3QgdGhlIHJlcHJlc2VudHMgYSB0ZWFtaW5nXHJcbiAqIEBwYXJhbSBkYXRhXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFRlYW1pbmcgPSBmdW5jdGlvbihkYXRhKSB7XHJcblx0aWYoZGF0YSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHR0aGlzLmlkID0gZGF0YS5pZDtcclxuXHRcdHRoaXMudGFnID0gZGF0YS50YWc7XHJcblx0XHR0aGlzLm5hbWUgPSBkYXRhLm5hbWU7XHJcblx0XHR0aGlzLnB1YmxpYyA9IGRhdGEucHVibGljO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR0aGlzLmlkID0gMDtcclxuXHRcdHRoaXMudGFnID0gJyc7XHJcblx0XHR0aGlzLm5hbWUgPSAnJztcclxuXHRcdHRoaXMucHVibGljID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdHRoaXMuY2xvbmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiBuZXcgVGVhbWluZyh0aGlzKTtcclxuXHR9XHJcbn0iLCIvKipcclxuICogQGZpbGVcclxuICogQSBtZW1iZXJzaGlwIGFzc29jaWF0ZWQgd2l0aCBhIHVzZXIuXHJcbiAqXHJcbiAqIFRoaXMgaXMgYSBiYXNlIG9iamVjdCB0aGF0IHdpbGwgYmUgaW5oZXJpdGVkIGJ5XHJcbiAqIGFjdHVhbCBtZW1iZXJzaGlwIG9iamVjdHMuXHJcbiAqL1xyXG5cclxudmFyIE1lbWJlcnNoaXAgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAvLy8gVGhlIFVzZXIgb2JqZWN0IGZvciB0aGlzIG1lbWJlcnNoaXBcclxuICAgIHRoaXMudXNlciA9IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCB7TWVtYmVyc2hpcH07XHJcbiIsInZhciByZW5kZXIsIHN0YXRpY1JlbmRlckZuc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Vc2VyVnVlQmFzZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1VzZXJWdWVCYXNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYzdlNGU0OWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYzdlNGU0OWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL3VzZXJzL2pzL1Z1ZS9Vc2VyVnVlQmFzZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VyVnVlQmFzZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXJWdWVCYXNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=