/**
 * 从多个 IPV4 子网掩码中计算出代表最大子网的子网掩码
 * 
 * @param  {[Array]} masks 子网掩码数组
 * 
 * @return {[type]}        最大代表最大子网的子网掩码。
 */
function getMaxSubnet(masks) {
  var len = masks.length,
      ret = [255, 255, 255, 255],
      i, j, tmp;

  for (i = 0; i < 4; i++) {
    for(j = 0; j < len; j++) {
      tmp = masks[j].split('.');

      ret[i] = ret[i] & tmp[i];
    }
  }

  return ret.join('.');
}

/**
 * 判断两个 IPV4 地址是否在同一子网
 * @param  {[String]}  ip1  IPV4 地址 1
 * @param  {[String]}  ip2  IPV4 地址 2
 * @param  {[String]}  mask IPV4 子网掩码
 * 
 * @return {Boolean}   是否在同一子网
 */
function isSameSubnet(ip1, ip2, mask) {
  var ip1Arr = ip1.split('.'),
      ip2Arr = ip2.split('.'),
      maskArr = mask.split('.'),
      i;

  for (i = 0; i < 4; i++) {

    if ((ip1Arr[i] & maskArr[i]) != (ip2Arr[i] & maskArr[i])){
      return false;
    }     
  }

  return true;
}
