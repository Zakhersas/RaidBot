module.exports.run = async(client, msg, args) => {
    const member = msg.mentions.members.first();
    const discordUser = member.user;
    const rank = parseInt(args[1]);
    const users = client.db.get('users');
    const affectedRows = await users.update({ permissionRank: rank}, { where: { discordID: discordUser.id } });
    if (affectedRows > 0) {
	    return msg.reply(`User ${member.nickname} was edited.`);
    }
    return msg.reply(`Could not find a user with id ${discordUser.id}.`);
}

module.exports.properties = {
    name: "setrank",
    enabled: true,
    permissionRank: 0,
    commandLevel: "bot",
    botPermissions: [

    ],
    userPermissions: [

    ]
}