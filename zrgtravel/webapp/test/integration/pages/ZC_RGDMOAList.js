sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'zrgtravel',
            componentId: 'ZC_RGDMOAList',
            contextPath: '/ZC_RGDMOA'
        },
        CustomPageDefinitions
    );
});