!function(){"use strict";function a(a){if("[object String]"!==Object.prototype.toString.call(a))throw new TypeError("Event is not a string.")}function b(a){if("function"!=typeof a)throw new TypeError("Handler is not a function")}var c={},d={};d.publish=d.pub=function(b){if(a(b),c[b])for(var d={event:b,args:Array.prototype.slice.call(arguments,1)},e=0,f=c[b].length;f>e;e++)c[b][e].apply(d,d.args)},d.subscribe=d.sub=function(d,e){a(d),b(e),(c[d]=c[d]||[]).push(e)},d.unsubscribe=d.unsub=function(){var d,e,f,g,h=Array.prototype.slice.call(arguments);if(h.length>=2){if(d=h[0],e=h[1],a(d),b(e),!c[d])return;for(f=0,g=c[d].length;g>f;f++)c[d][f]===e&&c[d].splice(f,1)}else{e=h[0],b(e);for(d in c)for(f=0,g=c[d].length;g>f;f++)c[d][f]===e&&c[d].splice(f,1)}},"function"==typeof define&&define.amd?define(function(){return d}):"object"==typeof module&&module.exports?module.exports=d:window.PubSub=d}();

window.trackMetrics = function(idata) {
  PubSub.publish(idata.type, idata.data);
};

window.trackVideoMetrics = function(vdata) {
  PubSub.publish(vdata.type, vdata.data);
};

var vflags = {};
window.trackTOPEvent = function(type, result, video_metadata) {
  if (type.toString() == "Player_Ready") {
    vflags.hasScrubbed = false;
    vflags.isTen = false;
    vflags.isTwentyFive = false;
    vflags.isFifty = false;
    vflags.isSeventyFive = false;
  } else if (type.toString() == "Media_Seeking_Started") {
    vflags.hasScrubbed = true;
  } else if (type.toString() == "Media_Time_Changed") {
    var playhead = result.time;
    var duration = video_metadata.content_duration;
    if (vflags.hasScrubbed === false) {
      if (playhead > (duration * 0.75) && vflags.isSeventyFive === false) {
        PubSub.publish("Media_SeventyFive", video_metadata);
        console.log("ANALYTICS: Media_SeventyFive");
        vflags.isSeventyFive = true;
      } else if (playhead > (duration * 0.5) && vflags.isFifty === false) {
        PubSub.publish("Media_Fifty", video_metadata);
        console.log("ANALYTICS: Media_Fifty");
        vflags.isFifty = true;
      } else if (playhead > (duration * 0.25) && vflags.isTwentyFive === false) {
        PubSub.publish("Media_TwentyFive", video_metadata);
        console.log("ANALYTICS: Media_TwentyFive");
        vflags.isTwentyFive = true;
      } else if (playhead > (duration * 0.1) && vflags.isTen === false) {
        PubSub.publish("Media_Ten", video_metadata);
        console.log("ANALYTICS: Media_Ten");
        vflags.isTen = true;
      }
    }
  }
  var eventlist = "Player_Ready,Ad_Started,Ad_Creative_Started,Ad_Finished,Media_Started,Media_Paused,Media_Resumed,Media_Buffering_Started,Media_Buffering_Finished,Media_Finished,Content_Completed";
  if (eventlist.indexOf(type.toString()) > -1) {
    try { console.log("ANALYTICS: " + type.toString()); } catch(e) {}
    PubSub.publish(type.toString(), video_metadata);
  }
};