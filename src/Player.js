class Player {
      constructor(data) {
            this.list                     = data
            this.tag                      = data.tag
            this.name                     = data.name
            this.townHallLevel            = data.townHallLevel
            this.expLevel                 = data.expLevel
            this.trophies                 = data.trophies
            this.bestTrophies             = data.bestTrophies
            this.warStars                 = data.warStars
            this.attackWins               = data.attackWins
            this.defenseWins              = data.defenseWins
            this.builderHallLevel         = data.builderHallLevel
            this.versusTrophies           = data.versusTrophies
            this.bestVersusTrophies       = data.bestVersusTrophies
            this.versusBattleWins         = data.versusBattleWins
            this.role                     = data.role
            this.warPreferences           = data.warPreferences
            this.donations                = data.donations
            this.donationsReceived        = data.donationsReceived
            this.clan                     = data.clan
            this.achievements             = data.achievements
            this.versusBattleWinCount     = data.versusBattleWinCount
            this.labels                   = data.labels
            this.troops                   = data.troops
            this.heroes                   = data.heroes
            this.spells                   = data.spells
            this.league                   = data.league
            this.townHallWeaponLevel      = data.townHallWeaponLevel
            this.legendStatistics         = data.legendStatistics
      }

      /**
       * @description Gets the total attack win of the player
       * @returns {number} of total attack wins
       */
      getTotalAttackWins() {
            return this.attackWins + this.versusBattleWinCount;
      }

      /**
       * @description Gets the total troops of the player
       * @returns {number} of player troops
       */
      getTotalTroops() {
            return this.troops.length;
      }

      /**
       * @description Gets the total heroes of the player
       * @returns {number} of player heroes
       */
      getTotalHeroes() {
            return this.heroes.length;
      }

      /**
       * @description Gets the total spells of the player
       * @returns {number} of player spells
       */
      getTotalSpells() {
            return this.spells.length;
      }

      /**
       * @description Gets the current Gold Storage level
       * @returns {number} level of Gold Storage
       */
      getGoldStorageLevel() {
            let curr = this.achievements.filter(a => a.name === "Bigger Coffers")
            let strLvl = curr[0].completionInfo.replace("Highest Gold Storage level: ", "")
            let lvl = parseInt(strLvl, 10)
            return lvl;
      }

      /**
       * @description Gets the amount of stars on Campaign Maps
       * @returns {number} of stars on Campaign Maps
       */
      getCampaignStars() {
            let curr = this.achievements.filter(a => a.name === "Get those other Goblins!")
            let strStars = curr[0].completionInfo.replace("Stars in Campaign Map: ", "")
            let stars = parseInt(strStars, 10)
            return stars;
      }

      /**
       * @description Gets the number of obstacles getObstaclesRemoved
       * @returns {number} of obstacles removed
       */
      getObstaclesRemoved() {
            let curr = this.achievements.filter(a => a.name === "Nice and Tidy")
            let strObs = curr[0].completionInfo.replace("Total obstacles removed: ", "")
            let removed = parseInt(strObs, 10);
            return removed;
      }

      /**
       * @description Gets the amount of gold looted
       * @returns {number} of gold looted
       */
      getGoldLooted() {
            let curr = this.achievements.filter(a => a.name === "Gold Grab")
            let strGold = curr[0].completionInfo.replace("Total Gold looted: ", "")
            let gold = parseInt(strGold, 10);
            return gold;
      }

      /**
       * @description Gets the amount of elixir looted
       * @returns {number} of elixir looted
       */
      getElixirLooted() {
            let curr = this.achievements.filter(a => a.name === "Elixir Escapade")
            let strElixir = curr[0].completionInfo.replace("Total Elixir looted: ", "")
            let elixir = parseInt(strElixir, 10);
            return elixir;
      }

      /**
       * @description Gets the level of the clan castle
       * @return {number} level of clan castle
       */
      getClanCastleLevel() {
            let curr = this.achievements.filter(a => a.name === "Empire Builder")
            let strCastle = curr[0].completionInfo.replace("Current Clan Castle level: ", "")
            let castleLvl = parseInt(strCastle, 10);
            return castleLvl;
      }

      /**
       * @description Gets the number of walls destroyed in Multiplayer battles
       * @returns {number} of walls destroyed
       */
      getWallsBusted() {
            let curr = this.achievements.filter(a => a.name === "Wall Buster")
            let strWalls = curr[0].completionInfo.replace("Total walls destroyed: ", "")
            let walls = parseInt(strWalls, 10);
            return walls;
      }

      /**
       * @description Gets the amount of townhalls destroyed
       * @returns {number} of townhalls destroyed
       */
      getTownHallsDestroyed() {
            let curr = this.achievements.filter(a => a.name === "Humiliator")
            let strHalls = curr[0].completionInfo.replace("Total Town Halls destroyed: ", "")
            let halls = parseInt(strHalls, 10);
            return halls;
      }

      /**
       * @description Gets the amount of builder huts destroyed
       * @returns {number} of builder huts destroyed
       */
      getBuilderHutsDestroyed() {
            let curr = this.achievements.filter(a => a.name === "Union Buster")
            let strHuts = curr[0].completionInfo.replace("Total Builder's Huts destroyed: ", "")
            let huts = parseInt(strHuts, 10);
            return huts;
      }

      /**
       * @description Gets the number of multiplayer battles won 
       * @returns {number} of multiplayer battles won
       */
      getMultiplayerBattleWins() {
            let curr = this.achievements.filter(a => a.name === "Conqueror")
            let strWins = curr[0].completionInfo.replace("Total multiplayer battless won: ", "")
            let wins = parseInt(strWins, 10);
            return wins;
      }

      /**
       * @description Gets the number of successful defends
       * @returns {number} of successful defends
       */
      getSuccessfulDefends() {
            let curr = this.achievements.filter(a => a.name === "Unbreakable")
            let strDef = curr[0].completionInfo.replace("Total defenses won: ", "")
            let def = parseInt(strDef, 10);
            return def;
      }

      /**
       * @description Gets the number of reinforcements donated
       * @returns {number} of reinforcements donated
       */
      getDonated() {
            let curr = this.achievements.filter(a => a.name === "Friend in Need")
            let strDon = curr[0].completionInfo.replace("Total capacity donated: ", "")
            let donated = parseInt(strDon, 10);
            return donated;
      }

      /**
       * @description Gets the number of mortars destroyed
       * @returns {number} of mortars destroyed
       */
      getMortarsDestroyed() {
            let curr = this.achievements.filter(a => a.name === "Mortar Mauler")
            let strMortar = curr[0].completionInfo.replace("Total Mortars destroyed: ", "")
            let mortar = parseInt(strMortar, 10);
            return mortar;
      }

      /**
       * @description Gets the number of dark elixir looted
       * @returns {number} of dark elixir looted
       */
      getDarkElixirLooted() {
            let curr = this.achievements.filter(a => a.name === "Heroic Heist")
            let strElixir = curr[0].completionInfo.replace("Total Dark Elixir looted: ", "")
            let elixir = parseInt(strElixir, 10);
            return elixir;
      }

      /**
       * @description Gets the league the player is in
       * @returns {number} of the league the player is in
       */
      getLeague() {
            let curr = this.achievements.filter(a => a.name === "League All-Star")
            return curr[0].value;
      }

      /**
       * @description Gets the amount of x-bows destroyed
       * @returns {number} of x-bows destroyed
       */
      getXBowDestroyed() {
            let curr = this.achievements.filter(a => a.name === "X-Bow Exterminator")
            let strBow = curr[0].completionInfo.replace("Total X-Bows destroyed: ", "")
            let xbow = parseInt(strBow, 10);
            return xbow;
      }

      /**
       * @description Gets the amount of Inferno Towers destroyed
       * @returns {number} of Inferno TOWERS destroyed
       */
      getInfernoTowersDestroyed() {
            let curr = this.achievements.filter(a => a.name === "Firefighter")
            let strInferno = curr[0].completionInfo.replace("Total Inferno Towers destroyed: ", "")
            let inferno = parseInt(strInferno, 10);
            return inferno;
      }

      /**
       * @description Gets the number of gold collected from Clan Castle
       * @returns {number} of gold collected from Clan Castle
       */
      getClanGoldCollected() {
            let curr = this.achievements.filter(a => a.name === "Clan War Wealth")
            let strWar = curr[0].completionInfo.replace("Total gold collected in Clan War bonuses: ", "")
            let war = parseInt(strWar, 10);
            return war;
      }

      /**
       * @description Gets the number of eagle artilleries destroyed
       * @returns {number} of eagle artilleries destroyed
       */
      getEagleArtilleriesDestroyed() {
            let curr = this.achievements.filter(a => a.name === "Anti-Artillery")
            let strArtillery = curr[0].completionInfo.replace("Total Eagle artilleries destroyed: ", "")
            let artillery = parseInt(strArtillery, 10);
            return artillery;
      }

      /**
       * @description Gets the amount of spells donated
       * @returns {number} of spells donated
       */
      getSpellsDonated() {
            let curr = this.achievements.filter(a => a.name === "Sharing is caring")
            let strSpells = curr[0].completionInfo.replace("Total spell capacity donated: ", "")
            let spells = parseInt(strSpells, 10);
            return spells;
      }

      /**
       * @description Gets whether account is connected to SCID
       * @returns {boolean} true: connected to Supercell ID, false: not connected
       */
      getConnected() {
            let curr = this.achievements.filter(a => a.name === "Keep Your Account Safe!")
            let completion = curr[0].completionInfo
            if(completion === "Completed!") 
                  return true;
            else 
                  return false
      }

      /**
       * @description Gets the total Season Challenges points earned
       * @returns {number} of Season Challenges points earned
       */
      getSeasonChallengePoints() {
            let curr = this.achievements.filter(a => a.name === "Well Seasoned")
            let strPoints = curr[0].completionInfo.replace("Total Season Challenges points: ", "")
            let points = parseInt(strPoints, 10);
            return points;
      }

      /**
       * @description Gets the amount of scattershots destroyed
       * @returns {number} of scattershots destroyed
       */
      getScattershotsDestroyed() {
            let curr = this.achievements.filter(a => a.name === "Shattered and Scattered")
            let strScattershots = curr[0].completionInfo.replace("Total scattershots destroyed: ", "")
            let scattershots = parseInt(strScattershots, 10);
            return scattershots;
      }

      /**
       * @description Gets the amount of weaponized Town Halls destroyed
       * @returns {number} of weaponized Town Halls destroyed
       */
      getWeaponizedTownHallsDestroyed() {
            let curr = this.achievements.filter(a => a.name === "Not So Easy This Time")
            let strHalls = curr[0].completionInfo.replace("Weaponized Town Halls destroyed: ", "")
            let halls = parseInt(strHalls, 10);
            return halls;
      }

      /**
       * @description Gets the amount of weaponized Builder Huts destroyed
       * @returns {number} of weaponized Builder Huts destroyed
       */
      getWeaponizedBuilderHutsDestroyed() {
            let curr = this.achievements.filter(a => a.name === "Bust This!")
            let strHuts = curr[0].completionInfo.replace("Total weaponized Builder's Huts destroyed: ", "")
            let huts = parseInt(strHuts, 10);
            return huts;
      }

      /**
       * @description Gets the times a super troop was boosted
       * @returns {number} of super troops was boosted
       */
      getSuperTroopBoostedd() {
            let curr = this.achievements.filter(a => a.name === "Superb Work")
            let strBoosted = curr[0].completionInfo.replace("Total times Super Troops boosted: ", "")
            let boosted = parseInt(strBoosted, 10);
            return boosted;
      }

      /**
       * @description Gets the amount siege machines donated
       * @returns {number} of siege machines donated
       */
      getSiegeMachinesDonated() {
            let curr = this.achievements.filter(a => a.name === "Siege Sharer")
            let strDonated = curr[0].completionInfo.replace("Total Siege Machines donated: ", "")
            let donated = parseInt(strDonated, 10);
            return donated;
      }

      /**
       * @description Gets troops based on village
       * @param {string} name of village (home, builderbase)
       * @returns {object} of troops in specified village
       */
      getTroops(village) {
            let x = this.troops.filter(t => t.village.toLowerCase().replace(" ", "") == village.toLowerCase().replace(" ", ""))
            return x.length > 0 ? x : TypeError('Invalid Village Name')
      }

      /**
       * @description Gets heroes based on village
       * @param {string} name of village (home, builderbase)
       * @returns {object} of heroes in specified village
       */
      getHeroes(village) {
            let x = this.heroes.filter(h => h.village.toLowerCase().replace(" ", "") == village.toLowerCase().replace(" ", ""))
            return x.length > 0 ? x : TypeError('Invalid Village Name')
      }    
      
      /**
       * @description Gets spells based on village
       * @param {string} name of village (home)
       * @returns {object} of spells in specified village
       
      getSpells(village) {
            let x = this.spells.filter(s => s.village.toLowerCase().replace(" ", "") == village.toLowerCase().replace(" ", ""))
            return x.length > 0 ? x : TypeError('Invalid Village Name')
      }
      */
}

module.exports = Player;
