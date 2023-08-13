import { App } from "@slack/bolt";

const slackbot = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
});

slackbot.message("hello", async ({ message, say }: any) => {
  await say(`Hey there <@${message.user}>!`);
});

export default slackbot;
