let clikerbtn = document.getElementById("clikerbtn")
let clicks = document.getElementById("clicksh3")
let coinvalue = document.getElementById("coin")

let petbtn = document.getElementById("petbtn")
let mur = document.getElementById("mur")
let stats = document.getElementById("stats")

let finish = document.getElementById("finishbtn")
let asec = document.getElementById("secretlink")

let n = 0
let coin = 0
clikerbtn.onclick = () => {
	if (n == 0) {
		setTimeout(() => {
			clicks.textContent = n
			n = 0
		}, 1000)
	}
	n += 1
	coin += 1
	coinvalue.textContent = "Coin: " + coin
	if (coin == 666) {
		asec.setAttribute("href", "http://mrtreazzy.github.io/jswebsite1")
		asec.textContent = "click"
		console.log("!DO NOT CHEAT!")
	}
}

murcount = 0
petbtn.onclick = () => {
	murcount += 1
	if (murcount >= 100) {
		mur.textContent = "хватит."
	} else {
		mur.textContent = "murr x" + murcount + " :3"
	}
}

let itemshop1 = document.getElementById("item1")
let itemshop2 = document.getElementById("item2")
let itemshop3 = document.getElementById("item3")
let itemshop4 = document.getElementById("item4")
let itemshop5 = document.getElementById("item5")

let stat = 0
itemshop1.onclick = () => {
	if (coin >= 10) {
		coin = coin - 10
		coinvalue.textContent = "Coin: " + coin
		stat = stat + 10
		stats.textContent = "Complete: " + stat + "%"
		Finish(stat)
	}
}
itemshop2.onclick = () => {
	if (coin >= 20) {
		coin = coin - 20
		coinvalue.textContent = "Coin: " + coin
		stat = stat + 20
		stats.textContent = "Complete: " + stat + "%"
		Finish(stat)
	}
}
itemshop3.onclick = () => {
	if (coin >= 30) {
		coin = coin - 30
		coinvalue.textContent = "Coin: " + coin
		stat = stat + 30
		stats.textContent = "Complete: " + stat + "%"
		Finish(stat)
	}
}
itemshop4.onclick = () => {
	if (coin >= 40) {
		coin = coin - 40
		coinvalue.textContent = "Coin: " + coin
		stat = stat + 40
		stats.textContent = "Complete: " + stat + "%"
		Finish(stat)
	}
}
itemshop5.onclick = () => {
	if (coin >= 50) {
		coin = coin - 50
		coinvalue.textContent = "Coin: " + coin
		stat = stat + 50
		stats.textContent = "Complete: " + stat + "%"
		Finish(stat)
	}
}

function Finish(stat) {
	if (stat == 100) {
		finish.removeAttribute("disabled")
	}
}

let finishtext1 = document.getElementById("finishtext1")
let finishtext2 = document.getElementById("finishtext2")
let gametime1 = document.getElementById("gametime1")
let gametime2 = document.getElementById("gametime2")
let titles = document.getElementById("titles")
let secrettitle = document.getElementById("secrettitle")
let finishtextdiv = document.getElementById("finishtextdiv")

let sec = 0
setInterval(() => {
	sec = sec + 1
}, 1000)

finish.onclick = () => {
	titles.setAttribute("class", "titles")
	titles.textContent = "Pet Evolution v1.0 | Made by MrTreazzy"

	finishtext1.setAttribute("class", "finishtext")
	finishtext1.textContent = "Thank you for playing in my new project Pet Evolution!\
	I really proud of you cuz its just awesome what you just finish my game!\
	You are clicked 100 times, its been very hard i guess...\
	And so, its my first project, my first game.\
	Sure, its just first version of this project and im going to update it.\
	I hope you will waiting for release of new version of this game, isnt it?)\
	Sorry for my bad Eng :3 So... See ya later!"

	gametime1.setAttribute("class", "gametime")
	gametime1.textContent = "Well, you finished the game in " + sec + " second."

	gametime2.setAttribute("class", "gametime")
	gametime2.textContent = "Неплохо, ты прошел игру за " + sec + " секунд."

	finishtext2.setAttribute("class", "finishtext")
	finishtext2.textContent = "RUS: А теперь на понятном языке. На англ писал без переводчика кстати :3\
	Вобщем пасибочки тебе за игру на моем проекте Pet Evolution!\
	Наверное мне стоит гордится тобой, ведь ты тот, кто действительно ее прошел.\
	Думаю это было трудно, ты кликнул 100 раз чтобы ее пройти...\
	Но все же, это мой первый проект, моя первая игра.\
	Конечно, это была первая версия этой игры и я буду ее улучшать в скором времени.\
	Надеюсь, ты оценишь ее и будешь ждать выход новой версии, не так ли?)\
	Ну чтож, пока попрощаюсь, буду тоже ждать тебя на моем проекте! Бывай)"

	secrettitle.setAttribute("class", "secrettitle")
	secrettitle.textContent = "wait...???"
	secrettitle.onclick = () => {
		finishtextdiv.setAttribute("class", "secretback")
	}
}