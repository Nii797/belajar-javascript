{    
    let angkot = 1;
    while (angkot <= 10) {
        console.info(`Angkot No. ${angkot} beropasi dengan baik.`);
        angkot++;
    }
}

console.log('\n');
console.log('menggunakan while');
console.log('\n');

// menggunakan while dan for 
{
    let jmlAngkot = 10;
    let angkotBeroperasi = 6;
    let noAngkot = 1;

    while (noAngkot <= angkotBeroperasi) {
        console.info(`Angkot No. ${noAngkot} beroperasi dengan baik.`);
        noAngkot++;
    }

    for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
        console.info(`Angkot No. ${noAngkot} sedang tidak beroperasi.`);
    }
}

console.log('\n');
console.log('menggunakan if else');
console.log('\n');

// menggunakan kondisi if 
{
    let jmlAngkot = 10;
    let angkotBeroperasi = 6;
    let noAngkot = 1; 

    for (noAngkot = 1; noAngkot <= angkotBeroperasi; noAngkot++) {
        console.info(`Angkot No. ${noAngkot} beroperasi dengan baik.`);
    
    }
}

console.info('\n');
console.info('\n');

{
    var numbers = [1,2,3,4,5];
    var total = 0;
    i = 0;

    function averageValue(numbers){
        var averageValue = 0;
        if (numbers.length > 0) {
            for(i = 0; i <numbers.length; i++){ 
                total += numbers[i];
            }
            averageValue = total / numbers.length;
        }
        return averageValue;
    }

    var average = averageValue(numbers);
    console.info(average);
}

console.info('\n');

// {
//     function iterate (data) {
//         data.forEach(function (item) {
//             console.info('item: ' + item);
//         });
//     }

//     iterate(1,2,3);
// }

// {
//     function Animal () {
//         this.sound = 'animal sound';
//     }
    
//     Animal.prototype.makeSound = function () {
//         console.log(this.sound);
//     };

//     function Dog() {
//         this.sound = 'woof woof';
//     }

//     Dog.makeSound = new Animal();

//     var dog = new Dog();
//     dog.makeSound();
// }



{
   var sum = 0.1 + 0.7;
   console.info(sum);
}

{
    function Supplier () {
        this.supply = function () {
            return this;
        };
    }
    var supplier = new Supplier();
    var supply = supplier.supply();
    var comparasion = (supplier === supply);
    console.info(comparasion);
}


// juragan angkot
console.info('\n');

{
    console.info("=============== Angkot ===================");

    function angkot() {
        let jmlAngkot = 10;
        let = jmlBeropersi = 6;

        for (let noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
            if (noAngkot <= jmlBeropersi && noAngkot !== 2) {
                console.info(`Angkot No. ${noAngkot} beroperasi dengan baik.`);
            } else if (noAngkot === 8) {
                console.info(`Angkot No. ${noAngkot} sudah berjalan dan beroperasi juga lembur.`);
            } else {
                console.info(`Angkot No. ${noAngkot} sedang tidak beroperasi.`);
            }
        }
    }

    angkot();
}