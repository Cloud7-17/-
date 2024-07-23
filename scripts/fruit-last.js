let formerButton = document.querySelector('.former-button');
let submitButton = document.querySelector('.submit-button');

document.addEventListener('DOMContentLoaded', function() {
    let queryParams = new URLSearchParams(window.location.search);
    
    // 获取名为'value'的查询参数
    let fruitValue = queryParams.get('value');
    console.log('接收到的果实的值是：', fruitValue);

    formerButton.addEventListener('click', function() {
        alert("都到这里了，英雄怎么能临阵脱逃呢！");
        formerButton.disabled = true;
        formerButton.style.backgroundColor = '#e7e6e6';
        formerButton.style.cursor = 'not-allowed';
    });    
    submitButton.addEventListener('click', function() {
        let options = document.querySelectorAll('input[name="sub7"]');
        let selectedOption = Array.from(options).find(option => option.checked);

        if (selectedOption) {
            let labelForSelectedOption = document.querySelector(`label[for="${selectedOption.id}"]`).textContent;
            let valueToSend = labelForSelectedOption === "是的" ? 1 : 0;
            console.log('当前果子选中的结果是：', valueToSend);
            console.log('当前果子的增加值为：', (2**(7-1))*valueToSend);
            fruitValue = parseInt(fruitValue, 10);
            fruitValue +=(2**(7-1))*valueToSend;
            console.log('当前果子的累加值为：', fruitValue);
            // 使用URL参数传递选中的结果
            alert("提交成功！智慧果们即将碰头！");
            window.location.href = 'result.html?value=' + fruitValue;
        } else {
            alert("你还没有选择哦！");
        }
    });
});