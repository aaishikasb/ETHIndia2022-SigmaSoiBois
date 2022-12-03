import { Client, GatewayIntentBits } from "discord.js";

export const sendDeepLinkViaDiscord = async (
  discordId: string,
  qrData: any
) => {
  const client = new Client({ intents: [GatewayIntentBits.Guilds] });
  client.on("ready", () => {
    console.log("Discord Bot Connected.");
  });
  client.login(process.env.BOT_TOKEN);
  const base64DeepLink = Buffer.from(JSON.stringify(qrData)).toString("base64");
  const user = await client.users.fetch(discordId);
  user.send(
    `${process.env.HOSTNAME}/api/polygon-id/deep-link?link=${base64DeepLink}`
  );
};
