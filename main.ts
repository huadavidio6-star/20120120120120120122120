music.setTempo(1000)
for (let index = 0; index < 3; index++) {
    for (let index = 0; index < 2; index++) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showIcon(IconNames.Butterfly)
        music.playTone(294, music.beat(BeatFraction.Whole))
        basic.showIcon(IconNames.StickFigure)
        music.playTone(330, music.beat(BeatFraction.Whole))
        basic.showIcon(IconNames.Butterfly)
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showIcon(IconNames.StickFigure)
    }
    for (let index = 0; index < 2; index++) {
        music.playTone(330, music.beat(BeatFraction.Whole))
        basic.showIcon(IconNames.Asleep)
        music.playTone(349, music.beat(BeatFraction.Whole))
        basic.showIcon(IconNames.Sad)
        music.playTone(392, music.beat(BeatFraction.Double))
        basic.showIcon(IconNames.Happy)
    }
}
