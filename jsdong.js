/**
 * Created by 13261 on 2017/9/12.
 */

//匀速动画封装
    //animate 运动
function animate(ele,target){
    //要用定时器先清定时器
    //clearInterval(): 清除定时器
    clearInterval(ele.timer);
        //setINterval()定时器
    ele.timer = setInterval(function(){
        //1.获取步长
            //三元运算符     offsetLeft距离定位父盒子在左侧距离
        var step = target>ele.offsetLeft?10:-10;
        //2.赋值
        ele.style.left = ele.offsetLeft+step+"px";
        //3.停止定时器（如果走过了，或者向后退了一步，也清除，赋值目标位置）
        console.log(1);
            //目标位置和当前位置的差值，不足一个步长的时候;
                //Math.abs : 绝对值

        if(Math.abs(target-ele.offsetLeft) <= Math.abs(step)){
            //设置目标位置，清除定时器
            ele.style.left = target+"px";
            clearInterval(ele.timer);

        }

    },30);

}




