export const imgError = {
  inserted: function (el, { value }) {
    // console.log(el);
    //el就是这个dom元素,onerror处理错误程序，如果
    // 这个dom元素获取不到，那就用备用元素
    el.onerror = function () {
      el.src = value;
    };
  },
};
