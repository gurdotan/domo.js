pavlov.specify("Domo.js", function(){

    describe("Domo.js", function(){


	it("should canonize 'www.ebay.com'", function() {
		assert(Domo.canonize("www.ebay.com")).equals("ebay.com");
	});

	it("should canonize 'motors.ebay.com'", function() {
		assert(Domo.canonize("motors.ebay.com")).equals("ebay.com");
	});

	it("should canonize 'www.ebay.co.uk'", function() {
		assert(Domo.canonize("www.ebay.co.uk")).equals("ebay.co.uk");
	});

	it("should canonize 'ebay.com'", function() {
		assert(Domo.canonize("ebay.com")).equals("ebay.com");
	});

    });

});
