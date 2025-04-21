// src/index.js
const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');
const { parseMarkdown } = require('./markdown-parser');
const { TwitterPublisher } = require('./publishers/twitter');
const { MastodonPublisher } = require('./publishers/mastodon');
const { loadConfig } = require('./utils/config');
const logger = require('./utils/logger');

const config = loadConfig();
const twitterPublisher = new TwitterPublisher(config.twitter);
const mastodonPublisher = new MastodonPublisher(config.mastodon);

const postsDirectory = path.join(__dirname, '../posts');

const watcher = chokidar.watch(postsDirectory, {
  persistent: true,
  ignoreInitial: true,
});

watcher.on('add', (filePath) => {
  logger.info(`New Markdown file detected: ${filePath}`);
  
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      logger.error(`Error reading file: ${err}`);
      return;
    }

    const { content, metadata } = parseMarkdown(data);
    
    twitterPublisher.post(content, metadata)
      .then(() => logger.info('Posted to Twitter successfully'))
      .catch(err => logger.error(`Twitter posting error: ${err}`));

    mastodonPublisher.post(content, metadata)
      .then(() => logger.info('Posted to Mastodon successfully'))
      .catch(err => logger.error(`Mastodon posting error: ${err}`));
  });
});

logger.info('Auto social poster is watching for new Markdown files...');