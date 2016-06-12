    function currentYPosition() {
        // Firefox, Chrome, Opera, Safari
        if (self.pageYOffset) return self.pageYOffset;
        // Internet Explorer 6 - standards mode
        if (document.documentElement && document.documentElement.scrollTop)
            return document.documentElement.scrollTop;
        // Internet Explorer 6, 7 and 8
        if (document.body.scrollTop) return document.body.scrollTop;
        return 0;
    }
    function elmYPosition(eID) {
        var elm = document.getElementById(eID);
        var y = elm.offsetTop;
        var node = elm;
        while (node.offsetParent && node.offsetParent != document.body) {
            node = node.offsetParent;
            y += node.offsetTop;
        } return y;
    }
    function smoothScroll(eID) {
        var startY = currentYPosition();
        var stopY = elmYPosition(eID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY); return;
        }
        var speed = Math.round(distance / 50);
        if (speed >= 20) speed = 20;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for ( var i=startY; i<stopY; i+=step ) {
                setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                leapY += step; if (leapY > stopY) leapY = stopY; timer++;
            } return;
        }
        for ( i=startY; i>stopY; i-=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
        }
    }
    
/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 *
 * jQuery.browser.mobile will be true if the browser is a mobile device
 *
 **/


    
$(document).ready(function(){
    $("#spinner_selecter").mouseover(function(){
        $("#spinner_desc").hide(300);
    });
    $("#spinner_selecter").mouseout(function(){
        $("#spinner_desc").show(300);
    });
    
    $("#horizontal_selecter").mouseover(function(){
        $("#horizontal_desc").hide(300);
    });
    $("#horizontal_selecter").mouseout(function(){
        $("#horizontal_desc").show(300);
    });
    
    $("#misc_selecter").mouseover(function(){
        $("#misc_desc").hide(300);
    });
    $("#misc_selecter").mouseout(function(){
        $("#misc_desc").show(300);
    });
    
    $("#3d_selecter").mouseover(function(){
        $("#3d_desc").hide(300);
        $("#3d_selector").css("margin-bottom","10px");
    });
    $("#3d_selecter").mouseout(function(){
        $("#3d_desc").show(300);
        $("#3d_selector").css("margin-bottom","0px");
    });
    
    (function(a){
	    (jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))
        if(jQuery.browser.mobile===false) $('#mobilealert').hide();
    })(navigator.userAgent||navigator.vendor||window.opera);

    
    //Spinner Loaders
    $("#rotating_bird_anim").hide();
    $("#rotating_bird_code").hide();
    
    $("#hash_anim").hide();
    $("#hash_code").hide();
    
    $("#heart_anim").hide();
    $("#heart_code").hide();
    
    $("#colors1_anim").hide();
    $("#colors1_code").hide();
    
    $("#clock_anim").hide();
    $("#clock_code").hide();
    
    $("#rainbow_anim").hide();
    $("#rainbow_code").hide();
    
    //Horizontal Loaders
    $("#balls_anim").hide();
    $("#balls_code").hide();
    
    $("#chimes_anim").hide();
    $("#chimes_code").hide();
    
    $("#ice_anim").hide();
    $("#ice_code").hide();
    
    $("#dna_anim").hide();
    $("#dna_code").hide();
    
    //Misc Loaders
    $("#charging_battery_anim").hide();
    $("#charging_battery_code").hide();
    
    $("#coffee_anim").hide();
    $("#coffee_code").hide();
    
    $("#hand_anim").hide();
    $("#hand_code").hide();
    
    $("#swoosh_anim").hide();
    $("#swoosh_code").hide();
    
    $("#superman_anim").hide();
    $("#superman_code").hide();
    
    $("#man_anim").hide();
    $("#man_code").hide();
    
    //3D Loaders
    $("#circles_anim").hide();
    $("#circles_code").hide();
    
    $("#cube_anim").hide();
    $("#cube_code").hide();
    
    $("#moving_cubes_anim").hide();
    $("#moving_cubes_code").hide();
    
    $("#text_anim").hide();
    $("#text_code").hide();
    
    $("#rot_square_anim").hide();
    $("#rot_square_code").hide();
    
    $("#wave_anim").hide();
    $("#wave_code").hide();
    
});

(function($) {
    $.fn.open = function(msg) {
        $('#'+msg).show(300);
    };
})(jQuery);
(function($) {
    $.fn.close = function(msg) {
        $('#'+msg).hide(300);
    };
})(jQuery);
