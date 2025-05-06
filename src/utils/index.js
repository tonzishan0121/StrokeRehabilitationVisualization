/**
 * @param {Function} fn 防抖函数
 * @param {Number} delay 延迟时间
 */
export function debounce(fn, delay) {
  var timer;
  return function () {
    var context = this;
    var args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}

/**
 * @param {date} time 需要转换的时间
 * @param {String} fmt 需要转换的格式 如 yyyy-MM-dd、yyyy-MM-dd HH:mm:ss
 */
export function formatTime(time, fmt) {
  if (!time) return '';
  else {
    const date = new Date(time);
    const o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'H+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds(),
      'q+': Math.floor((date.getMonth() + 3) / 3),
      S: date.getMilliseconds(),
    };
    if (/(y+)/.test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        (date.getFullYear() + '').substr(4 - RegExp.$1.length)
      );
    for (const k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length === 1
            ? o[k]
            : ('00' + o[k]).substr(('' + o[k]).length)
        );
      }
    }
    return fmt;
  }
}

/**
 * 构建评估和治疗相关的节点和链接数据
 * @param {Object} nodeList - 包含每天评估和治疗数据的对象
 * @param {Object} nodeStyle - 包含节点和链接样式的对象
 * @param {number} dateDay - 要处理的日期编号
 * @returns {Object} - 包含评估节点、评估链接、治疗节点和治疗链接的对象
 */
export function nodeBuilder(nodeList,nodeStyle,dateDay){
  // 存储评估相关的节点
  const assessmentNodes = [];
  // 存储评估相关的链接
  const assessmentLinks = [];
  // 存储治疗相关的节点
  const treatmentNodes = [];
  // 存储治疗相关的链接
  const treatmentLinks = [];

  // 定义评估模块的定位节点
  const assessmentAnchorNode = {
    ...nodeStyle['node100'],
    name: '康复评估',
    x:80+380*(dateDay-1)
  };
  assessmentNodes.push(assessmentAnchorNode);

  // 定义治疗模块的定位节点
  const treatmentAnchorNode = {
    ...nodeStyle['node200'],
    name: '康复训练',
    x:320+380*(dateDay-1)
  };
  treatmentNodes.push(treatmentAnchorNode);

  // 获取指定日期（dayn）的数据
  const daynData = nodeList[`day${dateDay}`];
  // 检查是否存在指定日期的数据
  if (daynData) {
    // 遍历指定日期下的每个父节点（如康复评估、康复训练）
    for (const [parentKey, parentValue] of Object.entries(daynData)) {
      // 根据父节点名称确定父节点样式
      const parentNode = parentKey === '康复评估' ? 'node010' : 'node020';
      // 根据父节点名称确定子节点样式
      const childNode = parentKey === '康复评估' ? 'node001' : 'node002';
      // 判断当前父节点是否为评估模块
      const isAssessment = parentKey === '康复评估';
      // 根据判断结果选择存储节点的数组
      const targetNodes = isAssessment ? assessmentNodes : treatmentNodes;
      // 根据判断结果选择存储链接的数组
      const targetLinks = isAssessment ? assessmentLinks : treatmentLinks;

      // 处理父节点下的每个子节点（三级节点）
      for (const [childKey, childValue] of Object.entries(parentValue)) {
        // 将三级节点添加到目标节点数组中
        targetNodes.push({
          // 继承对应的父节点样式
          ...nodeStyle[parentNode],
          // 节点名称
          name: childKey
        });

        // 添加父节点到子节点的链接
        targetLinks.push({
          // 链接的起始节点
          source: parentKey,
          // 链接的目标节点
          target: childKey,
          // 继承链接样式
          ...nodeStyle.links
        });

        // 处理三级节点对应的数组元素
        for (const item of childValue) {
          // 将数组元素添加到目标节点数组中
          targetNodes.push({
            // 继承对应的子节点样式
            ...nodeStyle[childNode],
            // 节点名称
            name: item
          });

          // 添加子节点到数组元素的链接
          targetLinks.push({
            // 链接的起始节点
            source: childKey,
            // 链接的目标节点
            target: item,
            // 继承链接样式
            ...nodeStyle.links
          });
        }
      }
    }
  }

  // 返回包含评估节点、评估链接、治疗节点和治疗链接的对象
  return { 
    assessmentNodes, 
    assessmentLinks, 
    treatmentNodes, 
    treatmentLinks 
  };
}