pavlov.specify("Domo.js", function(){

    describe("Domo.js", function(){


	it("should canonicalize 'www.ebay.com'", function() {
		assert(Domo.canonicalize("www.ebay.com")).equals("ebay.com");
	});

	it("should canonicalize 'motors.ebay.com'", function() {
		assert(Domo.canonicalize("motors.ebay.com")).equals("ebay.com");
	});

	it("should canonicalize 'www.ebay.co.uk'", function() {
		assert(Domo.canonicalize("www.ebay.co.uk")).equals("ebay.co.uk");
	});

	it("should canonicalize 'ebay.com'", function() {
		assert(Domo.canonicalize("ebay.com")).equals("ebay.com");
	});

        it("should strip 'http://www.ebay.com/shopping/1.html'", function() {
                assert(Domo.stripUrl("http://www.ebay.com/shopping/1.html")).equals("www.ebay.com");
        });

    });

});
