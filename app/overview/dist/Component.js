"use strict";sap.ui.define(["sap/ui/core/UIComponent","./model/models"],function(e,t){"use strict";var i=t["createDeviceModel"];var o=e.extend("be.wl.books.overview.Component",{metadata:{manifest:"json"},init:function t(){e.prototype.init.call(this);this.getRouter().initialize();this.setModel(i(),"device")}});return o});
//# sourceMappingURL=Component.js.map