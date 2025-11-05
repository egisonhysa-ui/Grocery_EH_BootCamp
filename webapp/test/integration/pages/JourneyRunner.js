sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"grocerylistrepeh/test/integration/pages/GROCERY_EHList",
	"grocerylistrepeh/test/integration/pages/GROCERY_EHObjectPage"
], function (JourneyRunner, GROCERY_EHList, GROCERY_EHObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('grocerylistrepeh') + '/test/flp.html#app-preview',
        pages: {
			onTheGROCERY_EHList: GROCERY_EHList,
			onTheGROCERY_EHObjectPage: GROCERY_EHObjectPage
        },
        async: true
    });

    return runner;
});

