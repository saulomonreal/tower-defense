function SpawnEnemies () {
	
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
let Good: Sprite = null
let bad = sprites.create(img`
    . . f f f . . . . . . . . f f f 
    . f f c c . . . . . . f c b b c 
    f f c c . . . . . . f c b b c . 
    f c f c . . . . . . f b c c c . 
    f f f c c . c c . f c b b c c . 
    f f c 3 c c 3 c c f b c b b c . 
    f f b 3 b c 3 b c f b c c b c . 
    . c b b b b b b c b b c c c . . 
    . c 1 b b b 1 b b c c c c . . . 
    c b b b b b b b b b c c . . . . 
    c b c b b b c b b b b f . . . . 
    f b 1 f f f 1 b b b b f c . . . 
    f b b b b b b b b b b f c c . . 
    . f b b b b b b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `, SpriteKind.Enemy)
tiles.setCurrentTilemap(tilemap`level1`)
let statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.attachToSprite(Good)
statusbar.setColor(6, 2)
statusbar.setLabel("HP")
statusbar.positionDirection(CollisionDirection.Top)
statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
tiles.placeOnTile(Good, tiles.getTileLocation(15, 16))
tiles.placeOnTile(bad, tiles.getTileLocation(15, 0))
scene.cameraFollowSprite(Good)
