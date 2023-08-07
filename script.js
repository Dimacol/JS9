// Задание 1.
        // Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
        // 0 – это ноль
        // 1 – нечетное число
        // 2 – четное число
        // 3 – нечетное число
        // …
        // 10 – четное число
        for (let i = 0; i < 11; i++) {
            if (i === 0) {
                console.log(i + ' - это ноль');
            }
            else if (i % 2) {
                console.log(i + ' - нечетное число');
            }
            else {
                console.log(i + ' - четное число');
            }
        }
        console.log('_________________________________________________________________________');

        // Задание 2.
        // Дан массив [1, 2, 3, 4, 5, 6, 7]
        // Сделайте из этого массива следующий [1, 2, 3, 6, 7]
        const arr = [1, 2, 3, 4, 5, 6, 7];
        console.log (`Дан массив : ${arr}`);
        arr.splice(3, 2);
     
        console.log (`Получен массив : ${arr}`);
        console.log('_________________________________________________________________________');

        // Задание 3.
        // Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
        // 1. Рассчитать сумму элементов этого массива
        // 2. Найти минимальное число
        // 3. Найти есть ли в этом массиве число 3
        const arrRandom = [];

        const getRandomInt = () => Math.floor(Math.random() * 10);
        for (let i = 0; i <= 4; i++) {
            arrRandom.push(getRandomInt());
        }
        console.log(`Рандомнополученный массив : ${arrRandom}`);

        let sumNumArray = 0;
        for (let i = ('start' in arrRandom ? arrRandom.start : 0); i < 5; i++) {
            sumNumArray += arrRandom[i];
        }
        console.log('Сумма элементов массива ' + sumNumArray);

        let minNumArray = arrRandom[0];
        for (let i = 1; i < arrRandom.length; i++) {
            if (minNumArray > arrRandom[i]) {
                minNumArray = arrRandom[i];
            }
        }
        console.log('Минимальное число массива ' + minNumArray);

        function searchNum(argArray, argNum) {
            let resultText = 'В массиве нет числа ';
            for (let i = 0; i < argArray.length; i++) {
                if (argArray[i] === argNum) {
                    resultText = 'В массиве есть число ';
                }
            }
            return resultText + argNum;
        }
        console.log(searchNum(arrRandom, 3));
        console.log('_________________________________________________________________________');

        // *Необязательное задание. *
        // Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:
        for (let i = 1; i <= 20; i++) {
            console.log('*'.repeat(i));
        }