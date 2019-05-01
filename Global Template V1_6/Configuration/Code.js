/* If Ensighten uses tdi namespace use it or create new window object */
var w = window;
w.tdi = w.tdi || {}; 

/* Space Configuration Parameters */
w.tdi.configuration = {
 'adobeAnalytics' : {
  	/* Identifies the Adobe Analytics Object | Generally known as the 's' object */
  	'adobeObj' : 'tdi_s', 
  	/* production report suite ID */
  	'rsidPROD' : 'turnerintcartoon,turnerintglobal', 
  	/* development report suite ID */
  	'rsidDEV'  : 'turnerintcartoondev', 
  	'trackingServer' : 'turnerinternational.sc.omtrdc.net',
  	'trackingServerSecure' : 'turnerinternational.sc.omtrdc.net',
  	'visitorNamespace': 'turnerinternational',
    'cookieDomainPeriods' : /\w+\.(com|co|tv)\.\w+$/.test(location.hostname) ? '3' : '2',
    'trackDownloadLinks': true,
    'trackExternalLinks': true,
    'trackInlineStats': true,
    'linkDownloadFileTypes': 'exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx',
    /* List of domains to exclude from Exit Link Tracking */
  	'linkInternalFilters': 'javascript:,example.com,example.net',
    'expCldID': '7FF852E2556756057F000101@AdobeOrg',
    'charSet': 'UTF-8',
  	/* Helper Function - Checks for the presence of 'prod' in the Space in use. Setting the RSID accordingly. */
    'isProd' : (function(d){
     		return typeof d === 'object' && typeof d.publishPath === 'string' && d.publishPath.toLowerCase().indexOf('prod') > -1 ? true : false; 
    })(ensightenOptions)
 },
 'media' : {
  	/* Set default or fallback VHL - Media values here */
  	/* Values may also be passed as part data object of trackAction calls */
  	'trackingServer' : 'turnerinternational.hb.omtrdc.net',	
  	'debugLogging' : false,
  	'ssl' : true,
  	/* video player name - fallback example from CN40 is 'cn40' to identify site build */
  	'playerName' : 'cn40', 
  	/* fallback example from CN40 is 'cn web' to identify delivery channel */
  	'channel' : 'cn web',  
  	/* video player sdk version - fallback example from CN40 is 'cn40' to identify site build */
  	'appVersion' : 'cn40', 
  	/* online video platform - fallback example from CN40 is 'cn' to identify brand */
  	'ovp' : 'cn' 
 },
 'ensighten' : {
  'spaceLastPublished' : Bootstrapper.ensightenOptions.publishPath + " - " + Bootstrapper.ensightenOptions.generatedOn
 }
};


 
  