sap.ui.define([
    "sap/m/MessageToast",
    "sap/m/MessageBox"
], function (MessageToast, MessageBox) {
    'use strict';

    return {
        /**
         * Generated event handler.
         *
         * @param oContext the context of the page on which the event was fired. `undefined` for list report page.
         * @param aSelectedContexts the selected contexts of the table rows.
         */
        days_until_expiration: function (oContext, aSelectedContexts) {

            var expirationDate = oContext.getObject().Expirationdate;

            if (!expirationDate) {
                MessageBox.warning("Expiration date is missing.");
                return;
            }

            var today = new Date();
            var otherDate = new Date(expirationDate); // Your target date

            today.setHours(0, 0, 0, 0);
            otherDate.setHours(0, 0, 0, 0);

            var timeDiff = otherDate.getTime() - today.getTime();
            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

            let sMessage;
            if (diffDays > 0) {
                sMessage = `Expires in ${diffDays} day${diffDays > 1 ? "s" : ""}`;
            } else if (diffDays < 0) {
                sMessage = `Expired ${Math.abs(diffDays)} day${Math.abs(diffDays) > 1 ? "s" : ""} ago`;
            } else {
                sMessage = "Expires today!";
            }

            MessageBox.information(sMessage, {
                title: "Days Until Expiration"
            });

        }
    };
});
