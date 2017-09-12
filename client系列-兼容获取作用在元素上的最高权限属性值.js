/**
 * Created by 13261 on 2017/9/12.
 */
function getStule(ele,attr){
    //和事件绑定原理一样，支持哪个用哪个
    if(window.getComputedStyle){
        return window.getComputedStyle(ele,null)[attr];

    }else{
        return ele.currentStyle[attr];
    }
}