class Player {
    constructor(data) {
      this.data                                     = data
      this.tag                                      = data.tag
      this.name                                     = data.name
      this.townHallLevel                            = data.townHallLevel
      this.expLevel                                 = data.expLevel
      this.trophies                                 = data.trophies
      this.bestTrophies                             = data.bestTrophies
      this.warStars                                 = data.warStars
      this.attackWins                               = data.attackWins
      this.defenseWins                              = data.defenseWins
      this.builderHallLevel                         = data.builderHallLevel
      this.versusTrophies                           = data.versusTrophies
      this.bestVersusTrophies                       = data.bestVersusTrophies
      this.versusBattleWins                         = data.versusBattleWins
      this.role                                     = data.role
      this.warPreference                            = data.warPreference
      this.donations                                = data.donations
      this.donationsReceived                        = data.donationsReceived
      this.clan                                     = data.clan
      this.achievements                             = data.achievements
      this.versusBattleWinCount                     = data.versusBattleWinCount
      this.labels                                   = data.labels
      this.troops                                   = data.troops
      this.heroes                                   = data.heroes
      this.spells                                   = data.spells
    }
}
  
  module.exports = Player;