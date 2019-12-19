$.ajax({
    type: 'get',
    url: '/hello',
    dataType: 'jsonp',
    jsonp: 'callBack',
    jsonpCallback: 'displayBooks'
});