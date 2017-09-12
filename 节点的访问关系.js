/**
 * Created by 13261 on 2017/9/12.
 */
/**
 *功能：通过参数找他的前一个兄弟元素节点
 * @param ele
 * @returns {Element|*|Node}
 */
function prev(ele){
    var aaa = ele.previousElementSibling || ele.previousSibling;
    return aaa ;
}


/**
 *功能：通过参数找他的后一个兄弟元素节点
 * @param ele
 * @returns {Element|*|Node}
 */
function next(ele){
    return ele.nextElementSibling || ele.nextSibling;
}


function first(ele){
    return ele.firstElementChild || ele.firstChild;
}
