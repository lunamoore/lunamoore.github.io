(function() {
    
    var T_color = "";//字体颜色,你不设置就是随机颜色,
    
    var T_size = [30,50];//文字大小区间,不建议太大
    
    var T_font_weight = "bold";//字体粗斜度-->normal,bold,900
    
    var AnimationTime = 1500;//文字消失总毫秒
    
    var Move_up_Distance = 388;//文字移动距离,正数代表上移，反之下移
    
    var a_index = 0;
    $("html").click(function(e){
        var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正" ,"法治", "爱国", "敬业", "诚信", "友善" , "社会主义接班人");
        var $i = $("<span/>").text(a[a_index]);
        a_index = (a_index + 1) % a.length;
        var x = e.pageX,y = e.pageY;
        var x_color =  "#" + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6);//-->随机颜色
        //console.log(x_color);
        if(T_color.length>=4){
            x_color = T_color;
        }
        
        var x_size = Math.random()*(T_size[1]-T_size[0]) + T_size[0];
        x_size +=  "px";
        
        $i.css({
            "z-index": 99999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "font-size":x_size,
            "color": x_color
        });
        $("html").append($i);
        $i.animate({"top": y-Move_up_Distance,"opacity": 0},AnimationTime,function() {
            $i.remove();
        });
    });
})();

/*
<!-- 页面点击小红心 -->

! function (e, t, a) {
  function n() {
    c(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"), o(), r()
  }

  function r() {
    for (var e = 0; e < d.length; e++) d[e].alpha <= 0 ? (t.body.removeChild(d[e].el), d.splice(e, 1)) : (d[e].y--, d[e].scale += .004, d[e].alpha -= .013, d[e].el.style.cssText = "left:" + d[e].x + "px;top:" + d[e].y + "px;opacity:" + d[e].alpha + ";transform:scale(" + d[e].scale + "," + d[e].scale + ") rotate(45deg);background:" + d[e].color + ";z-index:99999");
    requestAnimationFrame(r)
  }

  function o() {
    var t = "function" == typeof e.onclick && e.onclick;
    e.onclick = function (e) {
      t && t(), i(e)
    }
  }

  function i(e) {
    var a = t.createElement("div");
    a.className = "heart", d.push({
      el: a,
      x: e.clientX - 5,
      y: e.clientY - 5,
      scale: 1,
      alpha: 1,
      color: s()
    }), t.body.appendChild(a)
  }

  function c(e) {
    var a = t.createElement("style");
    a.type = "text/css";
    try {
      a.appendChild(t.createTextNode(e))
    } catch (t) {
      a.styleSheet.cssText = e
    }
    t.getElementsByTagName("head")[0].appendChild(a)
  }

  function s() {
    return "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")"
  }
  var d = [];
  e.requestAnimationFrame = function () {
    return e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function (e) {
      setTimeout(e, 1e3 / 60)
    }
  }(), n()
}(window, document);


*/