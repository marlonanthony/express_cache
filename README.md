# express_cache
Playing around with caching in express
The first request will take 1000ms plus however long the server takes to send back the response. On the second request it will come from the cache and therefore bypass the setTimout and only take a few ms. 
