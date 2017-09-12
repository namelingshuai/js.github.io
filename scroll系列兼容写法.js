/**
 * Created by 13261 on 2017/9/12.
 */
function scroll(){
    var json = {};
                //Õý³£ä¯ÀÀÆ÷              //IE678
    json.top = window.pageYOffset || document.documentElement.scrollTop;
    json.left = window.pageYOffset || document.documentElement.scrollLeft;
    return json;

}