; (function () {
    'use strict';
    //    表      表头   表身     对象   数组
    let table, thead, tbody, titles, lists, operation;

    window.riceTable = { boot };
    function boot(aim, title, list, ops) {
        table = document.querySelector(aim);
        thead = table.tHead;
        tbody = table.tBodies[0];
        titles = title;
        lists = list;
        operation = ops;
        render();
    }

    function render() {
        renderHead();
        renderBody();
    }

    function renderHead() {
        let html = '';
        for (let key in titles) {
            html += `<th>${titles[key]}</th>`;
        }
        if (operation) {
            html += `<th>操作</th>`;
        }

        thead.innerHTML = html;
    }

    function renderBody() {
        tbody.innerHTML = '';
        lists.forEach((it, index) => {

            let tr = document.createElement('tr');
            let html = '';
            // 就是数组里it，对应 可以的每一项，
            for (let key in titles) {
                html += `<td>${it[key] || '无货'}</td>`;
            }

            if (operation) {
                let btnHtml = '';
                for (let key in operation) {
                    btnHtml += `<button class=${key}>${operation[key].name}</button>`;
                }
                html += `<tr><td>${btnHtml}</td></tr>`;
            }

            tr.innerHTML = html;


            if (operation) {
                for (let idKey in operation) {
                    tr.querySelector('.' + idKey)
                        .addEventListener('click', () => {
                            for (let doit in operation[idKey]) {
                                switch (doit) {
                                    case 'Delete':
                                        operation[idKey].Delete(tr, index);
                                        break;
                                    case 'Reset':
                                        operation[idKey].Reset(tr, index);
                                        break;
                                    case 'HighLight':
                                        operation[idKey].HighLight(tr, index);
                                        break;
                                    case 'Up':
                                        operation[idKey].Up(tr, index);
                                        break;
                                    case 'Down':
                                        operation[idKey].Down(tr, index);
                                        break;
                                    case 'Discounted':
                                        operation[idKey].Discounted(tr, index);
                                        break;
                                    default:
                                        break;
                                }
                            }
                        });
                }
            }
            tbody.appendChild(tr);
        });
    }
    




})();