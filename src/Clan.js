class Clan {
      constructor(data) {
            this.tag                      = data.tag
            this.name                     = data.name
            this.type                     = data.type
            this.description              = data.description
            this.location                 = data.location
            this.chatLanguage             = data.chatLanguage
            this.badgeUrls                = data.badgeUrls
            this.clanLevel                = data.clanLevel
            this.clanPoints               = data.clanPoints
            this.clanVersusPoints         = data.clanVersusPoints
            this.requiredTrophies         = data.requiredTrophies
            this.warFrequency             = data.warFrequency
            this.warWinStreak             = data.warWinStreak
            this.warWins                  = data.warWinS
            this.warTies                  = data.warTies
            this.warLosses                = data.warLosses
            this.isWarLogPublic           = data.isWarLogPublic
            this.warLeague                = data.warLeague
            this.members                  = data.members
            this.memberList               = data.memberList
            this.labels                   = data.labels
            this.requiredVersusTrophies   = data.requiredVersusTrophies
            this.requiredTownhallLevel    = data.requiredTownhallLevel
      }

      /**
       * @description Gets the leader of the clan
       * @returns {object} of the clan leader's info
       */
      getLeader() {
            return this.memberList.filter(m => m.role === "leader");
      }

      /**
       * @description Gets the coLeaders of the clan
       * @returns {object} of the clan coLeaders' info
       */
      getCoLeaders() {
            return this.memberList.filter(m => m.role === "coLeader");
      }

      /**
       * @description Gets the elders of the clan
       * @returns {object} of the clan elders' info
       */
      getElders() {
            return this.memberList.filter(m => m.role === "admin");
      }

      /**
       * @description Sorts clan members by versusTrophies
       * @returns {object} of clan members
       */
      sortMembersByVersusTrophies() {
            return this.memberList.sort((a, b) => b.versusTrophies - a.versusTrophies);
      }

      /**
       * @description Sorts clan members by expLevel
       * @returns {object} of clan members
       */
      sortMembersByExpLevel() {
            return this.memberList.sort((a, b) => b.expLevel - a.expLevel);
      }
}

module.exports = Clan;
