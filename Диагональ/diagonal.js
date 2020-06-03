 window.onload = function()
	{
    var tab = document.createElement('table');
    tab.border = "red";
    tab.id = 't'
    for(var i=0; i<=4; i++){
        var newRow = tab.insertRow(i);
        for(var a=0; a<=4; a++)
		{
            var newCell = newRow.insertCell(a);
            newCell.width = 40;
            newCell.height = 40;
            newCell.id = 'tb';
            var s = i + 1;
            newCell.innerHTML += a + 1 + ':' + s;
		}
        document.body.appendChild(tab);
        let table = document.body.firstElementChild;

        for (let i = 0; i < table.rows.length; i++) 
		{
          let row = table.rows[i];
          row.cells[i].style.backgroundColor = 'green';
        }
    }
 }