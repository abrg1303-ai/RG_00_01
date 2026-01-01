sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"zrgtravel/test/integration/pages/ZC_RGDMOAList",
	"zrgtravel/test/integration/pages/ZC_RGDMOAObjectPage"
], function (JourneyRunner, ZC_RGDMOAList, ZC_RGDMOAObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('zrgtravel') + '/test/flp.html#app-preview',
        pages: {
			onTheZC_RGDMOAList: ZC_RGDMOAList,
			onTheZC_RGDMOAObjectPage: ZC_RGDMOAObjectPage
        },
        async: true
    });

    return runner;
});

