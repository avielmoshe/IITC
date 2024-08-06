let player={
  name:"TRUMP",
  score:100,
  health:65,
  level:2
}
console.log(player);


function restart(player,newName){
player.name=newName
player.health=100
player.score=0
player.level=0
}
restart(player,"aviel")
console.log(player);

// function level_1()