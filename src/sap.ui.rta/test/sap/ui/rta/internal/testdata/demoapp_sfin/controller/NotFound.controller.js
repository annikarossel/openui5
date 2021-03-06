sap.ui.define([
	"sap/ui/rta/test/Demo/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("sap.ui.rta.test.Demo.controller.NotFound", {

		/* =========================================================== */
		/* event handlers                                              */
		/* =========================================================== */

		/**
		 * Navigates to the main view when the link is pressed
		 * @public
		 */
		onLinkPressed: function() {
			this.getRouter().navTo("app");
		}
	});
});