sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'grocerylistrepeh',
            componentId: 'GROCERY_EHList',
            contextPath: '/GROCERY_EH'
        },
        CustomPageDefinitions
    );
});