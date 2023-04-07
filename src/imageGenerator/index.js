const img = [
	"https://lh3.googleusercontent.com/XyNDIrsF6jKd9qAkVPxuHfejYKw9FSZGTtZQBmgwsBpPo0689m8mh3NUe9vW-Zke_xUvdEwsdlClOw=w544-h544-l90-rj",
	"https://lh3.googleusercontent.com/ZZzHy4G3kpJgyvaCFMrR9FR7Vac37-StOr_vycUgwFXdnosv7tCSplORS2_fQuiFCKF8YYgjXoHQUYM=w544-h544-l90-rj",
	"https://lh3.googleusercontent.com/2z1rvCIgpf3MmVe8VNxxUZ47ygOK9-uafUgYjnIYE59IU_6FbpzQ768-jX5PUSNS4cvew6Y3Dkm5mw=w544-h544-l90-rj",
	"https://lh3.googleusercontent.com/ezjnUNIPijkzD6SUOeeB2_hSqEpqSjcpJ7qL5ZrQPq-4jbXNZk6vShCs_blosbcISqF8B8C32DXZcW_j=w544-h544-l90-rj",
	"https://lh3.googleusercontent.com/T2ZFMvLhbSYaBNpmncQW_vjt7dc6UHgXxxirW_ZgHFERxyFh89KXZbxqvabPD9AQMhJ7ZZZYuTFibv0=w544-h544-s-l90-rj",
	"https://lh3.googleusercontent.com/ffkNAH0atjFm899P72TsQVKhjkNYrrT80OdHDw6Mdof3KUMYypvzUuXVeXyzx4SwxaR-mYEkV-9nLOY=w544-h544-l90-rj",
	"https://lh3.googleusercontent.com/_k_xLr3DXWEcimmrJyqyBt-9hAuDvXQKZGSycKjzXhBHC9FDN3n4PH8oTvjxKBdesOH-beCul0fsTDQ=w544-h544-l90-rj",
	"https://lh3.googleusercontent.com/BpMprXPNtivoZynTUvbH6VbGNodDx_f8qvHdNpOKxeEarEkljP8L67qwJWyqRgTLegKhEgoUpkAKWrT8=w544-h544-l90-rj",
	"https://lh3.googleusercontent.com/ZADMmlxeXpIt5upS9OnfzVNlWO3j8rcEHJ0rKBUcmyceY1c53lP8NjEmB3x2F2-NmC_-Et2_e74p5aE=w544-h544-l90-rj",
	"https://lh3.googleusercontent.com/1xb_nF7NH68ccde6KBEPCze5E7x8OnNCxQA6_aPyI29WWOn_uqGVJqD95oMoHuQYogwxTQ60mM3c2AQ=w544-h544-l90-rj",
	"https://lh3.googleusercontent.com/ie6vPv1bmKoRXo5p9geCKDytcUpSeEaz8Mu7LVdOuYrkXNOJ4v7VPUObMuChwDJV8qNir34nN9FE-Azs=w226-h226-l90-rj",
	"https://lh3.googleusercontent.com/lb6FqKc6zuSG9HVXoHNKbzTUUQoFwIDpAA9DvSPW0K2SvZA1Hk-fpkaadPLiMAFupzSTMpIEDEjgg7Sk=w226-h226-l90-rj",
	"https://lh3.googleusercontent.com/Tya9Q_jJv7l5lOleLTEOnRwuwIXFNJhUBXqSJeH82exNANfsBtkK4-41fY_-0nivoOZ8-rzvi-pIx5D7=w226-h226-l90-rj",
	"https://lh3.googleusercontent.com/JfrXX1yUQebOYtJmnzWxuQQgc-uyhekxj6JxvZPg9Ow6P8lF42ONwhmz6QYCYnwkBQOouGKAJCeu-UfK=w226-h226-l90-rj",
	"https://lh3.googleusercontent.com/0E-uZ3f6b1GWJ76S2q0Qoc3ThkcAy7biTaYTGJwYex63OzbipQRs92yWSul-ydw-8ebFnz7UTtxao3k=w226-h226-l90-rj",
	"https://lh3.googleusercontent.com/MIzotzkzpiMUM-VbzAZ0OYKztDWLhnEIduz5auT8Fm0tWOtz8GSTi46lYj9yiu4hnKQPOTqRQmiFAxA=w226-h226-l90-rj",
	"https://lh3.googleusercontent.com/9SD3BZ1T8EdpkwhLMvtSNxj-Usw1Cz8OEdQh2DnZwQQwpuJVTSo_Dtrp0VBjCMtWY73ZBQmIl-RDnA=w226-h226-l90-rj"

] 
  
export function imgForPlaylist(originalFileName){

	let value = (String(originalFileName)).length

	if(value === 0) return img[0]

	if(value <= 5) return img[1]

	if(value <= 8) return img[2]

	if(value <= 11) return img[3]

	if(value <= 12) return img[4]

	if(value <= 14) return img[8]

	if(value <= 20) return img[5]

	if(value <= 23) return img[6]

	if(value <= 25) return img[7]

	if(value <= 28) return img[10]

	if(value <= 32) return img[11]

	if(value <= 35) return img[12]

	if(value <= 38) return img[13]

	if(value <= 42) return img[14]

	if(value <= 46) return img[15]

	if(value <= 49) return img[16]

	return img[9]
  
}
  