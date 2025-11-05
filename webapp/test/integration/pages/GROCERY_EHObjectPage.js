sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'grocerylistrepeh',
            componentId: 'GROCERY_EHObjectPage',
            contextPath: '/GROCERY_EH'
        },
        CustomPageDefinitions
    );
});