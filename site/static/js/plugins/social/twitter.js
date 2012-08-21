$(".tweet").tweet({
    avatar_size: 48,
    count: 20,
    query: SETTINGS.hashtag,
    loading_text: "loading social...",
    refresh_interval: 30
});