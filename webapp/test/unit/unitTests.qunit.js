/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"demo_nav/demo_nav/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});