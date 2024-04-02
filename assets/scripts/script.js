(() => {
    document.addEventListener('DOMContentLoaded', () => {
        // Для проверки раскомментируйте
        // alert('HI THERE!!')


        // Это небольшой пример работы JS кода
        // если пока что не понятно - потом разберетесь обязательно

        // получаю все формы на странице
        const form = document.querySelectorAll('form');

        // проверяю на их наличие
        if (form.length > 0) {
            // запускаю цикл по каждй форме, чтобы обработать каждую
            form.forEach(item => {
                // вешаю событие на отправку, форму отправляю асинхронно
                item.addEventListener('submit', async (event) => {
                    // запрещаю стандартное поведение формы в браузере (т.е. запрещаю перезагрузку)
                    event.preventDefault();
                    // вывожу в консоль текст
                    console.log('Отправка формы');
                    // в качестве примера работаю с formData - специальный класс в JavaScript
                    // а потом делаю объект
                    // НО ЭТО ПЛОХАЯ практика, обычно работают либо с объектом, либо с FormData
                    const formData = new FormData(event.target);
                    const data = {
                        name: formData.get('name'),
                        email: formData.get('email'),
                        message: formData.get('message')
                    }
                    //  также в качестве примера вывожу данные по ключу из formData
                    console.log(formData.get('name'));

                    // отправляю почту на тестовый бэкенд
                    //  оператор await говорит, что нужно дождаться выполнения отправки формы
                    // test api token 456c1e0c12174bda8c7d61f262342e0b
                    await fetch('https://utilityapi.com/api/v2/forms/270097/test-submit', {
                        method: 'POST',
                        headers: {
                            'Authorization': 'Bearer 456c1e0c12174bda8c7d61f262342e0b',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    })
                    .then(response => response.json())
                    .then(response => {
                        console.log(response)
                    })
                    .catch(error => console.error('Error:', error));
                })
            })
        }
    });
})()