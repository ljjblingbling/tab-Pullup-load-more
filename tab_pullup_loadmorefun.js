/*高手收益榜*/
var getHeiGuess = function(){
    return {
        init: function(page){
            $.ajax({
                url:urlHost+"stock/getHeigherGuess?sn="+randsn,
                dataType: "jsonp",
                data: {"page":page,"pageSize":5},
                success: function(data){
                    if(data.Status && data.Data){
                        $("#y_ggtype").val('heightrank');   //重点在这里，把y_ggtype的值设置为heightrank，到时候点击具体模块的时候调用这个方法，获取到的y_ggtype的val值都是变化的。下面的同理
                        $("#y_gspage").val(page);
                        $("#y_pageCount").val(data.Data.count);
                        var str;
                        for(){
                            str+='';
                        }
                        $("#bang01").html(str);
                    }
                })
            });
        }
    }
}

/*牛人收益榜*/
var getProfitsRank = function(){
    return {
        init: function(page){
            $.ajax({
                url:urlHost+"stock/getResult?sn="+randsn,
                dataType: "jsonp",
                data: {"page":page,"pageSize":5},
                success: function(data){
                    if(data.Status && data.Data){
                        $("#y_ggtype").val('profitsrank');
                        $("#y_nrpage").val(page);
                        $("#y_pageCount").val(data.Data.count);
                        var str;
                        for(){
                            str+='';
                        }
                        $("#bang02").html(str);
                    }
                })
            });
        }
    }
}

/*关注牛股*/
var getFollowStock = function(){
    return {
        init: function(page){
            $.ajax({
                url:urlHost+"stock/getFollowStock?sn="+randsn,
                dataType: "jsonp",
                data: {"page":page,"pageSize":5},
                success: function(data){
                    if(data.Status && data.Data){
                        $("#y_ggtype").val('followrank');
                        $("#y_gzpage").val(page);
                        $("#y_pageCount").val(data.Data.count);
                        var str;
                        for(){
                            str+='';
                        }
                        $("#bang03").html(str);
                    }
                })
            });
        }
    }
}

　　　　
$(".gsyc").click(function(){
	getHeiGuess().init(1);
});
/*牛人收益榜*/
$(".nrsy").click(function(){
	getProfitsRank().init(1);
});
/*关注牛人股*/
$(".gznr").click(function(){
	getFollowStock().init(1);
});