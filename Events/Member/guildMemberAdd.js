const { EmbedBuilder, WebhookClient, GuildMember } = require("discord.js");

module.exports = {
  name: "guildMemberAdd",
  /**
   *
   * @param {GuildMember} member
   */
  execute(member) {
    const { user, guild } = member;

    member.roles.add("984964189665755206");

    const Welcomer = new WebhookClient({
      id: "1006658288051568681",
      token:
        "3eGLSgV-Z3Y6TRMyCJhgwg84cRIS3VqCdxqgFhgUPgS0gGTfIBHrUgnjG1o4VJ9TjQ4M",
    });

    const embed = new EmbedBuilder()
      .setColor("Random")
      .setThumbnail(user.avatarURL({ dynamic: true, size: 512 }))
      .setDescription(
        `Welcome, ${user.username} to ***${
          guild.name
        }***\n Account created: <t:${parseInt(
          user.createdTimestamp / 1000
        )}:R>\n Latest member count: **${guild.memberCount}**`
      );

    Welcomer.send({ embeds: [embed] });
  },
};
