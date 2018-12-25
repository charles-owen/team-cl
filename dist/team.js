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

        console.log(response);
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

      console.log(this.teamings);
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
/* harmony import */ var dialog_cl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dialog-cl */ "./vendor/cl/site/node_modules/dialog-cl/src/app.modules.js");

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
/**
 * @file
 *
 */

var TeamFactory = function TeamFactory() {};

TeamFactory.create = function (site) {
  var quiz = new _Team__WEBPACK_IMPORTED_MODULE_0__["Team"](site); // site.start( () => {
  // 	let element = document.querySelector('div.cl-quiz');
  // 	if(element !== null) {
  // 		quiz.start(element);
  // 	}
  // });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvY29uc29sZS9qcy9Db25zb2xlQ29tcG9uZW50QmFzZS52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9zaXRlL2pzL1VJL01lbnUudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvc2l0ZS9qcy9WdWUvUGFnZVZ1ZUJhc2UudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvc2l0ZS9qcy9WdWUvVnVlRGlhbG9nLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL3RlYW0vanMvQ29uc29sZS9UZWFtRGlzdHJpYnV0ZXIudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvdGVhbS9qcy9Db25zb2xlL1RlYW1FZGl0b3IudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvdGVhbS9qcy9Db25zb2xlL1RlYW1OYW1lTG9hZGVyLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL3RlYW0vanMvQ29uc29sZS9UZWFtaW5nRWRpdG9yLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL3RlYW0vanMvQ29uc29sZS9UZWFtaW5nc0VkaXRvci52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC90ZWFtL2pzL0NvbnNvbGUvVGVhbXNFZGl0b3IudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvdXNlcnMvanMvVnVlL1VzZXJWdWVCYXNlLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdGVhbS9qcy9Db25zb2xlL1RlYW1pbmdFZGl0b3IudnVlPzUwZjUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3RlYW0vanMvQ29uc29sZS9UZWFtc0VkaXRvci52dWU/YjdlNCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvc2l0ZS9qcy9VSS9NZW51LnZ1ZT85ZjJhIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC90ZWFtL2pzL0NvbnNvbGUvVGVhbURpc3RyaWJ1dGVyLnZ1ZT8yZDlmIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC90ZWFtL2pzL0NvbnNvbGUvVGVhbUVkaXRvci52dWU/NjQ4NCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdGVhbS9qcy9Db25zb2xlL1RlYW1OYW1lTG9hZGVyLnZ1ZT9jM2NlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC90ZWFtL2pzL0NvbnNvbGUvVGVhbWluZ0VkaXRvci52dWU/N2E5OCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdGVhbS9qcy9Db25zb2xlL1RlYW1pbmdzRWRpdG9yLnZ1ZT9mZmM1Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC90ZWFtL2pzL0NvbnNvbGUvVGVhbXNFZGl0b3IudnVlPzMzOWMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3RlYW0vanMvQ29uc29sZS9UZWFtaW5nRWRpdG9yLnZ1ZT9iYzZhIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC90ZWFtL2pzL0NvbnNvbGUvVGVhbXNFZGl0b3IudnVlPzA1NWEiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvQ29uc29sZUNvbXBvbmVudEJhc2UudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL0NvbnNvbGVDb21wb25lbnRCYXNlLnZ1ZT84OGQxIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvTWVtYmVycy9NZW1iZXIuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3NpdGUvanMvVUkvTWVudS52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3NpdGUvanMvVUkvTWVudS52dWU/YmQ5NiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvc2l0ZS9qcy9VSS9NZW51LnZ1ZT8wYTk3Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9zaXRlL2pzL1Z1ZS9QYWdlVnVlQmFzZS52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3NpdGUvanMvVnVlL1BhZ2VWdWVCYXNlLnZ1ZT8xMThhIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9zaXRlL2pzL1Z1ZS9WdWVEaWFsb2cuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3NpdGUvanMvVnVlL1Z1ZURpYWxvZy52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3NpdGUvanMvVnVlL1Z1ZURpYWxvZy52dWU/NDZiMiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdGVhbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdGVhbS9qcy9Db25zb2xlL1RlYW1Db25zb2xlLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC90ZWFtL2pzL0NvbnNvbGUvVGVhbURpc3RyaWJ1dGVyLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdGVhbS9qcy9Db25zb2xlL1RlYW1EaXN0cmlidXRlci52dWU/MWIwOCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdGVhbS9qcy9Db25zb2xlL1RlYW1EaXN0cmlidXRlci52dWU/NmQ5YSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdGVhbS9qcy9Db25zb2xlL1RlYW1FZGl0b3IudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC90ZWFtL2pzL0NvbnNvbGUvVGVhbUVkaXRvci52dWU/MGU4YSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdGVhbS9qcy9Db25zb2xlL1RlYW1FZGl0b3IudnVlPzU3NTMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3RlYW0vanMvQ29uc29sZS9UZWFtTmFtZUxvYWRlci52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3RlYW0vanMvQ29uc29sZS9UZWFtTmFtZUxvYWRlci52dWU/ZjdlZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdGVhbS9qcy9Db25zb2xlL1RlYW1OYW1lTG9hZGVyLnZ1ZT9hM2RkIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC90ZWFtL2pzL0NvbnNvbGUvVGVhbWluZ0VkaXRvci52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3RlYW0vanMvQ29uc29sZS9UZWFtaW5nRWRpdG9yLnZ1ZT9hZDRkIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC90ZWFtL2pzL0NvbnNvbGUvVGVhbWluZ0VkaXRvci52dWU/MTAyZCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdGVhbS9qcy9Db25zb2xlL1RlYW1pbmdFZGl0b3IudnVlPzUwMWMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3RlYW0vanMvQ29uc29sZS9UZWFtaW5nc0VkaXRvci52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3RlYW0vanMvQ29uc29sZS9UZWFtaW5nc0VkaXRvci52dWU/Mzc5MyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdGVhbS9qcy9Db25zb2xlL1RlYW1pbmdzRWRpdG9yLnZ1ZT83YzdmIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC90ZWFtL2pzL0NvbnNvbGUvVGVhbXNFZGl0b3IudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC90ZWFtL2pzL0NvbnNvbGUvVGVhbXNFZGl0b3IudnVlP2JhNTYiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3RlYW0vanMvQ29uc29sZS9UZWFtc0VkaXRvci52dWU/ODQ1YyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdGVhbS9qcy9Db25zb2xlL1RlYW1zRWRpdG9yLnZ1ZT83Y2ZhIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC90ZWFtL2pzL1RlYW0uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3RlYW0vanMvVGVhbUZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3RlYW0vanMvVGVhbWluZy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdXNlcnMvanMvVXNlcnMvTWVtYmVyc2hpcC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdXNlcnMvanMvVnVlL1VzZXJWdWVCYXNlLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdXNlcnMvanMvVnVlL1VzZXJWdWVCYXNlLnZ1ZT9iNmUxIl0sIm5hbWVzIjpbIk1lbWJlciIsImpzb24iLCJNZW1iZXJzaGlwIiwiY2FsbCIsInJvbGUiLCJ1bmRlZmluZWQiLCJpZCIsInNlbWVzdGVyIiwic2VjdGlvbiIsInNldFJvbGUiLCJyb2xlXyIsInByb3RvdHlwZSIsIk9iamVjdCIsImNyZWF0ZSIsImNvbnN0cnVjdG9yIiwiZ2V0U2VjdGlvbiIsInN0b3JlIiwiZ2V0dGVycyIsImdldEFzc2lnbm1lbnQiLCJhc3NpZ250YWciLCJHVUVTVCIsIlVTRVIiLCJEUk9QUEVEIiwiU1RVREVOVCIsIlNUQUZGIiwiR1JBREVSIiwiVEEiLCJJTlNUUlVDVE9SIiwiQURNSU4iLCJnZXRSb2xlcyIsInJvbGVzIiwibmFtZSIsInByaW9yaXR5Iiwic2tpcCIsIlZ1ZURpYWxvZyIsInNpdGUiLCJjb25maWciLCJ2dWUiLCJkYXRhIiwicGFyZW50IiwiY29uZmlnRCIsImtleSIsImNvbnRlbnQiLCJkaWFsb2ciLCJEaWFsb2ciLCJ0ZW1wbGF0ZSIsIlZ1ZSIsImVsIiwiZCIsImNvbXBvbmVudHMiLCJUZWFtRmFjdG9yeSIsIlNpdGUiLCJjb25zb2xlIiwiVGVhbUNvbnNvbGUiLCJzZXR1cCIsIkNvbnNvbGUiLCJ0YWJsZXMiLCJhZGQiLCJ0aXRsZSIsIm9yZGVyIiwiYXBpIiwicGFnZSIsInJvdXRlIiwiYWRkT3B0aW9uIiwiYXRMZWFzdCIsInJvdXRlcyIsImNvbXBvbmVudCIsIlRlYW1pbmdzRWRpdG9yVnVlIiwiYWRkUm91dGVzIiwiVGVhbXNFZGl0b3JWdWUiLCJwcm9wcyIsIlRlYW0iLCJtZW1iZXJzIiwiY2xvbmUiLCJxdWl6IiwiVGVhbWluZyIsInRhZyIsInB1YmxpYyIsInVzZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBRUE7QUFDQSxvRkFEQTtBQUVBO0FBQ0E7Ozs7OztBQU1BLFdBUEEsbUJBT0EsS0FQQSxFQU9BLEtBUEEsRUFPQSxPQVBBLEVBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQVhBOztBQWFBOzs7Ozs7QUFNQSxlQW5CQSx1QkFtQkEsS0FuQkEsRUFtQkEsS0FuQkEsRUFtQkEsSUFuQkEsRUFtQkE7QUFBQTs7QUFDQTtBQUNBO0FBQ0EsT0FGQTtBQUdBLEtBdkJBO0FBeUJBLGNBekJBLHNCQXlCQSxJQXpCQSxFQXlCQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBaENBLEdBRkE7QUFvQ0EsU0FwQ0EscUJBb0NBO0FBQ0E7QUFDQSxHQXRDQTtBQXVDQSxlQXZDQSwyQkF1Q0E7QUFDQTtBQUNBO0FBekNBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkE7QUFDQSxxQkFEQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0EsR0FOQTtBQU9BLFNBUEEscUJBT0E7QUFBQTs7QUFDQTtBQUNBO0FBQ0EsS0FIQSxDQUtBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFBQTtBQUFBOztBQUFBO0FBWUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0EsU0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBbEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBb0JBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQVpBLFFBWUEsZ0JBWkE7O0FBY0E7QUFDQSxLQW5CQSxDQXBCQSxDQXlDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBLE9BSkEsRUFJQSxHQUpBO0FBTUE7QUFFQTtBQUNBO0FBQ0EsS0FkQSxDQTVDQSxDQTREQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUNBLCtCQURBLENBR0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxTQVhBLE1BV0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxPQXBCQTtBQXFCQTtBQUVBO0FBOUZBLEc7Ozs7Ozs7Ozs7OztBQzVCQTtBQUFBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BLGdCQVBBOztBQVFBOzs7Ozs7QUFNQTtBQWRBO0FBZ0JBLEdBbEJBO0FBbUJBO0FBQ0E7Ozs7OztBQU1BLFlBUEEsb0JBT0EsS0FQQSxFQU9BO0FBQ0E7QUFDQSxLQVRBO0FBVUE7QUFDQTtBQUNBLEtBWkE7QUFhQTtBQUNBO0FBQ0EsS0FmQTtBQWdCQSxhQWhCQSx1QkFnQkE7QUFDQTtBQUNBLEtBbEJBOztBQW1CQTs7Ozs7QUFLQSxXQXhCQSxtQkF3QkEsS0F4QkEsRUF3QkEsT0F4QkEsRUF3QkE7QUFDQTtBQUNBO0FBQ0EsbUJBREE7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQS9CQTtBQW5CQSxHOzs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQ0E7QUFDQSxTQURBLG1CQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDV0E7QUFDQTtBQUVBO0FBQ0EsaUZBREE7QUFFQSxnQ0FGQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0EsR0FQQTtBQVFBLFNBUkEscUJBUUE7QUFDQTtBQUNBO0FBQ0EsR0FYQTtBQVlBO0FBQ0EsVUFEQSxvQkFDQTtBQUFBOztBQUNBOztBQUNBO0FBQ0EscUlBQ0EsK0RBREE7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFEQTtBQUlBLHVGQUNBLElBREEsQ0FDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQSxTQUhBLE1BR0E7QUFDQTtBQUNBO0FBRUEsT0FUQSxFQVVBLEtBVkEsQ0FVQTtBQUNBO0FBQ0EsT0FaQTtBQWNBO0FBM0JBO0FBWkEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUVBO0FBQ0EsaUZBREE7QUFFQSxxREFGQTtBQUdBLFNBSEEscUJBR0E7QUFDQTtBQUNBLEdBTEE7QUFNQTtBQUNBLFVBREEsb0JBQ0E7QUFBQTs7QUFDQTtBQUNBLGlJQUNBLCtEQURBO0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdCQURBO0FBRUE7QUFGQTtBQUtBLDhGQUNBLElBREEsQ0FDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQSxTQUhBLE1BR0E7QUFDQTtBQUNBO0FBRUEsT0FUQSxFQVVBLEtBVkEsQ0FVQTtBQUNBO0FBQ0EsT0FaQTtBQWNBO0FBM0JBO0FBTkEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBRUE7QUFDQSxpRkFEQTtBQUVBLGdDQUZBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFHQSxHQVBBO0FBUUEsU0FSQSxxQkFRQTtBQUNBO0FBQ0EsR0FWQTtBQVdBO0FBQ0EsVUFEQSxvQkFDQTtBQUFBOztBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7O0FBQUE7QUFHQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVVBO0FBQ0EseUlBQ0EsK0RBREE7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFEQTtBQUlBLGtGQUNBLElBREEsQ0FDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQSxTQUhBLE1BR0E7QUFDQTtBQUNBO0FBRUEsT0FUQSxFQVVBLEtBVkEsQ0FVQTtBQUNBO0FBQ0EsT0FaQTtBQWNBO0FBbkNBO0FBWEEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0Esb0JBREE7QUFFQSxTQUZBLHFCQUVBO0FBQ0E7QUFDQTtBQUpBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDY0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLHlGQURBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQSxHQU5BO0FBT0EsU0FQQSxxQkFPQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBRkE7QUFJQSxpREFDQSxJQURBLENBQ0E7QUFDQTtBQUNBOztBQUNBO0FBRUEsT0FKQSxNQUlBO0FBQ0E7QUFDQTtBQUVBLEtBVkEsRUFXQSxLQVhBLENBV0E7QUFDQTtBQUNBLEtBYkE7QUFjQSxHQTNCQTtBQTRCQTtBQUNBLFFBREEsZ0JBQ0EsUUFEQSxFQUNBO0FBQ0E7QUFFQTtBQUhBO0FBQUE7QUFBQTs7QUFBQTtBQUlBO0FBQUE7QUFDQTtBQUNBO0FBTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFRQTtBQUNBLEtBVkE7QUFXQSxPQVhBLGlCQVdBO0FBQUE7O0FBQ0E7QUFFQTtBQUNBLDRCQURBO0FBRUEsOENBRkE7QUFHQSxvQ0FIQTtBQUlBLGtCQUNBO0FBQ0EseUJBREE7QUFFQSxxQkFGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUlBQ0EsK0RBREE7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUNBREE7QUFFQSx1Q0FGQTtBQUdBO0FBSEE7O0FBTUEsb0VBQ0EsSUFEQSxDQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBLGVBSEEsTUFHQTtBQUNBO0FBQ0E7QUFFQSxhQVRBLEVBVUEsS0FWQSxDQVVBO0FBQ0E7QUFDQSxhQVpBO0FBY0E7QUFsQ0EsU0FEQSxFQXFDQTtBQUNBLDRCQURBO0FBRUE7QUFDQTtBQUNBO0FBSkEsU0FyQ0E7QUFKQSxTQUhBLENBc0RBOztBQUNBO0FBQ0EseUJBREE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBLFNBTkE7QUFPQSwwREFQQTtBQVFBO0FBQ0E7QUFEQTtBQVJBO0FBWUEsS0E5RUE7QUErRUEsVUEvRUEsa0JBK0VBLE9BL0VBLEVBK0VBO0FBQUE7O0FBQ0E7QUFFQTtBQUNBLDZCQURBO0FBRUEsOENBRkE7QUFHQSxvQ0FIQTtBQUlBLGtCQUNBO0FBQ0EsNEJBREE7QUFFQSxxQkFGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUlBQ0EsK0RBREE7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNEJBREE7QUFFQSxxQ0FGQTtBQUdBLHVDQUhBO0FBSUE7QUFKQTs7QUFPQSx1RUFDQSxJQURBLENBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0EsZUFIQSxNQUdBO0FBQ0E7QUFDQTtBQUVBLGFBVEEsRUFVQSxLQVZBLENBVUE7QUFDQTtBQUNBLGFBWkE7QUFjQTtBQW5DQSxTQURBLEVBc0NBO0FBQ0EsNEJBREE7QUFFQTtBQUNBO0FBQ0E7QUFKQSxTQXRDQTtBQUpBLFNBSEEsQ0F1REE7O0FBQ0E7QUFDQSx5QkFEQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0EsU0FOQTtBQU9BLDBEQVBBO0FBUUE7QUFDQTtBQURBO0FBUkE7QUFZQSxLQW5KQTtBQW9KQSxXQXBKQSxtQkFvSkEsT0FwSkEsRUFvSkE7QUFBQTs7QUFDQSwySUFDQSxxRUFEQSxFQUNBO0FBQ0E7QUFBQTtBQUFBLFdBQ0EsSUFEQSxDQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBLFdBSEEsTUFHQTtBQUNBO0FBQ0E7QUFFQSxTQVRBLEVBVUEsS0FWQSxDQVVBO0FBQ0E7QUFDQSxTQVpBO0FBYUEsT0FmQTtBQWdCQTtBQXJLQTtBQTVCQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EseUZBREE7QUFFQSxlQUZBO0FBR0E7QUFDQTtBQUNBLGlCQURBO0FBRUE7QUFGQTtBQUlBLEdBUkE7QUFTQTtBQUNBOzs7O0FBSUEsVUFMQSxvQkFLQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7O0FBQUE7QUFHQTtBQUFBOztBQUNBO0FBQ0E7QUFDQSxXQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVVBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBcEJBLEdBVEE7QUErQkE7QUFDQTtBQURBLEdBL0JBO0FBa0NBLFNBbENBLHFCQWtDQTtBQUFBOztBQUNBO0FBRUE7QUFDQTtBQUNBLEtBRkE7QUFJQTtBQUNBO0FBQ0EsS0FGQTtBQUlBO0FBQ0E7QUFDQSxLQUZBO0FBSUEseURBQ0EsSUFEQSxDQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFFQSxLQVJBLEVBU0EsS0FUQSxDQVNBO0FBQ0E7QUFDQSxLQVhBO0FBWUEsR0E3REE7QUE4REEsZUE5REEsMkJBOERBLENBQ0EsQ0EvREE7QUFnRUE7QUFDQSxRQURBLGdCQUNBLFFBREEsRUFDQTtBQUNBO0FBRUE7QUFIQTtBQUFBO0FBQUE7O0FBQUE7QUFJQTtBQUFBO0FBQ0E7QUFDQTtBQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQSxLQVJBO0FBU0EsVUFUQSxrQkFTQSxJQVRBLEVBU0E7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBLEtBZkE7QUFnQkEsT0FoQkEsaUJBZ0JBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EseUJBREE7QUFFQSxvRUFGQTtBQUdBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBLGdDQUZBO0FBR0E7QUFIQTtBQUtBLFNBVEE7QUFVQSxzQkFWQTtBQVdBO0FBWEE7QUFhQSxLQWpDQTtBQWtDQSxVQWxDQSxrQkFrQ0EsSUFsQ0EsRUFrQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSwwQkFEQTtBQUVBLG9FQUZBO0FBR0E7QUFDQTtBQUNBLHNCQURBO0FBRUEsZ0NBRkE7QUFHQTtBQUhBO0FBS0EsU0FUQTtBQVVBLHNCQVZBO0FBV0E7QUFYQTtBQWFBLEtBbkRBO0FBb0RBLFdBcERBLG1CQW9EQSxJQXBEQSxFQW9EQTtBQUFBOztBQUNBLHdJQUNBLHFFQURBLEVBQ0E7QUFDQTtBQUFBO0FBQUEsV0FDQSxJQURBLENBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUVBLFNBUkEsRUFTQSxLQVRBLENBU0E7QUFDQTtBQUNBLFNBWEE7QUFZQSxPQWRBO0FBZUEsS0FwRUE7QUFxRUEsUUFyRUEsZ0JBcUVBLE1BckVBLEVBcUVBLElBckVBLEVBcUVBO0FBQUE7O0FBQ0E7QUFDQSwrQkFEQTtBQUVBO0FBRkE7QUFLQSwwRUFDQSxJQURBLENBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUVBLE9BUkEsRUFTQSxLQVRBLENBU0E7QUFDQTtBQUNBLE9BWEE7QUFZQSxLQXZGQTtBQXdGQSxjQXhGQSx3QkF3RkE7QUFDQTtBQUVBO0FBQ0EsaUNBREE7QUFFQSx5RUFGQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0EsU0FQQTtBQVFBLHNCQVJBO0FBU0E7QUFUQTtBQVdBLEtBdEdBO0FBdUdBLGFBdkdBLHVCQXVHQTtBQUNBO0FBRUE7QUFDQSxpQ0FEQTtBQUVBLHdFQUZBO0FBR0EsdUNBSEE7QUFJQTtBQUNBO0FBQ0E7QUFEQTtBQUdBLFNBUkE7QUFTQSxzQkFUQTtBQVVBO0FBVkE7QUFZQSxLQXRIQTtBQXVIQSxhQXZIQSx1QkF1SEE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQSxLQTNIQTtBQTRIQSxlQTVIQSx1QkE0SEEsSUE1SEEsRUE0SEE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQTtBQVBBO0FBQUE7QUFBQTs7QUFBQTtBQVFBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFkQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWdCQTtBQUNBO0FBN0lBO0FBaEVBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUNBO0FBRUE7QUFDQSxtRkFEQTtBQUVBO0FBQ0EsUUFEQSxrQkFDQTtBQUNBO0FBQ0E7QUFIQTtBQUZBLEc7Ozs7Ozs7Ozs7O0FDWkEsMkJBQTJCLG1CQUFPLENBQUMseUdBQXdEO0FBQzNGOzs7QUFHQTtBQUNBLGNBQWMsUUFBUywwQkFBMEIsdUJBQXVCLEdBQUcsK0JBQStCLDBCQUEwQiw2QkFBNkIsR0FBRzs7QUFFcEs7Ozs7Ozs7Ozs7OztBQ1BBLDJCQUEyQixtQkFBTyxDQUFDLHlHQUF3RDtBQUMzRjs7O0FBR0E7QUFDQSxjQUFjLFFBQVMsd0NBQXdDLG9CQUFvQixHQUFHLHVDQUF1QyxtQkFBbUIsR0FBRyx1Q0FBdUMsb0JBQW9CLEdBQUcsa0NBQWtDLGlCQUFpQix3QkFBd0Isc0JBQXNCLDBCQUEwQix1QkFBdUIsdUJBQXVCLEdBQUcsMkJBQTJCLHNCQUFzQixHQUFHOztBQUVqYjs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1DQUFtQztBQUN2RDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsOEJBQThCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGVBQWU7QUFDM0Msc0JBQXNCLGVBQWU7QUFDckMseUJBQXlCLGtCQUFrQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGtDQUFrQztBQUNqRDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNqRkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsOEJBQThCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixlQUFlO0FBQ3JDLHlCQUF5Qix1QkFBdUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxrQ0FBa0M7QUFDakQ7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDL0VBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDhCQUE4QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixhQUFhO0FBQ25DLHlCQUF5QixtQkFBbUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxrQ0FBa0M7QUFDakQ7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDaEZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1DQUFtQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixlQUFlO0FBQ3JDLHlCQUF5Qix5QkFBeUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixlQUFlO0FBQ3JDLHlCQUF5QiwwQkFBMEI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsd0JBQXdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1CQUFtQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNoSEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IseUJBQXlCO0FBQzdDO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxrQkFBa0I7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix3QkFBd0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDL0dBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHlCQUF5QjtBQUM3QztBQUNBLG1CQUFtQixzQ0FBc0M7QUFDekQ7QUFDQTtBQUNBLGFBQWEsdUJBQXVCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwyQ0FBMkM7QUFDdkU7QUFDQTtBQUNBLHVCQUF1Qix1QkFBdUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFNBQVMsMkJBQTJCLEVBQUU7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGVBQWU7QUFDN0MsaUNBQWlDO0FBQ2pDLHFCQUFxQjtBQUNyQjtBQUNBLDhCQUE4Qix3QkFBd0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsdUJBQXVCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFNBQVMsaUNBQWlDLEVBQUU7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsd0JBQXdCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsUEE7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMsNG9CQUErVztBQUNyWSw0Q0FBNEMsUUFBUztBQUNyRDtBQUNBO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLG1JQUFzRTtBQUN4RiwrQ0FBK0M7QUFDL0M7QUFDQSxHQUFHLElBQVU7QUFDYjtBQUNBO0FBQ0EscUJBQXFCLDRvQkFBK1c7QUFDcFksc0JBQXNCLG1CQUFPLENBQUMsNG9CQUErVztBQUM3WSx1REFBdUQsUUFBUztBQUNoRTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7Ozs7OztBQ3JCQTs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyx3b0JBQTZXO0FBQ25ZLDRDQUE0QyxRQUFTO0FBQ3JEO0FBQ0E7QUFDQSxVQUFVLG1CQUFPLENBQUMsbUlBQXNFO0FBQ3hGLCtDQUErQztBQUMvQztBQUNBLEdBQUcsSUFBVTtBQUNiO0FBQ0E7QUFDQSxxQkFBcUIsd29CQUE2VztBQUNsWSxzQkFBc0IsbUJBQU8sQ0FBQyx3b0JBQTZXO0FBQzNZLHVEQUF1RCxRQUFTO0FBQ2hFO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUFBO0FBQUE7QUFBQTtBQUN3RTtBQUNMOzs7QUFHbkU7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMEZBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLElBQVU7QUFDZCxZQUFZLG1CQUFPLENBQUMsd0dBQXFHO0FBQ3pILGNBQWMsbUJBQU8sQ0FBQywrQ0FBSztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUNqQ2Y7QUFBQTtBQUFBLHdDQUF3TSxDQUFnQiw4UEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E1TjtBQUFBO0FBQUE7QUFBQTs7OztBQUtBOztBQUVBLElBQUlBLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQVNDLElBQVQsRUFBZTtBQUN4QkMsMEVBQVUsQ0FBQ0MsSUFBWCxDQUFnQixJQUFoQjtBQUVBLE1BQUlDLElBQUksR0FBRyxHQUFYOztBQUVBLE1BQUdILElBQUksS0FBS0ksU0FBWixFQUF1QjtBQUNuQixTQUFLQyxFQUFMLEdBQVVMLElBQUksQ0FBQ0ssRUFBZjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JOLElBQUksQ0FBQ00sUUFBckI7QUFDQSxTQUFLQyxPQUFMLEdBQWVQLElBQUksQ0FBQ08sT0FBcEI7QUFDQUosUUFBSSxHQUFHSCxJQUFJLENBQUNHLElBQVo7QUFDSCxHQUxELE1BS087QUFDSCxTQUFLRSxFQUFMLEdBQVUsQ0FBVixDQURHLENBQ2E7O0FBQ2hCLFNBQUtDLFFBQUwsR0FBZ0IsSUFBaEIsQ0FGRyxDQUVxQjs7QUFDeEIsU0FBS0MsT0FBTCxHQUFlLElBQWYsQ0FIRyxDQUdtQjs7QUFDdEJKLFFBQUksR0FBRyxJQUFQLENBSkcsQ0FJZ0I7QUFDdEI7O0FBRUQsT0FBS0EsSUFBTCxHQUFZLFlBQVc7QUFDbkIsV0FBT0EsSUFBUDtBQUNILEdBRkQ7O0FBSUEsT0FBS0ssT0FBTCxHQUFlLFVBQVNDLEtBQVQsRUFBZ0I7QUFDM0JOLFFBQUksR0FBR00sS0FBUDtBQUNILEdBRkQ7QUFHSCxDQXhCRDs7QUEwQkFWLE1BQU0sQ0FBQ1csU0FBUCxHQUFtQkMsTUFBTSxDQUFDQyxNQUFQLENBQWNYLHdFQUFVLENBQUNTLFNBQXpCLENBQW5CO0FBQ0FYLE1BQU0sQ0FBQ1csU0FBUCxDQUFpQkcsV0FBakIsR0FBK0JkLE1BQS9CO0FBRUE7Ozs7OztBQUtBQSxNQUFNLENBQUNXLFNBQVAsQ0FBaUJJLFVBQWpCLEdBQThCLFVBQVNDLEtBQVQsRUFBZ0I7QUFDMUMsU0FBT0EsS0FBSyxDQUFDQyxPQUFOLENBQWMsZ0JBQWQsRUFBZ0MsS0FBS1YsUUFBckMsRUFBK0MsS0FBS0MsT0FBcEQsQ0FBUDtBQUNILENBRkQ7QUFJQTs7Ozs7OztBQUtBUixNQUFNLENBQUNXLFNBQVAsQ0FBaUJPLGFBQWpCLEdBQWlDLFVBQVNGLEtBQVQsRUFBZ0JHLFNBQWhCLEVBQTJCO0FBQ3hELE1BQU1YLE9BQU8sR0FBRyxLQUFLTyxVQUFMLENBQWdCQyxLQUFoQixDQUFoQjtBQUNBLFNBQU9SLE9BQU8sQ0FBQ1UsYUFBUixDQUFzQkMsU0FBdEIsQ0FBUDtBQUNILENBSEQsQyxDQU1BO0FBQ0E7OztBQUNBbkIsTUFBTSxDQUFDb0IsS0FBUCxHQUFlLEdBQWYsQyxDQUF3Qjs7QUFDeEJwQixNQUFNLENBQUNxQixJQUFQLEdBQWMsR0FBZCxDLENBQXdCOztBQUN4QnJCLE1BQU0sQ0FBQ3NCLE9BQVAsR0FBaUIsR0FBakIsQyxDQUF3Qjs7QUFDeEJ0QixNQUFNLENBQUN1QixPQUFQLEdBQWlCLEdBQWpCLEMsQ0FBd0I7O0FBQ3hCdkIsTUFBTSxDQUFDd0IsS0FBUCxHQUFlLEdBQWYsQyxDQUF3Qjs7QUFDeEJ4QixNQUFNLENBQUN5QixNQUFQLEdBQWdCLEdBQWhCLEMsQ0FBd0I7O0FBQ3hCekIsTUFBTSxDQUFDMEIsRUFBUCxHQUFZLEdBQVosQyxDQUF3Qjs7QUFDeEIxQixNQUFNLENBQUMyQixVQUFQLEdBQW9CLEdBQXBCLEMsQ0FBNEI7O0FBQzVCM0IsTUFBTSxDQUFDNEIsS0FBUCxHQUFlLEdBQWYsQyxDQUF3Qjs7QUFFeEI1QixNQUFNLENBQUNXLFNBQVAsQ0FBaUJrQixRQUFqQixHQUE0QixZQUFXO0FBQ25DLE1BQUlDLEtBQUssR0FBRyxFQUFaO0FBQ0FBLE9BQUssQ0FBQzlCLE1BQU0sQ0FBQ29CLEtBQVIsQ0FBTCxHQUFzQjtBQUFDVyxRQUFJLEVBQUUsT0FBUDtBQUFnQkMsWUFBUSxFQUFFO0FBQTFCLEdBQXRCO0FBQ0FGLE9BQUssQ0FBQzlCLE1BQU0sQ0FBQ3NCLE9BQVIsQ0FBTCxHQUF3QjtBQUFDUyxRQUFJLEVBQUUsU0FBUDtBQUFrQkMsWUFBUSxFQUFFO0FBQTVCLEdBQXhCO0FBQ0FGLE9BQUssQ0FBQzlCLE1BQU0sQ0FBQ3FCLElBQVIsQ0FBTCxHQUFxQjtBQUFDVSxRQUFJLEVBQUUsTUFBUDtBQUFlQyxZQUFRLEVBQUUsQ0FBekI7QUFBNEJDLFFBQUksRUFBRTtBQUFsQyxHQUFyQjtBQUNBSCxPQUFLLENBQUM5QixNQUFNLENBQUN1QixPQUFSLENBQUwsR0FBd0I7QUFBQ1EsUUFBSSxFQUFFLFNBQVA7QUFBa0JDLFlBQVEsRUFBRTtBQUE1QixHQUF4QjtBQUNBRixPQUFLLENBQUM5QixNQUFNLENBQUN3QixLQUFSLENBQUwsR0FBc0I7QUFBQ08sUUFBSSxFQUFFLE9BQVA7QUFBZ0JDLFlBQVEsRUFBRSxDQUExQjtBQUE2QkMsUUFBSSxFQUFFO0FBQW5DLEdBQXRCO0FBQ0FILE9BQUssQ0FBQzlCLE1BQU0sQ0FBQ3lCLE1BQVIsQ0FBTCxHQUF1QjtBQUFDTSxRQUFJLEVBQUUsUUFBUDtBQUFpQkMsWUFBUSxFQUFFO0FBQTNCLEdBQXZCO0FBQ0FGLE9BQUssQ0FBQzlCLE1BQU0sQ0FBQzBCLEVBQVIsQ0FBTCxHQUFtQjtBQUFDSyxRQUFJLEVBQUUsb0JBQVA7QUFBNkJDLFlBQVEsRUFBRTtBQUF2QyxHQUFuQjtBQUNBRixPQUFLLENBQUM5QixNQUFNLENBQUMyQixVQUFSLENBQUwsR0FBMkI7QUFBQ0ksUUFBSSxFQUFFLFlBQVA7QUFBcUJDLFlBQVEsRUFBRTtBQUEvQixHQUEzQjtBQUNBRixPQUFLLENBQUM5QixNQUFNLENBQUM0QixLQUFSLENBQUwsR0FBc0I7QUFBQ0csUUFBSSxFQUFFLE9BQVA7QUFBZ0JDLFlBQVEsRUFBRTtBQUExQixHQUF0QjtBQUVBLFNBQU9GLEtBQVA7QUFDSCxDQWJEOzs7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUFBO0FBQUE7QUFBQTtBQUFtRjtBQUMzQjtBQUNMOzs7QUFHbkQ7QUFDbUc7QUFDbkcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMEVBQU07QUFDUixFQUFFLCtFQUFNO0FBQ1IsRUFBRSx3RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksSUFBVTtBQUNkLFlBQVksbUJBQU8sQ0FBQyx3R0FBcUc7QUFDekgsY0FBYyxtQkFBTyxDQUFDLCtDQUFLO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQkFBc0IsaUhBQTJDLEVBQUU7QUFBQTtBQUNuRTtBQUNBLGdCQUFnQiwrRUFBTTtBQUN0Qix5QkFBeUIsd0ZBQWU7QUFDeEMsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBOEwsQ0FBZ0IsOE9BQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBbE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFDK0Q7QUFDTDs7O0FBRzFEO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLGlGQUFNO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxJQUFVO0FBQ2QsWUFBWSxtQkFBTyxDQUFDLHdHQUFxRztBQUN6SCxjQUFjLG1CQUFPLENBQUMsK0NBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDakNmO0FBQUE7QUFBQSx3Q0FBcU0sQ0FBZ0IscVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBek47QUFBQTtBQUFBO0FBQUE7QUFFQTs7Ozs7QUFJTyxJQUFNSSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFTQyxJQUFULEVBQWVDLE1BQWYsRUFBdUI7QUFDL0MsTUFBSUMsR0FBRyxHQUFHLElBQVY7QUFDQSxNQUFJQyxLQUFJLEdBQUcsSUFBWDtBQUNBLE1BQUlDLE1BQU0sR0FBRyxJQUFiO0FBRUEsTUFBSUMsT0FBTyxHQUFHLEVBQWQ7O0FBQ0EsT0FBSSxJQUFJQyxHQUFSLElBQWVMLE1BQWYsRUFBdUI7QUFDdEIsWUFBT0ssR0FBUDtBQUNDLFdBQUssS0FBTDtBQUNDSixXQUFHLEdBQUdELE1BQU0sQ0FBQ0MsR0FBYjtBQUNBOztBQUVELFdBQUssTUFBTDtBQUNDQyxhQUFJLEdBQUdGLE1BQU0sQ0FBQ0UsSUFBZDtBQUNBOztBQUVELFdBQUssUUFBTDtBQUNDQyxjQUFNLEdBQUdILE1BQU0sQ0FBQ0csTUFBaEI7QUFDQTs7QUFFRDtBQUNDO0FBQ0FDLGVBQU8sQ0FBQ0MsR0FBRCxDQUFQLEdBQWVMLE1BQU0sQ0FBQ0ssR0FBRCxDQUFyQjtBQUNBO0FBaEJGO0FBa0JBOztBQUVEUCxXQUFTLENBQUM1QixFQUFWO0FBQ0EsTUFBSUEsRUFBRSxHQUFHLGVBQWU0QixTQUFTLENBQUM1QixFQUFsQztBQUNBa0MsU0FBTyxDQUFDRSxPQUFSLHVCQUE4QnBDLEVBQTlCO0FBRUEsTUFBSXFDLE1BQU0sR0FBRyxJQUFJQyxpREFBSixDQUFXSixPQUFYLENBQWI7QUFFQSxNQUFJSyxRQUFRLEdBQUcsTUFBZjs7QUFDQSxPQUFJLElBQUlKLElBQVIsSUFBZUgsS0FBSSxFQUFuQixFQUF1QjtBQUN0Qk8sWUFBUSxnQkFBU0osSUFBVCxnQkFBaUJBLElBQWpCLE9BQVI7QUFDQTs7QUFFRCxNQUFHRixNQUFNLEtBQUssSUFBZCxFQUFvQjtBQUNuQk0sWUFBUSx5QkFBUjtBQUNBOztBQUVEQSxVQUFRLElBQUksU0FBWixDQTFDK0MsQ0E0Qy9DOztBQUNBLE1BQUlWLElBQUksQ0FBQ1csR0FBVCxDQUFhO0FBQ1pDLE1BQUUsRUFBRSxNQUFNekMsRUFERTtBQUVaNkIsUUFBSSxFQUFKQSxJQUZZO0FBR1pRLFVBQU0sRUFBTkEsTUFIWTtBQUlaTCxRQUFJLEVBQUUsZ0JBQVc7QUFDZCxVQUFJVSxDQUFDLEdBQUdWLEtBQUksRUFBWjs7QUFDQSxVQUFHQyxNQUFNLEtBQUssSUFBZCxFQUFvQjtBQUNuQlMsU0FBQyxDQUFDVCxNQUFGLEdBQVdBLE1BQVg7QUFDQTs7QUFDRCxhQUFPUyxDQUFQO0FBQ0YsS0FWVztBQVdaSCxZQUFRLEVBQUVBLFFBWEU7QUFZWkksY0FBVSxFQUFFO0FBQ1haLFNBQUcsRUFBRUE7QUFETTtBQVpBLEdBQWI7QUFnQkEsQ0E3RE07QUErRFBILFNBQVMsQ0FBQzVCLEVBQVYsR0FBZSxDQUFmLEM7Ozs7Ozs7Ozs7OztBQ3JFQTtBQUFBO0FBQUE7QUFBQTtBQUM2RDtBQUNMOzs7QUFHeEQ7QUFDbUc7QUFDbkcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsK0VBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLElBQVU7QUFDZCxZQUFZLG1CQUFPLENBQUMsd0dBQXFHO0FBQ3pILGNBQWMsbUJBQU8sQ0FBQywrQ0FBSztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUNqQ2Y7QUFBQTtBQUFBLHdDQUFtTSxDQUFnQixtUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0F2TjtBQUFBO0FBQUE7QUFBQTs7OztBQUtBO0NBR0E7QUFDQTtBQUNBOztBQUNBNEMsMkRBQVcsQ0FBQ3JDLE1BQVosQ0FBbUJzQyxJQUFJLENBQUNBLElBQXhCLEUsQ0FFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBR0EsSUFBSSxDQUFDQSxJQUFMLENBQVVDLE9BQVYsS0FBc0IvQyxTQUF6QixFQUFvQztBQUNuQ2dELHFFQUFXLENBQUNDLEtBQVosQ0FBa0JILElBQUksQ0FBQ0EsSUFBTCxDQUFVQyxPQUE1QjtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ25CRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBS08sSUFBSUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBVyxDQUNuQyxDQURNOztBQUdQQSxXQUFXLENBQUNDLEtBQVosR0FBb0IsVUFBU0MsT0FBVCxFQUFrQjtBQUNsQ0EsU0FBTyxDQUFDQyxNQUFSLENBQWVDLEdBQWYsQ0FBbUI7QUFDZkMsU0FBSyxFQUFFLE9BRFE7QUFFZkMsU0FBSyxFQUFFLEVBRlE7QUFHZkMsT0FBRyxFQUFFO0FBSFUsR0FBbkI7QUFNSCxNQUFNQyxJQUFJLEdBQUc7QUFBQ0gsU0FBSyxFQUFFLE1BQVI7QUFBZ0JJLFNBQUssRUFBRSxFQUF2QjtBQUEyQkgsU0FBSyxFQUFFO0FBQWxDLEdBQWI7QUFFQUosU0FBTyxDQUFDTixVQUFSLENBQW1CYyxTQUFuQixDQUE2QjtBQUM1QkMsV0FBTyxFQUFFaEUsa0VBQU0sQ0FBQzBCLEVBRFk7QUFFNUJtQyxRQUFJLEVBQUVBLElBRnNCO0FBRzVCckQsV0FBTyxFQUFFO0FBQUNrRCxXQUFLLEVBQUUsUUFBUjtBQUFrQkMsV0FBSyxFQUFFO0FBQXpCLEtBSG1CO0FBSTVCRCxTQUFLLEVBQUUsT0FKcUI7QUFLNUJDLFNBQUssRUFBRSxFQUxxQjtBQU01QkcsU0FBSyxFQUFFLFFBTnFCO0FBTzVCRyxVQUFNLEVBQUUsQ0FDUDtBQUFDSCxXQUFLLEVBQUUsUUFBUjtBQUFrQkksZUFBUyxFQUFFQywyREFBaUJBO0FBQTlDLEtBRE87QUFQb0IsR0FBN0I7QUFZQVosU0FBTyxDQUFDTixVQUFSLENBQW1CbUIsU0FBbkIsQ0FBNkIsQ0FDNUI7QUFBQ04sU0FBSyxFQUFFLFdBQVI7QUFBcUJJLGFBQVMsRUFBRUcsd0RBQWhDO0FBQWdEQyxTQUFLLEVBQUU7QUFBdkQsR0FENEIsQ0FBN0I7QUFJQSxDQXpCRCxDOzs7Ozs7Ozs7Ozs7QUNaQTtBQUFBO0FBQUE7QUFBQTtBQUE4RjtBQUMzQjtBQUNMOzs7QUFHOUQ7QUFDbUc7QUFDbkcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUscUZBQU07QUFDUixFQUFFLDBGQUFNO0FBQ1IsRUFBRSxtR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksSUFBVTtBQUNkLFlBQVksbUJBQU8sQ0FBQyx3R0FBcUc7QUFDekgsY0FBYyxtQkFBTyxDQUFDLCtDQUFLO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQkFBc0IsNElBQXNELEVBQUU7QUFBQTtBQUM5RTtBQUNBLGdCQUFnQiwwRkFBTTtBQUN0Qix5QkFBeUIsbUdBQWU7QUFDeEMsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBeU0sQ0FBZ0IseVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBN047QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUY7QUFDM0I7QUFDTDs7O0FBR3pEO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLGdGQUFNO0FBQ1IsRUFBRSxxRkFBTTtBQUNSLEVBQUUsOEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLElBQVU7QUFDZCxZQUFZLG1CQUFPLENBQUMsd0dBQXFHO0FBQ3pILGNBQWMsbUJBQU8sQ0FBQywrQ0FBSztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0JBQXNCLGtJQUFpRCxFQUFFO0FBQUE7QUFDekU7QUFDQSxnQkFBZ0IscUZBQU07QUFDdEIseUJBQXlCLDhGQUFlO0FBQ3hDLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQW9NLENBQWdCLG9QQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQTZGO0FBQzNCO0FBQ0w7OztBQUc3RDtBQUNtRztBQUNuRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxvRkFBTTtBQUNSLEVBQUUseUZBQU07QUFDUixFQUFFLGtHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxJQUFVO0FBQ2QsWUFBWSxtQkFBTyxDQUFDLHdHQUFxRztBQUN6SCxjQUFjLG1CQUFPLENBQUMsK0NBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNCQUFzQiwwSUFBcUQsRUFBRTtBQUFBO0FBQzdFO0FBQ0EsZ0JBQWdCLHlGQUFNO0FBQ3RCLHlCQUF5QixrR0FBZTtBQUN4QyxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUF3TSxDQUFnQix3UEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E1TjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRGO0FBQzNCO0FBQ0w7QUFDYzs7O0FBRzFFO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLG1GQUFNO0FBQ1IsRUFBRSx3RkFBTTtBQUNSLEVBQUUsaUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLElBQVU7QUFDZCxZQUFZLG1CQUFPLENBQUMsd0dBQXFHO0FBQ3pILGNBQWMsbUJBQU8sQ0FBQywrQ0FBSztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0JBQXNCLHdJQUFvRCxFQUFFO0FBQUE7QUFDNUU7QUFDQSxnQkFBZ0Isd0ZBQU07QUFDdEIseUJBQXlCLGlHQUFlO0FBQ3hDLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQXVNLENBQWdCLHVQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTNOO0FBQUE7QUFBQTtBQUFBO0FBQXNiLENBQWdCLDJhQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTFjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQTZGO0FBQzNCO0FBQ0w7OztBQUc3RDtBQUNtRztBQUNuRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxvRkFBTTtBQUNSLEVBQUUseUZBQU07QUFDUixFQUFFLGtHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxJQUFVO0FBQ2QsWUFBWSxtQkFBTyxDQUFDLHdHQUFxRztBQUN6SCxjQUFjLG1CQUFPLENBQUMsK0NBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNCQUFzQiwwSUFBcUQsRUFBRTtBQUFBO0FBQzdFO0FBQ0EsZ0JBQWdCLHlGQUFNO0FBQ3RCLHlCQUF5QixrR0FBZTtBQUN4QyxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUF3TSxDQUFnQix3UEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E1TjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBGO0FBQzNCO0FBQ0w7QUFDYzs7O0FBR3hFO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLGlGQUFNO0FBQ1IsRUFBRSxzRkFBTTtBQUNSLEVBQUUsK0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLElBQVU7QUFDZCxZQUFZLG1CQUFPLENBQUMsd0dBQXFHO0FBQ3pILGNBQWMsbUJBQU8sQ0FBQywrQ0FBSztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0JBQXNCLG9JQUFrRCxFQUFFO0FBQUE7QUFDMUU7QUFDQSxnQkFBZ0Isc0ZBQU07QUFDdEIseUJBQXlCLCtGQUFlO0FBQ3hDLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQXFNLENBQWdCLHFQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXpOO0FBQUE7QUFBQTtBQUFBO0FBQW9iLENBQWdCLHlhQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXhjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0NBO0FBQUE7QUFBTyxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFTakMsSUFBVCxFQUFlO0FBQ2xDLE1BQUdBLElBQUksS0FBS2pDLFNBQVosRUFBdUI7QUFDdEIsU0FBSzBCLElBQUwsR0FBWU8sSUFBSSxDQUFDUCxJQUFqQjtBQUNBLFNBQUt6QixFQUFMLEdBQVVnQyxJQUFJLENBQUNoQyxFQUFmO0FBQ0EsU0FBS2tFLE9BQUwsR0FBZWxDLElBQUksQ0FBQ2tDLE9BQXBCO0FBQ0EsR0FKRCxNQUlPO0FBQ04sU0FBS3pDLElBQUwsR0FBWSxFQUFaO0FBQ0EsU0FBS3pCLEVBQUwsR0FBVSxDQUFWO0FBQ0EsU0FBS2tFLE9BQUwsR0FBZSxFQUFmO0FBQ0E7O0FBRUQsT0FBS0MsS0FBTCxHQUFhLFlBQVc7QUFDdkIsV0FBTyxJQUFJRixJQUFKLENBQVMsSUFBVCxDQUFQO0FBQ0EsR0FGRDtBQUdBLENBZE0sQzs7Ozs7Ozs7Ozs7O0FDRFA7QUFBQTtBQUFBO0FBQUE7Ozs7QUFLQTtBQUVPLElBQU1yQixXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFXLENBQ3JDLENBRE07O0FBR1BBLFdBQVcsQ0FBQ3JDLE1BQVosR0FBcUIsVUFBU3NCLElBQVQsRUFBZTtBQUVuQyxNQUFNdUMsSUFBSSxHQUFHLElBQUlILDBDQUFKLENBQVNwQyxJQUFULENBQWIsQ0FGbUMsQ0FJbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsQ0FYRCxDOzs7Ozs7Ozs7Ozs7QUNWQTtBQUFBO0FBQUE7Ozs7O0FBS08sSUFBTXdDLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQVNyQyxJQUFULEVBQWU7QUFDckMsTUFBR0EsSUFBSSxLQUFLakMsU0FBWixFQUF1QjtBQUN0QixTQUFLQyxFQUFMLEdBQVVnQyxJQUFJLENBQUNoQyxFQUFmO0FBQ0EsU0FBS3NFLEdBQUwsR0FBV3RDLElBQUksQ0FBQ3NDLEdBQWhCO0FBQ0EsU0FBSzdDLElBQUwsR0FBWU8sSUFBSSxDQUFDUCxJQUFqQjtBQUNBLFNBQUs4QyxNQUFMLEdBQWN2QyxJQUFJLENBQUN1QyxNQUFuQjtBQUNBLEdBTEQsTUFLTztBQUNOLFNBQUt2RSxFQUFMLEdBQVUsQ0FBVjtBQUNBLFNBQUtzRSxHQUFMLEdBQVcsRUFBWDtBQUNBLFNBQUs3QyxJQUFMLEdBQVksRUFBWjtBQUNBLFNBQUs4QyxNQUFMLEdBQWMsSUFBZDtBQUNBOztBQUVELE9BQUtKLEtBQUwsR0FBYSxZQUFXO0FBQ3ZCLFdBQU8sSUFBSUUsT0FBSixDQUFZLElBQVosQ0FBUDtBQUNBLEdBRkQ7QUFHQSxDQWhCTSxDOzs7Ozs7Ozs7Ozs7QUNMUDtBQUFBO0FBQUE7Ozs7Ozs7QUFRQSxJQUFJekUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBVztBQUV4QjtBQUNBLE9BQUs0RSxJQUFMLEdBQVksSUFBWjtBQUNILENBSkQ7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFDK0Q7QUFDTDs7O0FBRzFEO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLGlGQUFNO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxJQUFVO0FBQ2QsWUFBWSxtQkFBTyxDQUFDLHdHQUFxRztBQUN6SCxjQUFjLG1CQUFPLENBQUMsK0NBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDakNmO0FBQUE7QUFBQSx3Q0FBcU0sQ0FBZ0IscVBBQUcsRUFBQyxDIiwiZmlsZSI6InRlYW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJUZWFtXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlRlYW1cIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIjwhLS1cclxuQGZpbGVcclxuQmFzZSBjb21wb25lbnQgZm9yIGNvbnNvbGUgcGFnZXMuXHJcblxyXG5Qcm92aWRlczpcclxubmF2MiBtZW51IHN1cHBvcnQgd2l0aCBhdXRvbWF0aWMgcmVtb3ZhbC5cclxuLS0+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IFVzZXJWdWVCYXNlIGZyb20gJ3VzZXJzLWNsL2pzL1Z1ZS9Vc2VyVnVlQmFzZS52dWUnO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgJ2V4dGVuZHMnOiBVc2VyVnVlQmFzZSxcclxuICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgKiBBZGQgYW4gb3B0aW9uIHRvIHRoZSBuYXYyIG1lbnUuXHJcbiAgICAgICAgICAgKiBAcGFyYW0gdGl0bGUgVGl0bGUgb2YgdGhlIG9wdGlvbiB0byBhZGQuXHJcbiAgICAgICAgICAgKiBAcGFyYW0gb3JkZXIgT3JkZXIgaW4gdGhlIG1lbnUuXHJcbiAgICAgICAgICAgKiBAcGFyYW0gY2xvc3VyZSBGdW5jdGlvbiB0byBjYWxsIHdoZW4gc2VsZWN0ZWQuXHJcbiAgICAgICAgICAgKi9cclxuICAgICAgICAgIGFkZE5hdjIodGl0bGUsIG9yZGVyLCBjbG9zdXJlKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuJHNpdGUuY29uc29sZS5jb21wb25lbnRzLmFkZE5hdjJMaW5rKHRoaXMsIHRpdGxlLCBvcmRlciwgY2xvc3VyZSk7XHJcbiAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzMS5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAvKipcclxuICAgICAgICAgICAqIEFkZCBhbiBvcHRpb24gdG8gdGhlIG5hdjIgbWVudSB0aGF0IGlzIGEgcm91dGVyIGxpbmtcclxuICAgICAgICAgICAqIEBwYXJhbSB0aXRsZSBUaXRsZSBvZiB0aGUgb3B0aW9uIHRvIGFkZC5cclxuICAgICAgICAgICAqIEBwYXJhbSBvcmRlciBPcmRlciBpbiB0aGUgbWVudS5cclxuICAgICAgICAgICAqIEBwYXJhbSBsaW5rIExpbmsgd2l0aG91dCBTaXRlLnJvb3RcclxuICAgICAgICAgICAqL1xyXG4gICAgICAgICAgYWRkTmF2MkxpbmsodGl0bGUsIG9yZGVyLCBsaW5rKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5hZGROYXYyKHRpdGxlLCBvcmRlciwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaChTaXRlLnJvb3QgKyBsaW5rKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgcmVtb3ZlTmF2MihpdGVtKSB7XHJcbiAgICAgICAgICAgICAgbGV0IGkgPSB0aGlzLmNvbXBvbmVudHMxLmluZGV4T2YoaXRlbSk7XHJcbiAgICAgICAgICAgICAgaWYoaSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50czEuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAgIHRoaXMuJHNpdGUuY29uc29sZS5jb21wb25lbnRzLnJlbW92ZU5hdjIodGhpcywgaXRlbSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgIFx0dGhpcy5jb21wb25lbnRzMSA9IFtdO1xyXG4gICAgICB9LFxyXG4gICAgICBiZWZvcmVEZXN0cm95KCkge1xyXG4gICAgICBcdHRoaXMuJHNpdGUuY29uc29sZS5jb21wb25lbnRzLnJlbW92ZU5hdjIodGhpcywgdGhpcy5jb21wb25lbnRzMSk7XHJcbiAgICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiByZWY9XCJtZW51XCIgOmNsYXNzPVwidXNlQ2xhc3NcIj5cclxuICAgIDxzbG90Pjwvc2xvdD5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICAvKipcclxuICAgICAqIEdlbmVyYWwtcHVycG9zZSBtZW51IHN5c3RlbSBWdWUgY29tcG9uZW50LlxyXG4gICAgICpcclxuICAgICAqIFN1cHBvcnRzIHNpbXBsZSBtZW51cyB3aGVyZSBhIGNsaWNrIG9wZW5zIGFuZCBjbG9zZXMgYSBwdWxsLWRvd24gbWVudS5cclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiAvLyBJbmNsdWRlIHRoaXMgY29tcG9uZW50XHJcbiAgICAgKiBpbXBvcnQgTWVudVZ1ZSBmcm9tICdzaXRlLWNsL2pzL1VJL01lbnUudnVlJztcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiAvLyBBZGQgYXMgYSBjb21wb25lbnQgdG8gdGhlIFZ1ZTpcclxuICAgICAqIGNvbXBvbmVudHM6IHtcclxuICAgICAqICAgbWVudVZ1ZTogTWVudVZ1ZVxyXG4gICAgICogfSxcclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiAvLyBVc2UgaW4gdGhlIHRlbXBsYXRlXHJcbiAgICAgKiA8bWVudS12dWUgdi1vbjpvcGVuPVwic2VsZWN0XCI+PGEgY2xhc3M9XCJmbG9hdC1yaWdodFwiPjxpbWcgOnNyYz1cInJvb3QgKyAnL3ZlbmRvci9jbC9zaXRlL2ltZy9tZW51YmFycy5wbmcnXCIgYWx0PVwiTWVudVwiPjwvYT5cclxuICAgICAqICAgPHVsPlxyXG4gICAgICogICAgIDxsaT48YT5GaXJzdCBvcHRpb248L2E+PC9saT5cclxuICAgICAqICAgICA8bGk+PGE+U2Vjb25kIG9wdGlvbjwvYT48L2xpPlxyXG4gICAgICogICA8L3VsPlxyXG4gICAgICogPC9tZW51LXZ1ZT5cclxuICAgICAqIEBjb25zdHJ1Y3RvciBNZW51VnVlXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIFx0ICBwcm9wczogWydhZGRDbGFzcyddLFxyXG4gICAgICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgXHR1c2VDbGFzczogJ2NsLW1lbnUnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdW50ZWQoKSB7XHJcbiAgICBcdCAgXHQgIGlmKHRoaXMuYWRkQ2xhc3MgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgXHQgIFx0XHQgIHRoaXMudXNlQ2xhc3MgKz0gJyAnICsgdGhpcy5hZGRDbGFzcztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gQ29sbGVjdCB1cCB0aGUgZWxlbWVudHNcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgbGV0IGxpbmtzID0gW107XHJcbiAgICAgICAgICAgIGxldCB1bHMgPSBbXTtcclxuICAgICAgICAgICAgbGV0IG9wZW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMuJHJlZnNbJ21lbnUnXS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLnRhZ05hbWUgPT09ICdBJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmtzLnB1c2goY2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaGlsZC50YWdOYW1lID09PSAnVUwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdWxzLnB1c2goY2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgY2xvc2VMaXN0ZW5lciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gRGlkIHdlIGNsaWNrIG9uIHNvbWV0aGluZyB0aGF0IGlzIGEgY2hpbGQgb2ZcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMgbWVudSBkaXY/XHJcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBXZSBhcmUgb2theSB3aXRoIGNsaWNrcyBvbiBjaGlsZHJlbiBvZlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBwb3AtdXAgbWVudVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh1bHMuaW5kZXhPZihlbGVtZW50KSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQgPT09IHRoaXMuJHJlZnNbJ21lbnUnXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgfSB3aGlsZSAoZWxlbWVudCAhPT0gbnVsbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2xvc2VBbGwoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gQ2xvc2UgYWxsIG1lbnVzXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIGxldCBjbG9zZUFsbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIC8vIFRoaXMgdGltZW91dCBlbnN1cmVzIHRoZSBjbGljayBvblxyXG4gICAgICAgICAgICAgICAgLy8gdGhlIG1lbnUgaXMgcHJvY2Vzc2VkIGJlZm9yZSB0aGUgbWVudVxyXG4gICAgICAgICAgICAgICAgLy8gaXMgaGlkZGVuLlxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgdWwgb2YgdWxzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgMjAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICBvcGVuID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUxpc3RlbmVyKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNsb3NlTGlzdGVuZXIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBDbGljayBsaXN0ZW5lcnMgb24gdGhlIGxpbmtzXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIGZvciAobGV0IGxpbmsgb2YgbGlua3MpIHtcclxuICAgICAgICAgICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBXZSBoYXZlIGNsaWNrZWQgb24gYSBtZW51IGxpbmtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIW9wZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3BlbiB0aGUgbWVudSFcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHVsIG9mIHVscykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNsb3NlTGlzdGVuZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnb3BlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENsb3NlIHRoZSBtZW51XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlQWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbjwvc2NyaXB0PiIsIjxzY3JpcHQ+XHJcblx0LyoqXHJcbiAgICogQmFzZSBjb21wb25lbnQgZm9yIHBhZ2VzLlxyXG4gICAqIEBjb25zdHJ1Y3RvciBQYWdlVnVlQmFzZVxyXG4gICAqL1xyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuXHQgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgKiBTaXRlIG9iamVjdFxyXG4gICAgICAgICAgICAgICAqIEBtZW1iZXJvZiBQYWdlVnVlQmFzZVxyXG4gICAgICAgICAgICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICAgICAgICAgICAqIEBtZW1iZXIge1NpdGV9IHNpdGVcclxuICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICBzaXRlOiBTaXRlLFxyXG5cdCAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAqIFNpdGUgcm9vdCBwYXRoIChTaXRlLnJvb3QpXHJcbiAgICAgICAgICAgICAgICogQG1lbWJlcm9mIFBhZ2VWdWVCYXNlXHJcbiAgICAgICAgICAgICAgICogQGluc3RhbmNlXHJcbiAgICAgICAgICAgICAgICogQG1lbWJlciB7c3RyaW5nfSByb290XHJcbiAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgcm9vdDogU2l0ZS5yb290XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuXHQgICAgICAgIC8qKlxyXG4gICAgICAgICAgICogU2V0IHRoZSBwYWdlIHRpdGxlXHJcbiAgICAgICAgICAgKiBAbWVtYmVyb2YgUGFnZVZ1ZUJhc2VcclxuICAgICAgICAgICAqIEBpbnN0YW5jZVxyXG5cdCAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlXHJcblx0ICAgICAgICAgKi9cclxuICAgICAgICAgICBzZXRUaXRsZSh0aXRsZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50LnNldFRpdGxlKHRpdGxlKTtcclxuICAgICAgICAgICB9LFxyXG4gICAgICAgICAgIHNldE1lbnU6IGZ1bmN0aW9uKG1lbnUpIHtcclxuXHQgICAgICAgICAgIHRoaXMuJHBhcmVudC5zZXRNZW51KG1lbnUpO1xyXG4gICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgZ2V0TWVudTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgXHQgcmV0dXJuIHRoaXMuJHBhcmVudC5nZXRNZW51KCk7XHJcbiAgICAgICAgICAgfSxcclxuICAgICAgICAgICBjbGVhck1lbnUoKSB7XHJcbiAgICAgICAgICAgXHQgIHRoaXMuc2V0TWVudShbXSk7XHJcbiAgICAgICAgICAgfSxcclxuXHQgICAgICAgICAvKipcclxuXHQgICAgICAgICAgKiBBZGQgYW4gb3B0aW9uIHRvIHRoZSBuYXYyIG1lbnUuXHJcblx0ICAgICAgICAgICogQHBhcmFtIHRpdGxlIFRpdGxlIG9mIHRoZSBvcHRpb24gdG8gYWRkLlxyXG5cdCAgICAgICAgICAqIEBwYXJhbSBjbG9zdXJlIEZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBzZWxlY3RlZC5cclxuXHQgICAgICAgICAgKi9cclxuXHQgICAgICAgICBhZGRNZW51KHRpdGxlLCBjbG9zdXJlKSB7XHJcblx0XHQgICAgICAgICBsZXQgbWVudSA9IHRoaXMuZ2V0TWVudSgpO1xyXG5cdFx0ICAgICAgICAgbWVudS5wdXNoKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IHRpdGxlLFxyXG4gICAgICAgICAgICAgICAgY2xpY2s6IGNsb3N1cmVcclxuICAgICAgICAgICAgIH0pO1xyXG5cdFx0ICAgICAgICAgdGhpcy5zZXRNZW51KG1lbnUpO1xyXG5cdCAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG4iLCI8c2NyaXB0PlxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdG1ldGhvZHM6IHtcclxuXHRcdGNsb3NlKCkge1xyXG5cdFx0XHR0aGlzLiRkaWFsb2cuY2xvc2UoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjbC1jZW50ZXItaW5cIj5cclxuICAgIDxmb3JtIGNsYXNzPVwiY2wtaW5saW5lLXBhZGRlZFwiIEBzdWJtaXQucHJldmVudD1cInN1Ym1pdCgpXCI+XHJcbiAgICAgIDxwPjxsYWJlbD5UZWFtIFNpemU8YnI+PGlucHV0IHN0eWxlPVwid2lkdGg6IDhlbVwiIGNsYXNzPVwiY2VudGVyXCIgcmVmPVwic2l6ZVwiIHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cInNpemVcIj48L2xhYmVsPjwvcD5cclxuICAgIDwvZm9ybT5cclxuICAgIDxkaXYgY2xhc3M9XCJjbC1kaWFsb2ctYm90dG9tXCI+XHJcbiAgICAgIDxidXR0b24gQGNsaWNrLnByZXZlbnQ9XCJzdWJtaXQoKVwiIHR5cGU9XCJzdWJtaXRcIj5EaXN0cmlidXRlPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gQGNsaWNrLnByZXZlbnQ9XCJjbG9zZSgpXCIgdHlwZT1cInN1Ym1pdFwiPkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCBWdWVEaWFsb2dWdWUgZnJvbSAnc2l0ZS1jbC9qcy9WdWUvVnVlRGlhbG9nLnZ1ZSc7XHJcbiAgaW1wb3J0IERpYWxvZyBmcm9tICdkaWFsb2ctY2wnO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgXHQnZXh0ZW5kcyc6IFZ1ZURpYWxvZ1Z1ZSxcclxuICBcdHByb3BzOiBbJ3RlYW1pbmdpZCcsICdwYXJlbnQnXSxcclxuICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gIFx0XHRyZXR1cm4ge1xyXG4gIFx0XHRcdHNpemU6IDVcclxuICAgICAgfVxyXG4gICAgfSxcclxuICBcdG1vdW50ZWQoKSB7XHJcblx0ICAgIHRoaXMuJHJlZnNbJ3NpemUnXS5zZWxlY3QoKTtcclxuICBcdFx0dGhpcy4kcmVmc1snc2l6ZSddLmZvY3VzKCk7XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gIFx0XHRzdWJtaXQoKSB7XHJcbiAgXHRcdFx0bGV0IHNpemUgPSArdGhpcy5zaXplO1xyXG4gIFx0XHRcdGlmKHNpemUgPCAxIHx8IHNpemUgPiAxMDApIHtcclxuICAgICAgICAgIG5ldyBEaWFsb2cuTWVzc2FnZUJveCgnTXVzdCBlbnRlciBzaXplJywgJ1lvdSBtdXN0IHByb3ZpZGUgYSBzaXplIGZyb20gMSB0byAxMDAnLFxyXG4gICAgICAgICAgICBEaWFsb2cuTWVzc2FnZUJveC5PSyk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgc2l6ZTogc2l6ZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy4kc2l0ZS5hcGkucG9zdCgnL2FwaS90ZWFtL3RlYW1zLycgKyB0aGlzLnRlYW1pbmdpZCArICcvZGlzdHJpYnV0ZScsIHBhcmFtcylcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuICAgICAgICAgICAgICB0aGlzLnBhcmVudC50YWtlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICB0aGlzLiRkaWFsb2cuY2xvc2UoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjbC1jZW50ZXItaW5cIj5cclxuICAgIDxmb3JtIGNsYXNzPVwiY2wtaW5saW5lLXBhZGRlZFwiIEBzdWJtaXQucHJldmVudD1cInN1Ym1pdCgpXCI+XHJcbiAgICAgIDxwPjxsYWJlbD5OYW1lPGJyPjxpbnB1dCByZWY9XCJuYW1lXCIgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwidGVhbS5uYW1lXCI+PC9sYWJlbD48L3A+XHJcbiAgICA8L2Zvcm0+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2wtZGlhbG9nLWJvdHRvbVwiPlxyXG4gICAgICA8YnV0dG9uIEBjbGljay5wcmV2ZW50PVwic3VibWl0KClcIiB0eXBlPVwic3VibWl0XCI+e3tvcGVyYXRpb249PT0nbmV3JyA/ICdBZGQnIDogJ1VwZGF0ZSd9fTwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIEBjbGljay5wcmV2ZW50PVwiY2xvc2UoKVwiIHR5cGU9XCJzdWJtaXRcIj5DYW5jZWw8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgVnVlRGlhbG9nVnVlIGZyb20gJ3NpdGUtY2wvanMvVnVlL1Z1ZURpYWxvZy52dWUnO1xyXG4gIGltcG9ydCBEaWFsb2cgZnJvbSAnZGlhbG9nLWNsJztcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gIFx0J2V4dGVuZHMnOiBWdWVEaWFsb2dWdWUsXHJcbiAgXHRwcm9wczogWyd0ZWFtJywgJ3RlYW1pbmdpZCcsICdvcGVyYXRpb24nLCAncGFyZW50J10sXHJcbiAgXHRtb3VudGVkKCkge1xyXG4gIFx0XHR0aGlzLiRyZWZzWyduYW1lJ10uZm9jdXMoKTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgXHRcdHN1Ym1pdCgpIHtcclxuICAgICAgICBpZih0aGlzLnRlYW0ubmFtZS50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgICAgICBuZXcgRGlhbG9nLk1lc3NhZ2VCb3goJ011c3QgZW50ZXIgbmFtZScsICdZb3UgbXVzdCBwcm92aWRlIGEgbm9uLWVtcHR5IG5hbWUnLFxyXG4gICAgICAgICAgICBEaWFsb2cuTWVzc2FnZUJveC5PSyk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgaWQ6IHRoaXMudGVhbS5pZCxcclxuICAgICAgICAgIG5hbWU6IHRoaXMudGVhbS5uYW1lLnRyaW0oKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy4kc2l0ZS5hcGkucG9zdCgnL2FwaS90ZWFtL3RlYW1zLycgKyB0aGlzLnRlYW1pbmdpZCArICcvJyArIHRoaXMub3BlcmF0aW9uLCBwYXJhbXMpXHJcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wYXJlbnQudGFrZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgdGhpcy4kZGlhbG9nLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY2wtY2VudGVyLWluXCI+XHJcbiAgICA8Zm9ybSBjbGFzcz1cImNsLWlubGluZS1wYWRkZWRcIiBAc3VibWl0LnByZXZlbnQ9XCJzdWJtaXQoKVwiPlxyXG4gICAgICA8cD48bGFiZWw+VGVhbSBOYW1lczxicj5cclxuICAgICAgICA8dGV4dGFyZWEgcmVmPVwibmFtZXNcIiB2LW1vZGVsPVwibmFtZXNcIiByb3dzPVwiMTVcIj48L3RleHRhcmVhPlxyXG4gICAgICA8L2xhYmVsPjwvcD5cclxuICAgIDwvZm9ybT5cclxuICAgIDxkaXYgY2xhc3M9XCJjbC1kaWFsb2ctYm90dG9tXCI+XHJcbiAgICAgIDxidXR0b24gQGNsaWNrLnByZXZlbnQ9XCJzdWJtaXQoKVwiIHR5cGU9XCJzdWJtaXRcIj5TZXQgTmFtZXM8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBAY2xpY2sucHJldmVudD1cImNsb3NlKClcIiB0eXBlPVwic3VibWl0XCI+Q2FuY2VsPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IFZ1ZURpYWxvZ1Z1ZSBmcm9tICdzaXRlLWNsL2pzL1Z1ZS9WdWVEaWFsb2cudnVlJztcclxuICBpbXBvcnQgRGlhbG9nIGZyb20gJ2RpYWxvZy1jbCc7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICBcdCdleHRlbmRzJzogVnVlRGlhbG9nVnVlLFxyXG4gIFx0cHJvcHM6IFsndGVhbWluZ2lkJywgJ3BhcmVudCddLFxyXG4gICAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgXHRcdHJldHVybiB7XHJcbiAgXHRcdFx0bmFtZXM6ICcnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgXHRtb3VudGVkKCkge1xyXG4gIFx0XHR0aGlzLiRyZWZzWyduYW1lcyddLmZvY3VzKCk7XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gIFx0XHRzdWJtaXQoKSB7XHJcbiAgICAgICAgbGV0IG5hbWVzMSA9IHRoaXMubmFtZXMudHJpbSgpLnNwbGl0KFwiXFxuXCIpO1xyXG4gICAgICAgIGxldCBuYW1lcyA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgbmFtZSBvZiBuYW1lczEpIHtcclxuICAgICAgICBcdG5hbWUgPSBuYW1lLnRyaW0oKTtcclxuICAgICAgICBcdGlmKG5hbWUgIT09ICcnKSB7XHJcbiAgICAgICAgXHRcdG5hbWVzLnB1c2gobmFtZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihuYW1lcy5sZW5ndGggPT09IDApIHtcclxuXHQgICAgICAgIG5ldyBEaWFsb2cuTWVzc2FnZUJveCgnTXVzdCBlbnRlciBuYW1lcycsICdZb3UgbXVzdCBlbnRlciBvbmUgb3IgbW9yZSBuYW1lcyB0byB1c2UuJyxcclxuXHRcdCAgICAgICAgRGlhbG9nLk1lc3NhZ2VCb3guT0spO1xyXG5cdCAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcblx0XHQgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgIG5hbWVzOiBuYW1lc1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy4kc2l0ZS5hcGkucG9zdCgnL2FwaS90ZWFtL3RlYW1zLycgKyB0aGlzLnRlYW1pbmdpZCArICcvbmFtZXMnLCBwYXJhbXMpXHJcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wYXJlbnQudGFrZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgdGhpcy4kZGlhbG9nLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY2wtdGVhbWluZy1lZGl0b3JcIj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxmb3JtPlxyXG4gICAgICAgIDxwPjxsYWJlbD5UYWc8YnI+PGlucHV0IHJlZj1cInRhZ1wiIHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cInRlYW1pbmcudGFnXCI+PC9sYWJlbD48L3A+XHJcbiAgICAgICAgPHA+PGxhYmVsPk5hbWU8YnI+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cInRlYW1pbmcubmFtZVwiPjwvbGFiZWw+PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiY2VudGVyXCI+PGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2LW1vZGVsPVwidGVhbWluZy5wdWJsaWNcIj4gUHVibGljPC9sYWJlbD48L3A+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gIFx0cHJvcHM6IFsndGVhbWluZyddLFxyXG4gIFx0bW91bnRlZCgpIHtcclxuICBcdFx0dGhpcy4kcmVmc1sndGFnJ10uZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcbiAgZGl2LmNsLXRlYW1pbmctZWRpdG9yIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICA+ZGl2IHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBwYWRkaW5nOiAxLjVlbSAwIDIuMGVtIDA7XHJcbiAgICB9XHJcbiAgfVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgPGRpdiB2LWlmPVwidGVhbWluZ3MgIT09IG51bGxcIiBjbGFzcz1cImZ1bGxcIj5cclxuICAgIDx0YWJsZSB2LWlmPVwidGVhbWluZ3MubGVuZ3RoID4gMFwiPlxyXG4gICAgICA8dHI+XHJcbiAgICAgICAgPHRoPjwvdGg+XHJcbiAgICAgICAgPHRoPlRhZzwvdGg+XHJcbiAgICAgICAgPHRoPk5hbWU8L3RoPlxyXG4gICAgICAgIDx0aD5WaXNpYmlsaXR5PC90aD5cclxuICAgICAgPC90cj5cclxuICAgICAgPHRyIHYtZm9yPVwidGVhbWluZyBpbiB0ZWFtaW5nc1wiIDprZXk9XCJ0ZWFtaW5nLmlkXCI+XHJcbiAgICAgICAgPHRkPjxhIEBjbGljay5wcmV2ZW50PVwiZWRpdGVyKHRlYW1pbmcpXCI+PGltZyA6c3JjPVwicm9vdCArICcvdmVuZG9yL2NsL3NpdGUvaW1nL3BlbmNpbDE2LnBuZydcIiBhbHQ9XCJFZGl0XCIgdGl0bGU9XCJFZGl0XCI+PC9hPlxyXG4gICAgICAgICAgPGEgQGNsaWNrLnByZXZlbnQ9XCJkZWxldGVyKHRlYW1pbmcpXCI+PGltZyA6c3JjPVwicm9vdCArICcvdmVuZG9yL2NsL3NpdGUvaW1nL3gucG5nJ1wiIGFsdD1cIkRlbGV0ZVwiIHRpdGxlPVwiRGVsZXRlXCI+PC9hPlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPHRkPjxyb3V0ZXItbGluayA6dG89XCJyb290ICsgJy9jbC9jb25zb2xlL3RlYW0vJyArIHRlYW1pbmcuaWRcIj57e3RlYW1pbmcudGFnfX08L3JvdXRlci1saW5rPjwvdGQ+XHJcbiAgICAgICAgPHRkPnt7dGVhbWluZy5uYW1lfX08L3RkPlxyXG4gICAgICAgIDx0ZD57e3RlYW1pbmcucHVibGljID8gJ1B1YmxpYycgOiAnUHJpdmF0ZSd9fTwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcbiAgICA8L3RhYmxlPlxyXG4gICAgPGRpdiB2LWVsc2UgY2xhc3M9XCJjZW50ZXJcIj5cclxuICAgICAgPHA+VGhlcmUgYXJlIGN1cnJlbnRseSBubyBkZWZpbmVkIHRlYW1pbmdzLjwvcD5cclxuICAgICAgPHA+Q2hvb3NlIEFkZCBUZWFtaW5nIHRvIGFkZCBhIG5ldyB0ZWFtaW5nLjwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCBDb25zb2xlQ29tcG9uZW50QmFzZSBmcm9tICdjb25zb2xlLWNsL2pzL0NvbnNvbGVDb21wb25lbnRCYXNlLnZ1ZSc7XHJcblx0aW1wb3J0IERpYWxvZyBmcm9tICdkaWFsb2ctY2wnO1xyXG4gIGltcG9ydCB7VGVhbWluZ30gZnJvbSAnLi4vVGVhbWluZyc7XHJcbiAgaW1wb3J0IFRlYW1pbmdFZGl0b3JWdWUgZnJvbSAnLi9UZWFtaW5nRWRpdG9yLnZ1ZSc7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICBcdGV4dGVuZHM6IENvbnNvbGVDb21wb25lbnRCYXNlLFxyXG4gIFx0ZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgXHRcdHJldHVybiB7XHJcbiAgXHRcdCAgdGVhbWluZ3M6IG51bGxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICBcdG1vdW50ZWQoKSB7XHJcbiAgXHRcdHRoaXMuc2V0VGl0bGUoJzogVGVhbWluZ3MnKTtcclxuXHQgICAgdGhpcy5hZGROYXYyKCdBZGQgVGVhbWluZycsIDUsICgpID0+IHtcclxuXHRcdCAgICB0aGlzLmFkZCgpO1xyXG5cdCAgICB9KTtcclxuXHJcblx0ICAgIHRoaXMuJHNpdGUuYXBpLmdldCgnL2FwaS90ZWFtL3RlYW1pbmdzJywge30pXHJcblx0XHQgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdCAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuXHRcdFx0ICAgIFx0dGhpcy50YWtlKHJlc3BvbnNlKTtcclxuXHRcdFx0XHQgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG5cclxuXHRcdFx0ICAgIH0gZWxzZSB7XHJcblx0XHRcdFx0ICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG5cdFx0XHQgICAgfVxyXG5cclxuXHRcdCAgICB9KVxyXG5cdFx0ICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHRcdFx0ICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG5cdFx0ICAgIH0pO1xyXG4gICAgfSxcclxuXHQgIG1ldGhvZHM6IHtcclxuICBcdFx0dGFrZShyZXNwb25zZSkge1xyXG4gIFx0XHRcdGxldCBkYXRhID0gcmVzcG9uc2UuZ2V0RGF0YSgndGVhbWluZ3MnKS5hdHRyaWJ1dGVzO1xyXG5cclxuICBcdFx0XHR0aGlzLnRlYW1pbmdzID0gW107XHJcbiAgXHRcdFx0Zm9yKGxldCByb3cgb2YgZGF0YSkge1xyXG4gIFx0XHRcdFx0dGhpcy50ZWFtaW5ncy5wdXNoKG5ldyBUZWFtaW5nKHJvdykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy50ZWFtaW5ncyk7XHJcbiAgICAgIH0sXHJcbiAgXHRcdGFkZCgpIHtcclxuICBcdFx0XHRjb25zdCB0ZWFtaW5nID0gbmV3IFRlYW1pbmcoKTtcclxuXHJcbiAgXHRcdFx0bmV3IERpYWxvZyh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTmV3IFRlYW1pbmcnLFxyXG4gICAgICAgICAgICBjb250ZW50OiAnPGRpdiBpZD1cImNsLXRlYW1pbmdcIj48L2Rpdj4nLFxyXG4gICAgXHRcdCAgICBhZGRDbGFzczogJ2NsLWRpYWxvZy1uYXJyb3cnLFxyXG4gICAgICAgICAgICBidXR0b25zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcdCAgY29udGVudHM6ICdBZGQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvY3VzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiAoZGlhbG9nKSA9PiB7XHJcblx0ICAgICAgICAgICAgICAgICAgICBpZighdGhpcy4kc2l0ZS5UYWdzLnZhbGlkYXRlKHRlYW1pbmcudGFnKSkge1xyXG5cdFx0ICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcblx0ICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgICAgICAgICAgICAgaWYodGVhbWluZy5uYW1lLnRyaW0oKSA9PT0gJycpIHtcclxuXHRcdCAgICAgICAgICAgICAgICAgICAgbmV3IERpYWxvZy5NZXNzYWdlQm94KCdNdXN0IGVudGVyIG5hbWUnLCAnWW91IG11c3QgcHJvdmlkZSBhIG5vbi1lbXB0eSBuYW1lJyxcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICBEaWFsb2cuTWVzc2FnZUJveC5PSyk7XHJcblx0XHQgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHQgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBcdCAgXHRsZXQgcGFyYW1zID0ge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgXHQgIHRhZzogdGVhbWluZy50YWcudHJpbSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRlYW1pbmcubmFtZS50cmltKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHVibGljOiB0ZWFtaW5nLnB1YmxpY1xyXG4gICAgICAgICAgICAgICAgXHQgIFx0fVxyXG5cclxuICAgICAgICAgICAgICAgIFx0ICBcdHRoaXMuJHNpdGUuYXBpLnBvc3QoJy9hcGkvdGVhbS90ZWFtaW5ncy9uZXcnLCBwYXJhbXMpXHJcbiAgICAgICAgICAgICAgICBcdCAgXHQgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBcdCAgXHQgICAgICAgIGlmICghcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFrZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICBcdCAgXHQgICAgICAgIH0gZWxzZSB7XHJcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICBcdCAgXHQgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBcdCAgXHQgICAgfSlcclxuICAgICAgICAgICAgICAgIFx0ICBcdCAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIFx0ICBcdCAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFx0ICBjb250ZW50czogJ0NhbmNlbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IChkaWFsb2cpID0+IHtcclxuICAgICAgICAgICAgICAgIFx0ICBcdGRpYWxvZy5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgXHRcdFx0Ly8gQ3JlYXRlIGEgVnVlIGluc2lkZSB0aGUgZGlhbG9nIGJveFxyXG4gICAgICAgIG5ldyB0aGlzLiRzaXRlLlZ1ZSh7XHJcbiAgICAgICAgICBlbDogJyNjbC10ZWFtaW5nJyxcclxuICAgICAgICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIHRlYW1pbmc6IHRlYW1pbmdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHRlbXBsYXRlOiBgPGVkaXRvciA6dGVhbWluZz1cInRlYW1pbmdcIj48L2VkaXRvcj5gLFxyXG4gICAgICAgICAgY29tcG9uZW50czoge1xyXG4gICAgICAgICAgICBlZGl0b3I6IFRlYW1pbmdFZGl0b3JWdWVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBlZGl0ZXIodGVhbWluZykge1xyXG4gIFx0XHRcdHRlYW1pbmcgPSB0ZWFtaW5nLmNsb25lKCk7XHJcblxyXG5cdCAgICAgIG5ldyBEaWFsb2coe1xyXG5cdFx0ICAgICAgdGl0bGU6ICdFZGl0IFRlYW1pbmcnLFxyXG5cdFx0ICAgICAgY29udGVudDogJzxkaXYgaWQ9XCJjbC10ZWFtaW5nXCI+PC9kaXY+JyxcclxuXHQgICAgICAgIGFkZENsYXNzOiAnY2wtZGlhbG9nLW5hcnJvdycsXHJcblx0XHQgICAgICBidXR0b25zOiBbXHJcblx0XHRcdCAgICAgIHtcclxuXHRcdFx0XHQgICAgICBjb250ZW50czogJ1VwZGF0ZScsXHJcblx0XHRcdFx0ICAgICAgZm9jdXM6IHRydWUsXHJcblx0XHRcdFx0ICAgICAgY2xpY2s6IChkaWFsb2cpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKCF0aGlzLiRzaXRlLlRhZ3MudmFsaWRhdGUodGVhbWluZy50YWcpKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblx0XHRcdFx0XHQgICAgICBpZih0ZWFtaW5nLm5hbWUudHJpbSgpID09PSAnJykge1xyXG5cdFx0XHRcdFx0XHQgICAgICBuZXcgRGlhbG9nLk1lc3NhZ2VCb3goJ011c3QgZW50ZXIgbmFtZScsICdZb3UgbXVzdCBwcm92aWRlIGEgbm9uLWVtcHR5IG5hbWUnLFxyXG5cdFx0XHRcdFx0XHRcdCAgICAgIERpYWxvZy5NZXNzYWdlQm94Lk9LKTtcclxuXHRcdFx0XHRcdFx0ICAgICAgcmV0dXJuO1xyXG5cdFx0XHRcdFx0ICAgICAgfVxyXG5cclxuXHRcdFx0XHRcdCAgICAgIGxldCBwYXJhbXMgPSB7XHJcblx0XHRcdFx0XHQgICAgICBcdGlkOiB0ZWFtaW5nLmlkLFxyXG5cdFx0XHRcdFx0XHQgICAgICB0YWc6IHRlYW1pbmcudGFnLnRyaW0oKSxcclxuXHRcdFx0XHRcdFx0ICAgICAgbmFtZTogdGVhbWluZy5uYW1lLnRyaW0oKSxcclxuXHRcdFx0XHRcdFx0ICAgICAgcHVibGljOiB0ZWFtaW5nLnB1YmxpY1xyXG5cdFx0XHRcdFx0ICAgICAgfVxyXG5cclxuXHRcdFx0XHRcdCAgICAgIHRoaXMuJHNpdGUuYXBpLnBvc3QoJy9hcGkvdGVhbS90ZWFtaW5ncy91cGRhdGUnLCBwYXJhbXMpXHJcblx0XHRcdFx0XHRcdCAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdCAgICAgIGlmICghcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0ICAgICAgdGhpcy50YWtlKHJlc3BvbnNlKTtcclxuXHRcdFx0XHRcdFx0XHRcdCAgICAgIGRpYWxvZy5jbG9zZSgpO1xyXG5cdFx0XHRcdFx0XHRcdCAgICAgIH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHQgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuXHRcdFx0XHRcdFx0XHQgICAgICB9XHJcblxyXG5cdFx0XHRcdFx0XHQgICAgICB9KVxyXG5cdFx0XHRcdFx0XHQgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0ICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcblx0XHRcdFx0XHRcdCAgICAgIH0pO1xyXG5cclxuXHRcdFx0XHQgICAgICB9XHJcblx0XHRcdCAgICAgIH0sXHJcblx0XHRcdCAgICAgIHtcclxuXHRcdFx0XHQgICAgICBjb250ZW50czogJ0NhbmNlbCcsXHJcblx0XHRcdFx0ICAgICAgY2xpY2s6IChkaWFsb2cpID0+IHtcclxuXHRcdFx0XHRcdCAgICAgIGRpYWxvZy5jbG9zZSgpO1xyXG5cdFx0XHRcdCAgICAgIH1cclxuXHRcdFx0ICAgICAgfVxyXG5cdFx0ICAgICAgXVxyXG5cclxuXHQgICAgICB9KTtcclxuXHJcblx0ICAgICAgLy8gQ3JlYXRlIGEgVnVlIGluc2lkZSB0aGUgZGlhbG9nIGJveFxyXG5cdCAgICAgIG5ldyB0aGlzLiRzaXRlLlZ1ZSh7XHJcblx0XHQgICAgICBlbDogJyNjbC10ZWFtaW5nJyxcclxuXHRcdCAgICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQgICAgICByZXR1cm4ge1xyXG5cdFx0XHRcdCAgICAgIHRlYW1pbmc6IHRlYW1pbmdcclxuXHRcdFx0ICAgICAgfVxyXG5cdFx0ICAgICAgfSxcclxuXHRcdCAgICAgIHRlbXBsYXRlOiBgPGVkaXRvciA6dGVhbWluZz1cInRlYW1pbmdcIj48L2VkaXRvcj5gLFxyXG5cdFx0ICAgICAgY29tcG9uZW50czoge1xyXG5cdFx0XHQgICAgICBlZGl0b3I6IFRlYW1pbmdFZGl0b3JWdWVcclxuXHRcdCAgICAgIH1cclxuXHQgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBkZWxldGVyKHRlYW1pbmcpIHtcclxuXHQgICAgICBuZXcgRGlhbG9nLk1lc3NhZ2VCb3goJ0FyZSB5b3Ugc3VyZT8nLCAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSAnICsgdGVhbWluZy5uYW1lLFxyXG5cdFx0ICAgICAgRGlhbG9nLk1lc3NhZ2VCb3guT0tDQU5DRUwsICgpID0+IHtcclxuXHRcdCAgICAgICAgdGhpcy4kc2l0ZS5hcGkucG9zdCgnL2FwaS90ZWFtL3RlYW1pbmdzL2RlbGV0ZScsIHtpZDogdGVhbWluZy5pZH0pXHJcblx0XHRcdCAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0ICAgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuXHRcdFx0XHRcdCAgICAgICAgdGhpcy50YWtlKHJlc3BvbnNlKTtcclxuXHRcdFx0XHRcdCAgICAgICAgZGlhbG9nLmNsb3NlKCk7XHJcblx0XHRcdFx0ICAgICAgICB9IGVsc2Uge1xyXG5cdFx0XHRcdFx0ICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuXHRcdFx0XHQgICAgICAgIH1cclxuXHJcblx0XHRcdCAgICAgICAgfSlcclxuXHRcdFx0ICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcblx0XHRcdFx0ICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuXHRcdFx0ICAgICAgICB9KTtcclxuXHRcdCAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZnVsbCBjbC10ZWFtcy1lZGl0b3JcIiB2LWlmPVwidGVhbXMgIT09IG51bGxcIj5cclxuICAgICAgPHRhYmxlIGNsYXNzPVwic21hbGxcIj5cclxuICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJ0ZWFtIGluIHRlYW1zXCI+XHJcbiAgICAgICAgICA8dHIgOmtleT1cInRlYW0uaWRcIiBjbGFzcz1cImNsLWludGVybmFsXCI+XHJcbiAgICAgICAgICAgIDx0aCBjbGFzcz1cInJpZ2h0XCI+PHNwYW4gdi1pZj1cInRlYW0ubmFtZSAhPT0gbnVsbFwiPlxyXG4gICAgICAgICAgICAgIDxhIEBjbGljay5wcmV2ZW50PVwiZWRpdGVyKHRlYW0pXCI+PGltZyA6c3JjPVwicm9vdCArICcvdmVuZG9yL2NsL3NpdGUvaW1nL3BlbmNpbDE2LnBuZydcIiBhbHQ9XCJFZGl0XCIgdGl0bGU9XCJFZGl0XCI+PC9hPlxyXG4gICAgICAgICAgICAgIDxhIEBjbGljay5wcmV2ZW50PVwiZGVsZXRlcih0ZWFtKVwiPjxpbWcgOnNyYz1cInJvb3QgKyAnL3ZlbmRvci9jbC9zaXRlL2ltZy94LnBuZydcIiBhbHQ9XCJEZWxldGVcIiB0aXRsZT1cIkRlbGV0ZVwiPjwvYT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGNsLW1lbnUgYWRkLWNsYXNzPVwiY2wtaW5saW5lXCIgdi1pZj1cInRlYW0ubmFtZSA9PT0gbnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgPGE+PGltZyA6c3JjPVwicm9vdCArICcvdmVuZG9yL2NsL3NpdGUvaW1nL21lbnViYXJzLnBuZydcIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT48YSBAY2xpY2sucHJldmVudD1cImRpc3RyaWJ1dGUoKVwiPkRpc3RyaWJ1dGU8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9jbC1tZW51PlxyXG4gICAgICAgICAgICAgIDxhIEBjbGljay5wcmV2ZW50PVwidG9nZ2xlKHRlYW0pXCI+PGltZyA6c3JjPVwiJHNpdGUucm9vdCArICcvdmVuZG9yL2NsL3NpdGUvaW1nLycgKyAob3Blblt0ZWFtLmlkXSA9PT0gdHJ1ZSA/ICdtaW51cy5wbmcnIDogJ3BsdXMucG5nJylcIj48L2E+XHJcbiAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgIDx0aCBjb2xzcGFuPVwiMlwiIHYtaHRtbD1cInRlYW1IZWFkaW5nKHRlYW0pXCI+PC90aD5cclxuICAgICAgICAgICAgPHRoIGNsYXNzPVwiY2VudGVyXCI+e3t0ZWFtLm1lbWJlcnMubGVuZ3RofX08L3RoPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwib3Blblt0ZWFtLmlkXSA9PT0gdHJ1ZVwiPlxyXG4gICAgICAgICAgICA8dHIgdi1pZj1cInRlYW0ubWVtYmVycy5sZW5ndGggPT09IDBcIj5cclxuICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjRcIiBjbGFzcz1cImNlbnRlclwiPioqKiBlbXB0eSAqKio8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dHIgdi1mb3I9XCJtZW1iZXIgaW4gdGVhbS5tZW1iZXJzXCI+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxjbC1tZW51PlxyXG4gICAgICAgICAgICAgICAgICA8YT48aW1nIDpzcmM9XCJyb290ICsgJy92ZW5kb3IvY2wvc2l0ZS9pbWcvbWVudWJhcnMucG5nJ1wiPjwvYT5cclxuICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSB2LWZvcj1cInRlYW0xIGluIHRlYW1zXCI+PGEgQGNsaWNrLnByZXZlbnQ9XCJtb3ZlKG1lbWJlciwgdGVhbTEpXCI+e3t0ZWFtMS5uYW1lICE9PSBudWxsID8gdGVhbTEubmFtZSA6ICdVbmFzc2lnbmVkJ319PGltZyB2LWlmPVwidGVhbSA9PT0gdGVhbTFcIiA6c3JjPVwicm9vdCArICcvdmVuZG9yL2NsL3NpdGUvaW1nL2NoZWNrMTYucG5nJ1wiPjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9jbC1tZW51PlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPjxhIDpocmVmPVwiJ21haWx0bzonICsgbWVtYmVyLmVtYWlsXCI+e3ttZW1iZXIudXNlcn19PC9hPjwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPnt7bWVtYmVyLm5hbWV9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICAgIDxwIGNsYXNzPVwiY2VudGVyXCI+PGVtPnt7dG90YWxzfX08L2VtPjwvcD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IENvbnNvbGVDb21wb25lbnRCYXNlIGZyb20gJ2NvbnNvbGUtY2wvanMvQ29uc29sZUNvbXBvbmVudEJhc2UudnVlJztcclxuXHRpbXBvcnQgVGVhbUVkaXRvclZ1ZSBmcm9tICcuL1RlYW1FZGl0b3IudnVlJztcclxuICBpbXBvcnQgRGlhbG9nIGZyb20gJ2RpYWxvZy1jbCc7XHJcbiAgaW1wb3J0IHtUZWFtfSBmcm9tICcuLi9UZWFtJztcclxuICBpbXBvcnQgTWVudVZ1ZSBmcm9tICdzaXRlLWNsL2pzL1VJL01lbnUudnVlJ1xyXG4gIGltcG9ydCB7VnVlRGlhbG9nfSBmcm9tICdzaXRlLWNsL2pzL1Z1ZS9WdWVEaWFsb2cnO1xyXG4gIGltcG9ydCBUZWFtRGlzdHJpYnV0ZXJWdWUgZnJvbSAnLi9UZWFtRGlzdHJpYnV0ZXIudnVlJztcclxuICBpbXBvcnQgVGVhbU5hbWVMb2FkZXJWdWUgZnJvbSAnLi9UZWFtTmFtZUxvYWRlci52dWUnO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcblx0ICAgIGV4dGVuZHM6IENvbnNvbGVDb21wb25lbnRCYXNlLFxyXG4gIFx0ICBwcm9wczogWydpZCddLFxyXG4gICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuXHQgICAgXHQgIHJldHVybiB7XHJcblx0ICAgIFx0ICBcdHRlYW1zOiBudWxsLFxyXG4gICAgICAgICAgICBvcGVuOiBbXVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBjb21wdXRlZDoge1xyXG5cdCAgICAgIC8qKlxyXG4gICAgICAgICAqIENvbXB1dGVkIHBhcmFtZXRlciB0aGF0IHRvdGFscyBhbGwgdGVhbSBtZW1iZXJzaGlwc1xyXG5cdCAgICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcblx0ICAgICAgICovXHJcblx0ICAgIFx0dG90YWxzKCkge1xyXG5cdCAgICBcdFx0bGV0IGNudCA9IDA7XHJcblx0ICAgIFx0XHRsZXQgdW5hZmZpbCA9IDA7XHJcblx0ICAgIFx0XHRmb3IoY29uc3QgdGVhbSBvZiB0aGlzLnRlYW1zKSB7XHJcblx0ICAgIFx0XHRcdGlmKHRlYW0ubmFtZSAhPT0gbnVsbCkge1xyXG5cdFx0XHQgICAgICAgIGNudCArPSB0ZWFtLm1lbWJlcnMubGVuZ3RoO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICBcdFx0XHRcdHVuYWZmaWwgKz0gdGVhbS5tZW1iZXJzLmxlbmd0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cdCAgICBcdFx0bGV0IHJlc3BvbnNlID0gY250ICsgJyB0ZWFtIG1lbWJlcnMgLyAnICsgKHRoaXMudGVhbXMubGVuZ3RoLTEpICsgXCIgdGVhbXNcIjtcclxuXHQgICAgXHRcdGlmKHVuYWZmaWwgPiAwKSB7XHJcblx0ICAgIFx0XHRcdHJlc3BvbnNlICs9ICcgLyAnICsgdW5hZmZpbCArICcgdW5hc3NpZ25lZCc7XHJcbiAgICAgICAgICB9XHJcblx0ICAgIFx0XHRyZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBjb21wb25lbnRzOiB7XHJcblx0ICAgICAgY2xNZW51OiBNZW51VnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIG1vdW50ZWQoKSB7XHJcblx0ICAgICAgdGhpcy5hZGROYXYyTGluaygnVGVhbWluZ3MnLCAzLCAnL2NsL2NvbnNvbGUvdGVhbXMnKTtcclxuXHJcblx0ICAgICAgdGhpcy5hZGROYXYyKCdBZGQgVGVhbScsIDUsICgpID0+IHtcclxuXHRcdCAgICAgIHRoaXMuYWRkKCk7XHJcblx0ICAgICAgfSk7XHJcblxyXG5cdCAgICAgIHRoaXMuYWRkTmF2MignTG9hZCBOYW1lcycsIDYsICgpID0+IHtcclxuXHRcdCAgICAgIHRoaXMubG9hZE5hbWVzKCk7XHJcblx0ICAgICAgfSk7XHJcblxyXG5cdCAgICAgIHRoaXMuYWRkTmF2MignRXhwYW5kIEFsbCcsIDcsICgpID0+IHtcclxuXHQgICAgICBcdHRoaXMuZXhwYW5kQWxsKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cdCAgICAgIHRoaXMuJHNpdGUuYXBpLmdldCgnL2FwaS90ZWFtL3RlYW1zLycgKyB0aGlzLmlkLCB7fSlcclxuXHQgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0ICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuXHQgICAgICAgICAgICAgICAgdGhpcy50YWtlKHJlc3BvbnNlKTtcclxuXHQgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblx0ICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG5cdCAgICAgICAgICAgICAgfVxyXG5cclxuXHQgICAgICAgICAgfSlcclxuXHQgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG5cdCAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG5cdCAgICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgYmVmb3JlRGVzdHJveSgpIHtcclxuICAgICAgfSxcclxuICAgICAgbWV0aG9kczoge1xyXG5cdCAgICBcdHRha2UocmVzcG9uc2UpIHtcclxuXHQgICAgXHRcdCAgbGV0IHRlYW1zID0gcmVzcG9uc2UuZ2V0RGF0YSgndGVhbXMnKS5hdHRyaWJ1dGVzO1xyXG5cclxuXHQgICAgXHRcdCAgdGhpcy50ZWFtcyA9IFtdO1xyXG5cdCAgICBcdFx0ICBmb3IobGV0IHRlYW0gb2YgdGVhbXMpIHtcclxuXHQgICAgXHRcdCAgXHR0aGlzLnRlYW1zLnB1c2gobmV3IFRlYW0odGVhbSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b2dnbGUodGVhbSkge1xyXG5cdCAgICBcdFx0aWYodGhpcy5vcGVuW3RlYW0uaWRdID09PSB0cnVlKSB7XHJcblx0ICAgIFx0XHRcdHRoaXMuJHNldCh0aGlzLm9wZW4sIHRlYW0uaWQsIGZhbHNlKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcblx0XHQgICAgICAgIHRoaXMuJHNldCh0aGlzLm9wZW4sIHRlYW0uaWQsIHRydWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblx0ICAgIFx0YWRkKCkge1xyXG5cdCAgICBcdFx0bGV0IHRlYW0gPSBuZXcgVGVhbSgpO1xyXG4gICAgICAgICAgY29uc3QgdGVhbWluZ0lkID0gdGhpcy5pZDtcclxuXHJcbiAgICAgICAgICBuZXcgVnVlRGlhbG9nKHRoaXMuJHNpdGUsIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdOZXcgVGVhbScsXHJcbiAgICAgICAgICAgIHZ1ZTogVGVhbUVkaXRvclZ1ZSxcclxuICAgICAgICAgICAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHRlYW06IHRlYW0sXHJcbiAgICAgICAgICAgICAgICB0ZWFtaW5naWQ6IHRlYW1pbmdJZCxcclxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbjogJ25ldydcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJ1dHRvbnM6IGZhbHNlLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IHRoaXNcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcblx0ICAgICAgZWRpdGVyKHRlYW0pIHtcclxuXHRcdCAgICAgIHRlYW0gPSB0ZWFtLmNsb25lKCk7XHJcblx0XHQgICAgICBjb25zdCB0ZWFtaW5nSWQgPSB0aGlzLmlkO1xyXG5cclxuXHQgICAgICAgIG5ldyBWdWVEaWFsb2codGhpcy4kc2l0ZSwge1xyXG5cdFx0ICAgICAgICB0aXRsZTogJ0VkaXQgVGVhbScsXHJcblx0XHQgICAgICAgIHZ1ZTogVGVhbUVkaXRvclZ1ZSxcclxuXHRcdCAgICAgICAgZGF0YTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdCAgICAgICAgcmV0dXJuIHtcclxuXHRcdFx0XHQgICAgICAgIHRlYW06IHRlYW0sXHJcbiAgICAgICAgICAgICAgICB0ZWFtaW5naWQ6IHRlYW1pbmdJZCxcclxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbjogJ3VwZGF0ZSdcclxuXHRcdFx0ICAgICAgICB9XHJcblx0XHQgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJ1dHRvbnM6IGZhbHNlLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IHRoaXNcclxuXHRcdCAgICAgIH0pO1xyXG5cdCAgICAgIH0sXHJcbiAgICAgICAgZGVsZXRlcih0ZWFtKSB7XHJcblx0XHQgICAgICBuZXcgRGlhbG9nLk1lc3NhZ2VCb3goJ0FyZSB5b3Ugc3VyZT8nLCAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSAnICsgdGVhbS5uYW1lLFxyXG5cdFx0XHQgICAgICBEaWFsb2cuTWVzc2FnZUJveC5PS0NBTkNFTCwgKCkgPT4ge1xyXG5cdFx0XHRcdCAgICAgIHRoaXMuJHNpdGUuYXBpLnBvc3QoJy9hcGkvdGVhbS90ZWFtcy8nICsgdGhpcy5pZCArICcvZGVsZXRlJywge2lkOiB0ZWFtLmlkfSlcclxuXHRcdFx0XHRcdCAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHQgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuXHRcdFx0XHRcdFx0XHQgICAgICB0aGlzLnRha2UocmVzcG9uc2UpO1xyXG5cdFx0XHRcdFx0XHQgICAgICB9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdCAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG5cdFx0XHRcdFx0XHQgICAgICB9XHJcblxyXG5cdFx0XHRcdFx0ICAgICAgfSlcclxuXHRcdFx0XHRcdCAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRcdFx0ICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcblx0XHRcdFx0XHQgICAgICB9KTtcclxuXHRcdFx0ICAgICAgfSk7XHJcblx0ICAgICAgfSxcclxuICAgICAgICBtb3ZlKG1lbWJlciwgdGVhbSkge1xyXG5cdCAgICBcdFx0bGV0IHBhcmFtcyA9IHtcclxuXHQgICAgXHRcdFx0bWVtYmVyOiBtZW1iZXIubWVtYmVyaWQsXHJcbiAgICAgICAgICAgIHRlYW06IHRlYW0gIT09IG51bGw/IHRlYW0uaWQgOiAwXHJcbiAgICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgdGhpcy4kc2l0ZS5hcGkucG9zdCgnL2FwaS90ZWFtL3RlYW1zLycgKyB0aGlzLmlkICsgJy9tb3ZlJywgcGFyYW1zKVxyXG5cdFx0ICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0ICAgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuXHRcdFx0XHQgICAgICAgIHRoaXMudGFrZShyZXNwb25zZSk7XHJcblx0XHRcdCAgICAgICAgfSBlbHNlIHtcclxuXHRcdFx0XHQgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG5cdFx0XHQgICAgICAgIH1cclxuXHJcblx0XHQgICAgICAgIH0pXHJcblx0XHQgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHRcdFx0ICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuXHRcdCAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkaXN0cmlidXRlKCkge1xyXG5cdCAgICAgICAgY29uc3QgdGVhbWluZ0lkID0gdGhpcy5pZDtcclxuXHJcblx0ICAgICAgICBuZXcgVnVlRGlhbG9nKHRoaXMuJHNpdGUsIHtcclxuXHRcdCAgICAgICAgdGl0bGU6ICdUZWFtIERpc3RyaWJ1dGVyJyxcclxuXHRcdCAgICAgICAgdnVlOiBUZWFtRGlzdHJpYnV0ZXJWdWUsXHJcblx0XHQgICAgICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQgICAgICAgIHJldHVybiB7XHJcblx0XHRcdFx0ICAgICAgICB0ZWFtaW5naWQ6IHRlYW1pbmdJZFxyXG5cdFx0XHQgICAgICAgIH1cclxuXHRcdCAgICAgICAgfSxcclxuXHRcdCAgICAgICAgYnV0dG9uczogZmFsc2UsXHJcblx0XHQgICAgICAgIHBhcmVudDogdGhpc1xyXG5cdCAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb2FkTmFtZXMoKSB7XHJcblx0ICAgICAgICBjb25zdCB0ZWFtaW5nSWQgPSB0aGlzLmlkO1xyXG5cclxuXHQgICAgICAgIG5ldyBWdWVEaWFsb2codGhpcy4kc2l0ZSwge1xyXG5cdFx0ICAgICAgICB0aXRsZTogJ1RlYW0gTmFtZSBMb2FkZXInLFxyXG5cdFx0ICAgICAgICB2dWU6IFRlYW1OYW1lTG9hZGVyVnVlLFxyXG4gICAgICAgICAgICBhZGRDbGFzczogJ2NsLXRlYW1zLWVkaXRvci1kbGcnLFxyXG5cdFx0ICAgICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0ICAgICAgICByZXR1cm4ge1xyXG5cdFx0XHRcdCAgICAgICAgdGVhbWluZ2lkOiB0ZWFtaW5nSWRcclxuXHRcdFx0ICAgICAgICB9XHJcblx0XHQgICAgICAgIH0sXHJcblx0XHQgICAgICAgIGJ1dHRvbnM6IGZhbHNlLFxyXG5cdFx0ICAgICAgICBwYXJlbnQ6IHRoaXNcclxuXHQgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXhwYW5kQWxsKCkge1xyXG5cdCAgICBcdFx0Zm9yKGxldCB0ZWFtIG9mIHRoaXMudGVhbXMpIHtcclxuXHQgICAgXHRcdFx0dGhpcy4kc2V0KHRoaXMub3BlbiwgdGVhbS5pZCwgdHJ1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0ZWFtSGVhZGluZyh0ZWFtKSB7XHJcblx0ICAgIFx0XHRpZih0ZWFtLm5hbWUgPT09IG51bGwpIHtcclxuXHQgICAgXHRcdFx0cmV0dXJuICdVbmFzc2lnbmVkJztcclxuICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICBsZXQgaHRtbCA9IHRlYW0ubmFtZTtcclxuXHJcblx0ICAgIFx0XHRsZXQgZW1haWwgPSAnJztcclxuXHQgICAgXHRcdGZvcihsZXQgbWVtYmVyIG9mIHRlYW0ubWVtYmVycykge1xyXG5cdCAgICBcdFx0XHRpZihlbWFpbCAhPT0gJycpIHtcclxuXHQgICAgXHRcdFx0XHRlbWFpbCArPSAnOyc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGVtYWlsICs9IG1lbWJlci5lbWFpbDtcclxuICAgICAgICAgIH1cclxuXHJcblx0ICAgIFx0XHRyZXR1cm4gYCR7dGVhbS5uYW1lfSA8YSBjbGFzcz1cImNsLWVtYWlsXCIgaHJlZj1cIm1haWx0bzoke2VtYWlsfVwiPmVtYWlsPC9hPmA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG4gIGRpdi5jbC10ZWFtcy1lZGl0b3Ige1xyXG5cclxuICAgIHRoOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgIG1pbi13aWR0aDogMzBlbTtcclxuICAgIH1cclxuXHJcbiAgICB0ZDpudGgtY2hpbGQoMikge1xyXG4gICAgICBtaW4td2lkdGg6IDVlbTtcclxuICAgIH1cclxuXHJcbiAgICB0ZDpudGgtY2hpbGQoMykge1xyXG4gICAgICBtaW4td2lkdGg6IDEwZW07XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGEuY2wtZW1haWwge1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NWVtO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcclxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIGRpdi5jbC10ZWFtcy1lZGl0b3ItZGxnIHtcclxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gIH1cclxuXHJcbjwvc3R5bGU+IiwiPCEtLVxyXG5AZmlsZVxyXG5CYXNlIGNvbXBvbmVudCBmb3IgcGFnZXMgdGhhdCBpbmNsdWRlcyBzdXBwb3J0IGZvciB0aGlzLnVzZXJcclxuXHJcblByb3ZpZGVzOlxyXG5zZXRUaXRsZVxyXG50aGlzLnJvb3RcclxuLS0+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IFBhZ2VWdWVCYXNlIGZyb20gJ3NpdGUtY2wvanMvVnVlL1BhZ2VWdWVCYXNlLnZ1ZSc7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgICdleHRlbmRzJzogUGFnZVZ1ZUJhc2UsXHJcbiAgICAgICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICBcdHVzZXIoKSB7XHJcbiAgICAgICAgXHRcdHJldHVybiAgdGhpcy4kc3RvcmUuc3RhdGUudXNlci51c2VyXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImRpdi5jbC10ZWFtaW5nLWVkaXRvciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbmRpdi5jbC10ZWFtaW5nLWVkaXRvciA+IGRpdiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAxLjVlbSAwIDIuMGVtIDA7XFxufVxcblxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LmNsLXRlYW1zLWVkaXRvciB0aDpudGgtY2hpbGQoMikge1xcbiAgbWluLXdpZHRoOiAzMGVtO1xcbn1cXG5kaXYuY2wtdGVhbXMtZWRpdG9yIHRkOm50aC1jaGlsZCgyKSB7XFxuICBtaW4td2lkdGg6IDVlbTtcXG59XFxuZGl2LmNsLXRlYW1zLWVkaXRvciB0ZDpudGgtY2hpbGQoMykge1xcbiAgbWluLXdpZHRoOiAxMGVtO1xcbn1cXG5kaXYuY2wtdGVhbXMtZWRpdG9yIGEuY2wtZW1haWwge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMC44NWVtO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZy1yaWdodDogMWVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5kaXYuY2wtdGVhbXMtZWRpdG9yLWRsZyB7XFxuICBtaW4taGVpZ2h0OiA0MDBweDtcXG59XFxuXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHJlZjogXCJtZW51XCIsIGNsYXNzOiBfdm0udXNlQ2xhc3MgfSwgW192bS5fdChcImRlZmF1bHRcIildLCAyKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbC1jZW50ZXItaW5cIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImZvcm1cIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2wtaW5saW5lLXBhZGRlZFwiLFxuICAgICAgICBvbjoge1xuICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgX3ZtLnN1Ym1pdCgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgIF9jKFwibGFiZWxcIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiVGVhbSBTaXplXCIpLFxuICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNpemUsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNpemVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgcmVmOiBcInNpemVcIixcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjhlbVwiIH0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uc2l6ZSB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF92bS5zaXplID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsLWRpYWxvZy1ib3R0b21cIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICBfdm0uc3VibWl0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3YoXCJEaXN0cmlidXRlXCIpXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICBfdm0uY2xvc2UoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdihcIkNhbmNlbFwiKV1cbiAgICAgIClcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbC1jZW50ZXItaW5cIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImZvcm1cIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2wtaW5saW5lLXBhZGRlZFwiLFxuICAgICAgICBvbjoge1xuICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgX3ZtLnN1Ym1pdCgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgIF9jKFwibGFiZWxcIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiTmFtZVwiKSxcbiAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS50ZWFtLm5hbWUsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInRlYW0ubmFtZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICByZWY6IFwibmFtZVwiLFxuICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnRlYW0ubmFtZSB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS50ZWFtLCBcIm5hbWVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF1cbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbC1kaWFsb2ctYm90dG9tXCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgX3ZtLnN1Ym1pdCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0ub3BlcmF0aW9uID09PSBcIm5ld1wiID8gXCJBZGRcIiA6IFwiVXBkYXRlXCIpKV1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgX3ZtLmNsb3NlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3YoXCJDYW5jZWxcIildXG4gICAgICApXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2wtY2VudGVyLWluXCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJmb3JtXCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImNsLWlubGluZS1wYWRkZWRcIixcbiAgICAgICAgb246IHtcbiAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIF92bS5zdWJtaXQoKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICBfYyhcImxhYmVsXCIsIFtcbiAgICAgICAgICAgIF92bS5fdihcIlRlYW0gTmFtZXNcIiksXG4gICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm5hbWVzLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJuYW1lc1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICByZWY6IFwibmFtZXNcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgcm93czogXCIxNVwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ubmFtZXMgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBfdm0ubmFtZXMgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2wtZGlhbG9nLWJvdHRvbVwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIF92bS5zdWJtaXQoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdihcIlNldCBOYW1lc1wiKV1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgX3ZtLmNsb3NlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3YoXCJDYW5jZWxcIildXG4gICAgICApXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2wtdGVhbWluZy1lZGl0b3JcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgW1xuICAgICAgX2MoXCJmb3JtXCIsIFtcbiAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICBfYyhcImxhYmVsXCIsIFtcbiAgICAgICAgICAgIF92bS5fdihcIlRhZ1wiKSxcbiAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS50ZWFtaW5nLnRhZyxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidGVhbWluZy50YWdcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgcmVmOiBcInRhZ1wiLFxuICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnRlYW1pbmcudGFnIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnRlYW1pbmcsIFwidGFnXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgIF9jKFwibGFiZWxcIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiTmFtZVwiKSxcbiAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS50ZWFtaW5nLm5hbWUsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInRlYW1pbmcubmFtZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnRlYW1pbmcubmFtZSB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS50ZWFtaW5nLCBcIm5hbWVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlclwiIH0sIFtcbiAgICAgICAgICBfYyhcImxhYmVsXCIsIFtcbiAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnRlYW1pbmcucHVibGljLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ0ZWFtaW5nLnB1YmxpY1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImNoZWNrYm94XCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBBcnJheS5pc0FycmF5KF92bS50ZWFtaW5nLnB1YmxpYylcbiAgICAgICAgICAgICAgICAgID8gX3ZtLl9pKF92bS50ZWFtaW5nLnB1YmxpYywgbnVsbCkgPiAtMVxuICAgICAgICAgICAgICAgICAgOiBfdm0udGVhbWluZy5wdWJsaWNcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgdmFyICQkYSA9IF92bS50ZWFtaW5nLnB1YmxpYyxcbiAgICAgICAgICAgICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgICAgICQkYyA9ICQkZWwuY2hlY2tlZCA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoJCRhKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgJCR2ID0gbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAkJGkgPSBfdm0uX2koJCRhLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgIGlmICgkJGVsLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAkJGkgPCAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0udGVhbWluZywgXCJwdWJsaWNcIiwgJCRhLmNvbmNhdChbJCR2XSkpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgJCRpID4gLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udGVhbWluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwdWJsaWNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJCRhLnNsaWNlKDAsICQkaSkuY29uY2F0KCQkYS5zbGljZSgkJGkgKyAxKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnRlYW1pbmcsIFwicHVibGljXCIsICQkYylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFB1YmxpY1wiKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LCBbXG4gICAgX3ZtLnRlYW1pbmdzICE9PSBudWxsXG4gICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZnVsbFwiIH0sIFtcbiAgICAgICAgICBfdm0udGVhbWluZ3MubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcInRhYmxlXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0udGVhbWluZ3MsIGZ1bmN0aW9uKHRlYW1pbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgeyBrZXk6IHRlYW1pbmcuaWQgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVkaXRlcih0ZWFtaW5nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdCArIFwiL3ZlbmRvci9jbC9zaXRlL2ltZy9wZW5jaWwxNi5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIkVkaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRWRpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGVsZXRlcih0ZWFtaW5nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLnJvb3QgKyBcIi92ZW5kb3IvY2wvc2l0ZS9pbWcveC5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIkRlbGV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJEZWxldGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IF92bS5yb290ICsgXCIvY2wvY29uc29sZS90ZWFtL1wiICsgdGVhbWluZy5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3ModGVhbWluZy50YWcpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh0ZWFtaW5nLm5hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHRlYW1pbmcucHVibGljID8gXCJQdWJsaWNcIiA6IFwiUHJpdmF0ZVwiKSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIlRoZXJlIGFyZSBjdXJyZW50bHkgbm8gZGVmaW5lZCB0ZWFtaW5ncy5cIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwiQ2hvb3NlIEFkZCBUZWFtaW5nIHRvIGFkZCBhIG5ldyB0ZWFtaW5nLlwiKV0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICA6IF92bS5fZSgpXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRyXCIsIFtcbiAgICAgIF9jKFwidGhcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiVGFnXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiTmFtZVwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlZpc2liaWxpdHlcIildKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LCBbXG4gICAgX3ZtLnRlYW1zICE9PSBudWxsXG4gICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZnVsbCBjbC10ZWFtcy1lZGl0b3JcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInRhYmxlXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNtYWxsXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS50ZWFtcywgZnVuY3Rpb24odGVhbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICBfYyhcInRyXCIsIHsga2V5OiB0ZWFtLmlkLCBzdGF0aWNDbGFzczogXCJjbC1pbnRlcm5hbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicmlnaHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlYW0ubmFtZSAhPT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZWRpdGVyKHRlYW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yb290ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi92ZW5kb3IvY2wvc2l0ZS9pbWcvcGVuY2lsMTYucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJFZGl0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkVkaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlbGV0ZXIodGVhbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJvb3QgKyBcIi92ZW5kb3IvY2wvc2l0ZS9pbWcveC5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIkRlbGV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJEZWxldGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlYW0ubmFtZSA9PT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbC1tZW51XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IFwiYWRkLWNsYXNzXCI6IFwiY2wtaW5saW5lXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImFcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvdmVuZG9yL2NsL3NpdGUvaW1nL21lbnViYXJzLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidWxcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpc3RyaWJ1dGUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkRpc3RyaWJ1dGVcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRvZ2dsZSh0ZWFtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNpdGUucm9vdCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvdmVuZG9yL2NsL3NpdGUvaW1nL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoX3ZtLm9wZW5bdGVhbS5pZF0gPT09IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJtaW51cy5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInBsdXMucG5nXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xzcGFuOiBcIjJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS50ZWFtSGVhZGluZyh0ZWFtKSkgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHRlYW0ubWVtYmVycy5sZW5ndGgpKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLm9wZW5bdGVhbS5pZF0gPT09IHRydWVcbiAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZWFtLm1lbWJlcnMubGVuZ3RoID09PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sc3BhbjogXCI0XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiKioqIGVtcHR5ICoqKlwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbCh0ZWFtLm1lbWJlcnMsIGZ1bmN0aW9uKG1lbWJlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInJpZ2h0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJjbC1tZW51XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImFcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yb290ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL3ZlbmRvci9jbC9zaXRlL2ltZy9tZW51YmFycy5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnRlYW1zLCBmdW5jdGlvbih0ZWFtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm1vdmUobWVtYmVyLCB0ZWFtMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtMS5uYW1lICE9PSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGVhbTEubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiVW5hc3NpZ25lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtID09PSB0ZWFtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yb290ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL3ZlbmRvci9jbC9zaXRlL2ltZy9jaGVjazE2LnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGhyZWY6IFwibWFpbHRvOlwiICsgbWVtYmVyLmVtYWlsIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MobWVtYmVyLnVzZXIpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MobWVtYmVyLm5hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImVtXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS50b3RhbHMpKV0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIDogX3ZtLl9lKClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGVhbWluZ0VkaXRvci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjM5ODhlMzIwXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UZWFtaW5nRWRpdG9yLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGVhbWluZ0VkaXRvci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGVhbXNFZGl0b3IudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIwNGIxNDdkMlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGVhbXNFZGl0b3IudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UZWFtc0VkaXRvci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJ2YXIgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ29uc29sZUNvbXBvbmVudEJhc2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Db25zb2xlQ29tcG9uZW50QmFzZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXERvY3VtZW50c1xcXFxDbGFzc2VzXFxcXENTRTMyMFxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzY5ZTM1NWE4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzY5ZTM1NWE4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIFxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9jb25zb2xlL2pzL0NvbnNvbGVDb21wb25lbnRCYXNlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbnNvbGVDb21wb25lbnRCYXNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29uc29sZUNvbXBvbmVudEJhc2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiLyoqXHJcbiAqIEBmaWxlIE1lbWJlciBvZiBhIGNvdXJzZVxyXG4gKiBBdHRhY2hlcyB0byBhIHVzZXIgT2JqZWN0XHJcbiAqL1xyXG5cclxuaW1wb3J0IHtNZW1iZXJzaGlwfSBmcm9tICcuLi8uLi8uLi91c2Vycy9qcy9Vc2Vycy9NZW1iZXJzaGlwLmpzJztcclxuXHJcbmxldCBNZW1iZXIgPSBmdW5jdGlvbihqc29uKSB7XHJcbiAgICBNZW1iZXJzaGlwLmNhbGwodGhpcyk7XHJcblxyXG4gICAgbGV0IHJvbGUgPSAnRyc7XHJcblxyXG4gICAgaWYoanNvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGpzb24uaWQ7XHJcbiAgICAgICAgdGhpcy5zZW1lc3RlciA9IGpzb24uc2VtZXN0ZXI7XHJcbiAgICAgICAgdGhpcy5zZWN0aW9uID0ganNvbi5zZWN0aW9uO1xyXG4gICAgICAgIHJvbGUgPSBqc29uLnJvbGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaWQgPSAwOyAgICAvLyBTeXN0ZW0gbWVtYmVyc2hpcCBJRFxyXG4gICAgICAgIHRoaXMuc2VtZXN0ZXIgPSBudWxsOyAgIC8vIFNlbWVzdGVyIGNvZGVcclxuICAgICAgICB0aGlzLnNlY3Rpb24gPSBudWxsOyAgLy8gU2VjdGlvbiBJZFxyXG4gICAgICAgIHJvbGUgPSBudWxsOyAgICAgICAvLyBNZW1iZXJzaGlwIHJvbGVcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJvbGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gcm9sZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldFJvbGUgPSBmdW5jdGlvbihyb2xlXykge1xyXG4gICAgICAgIHJvbGUgPSByb2xlXztcclxuICAgIH1cclxufVxyXG5cclxuTWVtYmVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTWVtYmVyc2hpcC5wcm90b3R5cGUpO1xyXG5NZW1iZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTWVtYmVyO1xyXG5cclxuLyoqXHJcbiAqIEdldCB0aGUgY291cnNlIHNlY3Rpb24gZm9yIGEgbWVtYmVyXHJcbiAqIEBwYXJhbSBzdG9yZSBWdWV4IHN0b3JlXHJcbiAqIEByZXR1cm5zIHsqfVxyXG4gKi9cclxuTWVtYmVyLnByb3RvdHlwZS5nZXRTZWN0aW9uID0gZnVuY3Rpb24oc3RvcmUpIHtcclxuICAgIHJldHVybiBzdG9yZS5nZXR0ZXJzWydjb3Vyc2Uvc2VjdGlvbiddKHRoaXMuc2VtZXN0ZXIsIHRoaXMuc2VjdGlvbik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgYW4gYXNzaWdubWVudCBmb3IgYSBtZW1iZXJcclxuICogQHBhcmFtIHN0b3JlIFZ1ZXggc3RvcmVcclxuICogQHBhcmFtIGFzc2lnbnRhZyBBc3NpZ25tZW50IHRhZ1xyXG4gKi9cclxuTWVtYmVyLnByb3RvdHlwZS5nZXRBc3NpZ25tZW50ID0gZnVuY3Rpb24oc3RvcmUsIGFzc2lnbnRhZykge1xyXG4gICAgY29uc3Qgc2VjdGlvbiA9IHRoaXMuZ2V0U2VjdGlvbihzdG9yZSk7XHJcbiAgICByZXR1cm4gc2VjdGlvbi5nZXRBc3NpZ25tZW50KGFzc2lnbnRhZyk7XHJcbn1cclxuXHJcblxyXG4vLyBUaGUgcG9zc2libGUgbWVtYmVyIHJvbGVzXHJcbi8vIE11c3QgbWF0Y2ggdmFsdWVzIGluIE1lbWJlci5waHBcclxuTWVtYmVyLkdVRVNUID0gJ0cnOyAgICAgLy8vPCBHdWVzdCB1c2VyIHZpc2l0aW5nIHRoZSBzaXRlXHJcbk1lbWJlci5VU0VSID0gJ1UnOyAgICAgIC8vLzwgU3RhbmRhcmQgdXNlciBmcm9tIFVzZXIsIGRvbid0IHVzZSBmb3IgTWVtYmVyXHJcbk1lbWJlci5EUk9QUEVEID0gJ0QnOyAgIC8vLzwgVXNlciBoYXMgZHJvcHBlZCB0aGUgY291cnNlXHJcbk1lbWJlci5TVFVERU5UID0gJ1QnOyAgIC8vLzwgRW5yb2xsZWQgc3R1ZGVudCBpbiBjb3Vyc2VcclxuTWVtYmVyLlNUQUZGID0gJ1MnOyAgICAgLy8vPCBBbnkgY291cnNlIHN0YWZmXHJcbk1lbWJlci5HUkFERVIgPSAnUic7ICAgIC8vLzwgR3JhZGVyc1xyXG5NZW1iZXIuVEEgPSAnRSc7ICAgICAgICAvLy88IFRlYWNoaW5nIGFzc2lzdGFudFxyXG5NZW1iZXIuSU5TVFJVQ1RPUiA9ICdJJzsgICAgLy8vPCBDb3Vyc2UgaW5zdHJ1Y3RvclxyXG5NZW1iZXIuQURNSU4gPSAnQSc7ICAgICAvLy88IEFkbWluXHJcblxyXG5NZW1iZXIucHJvdG90eXBlLmdldFJvbGVzID0gZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgcm9sZXMgPSB7fTtcclxuICAgIHJvbGVzW01lbWJlci5HVUVTVF0gPSB7bmFtZTogJ0d1ZXN0JywgcHJpb3JpdHk6IDF9O1xyXG4gICAgcm9sZXNbTWVtYmVyLkRST1BQRURdID0ge25hbWU6ICdEcm9wcGVkJywgcHJpb3JpdHk6IDJ9O1xyXG4gICAgcm9sZXNbTWVtYmVyLlVTRVJdID0ge25hbWU6ICdVc2VyJywgcHJpb3JpdHk6IDMsIHNraXA6IHRydWV9O1xyXG4gICAgcm9sZXNbTWVtYmVyLlNUVURFTlRdID0ge25hbWU6ICdTdHVkZW50JywgcHJpb3JpdHk6IDR9O1xyXG4gICAgcm9sZXNbTWVtYmVyLlNUQUZGXSA9IHtuYW1lOiAnU3RhZmYnLCBwcmlvcml0eTogNSwgc2tpcDogdHJ1ZX07XHJcbiAgICByb2xlc1tNZW1iZXIuR1JBREVSXSA9IHtuYW1lOiAnR3JhZGVyJywgcHJpb3JpdHk6IDZ9O1xyXG4gICAgcm9sZXNbTWVtYmVyLlRBXSA9IHtuYW1lOiAnVGVhY2hpbmcgQXNzaXN0YW50JywgcHJpb3JpdHk6IDd9O1xyXG4gICAgcm9sZXNbTWVtYmVyLklOU1RSVUNUT1JdID0ge25hbWU6ICdJbnN0cnVjdG9yJywgcHJpb3JpdHk6IDh9O1xyXG4gICAgcm9sZXNbTWVtYmVyLkFETUlOXSA9IHtuYW1lOiAnQWRtaW4nLCBwcmlvcml0eTogMTAwfTtcclxuXHJcbiAgICByZXR1cm4gcm9sZXM7XHJcbn1cclxuXHJcblxyXG5leHBvcnQge01lbWJlcn07XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTWVudS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDRiMDUxMDImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL01lbnUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxjaGFybFxcXFxEb2N1bWVudHNcXFxcQ2xhc3Nlc1xcXFxDU0UzMjBcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdkNGIwNTEwMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdkNGIwNTEwMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTWVudS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDRiMDUxMDImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZDRiMDUxMDInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9zaXRlL2pzL1VJL01lbnUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01lbnUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01lbnUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQ0YjA1MTAyJlwiIiwidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1BhZ2VWdWVCYXNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUGFnZVZ1ZUJhc2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxjaGFybFxcXFxEb2N1bWVudHNcXFxcQ2xhc3Nlc1xcXFxDU0UzMjBcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxMmJiYWVmOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxMmJiYWVmOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvc2l0ZS9qcy9WdWUvUGFnZVZ1ZUJhc2UudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGFnZVZ1ZUJhc2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYWdlVnVlQmFzZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgRGlhbG9nIGZyb20gJ2RpYWxvZy1jbCc7XHJcblxyXG4vKipcclxuICogRGlhbG9nIGJveCB0aGF0IGNvbnRhaW5zIGEgVnVlIGNvbXBvbmVudFxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBWdWVEaWFsb2cgPSBmdW5jdGlvbihzaXRlLCBjb25maWcpIHtcclxuXHRsZXQgdnVlID0gbnVsbDtcclxuXHRsZXQgZGF0YSA9IG51bGw7XHJcblx0bGV0IHBhcmVudCA9IG51bGw7XHJcblxyXG5cdGxldCBjb25maWdEID0ge307XHJcblx0Zm9yKGxldCBrZXkgaW4gY29uZmlnKSB7XHJcblx0XHRzd2l0Y2goa2V5KSB7XHJcblx0XHRcdGNhc2UgJ3Z1ZSc6XHJcblx0XHRcdFx0dnVlID0gY29uZmlnLnZ1ZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgJ2RhdGEnOlxyXG5cdFx0XHRcdGRhdGEgPSBjb25maWcuZGF0YTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgJ3BhcmVudCc6XHJcblx0XHRcdFx0cGFyZW50ID0gY29uZmlnLnBhcmVudDtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0Ly8gTW92ZSB0aGVzZSBvdmVyIGZvciB0aGUgZGlhbG9nIGJveFxyXG5cdFx0XHRcdGNvbmZpZ0Rba2V5XSA9IGNvbmZpZ1trZXldO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0VnVlRGlhbG9nLmlkKys7XHJcblx0bGV0IGlkID0gJ2NsLWRpYWxvZy0nICsgVnVlRGlhbG9nLmlkO1xyXG5cdGNvbmZpZ0QuY29udGVudCA9IGA8ZGl2IGlkPVwiJHtpZH1cIj48L2Rpdj5gO1xyXG5cclxuXHRsZXQgZGlhbG9nID0gbmV3IERpYWxvZyhjb25maWdEKTtcclxuXHJcblx0bGV0IHRlbXBsYXRlID0gJzx2dWUnO1xyXG5cdGZvcihsZXQga2V5IGluIGRhdGEoKSkge1xyXG5cdFx0dGVtcGxhdGUgKz0gYCA6JHtrZXl9PVwiJHtrZXl9XCJgO1xyXG5cdH1cclxuXHJcblx0aWYocGFyZW50ICE9PSBudWxsKSB7XHJcblx0XHR0ZW1wbGF0ZSArPSBgIDpwYXJlbnQ9XCJwYXJlbnRcImA7XHJcblx0fVxyXG5cclxuXHR0ZW1wbGF0ZSArPSAnPjwvdnVlPic7XHJcblxyXG5cdC8vIENyZWF0ZSBhIFZ1ZSBpbnNpZGUgdGhlIGRpYWxvZyBib3hcclxuXHRuZXcgc2l0ZS5WdWUoe1xyXG5cdFx0ZWw6ICcjJyArIGlkLFxyXG5cdFx0c2l0ZSxcclxuXHRcdGRpYWxvZyxcclxuXHRcdGRhdGE6IGZ1bmN0aW9uKCkge1xyXG5cdFx0ICAgbGV0IGQgPSBkYXRhKCk7XHJcblx0XHQgICBpZihwYXJlbnQgIT09IG51bGwpIHtcclxuXHRcdFx0ICAgZC5wYXJlbnQgPSBwYXJlbnQ7XHJcblx0XHQgICB9XHJcblx0XHQgICByZXR1cm4gZDtcclxuXHRcdH0sXHJcblx0XHR0ZW1wbGF0ZTogdGVtcGxhdGUsXHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdHZ1ZTogdnVlXHJcblx0XHR9XHJcblx0fSlcclxufVxyXG5cclxuVnVlRGlhbG9nLmlkID0gMDtcclxuIiwidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1Z1ZURpYWxvZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Z1ZURpYWxvZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXERvY3VtZW50c1xcXFxDbGFzc2VzXFxcXENTRTMyMFxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzI1MDIwNTBhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzI1MDIwNTBhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIFxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9zaXRlL2pzL1Z1ZS9WdWVEaWFsb2cudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVnVlRGlhbG9nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVnVlRGlhbG9nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBUaGUgbWFpbiBUZWFtIGVudHJ5IHBvaW50XHJcbiAqL1xyXG5cclxuaW1wb3J0IHtUZWFtRmFjdG9yeX0gZnJvbSBcIi4vanMvVGVhbUZhY3RvcnlcIjtcclxuaW1wb3J0IHtUZWFtQ29uc29sZX0gZnJvbSAnLi9qcy9Db25zb2xlL1RlYW1Db25zb2xlJztcclxuXHJcbi8vXHJcbi8vIENyZWF0ZSB0aGUgdGVhbSBydW50aW1lIGNvbXBvbmVudFxyXG4vL1xyXG5UZWFtRmFjdG9yeS5jcmVhdGUoU2l0ZS5TaXRlKTtcclxuXHJcbi8vXHJcbi8vIEluc3RhbGwgdGhlIGNvbnNvbGUgY29tcG9uZW50c1xyXG4vL1xyXG5cclxuaWYoU2l0ZS5TaXRlLmNvbnNvbGUgIT09IHVuZGVmaW5lZCkge1xyXG5cdFRlYW1Db25zb2xlLnNldHVwKFNpdGUuU2l0ZS5jb25zb2xlKTtcclxufVxyXG4iLCJpbXBvcnQge01lbWJlcn0gZnJvbSBcImNvdXJzZS1jbC9qcy9NZW1iZXJzL01lbWJlclwiO1xyXG5pbXBvcnQgVGVhbWluZ3NFZGl0b3JWdWUgZnJvbSAnLi9UZWFtaW5nc0VkaXRvci52dWUnO1xyXG5pbXBvcnQgVGVhbXNFZGl0b3JWdWUgZnJvbSAnLi9UZWFtc0VkaXRvci52dWUnO1xyXG5cclxuLyoqXHJcbiAqIEBmaWxlXHJcbiAqIFRlYW0gc3lzdGVtIGNvbnNvbGUgY29tcG9uZW50c1xyXG4gKi9cclxuXHJcbmV4cG9ydCBsZXQgVGVhbUNvbnNvbGUgPSBmdW5jdGlvbigpIHtcclxufVxyXG5cclxuVGVhbUNvbnNvbGUuc2V0dXAgPSBmdW5jdGlvbihDb25zb2xlKSB7XHJcbiAgICBDb25zb2xlLnRhYmxlcy5hZGQoe1xyXG4gICAgICAgIHRpdGxlOiAnVGVhbXMnLFxyXG4gICAgICAgIG9yZGVyOiAyMCxcclxuICAgICAgICBhcGk6ICcvYXBpL3RlYW0vdGFibGVzJ1xyXG4gICAgfSk7XHJcblxyXG5cdGNvbnN0IHBhZ2UgPSB7dGl0bGU6ICdNYWluJywgcm91dGU6ICcnLCBvcmRlcjogMX07XHJcblxyXG5cdENvbnNvbGUuY29tcG9uZW50cy5hZGRPcHRpb24oe1xyXG5cdFx0YXRMZWFzdDogTWVtYmVyLlRBLFxyXG5cdFx0cGFnZTogcGFnZSxcclxuXHRcdHNlY3Rpb246IHt0aXRsZTogJ0NvdXJzZScsIG9yZGVyOiA1fSxcclxuXHRcdHRpdGxlOiAnVGVhbXMnLFxyXG5cdFx0b3JkZXI6IDEwLFxyXG5cdFx0cm91dGU6ICcvdGVhbXMnLFxyXG5cdFx0cm91dGVzOiBbXHJcblx0XHRcdHtyb3V0ZTogJy90ZWFtcycsIGNvbXBvbmVudDogVGVhbWluZ3NFZGl0b3JWdWV9XHJcblx0XHRdXHJcblx0fSk7XHJcblxyXG5cdENvbnNvbGUuY29tcG9uZW50cy5hZGRSb3V0ZXMoW1xyXG5cdFx0e3JvdXRlOiAnL3RlYW0vOmlkJywgY29tcG9uZW50OiBUZWFtc0VkaXRvclZ1ZSwgcHJvcHM6IHRydWV9XHJcblx0XSk7XHJcblxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1RlYW1EaXN0cmlidXRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTE0ODJkYWImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVGVhbURpc3RyaWJ1dGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVGVhbURpc3RyaWJ1dGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTE0ODJkYWInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTE0ODJkYWInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1RlYW1EaXN0cmlidXRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTE0ODJkYWImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTE0ODJkYWInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC90ZWFtL2pzL0NvbnNvbGUvVGVhbURpc3RyaWJ1dGVyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RlYW1EaXN0cmlidXRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RlYW1EaXN0cmlidXRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGVhbURpc3RyaWJ1dGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MTQ4MmRhYiZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVGVhbUVkaXRvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmNlN2FiNjMmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVGVhbUVkaXRvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1RlYW1FZGl0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxjaGFybFxcXFxEb2N1bWVudHNcXFxcQ2xhc3Nlc1xcXFxDU0UzMjBcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyY2U3YWI2MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyY2U3YWI2MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVGVhbUVkaXRvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmNlN2FiNjMmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMmNlN2FiNjMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC90ZWFtL2pzL0NvbnNvbGUvVGVhbUVkaXRvci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UZWFtRWRpdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGVhbUVkaXRvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGVhbUVkaXRvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmNlN2FiNjMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1RlYW1OYW1lTG9hZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNzg0YmNmNCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9UZWFtTmFtZUxvYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1RlYW1OYW1lTG9hZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMTc4NGJjZjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMTc4NGJjZjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1RlYW1OYW1lTG9hZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNzg0YmNmNCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxNzg0YmNmNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL3RlYW0vanMvQ29uc29sZS9UZWFtTmFtZUxvYWRlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UZWFtTmFtZUxvYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RlYW1OYW1lTG9hZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UZWFtTmFtZUxvYWRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTc4NGJjZjQmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1RlYW1pbmdFZGl0b3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ2YzFjNmVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1RlYW1pbmdFZGl0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9UZWFtaW5nRWRpdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9UZWFtaW5nRWRpdG9yLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDZjMWM2ZWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDZjMWM2ZWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1RlYW1pbmdFZGl0b3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ2YzFjNmVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQ2YzFjNmVlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvdGVhbS9qcy9Db25zb2xlL1RlYW1pbmdFZGl0b3IudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGVhbWluZ0VkaXRvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RlYW1pbmdFZGl0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UZWFtaW5nRWRpdG9yLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UZWFtaW5nRWRpdG9yLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UZWFtaW5nRWRpdG9yLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NmMxYzZlZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVGVhbWluZ3NFZGl0b3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWUzMWEyMDE4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1RlYW1pbmdzRWRpdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVGVhbWluZ3NFZGl0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxjaGFybFxcXFxEb2N1bWVudHNcXFxcQ2xhc3Nlc1xcXFxDU0UzMjBcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdlMzFhMjAxOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdlMzFhMjAxOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVGVhbWluZ3NFZGl0b3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWUzMWEyMDE4JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2UzMWEyMDE4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvdGVhbS9qcy9Db25zb2xlL1RlYW1pbmdzRWRpdG9yLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RlYW1pbmdzRWRpdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGVhbWluZ3NFZGl0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RlYW1pbmdzRWRpdG9yLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lMzFhMjAxOCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVGVhbXNFZGl0b3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ3M2MzYzVhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1RlYW1zRWRpdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVGVhbXNFZGl0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1RlYW1zRWRpdG9yLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDczYzNjNWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDczYzNjNWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1RlYW1zRWRpdG9yLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NzNjM2M1YSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0NzNjM2M1YScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL3RlYW0vanMvQ29uc29sZS9UZWFtc0VkaXRvci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UZWFtc0VkaXRvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RlYW1zRWRpdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGVhbXNFZGl0b3IudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RlYW1zRWRpdG9yLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UZWFtc0VkaXRvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDczYzNjNWEmXCIiLCJcclxuZXhwb3J0IGNvbnN0IFRlYW0gPSBmdW5jdGlvbihkYXRhKSB7XHJcblx0aWYoZGF0YSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHR0aGlzLm5hbWUgPSBkYXRhLm5hbWU7XHJcblx0XHR0aGlzLmlkID0gZGF0YS5pZDtcclxuXHRcdHRoaXMubWVtYmVycyA9IGRhdGEubWVtYmVycztcclxuXHR9IGVsc2Uge1xyXG5cdFx0dGhpcy5uYW1lID0gJyc7XHJcblx0XHR0aGlzLmlkID0gMDtcclxuXHRcdHRoaXMubWVtYmVycyA9IFtdO1xyXG5cdH1cclxuXHJcblx0dGhpcy5jbG9uZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIG5ldyBUZWFtKHRoaXMpO1xyXG5cdH1cclxufSIsIi8qKlxyXG4gKiBAZmlsZVxyXG4gKlxyXG4gKi9cclxuXHJcbmltcG9ydCB7VGVhbX0gZnJvbSBcIi4vVGVhbVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRlYW1GYWN0b3J5ID0gZnVuY3Rpb24oKSB7XHJcbn1cclxuXHJcblRlYW1GYWN0b3J5LmNyZWF0ZSA9IGZ1bmN0aW9uKHNpdGUpIHtcclxuXHJcblx0Y29uc3QgcXVpeiA9IG5ldyBUZWFtKHNpdGUpO1xyXG5cclxuXHQvLyBzaXRlLnN0YXJ0KCAoKSA9PiB7XHJcblx0Ly8gXHRsZXQgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5jbC1xdWl6Jyk7XHJcblx0Ly8gXHRpZihlbGVtZW50ICE9PSBudWxsKSB7XHJcblx0Ly8gXHRcdHF1aXouc3RhcnQoZWxlbWVudCk7XHJcblx0Ly8gXHR9XHJcblx0Ly8gfSk7XHJcblxyXG59XHJcbiIsIi8qKlxyXG4gKiBPYmplY3QgdGhlIHJlcHJlc2VudHMgYSB0ZWFtaW5nXHJcbiAqIEBwYXJhbSBkYXRhXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFRlYW1pbmcgPSBmdW5jdGlvbihkYXRhKSB7XHJcblx0aWYoZGF0YSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHR0aGlzLmlkID0gZGF0YS5pZDtcclxuXHRcdHRoaXMudGFnID0gZGF0YS50YWc7XHJcblx0XHR0aGlzLm5hbWUgPSBkYXRhLm5hbWU7XHJcblx0XHR0aGlzLnB1YmxpYyA9IGRhdGEucHVibGljO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR0aGlzLmlkID0gMDtcclxuXHRcdHRoaXMudGFnID0gJyc7XHJcblx0XHR0aGlzLm5hbWUgPSAnJztcclxuXHRcdHRoaXMucHVibGljID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdHRoaXMuY2xvbmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiBuZXcgVGVhbWluZyh0aGlzKTtcclxuXHR9XHJcbn0iLCIvKipcclxuICogQGZpbGVcclxuICogQSBtZW1iZXJzaGlwIGFzc29jaWF0ZWQgd2l0aCBhIHVzZXIuXHJcbiAqXHJcbiAqIFRoaXMgaXMgYSBiYXNlIG9iamVjdCB0aGF0IHdpbGwgYmUgaW5oZXJpdGVkIGJ5XHJcbiAqIGFjdHVhbCBtZW1iZXJzaGlwIG9iamVjdHMuXHJcbiAqL1xyXG5cclxudmFyIE1lbWJlcnNoaXAgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAvLy8gVGhlIFVzZXIgb2JqZWN0IGZvciB0aGlzIG1lbWJlcnNoaXBcclxuICAgIHRoaXMudXNlciA9IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCB7TWVtYmVyc2hpcH07XHJcbiIsInZhciByZW5kZXIsIHN0YXRpY1JlbmRlckZuc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Vc2VyVnVlQmFzZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1VzZXJWdWVCYXNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYzdlNGU0OWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYzdlNGU0OWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL3VzZXJzL2pzL1Z1ZS9Vc2VyVnVlQmFzZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VyVnVlQmFzZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXJWdWVCYXNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=