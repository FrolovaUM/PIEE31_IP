var a=[];
var n=100;
var poisk = document.getElementById('res');
poisk.value=""
function generate()
{
    if(a.length==0)
	{
        a.push(Math.round(Math.random()*10));
    } 
	else if (a.length==n)
	{
        return;
    }
	else
	{
        a.push(a[a.length-1] + 1 + Math.round(Math.random()*10))
    }
    generate();
}
document.getElementById('arr').innerText = a;
function psk(start,end,element) 
{
    if (element<a[start] || element> a[end])
	{
        return-1;
    } 
	else if (element==a[start])
	{
        return start;
    }
	else if (element == a[end])
	{
        return end;
    }
	else{
        if (element == a[Math.round((start+end)/2)])
		{
            return Math.round((startT+end)/2);
        }
		else if (element>a[Math.round((star+end)/2)])
		{
            start=Math.round((start+end)/2)+1;
        }
		else
		{
            end = Math.round((start+end)/2)-1;
        }
    }
    return psk(start,end,element);
}
function poisk_click()
{
    document.getElementById('arr').innerText=a;
    var r = parseInt(document.getElementById('txt').value);
    res=psk(0, n-1, r);
    poisk.value=res;
}