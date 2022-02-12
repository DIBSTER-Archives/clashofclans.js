const ClashOfClans = require('..');
const Configuration = require('../config.json');

const Client = new ClashOfClans.Client(Configuration.Token);

;(async function () {
    const Player = await Client.getPlayer('#QRPLQL208');
    console.log(Player.achievements);
    console.log(`This player has: ${Player.achievements.length} achievements.`)
})();