// xhr加载数据
function loadData(callback) {
    // 略...
}
// 匹配文章内容返回结果
function matcher(post, regExp) {
    // 匹配优先级：title > tags > text
    return regExp.test(post.title) || post.tags.some(function(tag) {
        return regExp.test(tag.name);
    }) || regExp.test(post.text);
}
// 渲染到页面
function render(data) {
    // 略...
}
// 查询
function search(key) {
    // 关键字 => 正则，空格隔开的看作多个关键字
    // a b c => /a|b|c/gmi
    var regExp = new RegExp(key.replace(/[ ]/g, '|'), 'gmi');
    loadData(function(data) {
        var result = data.filter(function(post) {
            return matcher(post, regExp);
        });
        render(result);
    });
}