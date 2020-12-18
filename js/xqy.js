//获取大盒子对象
var fdj=document.querySelector('.fdj');
//获取地址栏中的参数信息
// console.log(location)
var path1=location.search
var dt; //当前详情信息显示的数据
//判断该参数是否存在
if(path1){
    //获取参数信息
    var id1=path1.split('?')[1].split('=')[1];
    //使用异步函数发送请求，并获取响应结果
    (async function(){
        var p1=await promiseAjax({
            url:'../php/xqy.php',
            data:'id='+id1
        })
        //转换格式
        dt=eval('('+p1+')')
        //设置内容
        var str=`
       
            <div class="left">
                <div class='box'>
                    <img referrerPolicy="no-referrer" src="${dt.img.split('?')[0]}">
                    <div class='mark'></div>
                </div>
                <div class='rightBox'>
                <img referrerPolicy="no-referrer" src="${dt.img.split('?')[0]}">
                </div>
                <div class='imgs'>
                    <img referrerPolicy="no-referrer" src="${dt.img.split('?')[0]}" class='border1'>
                    <img  referrerPolicy="no-referrer"  src="${dt.img.split('?')[0]}">
                    <img    referrerPolicy="no-referrer" src="${dt.img.split('?')[0]}">
                    <img  referrerPolicy="no-referrer"  src="${dt.img.split('?')[0]}">
                    <img  referrerPolicy="no-referrer" src="${dt.img.split('?')[0]}">
                   
                </div>
            </div>


            <div class="center">
                <p><a href="../html/list.html">${dt.name}</a></p>
                <br>
                <span>轻量化简洁设计，适合日常、通勤、户外等多场景</span>
                <div>
                    <ul>
                        <li>市场价：￥598</li>
                           
                        <li>累计售出：3002件</li>
                    </ul>
                    <div>
                        <span> 铁血价:</span>
                    <h3>￥${dt.money}</h3>
                    </div>
                </div>
                <p ><span>满减活动 ：</span>每满200减25</p>

                <p><span>库存 ：</span>北京仓库缺货(暂不支持货到付款)</p>  

                <p ><span>颜色 ：</span>极夜黑</p> 

                <div class="ma" >
                    <div>
                        <img src="../imgs/20190701112346250.jpg" >
                        <p >极夜黑</p>
                    </div> 
                    <div>
                        <img src="../imgs/20190701112346250.jpg" >
                        <p >战舰灰</p>
                    </div>
                    <div>
                        <img src="../imgs/20190701112346250.jpg" >
                        <p >深墨蓝 </p>
                    </div>   
                </div>

                <div class="size">
                    <p >尺码：
                        <div class="btn-group btn-group-justified" role="group" aria-label="...">
                            <div class="btn-group" role="group">
                                <button type="button" class="btn btn-default">S</button>
                              </div>
                              <div class="btn-group" role="group">
                                <button type="button" class="btn btn-default">XS</button>
                              </div>
                            <div class="btn-group" role="group">
                              <button type="button" class="btn btn-default">M</button>
                            </div>
                            <div class="btn-group" role="group">
                              <button type="button" class="btn btn-default">L</button>
                            </div>
                            <div class="btn-group" role="group">
                              <button type="button" class="btn btn-default">XL</button>
                            </div>
                            <div class="btn-group" role="group">
                                <button type="button" class="btn btn-default">XXL</button>
                              </div>
                          </div>
                    </p>
                </div>

                <div>
                <a href="./gwc.html" class="btn btn-primary" role="button">立即购买</a> <a href="#" class="btn btn-default" role="button">加入购物车</a>
                </div>

                <p id="last">服务承诺：正品保证 顺丰发货 支持货到付款 七天无理由退换 七天调价补贴</p>
            </div>
            <div class="right">
            <p>看了又看</p>
           <ul>
               <li>
                   <a href=""><img src="../imgs/20191212111420261.jpg" alt=""></a>
                   <p class="priceTag">
                       <span>￥</span>
                       <span>1988</span>
                   </p>
               </li>
               <li>
                <a href=""><img src="../imgs/20191212111420261.jpg" alt=""></a>
                <p class="priceTag1">
                    <span>￥</span>
                    <span>1988</span>
                </p>
               </li>
               <li>
                <a href=""><img src="../imgs/20191212111420261.jpg" alt=""></a>
                <p class="priceTag2">
                    <span>￥</span>
                    <span>1988</span>
                </p>
               </li>
           </ul>
          </div>
        `
      var main=document.querySelector(".p")
    //   console.log(main)
      main.innerHTML=str
      var box=document.querySelector('.box')
        var boxImg=box.querySelector('img')

        var mark=document.querySelector('.mark')
        var rightBox=document.querySelector('.rightBox')
        var rightImg=rightBox.querySelector('img')

        var footDiv=document.querySelector('.imgs')
        //获取小图片组
        var imgs=footDiv.querySelectorAll('img')
        //移动函数
        function move(e){
            //获取光标的移动距离
            var x1=e.pageX-box.offsetLeft-parseInt(mark.offsetWidth/2)
            var y1=e.pageY-box.offsetTop-parseInt(mark.offsetHeight/2)
           //设置边界条件
           var maxX=box.offsetWidth-mark.offsetWidth
           var maxY=box.offsetHeight-mark.offsetHeight
           var minX=minY=0
            //设置右边图片的移动距离
           var tempX,tempY
           //判断水平边界
           if(x1<minX){
               mark.style.left=minX+'px'
               tempX=0
           }else if(x1>maxX){
               mark.style.left=maxX+'px'
               tempX=maxX
           }else{
               mark.style.left=x1+'px'
               tempX=x1
           }

           //垂直方向
           if(y1<minY){
               mark.style.top=minY+'px'
               tempY=0
           }else if(y1>maxY){
               mark.style.top=maxY+'px'
               tempY=maxY
           }else{
               mark.style.top=y1+'px'
               tempY=y1
           }

           //设置右边图片的移动
           rightImg.style.left=-2*tempX+'px'
           rightImg.style.top=-2*tempY+'px'

        }
        box.onmouseover=function(e){
            var e = e || window.event
            mark.style.display='block'
            rightBox.style.display='block'
        } 

        box.onmouseout=function(){
            mark.style.display='none'
            rightBox.style.display='none'
        }

        box.onmousemove=function(e){
            var e = e|| window.event
            move(e)
        }

        //遍历所有小图片组中的图片对象
        for(var i=0;i<imgs.length;i++){
            //给每个小图片绑定点击事件
            imgs[i].onclick=function(){
                //清空所有小图片对象中的class属性值
                for(var a=0;a<imgs.length;a++){
                    imgs[a].className=''
                }
                //在给当前被选中的图片添加class属性值
                this.className='border1'
                //获取当前图片对象的src属性值
                var src1=this.getAttribute('src')
                //给上面左右盒子中的图片设置src属性值
                boxImg.setAttribute('src',src1)
                rightImg.setAttribute('src',src1)
            }
        }


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
                
    })()

}else{
    alert("非法进入")
    location.href='./list.html'
}
//给大盒子绑定点击事件
fdj.onclick=function(e){
    var e = e || window.event
    var target=e.target || e.srcElement
    //判断点击的对象是否为“加入购物车”
    if(target.innerHTML=="加入购物车"){
       //获取localStrong中的cartList
       var cartList=localStorage.getItem("gecList")
       if(cartList){
          var a=0 //判断要添加的数据是否存在
          //把字符串转为数组对象
          cartList=JSON.parse(cartList)
          //遍历cartlist数组中所有数据
          cartList.forEach((item)=>{
            //当前满足条件时，代表当前添加的数据在localStorage中存在
             if(item.id==dt.id){
               item.cart_number=++item.cart_number
               a++
               localStorage.setItem('gecList',JSON.stringify(cartList))
             }
          })
          //判断当前添加的商品是否存在
          if(a==0){
            //修改添加的商品数量
            dt.cart_number=1
            //把当前商品追加到cartList数组中
            cartList.push(dt)
            //更新localStorage中的数据
            localStorage.setItem('gecList',JSON.stringify(cartList))
          }
       }else{
         //修改添加的商品数量
         dt.cart_number=1
         //在localStrong设置一个cartList属性
         localStorage.setItem('gecList',JSON.stringify([dt]))
       }
    }
  }

