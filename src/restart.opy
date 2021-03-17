enum MatchRestartBehavior:
    DO_NOTHING,
    AFTER_VICTORY,
    AFTER_POTG

globalvar DesiredMatchRestartBehavior = createWorkshopSetting(enum["Do Nothing", "After Victory Screen", "After Play of the Game"], " ", "Restart Match", 3, 0)

rule "Restart Match":
    @Condition isMatchComplete()
    @Delimiter

    switch getCurrentGamemode():
        case Gamemode.FFA:
            wait([9999, 3, 20.5][[MatchRestartBehavior.DO_NOTHING, MatchRestartBehavior.AFTER_VICTORY, MatchRestartBehavior.AFTER_POTG].index(DesiredMatchRestartBehavior)])
            restartMatch()
            break
        default:
            wait([9999, 8, 25.9][[MatchRestartBehavior.DO_NOTHING, MatchRestartBehavior.AFTER_VICTORY, MatchRestartBehavior.AFTER_POTG].index(DesiredMatchRestartBehavior)])
            restartMatch()
            break