# Domo.js
Utility functions for domain strings.


### Usage
Download `domo.js` and include it in your HTML file by sticking the following line in the `<head>` section:

	<script src="<PATH>/<TO>/<JAVASCRIPTS>/domo.js" type="text/javascript"></script>

Now you can use Domo's functions on domain strings. Try it in code or in a javascript console:

    > Domo.canonicalize("www.ebay.com")
    => "ebay.com"

    > Domo.canonicalize("boats.ebay.co.uk")
    => "ebay.co.uk"

    > Domo.canonicalize("edition.cnn.com")
    => "cnn.com"

    > Domo.stripUrl("http://www.cnn.com/news/last-week/main.html")
    => "www.cnn.com"


### Testing Notes
The unit tests are written in [Pavlov](https://github.com/mmonteleone/pavlov), a [QUnit](http://docs.jquery.com/QUnit) backed framework for BDD. To run the tests, just fire up a browser and open `spec/domo.specs.html`.


Copyright (c) 2011 Gur Dotan, released under the MIT license.
