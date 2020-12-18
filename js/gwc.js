//获取用户cookie
var name1=getCookie('name')
//获取当前地址
var url2=location.href
//判断当前cookie是否存在
if(!name1){
    alert('非法进入，请登陆')
    location.href="./dl.html?url="+url2
}
//获取大盒子对象
var bottom=document.querySelector('.bottom')
//获取localStrong的数据
var cartlist=localStorage.getItem("gecList") || "[]";
//转为数据对象
cartlist=JSON.parse(cartlist)

show1()
function show1(){
    if(cartlist.length>0){
        //验证全选框是否被选中
        var quan1=cartlist.every(item=>{
            return item.is_select==1
        })
        var aa=total1()
        //创建变量，拼接所有商品信息
        var str2=`<div class="bottom">
        <ul>
            <li></li>
            <li>商品</li>
            <li style="width: 330px;text-align: center;">名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称</li>
            <li>尺寸</li>
            <li>颜色</li>
            <li>价格</li>
            <li style="width: 98px">数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;量</li>
            <li style="width: 68px;">操作</li>
        </ul>
        `

   
        
    //遍历数组中所有的商品信息
    cartlist.forEach(item=>{
        let ma=item.img
// console.log(item.img)
        str2+=`

       <ol>
       <li><input type="checkbox" ${item.is_select==1?'checked':''}  name="xuan" data-id="${item.id}"></li>
       <li><img referrerPolicy="no-referrer" src="${ma.split('?')[0]}"  style="
       width: 50px;height: 50px;"></li>
       <li style="font-size: 12px;width: 372px;">
       <a  href="./xqy?id=${item.id}">${item.name}</a></li>
       <li>XS</li>
       <li>极夜黑</li>
       <li>￥${item.money}</li>
       <li> <button type="button" data-id=${item.id}  class="btn btn-default">-</button>
        <button type="button" class="btn btn-default">${item.cart_number}</button>
        <button data-id=${item.id} class="btn btn-default">+</button></li>
       
      <li style="width: 82px;"><button type="button" class="btn btn-primary" data-id=${item.id}>我不要了</button></li>
       </ol>
        `
    })
    var str3=`
    <div class="shuliang">
   
        <div class="settlement">
            <ul>
                <li><input type="checkbox" name="quan" ${quan1?'checked':''}>全选</li>
                <li>商品种类：<span>${cartlist.length}</span></li>
                <li>所选商品数量：<span>${aa[0]}</span> </li>
                <li>所选商品价格：￥<span>${aa[1]}</span></li>
                <li><a href="#" class="btn btn-primary btn-sm" role="button">结算</a></li>
            </ul>
        </div> 
        <div class="empty">
            <a href="#" class="btn btn-info  btn-sm" role="button">清空购物车</a>
            <a href="../html/list.html"  class="btn btn-info  btn-sm" role="button">继续购物</a>

        </div>   
    `
    //在把拼接好的内容添加到大盒子中
    bottom.innerHTML=str2+str3
    }else{
    var str=`
    
    <div class="jumbotron">
            <h1>您的购物车没有商品</h1>
            
            <p><a class="btn btn-primary btn-lg" href="./list.html" role="button">去购买</a></p>
        </div>
    `
    // 把当前字符串添加到大盒子中
    bottom.innerHTML=str
    }
}
//給大盒子绑定点击事件
bottom.onclick=function(e){
  console.log(cartlist)
    var e = e || window.event
    var target=e.target || e.srcElement
    //加法
    if(target.innerHTML=="+"){
        //获取当前商品的id
        var id1=target.getAttribute('data-id')
        console.log(id1)
        //遍历数组元素
        cartlist.forEach(item=>{
            //判断是否为当前操作的商品
            if(item.id==id1){
                item.cart_number+=1
            }
        })
        //重置localStrong
        localStorage.setItem('gecList',JSON.stringify(cartlist))
        show1()
    }
    //减法
    if(target.innerHTML=='-'){
        //获取id
        var id1=target.getAttribute('data-id')
        //遍历数组元素
        cartlist.forEach(item=>{
            //判断是否为当前操作的商品
            if(item.id==id1){
                if(item.cart_number<=1){
                    item.cart_number=1
                }else{
                    item.cart_number-=1
                }
             
            }
        })
        //重置localStrong
        localStorage.setItem('gecList',JSON.stringify(cartlist))
        show1()
    }
    //删除一行
    if(target.innerHTML=='我不要了'){
        //获取id
        var id1=target.getAttribute('data-id')
        //遍历数据元素，把满足条件的数据过滤，不满足条件的元素保留
        cartlist2=cartlist.filter(item=>{
            return item.id!=id1
        })
        //重置localStrong
        localStorage.setItem('gecList',JSON.stringify(cartlist2))
        //刷新
        location.reload()
    }
    //全选
    if(target.getAttribute('name')=='quan'){
        //遍历数组中所有的数据
        cartlist.forEach(item=>{
            //判断全选框是否被选中
            if(target.checked){
                //修改所有商品选中框的is_select
                item.is_select=1
            }else{
                item.is_select=0
            }
        })
        //重置localStrong
        localStorage.setItem('gecList',JSON.stringify(cartlist))
        show1()
    }
    //选中框
    if(target.getAttribute('name')=='xuan'){
       //获取当前商品id
       var id1=target.getAttribute('data-id')
       //遍历数据元素
       cartlist.forEach(item=>{
           //判断是否为当前操作商品
           if(item.id==id1){
            //    item.is_select=item.is_select?0:1
                if(item.is_select==1){
                    item.is_select=0
                }else{
                    item.is_select=1
                }
           }
       })
       //重置localStrong
       localStorage.setItem('gecList',JSON.stringify(cartlist))
       show1()
    }
    //结算
    if(target.innerHTML=='结算'){
        //确认是否购买
        if(confirm("你确定要购买吗？")){
            alert("你要支付："+total1()[1])
            //过滤数组元素
            var cartlist3=cartlist.filter(item=>{
                return item.is_select!=1
            })
            //重置localStrong
       localStorage.setItem('gecList',JSON.stringify(cartlist3))
        location.reload()
        }
    }
    //清空购物车
    if(target.innerHTML=='清空购物车'){
        localStorage.removeItem('gecList')
        // localStorage.setItem('cartList','')
        location.reload()
    }

}
function total1(){
    var num=0 //总数量
    var price=0 //总价格
    //遍历cartlist数组
    cartlist.forEach(item=>{
        //判断该商品是否被选中
        if(item.is_select==1){
            //统计商品总数量
            num+=item.cart_number
            //统计总计
            price+=parseInt(item.cart_number)*parseFloat(item.money)
        }
    })
    return [num,price.toFixed(2)]              
}
