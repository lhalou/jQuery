//第一种封装方式
$.ajax({
    url: '/hello',
    method: 'get',
    dataType: 'json',
    data: {
        a: 1,
        b: 2
    },
    success: function(ret){
        console.log(ret)
    },
    error: function(){
        console.log('error')
    }
});

//第二种封装方式
$.ajax({
    url: '/hello',
    method: 'get',
    dataType: 'json',
    data: {
        a: 1,
        b: 2
    }
}).done(function(ret){
    console.log(ret)
}).error(function(){
    console.log('error')
})