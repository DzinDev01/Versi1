const fs = require('fs')

// SETTINGS BOT
global.owner = ['6285166588653']
global.namaown = "Dzin"
global.ownername = "Dzin"
global.status = true
global.owneroff = true
global.foother = "© Zeno-V13"
global.themeemoji = '🤪'
global.packname = "Cetikel By"
global.author = "Zeno"

// GLOBAL MESS
global.mess = {
"ketua": " ⇝ Access Denied \nKhusus Owner",
"prem": "⇝ Access Denied \nBeli Akses Premium Di Owner",
"premium": "⇝ Access Denied \nBeli Akses Premium Di Owner",
"japost": " -- Format Japost Tidak Tersedia -- ",
"rekber": " -- List Rekber Tidak Tersedia -- ",
"owner": " ⇝ Access Denied \nKhusus Owner"
}

//~~~~~~~~~~~ DIEMIN ~~~~~~~~~~//
global.pairing = "" //jangan di isi
global.pairing2 = "" // Jangan Di Apa Apain
global.qrcode = "'" // Jangan Di Apa Apain

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
