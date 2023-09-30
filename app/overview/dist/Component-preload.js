//@ui5-bundle be/wl/books/overview/Component-preload.js
sap.ui.require.preload({
	"be/wl/books/overview/Component.js":function(){
"use strict";sap.ui.define(["sap/ui/core/UIComponent","./model/models"],function(e,t){"use strict";var i=t["createDeviceModel"];var o=e.extend("be.wl.books.overview.Component",{metadata:{manifest:"json"},init:function t(){e.prototype.init.call(this);this.getRouter().initialize();this.setModel(i(),"device")}});return o});
},
	"be/wl/books/overview/controller/App.controller.js":function(){
"use strict";sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";var n=e.extend("be.wl.books.overview.controller.App",{onInit:function e(){}});return n});
},
	"be/wl/books/overview/controller/Main.controller.js":function(){
"use strict";sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";var n=e.extend("be.wl.books.overview.controller.Main",{onInit:function e(){}});return n});
},
	"be/wl/books/overview/i18n/i18n.properties":'# This is the resource bundle for be.wl.books.overview\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=books overview\n\n#YDES: Application description\nappDescription=A Fiori application.\n#XTIT: Main view title\ntitle=books overview',
	"be/wl/books/overview/manifest.json":'{"_version":"1.49.0","sap.cloud":{"public":true,"service":"be.wl.books.overview"},"sap.app":{"id":"be.wl.books.overview","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:basic","version":"1.11.1","toolsId":"ac0b4677-0d7d-4e5b-b51d-4bdf38034e84"},"dataSources":{"mainService":{"uri":"odata/v4/catalog/","type":"OData","settings":{"annotations":[],"localUri":"localService/metadata.xml","odataVersion":"4.0"}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.118.1","libs":{"sap.m":{},"sap.ui.core":{},"sap.f":{},"sap.suite.ui.generic.template":{},"sap.ui.comp":{},"sap.ui.generic.app":{},"sap.ui.table":{},"sap.ushell":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"be.wl.books.overview.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"be.wl.books.overview.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteMain","pattern":":?query:","target":["TargetMain"]}],"targets":{"TargetMain":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"Main","viewName":"Main"}}},"rootView":{"viewName":"be.wl.books.overview.view.App","type":"XML","async":true,"id":"App"}}}',
	"be/wl/books/overview/model/models.js":function(){
"use strict";sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,i){"use strict";function n(){var n=new e(i);n.setDefaultBindingMode("OneWay");return n}var t={__esModule:true};t.createDeviceModel=n;return t});
},
	"be/wl/books/overview/view/App.view.xml":'<mvc:View controllerName="be.wl.books.overview.controller.App"\n    xmlns:html="http://www.w3.org/1999/xhtml"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><App id="app"></App></mvc:View>\n',
	"be/wl/books/overview/view/Main.view.xml":'<mvc:View controllerName="be.wl.books.overview.controller.Main"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><Page id="page" title="{i18n>title}"><content><List id="bookList"\n                headerText="Books"\n                headerLevel="H2"\n                items="{\n                    path: \'/Books\'\n                }" ><StandardListItem\n                    title="{title}"\n                    counter="{stock}"/></List></content></Page></mvc:View>\n'
});
//# sourceMappingURL=Component-preload.js.map
