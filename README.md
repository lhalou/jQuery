# jQuery相关知识

- jQuery实现事件代理：
```
$('div').on('click','span',function(){
  xxxxxx
})
//点击span可以触发事件
```
- jQuery实现tab切换，包括水平切换和滑动切换。

## 注意点

1. $()与window.onload()的区别：
    1.1. $()是指DOM元素加载完成后，就执行JS代码。
    1.2. window.onload()是指页面全部加载完成，才会执行JS代码。
    
2. jQuery对象与DOM元素的区别：
    2.1. jQuery对象是对DOM对象的一次封装，只能使用jQuery的对应方法，不能使用DOM原生对象的方法。
    2.2 DOM原生对象也不能使用jQuery对象的方法。
    ```
    //jQuery对象转换DOM对象
    $('div') //jQuery  
    $('div')[0] //原生对象
    //DOM对象转换成jQuery对象
    document.querySelector('.active') //原生对象
    $(document.querySelector('.active')) //jQuery
    ```
    
3. $this的作用
```
var $this = $(this)
//$this中的$无任何实际意义，只是起到标识作用。
```

4. 命名空间的作用
```
$('div').on('click.hello',function(){})
//click.hello为命名空间，起到标识作用，当接触绑定的时候，可以对应解绑，而不影响其他的事件
$('div').off('click.hello')
```

