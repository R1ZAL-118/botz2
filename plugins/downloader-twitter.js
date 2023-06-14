import fetch from 'node-fetch'
import moment from 'moment-timezone'

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
  if (!args[0]) throw 'Linknya mana?'
  let res = await fetch(`https://api.neoxr.my.id/api/twitter?url=${args[0]}&apikey=SqnK7o`)
  if (res.status != 200) throw `Terjadi kesalahan. Status: ${res.status}`
  let json = await res.json()
  await m.reply(`*_${global.md}_*`)
let kata = `${ucapan()}\n\nNih ${name}`

  conn.sendFile(m.chat, json.data[0].url, 'twitter.mp4', kata, m)
}
handler.help = ['igdl', 'instagram']
handler.tags = ['downloader']
handler.command = /^((twt|twitter)(dl)?)$/i

export default handler
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "Pagi Lord 🌄"
  }
  if (time >= 10) {
    res = "Siang Lord ☀️"
  }
  if (time >= 15) {
    res = "Sore Lord 🌇"
  }
  if (time >= 18) {
    res = "Malam Lord 🌙"
  }
  return res
}
