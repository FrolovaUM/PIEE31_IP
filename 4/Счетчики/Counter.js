var btn = document.getElementsByClassName('Button');
var Click = function (button) 
{
    var clk = 0;
    button.addEventListener('click', function() 
	{
        clk++;
        button.textContent = "Количество кликов: " + clk;
    }
	);
}
for (var i=0; i<btn.length; i++) 
{
    var button = btn[i];
    Click (button);
}