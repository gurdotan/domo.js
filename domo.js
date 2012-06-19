(function(root) {


    var GENERIC_TOP_LEVEL_DOMAINS = [ "aero", "asia", "biz", "com", "coop", "edu", "gov", "info", "int", "jobs", "mil", "mobi", "museum", "name", "net", "org", "pro", "tel", "travel", "xxx" ];
    var GEO_TOP_LEVEL_DOMAINS = [ "ac", "ad", "ae", "af", "ag", "ai", "al", "am", "an", "ao", "aq", "ar", "as", "at", "au", "aw", "ax", "az", "ba", "bb", "bd", "be", "bf", "bg", "bh", "bi", "bj", "bm", "bn", "bo", "br", "bs", "bt", "bv", "bw", "by", "bz", "ca", "cc", "cd", "cf", "cg", "ch", "ci", "ck", "cl", "cm", "cn", "co", "cr", "cs", "cu", "cv", "cx", "cy", "cz", "de", "dj", "dk", "dm", "do", "dz", "ec", "ee", "eg", "er", "es", "et", "eu", "fi", "fj", "fk", "fm", "fo", "fr", "ga", "gb", "gd", "ge", "gf", "gg", "gh", "gi", "gl", "gm", "gn", "gp", "gq", "gr", "gs", "gt", "gu", "gw", "gy", "hk", "hm", "hn", "hr", "ht", "hu", "id", "ie", "il", "im", "in", "io", "iq", "ir", "is", "it", "je", "jm", "jo", "jp", "ke", "kg", "kh", "ki", "km", "kn", "kp", "kr", "kw", "ky", "kz", "la", "lb", "lc", "li", "lk", "lr", "ls", "lt", "lu", "lv", "ly", "ma", "mc", "md", "me", "mg", "mh", "mk", "ml", "mm", "mn", "mo", "mp", "mq", "mr", "ms", "mt", "mu", "mv", "mw", "mx", "my", "mz", "na", "nc", "ne", "nf", "ng", "ni", "nl", "no", "np", "nr", "nu", "nz", "om", "pa", "pe", "pf", "pg", "ph", "pk", "pl", "pm", "pn", "pr", "ps", "pt", "pw", "py", "qa", "re", "ro", "rs", "ru", "rw", "sa", "sb", "sc", "sd", "se", "sg", "sh", "si", "sj", "sk", "sl", "sm", "sn", "so", "sr", "st", "su", "sv", "sy", "sz", "tc", "td", "tf", "tg", "th", "tj", "tk", "tl", "tm", "tn", "to", "tp", "tr", "tt", "tv", "tw", "tz", "ua", "ug", "uk", "us", "uy", "uz", "va", "vc", "ve", "vg", "vi", "vn", "vu", "wf", "ws", "ye", "yt", "za", "zm", "zw" ];
    var GEO_SPECIFIC_SECOND_LEVEL = [ "co", "ac" ];  //Not used in REGEX since it's included in the geo (co = Colombia, ac = Ascension Island)

    var regexString = "^(" + GENERIC_TOP_LEVEL_DOMAINS.join("|") + "|" + GEO_TOP_LEVEL_DOMAINS.join("|") + ")$";
    var regex = new RegExp(regexString);

    root.Domo = {

        /**
         * Returns a canonicalized domain for a given domain string
         *   "www.cnn.com"           => "cnn.com"
         *   "books.ebay.co.uk"      => "ebay.co.uk"
         *   "news.nytimes.com:3000" => "nytimes.com"
         */
        canonicalize : function(domain) {
            if (!domain) return null;

            // Split by ":" to remove possible port
            // Split by "." and reverse to get domain components
            var parts = domain.split(":")[0].split(".").reverse();
            var checkFurther = true;
            var i = 0;

            while (checkFurther) {
                if (parts[i].match(regex)) {
                    i += 1;
                } else {
                    checkFurther = false;
                }
            }

            return parts.slice(0, i + 1).reverse().join(".");
        },

        /**
         * Returns the full domain without the protocol prefix and any path suffix from the given URL.
         * Works on any URL and any protocol, as long as the URL uses "://" to separate between the protocol and the domain.
         *   "http://www.ebay.com/shopping/1.html"  =>  "www.ebay.com"
         */
        stripUrl : function(url) {
            if (!url) return null;
            var match = url.match(/:\/\/(.[^/]+)/);
            return match ? match[1] : null;
        }

    };
})(window);

