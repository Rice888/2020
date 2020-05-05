; (function () {
    'use strict';

    /**
     * @description: 
     * @param {type} 
     * @return:
     * el = element  
     */

    let users = [
        {
            username: '张三',
            email: 'zs@email.com',
            balance: 666,
        },
        {
            username: '里斯',
            email: 'ls@email.com',
            balance: 888,
        },
        {
            username: '万物',
            email: 'ww@email.com',
            balance: 1888,
        },

    ];
    let elForm = document.getElementById('user-form');
    let elTable = document.getElementById('user-table');
    let elTbody = elTable.tBodies[0];
    let inputs = {
        index: elForm.querySelector('[name=index]'),
        username: elForm.querySelector('[name=username]'),
        email: elForm.querySelector('[name=email]'),
        balance: elForm.querySelector('[name=balance]'),
    };

    boot();

    function boot() {

        bindSubmit();
        render();
    }

    function bindSubmit() {
        elForm.addEventListener('submit', e => {
            e.preventDefault();
            let row = {};
            let index = inputs.index.value;

            row.username = inputs.username.value;
            row.email = inputs.email.value;
            row.balance = inputs.balance.value;

            if (index) {
                users[index]= row;
            } else {
                users.push(row); 
            }
            elForm.reset();
            render();
        });
    }

    function render() {
        elTbody.innerHTML = '';
        users.forEach((user, index) => {
            if (!user) {
                return;
            }
            let tr = document.createElement('tr');
            tr.innerHTML = `
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.balance}</td>
            <td class="text-right operation">
            <button class='update'>更新</button>
            <button class='delete'>删除</button>
            </td>
            `;

            
            tr.querySelector('.operation')
            .addEventListener('click', e => {
                
                let elKey = e.target.classList;
                if (elKey.contains('delete')) {
                    users[index] = null;
                    tr.remove();
                    console.log(1);
                    
                }
                
                if (elKey.contains('update')) {
                    inputs.username.value = user.username;
                    inputs.email.value = user.email;
                    inputs.balance.value = user.balance;
                    inputs.index.value = index;
                } 
            });
            
            elTbody.appendChild(tr);
            
        });
    }

})();