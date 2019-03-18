<template>
  <!--<div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    
  </div>-->
  <!--<div class="title-bar">
      <a class="nav-toggle">

      </a>
  </div>-->
  <div>
    <div class="nav-global">
      <h1 class="nav-logo">
              <a href="index.html" title="锤子科技官网">Smartisan</a>
        
      </h1>
      <div class="container">
        <ul class="nav-list">
            <li>
          <a href="javascript:;" class="active" title="在线商城">在线商城</a>
              
                
            </li>
            <li><a href="javascript:;" title="坚果 Pro 2S">坚果 Pro 2S</a></li>
            <li><a href="javascript:;" title="坚果 R1">坚果 R1</a></li>
            <li><a href="javascript:;" title="坚果 TNT工作站">坚果 TNT工作站</a></li>
            <li><a href="javascript:;" title="Smartisan OS">Smartisan OS</a></li>
            <li><a href="javascript:;" title="欢喜云">欢喜云</a></li>
            <li><a href="javascript:;" title="论坛">论坛</a></li>
            <li><a href="javascript:;" title="荣誉与奖项">荣誉与奖项</a></li>
        </ul>
      </div>
      <ul class="nav-aside">
        <li class="nav-user">
            <a>个人中心</a>
        </li>
          <li class="nav-cart ">
            <a>
              <span></span>
            </a>
        </li>
      </ul>
    </div>
  <!--分类导航-->
    <div class="nav-sub-wrapper">
        <div class="container">
          <ul class="nav-list">
              <li class="active">
                  <a>首页</a>
              </li>
              <li >
                  <a>手机</a>
              </li>
              <li>
                  <a>"足迹"系列</a>
              </li>
              <li >
                  <a>官方配件</a>
              </li>
              <li >
                  <a>畅呼吸系列</a>
              </li>
              <li >
                  <a>箱包类</a>
              </li>
              <li >
                  <a>品牌周边</a>
              </li>
              <li >
                  <a>智能音箱</a>
              </li>
              <li >
                  <a>服务</a>
              </li>
              <li >
                  <a>企业团购</a>
              </li>
          </ul>
          <search-bar class="nav-search">
              <div class="search-bar">
                 <form class="search-form">
                    <input class="search-box" type="text"></input>
                    <button class="search-btn" type="submit"></button>
                    <div class="search-recommend-words">
                        <a>坚果 Pro 2S 领券最高减 300 
                          元</a>
                    </div>
                 </form>
              </div>
          </search-bar>
        </div>
    </div>
    <!--主题内容  轮播图-->
    <div class="home-wrapper">
        <div class="banner home-box" id="js-banner">
          
              <div class="banner-item active">
                <a>
                  <img  src="../static/img/PC2019011701.png"
                    style="opacity:1; transition:opacity 0.3s ease-in-out"/>
                </a>

              </div>
      
              <div class="banner-focus">
                  <a class="active"></a>
                  <a></a>
              </div>
        </div>
        <!--出众新品，一应俱全-->
        <div class="home-box">
           <advertise>
              <div class="advertise">
                 <div class="advertise-item">
                     <img src="../static/img/067b3a1d3aeeff466fe16e10c20efefe.jpg"
                       style="opacity:1; transition:opacity 0.3s ease-in-out"/> 
                       <a></a>
                 </div>
                 <div class="advertise-item">
                     <img src="../static/img/3311d2d535ece2f8bf8380530ddd4ef8.jpg"
                       style="opacity:1; transition:opacity 0.3s ease-in-out"/> 
                       <a></a>
                 </div>
                 <div class="advertise-item">
                     <img src="../static/img/3c9489bedef473d26af2ffa15d4b114f.jpg"
                       style="opacity:1; transition:opacity 0.3s ease-in-out"/> 
                       <a></a>
                 </div>
                 <div class="advertise-item">
                     <img src="../static/img/5221521ce5dd54d787e43ab28c8b9168.jpg"
                       style="opacity:1; transition:opacity 0.3s ease-in-out"/> 
                       <a></a>
                 </div>
              </div>
           </advertise>
        </div>
        <!--热门商品-->
        <div class="home-box">
           <header class="storey-title">
              <h5 class="title">热门商品</h5>
              <div class="home-page">
                  <a class="disabled"></a>
                  <a></a>
                  
              </div>
           </header>
           <div class="category-normal-wrapper"></div>
        </div>
    </div>
  </div>
  
   
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
/*.title-bar{
  width: 100%;
  height: 1.15rem;
  position: fixed;
  top:0;
  left:0;
  right: 0;
  z-index: 210;
  background: #1d1d1d;
  background-image: linear-gradient(#020202,#181818);


}
.nav-toggle{
  background: url("../static/img/nav-toggle.fd65b0d4fd9c13af497959bd29355bd6.png")
    50% no-repeat;
    background-size: 1.38rem 1.15rem;

    float: left;
    height: 100%;
    
}*/
/*头部*/
.nav-global{
  background-image: linear-gradient(90deg,#222325,#3b3c3f,#222325);
  position: relative;

  /*background: none;*/
  height: 45px;
  z-index: 30;
}
.nav-global .nav-logo{
  float: left;
  margin-left:21px;
  padding: 13px 0 0;

}
.nav-global .nav-logo a{
  background: url("../static/img/logo.557a1159a7b50cad819b869ebbe5051a.png") no-repeat 50%;
  background-size: contain;
  display: block;
  height: 18px;
  width: 18px;
  text-indent: -9999px;
  transition: none;
  text-decoration: none;
}

.nav-global .container{
  position: relative;
}
/* */
.container{
  margin: 0 auto;
  width: 1220px;
  text-rendering: optimizeLegibility;
    
}
.nav-global .nav-list{
  float: right;
  line-height: 28px;
  margin: 9px 181px 0 0;
}
.nav-global .nav-list li{
  float: left;
}
.nav-global .nav-list li a{
  color:  hsla(0, 0%, 100%, .7);
  display: block;
  font-size: 12px;
  padding: 0 20px;

}
.nav-global .nav-list li a.active{
  color:  #e5e5e5;
 font-weight: 700;
  
}
.container:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
}
.nav-global .nav-aside{
  box-sizing: border-box;
  position: absolute;
  top: 11px;
  right: 21px;

}
.nav-global .nav-aside>li{
  position: relative;
  float: left;

}
.nav-global .nav-aside>li.nav-user{
  margin-left: 41px;
  width: 36px;
 
}
.nav-global .nav-aside>li>a{
  height: 20px;
  display: block;
  text-indent: -9999px;
  transition: none;

}
.nav-global .nav-aside>li.nav-user>a{
  position: relative;
  height: 20px;
  margin-left: 8px;
  display: block;
  text-indent: -9999px;
  width: 20px;

}
.nav-global .nav-aside>li.nav-user>a:before{
  content: "";
  position:absolute;
  width: 20px;
  left:0;
  top:0;
  height: 20px;
  background: url("../static/img/avatar-and-cart.c2634628597594cf0fdab831abe6499d.png") 50% no-repeat;
  background-position: 1px 2px;
  background-size: 180%;


}
.nav-global .nav-aside>li.nav-cart{
  position: relative;
  float: left;
  margin-left:10px;
  width: 21px;
  z-index: 120;
}
.nav-global .nav-aside>li.nav-cart>a{
  display: block; 
  position: absolute;
  left: 0;
  right:0;
  top:0;
  bottom:0;
  z-index: 1;
  position: relative;
}
.nav-global .nav-aside>li.nav-cart>a:before{ 
  content:"";
  position: absolute;
  left: 0;
  top:1px; 
  bottom: 0; 
  width: 20px;
  background: url("../static/img/avatar-and-cart.c2634628597594cf0fdab831abe6499d.png")  no-repeat;
  background-position: 0 -17px;
  background-size: 180%;

  
}
/*分类导航*/
.nav-sub-wrapper{
  padding: 23px 0;
  height: 28px;
  position: relative;
  border-bottom:1px solid #e1e1e1;
  background: #fff; 
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, .05);

}
.nav-sub-wrapper .container{
  position: relative;
  display: flex; 
  flex-direction: row; 
  align-items: center;


  width: 1220px;
  margin-left: auto;
  margin-right: auto;
}
.nav-sub-wrapper .nav-list{
  height: 28px;
  line-height: 28px;

}
.nav-sub-wrapper .nav-list li{
  position: relative;
  float: left;
}
.nav-sub-wrapper .nav-list li a{
  display: block; 
  padding-right:30px; 
  color: rgba(0, 0, 0, .7);

}
.nav-sub-wrapper .nav-list li.active a{
  font-weight: 700;
  color:#333;
}
.nav-sub-wrapper .nav-search{
  position: absolute;
  right: 0;
  width: 330px;
  top: -3px;

}
.search-bar{
  position: relative;
}
.search-form{
  height: 36px;
  padding-left: 40px;
  padding-right: 15px;
  border: 1px solid rgba(0, 0, 0, .08);
  border-radius: 20px;
  box-sizing: border-box;
  background: #fff;

}
.search-form .search-box{
  width: 100%;
  height: 36px;
  font-size: 14px;
  font-weight: 700;
  color: #333;
  border: none;
  outline: none;
}
.search-form .search-btn{
  position: absolute;
  top:7px;
  left:10px; 
  height: 20px;
  width: 20px;
  border: none;
  cursor: pointer;
  background-size: contain;
  background-color: transparent;
  background-image: url("../static/img/magnify@2x.1e45d9b9d95da09794d7708b1349cb6e.png")
}
.search-form .search-recommend-words{
  position: absolute;
  top: 50%;
  height: 20px;
  line-height: 20px;
  right:0; 
  transform: translateY(-50%);
}
.search-form .search-recommend-words a{
  display: inline-block;
  margin-right: 8px; 
  text-decoration: none;
  border-radius: 10px; 
  height: 20px;
  padding: 0 10px;
  color:#8aad37;
  border: 1px solid rgba(138, 173, 55, .6); 
  background: #f7fae1; 
  box-sizing: border-box;
  text-overflow: ellipsis;
  font-size: 12px; 
  font-weight: 700;


}
.search-form .search-recommend-words a:first-child{
  color: #3965cc;
  border: 1px solid #93b2f7; 
  background: #e5efff; 

}
/*主题内容 开始 轮播图*/
.home-wrapper{
  margin: 0 auto;
  width: 1220px;

}
.home-box{
  overflow: hidden;
  position: relative;
  z-index: 0; 
  margin-top: 25px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, .14); 
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0 3px 8px -6px rgba(0, 0, 0, .1); 

}
.banner{
  position: relative;
  margin-top: 9px;
  height: 499px;
}
.banner .banner-item{
  position: absolute;
  left: 0;
  right: 0;
  z-index: -1;
  opacity: 0;
  transition: all 1s; 

}
.banner .active{
  z-index: 1;
  opacity: 1;
}
.banner img{
  position: relative;
  top:-28px; 
  width: 100%;

}
.banner-focus{
  position: absolute;
  z-index: 110;
  bottom: -10px;
  width: 100%;
  height:50px; 

  text-align: center ; 
  opacity: 1;
}
.banner-focus a{
  display: inline-block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background:#333;
}
.banner-focus a.active{
  background: #ffffff;
}
/*出众新品，一应俱全*/
.advertise{
  display: flex;
  height: 100%;

}
.advertise-item{
  position: relative;
  flex: 1;
  border-right: 1px solid #eee ; 

}
.advertise-item:last-child {
    border: 0;
}
.advertise-item a,  .advertise-item img{
  width: 100%;
  height: 100%;
}
.advertise a{
  display: block;
  position: absolute;
  left:0; 
  right: 0; 

}
/*热门商品*/
.storey-title{
  display: block;
  position: relative;
  font-size: 18px;
  line-height: 60px;
  color: #666 ;
  background: #fafafa; 
  border-bottom: 1px solid rgba(0, 0, 0, .1);

}
.storey-title .title{
  margin-left: 25px; 
  font-weight: 700;
}
.home-page{
  position: absolute;
  right: 10px;
  top:6px;
  height:60px;
}
.home-page a{
  display: inline-block;
  margin-left: -10px; 
  border: none ; 
  width: 48px;
  height: 48x;
  text-align: left; 
  color:#474747;
  background-color: inherit;
  background-image: url(../static/img/hot-arrow-right.f3f271dc70676aae585368b160d53d78.png);
  background-size: 100%; 
  background-repeat: no-repeat;
  cursor: pointer;

}
.home-page a{

}
</style>
