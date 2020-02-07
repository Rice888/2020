; (function () {
    'use strict'
    let userTbody = document.querySelector('.userTbody');
    let total = document.querySelector('.total');
    let list = [
        {
            name: '李强',
            gender: 18,
            score: 100,
        },
        {
            name: '张全球',
            gender: 16,
            score: 89,
        },
        {
            name: '方言',
            gender: 19,
            score: 1,
        },
    ];

    boot();

    function boot() {
        render();
        bindEvents();
    }

    function render(result) {
        userTbody.innerHTML = '';
        list.forEach((it, i) => {
            if (result) {
                let inResult =
                    it.score < result.max &&
                    it.score >= result.min;
                if (!inResult) {
                    return;
                }
            }

            let tr = document.createElement('tr');
            tr.innerHTML = `
            <td>${it.name}</td>
            <td>${it.gender}</td>
            <td>${it.score}</td>
            <td><button class="del">删除</button></td>
            `;

            userTbody.appendChild(tr);
            let delButton = tr.querySelector('.del');

            delButton.addEventListener('click', () => {
                list.splice(i, 1);
                tr.remove();
                render();
                console.log(list);
                
            });

            
        });
    }

    function bindEvents() {
        total.addEventListener('click', (e) => {
            if (e.target.nodeName != 'BUTTON') {
                return;
            } else {
                let result = e.target.dataset;
                render(result);
            }
        });
    }
})();