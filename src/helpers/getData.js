import { search } from "../api/youtube";



const items = [
    {
        "kind": "youtube#searchResult",
        "etag": "X3qnZaKW4zXzYoAuq33mrRwspfo",
        "id": {
            "kind": "youtube#playlist",
            "playlistId": "PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv"
        },
        "snippet": {
            "publishedAt": "2021-05-26T15:43:30Z",
            "channelId": "UCSNkfKl4cU-55Nm-ovsvOHQ",
            "title": "Learn JavaScript in Arabic 2021",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/GM6dQBmc-Xg/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/GM6dQBmc-Xg/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/GM6dQBmc-Xg/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Elzero Web School",
            "liveBroadcastContent": "none",
            "publishTime": "2021-05-26T15:43:30Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "sufqVYZ42_sbzSFd3TENkYBbjiw",
        "id": {
            "kind": "youtube#playlist",
            "playlistId": "PLknwEmKsW8OuTqUDaFRBiAViDZ5uI3VcE"
        },
        "snippet": {
            "publishedAt": "2022-01-01T05:52:36Z",
            "channelId": "UCbQh1yxBPVhyjB-G_blFFEQ",
            "title": "كورس جافا سكريبت كامل | Javascript Tutorial",
            "description": "اذا كنت من محبي البرمجة فحتماً قد وقع نظرك على لغة javascript او المعروفة بلغة js لكن هل تملك المعلومات الكافية عنها؟! تعتبر لغة ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/PWuTLTFMtYw/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/PWuTLTFMtYw/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/PWuTLTFMtYw/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Abdelrahman Gamal",
            "liveBroadcastContent": "none",
            "publishTime": "2022-01-01T05:52:36Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "yWRnWHRO75hM1imkDHdCGyA5svo",
        "id": {
            "kind": "youtube#video",
            "videoId": "W6NZfCO5SIk"
        },
        "snippet": {
            "publishedAt": "2018-04-24T02:37:33Z",
            "channelId": "UCWv7vMbMWH4-V0ZXdmDpPBA",
            "title": "JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour",
            "description": "Learn JavaScript basics in 1 hour! ⚡ This beginner-friendly tutorial covers everything you need to start coding. Ready to dive ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/W6NZfCO5SIk/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/W6NZfCO5SIk/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Programming with Mosh",
            "liveBroadcastContent": "none",
            "publishTime": "2018-04-24T02:37:33Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "QINFG_inF_q2KgtnzexNmaum4LA",
        "id": {
            "kind": "youtube#channel",
            "channelId": "UCmXmlB4-HJytD7wek0Uo97A"
        },
        "snippet": {
            "publishedAt": "2018-12-25T10:37:24Z",
            "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
            "title": "JavaScript Mastery",
            "description": "Master modern web development with a project-based approach.",
            "thumbnails": {
                "default": {
                    "url": "https://yt3.ggpht.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s88-c-k-c0xffffffff-no-rj-mo"
                },
                "medium": {
                    "url": "https://yt3.ggpht.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s240-c-k-c0xffffffff-no-rj-mo"
                },
                "high": {
                    "url": "https://yt3.ggpht.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s800-c-k-c0xffffffff-no-rj-mo"
                }
            },
            "channelTitle": "JavaScript Mastery",
            "liveBroadcastContent": "none",
            "publishTime": "2018-12-25T10:37:24Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "lyPCbmaFX1sSJ1PsSHA0BBgBwMU",
        "id": {
            "kind": "youtube#video",
            "videoId": "lkIFF4maKMU"
        },
        "snippet": {
            "publishedAt": "2022-11-22T15:04:57Z",
            "channelId": "UCsBjURrPoezykLs9EqgamOA",
            "title": "100+ JavaScript Concepts you Need to Know",
            "description": "The ultimate 10 minute JavaScript course that quickly breaks down over 100 key concepts every web developer should know.",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/lkIFF4maKMU/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/lkIFF4maKMU/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/lkIFF4maKMU/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Fireship",
            "liveBroadcastContent": "none",
            "publishTime": "2022-11-22T15:04:57Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "xPhI1iDsjGfxpGBpt8AxtaUnw1c",
        "id": {
            "kind": "youtube#video",
            "videoId": "DHjqpvDnNGE"
        },
        "snippet": {
            "publishedAt": "2022-01-13T17:56:13Z",
            "channelId": "UCsBjURrPoezykLs9EqgamOA",
            "title": "JavaScript in 100 Seconds",
            "description": "JavaScript is the the programming language that built the web. Learn how it evolved into a powerful tool for building websites, ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/DHjqpvDnNGE/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/DHjqpvDnNGE/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/DHjqpvDnNGE/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Fireship",
            "liveBroadcastContent": "none",
            "publishTime": "2022-01-13T17:56:13Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "unAxcQio1OpEShMzSvAUVOC7Ob8",
        "id": {
            "kind": "youtube#video",
            "videoId": "PkZNo7MFNFg"
        },
        "snippet": {
            "publishedAt": "2018-12-10T14:13:40Z",
            "channelId": "UC8butISFwT-Wl7EV0hUK0BQ",
            "title": "Learn JavaScript - Full Course for Beginners",
            "description": "This complete 134-part JavaScript tutorial for beginners will teach you everything you need to know to get started with the ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/PkZNo7MFNFg/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/PkZNo7MFNFg/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/PkZNo7MFNFg/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "freeCodeCamp.org",
            "liveBroadcastContent": "none",
            "publishTime": "2018-12-10T14:13:40Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "gUJrT84gEI6nUeOelckhH0Nmdy8",
        "id": {
            "kind": "youtube#video",
            "videoId": "SBmSRK3feww"
        },
        "snippet": {
            "publishedAt": "2023-04-03T16:28:04Z",
            "channelId": "UCB6dvaWu0N8uVq2yKsZ5s5g",
            "title": "JavaScript Full Course - Beginner to Pro - Part 1",
            "description": "In part 1 of this JavaScript tutorial and JavaScript full course, we learn how to build websites with JavaScript and use it with HTML ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/SBmSRK3feww/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/SBmSRK3feww/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/SBmSRK3feww/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "SuperSimpleDev",
            "liveBroadcastContent": "none",
            "publishTime": "2023-04-03T16:28:04Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "GSNuIELFedgGv_YvfHho75LxEI8",
        "id": {
            "kind": "youtube#video",
            "videoId": "lfmg-EJ8gm4"
        },
        "snippet": {
            "publishedAt": "2024-01-01T14:30:18Z",
            "channelId": "UC4SVo0Ue36XCfOyb5Lh1viQ",
            "title": "JavaScript Full Course for free 🌐 (2024)",
            "description": "javascript #tutorial #course ⭐Time Stamps⭐ #1 00:00:00 JavaScript tutorial for beginners #2 00:12:32 Variables #3 ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/lfmg-EJ8gm4/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/lfmg-EJ8gm4/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/lfmg-EJ8gm4/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Bro Code",
            "liveBroadcastContent": "none",
            "publishTime": "2024-01-01T14:30:18Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "4VOYecwFH5q3u2D7S86GTzkMhpI",
        "id": {
            "kind": "youtube#playlist",
            "playlistId": "PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP"
        },
        "snippet": {
            "publishedAt": "2020-10-18T02:47:42Z",
            "channelId": "UC3N9i_KvKZYP4F84FPIzgPQ",
            "title": "Namaste 🙏 JavaScript",
            "description": "Namaste JavaScript is a pure in-depth JavaScript Course released for Free on Youtube. It will cover the core concepts of ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/pN6jk0uUrD8/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/pN6jk0uUrD8/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/pN6jk0uUrD8/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Akshay Saini",
            "liveBroadcastContent": "none",
            "publishTime": "2020-10-18T02:47:42Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "QreE9ayOE-W20O6scvEgjj-tjxI",
        "id": {
            "kind": "youtube#video",
            "videoId": "8dWL3wF_OMw"
        },
        "snippet": {
            "publishedAt": "2022-03-05T16:39:40Z",
            "channelId": "UC4SVo0Ue36XCfOyb5Lh1viQ",
            "title": "JavaScript Full Course for free 🌐",
            "description": "JavaScript #tutorial #beginners JavaScript tutorial for beginners full course ⭐️Time Stamps⭐️ #1 (00:00:00) JavaScript tutorial ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/8dWL3wF_OMw/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/8dWL3wF_OMw/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/8dWL3wF_OMw/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Bro Code",
            "liveBroadcastContent": "none",
            "publishTime": "2022-03-05T16:39:40Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "Ct02u5YC60epS6vGPVnPxoMIPDY",
        "id": {
            "kind": "youtube#video",
            "videoId": "aXOChLn5ZdQ"
        },
        "snippet": {
            "publishedAt": "2022-11-24T16:00:11Z",
            "channelId": "UCsBjURrPoezykLs9EqgamOA",
            "title": "JavaScript for the Haters",
            "description": "Why does everybody hate JavaScript so much? A complete roast of JS that highlights the strongest criticisms against the world's ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/aXOChLn5ZdQ/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/aXOChLn5ZdQ/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/aXOChLn5ZdQ/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Fireship",
            "liveBroadcastContent": "none",
            "publishTime": "2022-11-24T16:00:11Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "sl8Ijq53PiFswGS5_RnLJKVzmUs",
        "id": {
            "kind": "youtube#playlist",
            "playlistId": "PLjwdMgw5TTLXgsTQE_1PpRkC_yX47ZcGV"
        },
        "snippet": {
            "publishedAt": "2022-10-03T10:32:17Z",
            "channelId": "UCj_iGliGCkLcHSZ8eqVNPDQ",
            "title": "Apprendre le JavaScript",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/asToYAq0F-I/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/asToYAq0F-I/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/asToYAq0F-I/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Grafikart.fr",
            "liveBroadcastContent": "none",
            "publishTime": "2022-10-03T10:32:17Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "oeQj_lxjvZ7sj79eal0XSUTGTpc",
        "id": {
            "kind": "youtube#video",
            "videoId": "gIGGhFlGgLI"
        },
        "snippet": {
            "publishedAt": "2022-11-15T18:39:42Z",
            "channelId": "UCSNkfKl4cU-55Nm-ovsvOHQ",
            "title": "[Arabic] Learn JavaScript In One Video - Part One",
            "description": "Learn JavaScript In One Video - Part One Lessons From 001 To 101 The Course In 188 Separated Videos ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/gIGGhFlGgLI/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/gIGGhFlGgLI/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/gIGGhFlGgLI/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Elzero Web School",
            "liveBroadcastContent": "none",
            "publishTime": "2022-11-15T18:39:42Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "F_aeuMuBg2dV-_w3nzl6M0SnrIg",
        "id": {
            "kind": "youtube#video",
            "videoId": "jS4aFq5-91M"
        },
        "snippet": {
            "publishedAt": "2021-06-21T16:42:15Z",
            "channelId": "UC8butISFwT-Wl7EV0hUK0BQ",
            "title": "JavaScript Programming - Full Course",
            "description": "Learn JavaScript from scratch by solving over a hundred different coding challenges. Go here for the interactive browser version: ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/jS4aFq5-91M/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/jS4aFq5-91M/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/jS4aFq5-91M/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "freeCodeCamp.org",
            "liveBroadcastContent": "none",
            "publishTime": "2021-06-21T16:42:15Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "VyXAVBt77tt6hRCR8ohg80G_mxg",
        "id": {
            "kind": "youtube#video",
            "videoId": "WuzcWpnEZYg"
        },
        "snippet": {
            "publishedAt": "2022-12-10T13:55:23Z",
            "channelId": "UCGP8LgaWO1lLfFQUQ2BA7rA",
            "title": "ملخص الجافاسكريبت في 15 دقيقة ؟ (شرح للجافاسكريبت) | JavaScript/Node.js in 15 mins (Arabic)",
            "description": "تعالوا نتعرف على أهمية وقوة الجافاسكريبت والسبب اللي مخلي الشركات بتتبناها في 2022 وغالبا هتبقى هي اللغة المتصدرة على ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/WuzcWpnEZYg/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/WuzcWpnEZYg/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/WuzcWpnEZYg/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Yehia Tech يحيى تك",
            "liveBroadcastContent": "none",
            "publishTime": "2022-12-10T13:55:23Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "8whe_O7kAKZXBWCEYph43eiSUXc",
        "id": {
            "kind": "youtube#playlist",
            "playlistId": "PLURN6mxdcwL86Q8tCF1Ef6G6rN2jAg5Ht"
        },
        "snippet": {
            "publishedAt": "2022-07-14T19:24:14Z",
            "channelId": "UCPN8Us5Faf33tXVgjKviurQ",
            "title": "Javascript Dersleri | Visual Studio Code",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/mcwBvvThO40/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/mcwBvvThO40/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/mcwBvvThO40/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Enes Bayram",
            "liveBroadcastContent": "none",
            "publishTime": "2022-07-14T19:24:14Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "aOZ5WMyndtpArjiQ4gPPBoe1tuI",
        "id": {
            "kind": "youtube#video",
            "videoId": "5-oiLKEWIEw"
        },
        "snippet": {
            "publishedAt": "2023-05-01T03:26:26Z",
            "channelId": "UClLXKYEEM8OBBx85DOa6-cg",
            "title": "Best Programming Languages #programming #coding #javascript",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/5-oiLKEWIEw/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/5-oiLKEWIEw/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/5-oiLKEWIEw/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Devslopes",
            "liveBroadcastContent": "none",
            "publishTime": "2023-05-01T03:26:26Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "9CdFP9kPFN27QYBZGm62xKoNmVM",
        "id": {
            "kind": "youtube#video",
            "videoId": "13wL3IMDaHo"
        },
        "snippet": {
            "publishedAt": "2021-11-07T15:00:01Z",
            "channelId": "UCJv37tcBvJlBF2MoVMRMvbQ",
            "title": "ماذا يمكنك أن تفعل مع لغة JavaScript",
            "description": "هنالك استخدامات عديدة للغة جافاسكربت، من إنشاء الواجهات الأمامية لمواقع الويب، والواجهات الخلفية، إلى تطوير تطبيقات الجوال وسطح ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/13wL3IMDaHo/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/13wL3IMDaHo/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/13wL3IMDaHo/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "أكاديمية حسوب",
            "liveBroadcastContent": "none",
            "publishTime": "2021-11-07T15:00:01Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "xT8jC9V-OXJJ6GpfpAlhvN0jpYs",
        "id": {
            "kind": "youtube#video",
            "videoId": "FtaQSdrl7YA"
        },
        "snippet": {
            "publishedAt": "2024-02-28T15:03:22Z",
            "channelId": "UCdngmbVKX1Tgre699-XLlUA",
            "title": "JavaScript Tutorial for Beginners [JS Crash Course 2024]",
            "description": "JavaScript Tutorial for Beginners - Full JavaScript Course to learn JavaScript with Hands-On Examples and get the Complete ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/FtaQSdrl7YA/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/FtaQSdrl7YA/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/FtaQSdrl7YA/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "TechWorld with Nana",
            "liveBroadcastContent": "none",
            "publishTime": "2024-02-28T15:03:22Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "i2ifcOKsNhD3Fy8Hf6os572-vTM",
        "id": {
            "kind": "youtube#playlist",
            "playlistId": "PLwLsbqvBlImFB8AuT6ENIg-s87ys4yGWI"
        },
        "snippet": {
            "publishedAt": "2015-07-04T11:40:23Z",
            "channelId": "UCsFoQ4A9CZbF3qag317uZZQ",
            "title": "Cours complet JavaScript - Tutoriel / Formation pour tous",
            "description": "Nouvelle série de vidéos pour apprendre à coder progressivement en JavaScript. Cette playlist forme un cours complet ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/VZLflMqC6dI/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/VZLflMqC6dI/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/VZLflMqC6dI/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Pierre Giraud",
            "liveBroadcastContent": "none",
            "publishTime": "2015-07-04T11:40:23Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "6FEBcOaQJsY03mcJmKYjymrjRvg",
        "id": {
            "kind": "youtube#video",
            "videoId": "BI1o2H9z9fo"
        },
        "snippet": {
            "publishedAt": "2023-07-26T12:40:21Z",
            "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
            "title": "Modern JavaScript From The Beginning | First 12 Hours",
            "description": "This is the first 12 hours of my 37-hour JavaScript course. In thes video we will go over the fundamentals in-depth. Get The Full ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/BI1o2H9z9fo/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/BI1o2H9z9fo/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/BI1o2H9z9fo/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Traversy Media",
            "liveBroadcastContent": "none",
            "publishTime": "2023-07-26T12:40:21Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "WObXiMLyffkyZpK2p_lFrhvZx9k",
        "id": {
            "kind": "youtube#video",
            "videoId": "efz9Ylw7_qk"
        },
        "snippet": {
            "publishedAt": "2022-04-28T12:37:45Z",
            "channelId": "UCtk1PX6rwD1A4yBsfXTVCcw",
            "title": "(في أقل من ساعة) كورس جافا سكريبت كامل | JavaScript Tutorial for Beginners",
            "description": "كورسات في البرمجة - Korsat X Parmaga ================================ كورسات في البرمجة هي قناة متخصصة في البرمجة ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/efz9Ylw7_qk/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/efz9Ylw7_qk/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/efz9Ylw7_qk/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "كورسات في البرمجة - Korsat X Parmaga",
            "liveBroadcastContent": "none",
            "publishTime": "2022-04-28T12:37:45Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "j7pdkmiwlkpUIhsh7kNUeMbql3k",
        "id": {
            "kind": "youtube#video",
            "videoId": "hdI2bqOjy3c"
        },
        "snippet": {
            "publishedAt": "2019-03-13T15:46:32Z",
            "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
            "title": "JavaScript Crash Course For Beginners",
            "description": "In this crash course we will go over the fundamentals of JavaScript including more modern syntax like classes, arrow functions, etc ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/hdI2bqOjy3c/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/hdI2bqOjy3c/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/hdI2bqOjy3c/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Traversy Media",
            "liveBroadcastContent": "none",
            "publishTime": "2019-03-13T15:46:32Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "J81D8hhthA-SR61RLn-ToscAml0",
        "id": {
            "kind": "youtube#playlist",
            "playlistId": "PLGjplNEQ1it_oTvuLRNqXfz_v_0pq6unW"
        },
        "snippet": {
            "publishedAt": "2023-11-17T14:47:51Z",
            "channelId": "UC1XBh-m27kkgwLAwu_SRJBg",
            "title": "JavaScript Full Course (2024) - Beginners to Pro",
            "description": "JavaScript is one of the most used coding language by Developers & is heavily used in Website Development. Learning this will ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/ajdRvxDWH4w/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/ajdRvxDWH4w/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/ajdRvxDWH4w/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Shradha Khapra",
            "liveBroadcastContent": "none",
            "publishTime": "2023-11-17T14:47:51Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "dgCej_x-_4BhoEw-lkYfGQh9YmI",
        "id": {
            "kind": "youtube#playlist",
            "playlistId": "PLYyqC4bNbCIeLEjcSPO61bsGPKEvYceb0"
        },
        "snippet": {
            "publishedAt": "2022-03-05T10:52:19Z",
            "channelId": "UCjRxQhyzA8wLypJfq6P7opQ",
            "title": "كورس جافا سكريبت شامل | دروس جافاسكريبت javascript من الصفر",
            "description": "تعلم لغة جافا سكريبت javascript تماما من الصفر و بدون أبي معرفة سابقة بالبرمجة و حتى الوصول إلى مرحلة متقدمة عن طريق هذه السلسلة ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/TbHeHAyAV7Q/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/TbHeHAyAV7Q/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/TbHeHAyAV7Q/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "أكاديمية ترميز",
            "liveBroadcastContent": "none",
            "publishTime": "2022-03-05T10:52:19Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "QtIWB7zylvLJcrfWQXj6L_pPg3M",
        "id": {
            "kind": "youtube#playlist",
            "playlistId": "PLDyJYA6aTY1kJIwbYHzGOuvSMNTfqksmk"
        },
        "snippet": {
            "publishedAt": "2020-12-04T18:02:01Z",
            "channelId": "UCCXF68Da_ndcmvv_9OG75Cw",
            "title": "Уроки JavaScript для начинающих с нуля!",
            "description": "Уроки по изучению языка программирования JavaScript. За курс мы научимся писать код на JS и управлять HTML ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/fHl7UyRjOf0/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/fHl7UyRjOf0/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/fHl7UyRjOf0/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Школа itProger / Программирование",
            "liveBroadcastContent": "none",
            "publishTime": "2020-12-04T18:02:01Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "2NxMU1M1OSLHXoh0vHgj1oEJiRQ",
        "id": {
            "kind": "youtube#video",
            "videoId": "c-I5S_zTwAc"
        },
        "snippet": {
            "publishedAt": "2019-12-09T19:15:01Z",
            "channelId": "UCRLEADhMcb8WUdnQ5_Alk7g",
            "title": "Learn JAVASCRIPT in just 5 MINUTES (2020)",
            "description": "Join the Freelance Code Bootcamp -- https://freemote.com Get the Free JavaScript Syntax Cheat Sheet ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/c-I5S_zTwAc/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/c-I5S_zTwAc/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/c-I5S_zTwAc/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Aaron Jack",
            "liveBroadcastContent": "none",
            "publishTime": "2019-12-09T19:15:01Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "79V-tqTJQwClZs6byp15inxIUfM",
        "id": {
            "kind": "youtube#video",
            "videoId": "zJSY8tbf_ys"
        },
        "snippet": {
            "publishedAt": "2022-08-24T13:07:36Z",
            "channelId": "UC8butISFwT-Wl7EV0hUK0BQ",
            "title": "Frontend Web Development Bootcamp Course (JavaScript, HTML, CSS)",
            "description": "Learn JavaScript, HTML, and CSS in this Frontend Web Development course. In this massive course, you will go from no coding ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/zJSY8tbf_ys/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/zJSY8tbf_ys/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/zJSY8tbf_ys/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "freeCodeCamp.org",
            "liveBroadcastContent": "none",
            "publishTime": "2022-08-24T13:07:36Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "PcYufV5RorxRiA2HQp7B45RFGl8",
        "id": {
            "kind": "youtube#video",
            "videoId": "uaWYRL0g1iw"
        },
        "snippet": {
            "publishedAt": "2023-04-30T12:00:29Z",
            "channelId": "UCcJQ96WlEhJ0Ve0SLmU310Q",
            "title": "How to MASTER Javascript FAST in 2023",
            "description": "Try RunJS for FREE - Your Javascript Desktop Playground - https://bit.ly/41OUi7H In this video, I will tell you exactly how I would ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/uaWYRL0g1iw/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/uaWYRL0g1iw/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/uaWYRL0g1iw/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Internet Made Coder",
            "liveBroadcastContent": "none",
            "publishTime": "2023-04-30T12:00:29Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "c82E1L3-mimr0kDdVT7jadK6OVA",
        "id": {
            "kind": "youtube#video",
            "videoId": "quJzdnXuNDc"
        },
        "snippet": {
            "publishedAt": "2023-01-23T17:31:44Z",
            "channelId": "UCZ9qFEC82qM6Pk-54Q4TVWA",
            "title": "How to Learn Javascript in 2023 (From ZERO)",
            "description": "Is Javascript the programming language you are 100% set on learning? This video lays out a complete strategy for how to learn it ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/quJzdnXuNDc/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/quJzdnXuNDc/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/quJzdnXuNDc/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Andy Sterkowitz",
            "liveBroadcastContent": "none",
            "publishTime": "2023-01-23T17:31:44Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "cEcsDoYKcjb1IjUPUFZmTgU1pqc",
        "id": {
            "kind": "youtube#video",
            "videoId": "FSs_JYwnAdI"
        },
        "snippet": {
            "publishedAt": "2019-07-02T17:58:13Z",
            "channelId": "UCsBjURrPoezykLs9EqgamOA",
            "title": "JavaScript: How It&#39;s Made",
            "description": "Learn the computer science behind #JavaScript by looking at how it works under the hood. Understand why JS is called a ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/FSs_JYwnAdI/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/FSs_JYwnAdI/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/FSs_JYwnAdI/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Fireship",
            "liveBroadcastContent": "none",
            "publishTime": "2019-07-02T17:58:13Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "61V67y3y4sYB17bdqhuCQokyAko",
        "id": {
            "kind": "youtube#playlist",
            "playlistId": "PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR"
        },
        "snippet": {
            "publishedAt": "2022-07-14T12:51:40Z",
            "channelId": "UCeVMnSShP_Iviwkknt83cww",
            "title": "JavaScript Tutorials for Beginners in Hindi",
            "description": "JavaScript Course in Hindi: This Javascript tutorial in Hindi course is designed for beginners with an aim to take JavaScript/ES6 ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/ER9SspLe4Hg/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/ER9SspLe4Hg/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/ER9SspLe4Hg/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "CodeWithHarry",
            "liveBroadcastContent": "none",
            "publishTime": "2022-07-14T12:51:40Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "zYPmdnW4lW5RIWYYTBSZUsBto5k",
        "id": {
            "kind": "youtube#playlist",
            "playlistId": "PLOmL3sL-afbRVTvedkIrQcDwg2UY0JGTF"
        },
        "snippet": {
            "publishedAt": "2023-03-29T07:06:53Z",
            "channelId": "UCeafAga11ja18OOSTvZuHAQ",
            "title": "The Complete JavaScript Course 2023",
            "description": "\"Really, really well-made course. Super in-depth, with great challenges and projects that will solidify your Javascript ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/1uYQRG5csT8/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/1uYQRG5csT8/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/1uYQRG5csT8/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "The Coding Classroom",
            "liveBroadcastContent": "none",
            "publishTime": "2023-03-29T07:06:53Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "-QPwEQzgTBqZlAQIadnxPzGS_wo",
        "id": {
            "kind": "youtube#video",
            "videoId": "Sh6lK57Cuk4"
        },
        "snippet": {
            "publishedAt": "2019-06-18T17:44:51Z",
            "channelId": "UCsBjURrPoezykLs9EqgamOA",
            "title": "The Weird History of JavaScript",
            "description": "The history of JavaScript over the last 25 years. How did a simple scripting language for Netscape evolve into the world's most ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/Sh6lK57Cuk4/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/Sh6lK57Cuk4/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/Sh6lK57Cuk4/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Fireship",
            "liveBroadcastContent": "none",
            "publishTime": "2019-06-18T17:44:51Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "4sqGEjGu6aoIc3LRXyrlIP_xXQw",
        "id": {
            "kind": "youtube#video",
            "videoId": "LO5eTH4Pe8E"
        },
        "snippet": {
            "publishedAt": "2020-11-23T15:30:03Z",
            "channelId": "UCsvqVGtbbyHaMoevxPAq9Fg",
            "title": "JavaScript In 10 Minutes | JavaScript Tutorial For Beginners | Learn JavaScript | Simplilearn",
            "description": "Full Stack Developer (MERN Stack): ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/LO5eTH4Pe8E/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/LO5eTH4Pe8E/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/LO5eTH4Pe8E/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Simplilearn",
            "liveBroadcastContent": "none",
            "publishTime": "2020-11-23T15:30:03Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "k9cBrYzpH_4-c4beb7C67pPlFOk",
        "id": {
            "kind": "youtube#playlist",
            "playlistId": "PLNS3PujVHR-ay0HpqbsPWccgEhJZk6K9u"
        },
        "snippet": {
            "publishedAt": "2022-02-18T16:44:54Z",
            "channelId": "UCUcemL3X42d5lkcdtTlnbYQ",
            "title": "JavaScript darslari",
            "description": "Bu darslar JavaSriptdan ko'plab loyihalarni o'z ichiga olgan. Undan tashqari ko'plab REST API ga oid loyihalar bo'ladi.",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/zJuDsji3IbE/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/zJuDsji3IbE/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/zJuDsji3IbE/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Akhror Web",
            "liveBroadcastContent": "none",
            "publishTime": "2022-02-18T16:44:54Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "7SfcpQigWqajyLfm7bQ60pG2mxg",
        "id": {
            "kind": "youtube#video",
            "videoId": "TmcEmsyYKXE"
        },
        "snippet": {
            "publishedAt": "2023-05-22T02:51:52Z",
            "channelId": "UCB6dvaWu0N8uVq2yKsZ5s5g",
            "title": "JavaScript Full Course - Beginner to Pro - Part 2 Lesson 13",
            "description": "In part 2 lesson 13 of this JavaScript tutorial and JavaScript full course, we'll start the Amazon project and learn to use JavaScript ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/TmcEmsyYKXE/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/TmcEmsyYKXE/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/TmcEmsyYKXE/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "SuperSimpleDev",
            "liveBroadcastContent": "none",
            "publishTime": "2023-05-22T02:51:52Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "5ky-BwRhRFRcsMyQbdkwOCL6PWc",
        "id": {
            "kind": "youtube#video",
            "videoId": "x5trGVMKTdY"
        },
        "snippet": {
            "publishedAt": "2021-06-21T20:21:42Z",
            "channelId": "UCcabW7890RKJzL968QWEykA",
            "title": "CS50W - Lecture 5 - JavaScript",
            "description": "This is CS50W, CS50's Web Programming with Python and JavaScript. Register for free at https://cs50.edx.org/web. Slides and ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/x5trGVMKTdY/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/x5trGVMKTdY/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/x5trGVMKTdY/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "CS50",
            "liveBroadcastContent": "none",
            "publishTime": "2021-06-21T20:21:42Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "wO-Mn8xH3Q5yOh1EGYSs9MUEb4w",
        "id": {
            "kind": "youtube#video",
            "videoId": "IC5vBKc21X8"
        },
        "snippet": {
            "publishedAt": "2022-08-09T10:36:21Z",
            "channelId": "UC59K-uG2A5ogwIrHw4bmlEg",
            "title": "JavaScript Programming Tutorial for Beginners",
            "description": "00:00:00 - intro 00:06:01 - Getting started 00:15:51 - NodeJS, VS Code Installation 00:22:00 - Variables in JavaScript 00:38:13 ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/IC5vBKc21X8/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/IC5vBKc21X8/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/IC5vBKc21X8/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Telusko",
            "liveBroadcastContent": "none",
            "publishTime": "2022-08-09T10:36:21Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "I80IU1kaXWOk0j4qatMpEWojb1s",
        "id": {
            "kind": "youtube#video",
            "videoId": "EfAl9bwzVZk"
        },
        "snippet": {
            "publishedAt": "2021-01-20T15:30:01Z",
            "channelId": "UCY38RvRIxYODO4penyxUwTg",
            "title": "JavaScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours",
            "description": "Web Dev Roadmap for Beginners (Free!): https://bit.ly/DaveGrayWebDevRoadmap This JavaScript Full Course for Beginners is ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/EfAl9bwzVZk/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/EfAl9bwzVZk/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/EfAl9bwzVZk/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Dave Gray",
            "liveBroadcastContent": "none",
            "publishTime": "2021-01-20T15:30:01Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "-itcCRrF1I0G6To5i1uHM12rYJs",
        "id": {
            "kind": "youtube#video",
            "videoId": "9emXNzqCKyg"
        },
        "snippet": {
            "publishedAt": "2019-07-15T16:41:44Z",
            "channelId": "UCsBjURrPoezykLs9EqgamOA",
            "title": "The JavaScript Survival Guide",
            "description": "The JavaScript Survival Guide provides protection from the so-called \"weird\" features that you will encounter as a JS developer.",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/9emXNzqCKyg/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/9emXNzqCKyg/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/9emXNzqCKyg/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Fireship",
            "liveBroadcastContent": "none",
            "publishTime": "2019-07-15T16:41:44Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "dFJp9gsbzA8SYhHdo5C7qVS3XuQ",
        "id": {
            "kind": "youtube#video",
            "videoId": "Mus_vwhTCq0"
        },
        "snippet": {
            "publishedAt": "2018-09-27T18:56:49Z",
            "channelId": "UCsBjURrPoezykLs9EqgamOA",
            "title": "JavaScript Pro Tips - Code This, NOT That",
            "description": "New Series! Code this , not that . Learn how to write solid modern JavaScript and avoid bad code from the olden days.",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/Mus_vwhTCq0/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/Mus_vwhTCq0/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/Mus_vwhTCq0/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Fireship",
            "liveBroadcastContent": "none",
            "publishTime": "2018-09-27T18:56:49Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "J7kipL9zd3yJ8zUeAUibJQUm79o",
        "id": {
            "kind": "youtube#video",
            "videoId": "ANCm3oG7htM"
        },
        "snippet": {
            "publishedAt": "2023-11-27T21:05:40Z",
            "channelId": "UCsBjURrPoezykLs9EqgamOA",
            "title": "10 JavaScript changes you missed in 2023",
            "description": "How has JavaScript and web development changed in 2023? Learn about the top 10 updates to Next.js, React, Angular, Vue, and ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/ANCm3oG7htM/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/ANCm3oG7htM/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/ANCm3oG7htM/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Fireship",
            "liveBroadcastContent": "none",
            "publishTime": "2023-11-27T21:05:40Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "vDs6_kBhz1G58QrlEXqz37G5G2c",
        "id": {
            "kind": "youtube#video",
            "videoId": "KQ712CebFDM"
        },
        "snippet": {
            "publishedAt": "2023-02-24T14:30:04Z",
            "channelId": "UCWu_xJfwUuP_JV6RFq2EcXw",
            "title": "Solving JavaScript&#39;s Most NOTORIOUS Interview Question",
            "description": "Can you solve this notorious JavaScript coding interview \"trick\" question? Prepping for your frontend interviews? Use code ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/KQ712CebFDM/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/KQ712CebFDM/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/KQ712CebFDM/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Conner Ardman",
            "liveBroadcastContent": "none",
            "publishTime": "2023-02-24T14:30:04Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "Qt0RIBIxUBM-qZ4ncG3l-A5l4Ko",
        "id": {
            "kind": "youtube#video",
            "videoId": "-3bVuFcteUo"
        },
        "snippet": {
            "publishedAt": "2024-02-16T14:00:00Z",
            "channelId": "UC4JX40jDee_tINbkjycV4Sg",
            "title": "Mastering JavaScript - EVERYTHING You Need To Know",
            "description": "In this video, I've put together a comprehensive guide to mastering JavaScript. We'll start with the basics and work our way up to ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/-3bVuFcteUo/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/-3bVuFcteUo/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/-3bVuFcteUo/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Tech With Tim",
            "liveBroadcastContent": "none",
            "publishTime": "2024-02-16T14:00:00Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "dHEWgsPa0APbJkYkEA8rKEod51k",
        "id": {
            "kind": "youtube#video",
            "videoId": "TnhCX0KkPqs"
        },
        "snippet": {
            "publishedAt": "2022-10-04T10:00:13Z",
            "channelId": "UCHa8J-xnRYOg5VuudfWpBgg",
            "title": "JavaScript Promises  -- Tutorial for Beginners",
            "description": "JavaScript Promises and all their glory! This is episode 12 in a 10 part series I'm calling 10 things Javascript Developers Should ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/TnhCX0KkPqs/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/TnhCX0KkPqs/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/TnhCX0KkPqs/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "ColorCode",
            "liveBroadcastContent": "none",
            "publishTime": "2022-10-04T10:00:13Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "n5sqmwOqUwxdjUr8pk6Ed1Wqifo",
        "id": {
            "kind": "youtube#video",
            "videoId": "xwKbtUP87Dk"
        },
        "snippet": {
            "publishedAt": "2018-05-30T16:00:05Z",
            "channelId": "UCLpesSvLTqehloefv8ZCWpg",
            "title": "JavaScript Basics in 10 Minutes",
            "description": "Happy Web Dev Wednesday! This week we are moving on to the wonderful world of JavaScript. As a basic starting point, we will ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/xwKbtUP87Dk/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/xwKbtUP87Dk/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/xwKbtUP87Dk/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Topknot Clare",
            "liveBroadcastContent": "none",
            "publishTime": "2018-05-30T16:00:05Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "OWbfPgYxcLEG1fDqOt-K4oS2nrQ",
        "id": {
            "kind": "youtube#video",
            "videoId": "ClkIRKlmplY"
        },
        "snippet": {
            "publishedAt": "2023-03-14T19:41:21Z",
            "channelId": "UCGP8LgaWO1lLfFQUQ2BA7rA",
            "title": "كورس جافاسكريبت JavaScript/Node.js (Arabic) - #1 Variables",
            "description": "الفيديو ده بيشرح الVariables وبيفصل المقارنة مبين الvar والlet والconst. وبرده هنعرف حالات الvariables في الJavaScript. هنتعرف ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/ClkIRKlmplY/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/ClkIRKlmplY/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/ClkIRKlmplY/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Yehia Tech يحيى تك",
            "liveBroadcastContent": "none",
            "publishTime": "2023-03-14T19:41:21Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "0OXirsXqOvYpDZ5sDF9weKDfdEU",
        "id": {
            "kind": "youtube#playlist",
            "playlistId": "PLDoPjvoNmBAz7_BgzvNcOaE-m_SnE4jiT"
        },
        "snippet": {
            "publishedAt": "2019-04-26T18:49:24Z",
            "channelId": "UCSNkfKl4cU-55Nm-ovsvOHQ",
            "title": "JavaScript Big Tutorials",
            "description": "JavaScript Big Tutorials to Improve Your JavaScript Skills and Apply What You Learn in The Basic Course.",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/AeXkyj4mXms/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/AeXkyj4mXms/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/AeXkyj4mXms/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Elzero Web School",
            "liveBroadcastContent": "none",
            "publishTime": "2019-04-26T18:49:24Z"
        }
    }
];


export async function getData(searchTerm) {
    let storeObject={}

    let searchObject = localStorage.getItem("search");

    if (searchObject) {
        searchObject = JSON.parse(searchObject);
        let storedTerm = searchObject[searchTerm];

        if (storedTerm) {
            return storedTerm;
            
        }else{
            await createData(searchTerm, storeObject)
        }
    }else{

        await createData(searchTerm, storeObject)
    }
} 


async function createData(searchTerm, searchObject, ) {
    console.log("Fetching from Youtube Quota");
    await search(searchTerm)
    .then(res => {

        if (res.data) {
            const videos = res.data.items;
            if (videos?.length === 50 ){
                searchObject = {...searchObject, [searchTerm]:videos}
            localStorage.setItem("search", JSON.stringify(searchObject))
            }
        }
    })
    .catch(e => {
        console.error(e);
    });
}



getData("food")
