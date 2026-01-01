sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'zrgtravel',
            componentId: 'ZC_RGDMOAObjectPage',
            contextPath: '/ZC_RGDMOA'
        },
        CustomPageDefinitions
    );
});