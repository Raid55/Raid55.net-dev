let myArr= ["nicholas boutboul", "raidillon55"];
let myInfo = {};

function cutName(name){
  return name.split(" ")
}

function fillMyInfo(infoArr, github){
  return {
    fullName: cutName(infoArr[0]),
    skype: infoArr[1],
    github: github ? github : null
  }
}
myInfo = fillMyInfo(myArr, "Raid55")
console.log(fillMyInfo(myArr, "Raid55"), myInfo);
