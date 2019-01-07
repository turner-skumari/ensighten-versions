Bootstrapper.getServerComponent = function(addData) {
    Bootstrapper.callOnGetServerComponent();
    Bootstrapper.insertScript('https://' + Bootstrapper.ensightenOptions.serverComponentLocation, false, (addData || true), Bootstrapper.ensightenOptions.scUseCacheBuster);
};