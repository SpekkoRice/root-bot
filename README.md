# Slack Root Bot
An event driven integration framework for designing your own chat bot to integrate with DialogFlow, Slack & Root.co.za API.
Initially I made this to remove as much boilerplate and setup as possible so I could just focus on writing nice application logic.
I decided to clean and refactor this repo in hopes that someone else might find it usefull.

Happy coding!

## Dependencies:
 - NodeJS => 8.9.3
## Quickstart
Download `ngrok` and `unzip` it
```
LINUX:
wget https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-amd64.zip; unzip ./ngrok-stable-linux-amd64.zip -d ./
MACOS:
wget https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-darwin-amd64.zip;  unzip ./ngrok-stable-darwin-amd64.zip -d ./
```
or if you don't have `wget`
```
LINUX:
curl https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-amd64.zip; unzip ./ngrok-stable-linux-amd64.zip -d ./
MACOS:
curl https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-darwin-amd64.zip;  unzip ./ngrok-stable-darwin-amd64.zip -d ./
```
Register for ngrok if you haven't already: https://dashboard.ngrok.com/user/signup
They will prompt you to run 2 commands
`./ngrok authtoken <YOUR UNIQUE TOKEN>` and `./ngrok http <YOUR WEBSERVER PORT>`

Create your `environment.ts` by copying the example
```
cp $<PROJECT-ROOT-DIR>/src/environment.example.ts $<PROJECT-ROOT-DIR>/src/environment.ts
```
Install the node modules
```
npm install
```
Now you can simply run 
```
npm run dev
```
to get the project up and running

### For Slack BOT Integration
You need to create a slack application @ https://api.slack.com
#### Currently Supported Slack Features
|      FEATURE      | SUPPORTED |
|-------------------|-----------|
| Incoming Webhooks |   YES     |
| Slash Commands    |   YES     |
| Bot Events        |   YES     |
| Workspace Events  |   NO      |
| RTM API           |   NO      |

#### Slack Slash Commands
When prompted to enter a Request URL for Slash Commands (When adding one) `https://<ngrok>.io/slack-slash-command` route has been defined to handle those events

#### Slack Events
When prompted to enter a Request URL for Slack Events `https://<ngrok>.io/slack-event-listener` route has been added to handle ALL Bot Events

### For Dialogflow Integration
You need to register for Dialogflow and enable V2 API
Use `Developer access token` for your `DIALOGFLOW_ACCESS_TOKEN` in your `environment.ts`
And that's it you're ready to hit their API.

### For ROOT API Integration
You need to be registered with root as a beta developer create an orginasation and add your API KEY
 to `ROOT_API_KEY` in your `environment.ts`
Please note that you should be querying: `https://sandbox.root.co.za` and not `https://api.root.co.za` for development

## In the Pipeline
|      FEATURE              |   WHEN        |
|---------------------------|---------------|
| Telegram Integration      |   SOON        |
| CLI Interface for Chat    |   SOON        |
| Slack Workspace Events    |   NOT SO SOON |
| Slack RTM API Integration |   NOT SO SOON |

# Issue Submission
Please submit an issue if you've found something wrong / broken or you're getting some weird ass errors.

# Contributions
It's simple:
 - Fork the repo
 - Make your changes
 - Push them to your fork remote
 - Click on create Pull Request on my repository
 - Click compare across forks.
 - I'll review your code and if everything is in order & works, then we merge.
HOW TO PR FORKS: https://help.github.com/articles/creating-a-pull-request-from-a-fork/
