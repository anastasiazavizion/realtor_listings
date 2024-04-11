const Ziggy = {"url":"http:\/\/localhost","port":null,"defaults":{},"routes":{"sanctum.csrf-cookie":{"uri":"sanctum\/csrf-cookie","methods":["GET","HEAD"]},"ignition.healthCheck":{"uri":"_ignition\/health-check","methods":["GET","HEAD"]},"ignition.executeSolution":{"uri":"_ignition\/execute-solution","methods":["POST"]},"ignition.updateConfig":{"uri":"_ignition\/update-config","methods":["POST"]},"listing.index":{"uri":"listing","methods":["GET","HEAD"]},"listing.show":{"uri":"listing\/{listing}","methods":["GET","HEAD"],"parameters":["listing"],"bindings":{"listing":"id"}},"login":{"uri":"login","methods":["GET","HEAD"]},"login.store":{"uri":"login","methods":["POST"]},"logout":{"uri":"logout","methods":["DELETE"]},"user-account.create":{"uri":"user-account\/create","methods":["GET","HEAD"]},"user-account.store":{"uri":"user-account","methods":["POST"]},"realtor.listing.index":{"uri":"realtor\/listing","methods":["GET","HEAD"]},"realtor.listing.create":{"uri":"realtor\/listing\/create","methods":["GET","HEAD"]},"realtor.listing.store":{"uri":"realtor\/listing","methods":["POST"]},"realtor.listing.show":{"uri":"realtor\/listing\/{listing}","methods":["GET","HEAD"],"parameters":["listing"]},"realtor.listing.edit":{"uri":"realtor\/listing\/{listing}\/edit","methods":["GET","HEAD"],"parameters":["listing"],"bindings":{"listing":"id"}},"realtor.listing.update":{"uri":"realtor\/listing\/{listing}","methods":["PUT","PATCH"],"parameters":["listing"],"bindings":{"listing":"id"}},"realtor.listing.destroy":{"uri":"realtor\/listing\/{listing}","methods":["DELETE"],"parameters":["listing"],"bindings":{"listing":"id"}},"realtor.listing.restore":{"uri":"realtor\/listing\/restore\/{listing}","methods":["POST"],"parameters":["listing"],"bindings":{"listing":"id"}}}};
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };
