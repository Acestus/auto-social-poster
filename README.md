# Auto Social Poster

This project automates the posting of content from Markdown files to social media platforms like Twitter and Mastodon.

## Overview

The Auto Social Poster listens for new Markdown files in the `/posts` directory and automatically posts their content to configured social media accounts. It utilizes GitHub Actions to trigger the posting process whenever a new Markdown file is created.

## Project Structure

- **src/index.js**: Entry point of the application. Initializes the workflow and listens for new Markdown files.
- **src/markdown-parser.js**: Parses Markdown files to extract text and metadata for posting.
- **src/publishers/twitter.js**: Contains the `TwitterPublisher` class for posting to Twitter.
- **src/publishers/mastodon.js**: Contains the `MastodonPublisher` class for posting to Mastodon.
- **src/utils/config.js**: Loads configuration settings from environment variables.
- **src/utils/logger.js**: Provides logging utilities for the application.
- **.github/workflows/social-post.yml**: Defines the GitHub Actions workflow for automatic posting.
- **package.json**: Lists project dependencies and scripts.
- **.env.example**: Example environment variables for API keys and secrets.
- **.gitignore**: Specifies files to be ignored by Git.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd auto-social-poster
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure environment variables:
   - Copy `.env.example` to `.env` and fill in your API keys and secrets for Twitter and Mastodon.

4. Create a `/posts` directory and add your Markdown files there.

5. Push your changes to the repository. The GitHub Actions workflow will trigger and post the content to your social media accounts.

## Usage

Once set up, simply add new Markdown files to the `/posts` directory. The content will be automatically posted to your configured social media accounts.

## Contributing

Feel free to submit issues or pull requests to improve the project.