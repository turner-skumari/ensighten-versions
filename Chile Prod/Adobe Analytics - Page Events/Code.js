/* interaction tracking */
PubSub.subscribe("interaction", function(idata) {
        var tAAC = ((window.tdi || {}).configuration || {}).adobeAnalytics || {},
                s = window[tAAC.adobeObj] || window.tdi_s || window.s || {};
 
    s.pageName = "";
    if (window.turner_metadata && window.turner_metadata.pageName) s.pageName = window.turner_metadata.pageName;
    if (s.pageName === "") { s.pageName = window.location.pathname; }
    s.channel = idata.section || "";
    if (idata.products) s.products = idata.products;
    if (idata.productsevent) s.events = idata.productsevent;
    s.contextData.domain = "web|" + window.location.hostname.replace("www.","");
    if (window.turner_metadata && window.turner_metadata.section) s.contextData.section = window.turner_metadata.section;
    if (window.turner_metadata && window.turner_metadata.country) s.contextData.country = window.turner_metadata.country;
    if (window.turner_metadata && window.turner_metadata.brand) s.contextData.brand = window.turner_metadata.brand;
    if (window.turner_metadata && window.turner_metadata.franchise) s.contextData.franchise = window.turner_metadata.franchise;
    if (window.turner_metadata && window.turner_metadata.contenttype) s.contextData.contenttype = window.turner_metadata.contenttype;
    if (window.turner_metadata && window.turner_metadata.contenttitle) s.contextData.contenttitle = window.turner_metadata.contenttitle;
    if (window.turner_metadata && window.turner_metadata.contentID) s.contextData.contentID = window.turner_metadata.contentID;
    s.contextData.ensighten = (((window.tdi || {}).configuration || {}).ensighten || {}).spaceLastPublished || "";
    s.contextData.version = (((window.tdi || {}).configuration || {}).ensighten || {}).spaceLastPublished || "";
    s.contextData.url = window.location.hostname + window.location.pathname;
    if (window.turner_metadata && window.turner_metadata.adobehashid) s.contextData.adobehashid = window.turner_metadata.adobehashid;
    if (window.turner_metadata && window.turner_metadata.region) s.contextData.region = window.turner_metadata.region;
    if (window.turner_metadata && window.turner_metadata.presentationtemplate) s.contextData.presentationtemplate = window.turner_metadata.presentationtemplate;
    if (window.turner_metadata && window.turner_metadata.featuredcontent) s.contextData.featuredcontent = window.turner_metadata.featuredcontent;
    if (idata.interaction) s.contextData.interaction = idata.interaction;
    if (window.turner_metadata && window.turner_metadata.authstate) s.contextData.authstate = window.turner_metadata.authstate;
    if (window.turner_metadata && window.turner_metadata.englishname) s.contextData.englishname = window.turner_metadata.englishname;
    if (window.turner_metadata && window.turner_metadata.gametitle) s.contextData.gametitle = window.turner_metadata.gametitle;
    if (window.turner_metadata && window.turner_metadata.gamecategory) s.contextData.gamecategory = window.turner_metadata.gamecategory;
    if (window.turner_metadata && window.turner_metadata.logintype) s.contextData.logintype = window.turner_metadata.logintype;
    if (window.turner_metadata && window.turner_metadata.searchterm) s.contextData.searchterm = window.turner_metadata.searchterm;
    s.contextData.interactionevent = 1;
    if (idata.featuredcontentevent) {
       s.contextData.featuredcontentevent = 1;
       if (idata.featuredcontent) s.contextData.featuredcontent = idata.featuredcontent;
       if (idata.internalcampaign) s.contextData.internalcampaign = idata.internalcampaign;
    }
    if (idata.gamestart) s.contextData.gamestart = 1;
    if (idata.gametimespent) s.contextData.gametimespent = idata.gametimespent;
    if (idata.gamereplay) s.contextData.gamereplay = 1;
    if (idata.gamelevelreplay) s.contextData.gamelevelreplay = 1;
    if (idata.gameexit) s.contextData.gameexit = 1;
    if (idata.gamecomplete) s.contextData.gamecomplete = 1;
    if (idata.registrationevent) s.contextData.registrationevent = 1;
    if (idata.loginevent) s.contextData.loginevent = 1;
    if (idata.internalsearchevent) s.contextData.internalsearchevent = 1;
    s.linkTrackVars = "pageName";
    s.linkTrackVars += ",channel";
    s.linkTrackVars += ",products";
    s.linkTrackVars += ",events";
    s.linkTrackVars += ",contextData.domain";
    s.linkTrackVars += ",contextData.section";
    s.linkTrackVars += ",contextData.country";
    s.linkTrackVars += ",contextData.brand";
    s.linkTrackVars += ",contextData.franchise";
    s.linkTrackVars += ",contextData.contenttype";
    s.linkTrackVars += ",contextData.contenttitle";
    s.linkTrackVars += ",contextData.contentID";
    s.linkTrackVars += ",contextData.ensighten";
    s.linkTrackVars += ",contextData.version";
    s.linkTrackVars += ",contextData.url";
    s.linkTrackVars += ",contextData.adobehashid";
    s.linkTrackVars += ",contextData.region";
    s.linkTrackVars += ",contextData.presentationtemplate";
    s.linkTrackVars += ",contextData.featuredcontent";
    s.linkTrackVars += ",contextData.interaction";
    s.linkTrackVars += ",contextData.authstate";
    s.linkTrackVars += ",contextData.englishname";
    s.linkTrackVars += ",contextData.gametitle";
    s.linkTrackVars += ",contextData.gamecategory";
    s.linkTrackVars += ",contextData.logintype";
    s.linkTrackVars += ",contextData.searchterm";
    s.linkTrackVars += ",contextData.internalcampaign";
    s.linkTrackVars += ",contextData.interactionevent";
    s.linkTrackVars += ",contextData.featuredcontentevent";
    s.linkTrackVars += ",contextData.gamestart";
    s.linkTrackVars += ",contextData.gametimespent";
    s.linkTrackVars += ",contextData.gamereplay";
    s.linkTrackVars += ",contextData.gamelevelreplay";
    s.linkTrackVars += ",contextData.gameexit";
    s.linkTrackVars += ",contextData.gamecomplete";
    s.linkTrackVars += ",contextData.registrationevent";
    s.linkTrackVars += ",contextData.loginevent";
    s.linkTrackVars += ",contextData.internalsearchevent";
    s.linkTrackEvents = idata.productsevent || "";
    s.tl(this, "o", "interaction-" + (idata.interaction || ""));
    s.contextData = {};
});

/* page view tracking after page load */
PubSub.subscribe("pageview", function(pdata) {
        var tAAC = ((window.tdi || {}).configuration || {}).adobeAnalytics || {},
                s = window[tAAC.adobeObj] || window.tdi_s || window.s || {};
    s.pageName = pdata.pageName || "";
    if (s.pageName === "") { s.pageName = window.location.pathname; }
    s.channel = pdata.section || "";
    s.products = pdata.products || "";
    s.events = pdata.productsevent || "";
    s.campaign = s.Util.getQueryParam("cid");
    s.server = "web|" + window.location.hostname.replace("www.","");
    s.products = pdata.products || "";
    s.events = pdata.productsevent || "";
    s.contextData = {};
    s.contextData.domain = "web|" + window.location.hostname.replace("www.","");
    s.contextData.ensighten = (((window.tdi || {}).configuration || {}).ensighten || {}).spaceLastPublished || "";
    s.contextData.version = (((window.tdi || {}).configuration || {}).ensighten || {}).spaceLastPublished || "";
    s.contextData.url = window.location.hostname + window.location.pathname;
    for (var key in pdata){
        if (pdata.hasOwnProperty(key) && !!pdata[key]){
            if(key === "brand"){
                s.contextData[key] =  pdata[key];
            }
            else{
                 s.contextData[key] = typeof pdata[key] === "string" ? pdata[key].toLowerCase() : pdata[key];
            }
        }
    }
    s.contextData.pageviewevent = 1;
    if (pdata.searchterm && pdata.searchterm != "") s.contextData.internalsearchevent = 1;
    
    s.t();
    
        s.contextData = {};
 
    /* Game Tracking Timer Failsafe */
     /* Assumes Zero Page Views within a Game */
     /* Stops Game Progress Timer on Page View */
     if (window.gameprogress) {
       clearTimeout(window.gameprogress);
       window.gameprogress = null;
     } 
 
    //comScore page view
    try {
       (self.COMSCORE && COMSCORE.beacon({c1: "2", c2: "6035748"}));
    } catch(e) {}
});
