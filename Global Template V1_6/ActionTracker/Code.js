/* tdi object failsafe */
var w = window;
w.tdi = w.tdi || {};

/* Routes Tracking Calls to the appropriate trackMetrics Functions*/
tdi.trackData = function (d) {
    if (d.type === 'video' && !!d.subtype && !!d.data) {
       /* converting to format suitable to current trackVideoMetrics function */
        var i = {
            "type": d.subtype,
            "data": d.data
        };
        trackVideoMetrics(i);
    } else if (!!d.type && !!d.data) {
        trackMetrics(d);
    }
};

/* Provides functionality to read an array(s) for stored data and intercept future data pushed to the array(s) */
/* Stored and read data is sent to per array designated function */
tdi.actionTracker = {
  "instances": {},
  "add": function(dloStr, dlaStr, cbFunc, _dbgBool) {
    var _private = {
      "cbFunc": function() {},
      "targetArray": [],
      "dloStr": "",
      "dlaStr": "",
      "logMsgs": false,
      "consoleInfo": function(msg) {
        if (_private.logMsgs && typeof console !== "undefined" && console.info && !!msg) {
          console.info("ensBtAt: " + msg);
        }
      },
      "checkArrPoly": function(v) {
        return v && typeof v === "object" && v.constructor === Array;
      },
      "checkArr": function(dloStr, dlaStr) {
        _private.consoleInfo("checkarr|" + dloStr + "|" + dlaStr);
        if (typeof window[dloStr] === "object" && typeof window[dloStr][dlaStr] !== "undefined") {
          var t = window[dloStr][dlaStr];
          if (!!window.Array && typeof Array.isArray === "function") {
            return Array.isArray(t) ? t : false;
          } else {
            return _private.checkArrPoly(t) ? t : false;
          }
        }
        return false;
      },
      "processData": function() {
        _private.consoleInfo("processData");
        _private.cbFunc(arguments[0]);
      },
      "parseOriginalData": function() {
        _private.consoleInfo("parseOriginalData");
        _private.targetArray.forEach(function(element) {
          _private.processData(element);
        });
        _private.targetArray.length = 0;
      },
      "newPush": function() {
        _private.consoleInfo("_private.newPush");
        _private.processData(arguments[0]);
      },
      "setupNewPush": function() {
        _private.targetArray.push = function(d) {
          try {
            _private.newPush(d);
          } catch (e) {
            return 0;
          }
          return 1;
        };
      },
      "init": function(dloStr, dlaStr, cbFunc, _dbgBool) {
        _private.logMsgs = _dbgBool;
        _private.consoleInfo("private init");
        _private.targetArray = _private.checkArr(dloStr, dlaStr);
        if (!_private.targetArray) {
          _private.consoleInfo("Not an Array|" + dloStr + "|" + dlaStr);
          return false;
        }
        _private.cbFunc = cbFunc;
        _private.parseOriginalData();
        _private.setupNewPush();
        return true;
      }
    };
    try {
      _dbgBool = _dbgBool || false;
      if (typeof dloStr === "string" && typeof dlaStr === "string" && typeof cbFunc === "function") {
        tdi.actionTracker.instances[dloStr + "|" + dlaStr] = _private.init(dloStr, dlaStr, cbFunc, _dbgBool);
      }
    } catch (e) {
      return false;
    }
  }
};

/* function to initialize an instance of actionTracker for the turner_metadata.trackAction array */
tdi.loadActionTracker = function () {
 	var tAAC = ((window.tdi || {}).configuration || {}).adobeAnalytics || {},
      s = window[tAAC.adobeObj];
  if (s && typeof s.t === 'function' && tdi.trackData && window.turner_metadata && turner_metadata.trackAction && typeof trackMetrics === 'function' && typeof trackVideoMetrics === 'function') {
    tdi.actionTracker.add('turner_metadata', 'trackAction', tdi.trackData);
  } else {
    setTimeout(function () {
      tdi.loadActionTracker();
    }, 100);
  }
};

/* call the initializer function */
tdi.loadActionTracker();


