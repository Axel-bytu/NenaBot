const fs = require('fs')
const fimg = fs.readFileSync('./src/nenabot.jpg');
const help = (prefix, fs, pushname, date, time) => {
      return `

┏ ❥︎*𝐍𝐄𝐍𝐀𝐁𝐎𝐓 by 𝐁𝐑𝐎𝐙*❦︎
╿${fs}
┷┯*INFORMACION*
  ╽
  ┠❥ Hola: ${pushname}
  ┠❥ Fecha: ${date}
  ┠❥ Hora: ${time}
  ┠❥ Comando: ⌜ ${prefix} ⌟
  ┠❥ Creador: Axel™ 
  ┠❥ Instagran: Axel_bytu
  ╿
┯┷
╽
┠❥◉*NUEVOS COMANDOS*
┠❥ ${prefix}antimenu
╠Su nombre lo dice todo (antilink)
┠❥◉*BANER*
┠❥ ${prefix}ban
┠❥ ${prefix}desban
╠Baneo a los que crean spam
╿
┷┯◉*NUEVOS MENUS*
  ╽   
  ┠❥ ${prefix}juegos
  ┠❥ ${prefix}logomaker
  ┠❥ ${prefix}desmenu
  ┠❥ ${prefix}version
  ┠❥ ${prefix}welmenu
  ┠❥ ${prefix}daftar y tu nombre
  ┠❥ ${prefix}creador
  ╠ Dudas o problemas aqui
  ╿
┯┷◉*CREAR STICKERS*
╽  
┠❥ ${prefix}s
┠❥ ${prefix}attp
╠ Mas un texto corto
┠❥ ${prefix}stickergif
╠ 6 segundos de video
┠❥◉*CONVERTIDORES*
┠❥ ${prefix}toimg
╠ De sticker a JPG
┠❥ ${prefix}tomp3
╠ De video a MP3
╿
┷┯◉*AUDIO*
  ╽
  ┠❥ ${prefix}idioma
  ┠❥ ${prefix}tts es (mas texto)
  ┠❥◉*DIVERSIÓN*
  ┠❥ ${prefix}nena (mas texto) 
  ┠❥ ${prefix}otak
  ╠Monas chinas
  ┠❥◉*OTROS*
  ┠❥ ${prefix}wame
  ╠ Link de Whatsapp
  ┠❥ ${prefix}qrcode
  ╠ Coloca un texto
  ╿
┯┷◉*GRUPOS*
╽
┠❥ ${prefix}closegc
╠ Cerrar el grupo solo admins
┠❥ ${prefix}opengc
╠ Abrir grupo solo admins
┠❥ ${prefix}kick o pafuera
╠ Eliminar a un miembro 
┠❥ ${prefix}promote
╠ Dar admin a un miembro
┠❥ ${prefix}demote
╠ Quitar el admin
┠❥ ${prefix}linkgc
╠ Link del grupo
┠❥${prefix}todos
╠ Nombra a todos los del grupo 
┠❥◉*NSWF* 
┠❥${prefix}nsfwmenu
┠❥${prefix}doxing
╿
╰╼❥by 🌀𝐁𝐫𝐨𝐳


`
}

exports.help = help
