/* If Ensighten uses tdi namespace use it or create new window object */
var w = window;
w.tdi = w.tdi || {}; 

/* Space Configuration Parameters */
w.tdi.configuration = {
 'adobeAnalytics' : {
  	'isProd' : (function(d){return typeof ensightenOptions === 'object' && typeof ensightenOptions.publishPath === 'string' && ensightenOptions.publishPath.toLowerCase().indexOf('prod') > -1 ? true : false; })(ensightenOptions),
  	'rsidPROD' : 'turnerintcartoon,turnerintglobal', /* production report suite ID */
  	'rsidDEV'  : 'turnerintcartoondev', /* development report suite ID */
  	'trackingServer' : 'turnerinternational.sc.omtrdc.net',
  	'trackingServerSecure' : 'turnerinternational.sc.omtrdc.net',
  	'charSet' : 'UTF-8'
 },
 'media' : {
  	/* Set default or fallback VHL - Media values here */
  	/* Values may also be passed as part data object of trackAction calls */
  	'trackingServer' : 'turnerinternational.hb.omtrdc.net',	
  	'debugLogging' : false,
  	'ssl' : true,
  	'playerName' : 'cn40', /* video player name - fallback example from CN40 is 'cn40' to identify site build */
  	'channel' : 'cn web',  /* fallback example from CN40 is 'cn web' to identify delivery channel */
  	'appVersion' : 'cn40', /* video player sdk version - fallback example from CN40 is 'cn40' to identify site build */
  	'ovp' : 'cn' /* online video platform - fallback example from CN40 is 'cn' to identify brand */
 }
};
