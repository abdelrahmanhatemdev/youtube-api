import { search } from "../api/youtube";

let items =[
    {
        "kind": "youtube#searchResult",
        "etag": "zk5dsWjWXcsGwcn7k-ualZZMY0o",
        "id": {
            "kind": "youtube#video",
            "videoId": "HS90wEvaQE8"
        },
        "snippet": {
            "publishedAt": "2024-03-18T05:30:32Z",
            "channelId": "UCfo-B_-jNhFXXSHEiLBbj1Q",
            "title": "Modern Talking, C C Catch, Boney M, Roxette, Disco Dance Music Hits 70s 80s 90s Eurodisco Megamix",
            "description": "Modern Talking, C C Catch, Boney M, Roxette, Disco Dance Music Hits 70s 80s 90s Eurodisco Megamix Tracklist:   Welcome To ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/HS90wEvaQE8/default_live.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/HS90wEvaQE8/mqdefault_live.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/HS90wEvaQE8/hqdefault_live.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Disco Hits",
            "liveBroadcastContent": "live",
            "publishTime": "2024-03-18T05:30:32Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "rS1hI_3J44XF4nuh5TWv69qja6I",
        "id": {
            "kind": "youtube#video",
            "videoId": "v4KXWsMw8Fc"
        },
        "snippet": {
            "publishedAt": "2024-03-18T08:40:05Z",
            "channelId": "UC4L-dSrzbPoZcr1Av5GvwKw",
            "title": "Relaxing Music For Stress Relief, Anxiety and Depressive States • Heal Mind, Body and Soul",
            "description": "Relaxing Music For Stress Relief, Anxiety and Depressive States • Heal Mind, Body and Soul Music to sleep deeply and rest the ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/v4KXWsMw8Fc/default_live.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/v4KXWsMw8Fc/mqdefault_live.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/v4KXWsMw8Fc/hqdefault_live.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Open Heart Music - Helios 4K",
            "liveBroadcastContent": "live",
            "publishTime": "2024-03-18T08:40:05Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "VxrBQgFaC8ra796uqy8HXGjPjcU",
        "id": {
            "kind": "youtube#video",
            "videoId": "BxPhT3mVVQw"
        },
        "snippet": {
            "publishedAt": "2024-03-18T08:51:47Z",
            "channelId": "UCwobzUc3z-0PrFpoRxNszXQ",
            "title": "🔴 Relaxing Music 24/7, Sleep Music, Stress Relief Music, Spa, Meditation, Yoga, Zen, Calming Music",
            "description": "Enjoy our latest relaxing music live stream: youtube.com/yellowbrickcinema/live Relaxing Music 24/7, Sleep Music, Stress Relief ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/BxPhT3mVVQw/default_live.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/BxPhT3mVVQw/mqdefault_live.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/BxPhT3mVVQw/hqdefault_live.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Yellow Brick Cinema - Relaxing Music",
            "liveBroadcastContent": "live",
            "publishTime": "2024-03-18T08:51:47Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "7YVwED-VVLUKrM8uFQJFqrasSjM",
        "id": {
            "kind": "youtube#video",
            "videoId": "YfgO5fo1_xY"
        },
        "snippet": {
            "publishedAt": "2024-03-18T07:46:38Z",
            "channelId": "UCDFm-w2mWNAPy6sqAPcKnkQ",
            "title": "Monday Vibes 💖🍀 Calm Your Mind ~ Lofi hip hop mix - Lofi music for sleep/study/relax/aesthetic",
            "description": "Monday Vibes Calm Your Mind ~ Lofi hip hop mix - Lofi music for sleep/study/relax/aesthetic ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/YfgO5fo1_xY/default_live.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/YfgO5fo1_xY/mqdefault_live.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/YfgO5fo1_xY/hqdefault_live.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "RELAXATION (LoFi & CHILL)",
            "liveBroadcastContent": "live",
            "publishTime": "2024-03-18T07:46:38Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "V8BK9av9Zqxa49i3EyhgZXSmT4c",
        "id": {
            "kind": "youtube#video",
            "videoId": "NgGJaXDC0wU"
        },
        "snippet": {
            "publishedAt": "2024-03-18T13:49:38Z",
            "channelId": "UCY0f6XgwdlmOL1oV-wJ-DfA",
            "title": "Best Praise and Worship Songs 2023 ✝️  Nonstop Christian Songs Of All Time For Prayers 2023",
            "description": "Music and Video Copyright belongs to @Praise Worship Music. DO NOT reupload, otherwise, you will get copyright strikes.",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/NgGJaXDC0wU/default_live.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/NgGJaXDC0wU/mqdefault_live.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/NgGJaXDC0wU/hqdefault_live.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Praise Worship Music",
            "liveBroadcastContent": "live",
            "publishTime": "2024-03-18T13:49:38Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "El7AVNv8Em1XVacQA5Rihq8eu6o",
        "id": {
            "kind": "youtube#video",
            "videoId": "t_4ob8SB2UI"
        },
        "snippet": {
            "publishedAt": "2024-03-17T09:18:16Z",
            "channelId": "UCAJ1rjf90IFwNGlZUYuoP1Q",
            "title": "Mega Hits 2024 🌱 The Best Of Vocal Deep House Music Mix 2024 🌱 Summer Music Mix 2024",
            "description": "Rihanna, Avicii, Justin Bieber, Kygo, Selena Gomez, Alok, Bastille, David Guetta - Summer Nostalgia Stream/Download: ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/t_4ob8SB2UI/default_live.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/t_4ob8SB2UI/mqdefault_live.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/t_4ob8SB2UI/hqdefault_live.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Magic Club",
            "liveBroadcastContent": "live",
            "publishTime": "2024-03-17T09:18:16Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "1vzxTucH_1a6L5pfOZlC4tVIIT4",
        "id": {
            "kind": "youtube#video",
            "videoId": "eKr6Oks1VbE"
        },
        "snippet": {
            "publishedAt": "2024-03-18T16:54:10Z",
            "channelId": "UCKvKjZ3l9azWz4F49q2R3tQ",
            "title": "Soft Jazz Instrumental Music ☕ Relaxing Jazz Music to Study, Work, Focus ~ Cozy Coffee Shop Ambience",
            "description": "Soft Jazz Instrumental Music ☕ Relaxing Jazz Music to Study, Work, Focus ~ Cozy Coffee Shop Ambience Hello!~ Welcome to ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/eKr6Oks1VbE/default_live.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/eKr6Oks1VbE/mqdefault_live.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/eKr6Oks1VbE/hqdefault_live.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Coffee Relaxing Jazz",
            "liveBroadcastContent": "live",
            "publishTime": "2024-03-18T16:54:10Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "nwur_rXQtLMGG5oJfXEUYkho294",
        "id": {
            "kind": "youtube#video",
            "videoId": "h8Cq1BwdTsg"
        },
        "snippet": {
            "publishedAt": "2024-02-21T13:39:33Z",
            "channelId": "UCBTkFkZUXfuPKisU6kZdn5A",
            "title": "Ozoda  - Ko&#39;k jiguli  (Official Music Video 2024)",
            "description": "Composer: OZODA Lyrics: OZODA Arrangement: DENDY Mix& Master: NZERO Admin: +998977237777 +998901675555 ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/h8Cq1BwdTsg/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/h8Cq1BwdTsg/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/h8Cq1BwdTsg/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Ozoda ",
            "liveBroadcastContent": "none",
            "publishTime": "2024-02-21T13:39:33Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "incb5Zle24kE1iJzGn2a13iHCJQ",
        "id": {
            "kind": "youtube#video",
            "videoId": "3cbnNwxtUUA"
        },
        "snippet": {
            "publishedAt": "2024-03-18T08:23:07Z",
            "channelId": "UCp6_KuNhT0kcFk-jXw9Tivg",
            "title": "Top Songs 2024 ♪ Pop Music Playlist ♪ Music New Songs 2024",
            "description": "Top Songs 2024 ♪ Pop Music Playlist ♪ Music New Songs 2024 Songs in this playlist: 01. Aqua Vibe, Pop Mage - Flowers 02.",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/3cbnNwxtUUA/default_live.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/3cbnNwxtUUA/mqdefault_live.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/3cbnNwxtUUA/hqdefault_live.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Magic Music",
            "liveBroadcastContent": "live",
            "publishTime": "2024-03-18T08:23:07Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "6CufNrTmijPfNz93j-bh9dz0YM0",
        "id": {
            "kind": "youtube#video",
            "videoId": "KQwvYvwI3_c"
        },
        "snippet": {
            "publishedAt": "2024-03-18T16:48:20Z",
            "channelId": "UCJhjE7wbdYAae1G25m0tHAA",
            "title": "TUESDAY MORNING JAZZ: Smooth Jazz Instrumental &amp; Crackling Fireplace ☕ Warm Music for Relaxing",
            "description": "Wake up to the serene embrace of a Tuesday morning with our smooth jazz instrumental rhythms and the soft crackling of a ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/KQwvYvwI3_c/default_live.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/KQwvYvwI3_c/mqdefault_live.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/KQwvYvwI3_c/hqdefault_live.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Cafe Music BGM channel",
            "liveBroadcastContent": "live",
            "publishTime": "2024-03-18T16:48:20Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "7wX81fYxc2Y2DxKr1RNk2-xwRY0",
        "id": {
            "kind": "youtube#video",
            "videoId": "narFtb5tdTQ"
        },
        "snippet": {
            "publishedAt": "2024-03-15T04:11:56Z",
            "channelId": "UCxMAbVFmxKUVGAll0WVGpFw",
            "title": "Cardi B - Enough (Miami) [Official Music Video]",
            "description": "Cardi B - Enough (Miami) Stream/Download: https://CardiB.lnk.to/Miami Subscribe for more official content from Cardi B: ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/narFtb5tdTQ/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/narFtb5tdTQ/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/narFtb5tdTQ/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Cardi B",
            "liveBroadcastContent": "none",
            "publishTime": "2024-03-15T04:11:56Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "ivCP1TGYzGu03ATOPb11_rLpBx0",
        "id": {
            "kind": "youtube#video",
            "videoId": "MoN9ql6Yymw"
        },
        "snippet": {
            "publishedAt": "2023-04-14T04:00:08Z",
            "channelId": "UCa4a-hXHI8bitNXnvyZNzEQ",
            "title": "David Kushner - Daylight (Official Music Video)",
            "description": "Daylight” out now on all platforms: https://davidkushner.lnk.to/daylight Lyrics: [Verse 1] Telling myself I won't go there Oh, but I ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/MoN9ql6Yymw/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/MoN9ql6Yymw/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/MoN9ql6Yymw/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "DavidKushnerVEVO",
            "liveBroadcastContent": "none",
            "publishTime": "2023-04-14T04:00:08Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "RUZKcNNY7R3s6t5RPSJfN4buZFI",
        "id": {
            "kind": "youtube#video",
            "videoId": "lcLcalIJMxU"
        },
        "snippet": {
            "publishedAt": "2024-03-17T13:27:37Z",
            "channelId": "UCwobzUc3z-0PrFpoRxNszXQ",
            "title": "🔴 Relaxing Sleep Music 24/7, Calm Music, Yoga, Sleep Meditation, Insomnia, Spa, Study Music, Sleep",
            "description": "Enjoy our latest relaxing music live stream: youtube.com/yellowbrickcinema/live Relaxing Sleep Music 24/7, Calm Music, Yoga, ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/lcLcalIJMxU/default_live.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/lcLcalIJMxU/mqdefault_live.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/lcLcalIJMxU/hqdefault_live.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Yellow Brick Cinema - Relaxing Music",
            "liveBroadcastContent": "live",
            "publishTime": "2024-03-17T13:27:37Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "m8G8YrrG9_5Q-h_roLbgAK3WbRE",
        "id": {
            "kind": "youtube#video",
            "videoId": "4RDP-LZoNmU"
        },
        "snippet": {
            "publishedAt": "2024-02-24T11:00:06Z",
            "channelId": "UCvt5p3A11M8zd8iJPCC5XvQ",
            "title": "Top music 2024 🍰 Tiktok songs 2024 ~ Best tiktok music 2024",
            "description": "Top music 2024 Tiktok songs 2024 ~ Best tiktok music 2024 Top music 2024 Tiktok songs 2024 ~ Best tiktok music 2024 ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/4RDP-LZoNmU/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/4RDP-LZoNmU/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/4RDP-LZoNmU/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Love Life Lyrics",
            "liveBroadcastContent": "none",
            "publishTime": "2024-02-24T11:00:06Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "QMm_fSDtCuyvCe9ZgaMNJYK2llo",
        "id": {
            "kind": "youtube#video",
            "videoId": "3tDPeqLBbbc"
        },
        "snippet": {
            "publishedAt": "2023-03-15T17:59:15Z",
            "channelId": "UCWQrSQ0wJ3oZshXsZcl_Srg",
            "title": "Drake STOLE Eminem&#39;s Lyrics 😳",
            "description": "Drake - Chicago Freestyle Eminem - Superman.",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/3tDPeqLBbbc/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/3tDPeqLBbbc/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/3tDPeqLBbbc/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Music Media",
            "liveBroadcastContent": "none",
            "publishTime": "2023-03-15T17:59:15Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "Wh7BpvJVgdHpKCfiaz0wLiSQdok",
        "id": {
            "kind": "youtube#video",
            "videoId": "D6yRBniHM6g"
        },
        "snippet": {
            "publishedAt": "2022-10-24T20:39:28Z",
            "channelId": "UCVujWH99XzUbQ_re6leOdPQ",
            "title": "Writing a Song with 3 Random Words || KINGS",
            "description": "skeletons” IS OUT EVERYWHERE     Spotify: ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/D6yRBniHM6g/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/D6yRBniHM6g/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/D6yRBniHM6g/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "KINGS",
            "liveBroadcastContent": "none",
            "publishTime": "2022-10-24T20:39:28Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "MAEnecO2hXV4w_-IeJizB8_AXTw",
        "id": {
            "kind": "youtube#video",
            "videoId": "ALZHF5UqnU4"
        },
        "snippet": {
            "publishedAt": "2016-07-02T18:02:11Z",
            "channelId": "UCEdvpU2pFRCVqU6yIPyTpMQ",
            "title": "Marshmello - Alone (Official Music Video)",
            "description": "Marshmello - Alone (Official Music Video) Stream/Download: https://marshmello.ffm.to/alone A lot of people ask me where Alone ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/ALZHF5UqnU4/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/ALZHF5UqnU4/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/ALZHF5UqnU4/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Marshmello",
            "liveBroadcastContent": "none",
            "publishTime": "2016-07-02T18:02:11Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "5m2R40oqfPO2oCodiwSRXzu6DdU",
        "id": {
            "kind": "youtube#video",
            "videoId": "lZiaYpD9ZrI"
        },
        "snippet": {
            "publishedAt": "2023-04-08T00:00:08Z",
            "channelId": "UChYwYTzrhfxPfJPFWRlYwUg",
            "title": "Ella Baila Sola - (Video Oficial) - Eslabon Armado y Peso Pluma - DEL Records 2023",
            "description": "Mira el video oficial de “Ella Baila Sola” de Eslabon Armado y Peso Pluma. Descarga \"https://delrec.io/ellabailasola\" | Suscribete ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/lZiaYpD9ZrI/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/lZiaYpD9ZrI/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/lZiaYpD9ZrI/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "DEL Records",
            "liveBroadcastContent": "none",
            "publishTime": "2023-04-08T00:00:08Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "M-aPPpQEhqL0i64KNWK15oUOw-A",
        "id": {
            "kind": "youtube#video",
            "videoId": "IaQEmepUfwQ"
        },
        "snippet": {
            "publishedAt": "2023-05-27T11:30:06Z",
            "channelId": "UCphfoKR9Dlc4dJA3Bdpqy0A",
            "title": "Relaxation Music for SPA, MEDITATION, or SLEEP || 2 Hours of Blissfulness",
            "description": "Relax and enjoy your blissful moments with this beautiful music Song Name: Blissful Moments Index: ☆22 By: Yim Salo ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/IaQEmepUfwQ/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/IaQEmepUfwQ/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/IaQEmepUfwQ/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "SURREAL SOUNDS",
            "liveBroadcastContent": "none",
            "publishTime": "2023-05-27T11:30:06Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "5MvEnS8WVYLSmpKDv4t0TST2S9M",
        "id": {
            "kind": "youtube#video",
            "videoId": "-wp98L1wAPY"
        },
        "snippet": {
            "publishedAt": "2023-06-24T22:00:00Z",
            "channelId": "UCcgu5xqR-ZUUy32loXAnprA",
            "title": "Top TRENDING TAGALOG LOVE SONG NONSTOP - Pampatulog Pamatay Puso",
            "description": "Top TRENDING TAGALOG LOVE SONG NONSTOP - Pampatulog Pamatay Puso 01. HABANG AKO'Y NABUBUHAY 02. BIGAY ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/-wp98L1wAPY/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/-wp98L1wAPY/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/-wp98L1wAPY/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "OPM Channel ",
            "liveBroadcastContent": "none",
            "publishTime": "2023-06-24T22:00:00Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "NKl-5LNLSKb2vLP38_5MCMRGuSo",
        "id": {
            "kind": "youtube#video",
            "videoId": "hlWiI4xVXKY"
        },
        "snippet": {
            "publishedAt": "2018-10-07T15:22:12Z",
            "channelId": "UCjzHeG1KWoonmf9d5KBvSiw",
            "title": "Sunny Mornings: Beautiful Relaxing Music • Peaceful Piano Music &amp; Guitar Music by Peder B. Helland",
            "description": "Beautiful relaxing music by Peder B. Helland. Enjoy peaceful piano music and guitar music (\"Sunny Mornings\" ) with birds singing ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/hlWiI4xVXKY/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/hlWiI4xVXKY/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/hlWiI4xVXKY/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Soothing Relaxation",
            "liveBroadcastContent": "none",
            "publishTime": "2018-10-07T15:22:12Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "E0RGaW4bL8jNPxbEThHTj-T2A6U",
        "id": {
            "kind": "youtube#video",
            "videoId": "PGuMmtYecmI"
        },
        "snippet": {
            "publishedAt": "2024-03-18T15:01:18Z",
            "channelId": "UCQINXHZqCU5i06HzxRkujfg",
            "title": "火曜コーヒー: Seaside Cafe Ambience - Bossa Nova &amp; Smooth Jazz Music for Brunch Time - 作業用カフェBGM",
            "description": "Embark on a seaside retreat without leaving your desk with our Seaside Cafe Ambience. ☕ Let the blend of bossa nova and ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/PGuMmtYecmI/default_live.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/PGuMmtYecmI/mqdefault_live.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/PGuMmtYecmI/hqdefault_live.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "BGM channel",
            "liveBroadcastContent": "live",
            "publishTime": "2024-03-18T15:01:18Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "wrn8hXl_Y8b_hlFo8wuh681nf1E",
        "id": {
            "kind": "youtube#video",
            "videoId": "hAQcodpwsIA"
        },
        "snippet": {
            "publishedAt": "2023-05-26T19:12:49Z",
            "channelId": "UC_NfSrnFhWRMXV0yQLQS8Ig",
            "title": "IS THIS THE HOTTEST NEW ROCKSTAR OF 2023?! #music #emo #punkrock #hardrock #rocksong #rock #rockstar",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/hAQcodpwsIA/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/hAQcodpwsIA/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/hAQcodpwsIA/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "TX2 OFFICIAL",
            "liveBroadcastContent": "none",
            "publishTime": "2023-05-26T19:12:49Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "-adpmj68qy4JnqsLpzzsLMb92LM",
        "id": {
            "kind": "youtube#video",
            "videoId": "Sx4xVyXHl60"
        },
        "snippet": {
            "publishedAt": "2023-06-26T23:00:16Z",
            "channelId": "UCroIgxbjoAkAosWsfi0bgNw",
            "title": "[Ghibli Music Collection 2023] 🌈 Best Ghibli Piano Collection 🍉 BGM for work/relax/study",
            "description": "Tracklist: [00:00:00] - The name of life [Spirited Away] [00:05:37] - Ashitaka Sekki [Princess Mononoke] [00:10:59] - Princess ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/Sx4xVyXHl60/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/Sx4xVyXHl60/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/Sx4xVyXHl60/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Relaxing Ghibli Piano",
            "liveBroadcastContent": "none",
            "publishTime": "2023-06-26T23:00:16Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "GVOp2Z8odPXAIjl1LdYMNhig1Kc",
        "id": {
            "kind": "youtube#video",
            "videoId": "mQgIn4eE2Zk"
        },
        "snippet": {
            "publishedAt": "2023-03-09T23:15:01Z",
            "channelId": "UCSQgvEvozAjx40ysfJQqX0A",
            "title": "Morning Cafe Music - Wake Up Happy With Positive Energy - Beautiful Spanish Guitar Music Ever",
            "description": "Start your days with a positive boost! This Morning Cafe Music will fill you with calming energy, allowing you to start your day in a ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/mQgIn4eE2Zk/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/mQgIn4eE2Zk/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/mQgIn4eE2Zk/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "4K Muzik",
            "liveBroadcastContent": "none",
            "publishTime": "2023-03-09T23:15:01Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "yYw6AbGXOjhs_U1HUbg1llL9LGc",
        "id": {
            "kind": "youtube#video",
            "videoId": "1SNMNUxJSLk"
        },
        "snippet": {
            "publishedAt": "2024-03-17T15:15:47Z",
            "channelId": "UC_GGWVDrDwGAunoFRiWbHDw",
            "title": "MÚSICA RELAJANTE PARA ALIVIAR EL ESTRES Y LA ANSIEDAD, MÚSICA PARA MEDITAR, RELAJARSE Y DORMIR",
            "description": "MÚSICA RELAJANTE PARA ALIVIAR EL ESTRES Y LA ANSIEDAD, MÚSICA PARA MEDITAR, RELAJARSE Y DORMIR",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/1SNMNUxJSLk/default_live.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/1SNMNUxJSLk/mqdefault_live.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/1SNMNUxJSLk/hqdefault_live.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Soul Relajante",
            "liveBroadcastContent": "live",
            "publishTime": "2024-03-17T15:15:47Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "eQ6RLBx8GuAPSojUv05fBUi8y0k",
        "id": {
            "kind": "youtube#video",
            "videoId": "_xvPA9zKOoc"
        },
        "snippet": {
            "publishedAt": "2024-03-15T12:00:08Z",
            "channelId": "UCbD8RzjdkdTq-v3dzn1Y5xQ",
            "title": "Salma Salsabil – Rumah (Official Music Video)",
            "description": "Salma Salsabil's official music video for single 'Rumah' Download and Stream: https://lnk.to/SalmaSalsabilRumah ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/_xvPA9zKOoc/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/_xvPA9zKOoc/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/_xvPA9zKOoc/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Salma Salsabil",
            "liveBroadcastContent": "none",
            "publishTime": "2024-03-15T12:00:08Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "p0Y6HEIEScLPYZSsmQIJFW2ohEY",
        "id": {
            "kind": "youtube#video",
            "videoId": "Bd8bpV2pxak"
        },
        "snippet": {
            "publishedAt": "2023-06-24T11:16:37Z",
            "channelId": "UCKHwVTTULYd636G9pR9vI4A",
            "title": "Non Stop Love Mashup Love Songs Non stop mashup#lovemashup#love",
            "description": "lofisong #arijitsingh #lovelofi #sadlofi #breakuplofi #alonesong #lovelofisong #lofiaongfeeling #verysadsong #alonelofi ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/Bd8bpV2pxak/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/Bd8bpV2pxak/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/Bd8bpV2pxak/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Alone lofi",
            "liveBroadcastContent": "none",
            "publishTime": "2023-06-24T11:16:37Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "K7pCcCRZPrUvEFxp5xHsl7xk_Xk",
        "id": {
            "kind": "youtube#video",
            "videoId": "qJsy9qMha-w"
        },
        "snippet": {
            "publishedAt": "2024-03-18T17:08:01Z",
            "channelId": "UCSX5Gk1UvlYWYyjeVZFnp-w",
            "title": "Morning Mood 🍀 English songs chill vibes music playlist ~ Chill Morning Songs",
            "description": "Morning Mood English songs chill vibes music playlist ~ Chill Morning Songs Hello everyone!~ Welcome to Chill Vibes ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/qJsy9qMha-w/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/qJsy9qMha-w/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/qJsy9qMha-w/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Chill Vibes",
            "liveBroadcastContent": "none",
            "publishTime": "2024-03-18T17:08:01Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "fEWVusAbTjcRcnetsxlYnaTBau8",
        "id": {
            "kind": "youtube#video",
            "videoId": "dy90tA3TT1c"
        },
        "snippet": {
            "publishedAt": "2021-01-13T13:00:11Z",
            "channelId": "UCvpredjG93ifbCP1Y77JyFA",
            "title": "YOASOBI「怪物」Official Music Video　(YOASOBI - Monster)",
            "description": "Download＆Streaming配信中:https://orcd.co/kaibutsu TVアニメ『BEASTARS』第二期オープニングテーマ 『BEASTARS』原 ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/dy90tA3TT1c/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/dy90tA3TT1c/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/dy90tA3TT1c/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Ayase / YOASOBI",
            "liveBroadcastContent": "none",
            "publishTime": "2021-01-13T13:00:11Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "DN8ch6vhyk-EG_jfxrkUHvaWgBQ",
        "id": {
            "kind": "youtube#video",
            "videoId": "RvhMrB11emk"
        },
        "snippet": {
            "publishedAt": "2023-02-28T12:00:14Z",
            "channelId": "UCGvbidYOdD8rH0LJlVmZb5g",
            "title": "BLUSH - လိပ်ပြာ (Official Music Video)",
            "description": "BLUSH - လိပ်ပြာ (Official Music Video) . BLUSH \"Our Weather\" EP ကို Table ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/RvhMrB11emk/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/RvhMrB11emk/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/RvhMrB11emk/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "BG18 Record Label",
            "liveBroadcastContent": "none",
            "publishTime": "2023-02-28T12:00:14Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "XdC-ZI4KCvOX65ig0kEoY7Ze7rw",
        "id": {
            "kind": "youtube#video",
            "videoId": "aR7WzXB9iac"
        },
        "snippet": {
            "publishedAt": "2024-03-15T16:00:01Z",
            "channelId": "UCN9HPn2fq-NL8M5_kp4RWZQ",
            "title": "Sia &amp; Kylie Minogue - Dance Alone (Official Music Video)",
            "description": "It's the day you've all been waiting for... the Dance Alone music video is FINALLY yours with the very special @kylieminogue!",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/aR7WzXB9iac/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/aR7WzXB9iac/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/aR7WzXB9iac/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Sia",
            "liveBroadcastContent": "none",
            "publishTime": "2024-03-15T16:00:01Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "DEAHUyyWnzDOCqkZhbhl1oXUL4Q",
        "id": {
            "kind": "youtube#video",
            "videoId": "BoZ0Zwab6Oc"
        },
        "snippet": {
            "publishedAt": "2020-09-29T13:13:35Z",
            "channelId": "UC_SI1j1d8vJo_rYMV5o_dRg",
            "title": "【Official】Pokémon Special Music Video 「GOTCHA！」 | BUMP OF CHICKEN - Acacia",
            "description": "ポケモン ＆ BUMP OF CHICKEN スペシャルミュージックビデオ「GOTCHA！」 9言語の歌詞字幕付きで公開中！",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/BoZ0Zwab6Oc/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/BoZ0Zwab6Oc/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/BoZ0Zwab6Oc/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "ポケモン公式YouTubeチャンネル",
            "liveBroadcastContent": "none",
            "publishTime": "2020-09-29T13:13:35Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "1CdlVhS1G4aXRzSdiS1v032Tmjs",
        "id": {
            "kind": "youtube#video",
            "videoId": "1_lap6dzSUc"
        },
        "snippet": {
            "publishedAt": "2018-11-03T09:00:00Z",
            "channelId": "UCw1U9K3S8WVWp7REGaHIW0A",
            "title": "神山羊 - YELLOW【Music Video】/ Yoh Kamiyama - YELLOW",
            "description": "1st Full Album『 CLOSET 』 MUSIC ▷https://smar.lnk.to/LLnAb6 Music / Vocal： Yoh Kamiyama Music Video： Touyouigaku ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/1_lap6dzSUc/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/1_lap6dzSUc/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/1_lap6dzSUc/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Yoh Kamiyama",
            "liveBroadcastContent": "none",
            "publishTime": "2018-11-03T09:00:00Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "mxaLIohl48FA0WUqjSdpEyK-gUs",
        "id": {
            "kind": "youtube#video",
            "videoId": "7NHpcablSSE"
        },
        "snippet": {
            "publishedAt": "2022-07-31T21:44:25Z",
            "channelId": "UCpQyvmKsmErzFlYHH4UPcHA",
            "title": "Main Barish Ki Boli 🔥 SONG BATTLE • AKSHU/ABHIRA VS MOHAMMED FAIZ",
            "description": "musicbattle #songbattle #kaisehua #abhira #akshu #akshuyrkkh #faiz #mohdfaiz.",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/7NHpcablSSE/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/7NHpcablSSE/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/7NHpcablSSE/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Maher Anjum Music",
            "liveBroadcastContent": "none",
            "publishTime": "2022-07-31T21:44:25Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "F-fBhtvDj2B3cwXxM6wtx2Y8leI",
        "id": {
            "kind": "youtube#video",
            "videoId": "36vjwGx-Vzc"
        },
        "snippet": {
            "publishedAt": "2024-03-17T10:37:54Z",
            "channelId": "UCnFgq4Ara6A2a_8kpTvivLQ",
            "title": "Musica 2024 Los Mas Nuevo - Pop Latino 2024 - Mix Canciones Reggaeton 2024!",
            "description": "Musica 2024 Los Mas Nuevo - Pop Latino 2024 - Mix Canciones Reggaeton 2024! Luis Fonsi, Sebastian Yatra, Nacho, Wisin, ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/36vjwGx-Vzc/default_live.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/36vjwGx-Vzc/mqdefault_live.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/36vjwGx-Vzc/hqdefault_live.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Nogastic Music",
            "liveBroadcastContent": "live",
            "publishTime": "2024-03-17T10:37:54Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "_3yoaStagaoQ3bdqvNQxdt2OMfw",
        "id": {
            "kind": "youtube#video",
            "videoId": "QEZiuxLsLgk"
        },
        "snippet": {
            "publishedAt": "2023-11-22T11:22:42Z",
            "channelId": "UCwVQIkAtyZzQSA-OY1rsGig",
            "title": "Music for Work — Limitless Productivity Radio",
            "description": "This radio is here to make your day more productive. It plays a carefully selected mix of deep future garage and soothing chillstep ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/QEZiuxLsLgk/default_live.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/QEZiuxLsLgk/mqdefault_live.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/QEZiuxLsLgk/hqdefault_live.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Chill Music Lab",
            "liveBroadcastContent": "live",
            "publishTime": "2023-11-22T11:22:42Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "uAtH8YcOV1zG8gY63zI1tZZCoXA",
        "id": {
            "kind": "youtube#video",
            "videoId": "4bIX8HsLm9c"
        },
        "snippet": {
            "publishedAt": "2023-05-29T09:30:23Z",
            "channelId": "UCaONRNFNqn96eE58GD_UylA",
            "title": "Working Jazz - Unwind and Work - Jazz Music for Stress Relief and Concentration",
            "description": "Working Jazz - Unwind and Work - Jazz Music for Stress Relief and Concentration ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/4bIX8HsLm9c/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/4bIX8HsLm9c/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/4bIX8HsLm9c/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Jazz Work Vibes",
            "liveBroadcastContent": "none",
            "publishTime": "2023-05-29T09:30:23Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "sLym3sCZoHACFXFw0t4y0QgwDyM",
        "id": {
            "kind": "youtube#video",
            "videoId": "eGpdyP9r9sU"
        },
        "snippet": {
            "publishedAt": "2023-03-20T13:55:00Z",
            "channelId": "UCdqFIax7iWc7_fm4-_7pRRw",
            "title": "Anime [amv]- Toca Toca | Official Music Video (full version)",
            "description": "Anime [amv] - Toca Toca | Official Music Video (full version) Hi, friends! I'm Kurbeli! I create funny videos with different sound ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/eGpdyP9r9sU/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/eGpdyP9r9sU/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/eGpdyP9r9sU/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Kurbeli",
            "liveBroadcastContent": "none",
            "publishTime": "2023-03-20T13:55:00Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "v2ZmuTSB_TBrZEB9PDGc2pP0IsY",
        "id": {
            "kind": "youtube#video",
            "videoId": "6G36rz6RkiU"
        },
        "snippet": {
            "publishedAt": "2021-07-11T16:00:08Z",
            "channelId": "UC9aDY1QGeUQI6vR7ikm0KrA",
            "title": "Cali Sadé - Starburst Remix feat. Super Siah (Official Music Video)",
            "description": "This is the official music video for the Starburst Remix, featuring Super Siah. Special shoutout to @SFGENT Filmed by: NTRO4K ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/6G36rz6RkiU/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/6G36rz6RkiU/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/6G36rz6RkiU/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "FamousTubeFamily",
            "liveBroadcastContent": "none",
            "publishTime": "2021-07-11T16:00:08Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "Ld5uWBo8MYOEQ3n7KeJVkqQsQH8",
        "id": {
            "kind": "youtube#video",
            "videoId": "aJOTlE1K90k"
        },
        "snippet": {
            "publishedAt": "2018-05-31T04:00:00Z",
            "channelId": "UCN1hnUccO4FD5WfM7ithXaw",
            "title": "Maroon 5 - Girls Like You ft. Cardi B (Official Music Video)",
            "description": "\"Girls Like You” is out now. http://smarturl.it/GLY For more, visit: https://www.facebook.com/maroon5 https://twitter.com/maroon5 ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/aJOTlE1K90k/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/aJOTlE1K90k/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/aJOTlE1K90k/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Maroon5VEVO",
            "liveBroadcastContent": "none",
            "publishTime": "2018-05-31T04:00:00Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "oYJQoxDepfBw9QUPYAXYZlTn2ew",
        "id": {
            "kind": "youtube#video",
            "videoId": "V0CxfaPzw8M"
        },
        "snippet": {
            "publishedAt": "2024-03-10T13:16:58Z",
            "channelId": "UCTLVMgfgQ3omiUp97zgCOZg",
            "title": "Tag your premika #rjraghav #relatable #comedy #singer #music",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/V0CxfaPzw8M/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/V0CxfaPzw8M/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/V0CxfaPzw8M/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "RJ Raghav",
            "liveBroadcastContent": "none",
            "publishTime": "2024-03-10T13:16:58Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "P4FKIfdub1ICo4js0TQJ_2Da6NY",
        "id": {
            "kind": "youtube#video",
            "videoId": "CocEMWdc7Ck"
        },
        "snippet": {
            "publishedAt": "2023-01-12T00:00:07Z",
            "channelId": "UCmS75G-98QihSusY7NfCZtw",
            "title": "SHAKIRA || BZRP Music Sessions #53",
            "description": "SHAKIRA || BZRP Music Sessions #53 Lyrics by: https://www.instagram.com/shakira Beat by: https://www.instagram.com/bizarrap ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/CocEMWdc7Ck/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/CocEMWdc7Ck/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/CocEMWdc7Ck/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Bizarrap",
            "liveBroadcastContent": "none",
            "publishTime": "2023-01-12T00:00:07Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "k2CPCYOJeaasBbkGaceh-OlYqjg",
        "id": {
            "kind": "youtube#video",
            "videoId": "Vm2C7w8Dl-E"
        },
        "snippet": {
            "publishedAt": "2024-03-17T19:07:21Z",
            "channelId": "UCJhjE7wbdYAae1G25m0tHAA",
            "title": "MONDAY MORNING CAFE: Smooth Jazz Instrumental Music ☕ Relaxing Jazz Music for Study, Work, Focus",
            "description": "Kick-start your week with the soothing tones of smooth jazz from MONDAY MORNING CAFE. ☕ Whether you're diving into work ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/Vm2C7w8Dl-E/default_live.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/Vm2C7w8Dl-E/mqdefault_live.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/Vm2C7w8Dl-E/hqdefault_live.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Cafe Music BGM channel",
            "liveBroadcastContent": "live",
            "publishTime": "2024-03-17T19:07:21Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "G0WlerwyHE9SXd9n5VS9Z5Qn8mc",
        "id": {
            "kind": "youtube#video",
            "videoId": "wqAjWUAlJ-0"
        },
        "snippet": {
            "publishedAt": "2020-11-13T16:00:10Z",
            "channelId": "UCTkOW-FHfwuH03Qkbs8om8g",
            "title": "Matthew West - Gobble Gobble (Official Music Video)",
            "description": "Watch the official music video for “Gobble Gobble” now! Listen to #GobbleGobble everywhere: ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/wqAjWUAlJ-0/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/wqAjWUAlJ-0/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/wqAjWUAlJ-0/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "MatthewWestVEVO",
            "liveBroadcastContent": "none",
            "publishTime": "2020-11-13T16:00:10Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "83uMbRd8cZowON3mxxMkDrufFLg",
        "id": {
            "kind": "youtube#video",
            "videoId": "pfVODjDBFxU"
        },
        "snippet": {
            "publishedAt": "2013-05-10T13:50:51Z",
            "channelId": "UCGq-2cxsm_pVxGrWYraw8wg",
            "title": "Imran Khan - Satisfya (Official Music Video)",
            "description": "Buy now Imran Khan - Satisfya on iTunes https://apple.co/2yi3y8N Stream Imran Khan - Satisfya on Spotify ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/pfVODjDBFxU/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/pfVODjDBFxU/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/pfVODjDBFxU/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "imrankhanworld",
            "liveBroadcastContent": "none",
            "publishTime": "2013-05-10T13:50:51Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "Hb5ihMPvhMBc87OAOiKVGTatEpc",
        "id": {
            "kind": "youtube#video",
            "videoId": "VbT2wQq5jQY"
        },
        "snippet": {
            "publishedAt": "2023-05-03T15:00:23Z",
            "channelId": "UCiY-waa6oVAaM58KL2ALplQ",
            "title": "Beautiful Relaxing Music - Healing Music For Health And Calming The Nervous System, Deep Relaxation",
            "description": "Beautiful Relaxing Music - Healing Music For Health And Calming The Nervous System, Deep Relaxation Beautiful Relaxing ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/VbT2wQq5jQY/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/VbT2wQq5jQY/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/VbT2wQq5jQY/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "True Happiness ",
            "liveBroadcastContent": "none",
            "publishTime": "2023-05-03T15:00:23Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "dXWruKL7-rLgUclcMSxZPllUP9U",
        "id": {
            "kind": "youtube#video",
            "videoId": "mgVQSxUuzpU"
        },
        "snippet": {
            "publishedAt": "2023-01-25T00:02:42Z",
            "channelId": "UCq5JS7veETfxmVY_NS_JQwA",
            "title": "Throwback 2000s | Edwin McCain, Matchbox twenty, Brian McKnight, Goo Goo Dolls,.....// playlist 2023",
            "description": "Disclaimer: No copyright infringement intended. We do not own the music/audio of the song. For entertainment purposes only, ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/mgVQSxUuzpU/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/mgVQSxUuzpU/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/mgVQSxUuzpU/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "The Catchy Playlist",
            "liveBroadcastContent": "none",
            "publishTime": "2023-01-25T00:02:42Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "T_OWELvdjQD47SxCPeqJ5H6OKFg",
        "id": {
            "kind": "youtube#video",
            "videoId": "56S6NZOYMR4"
        },
        "snippet": {
            "publishedAt": "2020-06-14T16:43:53Z",
            "channelId": "UCwaNuezahYT3BOjfXsne2mg",
            "title": "Come Back Chad Song - Spy Ninjas (Official Music Video)",
            "description": "The official song to turn Chad Mild Clay back into Chad Wild Clay. After being zapped and turned into Boring Chad, his wife Vy ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/56S6NZOYMR4/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/56S6NZOYMR4/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/56S6NZOYMR4/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Chad Wild Clay",
            "liveBroadcastContent": "none",
            "publishTime": "2020-06-14T16:43:53Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "mHYSnrGJSWFyqrPaSbKN6gDU5GQ",
        "id": {
            "kind": "youtube#video",
            "videoId": "pkCyfBibIbI"
        },
        "snippet": {
            "publishedAt": "2015-10-16T14:00:01Z",
            "channelId": "UCf3cbfAXgPFL6OywH7JwOzA",
            "title": "Meghan Trainor - Better When I&#39;m Dancin&#39;",
            "description": "Better When I'm Dancin'” by Meghan Trainor Listen to Meghan Trainor: https://MeghanTrainor.lnk.to/listenYD Watch more Meghan ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/pkCyfBibIbI/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/pkCyfBibIbI/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/pkCyfBibIbI/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "MeghanTrainorVEVO",
            "liveBroadcastContent": "none",
            "publishTime": "2015-10-16T14:00:01Z"
        }
    }
]

export function getData(searchTerm) {
    let searchObject = localStorage.getItem("search");

    if (searchObject) {
        searchObject = JSON.parse(searchObject);
        let storedTerm = searchObject[searchTerm];

        if (storedTerm) {
            return storedTerm;
            
        }else{
            
            return createData(searchTerm, searchObject)
        }
    }else{

        return createData(searchTerm, searchObject)
    }
} 

 function createData(searchTerm, searchObject) {
    // return items.sort(() => (Math.random() > 0.5) ? 1 : -1)
    console.log("Fetching " + searchTerm + " data from Youtube Quota Point ");
    const response = search(searchTerm)
    .then(res => {
        if (res.data) {
            const videos = res.data.items;
            if (videos?.length === 50 ){
                searchObject = {...searchObject, [searchTerm]:videos}
                localStorage.setItem("search", JSON.stringify(searchObject))
                return videos;
            }
        }
    })
    .catch(e => {
        console.error(e);
    });

    return response;
}

