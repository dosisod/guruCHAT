/* characters

\u2500 : ─ : HORX BAR
\u2502 : │ : VERT BAR
\u250C : ┌ : UP LEFT CORNER
\u2510 : ┐ : UP RIGHT CORNER
\u2514 : └ : LOW LEFT CORNER
\u2518 : ┘ : LOW RIGHT CORNER

*/

window.onload=()=>{
	messages=[{"BOB":"HI"},{"user1":"HEY"}]
	user="BOB" //all non-user usernames will be displayed to the left
	
	screen=document.getElementById("x")
	console.log(screen.innerHTML)
	screenX=screenY=0
	
	while (true) { //finds x width of screen in characters
		screen.innerHTML+="."
		if (document.body.clientWidth<screen.scrollWidth) break
		screenX++
	}
	screen.innerHTML=""
	while (true) {
		screen.innerHTML+=".\n"
		if (document.body.clientHeight<screen.scrollHeight) break
		screenY++
	}
	screen.innerHTML=""
	topbar()
	bottombar()
}

function topbar() {
	screen.innerHTML+="\n \u250C\u2500\u2500guruCHAT"
	for (i=0;i<screenX-14;i++) screen.innerHTML+="\u2500"
	screen.innerHTML+="\u2510"
}

function bottombar() {
	screen.innerHTML+="\n \u2514"
	for (i=0;i<screenX-29;i++) screen.innerHTML+="\u2500"
	screen.innerHTML+="press\u2500ESC\u2500to\u2500leave\u2500chat\u2500\u2500\u2518"
}
