//获取操作对象
var pagination=document.querySelector('.Pagination');
var divTop1=document.querySelector('.top1');


//使用自执行函数获取数据库中对应的数据
(async function(){
    var p1=await promiseAjax({
        url:'../php/list.php'
    })
    //转换数据类型
    // console.log(p1)
   var dt=eval('('+p1+')')
    // console.log(dt)
     //编写传入的obj数据
    var obj={
        pageInfo:{
            pagenum:1,
            pagesize:15, 
            totalsize:dt.length,
            totalepage:Math.ceil(dt.length/15)
        },
        textInfo:{
            first:"首页",
            prev:"上一页",
            next:'下一页',
            last:"尾页"
        },
        change(m){
            //截取指定长度的数据
            let ar2=dt.slice((m-1)*20,m*20)
            //拼接所有内容
            var str=''
            
            //遍历新数组中所有数据
            for(var attr in ar2){
                str+=`
                    <ol >
                        <li><a href=""><img referrerPolicy="no-referrer" src="${ar2[attr].img.split('?')[0]}"></a></li>
                        <li><a href="./xqy?id=${ar2[attr].id}">${ar2[attr].name}</a></li>
                        <li>
                            <p>￥${ar2[attr].money}</p>
                            <p>${ar2[attr].discuss}</p>
                        </li>
                    </ol>
               
                `
            }
            divTop1.innerHTML=str
        }
    }
    //创建分页器对象
    new Pagination(pagination,obj) 
   
})()
