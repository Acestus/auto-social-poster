module.exports = () => {
    return {
        twitter: {
            apiKey: process.env.TWITTER_API_KEY,
            apiSecretKey: process.env.TWITTER_API_SECRET_KEY,
            accessToken: process.env.TWITTER_ACCESS_TOKEN,
            accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
        },
        mastodon: {
            instanceUrl: process.env.MASTODON_INSTANCE_URL,
            accessToken: process.env.MASTODON_ACCESS_TOKEN,
        },
        otherSettings: {
            // Add any other configuration settings here
        }
    };
};