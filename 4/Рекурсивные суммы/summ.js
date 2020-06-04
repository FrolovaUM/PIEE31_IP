let el = document.getElementById('txt');
let itg = document.getElementById('itog');
document.getElementById('summ').onclick = summ_click;
	function summ_click() 
	{
		let n = recurs(el.value);
		itog.textContent = n;
	}
	function recurs(num) 
	{
		let t = [...num].reduce((a, b) => a + +b, 0);
		while (t > 9) t = recurs(t.toString());
		return t;
	}