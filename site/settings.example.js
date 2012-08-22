var SETTINGS = {
    /* Which backend to use for Video on demand. Choose from the following providers: Vimeo, Youtube or NORDUnet MDS */
    vodprovider: "mds",

    /* Where to get content from the different providers
    * Vimeo: Use the channel concept
    * Youtube: USe the playlist concept
    * NORDUnet MDS: Use the event concept
    * */
    vimeo_channel: "changeme",
    youtube_playlist: "12345678",
    mds_event: "12345",

    /* Live events. Enter a url suitable to embed in an iframe */
    livestreams: {
        track1: {
            title: "Test",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel velit ante. Suspendisse consectetur luctus sagittis. Cras ut ligula sed nunc auctor mollis nec vel enim. Suspendisse potenti. Nullam luctus tincidunt sollicitudin. Suspendisse vel dolor vel lectus luctus tincidunt id nec mauris. Vestibulum aliquet odio quis turpis porttitor at lobortis augue tristique. Sed ante odio, semper vulputate vehicula et, faucibus et mi.",
            url: "http://<some-streaming-url>",
            published: false,
            autostart: false
        }
    },
    /* Show twitter stream, search for hashtag*/
    twitter: true,
    hashtag: "#foobar",

    /* Enable Disqus comments*/
    comments: true,
    disqus_shortname: "example",
    dev_mode: 1

};