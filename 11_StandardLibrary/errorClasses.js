
class HTTPError extends Error {
    constructor(status, message, url) {
        super(`${status} ${message}: ${url}`);
        this.status = status;
        this.message = message;
        this.url = url;
    }

    get name() { return "HTTPError"; }
}

let error = new HTTPError(
    404, "Not Found", "https://example.com");
error.status;
error.message;
error.name;


