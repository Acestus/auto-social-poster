class TwitterPublisher {
    constructor(apiKey, apiSecretKey, accessToken, accessTokenSecret) {
        this.apiKey = apiKey;
        this.apiSecretKey = apiSecretKey;
        this.accessToken = accessToken;
        this.accessTokenSecret = accessTokenSecret;
        this.twitterClient = this.initializeTwitterClient();
    }

    initializeTwitterClient() {
        const Twitter = require('twitter');
        return new Twitter({
            consumer_key: this.apiKey,
            consumer_secret: this.apiSecretKey,
            access_token_key: this.accessToken,
            access_token_secret: this.accessTokenSecret
        });
    }

    async postTweet(content) {
        try {
            const tweet = await this.twitterClient.post('statuses/update', { status: content });
            console.log('Tweet posted successfully:', tweet);
        } catch (error) {
            console.error('Error posting tweet:', error);
        }
    }
}

module.exports = TwitterPublisher;