/* Progress event function */
/* Tracks every sixty seconds */
window.sendGameProgress = function (gdata) {
    gdata.interactionevent = "";
    gdata.gamestart = "";
    gdata.interaction = "game time spent event";
    gdata.gametimespent = 60;
    trackMetrics({
        type: "game",
        data: gdata
    });
    /* Fires function again in another sixty seconds */
    window.gameprogress = window.setTimeout(sendGameProgress, 60000, gdata);
};

PubSub.subscribe("game", function (gdata) {
    var s = window.s, /****** REQUIRED - MUST POINT TO CORRECT ADOBE ANALYTICS VARIABLE *********/
        tm = window.turner_metadata, /* shortcut to turner_metadata object */
        primaryRSID = s.account, /* temporary storage for Global Standards RSID */
        gameRSID = gdata.gamersid, /* temporary storage for Game RSID */  
        /* Holds temporary tracking variables */
        /* Only variables not passed in the trackAction push call are required in the contextData object */
        tempTrackData = {
            "contextData": {
                "pageName": tm.pageName || "",
                "domain": tm.domain || "",
                "section": tm.section || "",
                "subsection": tm.section || "",
                "country": tm.country || "",
                "brand": tm.brand || "",
                "franchise": tm.franchise || "",
                "ensighten": tm.ensighten || "",
                "version": tm.version || "",
                "url": tm.url || "",
                "region": tm.region || "",
                "presentationtemplate": tm.presentationtemplate || ""
            },
            "linkTrackVars": "", /* defined for later use */
            "linkTrackEvents": "" /* defined for later use */
        }, linkTrackVarArr = []; /* defined for later use */

    /* remove timer on gamecomplete or exit */
    if (window.gameprogress && (gdata.gamecomplete || gdata.gameexit)) {
        clearTimeout(window.gameprogress);
    }

    /* add timer on gamestart */
    /* fires progress event every sixty seconds */
    if (gdata.gamestart) {
        window.gameprogress = window.setTimeout(sendGameProgress, 60000, gdata);
    }

    /* iterate through data object sent through trackAction push with type game */
    /* add each variable to the temporary contextData object */
    for (var gKey in gdata) {
        if (gdata.hasOwnProperty(gKey) && !!gdata[gKey]) {
            tempTrackData.contextData[gKey] = String(gdata[gKey]).toLowerCase();
        }
    }

    /* add all entries in the temporary contextData object to an array */
    for (var cKey in tempTrackData.contextData) {
        if (tempTrackData.contextData.hasOwnProperty(cKey) && !!tempTrackData.contextData[cKey]) {
            linkTrackVarArr.push("contextData." + cKey);
        }
    }
    /* turn array into temporary linkTrackVars */
    tempTrackData.linkTrackVars += linkTrackVarArr.toString();

    /* set temporary linkTrackEvents per standard interaction method */
    /* also set events */
    tempTrackData.linkTrackEvents = tempTrackData.events = gdata.productsevent || "";


    if (gameRSID) {
        /* Switch to game specific RSID if one exists */
        s.sa(gameRSID);
    }
 
    s.tl(this, "o", "interaction-" + (gdata.interaction || ""), tempTrackData);
 
 		if (gameRSID) {
 			/* 
       * switch back to global standards report suite 
       * if there was a gameRSID to switch to before the tracking call 
       */
      s.sa(primaryRSID);
    }
});