sap.ui.require([
    "sap/m/Text",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/mvc/XMLView",
    "sap/ui/model/BindingMode",
    "sap/ui/model/resource/ResourceModel"
], function (Text, JSONModel, XMLView, BindingMode, ResourceModel) {
    "use strict"

    // Attach an anonymous function to the SAPUI5 'init' event
    sap.ui.getCore().attachInit(function () {
        // Create a JSON model from an object literal
        var oModel = new JSONModel({
            firstName: "Harry",
            lastName: "Hawk",
            enabled: true,
            address: {
                street: "1 Any Lane",
                city: "Walldorf",
                zip: "69190",
                country: "Germany"
            },
            salesAmount: 12345.6789,
            currencyCode: "EUR",
            panelHeaderText: "Data Biunding Basics"
        });

        var oResourceModel = new ResourceModel({
            bundleName: "sap.ui.demo.db.i18n.i18n",
            supportedLocales: ["", "de"],
            fallbackLocale:""
        })

        sap.ui.getCore().setModel(oResourceModel, "i18n");

        // oModel.setDefaultBindingMode(BindingMode.OneWay);

        // Assign the model object to the SAPUI5 core
        sap.ui.getCore().setModel(oModel);
        
        // Display the XML view called "App"
        new XMLView({
            viewName: "sap.ui.demo.db.view.App"
        }).placeAt("content");
    })
})