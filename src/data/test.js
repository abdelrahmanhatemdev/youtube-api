
{
    "data": {
        "kind": "youtube#videoListResponse",
        "etag": "r76quznSANa26T2uBILq6DymCkc",
        "items": [
            {
                "kind": "youtube#video",
                "etag": "m84zJTMYywpkCGbdX3QJilpM5Sg",
                "id": "hlWiI4xVXKY",
                "contentDetails": {
                    "duration": "PT3H3M39S",
                    "dimension": "2d",
                    "definition": "hd",
                    "caption": "false",
                    "licensedContent": true,
                    "contentRating": {},
                    "projection": "rectangular"
                },
                "statistics": {
                    "viewCount": "248801417",
                    "likeCount": "1640420",
                    "favoriteCount": "0",
                    "commentCount": "51510"
                },
                "topicDetails": {
                    "topicCategories": [
                        "https://en.wikipedia.org/wiki/Jazz",
                        "https://en.wikipedia.org/wiki/Music"
                    ]
                }
            }
        ],
        "pageInfo": {
            "totalResults": 1,
            "resultsPerPage": 1
        }
    },
    "status": 200,
    "statusText": "",
    "headers": {
        "cache-control": "private",
        "content-encoding": "gzip",
        "content-length": "437",
        "content-type": "application/json; charset=UTF-8",
        "date": "Wed, 20 Mar 2024 18:29:00 GMT",
        "server": "scaffolding on HTTPServer2",
        "vary": "Origin, X-Origin, Referer"
    },
    "config": {
        "transitional": {
            "silentJSONParsing": true,
            "forcedJSONParsing": true,
            "clarifyTimeoutError": false
        },
        "adapter": [
            "xhr",
            "http"
        ],
        "transformRequest": [
            null
        ],
        "transformResponse": [
            null
        ],
        "timeout": 0,
        "xsrfCookieName": "XSRF-TOKEN",
        "xsrfHeaderName": "X-XSRF-TOKEN",
        "maxContentLength": -1,
        "maxBodyLength": -1,
        "env": {},
        "headers": {
            "Accept": "application/json, text/plain, */*"
        },
        "params": {
            "part": "contentDetails,statistics,topicDetails",
            "maxResults": 50,
            "key": "AIzaSyAFoMGCmYTz32RQxZ6DECC-VCeKi_Txpjs",
            "id": "hlWiI4xVXKY"
        },
        "method": "get",
        "url": "https://www.googleapis.com/youtube/v3/videos"
    },
    "request": {}
}