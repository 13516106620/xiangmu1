//获取元素
var tab_list = document.querySelector('.tab_list');
var lis = tab_list.querySelectorAll('li');
var items = document.querySelectorAll('.item');
//for循环绑定点击事件
for (var i = 0; i < lis.length; i++) {
    //开始给5个li 设置索引号
    lis[i].setAttribute('index', i);
    lis[i].onclick = function() {
        //干掉所有人 其余的li清除 class 这个类
        for (var i = 0; i < lis.length; i++) {
            lis[i].className = ''
        }
        //留下我自己
        this.className = 'current';
        //2.下面的显示内容模块
        var index = this.getAttribute('index');
        console.log(index);
        //干掉所有人，让其余的item 这些div隐藏
        for (var i = 0; i < items.length; i++) {
            items[i].style.display = 'none';
        }
        items[index].style.display = 'block';
        //留下我自己 让队友的item显示出来
    }
}
for (var i = 1; i < items.length; i++) {
    items[i].style.display = 'none'; 
        }
        
