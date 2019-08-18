'use strict';
(function() {
  function checkForErrorCode(code) {
    code = code.split(".");
    var extensionCall = window;
    var j = 0;
    for (; j < code.length; ++j) {
      if (!(extensionCall = extensionCall[code[j]])) {
        return false;
      }
    }
    return true;
  }
  function extend(fields) {
    fields = fields.split(".");
    /** @type {!Window} */
    var result = window;
    /** @type {number} */
    var i = 0;
    for (; i < fields.length; ++i) {
      if (result.hasOwnProperty) {
        if (result.hasOwnProperty(fields[i])) {
          result = result[fields[i]];
        } else {
          result = result[fields[i]] = {};
        }
      } else {
        result = result[fields[i]] || (result[fields[i]] = {});
      }
    }
    return result;
  }
  var expected_date2 = new Date;
  (function() {

    var self = extend("google.translate._const");
    self._cl = "ru";
    self._cuc = "TranslateInit";
    self._ctkk = "434995.811027630";
    var name = "translate.googleapis.com";
    var prefix = (true ? "https" : window.location.protocol == "https:" ? "https" : "http") + "://";
    var prefix_name = prefix + name;
    self._pah = name;
    self._pas = prefix;
    self._plla = name + "/translate_a/l";
    self._pmi = prefix_name + "/translate_static/img/mini_google.png";
    self._puh = "translate.google.com";
    loadDojoAndStuff(self._ps);
    addRemoteScript(prefix_name + "/translate_static/js/element/main_ru.js");
  })();

})();
