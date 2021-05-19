const platform = require('platform-folders');
const fs = require('fs');
const discord_loc = `${platform.getDataHome()}\\discord`;
const result = discord_loc.split("\\").join("\\\\");
fs.mkdir("./info", ()=>{})
fs.writeFileSync('./info/file.json', `{\n "discord_location":"${result}" \n}`, ()=>{
});
