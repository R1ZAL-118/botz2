let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  const caption = `
*❏––––––『 JADI 𝐁𝐎𝐓 』––––––❏*

*Anda bisa dengan buy ke owner atau lansung wa nomer bot*

*HARGA? MURAH KOK BANH*

*MELAYANI JUGA PANEL BOT,SEWABOT DLL...*


⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
         ❨ ${namebot} ❩

${botdate}
`.trim()
  conn.sendFile(m.chat, 'https://telegra.ph/file/a7313a6cfa6dd2e73d60d.jpg', null, caption, m)
}
handler.help = ['bank']
handler.tags = ['rpg']
handler.command = /^(jadibot)$/i;

handler.register = false
export default handler