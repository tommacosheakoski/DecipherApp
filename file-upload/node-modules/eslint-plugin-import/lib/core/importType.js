'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _slicedToArray = function () {function sliceIterator(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"]) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}return function (arr, i) {if (Array.isArray(arr)) {return arr;} else if (Symbol.iterator in Object(arr)) {return sliceIterator(arr, i);} else {throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();exports.














isAbsolute = isAbsolute;exports.




isBuiltIn = isBuiltIn;exports.






isExternalModule = isExternalModule;exports.






isExternalModuleMain = isExternalModuleMain;exports.
































isScoped = isScoped;exports.




isScopedMain = isScopedMain;exports['default'] =






























resolveImportType;var _path = require('path');var _isCoreModule = require('is-core-module');var _isCoreModule2 = _interopRequireDefault(_isCoreModule);var _resolve = require('eslint-module-utils/resolve');var _resolve2 = _interopRequireDefault(_resolve);var _packagePath = require('./packagePath');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}function baseModule(name) {if (isScoped(name)) {var _name$split = name.split('/'),_name$split2 = _slicedToArray(_name$split, 2),scope = _name$split2[0],_pkg = _name$split2[1];return String(scope) + '/' + String(_pkg);}var _name$split3 = name.split('/'),_name$split4 = _slicedToArray(_name$split3, 1),pkg = _name$split4[0];return pkg;}function isAbsolute(name) {return (0, _path.isAbsolute)(name);} // path is defined only when a resolver resolves to a non-standard path
function isBuiltIn(name, settings, path) {if (path || !name) return false;var base = baseModule(name);var extras = settings && settings['import/core-modules'] || [];return (0, _isCoreModule2['default'])(base) || extras.indexOf(base) > -1;}function isExternalModule(name, settings, path, context) {if (arguments.length < 4) {throw new TypeError('isExternalModule: name, settings, path, and context are all required');}return (isModule(name) || isScoped(name)) && isExternalPath(name, settings, path, (0, _packagePath.getContextPackagePath)(context));}function isExternalModuleMain(name, settings, path, context) {return isModuleMain(name) && isExternalPath(name, settings, path, (0, _packagePath.getContextPackagePath)(context));}function isExternalPath(name, settings, path, packagePath) {var internalScope = settings && settings['import/internal-regex'];if (internalScope && new RegExp(internalScope).test(name)) {return false;}if (!path || (0, _path.relative)(packagePath, path).startsWith('..')) {return true;}var folders = settings && settings['import/external-module-folders'] || ['node_modules'];return folders.some(function (folder) {var folderPath = (0, _path.resolve)(packagePath, folder);var relativePath = (0, _path.relative)(folderPath, path);return !relativePath.startsWith('..');});}var moduleRegExp = /^\w/;function isModule(name) {return name && moduleRegExp.test(name);}var moduleMainRegExp = /^[\w]((?!\/).)*$/;function isModuleMain(name) {return name && moduleMainRegExp.test(name);}var scopedRegExp = /^@[^/]+\/?[^/]+/;function isScoped(name) {return name && scopedRegExp.test(name);}var scopedMainRegExp = /^@[^/]+\/?[^/]+$/;function isScopedMain(name) {return name && scopedMainRegExp.test(name);}function isRelativeToParent(name) {return (/^\.\.$|^\.\.[\\/]/.test(name));}var indexFiles = ['.', './', './index', './index.js'];function isIndex(name) {return indexFiles.indexOf(name) !== -1;}function isRelativeToSibling(name) {return (/^\.[\\/]/.test(name));}function typeTest(name, context, path) {var settings = context.settings;if (isAbsolute(name, settings, path)) {return 'absolute';}if (isBuiltIn(name, settings, path)) {return 'builtin';}if (isModule(name, settings, path) || isScoped(name, settings, path)) {var packagePath = (0, _packagePath.getContextPackagePath)(context);return isExternalPath(name, settings, path, packagePath) ? 'external' : 'internal';}if (isRelativeToParent(name, settings, path)) {return 'parent';}if (isIndex(name, settings, path)) {return 'index';}if (isRelativeToSibling(name, settings, path)) {return 'sibling';}return 'unknown';}function resolveImportType(name, context) {return typeTest(name, context, (0, _resolve2['default'])(name, context));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL2ltcG9ydFR5cGUuanMiXSwibmFtZXMiOlsiaXNBYnNvbHV0ZSIsImlzQnVpbHRJbiIsImlzRXh0ZXJuYWxNb2R1bGUiLCJpc0V4dGVybmFsTW9kdWxlTWFpbiIsImlzU2NvcGVkIiwiaXNTY29wZWRNYWluIiwicmVzb2x2ZUltcG9ydFR5cGUiLCJiYXNlTW9kdWxlIiwibmFtZSIsInNwbGl0Iiwic2NvcGUiLCJwa2ciLCJzZXR0aW5ncyIsInBhdGgiLCJiYXNlIiwiZXh0cmFzIiwiaW5kZXhPZiIsImNvbnRleHQiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJUeXBlRXJyb3IiLCJpc01vZHVsZSIsImlzRXh0ZXJuYWxQYXRoIiwiaXNNb2R1bGVNYWluIiwicGFja2FnZVBhdGgiLCJpbnRlcm5hbFNjb3BlIiwiUmVnRXhwIiwidGVzdCIsInN0YXJ0c1dpdGgiLCJmb2xkZXJzIiwic29tZSIsImZvbGRlciIsImZvbGRlclBhdGgiLCJyZWxhdGl2ZVBhdGgiLCJtb2R1bGVSZWdFeHAiLCJtb2R1bGVNYWluUmVnRXhwIiwic2NvcGVkUmVnRXhwIiwic2NvcGVkTWFpblJlZ0V4cCIsImlzUmVsYXRpdmVUb1BhcmVudCIsImluZGV4RmlsZXMiLCJpc0luZGV4IiwiaXNSZWxhdGl2ZVRvU2libGluZyIsInR5cGVUZXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFlZ0JBLFUsR0FBQUEsVTs7Ozs7QUFLQUMsUyxHQUFBQSxTOzs7Ozs7O0FBT0FDLGdCLEdBQUFBLGdCOzs7Ozs7O0FBT0FDLG9CLEdBQUFBLG9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQ0FDLFEsR0FBQUEsUTs7Ozs7QUFLQUMsWSxHQUFBQSxZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0JRQyxpQixDQXZHeEIsNEJBQ0EsOEMsMkRBRUEsc0QsaURBQ0EsNEMsK0ZBRUEsU0FBU0MsVUFBVCxDQUFvQkMsSUFBcEIsRUFBMEIs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QXlCQyxJQUF6QixLQUFrQ1QsU0FBU0ksSUFBVCxFQUFlSSxRQUFmLEVBQXlCQyxJQUF6QixDQUF0QyxFQUFzRSxDQUNwRSxJQUFNVyxjQUFjLHdDQUFzQlAsT0FBdEIsQ0FBcEIsQ0FDQSxPQUFPSyxlQUFlZCxJQUFmLEVBQXFCSSxRQUFyQixFQUErQkMsSUFBL0IsRUFBcUNXLFdBQXJDLElBQW9ELFVBQXBELEdBQWlFLFVBQXhFLENBQ0QsQ0FDRCxJQUFJYyxtQkFBbUI5QixJQUFuQixFQUF5QkksUUFBekIsRUFBbUNDLElBQW5DLENBQUosRUFBOEMsQ0FBRSxPQUFPLFFBQVAsQ0FBa0IsQ0FDbEUsSUFBSTJCLFFBQVFoQyxJQUFSLEVBQWNJLFFBQWQsRUFBd0JDLElBQXhCLENBQUosRUFBbUMsQ0FBRSxPQUFPLE9BQVAsQ0FBaUIsQ0FDdEQsSUFBSTRCLG9CQUFvQmpDLElBQXBCLEVBQTBCSSxRQUExQixFQUFvQ0MsSUFBcEMsQ0FBSixFQUErQyxDQUFFLE9BQU8sU0FBUCxDQUFtQixDQUNwRSxPQUFPLFNBQVAsQ0FDRCxDQUVjLFNBQVNQLGlCQUFULENBQTJCRSxJQUEzQixFQUFpQ1MsT0FBakMsRUFBMEMsQ0FDdkQsT0FBT3lCLFNBQVNsQyxJQUFULEVBQWVTLE9BQWYsRUFBd0IsMEJBQVFULElBQVIsRUFBY1MsT0FBZCxDQUF4QixDQUFQO0FBQ0QiLCJmaWxlIjoiaW1wb3J0VHlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzQWJzb2x1dGUgYXMgbm9kZUlzQWJzb2x1dGUsIHJlbGF0aXZlLCByZXNvbHZlIGFzIG5vZGVSZXNvbHZlIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgaXNDb3JlTW9kdWxlIGZyb20gJ2lzLWNvcmUtbW9kdWxlJztcblxuaW1wb3J0IHJlc29sdmUgZnJvbSAnZXNsaW50LW1vZHVsZS11dGlscy9yZXNvbHZlJztcbmltcG9ydCB7IGdldENvbnRleHRQYWNrYWdlUGF0aCB9IGZyb20gJy4vcGFja2FnZVBhdGgnO1xuXG5mdW5jdGlvbiBiYXNlTW9kdWxlKG5hbWUpIHtcbiAgaWYgKGlzU2NvcGVkKG5hbWUpKSB7XG4gICAgY29uc3QgW3Njb3BlLCBwa2ddID0gbmFtZS5zcGxpdCgnLycpO1xuICAgIHJldHVybiBgJHtzY29wZX0vJHtwa2d9YDtcbiAgfVxuICBjb25zdCBbcGtnXSA9IG5hbWUuc3BsaXQoJy8nKTtcbiAgcmV0dXJuIHBrZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQWJzb2x1dGUobmFtZSkge1xuICByZXR1cm4gbm9kZUlzQWJzb2x1dGUobmFtZSk7XG59XG5cbi8vIHBhdGggaXMgZGVmaW5lZCBvbmx5IHdoZW4gYSByZXNvbHZlciByZXNvbHZlcyB0byBhIG5vbi1zdGFuZGFyZCBwYXRoXG5leHBvcnQgZnVuY3Rpb24gaXNCdWlsdEluKG5hbWUsIHNldHRpbmdzLCBwYXRoKSB7XG4gIGlmIChwYXRoIHx8ICFuYW1lKSByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IGJhc2UgPSBiYXNlTW9kdWxlKG5hbWUpO1xuICBjb25zdCBleHRyYXMgPSAoc2V0dGluZ3MgJiYgc2V0dGluZ3NbJ2ltcG9ydC9jb3JlLW1vZHVsZXMnXSkgfHwgW107XG4gIHJldHVybiBpc0NvcmVNb2R1bGUoYmFzZSkgfHwgZXh0cmFzLmluZGV4T2YoYmFzZSkgPiAtMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRXh0ZXJuYWxNb2R1bGUobmFtZSwgc2V0dGluZ3MsIHBhdGgsIGNvbnRleHQpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCA0KSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignaXNFeHRlcm5hbE1vZHVsZTogbmFtZSwgc2V0dGluZ3MsIHBhdGgsIGFuZCBjb250ZXh0IGFyZSBhbGwgcmVxdWlyZWQnKTtcbiAgfVxuICByZXR1cm4gKGlzTW9kdWxlKG5hbWUpIHx8IGlzU2NvcGVkKG5hbWUpKSAmJiBpc0V4dGVybmFsUGF0aChuYW1lLCBzZXR0aW5ncywgcGF0aCwgZ2V0Q29udGV4dFBhY2thZ2VQYXRoKGNvbnRleHQpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRXh0ZXJuYWxNb2R1bGVNYWluKG5hbWUsIHNldHRpbmdzLCBwYXRoLCBjb250ZXh0KSB7XG4gIHJldHVybiBpc01vZHVsZU1haW4obmFtZSkgJiYgaXNFeHRlcm5hbFBhdGgobmFtZSwgc2V0dGluZ3MsIHBhdGgsIGdldENvbnRleHRQYWNrYWdlUGF0aChjb250ZXh0KSk7XG59XG5cbmZ1bmN0aW9uIGlzRXh0ZXJuYWxQYXRoKG5hbWUsIHNldHRpbmdzLCBwYXRoLCBwYWNrYWdlUGF0aCkge1xuICBjb25zdCBpbnRlcm5hbFNjb3BlID0gKHNldHRpbmdzICYmIHNldHRpbmdzWydpbXBvcnQvaW50ZXJuYWwtcmVnZXgnXSk7XG4gIGlmIChpbnRlcm5hbFNjb3BlICYmIG5ldyBSZWdFeHAoaW50ZXJuYWxTY29wZSkudGVzdChuYW1lKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICghcGF0aCB8fCByZWxhdGl2ZShwYWNrYWdlUGF0aCwgcGF0aCkuc3RhcnRzV2l0aCgnLi4nKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY29uc3QgZm9sZGVycyA9IChzZXR0aW5ncyAmJiBzZXR0aW5nc1snaW1wb3J0L2V4dGVybmFsLW1vZHVsZS1mb2xkZXJzJ10pIHx8IFsnbm9kZV9tb2R1bGVzJ107XG4gIHJldHVybiBmb2xkZXJzLnNvbWUoKGZvbGRlcikgPT4ge1xuICAgIGNvbnN0IGZvbGRlclBhdGggPSBub2RlUmVzb2x2ZShwYWNrYWdlUGF0aCwgZm9sZGVyKTtcbiAgICBjb25zdCByZWxhdGl2ZVBhdGggPSByZWxhdGl2ZShmb2xkZXJQYXRoLCBwYXRoKTtcbiAgICByZXR1cm4gIXJlbGF0aXZlUGF0aC5zdGFydHNXaXRoKCcuLicpO1xuICB9KTtcbn1cblxuY29uc3QgbW9kdWxlUmVnRXhwID0gL15cXHcvO1xuZnVuY3Rpb24gaXNNb2R1bGUobmFtZSkge1xuICByZXR1cm4gbmFtZSAmJiBtb2R1bGVSZWdFeHAudGVzdChuYW1lKTtcbn1cblxuY29uc3QgbW9kdWxlTWFpblJlZ0V4cCA9IC9eW1xcd10oKD8hXFwvKS4pKiQvO1xuZnVuY3Rpb24gaXNNb2R1bGVNYWluKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUgJiYgbW9kdWxlTWFpblJlZ0V4cC50ZXN0KG5hbWUpO1xufVxuXG5jb25zdCBzY29wZWRSZWdFeHAgPSAvXkBbXi9dK1xcLz9bXi9dKy87XG5leHBvcnQgZnVuY3Rpb24gaXNTY29wZWQobmFtZSkge1xuICByZXR1cm4gbmFtZSAmJiBzY29wZWRSZWdFeHAudGVzdChuYW1lKTtcbn1cblxuY29uc3Qgc2NvcGVkTWFpblJlZ0V4cCA9IC9eQFteL10rXFwvP1teL10rJC87XG5leHBvcnQgZnVuY3Rpb24gaXNTY29wZWRNYWluKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUgJiYgc2NvcGVkTWFpblJlZ0V4cC50ZXN0KG5hbWUpO1xufVxuXG5mdW5jdGlvbiBpc1JlbGF0aXZlVG9QYXJlbnQobmFtZSkge1xuICByZXR1cm4gL15cXC5cXC4kfF5cXC5cXC5bXFxcXC9dLy50ZXN0KG5hbWUpO1xufVxuXG5jb25zdCBpbmRleEZpbGVzID0gWycuJywgJy4vJywgJy4vaW5kZXgnLCAnLi9pbmRleC5qcyddO1xuZnVuY3Rpb24gaXNJbmRleChuYW1lKSB7XG4gIHJldHVybiBpbmRleEZpbGVzLmluZGV4T2YobmFtZSkgIT09IC0xO1xufVxuXG5mdW5jdGlvbiBpc1JlbGF0aXZlVG9TaWJsaW5nKG5hbWUpIHtcbiAgcmV0dXJuIC9eXFwuW1xcXFwvXS8udGVzdChuYW1lKTtcbn1cblxuZnVuY3Rpb24gdHlwZVRlc3QobmFtZSwgY29udGV4dCwgcGF0aCkge1xuICBjb25zdCB7IHNldHRpbmdzIH0gPSBjb250ZXh0O1xuICBpZiAoaXNBYnNvbHV0ZShuYW1lLCBzZXR0aW5ncywgcGF0aCkpIHsgcmV0dXJuICdhYnNvbHV0ZSc7IH1cbiAgaWYgKGlzQnVpbHRJbihuYW1lLCBzZXR0aW5ncywgcGF0aCkpIHsgcmV0dXJuICdidWlsdGluJzsgfVxuICBpZiAoaXNNb2R1bGUobmFtZSwgc2V0dGluZ3MsIHBhdGgpIHx8IGlzU2NvcGVkKG5hbWUsIHNldHRpbmdzLCBwYXRoKSkge1xuICAgIGNvbnN0IHBhY2thZ2VQYXRoID0gZ2V0Q29udGV4dFBhY2thZ2VQYXRoKGNvbnRleHQpO1xuICAgIHJldHVybiBpc0V4dGVybmFsUGF0aChuYW1lLCBzZXR0aW5ncywgcGF0aCwgcGFja2FnZVBhdGgpID8gJ2V4dGVybmFsJyA6ICdpbnRlcm5hbCc7XG4gIH1cbiAgaWYgKGlzUmVsYXRpdmVUb1BhcmVudChuYW1lLCBzZXR0aW5ncywgcGF0aCkpIHsgcmV0dXJuICdwYXJlbnQnOyB9XG4gIGlmIChpc0luZGV4KG5hbWUsIHNldHRpbmdzLCBwYXRoKSkgeyByZXR1cm4gJ2luZGV4JzsgfVxuICBpZiAoaXNSZWxhdGl2ZVRvU2libGluZyhuYW1lLCBzZXR0aW5ncywgcGF0aCkpIHsgcmV0dXJuICdzaWJsaW5nJzsgfVxuICByZXR1cm4gJ3Vua25vd24nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlSW1wb3J0VHlwZShuYW1lLCBjb250ZXh0KSB7XG4gIHJldHVybiB0eXBlVGVzdChuYW1lLCBjb250ZXh0LCByZXNvbHZlKG5hbWUsIGNvbnRleHQpKTtcbn1cbiJdfQ==