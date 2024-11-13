function basicCallBack(status, info) {
    console.table({STATUS: status, INFO: info})
}

// Network Events
function getCurrentVersionNumber(versionCallback) {
    // Make a scripted HTTP request to a backend version API
    let request = new XMLHttpRequest();
    request.open("GET", "https://encrypted.google.com/api/version");
    request.send();

    // Register a callback that will be invoked when the response arrives
    request.onload = function() {
        if (request.status === 200) {
            // If HTTP status is good, get version number and call callback.
            let currentVersion = parseFloat(request.responseText);
            versionCallback(null,currentVersion);
        } else {
            // Otherwise report an error to the callback
            versionCallback(request.response.statusText, null);
        }
    };
    // Register another callback that will be invoked for network errors
    request.onerror = request.ontimeout = function(e) {
        versionCallback(e.type, null);
    };
}

// Diver code
getCurrentVersionNumber(basicCallBack);


// Callbacks and Events in Node
(() => {
    const fs = require("fs");   // The `fs` module has filesystem-related APIs
    let options = {             // An object to hold options for our program
        // Default options would go here
    };

    // Read a configuration file, then call the callback function
    fs.readFile("config.json", "utf-8", (err, text) => {
        if (err) {
            // If there was an error, display a warning, but continue
            console.warn("Could not read config file:", err);
        } else {
            // Otherwise, parse the file contents and assign to the options object
            Object.assign(options, JSON.parse(text));
        }

        // In either case, we can now start running the program
        // startProgram(options);
    });
})();


// Node also defines a number of event-based APIs.
(() => {
    const https = require("https");

    // Read the text content of the URL and asynchronously pass it to the callback.
    function getText(url, callback) {
        // Start an HTTP GET request for the URL
        let request = https.get(url);

        // Register a function to handle the "response" event
        request.on("response", response => {
            // The response event means that response headers have been received
            let httpStatus = response.statusCode;

            // The body of the HTTP response has not been received yet.
            // So we register more vent handlers to be called when it arrives.
            response.setEncoding("utf-8");  // We're expecting Unicode text
            let body = "";                  // Which we will accumulate here.

            // This event handler is called when a chunk of the body is ready
            response.on("data", chunk => { body += chunk; });

            // This event handler is called when the response is complete
            response.on("end", () => {
                if (httpStatus === 200) {   // If the HTTP response was good
                    callback(null, body);   // Pass response body to the callback
                } else {                    // Otherwise pass an error
                    callback(httpStatus, null);
                }
            });
        });

        // We also register an event handler for lower-level network errors
        request.on("error", (err) => {
            callback(err, null);
        });
    }

    // Driver code
    getText("https://encrypted.google.com/api/version", basicCallBack);
})();

