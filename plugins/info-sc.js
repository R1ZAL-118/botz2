let handler = async (m) => {

let anu =`
*❏––––––『 𝐒𝐂𝐑𝐈𝐏𝐓 𝐁𝐎𝐓 』––––––❏*

Pengen Scnya?
Buy Lah

wa.me/6282380388085

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕

${botdate}
`
await m.reply(anu)
}
handler.help = ['script', 'sc']
handler.tags = ['tools']
handler.command = /^(sc|script)$/i
handler.limit = false
export default handler