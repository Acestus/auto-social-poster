class MastodonPublisher {
    constructor(apiBaseUrl, accessToken) {
        this.apiBaseUrl = apiBaseUrl;
        this.accessToken = accessToken;
    }

    async postStatus(status) {
        const response = await fetch(`${this.apiBaseUrl}/api/v1/statuses`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${this.accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status })
        });

        if (!response.ok) {
            throw new Error(`Failed to post status: ${response.statusText}`);
        }

        return await response.json();
    }
}

export default MastodonPublisher;