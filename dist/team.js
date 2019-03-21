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
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdate_name_"];
/******/ 	window["webpackHotUpdate_name_"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		if (null) script.crossOrigin = null;
/******/ 		document.head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "d6fd53f26b118cd40755";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			for(var chunkId in installedChunks)
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted
/******/ 			)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"Team": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/cl/dist/";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./vendor/cl/team/index.js","common","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

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
/* harmony import */ var dialog_cl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dialog-cl */ "./packages/dialog-cl/src/app.modules.js");
/* harmony import */ var _Teaming__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Teaming */ "./vendor/cl/team/js/Teaming.js");
/* harmony import */ var _TeamingEditor_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TeamingEditor.vue */ "./vendor/cl/team/js/Console/TeamingEditor.vue");
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



var ConsoleComponentBase = Site.ConsoleComponentBase;
/* harmony default export */ __webpack_exports__["default"] = ({
  extends: ConsoleComponentBase,
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
          this.teamings.push(new _Teaming__WEBPACK_IMPORTED_MODULE_1__["Teaming"](row));
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

      var teaming = new _Teaming__WEBPACK_IMPORTED_MODULE_1__["Teaming"]();
      new dialog_cl__WEBPACK_IMPORTED_MODULE_0__["default"]({
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
              new dialog_cl__WEBPACK_IMPORTED_MODULE_0__["default"].MessageBox('Must enter name', 'You must provide a non-empty name', dialog_cl__WEBPACK_IMPORTED_MODULE_0__["default"].MessageBox.OK);
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
          editor: _TeamingEditor_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
        }
      });
    },
    editer: function editer(teaming) {
      var _this3 = this;

      teaming = teaming.clone();
      new dialog_cl__WEBPACK_IMPORTED_MODULE_0__["default"]({
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
              new dialog_cl__WEBPACK_IMPORTED_MODULE_0__["default"].MessageBox('Must enter name', 'You must provide a non-empty name', dialog_cl__WEBPACK_IMPORTED_MODULE_0__["default"].MessageBox.OK);
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
          editor: _TeamingEditor_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
        }
      });
    },
    deleter: function deleter(teaming) {
      var _this4 = this;

      new dialog_cl__WEBPACK_IMPORTED_MODULE_0__["default"].MessageBox('Are you sure?', 'Are you sure you want to delete ' + teaming.name, dialog_cl__WEBPACK_IMPORTED_MODULE_0__["default"].MessageBox.OKCANCEL, function () {
        _this4.$site.api.post('/api/team/teamings/delete', {
          id: teaming.id
        }).then(function (response) {
          if (!response.hasError()) {
            _this4.take(response);
          } else {
            _this4.$site.toast(_this4, response);
          }
        }).catch(function (error) {
          _this4.$site.toast(_this4, error);
        });
      });
    },
    copier: function copier(teaming) {
      var _this5 = this;

      var copy = teaming.clone();
      copy.name += '-copy';
      copy.tag += '-copy';
      new dialog_cl__WEBPACK_IMPORTED_MODULE_0__["default"]({
        title: 'Copy Teaming ' + teaming.name,
        content: '<div id="cl-teaming"></div>',
        addClass: 'cl-dialog-narrow',
        buttons: [{
          contents: 'Copy',
          focus: true,
          click: function click(dialog) {
            if (!_this5.$site.Tags.validate(copy.tag)) {
              return;
            }

            if (teaming.name.trim() === '') {
              new dialog_cl__WEBPACK_IMPORTED_MODULE_0__["default"].MessageBox('Must enter name', 'You must provide a non-empty name', dialog_cl__WEBPACK_IMPORTED_MODULE_0__["default"].MessageBox.OK);
              return;
            }

            var params = {
              orig: teaming.id,
              tag: copy.tag.trim(),
              name: copy.name.trim(),
              public: copy.public
            };

            _this5.$site.api.post('/api/team/teamings/copy', params).then(function (response) {
              if (!response.hasError()) {
                _this5.take(response);

                dialog.close();
              } else {
                _this5.$site.toast(_this5, response);
              }
            }).catch(function (error) {
              _this5.$site.toast(_this5, error);
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
            teaming: copy
          };
        },
        template: "<editor :teaming=\"teaming\"></editor>",
        components: {
          editor: _TeamingEditor_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
        }
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
/* harmony import */ var _TeamEditor_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TeamEditor.vue */ "./vendor/cl/team/js/Console/TeamEditor.vue");
/* harmony import */ var dialog_cl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dialog-cl */ "./packages/dialog-cl/src/app.modules.js");
/* harmony import */ var _Team__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Team */ "./vendor/cl/team/js/Team.js");
/* harmony import */ var _TeamDistributer_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TeamDistributer.vue */ "./vendor/cl/team/js/Console/TeamDistributer.vue");
/* harmony import */ var _TeamNameLoader_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TeamNameLoader.vue */ "./vendor/cl/team/js/Console/TeamNameLoader.vue");
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





var ConsoleComponentBase = Site.ConsoleComponentBase;
var MenuVue = Site.site.MenuVue;
var VueDialog = Site.site.VueDialog;
/* harmony default export */ __webpack_exports__["default"] = ({
  extends: ConsoleComponentBase,
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
    clMenu: MenuVue
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
          this.teams.push(new _Team__WEBPACK_IMPORTED_MODULE_2__["Team"](team));
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
      var team = new _Team__WEBPACK_IMPORTED_MODULE_2__["Team"]();
      var teamingId = this.id;
      new VueDialog(this.$site, {
        title: 'New Team',
        vue: _TeamEditor_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
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
      new VueDialog(this.$site, {
        title: 'Edit Team',
        vue: _TeamEditor_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
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

      new dialog_cl__WEBPACK_IMPORTED_MODULE_1__["default"].MessageBox('Are you sure?', 'Are you sure you want to delete ' + team.name, dialog_cl__WEBPACK_IMPORTED_MODULE_1__["default"].MessageBox.OKCANCEL, function () {
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
      new VueDialog(this.$site, {
        title: 'Team Distributer',
        vue: _TeamDistributer_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
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
      new VueDialog(this.$site, {
        title: 'Team Name Loader',
        vue: _TeamNameLoader_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
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
                                _vm.copier(teaming)
                              }
                            }
                          },
                          [
                            _c("img", {
                              attrs: {
                                src:
                                  _vm.root + "/vendor/cl/site/img/copy16.png",
                                alt: "Copy",
                                title: "Copy"
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

Member.ULA = 'L'; ///< Undergraduate Learning Assistant

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
  roles[Member.ULA] = {
    name: 'Undergraduate Learning Assistant',
    short: 'ULA',
    priority: 7
  };
  roles[Member.TA] = {
    name: 'Teaching Assistant',
    priority: 8
  };
  roles[Member.INSTRUCTOR] = {
    name: 'Instructor',
    priority: 9
  };
  roles[Member.ADMIN] = {
    name: 'Admin',
    priority: 100
  };
  return roles;
};



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

_js_TeamFactory__WEBPACK_IMPORTED_MODULE_0__["TeamFactory"].create(Site.site); //
// Install the console components
//

if (Site.site.console !== undefined) {
  _js_Console_TeamConsole__WEBPACK_IMPORTED_MODULE_1__["TeamConsole"].setup(Site.site.console);
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
    order: 35,
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



/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL3NpdGUvanMvVnVlL1Z1ZURpYWxvZy52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC90ZWFtL2pzL0NvbnNvbGUvVGVhbURpc3RyaWJ1dGVyLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL3RlYW0vanMvQ29uc29sZS9UZWFtRWRpdG9yLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL3RlYW0vanMvQ29uc29sZS9UZWFtTmFtZUxvYWRlci52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC90ZWFtL2pzL0NvbnNvbGUvVGVhbWluZ0VkaXRvci52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC90ZWFtL2pzL0NvbnNvbGUvVGVhbWluZ3NFZGl0b3IudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvdGVhbS9qcy9Db25zb2xlL1RlYW1zRWRpdG9yLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdGVhbS9qcy9Db25zb2xlL1RlYW1pbmdFZGl0b3IudnVlPzUwZjUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3RlYW0vanMvQ29uc29sZS9UZWFtc0VkaXRvci52dWU/YjdlNCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdGVhbS9qcy9Db25zb2xlL1RlYW1EaXN0cmlidXRlci52dWU/MmQ5ZiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdGVhbS9qcy9Db25zb2xlL1RlYW1FZGl0b3IudnVlPzY0ODQiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3RlYW0vanMvQ29uc29sZS9UZWFtTmFtZUxvYWRlci52dWU/YzNjZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdGVhbS9qcy9Db25zb2xlL1RlYW1pbmdFZGl0b3IudnVlPzdhOTgiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3RlYW0vanMvQ29uc29sZS9UZWFtaW5nc0VkaXRvci52dWU/ZmZjNSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdGVhbS9qcy9Db25zb2xlL1RlYW1zRWRpdG9yLnZ1ZT8zMzljIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC90ZWFtL2pzL0NvbnNvbGUvVGVhbWluZ0VkaXRvci52dWU/YmM2YSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdGVhbS9qcy9Db25zb2xlL1RlYW1zRWRpdG9yLnZ1ZT8wNTVhIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvTWVtYmVycy9NZW1iZXIuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3NpdGUvanMvVnVlL1Z1ZURpYWxvZy52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3NpdGUvanMvVnVlL1Z1ZURpYWxvZy52dWU/NDZiMiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdGVhbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdGVhbS9qcy9Db25zb2xlL1RlYW1Db25zb2xlLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC90ZWFtL2pzL0NvbnNvbGUvVGVhbURpc3RyaWJ1dGVyLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdGVhbS9qcy9Db25zb2xlL1RlYW1EaXN0cmlidXRlci52dWU/MWIwOCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdGVhbS9qcy9Db25zb2xlL1RlYW1EaXN0cmlidXRlci52dWU/NmQ5YSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdGVhbS9qcy9Db25zb2xlL1RlYW1FZGl0b3IudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC90ZWFtL2pzL0NvbnNvbGUvVGVhbUVkaXRvci52dWU/MGU4YSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdGVhbS9qcy9Db25zb2xlL1RlYW1FZGl0b3IudnVlPzU3NTMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3RlYW0vanMvQ29uc29sZS9UZWFtTmFtZUxvYWRlci52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3RlYW0vanMvQ29uc29sZS9UZWFtTmFtZUxvYWRlci52dWU/ZjdlZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdGVhbS9qcy9Db25zb2xlL1RlYW1OYW1lTG9hZGVyLnZ1ZT9hM2RkIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC90ZWFtL2pzL0NvbnNvbGUvVGVhbWluZ0VkaXRvci52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3RlYW0vanMvQ29uc29sZS9UZWFtaW5nRWRpdG9yLnZ1ZT9hZDRkIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC90ZWFtL2pzL0NvbnNvbGUvVGVhbWluZ0VkaXRvci52dWU/MTAyZCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdGVhbS9qcy9Db25zb2xlL1RlYW1pbmdFZGl0b3IudnVlPzUwMWMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3RlYW0vanMvQ29uc29sZS9UZWFtaW5nc0VkaXRvci52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3RlYW0vanMvQ29uc29sZS9UZWFtaW5nc0VkaXRvci52dWU/Mzc5MyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdGVhbS9qcy9Db25zb2xlL1RlYW1pbmdzRWRpdG9yLnZ1ZT83YzdmIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC90ZWFtL2pzL0NvbnNvbGUvVGVhbXNFZGl0b3IudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC90ZWFtL2pzL0NvbnNvbGUvVGVhbXNFZGl0b3IudnVlP2JhNTYiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3RlYW0vanMvQ29uc29sZS9UZWFtc0VkaXRvci52dWU/ODQ1YyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdGVhbS9qcy9Db25zb2xlL1RlYW1zRWRpdG9yLnZ1ZT83Y2ZhIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC90ZWFtL2pzL1RlYW0uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3RlYW0vanMvVGVhbUZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3RlYW0vanMvVGVhbWluZy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdXNlcnMvanMvVXNlcnMvTWVtYmVyc2hpcC5qcyJdLCJuYW1lcyI6WyJNZW1iZXIiLCJqc29uIiwiTWVtYmVyc2hpcCIsImNhbGwiLCJyb2xlIiwidW5kZWZpbmVkIiwiaWQiLCJzZW1lc3RlciIsInNlY3Rpb24iLCJzZXRSb2xlIiwicm9sZV8iLCJwcm90b3R5cGUiLCJPYmplY3QiLCJjcmVhdGUiLCJjb25zdHJ1Y3RvciIsImdldFNlY3Rpb24iLCJzdG9yZSIsImdldHRlcnMiLCJnZXRBc3NpZ25tZW50IiwiYXNzaWdudGFnIiwiR1VFU1QiLCJVU0VSIiwiRFJPUFBFRCIsIlNUVURFTlQiLCJTVEFGRiIsIkdSQURFUiIsIlVMQSIsIlRBIiwiSU5TVFJVQ1RPUiIsIkFETUlOIiwiZ2V0Um9sZXMiLCJyb2xlcyIsIm5hbWUiLCJwcmlvcml0eSIsInNraXAiLCJzaG9ydCIsIlRlYW1GYWN0b3J5IiwiU2l0ZSIsInNpdGUiLCJjb25zb2xlIiwiVGVhbUNvbnNvbGUiLCJzZXR1cCIsIkNvbnNvbGUiLCJ0YWJsZXMiLCJhZGQiLCJ0aXRsZSIsIm9yZGVyIiwiYXBpIiwicGFnZSIsInJvdXRlIiwiY29tcG9uZW50cyIsImFkZE9wdGlvbiIsImF0TGVhc3QiLCJyb3V0ZXMiLCJjb21wb25lbnQiLCJUZWFtaW5nc0VkaXRvclZ1ZSIsImFkZFJvdXRlcyIsIlRlYW1zRWRpdG9yVnVlIiwicHJvcHMiLCJUZWFtIiwiZGF0YSIsIm1lbWJlcnMiLCJjbG9uZSIsIlRlYW1pbmciLCJ0YWciLCJwdWJsaWMiLCJ1c2VyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBLGNBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxlQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBNkI7QUFDN0IscUNBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUFxQixnQkFBZ0I7QUFDckM7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSw2QkFBcUIsZ0JBQWdCO0FBQ3JDO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGFBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsYUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQWtCLDhCQUE4QjtBQUNoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsZUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBb0IsMkJBQTJCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUFtQixjQUFjO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBZ0IsS0FBSztBQUNyQjtBQUNBO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUFnQixZQUFZO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQWMsNEJBQTRCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHVCQUFlLDRCQUE0QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHVCQUFlLDRCQUE0QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJB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bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiVGVhbVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJUZWFtXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG4gXHRmdW5jdGlvbiBob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHRkZWxldGUgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0fVxuIFx0dmFyIHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrID0gd2luZG93W1wid2VicGFja0hvdFVwZGF0ZV9uYW1lX1wiXTtcbiBcdHdpbmRvd1tcIndlYnBhY2tIb3RVcGRhdGVfbmFtZV9cIl0gPSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIHdlYnBhY2tIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcykge1xuIFx0XHRob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4gXHRcdGlmIChwYXJlbnRIb3RVcGRhdGVDYWxsYmFjaykgcGFyZW50SG90VXBkYXRlQ2FsbGJhY2soY2h1bmtJZCwgbW9yZU1vZHVsZXMpO1xuIFx0fSA7XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKSB7XG4gXHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuIFx0XHRzY3JpcHQuY2hhcnNldCA9IFwidXRmLThcIjtcbiBcdFx0c2NyaXB0LnNyYyA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNcIjtcbiBcdFx0aWYgKG51bGwpIHNjcmlwdC5jcm9zc09yaWdpbiA9IG51bGw7XG4gXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZE1hbmlmZXN0KHJlcXVlc3RUaW1lb3V0KSB7XG4gXHRcdHJlcXVlc3RUaW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQgfHwgMTAwMDA7XG4gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihcIk5vIGJyb3dzZXIgc3VwcG9ydFwiKSk7XG4gXHRcdFx0fVxuIFx0XHRcdHRyeSB7XG4gXHRcdFx0XHR2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuIFx0XHRcdFx0dmFyIHJlcXVlc3RQYXRoID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc29uXCI7XG4gXHRcdFx0XHRyZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgcmVxdWVzdFBhdGgsIHRydWUpO1xuIFx0XHRcdFx0cmVxdWVzdC50aW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQ7XG4gXHRcdFx0XHRyZXF1ZXN0LnNlbmQobnVsbCk7XG4gXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KGVycik7XG4gXHRcdFx0fVxuIFx0XHRcdHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRpZiAocmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSByZXR1cm47XG4gXHRcdFx0XHRpZiAocmVxdWVzdC5zdGF0dXMgPT09IDApIHtcbiBcdFx0XHRcdFx0Ly8gdGltZW91dFxuIFx0XHRcdFx0XHRyZWplY3QoXG4gXHRcdFx0XHRcdFx0bmV3IEVycm9yKFwiTWFuaWZlc3QgcmVxdWVzdCB0byBcIiArIHJlcXVlc3RQYXRoICsgXCIgdGltZWQgb3V0LlwiKVxuIFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gNDA0KSB7XG4gXHRcdFx0XHRcdC8vIG5vIHVwZGF0ZSBhdmFpbGFibGVcbiBcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyAhPT0gMjAwICYmIHJlcXVlc3Quc3RhdHVzICE9PSAzMDQpIHtcbiBcdFx0XHRcdFx0Ly8gb3RoZXIgZmFpbHVyZVxuIFx0XHRcdFx0XHRyZWplY3QobmV3IEVycm9yKFwiTWFuaWZlc3QgcmVxdWVzdCB0byBcIiArIHJlcXVlc3RQYXRoICsgXCIgZmFpbGVkLlwiKSk7XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHQvLyBzdWNjZXNzXG4gXHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0dmFyIHVwZGF0ZSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xuIFx0XHRcdFx0XHR9IGNhdGNoIChlKSB7XG4gXHRcdFx0XHRcdFx0cmVqZWN0KGUpO1xuIFx0XHRcdFx0XHRcdHJldHVybjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRyZXNvbHZlKHVwZGF0ZSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdHZhciBob3RBcHBseU9uVXBkYXRlID0gdHJ1ZTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRIYXNoID0gXCJkNmZkNTNmMjZiMTE4Y2Q0MDc1NVwiO1xuIFx0dmFyIGhvdFJlcXVlc3RUaW1lb3V0ID0gMTAwMDA7XG4gXHR2YXIgaG90Q3VycmVudE1vZHVsZURhdGEgPSB7fTtcbiBcdHZhciBob3RDdXJyZW50Q2hpbGRNb2R1bGU7XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50UGFyZW50cyA9IFtdO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHNUZW1wID0gW107XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkge1xuIFx0XHR2YXIgbWUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0aWYgKCFtZSkgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX187XG4gXHRcdHZhciBmbiA9IGZ1bmN0aW9uKHJlcXVlc3QpIHtcbiBcdFx0XHRpZiAobWUuaG90LmFjdGl2ZSkge1xuIFx0XHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0pIHtcbiBcdFx0XHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKSA9PT0gLTEpIHtcbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMucHVzaChtb2R1bGVJZCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gcmVxdWVzdDtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtZS5jaGlsZHJlbi5pbmRleE9mKHJlcXVlc3QpID09PSAtMSkge1xuIFx0XHRcdFx0XHRtZS5jaGlsZHJlbi5wdXNoKHJlcXVlc3QpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRjb25zb2xlLndhcm4oXG4gXHRcdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICtcbiBcdFx0XHRcdFx0XHRyZXF1ZXN0ICtcbiBcdFx0XHRcdFx0XHRcIikgZnJvbSBkaXNwb3NlZCBtb2R1bGUgXCIgK1xuIFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHQpO1xuIFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbXTtcbiBcdFx0XHR9XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ocmVxdWVzdCk7XG4gXHRcdH07XG4gXHRcdHZhciBPYmplY3RGYWN0b3J5ID0gZnVuY3Rpb24gT2JqZWN0RmFjdG9yeShuYW1lKSB7XG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXTtcbiBcdFx0XHRcdH0sXG4gXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX19bbmFtZV0gPSB2YWx1ZTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9O1xuIFx0XHR9O1xuIFx0XHRmb3IgKHZhciBuYW1lIGluIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX193ZWJwYWNrX3JlcXVpcmVfXywgbmFtZSkgJiZcbiBcdFx0XHRcdG5hbWUgIT09IFwiZVwiICYmXG4gXHRcdFx0XHRuYW1lICE9PSBcInRcIlxuIFx0XHRcdCkge1xuIFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBuYW1lLCBPYmplY3RGYWN0b3J5KG5hbWUpKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0Zm4uZSA9IGZ1bmN0aW9uKGNodW5rSWQpIHtcbiBcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInJlYWR5XCIpIGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4gXHRcdFx0aG90Q2h1bmtzTG9hZGluZysrO1xuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoY2h1bmtJZCkudGhlbihmaW5pc2hDaHVua0xvYWRpbmcsIGZ1bmN0aW9uKGVycikge1xuIFx0XHRcdFx0ZmluaXNoQ2h1bmtMb2FkaW5nKCk7XG4gXHRcdFx0XHR0aHJvdyBlcnI7XG4gXHRcdFx0fSk7XG5cbiBcdFx0XHRmdW5jdGlvbiBmaW5pc2hDaHVua0xvYWRpbmcoKSB7XG4gXHRcdFx0XHRob3RDaHVua3NMb2FkaW5nLS07XG4gXHRcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInByZXBhcmVcIikge1xuIFx0XHRcdFx0XHRpZiAoIWhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSkge1xuIFx0XHRcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmIChob3RDaHVua3NMb2FkaW5nID09PSAwICYmIGhvdFdhaXRpbmdGaWxlcyA9PT0gMCkge1xuIFx0XHRcdFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fTtcbiBcdFx0Zm4udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdFx0aWYgKG1vZGUgJiAxKSB2YWx1ZSA9IGZuKHZhbHVlKTtcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy50KHZhbHVlLCBtb2RlICYgfjEpO1xuIFx0XHR9O1xuIFx0XHRyZXR1cm4gZm47XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSB7XG4gXHRcdHZhciBob3QgPSB7XG4gXHRcdFx0Ly8gcHJpdmF0ZSBzdHVmZlxuIFx0XHRcdF9hY2NlcHRlZERlcGVuZGVuY2llczoge30sXG4gXHRcdFx0X2RlY2xpbmVkRGVwZW5kZW5jaWVzOiB7fSxcbiBcdFx0XHRfc2VsZkFjY2VwdGVkOiBmYWxzZSxcbiBcdFx0XHRfc2VsZkRlY2xpbmVkOiBmYWxzZSxcbiBcdFx0XHRfZGlzcG9zZUhhbmRsZXJzOiBbXSxcbiBcdFx0XHRfbWFpbjogaG90Q3VycmVudENoaWxkTW9kdWxlICE9PSBtb2R1bGVJZCxcblxuIFx0XHRcdC8vIE1vZHVsZSBBUElcbiBcdFx0XHRhY3RpdmU6IHRydWUsXG4gXHRcdFx0YWNjZXB0OiBmdW5jdGlvbihkZXAsIGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkFjY2VwdGVkID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwiZnVuY3Rpb25cIikgaG90Ll9zZWxmQWNjZXB0ZWQgPSBkZXA7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xuIFx0XHRcdFx0ZWxzZSBob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcF0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xuIFx0XHRcdH0sXG4gXHRcdFx0ZGVjbGluZTogZnVuY3Rpb24oZGVwKSB7XG4gXHRcdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkRlY2xpbmVkID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXG4gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0XHRcdGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwXSA9IHRydWU7XG4gXHRcdFx0fSxcbiBcdFx0XHRkaXNwb3NlOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG4gXHRcdFx0fSxcbiBcdFx0XHRhZGREaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuIFx0XHRcdH0sXG4gXHRcdFx0cmVtb3ZlRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90Ll9kaXNwb3NlSGFuZGxlcnMuaW5kZXhPZihjYWxsYmFjayk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIGhvdC5fZGlzcG9zZUhhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdH0sXG5cbiBcdFx0XHQvLyBNYW5hZ2VtZW50IEFQSVxuIFx0XHRcdGNoZWNrOiBob3RDaGVjayxcbiBcdFx0XHRhcHBseTogaG90QXBwbHksXG4gXHRcdFx0c3RhdHVzOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHRpZiAoIWwpIHJldHVybiBob3RTdGF0dXM7XG4gXHRcdFx0XHRob3RTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuIFx0XHRcdH0sXG4gXHRcdFx0YWRkU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiBcdFx0XHR9LFxuIFx0XHRcdHJlbW92ZVN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdHZhciBpZHggPSBob3RTdGF0dXNIYW5kbGVycy5pbmRleE9mKGwpO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3RTdGF0dXNIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHR9LFxuXG4gXHRcdFx0Ly9pbmhlcml0IGZyb20gcHJldmlvdXMgZGlzcG9zZSBjYWxsXG4gXHRcdFx0ZGF0YTogaG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdXG4gXHRcdH07XG4gXHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHVuZGVmaW5lZDtcbiBcdFx0cmV0dXJuIGhvdDtcbiBcdH1cblxuIFx0dmFyIGhvdFN0YXR1c0hhbmRsZXJzID0gW107XG4gXHR2YXIgaG90U3RhdHVzID0gXCJpZGxlXCI7XG5cbiBcdGZ1bmN0aW9uIGhvdFNldFN0YXR1cyhuZXdTdGF0dXMpIHtcbiBcdFx0aG90U3RhdHVzID0gbmV3U3RhdHVzO1xuIFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGhvdFN0YXR1c0hhbmRsZXJzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzW2ldLmNhbGwobnVsbCwgbmV3U3RhdHVzKTtcbiBcdH1cblxuIFx0Ly8gd2hpbGUgZG93bmxvYWRpbmdcbiBcdHZhciBob3RXYWl0aW5nRmlsZXMgPSAwO1xuIFx0dmFyIGhvdENodW5rc0xvYWRpbmcgPSAwO1xuIFx0dmFyIGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdFJlcXVlc3RlZEZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90QXZhaWxhYmxlRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3REZWZlcnJlZDtcblxuIFx0Ly8gVGhlIHVwZGF0ZSBpbmZvXG4gXHR2YXIgaG90VXBkYXRlLCBob3RVcGRhdGVOZXdIYXNoO1xuXG4gXHRmdW5jdGlvbiB0b01vZHVsZUlkKGlkKSB7XG4gXHRcdHZhciBpc051bWJlciA9ICtpZCArIFwiXCIgPT09IGlkO1xuIFx0XHRyZXR1cm4gaXNOdW1iZXIgPyAraWQgOiBpZDtcbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90Q2hlY2soYXBwbHkpIHtcbiBcdFx0aWYgKGhvdFN0YXR1cyAhPT0gXCJpZGxlXCIpIHtcbiBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJjaGVjaygpIGlzIG9ubHkgYWxsb3dlZCBpbiBpZGxlIHN0YXR1c1wiKTtcbiBcdFx0fVxuIFx0XHRob3RBcHBseU9uVXBkYXRlID0gYXBwbHk7XG4gXHRcdGhvdFNldFN0YXR1cyhcImNoZWNrXCIpO1xuIFx0XHRyZXR1cm4gaG90RG93bmxvYWRNYW5pZmVzdChob3RSZXF1ZXN0VGltZW91dCkudGhlbihmdW5jdGlvbih1cGRhdGUpIHtcbiBcdFx0XHRpZiAoIXVwZGF0ZSkge1xuIFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiaWRsZVwiKTtcbiBcdFx0XHRcdHJldHVybiBudWxsO1xuIFx0XHRcdH1cbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xuIFx0XHRcdGhvdEF2YWlsYWJsZUZpbGVzTWFwID0gdXBkYXRlLmM7XG4gXHRcdFx0aG90VXBkYXRlTmV3SGFzaCA9IHVwZGF0ZS5oO1xuXG4gXHRcdFx0aG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcbiBcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0aG90RGVmZXJyZWQgPSB7XG4gXHRcdFx0XHRcdHJlc29sdmU6IHJlc29sdmUsXG4gXHRcdFx0XHRcdHJlamVjdDogcmVqZWN0XG4gXHRcdFx0XHR9O1xuIFx0XHRcdH0pO1xuIFx0XHRcdGhvdFVwZGF0ZSA9IHt9O1xuIFx0XHRcdGZvcih2YXIgY2h1bmtJZCBpbiBpbnN0YWxsZWRDaHVua3MpXG4gXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWxvbmUtYmxvY2tzXG4gXHRcdFx0e1xuIFx0XHRcdFx0LypnbG9iYWxzIGNodW5rSWQgKi9cbiBcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdH1cbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiICYmXG4gXHRcdFx0XHRob3RDaHVua3NMb2FkaW5nID09PSAwICYmXG4gXHRcdFx0XHRob3RXYWl0aW5nRmlsZXMgPT09IDBcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0XHR9XG4gXHRcdFx0cmV0dXJuIHByb21pc2U7XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdGlmICghaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gfHwgIWhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdKVxuIFx0XHRcdHJldHVybjtcbiBcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSBmYWxzZTtcbiBcdFx0Zm9yICh2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdGhvdFVwZGF0ZVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmICgtLWhvdFdhaXRpbmdGaWxlcyA9PT0gMCAmJiBob3RDaHVua3NMb2FkaW5nID09PSAwKSB7XG4gXHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0aWYgKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSkge1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XG4gXHRcdH0gZWxzZSB7XG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlcysrO1xuIFx0XHRcdGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90VXBkYXRlRG93bmxvYWRlZCgpIHtcbiBcdFx0aG90U2V0U3RhdHVzKFwicmVhZHlcIik7XG4gXHRcdHZhciBkZWZlcnJlZCA9IGhvdERlZmVycmVkO1xuIFx0XHRob3REZWZlcnJlZCA9IG51bGw7XG4gXHRcdGlmICghZGVmZXJyZWQpIHJldHVybjtcbiBcdFx0aWYgKGhvdEFwcGx5T25VcGRhdGUpIHtcbiBcdFx0XHQvLyBXcmFwIGRlZmVycmVkIG9iamVjdCBpbiBQcm9taXNlIHRvIG1hcmsgaXQgYXMgYSB3ZWxsLWhhbmRsZWQgUHJvbWlzZSB0b1xuIFx0XHRcdC8vIGF2b2lkIHRyaWdnZXJpbmcgdW5jYXVnaHQgZXhjZXB0aW9uIHdhcm5pbmcgaW4gQ2hyb21lLlxuIFx0XHRcdC8vIFNlZSBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD00NjU2NjZcbiBcdFx0XHRQcm9taXNlLnJlc29sdmUoKVxuIFx0XHRcdFx0LnRoZW4oZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRcdHJldHVybiBob3RBcHBseShob3RBcHBseU9uVXBkYXRlKTtcbiBcdFx0XHRcdH0pXG4gXHRcdFx0XHQudGhlbihcbiBcdFx0XHRcdFx0ZnVuY3Rpb24ocmVzdWx0KSB7XG4gXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRmdW5jdGlvbihlcnIpIHtcbiBcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3QoZXJyKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0KTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG4gXHRcdFx0Zm9yICh2YXIgaWQgaW4gaG90VXBkYXRlKSB7XG4gXHRcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgaWQpKSB7XG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHRvTW9kdWxlSWQoaWQpKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEFwcGx5KG9wdGlvbnMpIHtcbiBcdFx0aWYgKGhvdFN0YXR1cyAhPT0gXCJyZWFkeVwiKVxuIFx0XHRcdHRocm93IG5ldyBFcnJvcihcImFwcGx5KCkgaXMgb25seSBhbGxvd2VkIGluIHJlYWR5IHN0YXR1c1wiKTtcbiBcdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiBcdFx0dmFyIGNiO1xuIFx0XHR2YXIgaTtcbiBcdFx0dmFyIGo7XG4gXHRcdHZhciBtb2R1bGU7XG4gXHRcdHZhciBtb2R1bGVJZDtcblxuIFx0XHRmdW5jdGlvbiBnZXRBZmZlY3RlZFN0dWZmKHVwZGF0ZU1vZHVsZUlkKSB7XG4gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFt1cGRhdGVNb2R1bGVJZF07XG4gXHRcdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG5cbiBcdFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKS5tYXAoZnVuY3Rpb24oaWQpIHtcbiBcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdGNoYWluOiBbaWRdLFxuIFx0XHRcdFx0XHRpZDogaWRcbiBcdFx0XHRcdH07XG4gXHRcdFx0fSk7XG4gXHRcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiBcdFx0XHRcdHZhciBxdWV1ZUl0ZW0gPSBxdWV1ZS5wb3AoKTtcbiBcdFx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlSXRlbS5pZDtcbiBcdFx0XHRcdHZhciBjaGFpbiA9IHF1ZXVlSXRlbS5jaGFpbjtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKCFtb2R1bGUgfHwgbW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkKSBjb250aW51ZTtcbiBcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9zZWxmRGVjbGluZWQpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtZGVjbGluZWRcIixcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAobW9kdWxlLmhvdC5fbWFpbikge1xuIFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwidW5hY2NlcHRlZFwiLFxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlLnBhcmVudHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0dmFyIHBhcmVudElkID0gbW9kdWxlLnBhcmVudHNbaV07XG4gXHRcdFx0XHRcdHZhciBwYXJlbnQgPSBpbnN0YWxsZWRNb2R1bGVzW3BhcmVudElkXTtcbiBcdFx0XHRcdFx0aWYgKCFwYXJlbnQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwiZGVjbGluZWRcIixcbiBcdFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG4gXHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRwYXJlbnRJZDogcGFyZW50SWRcbiBcdFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmIChvdXRkYXRlZE1vZHVsZXMuaW5kZXhPZihwYXJlbnRJZCkgIT09IC0xKSBjb250aW51ZTtcbiBcdFx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuIFx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdKVxuIFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdID0gW107XG4gXHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdLCBbbW9kdWxlSWRdKTtcbiBcdFx0XHRcdFx0XHRjb250aW51ZTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdO1xuIFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChwYXJlbnRJZCk7XG4gXHRcdFx0XHRcdHF1ZXVlLnB1c2goe1xuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG4gXHRcdFx0XHRcdFx0aWQ6IHBhcmVudElkXG4gXHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cblxuIFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHR0eXBlOiBcImFjY2VwdGVkXCIsXG4gXHRcdFx0XHRtb2R1bGVJZDogdXBkYXRlTW9kdWxlSWQsXG4gXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXM6IG91dGRhdGVkTW9kdWxlcyxcbiBcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzOiBvdXRkYXRlZERlcGVuZGVuY2llc1xuIFx0XHRcdH07XG4gXHRcdH1cblxuIFx0XHRmdW5jdGlvbiBhZGRBbGxUb1NldChhLCBiKSB7XG4gXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHR2YXIgaXRlbSA9IGJbaV07XG4gXHRcdFx0XHRpZiAoYS5pbmRleE9mKGl0ZW0pID09PSAtMSkgYS5wdXNoKGl0ZW0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGF0IGJlZ2luIGFsbCB1cGRhdGVzIG1vZHVsZXMgYXJlIG91dGRhdGVkXG4gXHRcdC8vIHRoZSBcIm91dGRhdGVkXCIgc3RhdHVzIGNhbiBwcm9wYWdhdGUgdG8gcGFyZW50cyBpZiB0aGV5IGRvbid0IGFjY2VwdCB0aGUgY2hpbGRyZW5cbiBcdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG4gXHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0dmFyIGFwcGxpZWRVcGRhdGUgPSB7fTtcblxuIFx0XHR2YXIgd2FyblVuZXhwZWN0ZWRSZXF1aXJlID0gZnVuY3Rpb24gd2FyblVuZXhwZWN0ZWRSZXF1aXJlKCkge1xuIFx0XHRcdGNvbnNvbGUud2FybihcbiBcdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICsgcmVzdWx0Lm1vZHVsZUlkICsgXCIpIHRvIGRpc3Bvc2VkIG1vZHVsZVwiXG4gXHRcdFx0KTtcbiBcdFx0fTtcblxuIFx0XHRmb3IgKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgaWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVJZCA9IHRvTW9kdWxlSWQoaWQpO1xuIFx0XHRcdFx0LyoqIEB0eXBlIHtUT0RPfSAqL1xuIFx0XHRcdFx0dmFyIHJlc3VsdDtcbiBcdFx0XHRcdGlmIChob3RVcGRhdGVbaWRdKSB7XG4gXHRcdFx0XHRcdHJlc3VsdCA9IGdldEFmZmVjdGVkU3R1ZmYobW9kdWxlSWQpO1xuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0cmVzdWx0ID0ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwiZGlzcG9zZWRcIixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogaWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdC8qKiBAdHlwZSB7RXJyb3J8ZmFsc2V9ICovXG4gXHRcdFx0XHR2YXIgYWJvcnRFcnJvciA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGRvQXBwbHkgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBkb0Rpc3Bvc2UgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBjaGFpbkluZm8gPSBcIlwiO1xuIFx0XHRcdFx0aWYgKHJlc3VsdC5jaGFpbikge1xuIFx0XHRcdFx0XHRjaGFpbkluZm8gPSBcIlxcblVwZGF0ZSBwcm9wYWdhdGlvbjogXCIgKyByZXN1bHQuY2hhaW4uam9pbihcIiAtPiBcIik7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRzd2l0Y2ggKHJlc3VsdC50eXBlKSB7XG4gXHRcdFx0XHRcdGNhc2UgXCJzZWxmLWRlY2xpbmVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2Ygc2VsZiBkZWNsaW5lOiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJkZWNsaW5lZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIGRlY2xpbmVkIGRlcGVuZGVuY3k6IFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdFwiIGluIFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQucGFyZW50SWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcInVuYWNjZXB0ZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vblVuYWNjZXB0ZWQpIG9wdGlvbnMub25VbmFjY2VwdGVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZVVuYWNjZXB0ZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBcIiArIG1vZHVsZUlkICsgXCIgaXMgbm90IGFjY2VwdGVkXCIgKyBjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJhY2NlcHRlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uQWNjZXB0ZWQpIG9wdGlvbnMub25BY2NlcHRlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGRvQXBwbHkgPSB0cnVlO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiZGlzcG9zZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRpc3Bvc2VkKSBvcHRpb25zLm9uRGlzcG9zZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRkb0Rpc3Bvc2UgPSB0cnVlO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRkZWZhdWx0OlxuIFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuZXhjZXB0aW9uIHR5cGUgXCIgKyByZXN1bHQudHlwZSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoYWJvcnRFcnJvcikge1xuIFx0XHRcdFx0XHRob3RTZXRTdGF0dXMoXCJhYm9ydFwiKTtcbiBcdFx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGFib3J0RXJyb3IpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGRvQXBwbHkpIHtcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSBob3RVcGRhdGVbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIHJlc3VsdC5vdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHRcdFx0XHRmb3IgKG1vZHVsZUlkIGluIHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdFx0XHRcdGlmIChcbiBcdFx0XHRcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChcbiBcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzLFxuIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZFxuIFx0XHRcdFx0XHRcdFx0KVxuIFx0XHRcdFx0XHRcdCkge1xuIFx0XHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pXG4gXHRcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSA9IFtdO1xuIFx0XHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQoXG4gXHRcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSxcbiBcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXVxuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChkb0Rpc3Bvc2UpIHtcbiBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCBbcmVzdWx0Lm1vZHVsZUlkXSk7XG4gXHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIFN0b3JlIHNlbGYgYWNjZXB0ZWQgb3V0ZGF0ZWQgbW9kdWxlcyB0byByZXF1aXJlIHRoZW0gbGF0ZXIgYnkgdGhlIG1vZHVsZSBzeXN0ZW1cbiBcdFx0dmFyIG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHRmb3IgKGkgPSAwOyBpIDwgb3V0ZGF0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0bW9kdWxlSWQgPSBvdXRkYXRlZE1vZHVsZXNbaV07XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gJiZcbiBcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkXG4gXHRcdFx0KVxuIFx0XHRcdFx0b3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLnB1c2goe1xuIFx0XHRcdFx0XHRtb2R1bGU6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRlcnJvckhhbmRsZXI6IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkXG4gXHRcdFx0XHR9KTtcbiBcdFx0fVxuXG4gXHRcdC8vIE5vdyBpbiBcImRpc3Bvc2VcIiBwaGFzZVxuIFx0XHRob3RTZXRTdGF0dXMoXCJkaXNwb3NlXCIpO1xuIFx0XHRPYmplY3Qua2V5cyhob3RBdmFpbGFibGVGaWxlc01hcCkuZm9yRWFjaChmdW5jdGlvbihjaHVua0lkKSB7XG4gXHRcdFx0aWYgKGhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdID09PSBmYWxzZSkge1xuIFx0XHRcdFx0aG90RGlzcG9zZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdH1cbiBcdFx0fSk7XG5cbiBcdFx0dmFyIGlkeDtcbiBcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCk7XG4gXHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gXHRcdFx0bW9kdWxlSWQgPSBxdWV1ZS5wb3AoKTtcbiBcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRpZiAoIW1vZHVsZSkgY29udGludWU7XG5cbiBcdFx0XHR2YXIgZGF0YSA9IHt9O1xuXG4gXHRcdFx0Ly8gQ2FsbCBkaXNwb3NlIGhhbmRsZXJzXG4gXHRcdFx0dmFyIGRpc3Bvc2VIYW5kbGVycyA9IG1vZHVsZS5ob3QuX2Rpc3Bvc2VIYW5kbGVycztcbiBcdFx0XHRmb3IgKGogPSAwOyBqIDwgZGlzcG9zZUhhbmRsZXJzLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHRjYiA9IGRpc3Bvc2VIYW5kbGVyc1tqXTtcbiBcdFx0XHRcdGNiKGRhdGEpO1xuIFx0XHRcdH1cbiBcdFx0XHRob3RDdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF0gPSBkYXRhO1xuXG4gXHRcdFx0Ly8gZGlzYWJsZSBtb2R1bGUgKHRoaXMgZGlzYWJsZXMgcmVxdWlyZXMgZnJvbSB0aGlzIG1vZHVsZSlcbiBcdFx0XHRtb2R1bGUuaG90LmFjdGl2ZSA9IGZhbHNlO1xuXG4gXHRcdFx0Ly8gcmVtb3ZlIG1vZHVsZSBmcm9tIGNhY2hlXG4gXHRcdFx0ZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuXG4gXHRcdFx0Ly8gd2hlbiBkaXNwb3NpbmcgdGhlcmUgaXMgbm8gbmVlZCB0byBjYWxsIGRpc3Bvc2UgaGFuZGxlclxuIFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG5cbiBcdFx0XHQvLyByZW1vdmUgXCJwYXJlbnRzXCIgcmVmZXJlbmNlcyBmcm9tIGFsbCBjaGlsZHJlblxuIFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGUuY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBjaGlsZCA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlLmNoaWxkcmVuW2pdXTtcbiBcdFx0XHRcdGlmICghY2hpbGQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0aWR4ID0gY2hpbGQucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkge1xuIFx0XHRcdFx0XHRjaGlsZC5wYXJlbnRzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIHJlbW92ZSBvdXRkYXRlZCBkZXBlbmRlbmN5IGZyb20gbW9kdWxlIGNoaWxkcmVuXG4gXHRcdHZhciBkZXBlbmRlbmN5O1xuIFx0XHR2YXIgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXM7XG4gXHRcdGZvciAobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKVxuIFx0XHRcdCkge1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAobW9kdWxlKSB7XG4gXHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG4gXHRcdFx0XHRcdFx0aWR4ID0gbW9kdWxlLmNoaWxkcmVuLmluZGV4T2YoZGVwZW5kZW5jeSk7XG4gXHRcdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBtb2R1bGUuY2hpbGRyZW4uc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBOb3QgaW4gXCJhcHBseVwiIHBoYXNlXG4gXHRcdGhvdFNldFN0YXR1cyhcImFwcGx5XCIpO1xuXG4gXHRcdGhvdEN1cnJlbnRIYXNoID0gaG90VXBkYXRlTmV3SGFzaDtcblxuIFx0XHQvLyBpbnNlcnQgbmV3IGNvZGVcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBhcHBsaWVkVXBkYXRlKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcHBsaWVkVXBkYXRlLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gYXBwbGllZFVwZGF0ZVttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gY2FsbCBhY2NlcHQgaGFuZGxlcnNcbiBcdFx0dmFyIGVycm9yID0gbnVsbDtcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChtb2R1bGUpIHtcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdHZhciBjYWxsYmFja3MgPSBbXTtcbiBcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2ldO1xuIFx0XHRcdFx0XHRcdGNiID0gbW9kdWxlLmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwZW5kZW5jeV07XG4gXHRcdFx0XHRcdFx0aWYgKGNiKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2tzLmluZGV4T2YoY2IpICE9PSAtMSkgY29udGludWU7XG4gXHRcdFx0XHRcdFx0XHRjYWxsYmFja3MucHVzaChjYik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0XHRjYiA9IGNhbGxiYWNrc1tpXTtcbiBcdFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdFx0Y2IobW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMpO1xuIFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdC1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV0sXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIExvYWQgc2VsZiBhY2NlcHRlZCBtb2R1bGVzXG4gXHRcdGZvciAoaSA9IDA7IGkgPCBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgaXRlbSA9IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlc1tpXTtcbiBcdFx0XHRtb2R1bGVJZCA9IGl0ZW0ubW9kdWxlO1xuIFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcbiBcdFx0XHR0cnkge1xuIFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCk7XG4gXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRpZiAodHlwZW9mIGl0ZW0uZXJyb3JIYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiBcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHRpdGVtLmVycm9ySGFuZGxlcihlcnIpO1xuIFx0XHRcdFx0XHR9IGNhdGNoIChlcnIyKSB7XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVycjIsXG4gXHRcdFx0XHRcdFx0XHRcdG9yaWdpbmFsRXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjI7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gaGFuZGxlIGVycm9ycyBpbiBhY2NlcHQgaGFuZGxlcnMgYW5kIHNlbGYgYWNjZXB0ZWQgbW9kdWxlIGxvYWRcbiBcdFx0aWYgKGVycm9yKSB7XG4gXHRcdFx0aG90U2V0U3RhdHVzKFwiZmFpbFwiKTtcbiBcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuIFx0XHR9XG5cbiBcdFx0aG90U2V0U3RhdHVzKFwiaWRsZVwiKTtcbiBcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiBcdFx0XHRyZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJUZWFtXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aG90OiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpLFxuIFx0XHRcdHBhcmVudHM6IChob3RDdXJyZW50UGFyZW50c1RlbXAgPSBob3RDdXJyZW50UGFyZW50cywgaG90Q3VycmVudFBhcmVudHMgPSBbXSwgaG90Q3VycmVudFBhcmVudHNUZW1wKSxcbiBcdFx0XHRjaGlsZHJlbjogW11cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkpO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2NsL2Rpc3QvXCI7XG5cbiBcdC8vIF9fd2VicGFja19oYXNoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gaG90Q3VycmVudEhhc2g7IH07XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wX25hbWVfXCJdID0gd2luZG93W1wid2VicGFja0pzb25wX25hbWVfXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vdmVuZG9yL2NsL3RlYW0vaW5kZXguanNcIixcImNvbW1vblwiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiPHNjcmlwdD5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRtZXRob2RzOiB7XHJcblx0XHRjbG9zZSgpIHtcclxuXHRcdFx0dGhpcy4kZGlhbG9nLmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY2wtY2VudGVyLWluXCI+XHJcbiAgICA8Zm9ybSBjbGFzcz1cImNsLWlubGluZS1wYWRkZWRcIiBAc3VibWl0LnByZXZlbnQ9XCJzdWJtaXQoKVwiPlxyXG4gICAgICA8cD48bGFiZWw+VGVhbSBTaXplPGJyPjxpbnB1dCBzdHlsZT1cIndpZHRoOiA4ZW1cIiBjbGFzcz1cImNlbnRlclwiIHJlZj1cInNpemVcIiB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJzaXplXCI+PC9sYWJlbD48L3A+XHJcbiAgICA8L2Zvcm0+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2wtZGlhbG9nLWJvdHRvbVwiPlxyXG4gICAgICA8YnV0dG9uIEBjbGljay5wcmV2ZW50PVwic3VibWl0KClcIiB0eXBlPVwic3VibWl0XCI+RGlzdHJpYnV0ZTwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIEBjbGljay5wcmV2ZW50PVwiY2xvc2UoKVwiIHR5cGU9XCJzdWJtaXRcIj5DYW5jZWw8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgVnVlRGlhbG9nVnVlIGZyb20gJ3NpdGUtY2wvanMvVnVlL1Z1ZURpYWxvZy52dWUnO1xyXG4gIGltcG9ydCBEaWFsb2cgZnJvbSAnZGlhbG9nLWNsJztcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gIFx0J2V4dGVuZHMnOiBWdWVEaWFsb2dWdWUsXHJcbiAgXHRwcm9wczogWyd0ZWFtaW5naWQnLCAncGFyZW50J10sXHJcbiAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICBcdFx0cmV0dXJuIHtcclxuICBcdFx0XHRzaXplOiA1XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgXHRtb3VudGVkKCkge1xyXG5cdCAgICB0aGlzLiRyZWZzWydzaXplJ10uc2VsZWN0KCk7XHJcbiAgXHRcdHRoaXMuJHJlZnNbJ3NpemUnXS5mb2N1cygpO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICBcdFx0c3VibWl0KCkge1xyXG4gIFx0XHRcdGxldCBzaXplID0gK3RoaXMuc2l6ZTtcclxuICBcdFx0XHRpZihzaXplIDwgMSB8fCBzaXplID4gMTAwKSB7XHJcbiAgICAgICAgICBuZXcgRGlhbG9nLk1lc3NhZ2VCb3goJ011c3QgZW50ZXIgc2l6ZScsICdZb3UgbXVzdCBwcm92aWRlIGEgc2l6ZSBmcm9tIDEgdG8gMTAwJyxcclxuICAgICAgICAgICAgRGlhbG9nLk1lc3NhZ2VCb3guT0spO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgIHNpemU6IHNpemVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuJHNpdGUuYXBpLnBvc3QoJy9hcGkvdGVhbS90ZWFtcy8nICsgdGhpcy50ZWFtaW5naWQgKyAnL2Rpc3RyaWJ1dGUnLCBwYXJhbXMpXHJcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wYXJlbnQudGFrZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgdGhpcy4kZGlhbG9nLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY2wtY2VudGVyLWluXCI+XHJcbiAgICA8Zm9ybSBjbGFzcz1cImNsLWlubGluZS1wYWRkZWRcIiBAc3VibWl0LnByZXZlbnQ9XCJzdWJtaXQoKVwiPlxyXG4gICAgICA8cD48bGFiZWw+TmFtZTxicj48aW5wdXQgcmVmPVwibmFtZVwiIHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cInRlYW0ubmFtZVwiPjwvbGFiZWw+PC9wPlxyXG4gICAgPC9mb3JtPlxyXG4gICAgPGRpdiBjbGFzcz1cImNsLWRpYWxvZy1ib3R0b21cIj5cclxuICAgICAgPGJ1dHRvbiBAY2xpY2sucHJldmVudD1cInN1Ym1pdCgpXCIgdHlwZT1cInN1Ym1pdFwiPnt7b3BlcmF0aW9uPT09J25ldycgPyAnQWRkJyA6ICdVcGRhdGUnfX08L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBAY2xpY2sucHJldmVudD1cImNsb3NlKClcIiB0eXBlPVwic3VibWl0XCI+Q2FuY2VsPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IFZ1ZURpYWxvZ1Z1ZSBmcm9tICdzaXRlLWNsL2pzL1Z1ZS9WdWVEaWFsb2cudnVlJztcclxuICBpbXBvcnQgRGlhbG9nIGZyb20gJ2RpYWxvZy1jbCc7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICBcdCdleHRlbmRzJzogVnVlRGlhbG9nVnVlLFxyXG4gIFx0cHJvcHM6IFsndGVhbScsICd0ZWFtaW5naWQnLCAnb3BlcmF0aW9uJywgJ3BhcmVudCddLFxyXG4gIFx0bW91bnRlZCgpIHtcclxuICBcdFx0dGhpcy4kcmVmc1snbmFtZSddLmZvY3VzKCk7XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gIFx0XHRzdWJtaXQoKSB7XHJcbiAgICAgICAgaWYodGhpcy50ZWFtLm5hbWUudHJpbSgpID09PSAnJykge1xyXG4gICAgICAgICAgbmV3IERpYWxvZy5NZXNzYWdlQm94KCdNdXN0IGVudGVyIG5hbWUnLCAnWW91IG11c3QgcHJvdmlkZSBhIG5vbi1lbXB0eSBuYW1lJyxcclxuICAgICAgICAgICAgRGlhbG9nLk1lc3NhZ2VCb3guT0spO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgIGlkOiB0aGlzLnRlYW0uaWQsXHJcbiAgICAgICAgICBuYW1lOiB0aGlzLnRlYW0ubmFtZS50cmltKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuJHNpdGUuYXBpLnBvc3QoJy9hcGkvdGVhbS90ZWFtcy8nICsgdGhpcy50ZWFtaW5naWQgKyAnLycgKyB0aGlzLm9wZXJhdGlvbiwgcGFyYW1zKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG4gICAgICAgICAgICAgIHRoaXMucGFyZW50LnRha2UocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgIHRoaXMuJGRpYWxvZy5jbG9zZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNsLWNlbnRlci1pblwiPlxyXG4gICAgPGZvcm0gY2xhc3M9XCJjbC1pbmxpbmUtcGFkZGVkXCIgQHN1Ym1pdC5wcmV2ZW50PVwic3VibWl0KClcIj5cclxuICAgICAgPHA+PGxhYmVsPlRlYW0gTmFtZXM8YnI+XHJcbiAgICAgICAgPHRleHRhcmVhIHJlZj1cIm5hbWVzXCIgdi1tb2RlbD1cIm5hbWVzXCIgcm93cz1cIjE1XCI+PC90ZXh0YXJlYT5cclxuICAgICAgPC9sYWJlbD48L3A+XHJcbiAgICA8L2Zvcm0+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2wtZGlhbG9nLWJvdHRvbVwiPlxyXG4gICAgICA8YnV0dG9uIEBjbGljay5wcmV2ZW50PVwic3VibWl0KClcIiB0eXBlPVwic3VibWl0XCI+U2V0IE5hbWVzPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gQGNsaWNrLnByZXZlbnQ9XCJjbG9zZSgpXCIgdHlwZT1cInN1Ym1pdFwiPkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCBWdWVEaWFsb2dWdWUgZnJvbSAnc2l0ZS1jbC9qcy9WdWUvVnVlRGlhbG9nLnZ1ZSc7XHJcbiAgaW1wb3J0IERpYWxvZyBmcm9tICdkaWFsb2ctY2wnO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgXHQnZXh0ZW5kcyc6IFZ1ZURpYWxvZ1Z1ZSxcclxuICBcdHByb3BzOiBbJ3RlYW1pbmdpZCcsICdwYXJlbnQnXSxcclxuICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gIFx0XHRyZXR1cm4ge1xyXG4gIFx0XHRcdG5hbWVzOiAnJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIFx0bW91bnRlZCgpIHtcclxuICBcdFx0dGhpcy4kcmVmc1snbmFtZXMnXS5mb2N1cygpO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICBcdFx0c3VibWl0KCkge1xyXG4gICAgICAgIGxldCBuYW1lczEgPSB0aGlzLm5hbWVzLnRyaW0oKS5zcGxpdChcIlxcblwiKTtcclxuICAgICAgICBsZXQgbmFtZXMgPSBbXTtcclxuICAgICAgICBmb3IobGV0IG5hbWUgb2YgbmFtZXMxKSB7XHJcbiAgICAgICAgXHRuYW1lID0gbmFtZS50cmltKCk7XHJcbiAgICAgICAgXHRpZihuYW1lICE9PSAnJykge1xyXG4gICAgICAgIFx0XHRuYW1lcy5wdXNoKG5hbWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYobmFtZXMubGVuZ3RoID09PSAwKSB7XHJcblx0ICAgICAgICBuZXcgRGlhbG9nLk1lc3NhZ2VCb3goJ011c3QgZW50ZXIgbmFtZXMnLCAnWW91IG11c3QgZW50ZXIgb25lIG9yIG1vcmUgbmFtZXMgdG8gdXNlLicsXHJcblx0XHQgICAgICAgIERpYWxvZy5NZXNzYWdlQm94Lk9LKTtcclxuXHQgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG5cdFx0ICAgIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICBuYW1lczogbmFtZXNcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuJHNpdGUuYXBpLnBvc3QoJy9hcGkvdGVhbS90ZWFtcy8nICsgdGhpcy50ZWFtaW5naWQgKyAnL25hbWVzJywgcGFyYW1zKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG4gICAgICAgICAgICAgIHRoaXMucGFyZW50LnRha2UocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgIHRoaXMuJGRpYWxvZy5jbG9zZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNsLXRlYW1pbmctZWRpdG9yXCI+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8Zm9ybT5cclxuICAgICAgICA8cD48bGFiZWw+VGFnPGJyPjxpbnB1dCByZWY9XCJ0YWdcIiB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJ0ZWFtaW5nLnRhZ1wiPjwvbGFiZWw+PC9wPlxyXG4gICAgICAgIDxwPjxsYWJlbD5OYW1lPGJyPjxpbnB1dCB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJ0ZWFtaW5nLm5hbWVcIj48L2xhYmVsPjwvcD5cclxuICAgICAgICA8cCBjbGFzcz1cImNlbnRlclwiPjxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdi1tb2RlbD1cInRlYW1pbmcucHVibGljXCI+IFB1YmxpYzwvbGFiZWw+PC9wPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICBcdHByb3BzOiBbJ3RlYW1pbmcnXSxcclxuICBcdG1vdW50ZWQoKSB7XHJcbiAgXHRcdHRoaXMuJHJlZnNbJ3RhZyddLmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG4gIGRpdi5jbC10ZWFtaW5nLWVkaXRvciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgPmRpdiB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgcGFkZGluZzogMS41ZW0gMCAyLjBlbSAwO1xyXG4gICAgfVxyXG4gIH1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgIDxkaXYgdi1pZj1cInRlYW1pbmdzICE9PSBudWxsXCIgY2xhc3M9XCJmdWxsXCI+XHJcbiAgICA8dGFibGUgdi1pZj1cInRlYW1pbmdzLmxlbmd0aCA+IDBcIj5cclxuICAgICAgPHRyPlxyXG4gICAgICAgIDx0aD48L3RoPlxyXG4gICAgICAgIDx0aD5UYWc8L3RoPlxyXG4gICAgICAgIDx0aD5OYW1lPC90aD5cclxuICAgICAgICA8dGg+VmlzaWJpbGl0eTwvdGg+XHJcbiAgICAgIDwvdHI+XHJcbiAgICAgIDx0ciB2LWZvcj1cInRlYW1pbmcgaW4gdGVhbWluZ3NcIiA6a2V5PVwidGVhbWluZy5pZFwiPlxyXG4gICAgICAgIDx0ZD48YSBAY2xpY2sucHJldmVudD1cImVkaXRlcih0ZWFtaW5nKVwiPjxpbWcgOnNyYz1cInJvb3QgKyAnL3ZlbmRvci9jbC9zaXRlL2ltZy9wZW5jaWwxNi5wbmcnXCIgYWx0PVwiRWRpdFwiIHRpdGxlPVwiRWRpdFwiPjwvYT5cclxuICAgICAgICAgIDxhIEBjbGljay5wcmV2ZW50PVwiY29waWVyKHRlYW1pbmcpXCI+PGltZyA6c3JjPVwicm9vdCArICcvdmVuZG9yL2NsL3NpdGUvaW1nL2NvcHkxNi5wbmcnXCIgYWx0PVwiQ29weVwiIHRpdGxlPVwiQ29weVwiPjwvYT5cclxuICAgICAgICAgIDxhIEBjbGljay5wcmV2ZW50PVwiZGVsZXRlcih0ZWFtaW5nKVwiPjxpbWcgOnNyYz1cInJvb3QgKyAnL3ZlbmRvci9jbC9zaXRlL2ltZy94LnBuZydcIiBhbHQ9XCJEZWxldGVcIiB0aXRsZT1cIkRlbGV0ZVwiPjwvYT5cclxuICAgICAgICA8L3RkPlxyXG4gICAgICAgIDx0ZD48cm91dGVyLWxpbmsgOnRvPVwicm9vdCArICcvY2wvY29uc29sZS90ZWFtLycgKyB0ZWFtaW5nLmlkXCI+e3t0ZWFtaW5nLnRhZ319PC9yb3V0ZXItbGluaz48L3RkPlxyXG4gICAgICAgIDx0ZD57e3RlYW1pbmcubmFtZX19PC90ZD5cclxuICAgICAgICA8dGQ+e3t0ZWFtaW5nLnB1YmxpYyA/ICdQdWJsaWMnIDogJ1ByaXZhdGUnfX08L3RkPlxyXG4gICAgICA8L3RyPlxyXG4gICAgPC90YWJsZT5cclxuICAgICAgPGRpdiB2LWVsc2UgY2xhc3M9XCJjZW50ZXJcIj5cclxuICAgICAgICA8cD5UaGVyZSBhcmUgY3VycmVudGx5IG5vIGRlZmluZWQgdGVhbWluZ3MuPC9wPlxyXG4gICAgICAgIDxwPkNob29zZSBBZGQgVGVhbWluZyB0byBhZGQgYSBuZXcgdGVhbWluZy48L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBEaWFsb2cgZnJvbSAnZGlhbG9nLWNsJztcclxuICBpbXBvcnQge1RlYW1pbmd9IGZyb20gJy4uL1RlYW1pbmcnO1xyXG4gIGltcG9ydCBUZWFtaW5nRWRpdG9yVnVlIGZyb20gJy4vVGVhbWluZ0VkaXRvci52dWUnO1xyXG5cclxuICBjb25zdCBDb25zb2xlQ29tcG9uZW50QmFzZSA9IFNpdGUuQ29uc29sZUNvbXBvbmVudEJhc2U7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICBcdGV4dGVuZHM6IENvbnNvbGVDb21wb25lbnRCYXNlLFxyXG4gIFx0ZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgXHRcdHJldHVybiB7XHJcbiAgXHRcdCAgdGVhbWluZ3M6IG51bGxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICBcdG1vdW50ZWQoKSB7XHJcbiAgXHRcdHRoaXMuc2V0VGl0bGUoJzogVGVhbWluZ3MnKTtcclxuXHQgICAgdGhpcy5hZGROYXYyKCdBZGQgVGVhbWluZycsIDUsICgpID0+IHtcclxuXHRcdCAgICB0aGlzLmFkZCgpO1xyXG5cdCAgICB9KTtcclxuXHJcblx0ICAgIHRoaXMuJHNpdGUuYXBpLmdldCgnL2FwaS90ZWFtL3RlYW1pbmdzJywge30pXHJcblx0XHQgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdCAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuXHRcdFx0ICAgIFx0dGhpcy50YWtlKHJlc3BvbnNlKTtcclxuXHRcdFx0ICAgIH0gZWxzZSB7XHJcblx0XHRcdFx0ICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG5cdFx0XHQgICAgfVxyXG5cclxuXHRcdCAgICB9KVxyXG5cdFx0ICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHRcdFx0ICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG5cdFx0ICAgIH0pO1xyXG4gICAgfSxcclxuXHQgIG1ldGhvZHM6IHtcclxuICBcdFx0dGFrZShyZXNwb25zZSkge1xyXG4gIFx0XHRcdGxldCBkYXRhID0gcmVzcG9uc2UuZ2V0RGF0YSgndGVhbWluZ3MnKS5hdHRyaWJ1dGVzO1xyXG5cclxuICBcdFx0XHR0aGlzLnRlYW1pbmdzID0gW107XHJcbiAgXHRcdFx0Zm9yKGxldCByb3cgb2YgZGF0YSkge1xyXG4gIFx0XHRcdFx0dGhpcy50ZWFtaW5ncy5wdXNoKG5ldyBUZWFtaW5nKHJvdykpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICBcdFx0YWRkKCkge1xyXG4gIFx0XHRcdGNvbnN0IHRlYW1pbmcgPSBuZXcgVGVhbWluZygpO1xyXG5cclxuICBcdFx0XHRuZXcgRGlhbG9nKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdOZXcgVGVhbWluZycsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICc8ZGl2IGlkPVwiY2wtdGVhbWluZ1wiPjwvZGl2PicsXHJcbiAgICBcdFx0ICAgIGFkZENsYXNzOiAnY2wtZGlhbG9nLW5hcnJvdycsXHJcbiAgICAgICAgICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFx0ICBjb250ZW50czogJ0FkZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9jdXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IChkaWFsb2cpID0+IHtcclxuXHQgICAgICAgICAgICAgICAgICAgIGlmKCF0aGlzLiRzaXRlLlRhZ3MudmFsaWRhdGUodGVhbWluZy50YWcpKSB7XHJcblx0XHQgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHQgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAgICAgICAgICAgICBpZih0ZWFtaW5nLm5hbWUudHJpbSgpID09PSAnJykge1xyXG5cdFx0ICAgICAgICAgICAgICAgICAgICBuZXcgRGlhbG9nLk1lc3NhZ2VCb3goJ011c3QgZW50ZXIgbmFtZScsICdZb3UgbXVzdCBwcm92aWRlIGEgbm9uLWVtcHR5IG5hbWUnLFxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIERpYWxvZy5NZXNzYWdlQm94Lk9LKTtcclxuXHRcdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIFx0ICBcdGxldCBwYXJhbXMgPSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICBcdCAgdGFnOiB0ZWFtaW5nLnRhZy50cmltKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGVhbWluZy5uYW1lLnRyaW0oKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwdWJsaWM6IHRlYW1pbmcucHVibGljXHJcbiAgICAgICAgICAgICAgICBcdCAgXHR9XHJcblxyXG4gICAgICAgICAgICAgICAgXHQgIFx0dGhpcy4kc2l0ZS5hcGkucG9zdCgnL2FwaS90ZWFtL3RlYW1pbmdzL25ldycsIHBhcmFtcylcclxuICAgICAgICAgICAgICAgIFx0ICBcdCAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIFx0ICBcdCAgICAgICAgaWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWtlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2cuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIFx0ICBcdCAgICAgICAgfSBlbHNlIHtcclxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIFx0ICBcdCAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIFx0ICBcdCAgICB9KVxyXG4gICAgICAgICAgICAgICAgXHQgIFx0ICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgXHQgIFx0ICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXHQgIGNvbnRlbnRzOiAnQ2FuY2VsJyxcclxuICAgICAgICAgICAgICAgICAgICBjbGljazogKGRpYWxvZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgXHQgIFx0ZGlhbG9nLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICBcdFx0XHQvLyBDcmVhdGUgYSBWdWUgaW5zaWRlIHRoZSBkaWFsb2cgYm94XHJcbiAgICAgICAgbmV3IHRoaXMuJHNpdGUuVnVlKHtcclxuICAgICAgICAgIGVsOiAnI2NsLXRlYW1pbmcnLFxyXG4gICAgICAgICAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgdGVhbWluZzogdGVhbWluZ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdGVtcGxhdGU6IGA8ZWRpdG9yIDp0ZWFtaW5nPVwidGVhbWluZ1wiPjwvZWRpdG9yPmAsXHJcbiAgICAgICAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgIGVkaXRvcjogVGVhbWluZ0VkaXRvclZ1ZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGVkaXRlcih0ZWFtaW5nKSB7XHJcbiAgXHRcdFx0dGVhbWluZyA9IHRlYW1pbmcuY2xvbmUoKTtcclxuXHJcblx0ICAgICAgbmV3IERpYWxvZyh7XHJcblx0XHQgICAgICB0aXRsZTogJ0VkaXQgVGVhbWluZycsXHJcblx0XHQgICAgICBjb250ZW50OiAnPGRpdiBpZD1cImNsLXRlYW1pbmdcIj48L2Rpdj4nLFxyXG5cdCAgICAgICAgYWRkQ2xhc3M6ICdjbC1kaWFsb2ctbmFycm93JyxcclxuXHRcdCAgICAgIGJ1dHRvbnM6IFtcclxuXHRcdFx0ICAgICAge1xyXG5cdFx0XHRcdCAgICAgIGNvbnRlbnRzOiAnVXBkYXRlJyxcclxuXHRcdFx0XHQgICAgICBmb2N1czogdHJ1ZSxcclxuXHRcdFx0XHQgICAgICBjbGljazogKGRpYWxvZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuJHNpdGUuVGFncy52YWxpZGF0ZSh0ZWFtaW5nLnRhZykpIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHRcdFx0XHRcdCAgICAgIGlmKHRlYW1pbmcubmFtZS50cmltKCkgPT09ICcnKSB7XHJcblx0XHRcdFx0XHRcdCAgICAgIG5ldyBEaWFsb2cuTWVzc2FnZUJveCgnTXVzdCBlbnRlciBuYW1lJywgJ1lvdSBtdXN0IHByb3ZpZGUgYSBub24tZW1wdHkgbmFtZScsXHJcblx0XHRcdFx0XHRcdFx0ICAgICAgRGlhbG9nLk1lc3NhZ2VCb3guT0spO1xyXG5cdFx0XHRcdFx0XHQgICAgICByZXR1cm47XHJcblx0XHRcdFx0XHQgICAgICB9XHJcblxyXG5cdFx0XHRcdFx0ICAgICAgbGV0IHBhcmFtcyA9IHtcclxuXHRcdFx0XHRcdCAgICAgIFx0aWQ6IHRlYW1pbmcuaWQsXHJcblx0XHRcdFx0XHRcdCAgICAgIHRhZzogdGVhbWluZy50YWcudHJpbSgpLFxyXG5cdFx0XHRcdFx0XHQgICAgICBuYW1lOiB0ZWFtaW5nLm5hbWUudHJpbSgpLFxyXG5cdFx0XHRcdFx0XHQgICAgICBwdWJsaWM6IHRlYW1pbmcucHVibGljXHJcblx0XHRcdFx0XHQgICAgICB9XHJcblxyXG5cdFx0XHRcdFx0ICAgICAgdGhpcy4kc2l0ZS5hcGkucG9zdCgnL2FwaS90ZWFtL3RlYW1pbmdzL3VwZGF0ZScsIHBhcmFtcylcclxuXHRcdFx0XHRcdFx0ICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0ICAgICAgaWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQgICAgICB0aGlzLnRha2UocmVzcG9uc2UpO1xyXG5cdFx0XHRcdFx0XHRcdFx0ICAgICAgZGlhbG9nLmNsb3NlKCk7XHJcblx0XHRcdFx0XHRcdFx0ICAgICAgfSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdCAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG5cdFx0XHRcdFx0XHRcdCAgICAgIH1cclxuXHJcblx0XHRcdFx0XHRcdCAgICAgIH0pXHJcblx0XHRcdFx0XHRcdCAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRcdFx0XHQgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuXHRcdFx0XHRcdFx0ICAgICAgfSk7XHJcblxyXG5cdFx0XHRcdCAgICAgIH1cclxuXHRcdFx0ICAgICAgfSxcclxuXHRcdFx0ICAgICAge1xyXG5cdFx0XHRcdCAgICAgIGNvbnRlbnRzOiAnQ2FuY2VsJyxcclxuXHRcdFx0XHQgICAgICBjbGljazogKGRpYWxvZykgPT4ge1xyXG5cdFx0XHRcdFx0ICAgICAgZGlhbG9nLmNsb3NlKCk7XHJcblx0XHRcdFx0ICAgICAgfVxyXG5cdFx0XHQgICAgICB9XHJcblx0XHQgICAgICBdXHJcblxyXG5cdCAgICAgIH0pO1xyXG5cclxuXHQgICAgICAvLyBDcmVhdGUgYSBWdWUgaW5zaWRlIHRoZSBkaWFsb2cgYm94XHJcblx0ICAgICAgbmV3IHRoaXMuJHNpdGUuVnVlKHtcclxuXHRcdCAgICAgIGVsOiAnI2NsLXRlYW1pbmcnLFxyXG5cdFx0ICAgICAgZGF0YTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdCAgICAgIHJldHVybiB7XHJcblx0XHRcdFx0ICAgICAgdGVhbWluZzogdGVhbWluZ1xyXG5cdFx0XHQgICAgICB9XHJcblx0XHQgICAgICB9LFxyXG5cdFx0ICAgICAgdGVtcGxhdGU6IGA8ZWRpdG9yIDp0ZWFtaW5nPVwidGVhbWluZ1wiPjwvZWRpdG9yPmAsXHJcblx0XHQgICAgICBjb21wb25lbnRzOiB7XHJcblx0XHRcdCAgICAgIGVkaXRvcjogVGVhbWluZ0VkaXRvclZ1ZVxyXG5cdFx0ICAgICAgfVxyXG5cdCAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGRlbGV0ZXIodGVhbWluZykge1xyXG5cdCAgICAgIG5ldyBEaWFsb2cuTWVzc2FnZUJveCgnQXJlIHlvdSBzdXJlPycsICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlICcgKyB0ZWFtaW5nLm5hbWUsXHJcblx0XHQgICAgICBEaWFsb2cuTWVzc2FnZUJveC5PS0NBTkNFTCwgKCkgPT4ge1xyXG5cdFx0ICAgICAgICB0aGlzLiRzaXRlLmFwaS5wb3N0KCcvYXBpL3RlYW0vdGVhbWluZ3MvZGVsZXRlJywge2lkOiB0ZWFtaW5nLmlkfSlcclxuXHRcdFx0ICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHQgICAgICAgIGlmICghcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG5cdFx0XHRcdFx0ICAgICAgICB0aGlzLnRha2UocmVzcG9uc2UpO1xyXG5cdFx0XHRcdCAgICAgICAgfSBlbHNlIHtcclxuXHRcdFx0XHRcdCAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcblx0XHRcdFx0ICAgICAgICB9XHJcblxyXG5cdFx0XHQgICAgICAgIH0pXHJcblx0XHRcdCAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdCAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcblx0XHRcdCAgICAgICAgfSk7XHJcblx0XHQgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgY29waWVyKHRlYW1pbmcpIHtcclxuICBcdFx0XHRjb25zdCBjb3B5ID0gdGVhbWluZy5jbG9uZSgpO1xyXG4gIFx0XHRcdGNvcHkubmFtZSArPSAnLWNvcHknO1xyXG4gIFx0XHRcdGNvcHkudGFnICs9ICctY29weSc7XHJcblxyXG4gICAgICAgIG5ldyBEaWFsb2coe1xyXG4gICAgICAgICAgdGl0bGU6ICdDb3B5IFRlYW1pbmcgJyArIHRlYW1pbmcubmFtZSxcclxuICAgICAgICAgIGNvbnRlbnQ6ICc8ZGl2IGlkPVwiY2wtdGVhbWluZ1wiPjwvZGl2PicsXHJcbiAgICAgICAgICBhZGRDbGFzczogJ2NsLWRpYWxvZy1uYXJyb3cnLFxyXG4gICAgICAgICAgYnV0dG9uczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY29udGVudHM6ICdDb3B5JyxcclxuICAgICAgICAgICAgICBmb2N1czogdHJ1ZSxcclxuICAgICAgICAgICAgICBjbGljazogKGRpYWxvZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuJHNpdGUuVGFncy52YWxpZGF0ZShjb3B5LnRhZykpIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKHRlYW1pbmcubmFtZS50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgIG5ldyBEaWFsb2cuTWVzc2FnZUJveCgnTXVzdCBlbnRlciBuYW1lJywgJ1lvdSBtdXN0IHByb3ZpZGUgYSBub24tZW1wdHkgbmFtZScsXHJcbiAgICAgICAgICAgICAgICAgICAgRGlhbG9nLk1lc3NhZ2VCb3guT0spO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgIFx0b3JpZzogdGVhbWluZy5pZCxcclxuICAgICAgICAgICAgICAgICAgdGFnOiBjb3B5LnRhZy50cmltKCksXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU6IGNvcHkubmFtZS50cmltKCksXHJcbiAgICAgICAgICAgICAgICAgIHB1YmxpYzogY29weS5wdWJsaWNcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLmFwaS5wb3N0KCcvYXBpL3RlYW0vdGVhbWluZ3MvY29weScsIHBhcmFtcylcclxuICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcbiAgICAgICAgICAgICAgICBcdCAgICB0aGlzLnRha2UocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgXHQgICAgZGlhbG9nLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIFx0ICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnRzOiAnQ2FuY2VsJyxcclxuICAgICAgICAgICAgICBjbGljazogKGRpYWxvZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlhbG9nLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuXHQgICAgICAvLyBDcmVhdGUgYSBWdWUgaW5zaWRlIHRoZSBkaWFsb2cgYm94XHJcblx0ICAgICAgbmV3IHRoaXMuJHNpdGUuVnVlKHtcclxuXHRcdCAgICAgIGVsOiAnI2NsLXRlYW1pbmcnLFxyXG5cdFx0ICAgICAgZGF0YTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdCAgICAgIHJldHVybiB7XHJcblx0XHRcdFx0ICAgICAgdGVhbWluZzogY29weVxyXG5cdFx0XHQgICAgICB9XHJcblx0XHQgICAgICB9LFxyXG5cdFx0ICAgICAgdGVtcGxhdGU6IGA8ZWRpdG9yIDp0ZWFtaW5nPVwidGVhbWluZ1wiPjwvZWRpdG9yPmAsXHJcblx0XHQgICAgICBjb21wb25lbnRzOiB7XHJcblx0XHRcdCAgICAgIGVkaXRvcjogVGVhbWluZ0VkaXRvclZ1ZVxyXG5cdFx0ICAgICAgfVxyXG5cdCAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmdWxsIGNsLXRlYW1zLWVkaXRvclwiIHYtaWY9XCJ0ZWFtcyAhPT0gbnVsbFwiPlxyXG4gICAgICA8dGFibGUgY2xhc3M9XCJzbWFsbFwiPlxyXG4gICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cInRlYW0gaW4gdGVhbXNcIj5cclxuICAgICAgICAgIDx0ciA6a2V5PVwidGVhbS5pZFwiIGNsYXNzPVwiY2wtaW50ZXJuYWxcIj5cclxuICAgICAgICAgICAgPHRoIGNsYXNzPVwicmlnaHRcIj48c3BhbiB2LWlmPVwidGVhbS5uYW1lICE9PSBudWxsXCI+XHJcbiAgICAgICAgICAgICAgPGEgQGNsaWNrLnByZXZlbnQ9XCJlZGl0ZXIodGVhbSlcIj48aW1nIDpzcmM9XCJyb290ICsgJy92ZW5kb3IvY2wvc2l0ZS9pbWcvcGVuY2lsMTYucG5nJ1wiIGFsdD1cIkVkaXRcIiB0aXRsZT1cIkVkaXRcIj48L2E+XHJcbiAgICAgICAgICAgICAgPGEgQGNsaWNrLnByZXZlbnQ9XCJkZWxldGVyKHRlYW0pXCI+PGltZyA6c3JjPVwicm9vdCArICcvdmVuZG9yL2NsL3NpdGUvaW1nL3gucG5nJ1wiIGFsdD1cIkRlbGV0ZVwiIHRpdGxlPVwiRGVsZXRlXCI+PC9hPjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8Y2wtbWVudSBhZGQtY2xhc3M9XCJjbC1pbmxpbmVcIiB2LWlmPVwidGVhbS5uYW1lID09PSBudWxsXCI+XHJcbiAgICAgICAgICAgICAgICA8YT48aW1nIDpzcmM9XCJyb290ICsgJy92ZW5kb3IvY2wvc2l0ZS9pbWcvbWVudWJhcnMucG5nJ1wiPjwvYT5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgPGxpPjxhIEBjbGljay5wcmV2ZW50PVwiZGlzdHJpYnV0ZSgpXCI+RGlzdHJpYnV0ZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2NsLW1lbnU+XHJcbiAgICAgICAgICAgICAgPGEgQGNsaWNrLnByZXZlbnQ9XCJ0b2dnbGUodGVhbSlcIj48aW1nIDpzcmM9XCIkc2l0ZS5yb290ICsgJy92ZW5kb3IvY2wvc2l0ZS9pbWcvJyArIChvcGVuW3RlYW0uaWRdID09PSB0cnVlID8gJ21pbnVzLnBuZycgOiAncGx1cy5wbmcnKVwiPjwvYT5cclxuICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgPHRoIGNvbHNwYW49XCIyXCIgdi1odG1sPVwidGVhbUhlYWRpbmcodGVhbSlcIj48L3RoPlxyXG4gICAgICAgICAgICA8dGggY2xhc3M9XCJjZW50ZXJcIj57e3RlYW0ubWVtYmVycy5sZW5ndGh9fTwvdGg+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJvcGVuW3RlYW0uaWRdID09PSB0cnVlXCI+XHJcbiAgICAgICAgICAgIDx0ciB2LWlmPVwidGVhbS5tZW1iZXJzLmxlbmd0aCA9PT0gMFwiPlxyXG4gICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiNFwiIGNsYXNzPVwiY2VudGVyXCI+KioqIGVtcHR5ICoqKjwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0ciB2LWZvcj1cIm1lbWJlciBpbiB0ZWFtLm1lbWJlcnNcIj5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGNsLW1lbnU+XHJcbiAgICAgICAgICAgICAgICAgIDxhPjxpbWcgOnNyYz1cInJvb3QgKyAnL3ZlbmRvci9jbC9zaXRlL2ltZy9tZW51YmFycy5wbmcnXCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIHYtZm9yPVwidGVhbTEgaW4gdGVhbXNcIj48YSBAY2xpY2sucHJldmVudD1cIm1vdmUobWVtYmVyLCB0ZWFtMSlcIj57e3RlYW0xLm5hbWUgIT09IG51bGwgPyB0ZWFtMS5uYW1lIDogJ1VuYXNzaWduZWQnfX08aW1nIHYtaWY9XCJ0ZWFtID09PSB0ZWFtMVwiIDpzcmM9XCJyb290ICsgJy92ZW5kb3IvY2wvc2l0ZS9pbWcvY2hlY2sxNi5wbmcnXCI+PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2NsLW1lbnU+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+PGEgOmhyZWY9XCInbWFpbHRvOicgKyBtZW1iZXIuZW1haWxcIj57e21lbWJlci51c2VyfX08L2E+PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+e3ttZW1iZXIubmFtZX19PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPC90YWJsZT5cclxuICAgICAgPHAgY2xhc3M9XCJjZW50ZXJcIj48ZW0+e3t0b3RhbHN9fTwvZW0+PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgVGVhbUVkaXRvclZ1ZSBmcm9tICcuL1RlYW1FZGl0b3IudnVlJztcclxuICBpbXBvcnQgRGlhbG9nIGZyb20gJ2RpYWxvZy1jbCc7XHJcbiAgaW1wb3J0IHtUZWFtfSBmcm9tICcuLi9UZWFtJztcclxuICBpbXBvcnQgVGVhbURpc3RyaWJ1dGVyVnVlIGZyb20gJy4vVGVhbURpc3RyaWJ1dGVyLnZ1ZSc7XHJcbiAgaW1wb3J0IFRlYW1OYW1lTG9hZGVyVnVlIGZyb20gJy4vVGVhbU5hbWVMb2FkZXIudnVlJztcclxuXHJcbiAgY29uc3QgQ29uc29sZUNvbXBvbmVudEJhc2UgPSBTaXRlLkNvbnNvbGVDb21wb25lbnRCYXNlO1xyXG4gIGNvbnN0IE1lbnVWdWUgPSBTaXRlLnNpdGUuTWVudVZ1ZTtcclxuICBjb25zdCBWdWVEaWFsb2cgPSBTaXRlLnNpdGUuVnVlRGlhbG9nO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcblx0ICAgIGV4dGVuZHM6IENvbnNvbGVDb21wb25lbnRCYXNlLFxyXG4gIFx0ICBwcm9wczogWydpZCddLFxyXG4gICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuXHQgICAgXHQgIHJldHVybiB7XHJcblx0ICAgIFx0ICBcdHRlYW1zOiBudWxsLFxyXG4gICAgICAgICAgICBvcGVuOiBbXVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBjb21wdXRlZDoge1xyXG5cdCAgICAgIC8qKlxyXG4gICAgICAgICAqIENvbXB1dGVkIHBhcmFtZXRlciB0aGF0IHRvdGFscyBhbGwgdGVhbSBtZW1iZXJzaGlwc1xyXG5cdCAgICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcblx0ICAgICAgICovXHJcblx0ICAgIFx0dG90YWxzKCkge1xyXG5cdCAgICBcdFx0bGV0IGNudCA9IDA7XHJcblx0ICAgIFx0XHRsZXQgdW5hZmZpbCA9IDA7XHJcblx0ICAgIFx0XHRmb3IoY29uc3QgdGVhbSBvZiB0aGlzLnRlYW1zKSB7XHJcblx0ICAgIFx0XHRcdGlmKHRlYW0ubmFtZSAhPT0gbnVsbCkge1xyXG5cdFx0XHQgICAgICAgIGNudCArPSB0ZWFtLm1lbWJlcnMubGVuZ3RoO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICBcdFx0XHRcdHVuYWZmaWwgKz0gdGVhbS5tZW1iZXJzLmxlbmd0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cdCAgICBcdFx0bGV0IHJlc3BvbnNlID0gY250ICsgJyB0ZWFtIG1lbWJlcnMgLyAnICsgKHRoaXMudGVhbXMubGVuZ3RoLTEpICsgXCIgdGVhbXNcIjtcclxuXHQgICAgXHRcdGlmKHVuYWZmaWwgPiAwKSB7XHJcblx0ICAgIFx0XHRcdHJlc3BvbnNlICs9ICcgLyAnICsgdW5hZmZpbCArICcgdW5hc3NpZ25lZCc7XHJcbiAgICAgICAgICB9XHJcblx0ICAgIFx0XHRyZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBjb21wb25lbnRzOiB7XHJcblx0ICAgICAgY2xNZW51OiBNZW51VnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIG1vdW50ZWQoKSB7XHJcblx0ICAgICAgdGhpcy5hZGROYXYyTGluaygnVGVhbWluZ3MnLCAzLCAnL2NsL2NvbnNvbGUvdGVhbXMnKTtcclxuXHJcblx0ICAgICAgdGhpcy5hZGROYXYyKCdBZGQgVGVhbScsIDUsICgpID0+IHtcclxuXHRcdCAgICAgIHRoaXMuYWRkKCk7XHJcblx0ICAgICAgfSk7XHJcblxyXG5cdCAgICAgIHRoaXMuYWRkTmF2MignTG9hZCBOYW1lcycsIDYsICgpID0+IHtcclxuXHRcdCAgICAgIHRoaXMubG9hZE5hbWVzKCk7XHJcblx0ICAgICAgfSk7XHJcblxyXG5cdCAgICAgIHRoaXMuYWRkTmF2MignRXhwYW5kIEFsbCcsIDcsICgpID0+IHtcclxuXHQgICAgICBcdHRoaXMuZXhwYW5kQWxsKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cdCAgICAgIHRoaXMuJHNpdGUuYXBpLmdldCgnL2FwaS90ZWFtL3RlYW1zLycgKyB0aGlzLmlkLCB7fSlcclxuXHQgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0ICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuXHQgICAgICAgICAgICAgICAgdGhpcy50YWtlKHJlc3BvbnNlKTtcclxuXHQgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblx0ICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG5cdCAgICAgICAgICAgICAgfVxyXG5cclxuXHQgICAgICAgICAgfSlcclxuXHQgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG5cdCAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG5cdCAgICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgYmVmb3JlRGVzdHJveSgpIHtcclxuICAgICAgfSxcclxuICAgICAgbWV0aG9kczoge1xyXG5cdCAgICBcdHRha2UocmVzcG9uc2UpIHtcclxuXHQgICAgXHRcdCAgbGV0IHRlYW1zID0gcmVzcG9uc2UuZ2V0RGF0YSgndGVhbXMnKS5hdHRyaWJ1dGVzO1xyXG5cclxuXHQgICAgXHRcdCAgdGhpcy50ZWFtcyA9IFtdO1xyXG5cdCAgICBcdFx0ICBmb3IobGV0IHRlYW0gb2YgdGVhbXMpIHtcclxuXHQgICAgXHRcdCAgXHR0aGlzLnRlYW1zLnB1c2gobmV3IFRlYW0odGVhbSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b2dnbGUodGVhbSkge1xyXG5cdCAgICBcdFx0aWYodGhpcy5vcGVuW3RlYW0uaWRdID09PSB0cnVlKSB7XHJcblx0ICAgIFx0XHRcdHRoaXMuJHNldCh0aGlzLm9wZW4sIHRlYW0uaWQsIGZhbHNlKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcblx0XHQgICAgICAgIHRoaXMuJHNldCh0aGlzLm9wZW4sIHRlYW0uaWQsIHRydWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblx0ICAgIFx0YWRkKCkge1xyXG5cdCAgICBcdFx0bGV0IHRlYW0gPSBuZXcgVGVhbSgpO1xyXG4gICAgICAgICAgY29uc3QgdGVhbWluZ0lkID0gdGhpcy5pZDtcclxuXHJcbiAgICAgICAgICBuZXcgVnVlRGlhbG9nKHRoaXMuJHNpdGUsIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdOZXcgVGVhbScsXHJcbiAgICAgICAgICAgIHZ1ZTogVGVhbUVkaXRvclZ1ZSxcclxuICAgICAgICAgICAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHRlYW06IHRlYW0sXHJcbiAgICAgICAgICAgICAgICB0ZWFtaW5naWQ6IHRlYW1pbmdJZCxcclxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbjogJ25ldydcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJ1dHRvbnM6IGZhbHNlLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IHRoaXNcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcblx0ICAgICAgZWRpdGVyKHRlYW0pIHtcclxuXHRcdCAgICAgIHRlYW0gPSB0ZWFtLmNsb25lKCk7XHJcblx0XHQgICAgICBjb25zdCB0ZWFtaW5nSWQgPSB0aGlzLmlkO1xyXG5cclxuXHQgICAgICAgIG5ldyBWdWVEaWFsb2codGhpcy4kc2l0ZSwge1xyXG5cdFx0ICAgICAgICB0aXRsZTogJ0VkaXQgVGVhbScsXHJcblx0XHQgICAgICAgIHZ1ZTogVGVhbUVkaXRvclZ1ZSxcclxuXHRcdCAgICAgICAgZGF0YTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdCAgICAgICAgcmV0dXJuIHtcclxuXHRcdFx0XHQgICAgICAgIHRlYW06IHRlYW0sXHJcbiAgICAgICAgICAgICAgICB0ZWFtaW5naWQ6IHRlYW1pbmdJZCxcclxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbjogJ3VwZGF0ZSdcclxuXHRcdFx0ICAgICAgICB9XHJcblx0XHQgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJ1dHRvbnM6IGZhbHNlLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IHRoaXNcclxuXHRcdCAgICAgIH0pO1xyXG5cdCAgICAgIH0sXHJcbiAgICAgICAgZGVsZXRlcih0ZWFtKSB7XHJcblx0XHQgICAgICBuZXcgRGlhbG9nLk1lc3NhZ2VCb3goJ0FyZSB5b3Ugc3VyZT8nLCAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSAnICsgdGVhbS5uYW1lLFxyXG5cdFx0XHQgICAgICBEaWFsb2cuTWVzc2FnZUJveC5PS0NBTkNFTCwgKCkgPT4ge1xyXG5cdFx0XHRcdCAgICAgIHRoaXMuJHNpdGUuYXBpLnBvc3QoJy9hcGkvdGVhbS90ZWFtcy8nICsgdGhpcy5pZCArICcvZGVsZXRlJywge2lkOiB0ZWFtLmlkfSlcclxuXHRcdFx0XHRcdCAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHQgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuXHRcdFx0XHRcdFx0XHQgICAgICB0aGlzLnRha2UocmVzcG9uc2UpO1xyXG5cdFx0XHRcdFx0XHQgICAgICB9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdCAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG5cdFx0XHRcdFx0XHQgICAgICB9XHJcblxyXG5cdFx0XHRcdFx0ICAgICAgfSlcclxuXHRcdFx0XHRcdCAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRcdFx0ICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcblx0XHRcdFx0XHQgICAgICB9KTtcclxuXHRcdFx0ICAgICAgfSk7XHJcblx0ICAgICAgfSxcclxuICAgICAgICBtb3ZlKG1lbWJlciwgdGVhbSkge1xyXG5cdCAgICBcdFx0bGV0IHBhcmFtcyA9IHtcclxuXHQgICAgXHRcdFx0bWVtYmVyOiBtZW1iZXIubWVtYmVyaWQsXHJcbiAgICAgICAgICAgIHRlYW06IHRlYW0gIT09IG51bGw/IHRlYW0uaWQgOiAwXHJcbiAgICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgdGhpcy4kc2l0ZS5hcGkucG9zdCgnL2FwaS90ZWFtL3RlYW1zLycgKyB0aGlzLmlkICsgJy9tb3ZlJywgcGFyYW1zKVxyXG5cdFx0ICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0ICAgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuXHRcdFx0XHQgICAgICAgIHRoaXMudGFrZShyZXNwb25zZSk7XHJcblx0XHRcdCAgICAgICAgfSBlbHNlIHtcclxuXHRcdFx0XHQgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG5cdFx0XHQgICAgICAgIH1cclxuXHJcblx0XHQgICAgICAgIH0pXHJcblx0XHQgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHRcdFx0ICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuXHRcdCAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkaXN0cmlidXRlKCkge1xyXG5cdCAgICAgICAgY29uc3QgdGVhbWluZ0lkID0gdGhpcy5pZDtcclxuXHJcblx0ICAgICAgICBuZXcgVnVlRGlhbG9nKHRoaXMuJHNpdGUsIHtcclxuXHRcdCAgICAgICAgdGl0bGU6ICdUZWFtIERpc3RyaWJ1dGVyJyxcclxuXHRcdCAgICAgICAgdnVlOiBUZWFtRGlzdHJpYnV0ZXJWdWUsXHJcblx0XHQgICAgICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQgICAgICAgIHJldHVybiB7XHJcblx0XHRcdFx0ICAgICAgICB0ZWFtaW5naWQ6IHRlYW1pbmdJZFxyXG5cdFx0XHQgICAgICAgIH1cclxuXHRcdCAgICAgICAgfSxcclxuXHRcdCAgICAgICAgYnV0dG9uczogZmFsc2UsXHJcblx0XHQgICAgICAgIHBhcmVudDogdGhpc1xyXG5cdCAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb2FkTmFtZXMoKSB7XHJcblx0ICAgICAgICBjb25zdCB0ZWFtaW5nSWQgPSB0aGlzLmlkO1xyXG5cclxuXHQgICAgICAgIG5ldyBWdWVEaWFsb2codGhpcy4kc2l0ZSwge1xyXG5cdFx0ICAgICAgICB0aXRsZTogJ1RlYW0gTmFtZSBMb2FkZXInLFxyXG5cdFx0ICAgICAgICB2dWU6IFRlYW1OYW1lTG9hZGVyVnVlLFxyXG4gICAgICAgICAgICBhZGRDbGFzczogJ2NsLXRlYW1zLWVkaXRvci1kbGcnLFxyXG5cdFx0ICAgICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0ICAgICAgICByZXR1cm4ge1xyXG5cdFx0XHRcdCAgICAgICAgdGVhbWluZ2lkOiB0ZWFtaW5nSWRcclxuXHRcdFx0ICAgICAgICB9XHJcblx0XHQgICAgICAgIH0sXHJcblx0XHQgICAgICAgIGJ1dHRvbnM6IGZhbHNlLFxyXG5cdFx0ICAgICAgICBwYXJlbnQ6IHRoaXNcclxuXHQgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXhwYW5kQWxsKCkge1xyXG5cdCAgICBcdFx0Zm9yKGxldCB0ZWFtIG9mIHRoaXMudGVhbXMpIHtcclxuXHQgICAgXHRcdFx0dGhpcy4kc2V0KHRoaXMub3BlbiwgdGVhbS5pZCwgdHJ1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0ZWFtSGVhZGluZyh0ZWFtKSB7XHJcblx0ICAgIFx0XHRpZih0ZWFtLm5hbWUgPT09IG51bGwpIHtcclxuXHQgICAgXHRcdFx0cmV0dXJuICdVbmFzc2lnbmVkJztcclxuICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICBsZXQgaHRtbCA9IHRlYW0ubmFtZTtcclxuXHJcblx0ICAgIFx0XHRsZXQgZW1haWwgPSAnJztcclxuXHQgICAgXHRcdGZvcihsZXQgbWVtYmVyIG9mIHRlYW0ubWVtYmVycykge1xyXG5cdCAgICBcdFx0XHRpZihlbWFpbCAhPT0gJycpIHtcclxuXHQgICAgXHRcdFx0XHRlbWFpbCArPSAnOyc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGVtYWlsICs9IG1lbWJlci5lbWFpbDtcclxuICAgICAgICAgIH1cclxuXHJcblx0ICAgIFx0XHRyZXR1cm4gYCR7dGVhbS5uYW1lfSA8YSBjbGFzcz1cImNsLWVtYWlsXCIgaHJlZj1cIm1haWx0bzoke2VtYWlsfVwiPmVtYWlsPC9hPmA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG4gIGRpdi5jbC10ZWFtcy1lZGl0b3Ige1xyXG5cclxuICAgIHRoOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgIG1pbi13aWR0aDogMzBlbTtcclxuICAgIH1cclxuXHJcbiAgICB0ZDpudGgtY2hpbGQoMikge1xyXG4gICAgICBtaW4td2lkdGg6IDVlbTtcclxuICAgIH1cclxuXHJcbiAgICB0ZDpudGgtY2hpbGQoMykge1xyXG4gICAgICBtaW4td2lkdGg6IDEwZW07XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGEuY2wtZW1haWwge1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NWVtO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcclxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIGRpdi5jbC10ZWFtcy1lZGl0b3ItZGxnIHtcclxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gIH1cclxuXHJcbjwvc3R5bGU+IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJkaXYuY2wtdGVhbWluZy1lZGl0b3Ige1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5kaXYuY2wtdGVhbWluZy1lZGl0b3IgPiBkaXYge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMS41ZW0gMCAyLjBlbSAwO1xcbn1cXG5cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImRpdi5jbC10ZWFtcy1lZGl0b3IgdGg6bnRoLWNoaWxkKDIpIHtcXG4gIG1pbi13aWR0aDogMzBlbTtcXG59XFxuZGl2LmNsLXRlYW1zLWVkaXRvciB0ZDpudGgtY2hpbGQoMikge1xcbiAgbWluLXdpZHRoOiA1ZW07XFxufVxcbmRpdi5jbC10ZWFtcy1lZGl0b3IgdGQ6bnRoLWNoaWxkKDMpIHtcXG4gIG1pbi13aWR0aDogMTBlbTtcXG59XFxuZGl2LmNsLXRlYW1zLWVkaXRvciBhLmNsLWVtYWlsIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDAuODVlbTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuZGl2LmNsLXRlYW1zLWVkaXRvci1kbGcge1xcbiAgbWluLWhlaWdodDogNDAwcHg7XFxufVxcblxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbC1jZW50ZXItaW5cIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImZvcm1cIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2wtaW5saW5lLXBhZGRlZFwiLFxuICAgICAgICBvbjoge1xuICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgX3ZtLnN1Ym1pdCgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgIF9jKFwibGFiZWxcIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiVGVhbSBTaXplXCIpLFxuICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNpemUsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNpemVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgcmVmOiBcInNpemVcIixcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjhlbVwiIH0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uc2l6ZSB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF92bS5zaXplID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsLWRpYWxvZy1ib3R0b21cIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICBfdm0uc3VibWl0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3YoXCJEaXN0cmlidXRlXCIpXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICBfdm0uY2xvc2UoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdihcIkNhbmNlbFwiKV1cbiAgICAgIClcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbC1jZW50ZXItaW5cIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImZvcm1cIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2wtaW5saW5lLXBhZGRlZFwiLFxuICAgICAgICBvbjoge1xuICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgX3ZtLnN1Ym1pdCgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgIF9jKFwibGFiZWxcIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiTmFtZVwiKSxcbiAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS50ZWFtLm5hbWUsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInRlYW0ubmFtZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICByZWY6IFwibmFtZVwiLFxuICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnRlYW0ubmFtZSB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS50ZWFtLCBcIm5hbWVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF1cbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbC1kaWFsb2ctYm90dG9tXCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgX3ZtLnN1Ym1pdCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0ub3BlcmF0aW9uID09PSBcIm5ld1wiID8gXCJBZGRcIiA6IFwiVXBkYXRlXCIpKV1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgX3ZtLmNsb3NlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3YoXCJDYW5jZWxcIildXG4gICAgICApXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2wtY2VudGVyLWluXCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJmb3JtXCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImNsLWlubGluZS1wYWRkZWRcIixcbiAgICAgICAgb246IHtcbiAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIF92bS5zdWJtaXQoKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICBfYyhcImxhYmVsXCIsIFtcbiAgICAgICAgICAgIF92bS5fdihcIlRlYW0gTmFtZXNcIiksXG4gICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm5hbWVzLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJuYW1lc1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICByZWY6IFwibmFtZXNcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgcm93czogXCIxNVwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ubmFtZXMgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBfdm0ubmFtZXMgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2wtZGlhbG9nLWJvdHRvbVwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIF92bS5zdWJtaXQoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdihcIlNldCBOYW1lc1wiKV1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgX3ZtLmNsb3NlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3YoXCJDYW5jZWxcIildXG4gICAgICApXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2wtdGVhbWluZy1lZGl0b3JcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgW1xuICAgICAgX2MoXCJmb3JtXCIsIFtcbiAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICBfYyhcImxhYmVsXCIsIFtcbiAgICAgICAgICAgIF92bS5fdihcIlRhZ1wiKSxcbiAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS50ZWFtaW5nLnRhZyxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidGVhbWluZy50YWdcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgcmVmOiBcInRhZ1wiLFxuICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnRlYW1pbmcudGFnIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnRlYW1pbmcsIFwidGFnXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgIF9jKFwibGFiZWxcIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiTmFtZVwiKSxcbiAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS50ZWFtaW5nLm5hbWUsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInRlYW1pbmcubmFtZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnRlYW1pbmcubmFtZSB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS50ZWFtaW5nLCBcIm5hbWVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlclwiIH0sIFtcbiAgICAgICAgICBfYyhcImxhYmVsXCIsIFtcbiAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnRlYW1pbmcucHVibGljLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ0ZWFtaW5nLnB1YmxpY1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImNoZWNrYm94XCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICBjaGVja2VkOiBBcnJheS5pc0FycmF5KF92bS50ZWFtaW5nLnB1YmxpYylcbiAgICAgICAgICAgICAgICAgID8gX3ZtLl9pKF92bS50ZWFtaW5nLnB1YmxpYywgbnVsbCkgPiAtMVxuICAgICAgICAgICAgICAgICAgOiBfdm0udGVhbWluZy5wdWJsaWNcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgdmFyICQkYSA9IF92bS50ZWFtaW5nLnB1YmxpYyxcbiAgICAgICAgICAgICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgICAgICQkYyA9ICQkZWwuY2hlY2tlZCA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoJCRhKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgJCR2ID0gbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAkJGkgPSBfdm0uX2koJCRhLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgIGlmICgkJGVsLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAkJGkgPCAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0udGVhbWluZywgXCJwdWJsaWNcIiwgJCRhLmNvbmNhdChbJCR2XSkpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgJCRpID4gLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udGVhbWluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwdWJsaWNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJCRhLnNsaWNlKDAsICQkaSkuY29uY2F0KCQkYS5zbGljZSgkJGkgKyAxKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnRlYW1pbmcsIFwicHVibGljXCIsICQkYylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFB1YmxpY1wiKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LCBbXG4gICAgX3ZtLnRlYW1pbmdzICE9PSBudWxsXG4gICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZnVsbFwiIH0sIFtcbiAgICAgICAgICBfdm0udGVhbWluZ3MubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcInRhYmxlXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0udGVhbWluZ3MsIGZ1bmN0aW9uKHRlYW1pbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgeyBrZXk6IHRlYW1pbmcuaWQgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVkaXRlcih0ZWFtaW5nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdCArIFwiL3ZlbmRvci9jbC9zaXRlL2ltZy9wZW5jaWwxNi5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIkVkaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRWRpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY29waWVyKHRlYW1pbmcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yb290ICsgXCIvdmVuZG9yL2NsL3NpdGUvaW1nL2NvcHkxNi5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIkNvcHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQ29weVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGVsZXRlcih0ZWFtaW5nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLnJvb3QgKyBcIi92ZW5kb3IvY2wvc2l0ZS9pbWcveC5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIkRlbGV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJEZWxldGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IF92bS5yb290ICsgXCIvY2wvY29uc29sZS90ZWFtL1wiICsgdGVhbWluZy5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3ModGVhbWluZy50YWcpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh0ZWFtaW5nLm5hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHRlYW1pbmcucHVibGljID8gXCJQdWJsaWNcIiA6IFwiUHJpdmF0ZVwiKSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIlRoZXJlIGFyZSBjdXJyZW50bHkgbm8gZGVmaW5lZCB0ZWFtaW5ncy5cIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwiQ2hvb3NlIEFkZCBUZWFtaW5nIHRvIGFkZCBhIG5ldyB0ZWFtaW5nLlwiKV0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICA6IF92bS5fZSgpXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRyXCIsIFtcbiAgICAgIF9jKFwidGhcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiVGFnXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiTmFtZVwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlZpc2liaWxpdHlcIildKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LCBbXG4gICAgX3ZtLnRlYW1zICE9PSBudWxsXG4gICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZnVsbCBjbC10ZWFtcy1lZGl0b3JcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInRhYmxlXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNtYWxsXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS50ZWFtcywgZnVuY3Rpb24odGVhbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICBfYyhcInRyXCIsIHsga2V5OiB0ZWFtLmlkLCBzdGF0aWNDbGFzczogXCJjbC1pbnRlcm5hbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicmlnaHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlYW0ubmFtZSAhPT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZWRpdGVyKHRlYW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yb290ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi92ZW5kb3IvY2wvc2l0ZS9pbWcvcGVuY2lsMTYucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJFZGl0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkVkaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlbGV0ZXIodGVhbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJvb3QgKyBcIi92ZW5kb3IvY2wvc2l0ZS9pbWcveC5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIkRlbGV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJEZWxldGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlYW0ubmFtZSA9PT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbC1tZW51XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IFwiYWRkLWNsYXNzXCI6IFwiY2wtaW5saW5lXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImFcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvdmVuZG9yL2NsL3NpdGUvaW1nL21lbnViYXJzLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidWxcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpc3RyaWJ1dGUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkRpc3RyaWJ1dGVcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRvZ2dsZSh0ZWFtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNpdGUucm9vdCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvdmVuZG9yL2NsL3NpdGUvaW1nL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoX3ZtLm9wZW5bdGVhbS5pZF0gPT09IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJtaW51cy5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInBsdXMucG5nXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xzcGFuOiBcIjJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS50ZWFtSGVhZGluZyh0ZWFtKSkgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHRlYW0ubWVtYmVycy5sZW5ndGgpKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLm9wZW5bdGVhbS5pZF0gPT09IHRydWVcbiAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZWFtLm1lbWJlcnMubGVuZ3RoID09PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sc3BhbjogXCI0XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiKioqIGVtcHR5ICoqKlwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbCh0ZWFtLm1lbWJlcnMsIGZ1bmN0aW9uKG1lbWJlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInJpZ2h0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJjbC1tZW51XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImFcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yb290ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL3ZlbmRvci9jbC9zaXRlL2ltZy9tZW51YmFycy5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnRlYW1zLCBmdW5jdGlvbih0ZWFtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm1vdmUobWVtYmVyLCB0ZWFtMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtMS5uYW1lICE9PSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGVhbTEubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiVW5hc3NpZ25lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtID09PSB0ZWFtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yb290ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL3ZlbmRvci9jbC9zaXRlL2ltZy9jaGVjazE2LnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGhyZWY6IFwibWFpbHRvOlwiICsgbWVtYmVyLmVtYWlsIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MobWVtYmVyLnVzZXIpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MobWVtYmVyLm5hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImVtXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS50b3RhbHMpKV0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIDogX3ZtLl9lKClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGVhbWluZ0VkaXRvci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjM5ODhlMzIwXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UZWFtaW5nRWRpdG9yLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGVhbWluZ0VkaXRvci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGVhbXNFZGl0b3IudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIwNGIxNDdkMlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGVhbXNFZGl0b3IudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UZWFtc0VkaXRvci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvKipcclxuICogQGZpbGUgTWVtYmVyIG9mIGEgY291cnNlXHJcbiAqIEF0dGFjaGVzIHRvIGEgdXNlciBPYmplY3RcclxuICovXHJcblxyXG5pbXBvcnQge01lbWJlcnNoaXB9IGZyb20gJy4uLy4uLy4uL3VzZXJzL2pzL1VzZXJzL01lbWJlcnNoaXAuanMnO1xyXG5cclxubGV0IE1lbWJlciA9IGZ1bmN0aW9uKGpzb24pIHtcclxuICAgIE1lbWJlcnNoaXAuY2FsbCh0aGlzKTtcclxuXHJcbiAgICBsZXQgcm9sZSA9ICdHJztcclxuXHJcbiAgICBpZihqc29uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLmlkID0ganNvbi5pZDtcclxuICAgICAgICB0aGlzLnNlbWVzdGVyID0ganNvbi5zZW1lc3RlcjtcclxuICAgICAgICB0aGlzLnNlY3Rpb24gPSBqc29uLnNlY3Rpb247XHJcbiAgICAgICAgcm9sZSA9IGpzb24ucm9sZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IDA7ICAgIC8vIFN5c3RlbSBtZW1iZXJzaGlwIElEXHJcbiAgICAgICAgdGhpcy5zZW1lc3RlciA9IG51bGw7ICAgLy8gU2VtZXN0ZXIgY29kZVxyXG4gICAgICAgIHRoaXMuc2VjdGlvbiA9IG51bGw7ICAvLyBTZWN0aW9uIElkXHJcbiAgICAgICAgcm9sZSA9IG51bGw7ICAgICAgIC8vIE1lbWJlcnNoaXAgcm9sZVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucm9sZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiByb2xlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0Um9sZSA9IGZ1bmN0aW9uKHJvbGVfKSB7XHJcbiAgICAgICAgcm9sZSA9IHJvbGVfO1xyXG4gICAgfVxyXG59XHJcblxyXG5NZW1iZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShNZW1iZXJzaGlwLnByb3RvdHlwZSk7XHJcbk1lbWJlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBNZW1iZXI7XHJcblxyXG4vKipcclxuICogR2V0IHRoZSBjb3Vyc2Ugc2VjdGlvbiBmb3IgYSBtZW1iZXJcclxuICogQHBhcmFtIHN0b3JlIFZ1ZXggc3RvcmVcclxuICogQHJldHVybnMgeyp9XHJcbiAqL1xyXG5NZW1iZXIucHJvdG90eXBlLmdldFNlY3Rpb24gPSBmdW5jdGlvbihzdG9yZSkge1xyXG4gICAgcmV0dXJuIHN0b3JlLmdldHRlcnNbJ2NvdXJzZS9zZWN0aW9uJ10odGhpcy5zZW1lc3RlciwgdGhpcy5zZWN0aW9uKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBhbiBhc3NpZ25tZW50IGZvciBhIG1lbWJlclxyXG4gKiBAcGFyYW0gc3RvcmUgVnVleCBzdG9yZVxyXG4gKiBAcGFyYW0gYXNzaWdudGFnIEFzc2lnbm1lbnQgdGFnXHJcbiAqL1xyXG5NZW1iZXIucHJvdG90eXBlLmdldEFzc2lnbm1lbnQgPSBmdW5jdGlvbihzdG9yZSwgYXNzaWdudGFnKSB7XHJcbiAgICBjb25zdCBzZWN0aW9uID0gdGhpcy5nZXRTZWN0aW9uKHN0b3JlKTtcclxuICAgIHJldHVybiBzZWN0aW9uLmdldEFzc2lnbm1lbnQoYXNzaWdudGFnKTtcclxufVxyXG5cclxuXHJcbi8vIFRoZSBwb3NzaWJsZSBtZW1iZXIgcm9sZXNcclxuLy8gTXVzdCBtYXRjaCB2YWx1ZXMgaW4gTWVtYmVyLnBocFxyXG5NZW1iZXIuR1VFU1QgPSAnRyc7ICAgICAvLy88IEd1ZXN0IHVzZXIgdmlzaXRpbmcgdGhlIHNpdGVcclxuTWVtYmVyLlVTRVIgPSAnVSc7ICAgICAgLy8vPCBTdGFuZGFyZCB1c2VyIGZyb20gVXNlciwgZG9uJ3QgdXNlIGZvciBNZW1iZXJcclxuTWVtYmVyLkRST1BQRUQgPSAnRCc7ICAgLy8vPCBVc2VyIGhhcyBkcm9wcGVkIHRoZSBjb3Vyc2VcclxuTWVtYmVyLlNUVURFTlQgPSAnVCc7ICAgLy8vPCBFbnJvbGxlZCBzdHVkZW50IGluIGNvdXJzZVxyXG5NZW1iZXIuU1RBRkYgPSAnUyc7ICAgICAvLy88IEFueSBjb3Vyc2Ugc3RhZmZcclxuTWVtYmVyLkdSQURFUiA9ICdSJzsgICAgLy8vPCBHcmFkZXJzXHJcbk1lbWJlci5VTEEgPSAnTCc7ICAgICAgIC8vLzwgVW5kZXJncmFkdWF0ZSBMZWFybmluZyBBc3Npc3RhbnRcclxuTWVtYmVyLlRBID0gJ0UnOyAgICAgICAgLy8vPCBUZWFjaGluZyBhc3Npc3RhbnRcclxuTWVtYmVyLklOU1RSVUNUT1IgPSAnSSc7ICAgIC8vLzwgQ291cnNlIGluc3RydWN0b3JcclxuTWVtYmVyLkFETUlOID0gJ0EnOyAgICAgLy8vPCBBZG1pblxyXG5cclxuTWVtYmVyLnByb3RvdHlwZS5nZXRSb2xlcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IHJvbGVzID0ge307XHJcbiAgICByb2xlc1tNZW1iZXIuR1VFU1RdID0ge25hbWU6ICdHdWVzdCcsIHByaW9yaXR5OiAxfTtcclxuICAgIHJvbGVzW01lbWJlci5EUk9QUEVEXSA9IHtuYW1lOiAnRHJvcHBlZCcsIHByaW9yaXR5OiAyfTtcclxuICAgIHJvbGVzW01lbWJlci5VU0VSXSA9IHtuYW1lOiAnVXNlcicsIHByaW9yaXR5OiAzLCBza2lwOiB0cnVlfTtcclxuICAgIHJvbGVzW01lbWJlci5TVFVERU5UXSA9IHtuYW1lOiAnU3R1ZGVudCcsIHByaW9yaXR5OiA0fTtcclxuICAgIHJvbGVzW01lbWJlci5TVEFGRl0gPSB7bmFtZTogJ1N0YWZmJywgcHJpb3JpdHk6IDUsIHNraXA6IHRydWV9O1xyXG5cdHJvbGVzW01lbWJlci5HUkFERVJdID0ge25hbWU6ICdHcmFkZXInLCBwcmlvcml0eTogNn07XHJcblx0cm9sZXNbTWVtYmVyLlVMQV0gPSB7bmFtZTogJ1VuZGVyZ3JhZHVhdGUgTGVhcm5pbmcgQXNzaXN0YW50Jywgc2hvcnQ6ICdVTEEnLCBwcmlvcml0eTogN307XHJcbiAgICByb2xlc1tNZW1iZXIuVEFdID0ge25hbWU6ICdUZWFjaGluZyBBc3Npc3RhbnQnLCBwcmlvcml0eTogOH07XHJcbiAgICByb2xlc1tNZW1iZXIuSU5TVFJVQ1RPUl0gPSB7bmFtZTogJ0luc3RydWN0b3InLCBwcmlvcml0eTogOX07XHJcbiAgICByb2xlc1tNZW1iZXIuQURNSU5dID0ge25hbWU6ICdBZG1pbicsIHByaW9yaXR5OiAxMDB9O1xyXG5cclxuICAgIHJldHVybiByb2xlcztcclxufVxyXG5cclxuXHJcbmV4cG9ydCB7TWVtYmVyfTtcclxuXHJcblxyXG5cclxuIiwidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1Z1ZURpYWxvZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Z1ZURpYWxvZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXERvY3VtZW50c1xcXFxDbGFzc2VzXFxcXENTRTMyMFxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzI1MDIwNTBhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzI1MDIwNTBhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIFxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9zaXRlL2pzL1Z1ZS9WdWVEaWFsb2cudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVnVlRGlhbG9nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVnVlRGlhbG9nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBUaGUgbWFpbiBUZWFtIGVudHJ5IHBvaW50XHJcbiAqL1xyXG5cclxuaW1wb3J0IHtUZWFtRmFjdG9yeX0gZnJvbSBcIi4vanMvVGVhbUZhY3RvcnlcIjtcclxuaW1wb3J0IHtUZWFtQ29uc29sZX0gZnJvbSAnLi9qcy9Db25zb2xlL1RlYW1Db25zb2xlJztcclxuXHJcbi8vXHJcbi8vIENyZWF0ZSB0aGUgdGVhbSBydW50aW1lIGNvbXBvbmVudFxyXG4vL1xyXG5UZWFtRmFjdG9yeS5jcmVhdGUoU2l0ZS5zaXRlKTtcclxuXHJcbi8vXHJcbi8vIEluc3RhbGwgdGhlIGNvbnNvbGUgY29tcG9uZW50c1xyXG4vL1xyXG5cclxuaWYoU2l0ZS5zaXRlLmNvbnNvbGUgIT09IHVuZGVmaW5lZCkge1xyXG5cdFRlYW1Db25zb2xlLnNldHVwKFNpdGUuc2l0ZS5jb25zb2xlKTtcclxufVxyXG4iLCJpbXBvcnQge01lbWJlcn0gZnJvbSBcImNvdXJzZS1jbC9qcy9NZW1iZXJzL01lbWJlclwiO1xyXG5pbXBvcnQgVGVhbWluZ3NFZGl0b3JWdWUgZnJvbSAnLi9UZWFtaW5nc0VkaXRvci52dWUnO1xyXG5pbXBvcnQgVGVhbXNFZGl0b3JWdWUgZnJvbSAnLi9UZWFtc0VkaXRvci52dWUnO1xyXG5cclxuLyoqXHJcbiAqIEBmaWxlXHJcbiAqIFRlYW0gc3lzdGVtIGNvbnNvbGUgY29tcG9uZW50c1xyXG4gKi9cclxuXHJcbmV4cG9ydCBsZXQgVGVhbUNvbnNvbGUgPSBmdW5jdGlvbigpIHtcclxufVxyXG5cclxuVGVhbUNvbnNvbGUuc2V0dXAgPSBmdW5jdGlvbihDb25zb2xlKSB7XHJcbiAgICBDb25zb2xlLnRhYmxlcy5hZGQoe1xyXG4gICAgICAgIHRpdGxlOiAnVGVhbXMnLFxyXG4gICAgICAgIG9yZGVyOiAzNSxcclxuICAgICAgICBhcGk6ICcvYXBpL3RlYW0vdGFibGVzJ1xyXG4gICAgfSk7XHJcblxyXG5cdGNvbnN0IHBhZ2UgPSB7dGl0bGU6ICdNYWluJywgcm91dGU6ICcnLCBvcmRlcjogMX07XHJcblxyXG5cdENvbnNvbGUuY29tcG9uZW50cy5hZGRPcHRpb24oe1xyXG5cdFx0YXRMZWFzdDogTWVtYmVyLlRBLFxyXG5cdFx0cGFnZTogcGFnZSxcclxuXHRcdHNlY3Rpb246IHt0aXRsZTogJ0NvdXJzZScsIG9yZGVyOiA1fSxcclxuXHRcdHRpdGxlOiAnVGVhbXMnLFxyXG5cdFx0b3JkZXI6IDEwLFxyXG5cdFx0cm91dGU6ICcvdGVhbXMnLFxyXG5cdFx0cm91dGVzOiBbXHJcblx0XHRcdHtyb3V0ZTogJy90ZWFtcycsIGNvbXBvbmVudDogVGVhbWluZ3NFZGl0b3JWdWV9XHJcblx0XHRdXHJcblx0fSk7XHJcblxyXG5cdENvbnNvbGUuY29tcG9uZW50cy5hZGRSb3V0ZXMoW1xyXG5cdFx0e3JvdXRlOiAnL3RlYW0vOmlkJywgY29tcG9uZW50OiBUZWFtc0VkaXRvclZ1ZSwgcHJvcHM6IHRydWV9XHJcblx0XSk7XHJcblxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1RlYW1EaXN0cmlidXRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTE0ODJkYWImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVGVhbURpc3RyaWJ1dGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVGVhbURpc3RyaWJ1dGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTE0ODJkYWInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTE0ODJkYWInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1RlYW1EaXN0cmlidXRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTE0ODJkYWImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTE0ODJkYWInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC90ZWFtL2pzL0NvbnNvbGUvVGVhbURpc3RyaWJ1dGVyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RlYW1EaXN0cmlidXRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RlYW1EaXN0cmlidXRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGVhbURpc3RyaWJ1dGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MTQ4MmRhYiZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVGVhbUVkaXRvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmNlN2FiNjMmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVGVhbUVkaXRvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1RlYW1FZGl0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxjaGFybFxcXFxEb2N1bWVudHNcXFxcQ2xhc3Nlc1xcXFxDU0UzMjBcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyY2U3YWI2MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyY2U3YWI2MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVGVhbUVkaXRvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmNlN2FiNjMmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMmNlN2FiNjMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC90ZWFtL2pzL0NvbnNvbGUvVGVhbUVkaXRvci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UZWFtRWRpdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGVhbUVkaXRvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGVhbUVkaXRvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmNlN2FiNjMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1RlYW1OYW1lTG9hZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNzg0YmNmNCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9UZWFtTmFtZUxvYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1RlYW1OYW1lTG9hZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMTc4NGJjZjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMTc4NGJjZjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1RlYW1OYW1lTG9hZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNzg0YmNmNCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxNzg0YmNmNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL3RlYW0vanMvQ29uc29sZS9UZWFtTmFtZUxvYWRlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UZWFtTmFtZUxvYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RlYW1OYW1lTG9hZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UZWFtTmFtZUxvYWRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTc4NGJjZjQmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1RlYW1pbmdFZGl0b3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ2YzFjNmVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1RlYW1pbmdFZGl0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9UZWFtaW5nRWRpdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9UZWFtaW5nRWRpdG9yLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDZjMWM2ZWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDZjMWM2ZWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1RlYW1pbmdFZGl0b3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ2YzFjNmVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQ2YzFjNmVlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvdGVhbS9qcy9Db25zb2xlL1RlYW1pbmdFZGl0b3IudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGVhbWluZ0VkaXRvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RlYW1pbmdFZGl0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UZWFtaW5nRWRpdG9yLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UZWFtaW5nRWRpdG9yLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UZWFtaW5nRWRpdG9yLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NmMxYzZlZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVGVhbWluZ3NFZGl0b3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWUzMWEyMDE4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1RlYW1pbmdzRWRpdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVGVhbWluZ3NFZGl0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxjaGFybFxcXFxEb2N1bWVudHNcXFxcQ2xhc3Nlc1xcXFxDU0UzMjBcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdlMzFhMjAxOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdlMzFhMjAxOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVGVhbWluZ3NFZGl0b3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWUzMWEyMDE4JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2UzMWEyMDE4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvdGVhbS9qcy9Db25zb2xlL1RlYW1pbmdzRWRpdG9yLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RlYW1pbmdzRWRpdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGVhbWluZ3NFZGl0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RlYW1pbmdzRWRpdG9yLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lMzFhMjAxOCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVGVhbXNFZGl0b3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ3M2MzYzVhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1RlYW1zRWRpdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVGVhbXNFZGl0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1RlYW1zRWRpdG9yLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDczYzNjNWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDczYzNjNWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1RlYW1zRWRpdG9yLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NzNjM2M1YSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0NzNjM2M1YScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL3RlYW0vanMvQ29uc29sZS9UZWFtc0VkaXRvci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UZWFtc0VkaXRvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RlYW1zRWRpdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGVhbXNFZGl0b3IudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RlYW1zRWRpdG9yLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UZWFtc0VkaXRvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDczYzNjNWEmXCIiLCJcclxuZXhwb3J0IGNvbnN0IFRlYW0gPSBmdW5jdGlvbihkYXRhKSB7XHJcblx0aWYoZGF0YSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHR0aGlzLm5hbWUgPSBkYXRhLm5hbWU7XHJcblx0XHR0aGlzLmlkID0gZGF0YS5pZDtcclxuXHRcdHRoaXMubWVtYmVycyA9IGRhdGEubWVtYmVycztcclxuXHR9IGVsc2Uge1xyXG5cdFx0dGhpcy5uYW1lID0gJyc7XHJcblx0XHR0aGlzLmlkID0gMDtcclxuXHRcdHRoaXMubWVtYmVycyA9IFtdO1xyXG5cdH1cclxuXHJcblx0dGhpcy5jbG9uZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIG5ldyBUZWFtKHRoaXMpO1xyXG5cdH1cclxufSIsImltcG9ydCB7VGVhbX0gZnJvbSBcIi4vVGVhbVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRlYW1GYWN0b3J5ID0gZnVuY3Rpb24oKSB7XHJcbn1cclxuXHJcblRlYW1GYWN0b3J5LmNyZWF0ZSA9IGZ1bmN0aW9uKHNpdGUpIHtcclxuXHJcblx0bmV3IFRlYW0oc2l0ZSk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIE9iamVjdCB0aGUgcmVwcmVzZW50cyBhIHRlYW1pbmdcclxuICogQHBhcmFtIGRhdGFcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgVGVhbWluZyA9IGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRpZihkYXRhICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdHRoaXMuaWQgPSBkYXRhLmlkO1xyXG5cdFx0dGhpcy50YWcgPSBkYXRhLnRhZztcclxuXHRcdHRoaXMubmFtZSA9IGRhdGEubmFtZTtcclxuXHRcdHRoaXMucHVibGljID0gZGF0YS5wdWJsaWM7XHJcblx0fSBlbHNlIHtcclxuXHRcdHRoaXMuaWQgPSAwO1xyXG5cdFx0dGhpcy50YWcgPSAnJztcclxuXHRcdHRoaXMubmFtZSA9ICcnO1xyXG5cdFx0dGhpcy5wdWJsaWMgPSB0cnVlO1xyXG5cdH1cclxuXHJcblx0dGhpcy5jbG9uZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIG5ldyBUZWFtaW5nKHRoaXMpO1xyXG5cdH1cclxufSIsIi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBBIG1lbWJlcnNoaXAgYXNzb2NpYXRlZCB3aXRoIGEgdXNlci5cclxuICpcclxuICogVGhpcyBpcyBhIGJhc2Ugb2JqZWN0IHRoYXQgd2lsbCBiZSBpbmhlcml0ZWQgYnlcclxuICogYWN0dWFsIG1lbWJlcnNoaXAgb2JqZWN0cy5cclxuICovXHJcblxyXG52YXIgTWVtYmVyc2hpcCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIC8vLyBUaGUgVXNlciBvYmplY3QgZm9yIHRoaXMgbWVtYmVyc2hpcFxyXG4gICAgdGhpcy51c2VyID0gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IHtNZW1iZXJzaGlwfTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==