let formerButton = document.querySelector('.former-button');
let nextButton = document.querySelector('.next-button');
let fruitCount = 2;
let fruitValue = 0;

const fruitDetails = [
    { // 默认或初始状态，可以根据需要调整
        title: "啊哈，智慧果！",
        text: "智慧果们罢工啦！",
        image: "figures/Fruits.png"
    },
    { // fruitCount为3时的状态
        title: "其三：爱心之果",
        text: `
            其三为爱心之果。<br>
            孕育在生命之河的源头，<br>
            颜色如同初升的朝阳，温暖而柔和。<br>
            不仅是爱的传递者，<br>
            更是冷漠的融解者。<br>
            拥抱其光辉，<br>
            孤独者将找到陪伴，<br>
            有爱者将播撒更多的温暖。
            `,
        image: "figures/fruit3.png"
    },
    { // fruitCount为4时的状态
        title: "其四：正义之果",
        text: `
            其四为正义之果。<br>
            悬挂在公正的天平之上，<br>
            皮肤如同最纯净的蓝宝石，<br>
            清澈透明。<br>
            不仅是正义的守护者，<br>
            更是邪恶的审判者。<br>
            遵循其指引，<br>
            迷茫者将找到公正之路，<br>
            正义者将坚守真理的阵地。                
            `,
        image: "figures/fruit4.png"
    },
    { // fruitCount为5时的状态
        title: "其五：耐心之果",
        text: `
            其五为耐心之果。<br>
            生长在时间的沙漏中，<br>
            外表如同经过岁月磨砺的黄金，<br>
            坚韧而珍贵。<br>
            不仅是坚持的象征，<br>
            更是急躁的平息者。<br>
            感受其力量，<br>
            冲动者将学会等待，<br>
            耐心者将收获成功的果实。
            `,
        image: "figures/fruit5.png"
    },
    { // fruitCount为6时的状态
        title: "其六：创造之果",
        text: `
            其六为创造之果。<br>
            绽放在想象的花海之中，<br>
            颜色如同梦幻的彩虹，<br>
            绚丽多彩。<br>
            不仅是创造的源泉，<br>
            更是常规的突破者。<br>
            跟随其启发，<br>
            平凡者将发现奇迹，<br>
            创造者将塑造新的世界。
            `,
        image: "figures/fruit6.png"
    },
    // 可以根据需要继续添加更多的fruitCount状态
];

document.addEventListener('DOMContentLoaded', function() {
    // 获取URL
    let queryParams = new URLSearchParams(window.location.search);
    
    // 获取名为'selected'的查询参数
    let selectedValue = queryParams.get('selected');
    console.log('接收到的选中结果是：', selectedValue);
    fruitValue = selectedValue;
    console.log('当前果子的累加值为：', fruitValue);

    formerButton.addEventListener('click', function() {
        alert("勇敢的人儿不能后退，继续向前吧！");
        formerButton.disabled = true;
        formerButton.style.backgroundColor = '#e7e6e6';
        formerButton.style.cursor = 'not-allowed';
    });

    nextButton.addEventListener('click', function() {
        let options = document.querySelectorAll('input[name="sub2"]');
        let selectedOption = Array.from(options).find(option => option.checked);
        
        if (selectedOption) {
            let labelForSelectedOption = document.querySelector(`label[for="${selectedOption.id}"]`).textContent;
            let valueToSend = labelForSelectedOption === "是的" ? 1 : 0;
            console.log('当前果子选中的结果是：', valueToSend);
            console.log('当前果子的增加值为：', (2**(fruitCount-1))*valueToSend);
            fruitValue = parseInt(fruitValue, 10);
            fruitValue +=(2**(fruitCount-1))*valueToSend;
            console.log('当前果子的累加值为：', fruitValue);
            // 使用URL参数传递选中的结果

            fruitCount++;
            console.log('当前跳转的智慧果是：', fruitCount);
            if (fruitCount <= 6) {
                updateFruitDisplay(fruitCount);
            }
            else if (fruitCount == 7) {
            alert("注意力集中！就要到最后一个智慧果啦！");
            window.location.href = 'fruit-last.html?value=' + fruitValue;
            }
            // 重置sub2的选择
            options.forEach(option => {
                option.checked = false;
            });
        } else {
            alert("你还没有选择哦！");
        }
    });

    // 根据果实数量更新页面显示
    function updateFruitDisplay(fruitCount) {
        const h1Element = document.querySelector('h1');
        const textElement = document.getElementById('fruit-processtext'); 
        const imageElement = document.getElementById('fruit-processimg'); 
        // 根据fruitCount更新textElement和imageElement的内容和图片
        const details = fruitDetails[fruitCount-2] || fruitDetails[0];
        
        h1Element.textContent = details.title;
        textElement.innerHTML = details.text;
        imageElement.src = details.image;
    }
});