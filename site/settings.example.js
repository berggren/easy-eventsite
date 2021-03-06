var SETTINGS = {
    /* Which backend to use for Video on demand. Choose from the following providers: vimeo, youtube or mds */
    vodprovider: "youtube",

    /* Where to get content from the different providers
    * vimeo: Use the channel concept
    * youtube: USe the playlist concept
    * mds: Use the event concept
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
    /* Show twitter stream */
    twitter: true,
    twitterHashTag: "#foobar",
    twitterWidgetID: "You need to create a Twitter search widget, https://twitter.com/settings/widgets/",

    /* Enable Disqus comments*/
    comments: true,
    disqus_shortname: "example",
    dev_mode: 1

};
