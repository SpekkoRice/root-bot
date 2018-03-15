# Slack Root Bot
## Dependencies:
 - NodeJS => 8.9.3
 - TypeScript Compiler => 2.6.1

## How to Install
 - Clone the repository
 - run `npm install`
 - Compile typescript | convenience: `npm run dev`
    - This will startup nodemon and ts-node to watch for changes in the source and reload the application
 - Setup your Slack Bot
 - Add your Webhook
 - Define your challenge / action URL (The URL that will receive POST requests from Slack)

 ## Extra info

 - Make sure you created the file src/environment.ts with your environmental variables
 - Ngrok can help debug locally https://dashboard.ngrok.com/get-started
