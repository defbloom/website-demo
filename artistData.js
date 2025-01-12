const artistData = [
    {
        id: "artist1",
        name: "A$AP Rocky",
        image: "https://m.media-amazon.com/images/I/71BMK7yHZkL.jpg",
        genres: ["Hip-Hop", "Rap"],
        description: "Influential artist for his unique style and experimental sounds.",
        spotifyTrack: "https://open.spotify.com/embed/track/5oeKoJMi9g6GXEbtz1ta0f?utm_source=generator&theme=0",
        recommendedAlbum: {
            url: "https://open.spotify.com/album/6rzMufuu8sLkIizM4q9c7J?si=djPUqZGlS0689Vy2jB3c1A",
            text: "Recommended Album"
        }
    },
    {
        id: "artist2",
        name: "Bad Bunny",
        image: "https://uploads.tenhomaisdiscosqueamigos.com/2022/01/bad-bunny-foto.jpg",
        genres: ["Reggaeton", "Latin Trap"],
        description: "Bad Bunny revolutionized Latin music with his genre-blending style and global appeal. His real name is Benito.",
        spotifyTrack: "https://open.spotify.com/embed/track/4j4w4CXm6BSr0s25wAWrrX?utm_source=generator",
        recommendedAlbum: {
            url: "https://open.spotify.com/album/5lJqux7orBlA1QzyiBGti1?si=y0jsEA7RTRapUqJOfe2aBw",
            text: "Recommended Album"
        }
    },
    {
        id: "artist3",
        name: "Beach House",
        image: "https://revistakuadro.com/wp-content/uploads/2022/11/beach-house-1024x672.jpg",
        genres: ["Dream Pop", "Indie"],
        description: "Beach House creates atmospheric music with dreamy vocals and lush instrumentals. Keeps me in touch with my feminine side.",
        spotifyTrack: "https://open.spotify.com/embed/track/6asU049doNupkVllo61luh?utm_source=generator",
        recommendedAlbum: {
            url: "https://open.spotify.com/album/51AxfjN2gEt5qeJqPY5w0e?si=r1f-TDtbQpKEheKcJlDuvg",
            text: "Recommended Album"
        }
    },
    {
        id: "artist4",
        name: "Billie Eilish",
        image: "https://lavozdedurango.com.mx/wp-content/uploads/2024/05/billie-eilish-new-album-here.jpg.webp",
        genres: ["Pop", "Alternative"],
        description: "Billie Eilish has hauntingly beautiful vocals that really move you.",
        spotifyTrack: "https://open.spotify.com/embed/track/2VlLbhGLVJgdOW7kKdWWFc?utm_source=generator",
        recommendedAlbum: {
            url: "https://open.spotify.com/album/0S0KGZnfBGSIssfF54WSJh?si=35nzbeFxT2aoSENoB6ALHA",
            text: "Recommended Album"
        }
    },
    {
        id: "artist5",
        name: "Björk",
        image: "https://www.mondosonoro.com/wp-content/uploads/2018/05/bjork-WEB-jean-baptiste-mondino-venus-as-a-boy-01.jpg",
        genres: ["Electronic", "Experimental"],
        description: "Björk's music is a fusion of avant-garde, electronic sounds, and ethereal vocals. I have a crush on her.",
        spotifyTrack: "https://open.spotify.com/embed/track/48oX55j4gqDw0G80KxzpaQ?utm_source=generator",
        recommendedAlbum: {
            url: "https://open.spotify.com/album/0h19Ty9F2Ma8pKkRdx17UT?si=wsTLb0jvTCGO4HIyKkFs8w",
            text: "Recommended Album"
        }
    },
    {
        id: "artist6",
        name: "BROCKHAMPTON",
        image: "https://mty360.net/wp-content/uploads/2018/03/Brockhampton-miembros.jpg",
        genres: ["Hip-Hop", "Alternative"],
        description: "BROCKHAMPTON is a dynamic collective blending rap, pop, and alternative music. Thank you Kanye.",
        spotifyTrack: "https://open.spotify.com/embed/track/4O9tOyMOq8Oioun2MsULH5?utm_source=generator",
        recommendedAlbum: {
            url: "https://open.spotify.com/album/5c2AzoNyr46fCQM5d8mxE0?si=_wQBiiDfSCSmU3_p0a11-Q",
            text: "Recommended Album"
        }
    },
    {
        id: "artist7",
        name: "Burial",
        image: "https://www.rollingstone.co.uk/wp-content/uploads/sites/2/2024/01/Burial2021-1024x650.jpeg",
        genres: ["Electronic", "Ambient"],
        description: "Burial is a one of kind, an album like untrue can't be remade.",
        spotifyTrack: "https://open.spotify.com/embed/track/5m1VR5YlkswXMoHSmGWFqa?utm_source=generator",
        recommendedAlbum: {
            url: "https://open.spotify.com/album/1iRPiEYHIX2zpF8lkW54SK?",
            text: "Recommended Album"
        }
    },
    {
        id: "artist8",
        name: "Charli XCX",
        image: "https://thefader-res.cloudinary.com/private_images/w_760,c_limit,f_auto,q_auto:best/charli-xcx_s8ap8q/charli-xcx-will-perform-ipop-2i-in-its-entirety.jpg",
        genres: ["Pop", "Hyperpop"],
        description: "She's a pop icon known for her boundary-pushing production and futuristic soundscapes. By now I think it's okay if the homies know I listen to her.",
        spotifyTrack: "https://open.spotify.com/embed/track/38ybr0LS9XLUcqg8Yo62Wj?utm_source=generator",
        recommendedAlbum: {
            url: "https://open.spotify.com/album/2lIZef4lzdvZkiiCzvPKj7?si=4mOB26xdQZqBMfHGBZh0dw",
            text: "Recommended Album"
        }
    },
    {
        id: "artist9",
        name: "Clairo",
        image: "https://static.wikia.nocookie.net/clairopedia/images/7/7d/Diary001.jpg/revision/latest/smart/width/386/height/259?cb=20201126211416",
        genres: ["Indie Pop", "Bedroom Pop"],
        description: "Clairo is a introspective singer-songwriter with mellow, relatable tracks and lo-fi aesthetics. She must be protected.",
        spotifyTrack: "https://open.spotify.com/embed/track/6UFivO2zqqPFPoQYsEMuCc?utm_source=generator",
        recommendedAlbum: {
            url: "https://open.spotify.com/album/1KNUCVXgIxKUGiuEB8eG0i?si=WIrfPjwOSdSp0EhVegbLBA",
            text: "Recommended Album"
        }
    },
    {
        id: "artist10",
        name: "Cocteau Twins",
        image: "https://i.guim.co.uk/img/media/1405c81284e4594efe465f39e9222ba504d1f8f7/0_200_3000_1800/master/3000.jpg?width=465&dpr=1&s=none&crop=none",
        genres: ["Dream Pop", "Ethereal Wave"],
        description: "Cocteau 'twins' are pioneers of dreamy, atmospheric music featuring Elizabeth Fraser's iconic vocals. They are acutally not twins, not even triplets.",
        spotifyTrack: "https://open.spotify.com/embed/track/37pKTyMwalomKCZjxTc2QZ?utm_source=generator",
        recommendedAlbum: {
            url: "https://open.spotify.com/album/5lEphbceIgaK1XxWeSrC9E?si=Ts7jOzrdS0Kv9qyFGK6vYw",
            text: "Recommended Album"
        }
    },
    {
        id: "artist11",
        name: "Crystal Castles",
        image: "https://nuestraobsesion.wordpress.com/wp-content/uploads/2015/05/crystalcastles.jpg?w=640",
        genres: ["Electronic", "Synth-Punk"],
        description: "Crystal Castles are a duo combining abrasive electronics with haunting, glitchy vocals. Go support Alice Glass (left), all my homies hate Ethan Kath (right).",
        spotifyTrack: "https://open.spotify.com/embed/track/3zKQDZQTHkUV6bYHNhzbGv?utm_source=generator",
        recommendedAlbum: {
            url: "https://open.spotify.com/album/6rTfUUv8Kefr6Uo3AaecXi?si=jB0SfxrvRTiuDt0VurXyww",
            text: "Recommended Album"
        }
    },
    {
        id: "artist12",
        name: "Cuco",
        image: "https://media.npr.org/assets/img/2018/03/15/dsc00210_wide-02e5ff591d9d1fc74f584483ed282ccc69c81727.jpg?s=1100&c=85&f=jpeg",
        genres: ["Indie", "Bedroom-Chicano Pop"],
        description: "Cuco blends bedroom pop with Latin influences and heartfelt lyrics. Just like me fr.",
        spotifyTrack: "https://open.spotify.com/embed/track/4CYeId6mLAasOb6o0NCz4Y?utm_source=generator",
        recommendedAlbum: {
            url: "https://open.spotify.com/album/1rQys03txxThcRZLofLlHY?si=7K1euj31Q4yLf7xY92TboA",
            text: "Recommended Album"
        }
    },
    {
        id: "artist13",
        name: "Daft Punk",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/db/Daft_Punk_in_2013.jpg",
        genres: ["Electronic", "House"],
        description: "Daft Punk are a revolutionary electronic duo known for their robotic personas and iconic anthems. I can't decide between the two.",
        spotifyTrack: "https://open.spotify.com/embed/track/7v9Q0dAb9t7h8gJOkcJHay?utm_source=generator",
        recommendedAlbum: {
            url: "https://open.spotify.com/album/2noRn2Aes5aoNVsU6iWThc?si=hRoBu58VRmK3UxGTIf3DQw",
            text: "Recommended Album"
        }
    },
    {
        id: "artist14",
        name: "Deftones",
        image: "https://www.rockculture.es/wp-content/uploads/2024/03/deftones-1.jpg",
        genres: ["Alternative Metal", "Shoegaze"],
        description: "Genre-defying band blending heavy riffs with atmospheric and emotional soundscapes. My alternative to therapy.",
        spotifyTrack: "https://open.spotify.com/embed/track/1158ckiB5S4cpsdYHDB9IF?utm_source=generator",
        recommendedAlbum: {
            url: "https://open.spotify.com/album/5LEXck3kfixFaA3CqVE7bC?si=PBFie5zzTKKIhm1RKNCzJg",
            text: "Recommended Album"
        }
    },
    {
        id: "artist15",
        name: "Frank Ocean",
        image: "https://images.squarespace-cdn.com/content/v1/5a0dd6831f318dcf5130a0d5/1585930507185-5CD92KM7HAOVBGWRFLBR/image-asset.jpeg",
        genres: ["R&B", "Neo-Soul"],
        description: "Critically acclaimed artist blending introspective lyrics with innovative production. He helps you dwell on significant others.",
        spotifyTrack: "https://open.spotify.com/embed/track/2ZWlPOoWh0626oTaHrnl2a?utm_source=generator",
        recommendedAlbum: {
            url: "https://open.spotify.com/album/3mH6qwIy9crq0I9YQbOuDf?si=COKhsrogQ0mFkQsJ8gSSQw",
            text: "Recommended Album"
        }
    },
    {
        id: "artist16",
        name: "Giveon",
        image: "https://plus.cusica.com/wp-content/uploads/2021/03/GIVEON-alltome-1280x720.jpg",
        genres: ["R&B", "Soul"],
        description: "Giveon is known for his deep baritone and emotionally rich ballads. He's so cool and mysterious 🤭.",
        spotifyTrack: "https://open.spotify.com/embed/track/5JycxhApZmzbA4xSwvqh6k?utm_source=generator",
        recommendedAlbum: {
            url: "https://open.spotify.com/album/1otOJAtgvO5VCBL4Gykrrd?si=_16p9X9ZRuauuIE-lUuGVg",
            text: "Recommended Album"
        }
    },
    {
        id: "artist17",
        name: "Inner Wave",
        image: "https://www.vice.com/wp-content/uploads/sites/2/2018/04/1522871234210-InnerWave-3.jpeg",
        genres: ["Indie Rock", "Psychedelic"],
        description: "Inner wave combine groovy rhythms with dreamy, experimental sounds. The bass player can get it.",
        spotifyTrack: "https://open.spotify.com/embed/track/7ByEDFkz7d7qeLMSZF69cz?utm_source=generator",
        recommendedAlbum: {
            url: "https://open.spotify.com/album/4TgHa0BgOOzLgripJgz1yq?si=EeLhfmLoT2mgqU2N-RjB1g",
            text: "Recommended Album"
        }
    },
    {
        id: "artist18",
        name: "Joji",
        image: "https://www.rollingstone.com/wp-content/uploads/2018/10/joji-2018-press-photo.jpg?w=1296&h=864&crop=1",
        genres: ["Lo-Fi", "Alternative R&B"],
        description: "Joji is a melancholic sad-boy with vulnerable lyrics and atmospheric production. Always in his feelings just like me fr.",
        spotifyTrack: "https://open.spotify.com/embed/track/00WLowvlN5cjkYpQV6pjo4?utm_source=generator",
        recommendedAlbum: {
            url: "https://open.spotify.com/album/65edimIChzNNK8VGn56pIK?si=HXkV1GuaRf-7PzrVF-RhCg",
            text: "Recommended Album"
        }
    },
    {
        id: "artist19",
        name: "Kali Uchis",
        image: "https://ucsdguardian.org/wp-content/uploads/2024/01/image-courtesy-of-Catalyst.png",
        genres: ["Neo-Soul", "R&B"],
        description: "Multi-talented singer blending sultry vocals with Latin and soul influences. She's in mother era with Don and I am proud.",
        spotifyTrack: "https://open.spotify.com/embed/track/6BQrmjAgPfPTwILoFEK3Hd?utm_source=generator",
        recommendedAlbum: {
            url: "https://open.spotify.com/album/4EPQtdq6vvwxuYeQTrwDVY?si=YBA5MelJSCardbQZ_EtmKA",
            text: "Recommended Album"
        }
    },
    {
        id: "artist20",
        name: "Kanye West",
        image: "https://fleek.25gramos.com/wp-content/uploads/2016/02/streaming-the-life-of-pablo-yeezy-season-3.jpg",
        genres: ["Hip-Hop", "Experimental"],
        description: "Ye is a cultural icon who reshaped music and fashion with innovative albums and bold artistry. He needs a another Jesus arc though.",
        spotifyTrack: "https://open.spotify.com/embed/track/7rbECVPkY5UODxoOUVKZnA?utm_source=generator",
        recommendedAlbum: {
            url: "https://open.spotify.com/album/20r762YmB5HeofjMCiPMLv?si=O3tCyrtjT7iRAXL_WWA9rg",
            text: "Recommended Album"
        }
    },
    {
        id: "artist21",
        name: "Kendrick Lamar",
        image: "https://cdn.wegow.com/media/artists/kendrick-lamar/kendrick-lamar-1502874912.09.jpeg",
        genres: ["Hip-Hop", "Conscious Rap"],
        description: "Kendrick is known for his storytelling and social commentary. When you realize he's 5'4' it might already be too late.",
        spotifyTrack: "https://open.spotify.com/embed/track/1EaKU4dMbesXXd3BrLCtYG?utm_source=generator",
        recommendedAlbum: {
            url: "https://open.spotify.com/album/748dZDqSZy6aPXKcI9H80u?si=deuH11a9Tl2Fk9BYlPgb_Q",
            text: "Recommended Album"
        }
    },
    {
        id: "artist22",
        name: "Lana Del Rey",
        image: "https://www.rollingstone.it/wp-content/uploads/2014/05/delrey550.jpg",
        genres: ["Indie Pop", "Baroque Pop"],
        description: "Lana makes cinematic music with nostalgic Americana themes. She is my godmother.",
        spotifyTrack: "https://open.spotify.com/embed/track/4qG7hWhljsqqENL5PaLA2z?utm_source=generator",
        recommendedAlbum: {
            url: "https://open.spotify.com/album/5XpEKORZ4y6OrCZSKsi46A?si=ZvS8ygVDRYKJliDUyGGbDw",
            text: "Recommended Album"
        }
    },
    {
        id: "artist23",
        name: "Mac DeMarco",
        image: "https://www.rockaxis.com/img/newsList/93075_articulos.jpg",
        genres: ["Indie Rock", "Jangle Pop"],
        description: "Mac DeMarco is a Laid-back musician known for his quirky personality and breezy, nostalgic sound. Reminds me of Jacksonville.",
        spotifyTrack: "https://open.spotify.com/embed/track/3HlK8txWAdtKMrbsqX40pl?utm_source=generator",
        recommendedAlbum: {
            url: "https://open.spotify.com/album/4NNq2vwTapv4fSJcrZbPH7?si=LL9mbHLdQ6yvJ2e6Dva2tw",
            text: "Recommended Album"
        }
    },
    {
        id: "artist24",
        name: "Metro Boomin",
        image: "https://www.factdubai.com/_next/image?url=https%3A%2F%2Fapi.factmagazines.com%2Fwp-content%2Fuploads%2F2024%2F02%2FMetro-Boomin-.jpg&w=3840&q=75",
        genres: ["Trap", "Hip-Hop"],
        description: "Metro is a superproducer behind some of the biggest hits in modern rap and trap music. Don't let his cuteness fool you.",
        spotifyTrack: "https://open.spotify.com/embed/track/6pcywuOeGGWeOQzdUyti6k?utm_source=generator",
        recommendedAlbum: {
            url: "https://open.spotify.com/album/6wTyGUWGCilBFZ837k5aRi?si=6OjzdAEhQIKchMULzEXuaw",
            text: "Recommended Album"
        }
    },
    {
        id: "artist25",
        name: "My Chemical Romance",
        image: "https://i.pinimg.com/564x/6f/bb/7c/6fbb7cbb863f53f6a7c42b6266a2d75e.jpg",
        genres: ["Emo", "Alternative Rock"],
        description: "MCR are an influential band blending theatrical emo anthems with a punk edge. They somehow don't sound corny.",
        spotifyTrack: "https://open.spotify.com/embed/track/2kMjk14RmYyYhhSbipoa9U?utm_source=generator",
        recommendedAlbum: {
            url: "https://open.spotify.com/album/0FZK97MXMm5mUQ8mtudjuK?si=Tz1OwE34TjCKhizofkS7lA",
            text: "Recommended Album"
        }
    },
    {
        id: "artist26",
        name: "My Vitriol",
        image: "https://lastfm.freetls.fastly.net/i/u/ar0/12ed2eb2042699348810f08ef74326f5.jpg",
        genres: ["Alternative Rock", "Shoegaze"],
        description: "My Virtriol fuse distorted guitars with melodic hooks and anthemic energy. They are the most underrated here.",
        spotifyTrack: "https://open.spotify.com/embed/track/3CxozMCXI2BBT58uQYXK7q?utm_source=generator",
        recommendedAlbum: {
            url: "https://open.spotify.com/album/4c2WjXHuK2BbKapEeAX10R?si=ILG5k5bVTceb3YbUuD5XBw",
            text: "Recommended Album"
        }
    },
    {
        id: "artist27",
        name: "Phoebe Bridgers",
        image: "https://ourculturemag.com/wp-content/uploads/2020/09/IMG_8016-1-scaled.jpg",
        genres: ["Indie Folk", "Singer-Songwriter"],
        description: "Ms. Bridgers is an emotional storyteller crafting intimate, haunting, and deeply personal music. She can be silly too.",
        spotifyTrack: "https://open.spotify.com/embed/track/5bIgzvxvlefRUCQK9JPocF?utm_source=generator",
        recommendedAlbum: {
            url: "https://open.spotify.com/album/6Pp6qGEywDdofgFC1oFbSH?si=N_XFCXLLS3CBvfZpX5H22Q",
            text: "Recommended Album"
        }
    },
    {
        id: "artist28",
        name: "Pierce the Veil",
        image: "https://lamusikalite.com/wp-content/uploads/2016/03/1375263547_pierce-the-veil_normal.jpg",
        genres: ["Post-Hardcore", "Emo"],
        description: "Pierce the Veil are a high-energy band known for blending raw emotion with explosive sound. They make emo sound not uncool.",
        spotifyTrack: "https://open.spotify.com/embed/track/3EKh7JNsBrGoh2xqPotBKT?utm_source=generator",
        recommendedAlbum: {
            url: "https://open.spotify.com/album/661Hz0qJK8WIp7vAWsqKvk?si=M3tHt4XmTkWPeSOv-OoCXg",
            text: "Recommended Album"
        }
    },
    {
        id: "artist29",
        name: "Playboi Carti",
        image: "https://wallpapers.com/images/featured/playboi-carti-o1duxv134a98qd2w.jpg",
        genres: ["Trap", "Rap"],
        description: "Carti is an innovative rapper shaping modern hip-hop with his minimalist beats and unique delivery. FE!NN 🗣️❗🔥.",
        spotifyTrack: "https://open.spotify.com/embed/track/1JgkiUg9mSXSwcb5Gbi4Ur?utm_source=generator",
        recommendedAlbum: {
            url: "https://open.spotify.com/album/7dAm8ShwJLFm9SaJ6Yc58O?si=ZpH0Ub5OQHKM6zzFkwDzxA",
            text: "Recommended Album"
        }
    },
    {
        id: "artist30",
        name: "PinkPantheress",
        image: "https://indiehoy.com/wp-content/uploads/2021/10/PinkPantheress.jpg",
        genres: ["Alt-Pop", "Garage"],
        description: "PinkPantheress sensation blending nostalgic 2000s UK garage beats with modern pop vibes. Wonderful artist name.",
        spotifyTrack: "https://open.spotify.com/embed/track/6OTKVgVpVaVjhRLYizPJKA?utm_source=generator",
        recommendedAlbum: {
            url: "https://open.spotify.com/album/2pOEFqvfxp5uUQ8vQEmVA0?si=il4eF7yzRO6mjNhVdCDQ5A",
            text: "Recommended Album"
        }
    },
    {
        id: "artist31",
        name: "Pusha T",
        image: "https://www.umgcatalog.com/files/2019/01/pusha-t_edited.jpg",
        genres: ["Rap", "Hip-Hop"],
        description: "Pusha T is a veteran lyricist delivering hard-hitting bars with precision and swagger. Thank him for destroying Drake before K-Dot.",
        spotifyTrack: "https://open.spotify.com/embed/track/6bGwKHXHNLmTy6yt147FPh?utm_source=generator",
        recommendedAlbum: {
            url: "https://open.spotify.com/album/6o38CdD7CUlZDCFhjZYLDH?si=a0LAcsrzT9a21qyWt4Fv_w",
            text: "Recommended Album"
        }
    },
    {
        id: "artist32",
        name: "Queen",
        image: "https://i.scdn.co/image/af2b8e57f6d7b5d43a616bd1e27ba552cd8bfd42",
        genres: ["Rock", "Glam Rock"],
        description: "Queen are a legendary band known for their operatic anthems and Freddie Mercury’s unmatched vocals. Their music won't ever get old.",
        spotifyTrack: "https://open.spotify.com/embed/track/70wvmV1Dyg1xWtCYSngm4R?utm_source=generator",
        recommendedAlbum: {
            url: "https://open.spotify.com/album/1GbtB4zTqAsyfZEsm1RZfx?si=pQ2dUYjQTryTOD-A-9_Pwg",
            text: "Recommended Album"
        }
    },
    {
        id: "artist33",
        name: "Queens of the Stone Age",
        image: "https://www.futuro.cl/wp-content/uploads/2022/08/queens-of-the-stone-age-2002-promo-web.jpg",
        genres: ["Alternative Rock", "Stoner Rock"],
        description: "QOSTA is a hard-hitting rock band crafting riff-heavy, hypnotic, and energetic tracks. It's okay to listen to divorced dad music.",
        spotifyTrack: "https://open.spotify.com/embed/track/1D3YGmST01Ba0WRiT7THPG?utm_source=generator",
        recommendedAlbum: {
            url: "https://open.spotify.com/album/4w3NeXtywU398NYW4903rY?si=Y-Z_yOyQSASPUkioADlYiA",
            text: "Recommended Album"
        }
    },
    {
        id: "artist34",
        name: "Radiohead",
        image: "https://akamai.sscdn.co/uploadfile/letras/fotos/4/2/f/0/42f02b4f105f068ab418e8019961a232.jpg",
        genres: ["Alternative Rock", "Experimental"],
        description: "Known for pushing the boundaries of modern music and emotions. Need less radio and more head.",
        spotifyTrack: "https://open.spotify.com/embed/track/2fuYa3Lx06QQJAm0MjztKr?utm_source=generator",
        recommendedAlbum: {
            url: "https://open.spotify.com/album/6dVIqQ8qmQ5GBnJ9shOYGE?si=NNRePB8VS6-mM2sCRhFHuw",
            text: "Recommended Album"
        }
    },
    {
        id: "artist35",
        name: "Sade",
        image: "https://i.pinimg.com/736x/e5/bd/8b/e5bd8bd172d52215723395157ef1bc51.jpg",
        genres: ["Soul", "Smooth Jazz"],
        description: "Timeless artist delivering sultry, sophisticated ballads with unparalleled elegance. I'm single btw.",
        spotifyTrack: "https://open.spotify.com/embed/track/4S0NYVAQdIb81uLoZoQmgq?utm_source=generator",
        recommendedAlbum: {
            url: "https://open.spotify.com/album/2PfGKHtqEX58bHtkQxJnWG?si=6vter-j0QDav6ZWlaYe4_w",
            text: "Recommended Album"
        }
    },
    {
        id: "artist36",
        name: "Slowdive",
        image: "https://indiehoy.com/wp-content/uploads/2023/05/slowdive-.jpg",
        genres: ["Shoegaze", "Dream Pop"],
        description: "Slowdive are pioneers of lush, reverb-heavy soundscapes that envelop listeners. I'm upset they disbanded in the 90's. ",
        spotifyTrack: "https://open.spotify.com/embed/track/0PRSdWTTNxfSMNwM5Cme1x?utm_source=generator",
        recommendedAlbum: {
            url: "https://open.spotify.com/album/4i21O3uVh5palcfFhCjlT7?si=ELVynLIiQ7qskEJMBJBhDA",
            text: "Recommended Album"
        }
    },
    {
        id: "artist37",
        name: "Sufjan Stevens",
        image: "https://media.pitchfork.com/photos/59ea4a90462c8a79653fb70f/4:3/w_524,h_393,c_limit/Sufjan487307780.jpg",
        genres: ["Indie Folk", "Baroque Pop"],
        description: "Sufjan Stevens is a talented multi-instrumentalist blending heartfelt lyrics with lush, orchestral arrangements. He is from Detroit.",
        spotifyTrack: "https://open.spotify.com/embed/track/12homE4JpBey5cckgoepR7?utm_source=generator",
        recommendedAlbum: {
            url: "https://open.spotify.com/album/1pOl0KEC1iQnA6F0XxV4To?si=UXZJm3w4TqCZYnjMyYwFdA",
            text: "Recommended Album"
        }
    },
        {
        id: "artist38",
        name: "SZA",
        image: "https://images.paramount.tech/uri/mgid:arc:imageassetref:shared.bet.us:33bc3e8c-f777-42a2-994d-b9ed9537870a?quality=0.7&gen=ntrn&format=jpg&width=1200&height=630&crop=true",
        genres: ["R&B", "Neo-Soul"],
        description: "SZA is a star weaving confessional lyrics into dreamy, genre-blending tracks. She is like the inner child in me wanting to speak out. Pronounced sizza.",
        spotifyTrack: "https://open.spotify.com/embed/track/0q75NwOoFiARAVp4EXU4Bs?utm_source=generator",
        recommendedAlbum: {
            url: "https://open.spotify.com/album/07w0rG5TETcyihsEIZR3qG?si=iCzONGY5QrGvWVG1IhUhOA",
            text: "Recommended Album"
        }
    },
        {
        id: "artist39",
        name: "Tame Impala",
        image: "https://jenesaispop.com/wp-content/uploads/2019/03/tame-impala-kevin-parker.jpg",
        genres: ["Psychedelic Rock", "Indie"],
        description: "Kevin Parker's solo project creating lush, trippy soundscapes and introspective lyrics. He hides his australian well.",
        spotifyTrack: "https://open.spotify.com/embed/track/5M4yti0QxgqJieUYaEXcpw?utm_source=generator",
        recommendedAlbum: {
            url: "https://open.spotify.com/album/79dL7FLiJFOO0EoehUHQBv?si=Tj_Eq4rJSo2NDwJOXDDtjw",
            text: "Recommended Album",
        }
    },
        {
        id: "artist40",
        name: "The Beatles",
        image: "https://www.udiscovermusic.com/wp-content/uploads/2020/02/The-Beatles-GettyImages-1183628511-1000x600.jpg",
        genres: ["Rock", "Pop"],
        description: "The Beatles are the most iconic band in history, revolutionizing music with their timeless classics. Probably the only 60's-70's band I actually enjoy.",
        spotifyTrack: "https://open.spotify.com/embed/track/0pNeVovbiZHkulpGeOx1Gj?utm_source=generator",
        recommendedAlbum: {
            url: "https://open.spotify.com/album/0ETFjACtuP2ADo6LFhL6HN?si=OdBAIFngQa-49IFKJE9KXQ",
            text: "Recommended Album",
        }
    },
        {
        id: "artist41",
        name: "The Marias",
        image: "https://images.universe.com/e3aea9b7-977d-432d-a0d8-ed3d50e2ff1c/-/progressive/yes/-/inline/yes/",
        genres: ["Indie Pop", "Psychedelic"],
        description: "The Marias are a bilingual band delivering sweet, genre-defying tracks with vintage vibes. Only the singer is named Maria.",
        spotifyTrack: "https://open.spotify.com/embed/track/4cJOLN346rtOty3UPACsao?utm_source=generator",
        recommendedAlbum: {
            url: "https://open.spotify.com/album/03guxdOi12XJbnvxvxbpwG?si=UEtzbzW3T6WBybHxA9uDJA",
            text: "Recommended Album",
        }
    },
        {
        id: "artist42",
        name: "The Smashing Pumpkins",
        image: "https://m.media-amazon.com/images/M/MV5BNDU3MzBiYTctMTM3ZC00NTBlLTgyMzMtMDA4ODdjN2MyZmE4XkEyXkFqcGc@._V1_.jpg",
        genres: ["Alternative Rock", "Grunge"],
        description: "Alt-rock legends fusing poetic lyrics with heavy guitars and lush arrangements. I must thank my cool uncle for putting me on.",
        spotifyTrack: "https://open.spotify.com/embed/track/0u5aO1GYsIhAWCPuXdwnak?utm_source=generator",
        recommendedAlbum: {
            url: "https://open.spotify.com/album/0bQglEvsHphrS19FGODEGo?si=wRe5vmh5TQK5YDcMTSKygQ",
            text: "Recommended Album",
        }
    },
        {
        id: "artist43",
        name: "The Strokes",
        image: "https://static01.nyt.com/images/2020/04/16/arts/13strokes-review1/13strokes-review1-videoSixteenByNineJumbo1600.jpg",
        genres: ["Indie Rock", "Garage Rock"],
        description: "The Strokes revived rock in the 2000s with their gritty, cool, and effortless anthems. They are easy to get into.",
        spotifyTrack: "https://open.spotify.com/embed/track/6YQeOwMMAkB9MV9yMWmrjh?utm_source=generator",
        recommendedAlbum: {
            url: "https://open.spotify.com/album/2xkZV2Hl1Omi8rk2D7t5lN?si=ctoDFisEScCKRhSsDNVLfg",
            text: "Recommended Album",
        }
    },
    {
        id: "artist44",
        name: "The Weeknd",
        image: "https://e0.pxfuel.com/wallpapers/846/208/desktop-wallpaper-review-the-weeknd-trilogy.jpg",
        genres: ["R&B", "Pop"],
        description: "The Weeknd has topping the charts for more than a decade, blending dark, cinematic themes with alluring vocals. He's like MJ as a dark angel.",
        spotifyTrack: "https://open.spotify.com/embed/track/2ye9iWj5V4g6k6HFeTTAKa?utm_source=generator",
        recommendedAlbum: {
            url: "https://open.spotify.com/album/04hy4jb1GDD00otiwzsFUB?si=1374yKZIRTWZY8buoNTyIA",
            text: "Recommended Album",
        }
    },
    {
        id: "artist45",
        name: "Travis Scott",
        image: "https://highxtar.com/wp-content/uploads/2023/11/higgxtar-harvard-travis-1440x1080.jpg",
        genres: ["Trap", "Hip-Hop"],
        description: "Le Cactus combines atmospheric production with high-energy performances. A healthy alternative to drugs.",
        spotifyTrack: "https://open.spotify.com/embed/track/7wBJfHzpfI3032CSD7CE2m?utm_source=generator",
        recommendedAlbum: {
            url: "https://open.spotify.com/album/41GuZcammIkupMPKH2OJ6I?si=YHU2wBbIR9-02wcJTULxPA",
            text: "Recommended Album",
        }
    },
    {
        id: "artist46",
        name: "Twenty One Pilots",
        image: "https://img.welt.de/img/kultur/pop/mobile162187206/0172505547-ci23x11-w1200/twenty-one-pilots-pressebild-2017-warn-2.jpg",
        genres: ["Alternative", "Electropop"],
        description: "Twenty One Pilots are a Genre-bending DUO blending emotional lyrics with dynamic, experimental sounds. I aspire to be best friends with someone like them.",
        spotifyTrack: "https://open.spotify.com/embed/track/5SehvGGC53A7SZKCLXQcyt?utm_source=generator",
        recommendedAlbum: {
            url: "https://open.spotify.com/album/621cXqrTSSJi1WqDMSLmbL?si=Uf-YyQG0R-Cvq7ZRA6lQqg",
            text: "Recommended Album",
        }
    },
    {
        id: "artist47",
        name: "Tyler, The Creator",
        image: "https://www.usatoday.com/gcdn/-mm-/10cb3fe3cb17bc5764dc152d9d4fd418e34c1608/c=0-105-480-585/local/-/media/USATODAY/GenericImages/2014/03/16//1394994103000-AP-Music-Tyler-The-Creator-Arrest.jpg",
        genres: ["Rap", "Neo-Soul"],
        description: "Tyler is a visionary artist pushing boundaries with creative storytelling and rich production. He does in fact create.",
        spotifyTrack: "https://open.spotify.com/embed/track/4bEcoz1OcfMgUbp2ft8ieQ?utm_source=generator",
        recommendedAlbum: {
            url: "https://open.spotify.com/album/5zi7WsKlIiUXv09tbGLKsE?si=uAAC1iyCSZGYSwfNadOlHQ",
            text: "Recommended Album",
        }
    },
    {
        id: "artist48",
        name: "Jahseh (XXXTENTACION)",
        image: "https://www.billboard.com/wp-content/uploads/media/xxxtentacion-bw-press-photo-2018-billboard-1548.jpg",
        genres: ["Rap", "Emo Rap"],
        description: "X was a controversial figure that blended raw emotion and genre-defying music with cult-like impact.",
        spotifyTrack: "https://open.spotify.com/embed/track/7AQim7LbvFVZJE3O8TYgf2?utm_source=generator",
        recommendedAlbum: {
            url: "https://open.spotify.com/album/2Ti79nwTsont5ZHfdxIzAm?si=5xxQqs2ETf2151fPKFTVYw",
            text: "Recommended Album",
        }
    },
];

