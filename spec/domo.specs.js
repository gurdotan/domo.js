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

        it("should canonicalize 'ebay.com:3897'", function() {
                assert(Domo.canonicalize("ebay.com:3897")).equals("ebay.com");
        });

        it("should return null given a false input to canonicalize", function() {
                assert(Domo.canonicalize(null)).equals(null);
        });

        it("should strip 'http://www.ebay.com/shopping/1.html'", function() {
                assert(Domo.stripUrl("http://www.ebay.com/shopping/1.html")).equals("www.ebay.com");
        });

        it("should return null when stripping an empty URL", function() {
                assert(Domo.stripUrl("")).equals(null);
        });

        it("should return null given a false input to strip", function() {
                assert(Domo.stripUrl(null)).equals(null);
        });

    });

});
