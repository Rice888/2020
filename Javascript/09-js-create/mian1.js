; (function () {
    'use strict'
    // let list = ['a', 'b', 'c', 'd'];
    let list = [
        {
            text: 'a',
            href: 'http://baidu.com',
        },
        {
            text: 'b',
            href: 'http://douban.com',
        }
    ];

    boot();

    function boot() {
        render();
        setInterval(() => {
            list.push({
                text: 'e',
                href: 'http://dltst.com'
            });
            render();
        }, 500);
    }

    function render() {
        dropdown.innerHTML = '';
        list.forEach(it => {
            let a = document.createElement('a');
            a.href = it.href;
            a.text = it.text;
            dropdown.appendChild(a);
        });
    }



})();