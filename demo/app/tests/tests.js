var MapboxVision = require("nativescript-mapbox-vision").MapboxVision;
var mapboxVision = new MapboxVision();

describe("greet function", function() {
    it("exists", function() {
        expect(mapboxVision.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(mapboxVision.greet()).toEqual("Hello, NS");
    });
});