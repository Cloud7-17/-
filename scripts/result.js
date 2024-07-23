let resultButton = document.querySelector('.result-button');
let backButton = document.querySelector('.back-button');

document.addEventListener('DOMContentLoaded', function() {
    let queryParams = new URLSearchParams(window.location.search);
    
    // 获取名为'value'的查询参数
    let fruitValue = queryParams.get('value');
    console.log('接收到的果实的值是：', fruitValue);

    resultButton.addEventListener('click', function() {
        resultButton.textContent = fruitValue;
        resultButton.style.color = 'red';
    });
    backButton.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});