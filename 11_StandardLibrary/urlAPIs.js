
function showURLProps(url) {
    const properties = {
        href: url.href,
        origin: url.origin,
        protocol: url.protocol,
        host: url.host,
        hostname: url.hostname,
        port: url.port,
        pathname: url.pathname,
        search: url.search,
        hash: url.hash,
        username: url.username,
        password: url.password
    }
    console.table(properties);
}

// Creating a URL provides a number of reusable properties
const createURL = (()=> {
    let url = new URL('https://google.com/s?q=JavaScript');
    showURLProps(url);
})();


// URLs can include passwords and usernames
(() => {
    const url = new URL("ftp://admin:1337!@ftp.example.com");
    showURLProps(url);
})();


// Origin is a read-only composite of host and protocol
// (and occasionally the port)
(() => {
    let url = new URL("https://google.com");
    showURLProps(url);
    url.pathname = "api/search";
    url.search = "q=test";
    url.toString();
    showURLProps(url);
})();

