let nextButton = document.querySelector('.next-button');

document.addEventListener('DOMContentLoaded', function() {
    nextButton.addEventListener('click', function() {
        let options = document.querySelectorAll('input[name="sub1"]');
        let selectedOption = Array.from(options).find(option => option.checked);
        
        if (selectedOption) {
            let labelForSelectedOption = document.querySelector(`label[for="${selectedOption.id}"]`).textContent;
            let valueToSend = labelForSelectedOption === "是的" ? 1 : 0;
            console.log('选中的结果是：', valueToSend);
            // 使用URL参数传递选中的结果
            window.location.href = 'fruit-process.html?selected=' + valueToSend;
        } else {
            alert("你还没有选择哦！");
        }
    });
});