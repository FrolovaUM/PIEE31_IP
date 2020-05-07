function append() 
{
    console.log(document.body.childNodes);
    let form = document.getElementById('Form');
    var select = document.createElement('select');
    var option = document.createElement('option');
	
    option.innerHTML = "Мобильный";
    select.append(option);
    var option1 = document.createElement('option');
    option1.innerHTML = "Домашний";
    select.append(option1);
    var option2 = document.createElement('option');
    option2.innerHTML = "Рабочий";
    select.append(option2);
    var text = document.createElement('input');
    text.placeholder = "+7(9XX)XXX-XX-XX";
    var button = document.createElement('button');
    button.textContent = "-";
    button.onclick = remove;
	
    var div = document.createElement('div');
    div.append(select, text, button);
    form.append(div);
}

function remove() 
{
  let parent = this.parentNode;
   parent.remove();
}