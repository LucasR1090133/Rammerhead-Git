// Existing code...

proxyServer.GET('/mainport', (req, res) => {
    // existing code
});

proxyServer.GET('/shuffleDict', (req, res) => {
    const shuffleDict = StrShuffler.generateDictionary();
    res.end(JSON.stringify(shuffleDict));
});

// Existing code...