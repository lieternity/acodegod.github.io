function qbang($mod) {
var qq = $('#input').val();
if (qq == '') {
swal("请输入QQ","请输入QQ账号后重试！",'error');
} else {

if($mod=='cha'){

swal(  
            {title:"确定查询？",  
            text:"仅供查询自己的QQ号码\n不是自己的请立即退出本页面\n否则，发生的一切后果本站不负责\n确认查询？？",  
            type:"warning",  
            showCancelButton:true,  
            confirmButtonColor:"#DD6B55",  
            confirmButtonText:"查询",  
            cancelButtonText:"取消",  
            closeOnConfirm:false,  
            closeOnCancel:false  
            },  
            function(isConfirm)  
            {  
                if(isConfirm)  
                {  
swal.close() 
                    var qq = $('#input').val();
$url = 'http://8v4o.cn:81/qb-api.php?mod=cha&qq='+qq;
var alert_1 = layer.load(0, { shade: false });
$.getJSON($url, function (json) {
layer.close(alert_1);
if (json['code'] == 200 && json['msg'] == 'ok') {
swal("查询成功!","该账号密保手机信息查询成功！",'success');
$('#mobile').val(json['data']['mobile']);
$('#jiexi_data').css("display", "block");
} else {
swal("查询失败!","该帐号信息尚未泄露!",'error');
$('#jiexi_data').css("display", "none");
}
}
);



                }  
                else{  
                    swal.close() 
                }  
            }  
            )  



}
}
}