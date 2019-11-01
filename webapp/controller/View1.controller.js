sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("demo_nav.demo_nav.controller.View1", {
		onInit: function () {
			var page1 = sap.ui.view({id:"iddemo_nav2", viewName:"demo_nav.view2", type:sap.ui.core.mvc.ViewType.XML});
			sap.ui.getCore().byId("myapp").addPage(page1);
	},
	
	Onpress1: function(){
		sap.ui.getCore().byId("myapp").to("iddemo_nav2","flip");
		
	}
	});
});