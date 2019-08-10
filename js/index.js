

var flag = false;

//点击注册
$(function () {
    $('#register').click(function () {
        var nameval = $('#auth_code').val();
        var passval = $('#password').val();
        var confirm = $('#confirm_pass').val();
        if (vailPhone()) {
            if (nameval == '' || nameval == null) {
                $('#tip').text('请输入验证码');
            } else if (passval.length < 6) {
                $('#tip').text('输入的密码长度小于6');
            } else if (confirm !== passval) {
                $('#tip').text('两次密码不一致')
            } else {
                $('#tip').text('');
                window.location.href = './dashboard.html';
            }
        }
    })
})

//点击获取验证码
$('#yanzheng').click(function () {
    if (vailPhone()) {
        console.log('1111');
    } else {
        console.log('3333')
        return;
    }
    console.log('22222')
})

//验证手机号方法
function vailPhone() {
    var phone = $("#phone").val();
    var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;

    if (phone == '') {
        $('#tip').text('手机号码不能为空！');
        flag = false;
    } else if (phone.length != 11) {
        $('#tip').text('请输入有效的手机号码！！');
        flag = false;
    } else if (!myreg.test(phone)) {
        $('#tip').text('请输入有效的手机号码！！');
        flag = false;
    } else {
        $('#tip').text('');
        flag = true;
    }
    return flag;
}




//鼠标滑动事件
$(function () {
    $('#user_message').mouseover(function () {
        $('#role_list').show();
    }).mouseleave(function () {
        $('#role_list').hide();
    })
})

//列表鼠标移动事件
$(function () {
    $('#function_list li').mouseover(function () {
        $(this).find('.delete').show();
        $(this).find('.pos-list span').css('color', '#7ed321');
        $(this).find('.common-pos').addClass('on');


    }).mouseleave(function () {
        $(this).find('.delete').hide();
        $(this).find('.pos-list span').css('color', '#fff')
        $(this).find('.common-pos').removeClass('on');
    })
})

//点击添加事件
$(function () {
    $('#last_li').click(function () {
        $('.winbox').show();
    })

    $('#win_close').click(function () {
        $('.winbox').hide();
    })
    $('#yes').click(function () {
        $('.winbox').hide();
    })
    $('#no').click(function () {
        $('.winbox').hide();
    })

    $('.delete').click(function () {
        $(this).parent().hide();
    })

    
    $('#win_fun_list li').click(function () {
       if($(this).find('.choose').hasClass('active')){
        $(this).find('.choose').removeClass('active')
       }else{
        $(this).find('.choose').addClass('active')
       }
    })

//个人中心 tab
    $('#p_list li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $('#p_right').children().eq($(this).index()).addClass('appear').siblings().removeClass('appear');
    })

    $('#compile').click(function(){
        $('.p-info-area').show();
        $(this).hide();
        $('.p-last').show();
        $('.add-message').hide();
    })
    $('.p-last .yes').click(function(){
        $('.p-last').hide();
        $('.p-info-area').hide();
        $('#compile').show();
        $('.add-message').show();
        var val = $('.p-info-area').val();
        $('.add-message').text(val);
        
    })
    $('.p-last .no').click(function(){
        $('.p-last').hide();
        $('.p-info-area').hide();
        $('#compile').show();
    })

    $('#bangding_btn').click(function(){
        $('.bangding').hide();
        $('.bind-parent').show();
        $('.bind-child-no').show();
    })

    $('#account_no').click(function(){
        $('.bind-child-no').show();
        $('.bind-child-yes').hide();
    })
    $('#account_yes').click(function(){
        $('.bind-child-no').hide();
        $('.bind-child-yes').show();
    })
})







