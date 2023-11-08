var li = document.getElementsByTagName('li');
for(var i=0;i<li.length;i++)
{
    li[i].style.backgroundColor = '#f4f4f4';
}

var items = document.getElementsByClassName('list-group-item');
for(var i=0;i<items.length;i++)
{
    items[i].style.fontWeight = 'bold';
}