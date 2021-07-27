// Создаем объект Car с функцией getInfo(), которая выводит в html в виде списка все данные об объекте, в контексте которого она вызывается.
// Создаем три объекта Mazda, Toyota, Porsche прототипом которых будет объект Car.
// В контексте каждого объекта Mazda, Toyota, Porsche вызываем функцию getInfo(). Пример: Mazda.getInfo();
// Данные по каждому объекту:
// Mazda:
// Name: 2019 Mazda MX-5 Miata Club
// Vehicle type: front-engine, rear-wheel-drive, 2-passenger, 2-door convertible
// Price as tested: $34,980 (base price: $30,510)
// Engine type: DOHC 16-valve inline-4, aluminum block and head, direct fuel injection
// Toyota:
// Name: 2021 Toyota Supra 3.0
// Vehicle type: front-engine, rear-wheel-drive, 2-passenger, 2-door hatchback
// Price as tested: $52,440 (base price: $51,945)
// Engine type: turbocharged and intercooled DOHC 24-valve inline-6, aluminum block and head, direct fuel injection
// Porsche
// Name: 2018 Porsche 718 Cayman GTS
// Vehicle type: mid-engine, rear-wheel-drive, 2-passenger, 2-door hatchback
// Price as tested: $85,170 (base price: $81,750)
// Engine type: turbocharged and intercooled DOHC 16-valve flat-4, aluminum block and heads, direct fuel injection


let Car = {
    getInfo() {
        document.write(`<strong>Name:</strong> ${this.name} <br>`)
        document.write(`<strong>Vehicle type:</strong> ${this.type}<br>`)
        document.write(`<strong>Price as tested:</strong> ${this.price}<br>`)
        document.write(`<strong>Engine type:</strong> ${this.engine}<br><br>`)
    }
}

let Mazda = Object.create(Car);
Mazda.name = `2019 Mazda MX-5 Miata Club`;
Mazda.type = `front-engine, rear-wheel-drive, 2-passenger, 2-door convertible`;
Mazda.price = `$34,980 (base price: $30,510)`;
Mazda.engine = `DOHC 16-valve inline-4, aluminum block and head, direct fuel injection`;

let Toyota = Object.create(Car);
Toyota.name = `2021 Toyota Supra 3.0`;
Toyota.type = `front-engine, rear-wheel-drive, 2-passenger, 2-door convertible`;
Toyota.price = `$52,440 (base price: $51,945)`;
Toyota.engine = `turbocharged and intercooled DOHC 24-valve inline-6, aluminum block and head, direct fuel injection`;

let Porsche = Object.create(Car);
Porsche.name = `2018 Porsche 718 Cayman GTS`;
Porsche.type = `mid-engine, rear-wheel-drive, 2-passenger, 2-door hatchback`;
Porsche.price = `$85,170 (base price: $81,750)`;
Porsche.engine = `turbocharged and intercooled DOHC 16-valve flat-4, aluminum block and heads, direct fuel injection`;

Mazda.getInfo();
Toyota.getInfo();
Porsche.getInfo();