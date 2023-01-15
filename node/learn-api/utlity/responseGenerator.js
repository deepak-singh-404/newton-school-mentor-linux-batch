const sendResponse = (res, statusCode, data) => {
    res.writeHead(statusCode, { "Content-Type": "application/json" });
    res.write(JSON.stringify(data));
    res.end();
}

module.exports = { sendResponse }