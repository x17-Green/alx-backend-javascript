
# 0x02. ES6 classes

### **Description**
This project is about creating classes in JavaScript using ES6 syntax.

![meme](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/817248fb77fb5c2cef3f.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20240726%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240726T185750Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=e9a6c5f45899121d2bc0fb7c097a8b3b3bc25a519eaa467d85c8d13299dfb52c)


## Resources

**Read or watch**:

- [Classes](https://intranet.alxswe.com/rltoken/ke2dSL31JbpAUBW0qWE9WA "Classes")
- [Metaprogramming](https://intranet.alxswe.com/rltoken/6OgF5QGbYclp_cwATfq-0g "Metaprogramming")

## Learning Objectives

At the end of this project, you are expected to be able to [explain to anyone](https://intranet.alxswe.com/rltoken/HZvBl09eHoGwvN8jqlYO-g "explain to anyone"), **without the help of Google**:

- How to define a Class
- How to add methods to a class
- Why and how to add a static method to a class
- How to extend a class from another
- Metaprogramming and symbols

## Requirements

- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All your files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the `js` extension
- Your code will be tested using `Jest` and the command `npm run test`
- Your code will be verified against lint using ESLint
- Your code needs to pass all the tests and lint. You can verify the entire project running `npm run full-test`

## Tasks, Files & Description

### 0. You used to attend a place like this at some point
- File: [`0-classroom.js`](./0-classroom.js "0-classroom.js")
- Task: Implement a class named `ClassRoom`:
	- Prototype: `export default class ClassRoom`
	- Should accept one attribute named `maxStudentsSize`
	- Assigned to `_maxStudentsSize`
- Example Execution: ([`0-main.js`](0-main.js "0-main.js"))
    ```
    ╭─green@greenhouse 
    ╰─➤  cat 0-main.js  
    import ClassRoom from "./0-classroom.js";

    const room = new ClassRoom(10);
    console.log(room._maxStudentsSize)
    ╭─green@greenhouse 
    ╰─➤  npm run dev 0-main.js          

    10
    ╭─green@greenhouse 
    ╰─➤  
    ```

### 1. Let's make some classrooms
- File: [`1-make_classrooms.js`](./1-make_classrooms.js "1-make_classrooms.js")
- Task: Import the `ClassRoom` class from `0-classroom.js`
	- Implement a function named `initializeRooms`
	- Should return an array of 3 `ClassRoom` objects
		- *With sizes 19, 20, and 34 (in this order)*
- Example Execution: ([`1-main.js`](./1-main.js "1-main.js"))
    ```
    ╭─green@greenhouse 
    ╰─➤  cat 1-main.js
    import initializeRooms from './1-make_classrooms.js';
    
    console.log(initializeRooms());
    ╭─green@greenhouse 
    ╰─➤  npm run dev 1-main.js                

    [
        ClassRoom { _maxStudentsSize: 19 },
        ClassRoom { _maxStudentsSize: 20 },
        ClassRoom { _maxStudentsSize: 34 }
    ]
    ╭─green@greenhouse
    ╰─➤  
    ```

### 2. A Course, Getters, and Setters
- File: [`2-hbtn_course.js`](./2-hbtn_course.js "2-hbtn_course.js")
- Task: Implement a class named `HolbertonCourse`:
    - Constructor attributes:
		- `name` (String)
		- `length` (Number)
		- `students` (array of Strings)
    - Verify the type of attributes during object creation
    - Store attributes in an "underscore" version (`name` = `_name`)
    - Implement getters and setters for each attribute
- Example Execution: ([`2-main.js`](./2-main.js "2-main.js"))
    ```
    ╭─green@greenhouse 
    ╰─➤  cat 2-main.js
    import HolbertonCourse from "./2-hbtn_course.js";

    const c1 = new HolbertonCourse("ES6", 1, ["Bob", "Jane"])
    console.log(c1.name);
    c1.name = "Python 101";
    console.log(c1);

    try {
        c1.name = 12;
    } 
    catch(err) {
        console.log(err);
    }

    try {
        const c2 = new HolbertonCourse("ES6", "1", ["Bob", "Jane"]);
    }
    catch(err) {
        console.log(err);
    }
    ╭─green@greenhouse 
    ╰─➤  npm run dev 2-main.js 

    ES6
    HolbertonCourse {
    _name: 'Python 101',
    _length: 1,
    _students: [ 'Bob', 'Jane' ]
    }
    TypeError: Name must be a string
        ...
    ```

### 3. Methods, static methods, computed methods names..... MONEY
- File [`3-currency.js`](./3-currency.js "3-currency.js")
- Task: Implement a class named `Currency`:
    - Constructor attributes:
        - `code` (String)
        - `name` (String)
    - Store attributes in an "underscore" version (`name` = `_name`)
    - Implement getters and setters for each attribute
    - Implement `displayFullCurrency` method that return the attributes in the following format `name (code)`.
- Example Execution: ([`3-main.js`](./3-main.js "3-main.js"))
    ```
    ╭─green@greenhouse 
    ╰─➤  cat 3-main.js 
    import Currency from "./3-currency.js";

    const dollar = new Currency('$', 'Dollars');
    console.log(dollar.displayFullCurrency());
    ╭─green@greenhouse 
    ╰─➤  npm run dev 3-main.js                                                                1 ↵

    Naira (NGN) [₦]
    ╭─green@greenhouse 
    ╰─➤  
    ```

### 4. Pricing
- File [`4-pricing.js`](./4-pricing.js "4-pricing.js")
- Task: Import the class `Currency` from `3-currency.js`
    - Implement a class named `Pricing`
		- Constructor attributes:
			- `amount` (Number)
			- `currency` (Currency)
    - Store attributes in an "underscore" version (`name` = `_name`)
    - Implement getters and setters for each attribute
    - Implement `displayFullPrice` method
	    -  Return the attributes in the following format
		    - `amount currency_name (currency_code)`
	- Implement `convertPrice` static method
		- Accepts two arguments:
			- `amount` (Number)
			- `conversionRate` (Number)
		- Function returns amount multiplied by conversion rate
- Example Execution: ([`4-main.js`](./4-main.js "4-main.js"))
    ```
    ╭─green@greenhouse 
    ╰─➤  cat 4-main.js 
    import Pricing from './4-pricing.js';
    import Currency from './3-currency.js';

    const p = new Pricing(100, new Currency("EUR", "Euro"))
    console.log(p);
    console.log(p.displayFullPrice());
    ╭─green@greenhouse 
    ╰─➤  npm run dev 4-main.js

    Pricing {
    _amount: 100,
    _currency: Currency { _name: 'Naira', _code: 'NGN', _sign: '₦' }
    }
    ₦ 100 Naira (NGN)
    ╭─green@greenhouse ~/Documents/git_dir/alx-specialization/alx-backend-javascript/0x02-ES6_classes  ‹main*› 
    ╰─➤  
    ```

### 5. A Building 
- File [`5-building.js`](./5-building.js "5-building.js")
- Task: Implement a class named `Building`:
    - Constructor attributes:
        - `sqft` (Number)
    - Store attributes in an "underscore" version (`name` = `_name`)
    - Implement getters and setters for each attribute
    - Consider this class as an abstract class.
        - Every class that extends from it should implement a method 
            - named `evacuationWarningMessage`
        - If an extended class doesn't have a `evacuationWarningMessage` method
            - throw an error with the message
                - `"Class extending Building must override evacuationWarningMessage"`
- Example Execution: ([`5-main.js`](./5-main.js "5-main.js"))
    ```
    ╭─green@greenhouse 
    ╰─➤  cat 5-main.js
    import Building from './5-building.js';

    const b = new Building(100);
    console.log(b);

    class TestBuilding extends Building {}

    try {
        new TestBuilding(200)
    }
    catch(err) {
        console.log(err);
    }
    ╭─green@greenhouse 
    ╰─➤  npm run dev 5-main.js

    Building { _sqft: 100 }
    Error: Class extending Building must override evacuationWarningMessage
        ...
    ```

### 6. Inheritance
- File: [`6-sky_high.js`](./6-sky_high.js "6-sky_high.js")
- Task: Import `Building` from `5-building.js`.
	- Implement a class named `SkyHighBuilding` that extends from `Building`:
		- Constructor attributes:
			- `sqft` (Number) (must be assigned to the parent class `Building`)
			- `floors` (Number)
	- Store attributes in an "underscore" version (`name` = `_name`)
    - Implement getters and setters for each attribute
    - Override method named `evacuationWarningMessage`
	    - Return string (`Evacuate slowly the NUMBER_OF_FLOORS floors`)
- Example Execution: ([`6-main.js`](./6-main.js "6-main.js"))
    ```
    ╭─green@greenhouse 
    ╰─➤  cat 6-main.js 
    import SkyHighBuilding from './6-sky_high.js';

    const building = new SkyHighBuilding(140, 60);
    console.log(building.sqft);
    console.log(building.floors);
    console.log(building.evacuationWarningMessage());
    ╭─green@greenhouse 
    ╰─➤  npm run dev 6-main.js

    140
    60
    Evacuate slowly the 60 floors
    ╭─green@greenhouse 
    ╰─➤  
    ```
### 7. Airport 
- File: [`7-airport.js`](./7-airport.js "7-airport.js")
- Task: Implement a class named `Airport` 
    - Constructor attributes:
        - `name` (String)
        - `code` (String)
	- Store attributes in an "underscore" version (`name` = `_name`)
    - Default string description of the class returns the airport `code`
        - *(example below)*
- Example Execution: ([`7-main.js`](./7-main.js "7-main.js"))
    ```
    ╭─green@greenhouse 
    ╰─➤  cat 7-main.js
    import Airport from "./7-airport.js";

    const airportBY = new Airport('Bayelsa International Airport', 'DNBY');
    console.log(airportBY);
    console.log(airportBY.toString());
    ╭─green@greenhouse 
    ╰─➤  npm run dev 7-main.js

    Airport [DNBY] {
        _name: 'Bayelsa International Airport',
        _code: 'DNBY'
    }
    [object DNBY]
    ╭─green@greenhouse 
    ╰─➤  
    ```

### 8. Primitive - Holberton Class 
- File: [`8-hbtn_class.js`](./8-hbtn_class.js "8-hbtn_class.js")
- Tasks: Implement a class named `HolbertonClass`:
    - Constructor attributes:
        - `size` (Number)
        - `location` (String)
    - Store attributes in an "underscore" version (`name` = `_name`)
    - When class is cast into a `Number`, return the size.
    - When class is cast into a `String`, return the location.
- Example Execution: ([`8-main.js`](./8-main.js "8-main.js"))
    ```
    ╭─green@greenhouse 
    ╰─➤  cat 8-main.js  
    import HolbertonClass from "./8-hbtn_class.js";

    const hc = new HolbertonClass(12, "Mezzanine")
    console.log(Number(hc));
    console.log(String(hc));
    ╭─green@greenhouse 
    ╰─➤  npm run dev 8-main.js

    12
    Mezzanine
    ╭─green@greenhouse 
    ╰─➤  
    ```

### 9. Hoisting
- File: [`9-hoisting.js`](./9-hoisting.js "9-hoisting.js")
- Task: Fix this code and make it work.
    ```
    const class2019 = new HolbertonClass(2019, 'San Francisco');
    const class2020 = new HolbertonClass(2020, 'San Francisco');

    export class HolbertonClass {
    constructor(year, location) {
        this._year = year;
        this._location = location;
    }

    get year() {
        return this._year;
    }

    get location() {
        return this._location;
    }
    }

    const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
    const student2 = new StudentHolberton('John', 'Doe', class2020);
    const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
    const student4 = new StudentHolberton('Donald', 'Bush', class2019);
    const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

    export class StudentHolberton {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._holbertonClass = holbertonClass;
    }

    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }

    get holbertonClass() {
        return this.holbertonClass;
    }

    get fullStudentDescription() {
        return `${self._firstName} ${self._lastName} - ${self._holbertonClass.year} - ${self._holbertonClass.location}`;
    }
    }


    export const listOfStudents = [student1, student2, student3, student4, student5];
    ```
- Example Execution: ([`9-main.js`](./9-main.js "9-main.js"))
    ```
    ╭─green@greenhouse 
    ╰─➤  cat 9-main.js 
    import listOfStudents from "./9-hoisting.js";

    console.log(listOfStudents);

    const listPrinted = listOfStudents.map(
        student => student.fullStudentDescription
    );

    console.log(listPrinted)
    ╭─green@greenhouse 
    ╰─➤  npm run dev 9-main.js

    [
        StudentHolberton {
            _firstName: 'Guillaume',
            _lastName: 'Salva',
            _holbertonClass: HolbertonClass { _year: 2020, _location: 'San Francisco' }
        },
        StudentHolberton {
            _firstName: 'John',
            _lastName: 'Doe',
            _holbertonClass: HolbertonClass { _year: 2020, _location: 'San Francisco' }
        },
        StudentHolberton {
            _firstName: 'Albert',
            _lastName: 'Clinton',
            _holbertonClass: HolbertonClass { _year: 2019, _location: 'San Francisco' }
        },
        StudentHolberton {
            _firstName: 'Donald',
            _lastName: 'Bush',
            _holbertonClass: HolbertonClass { _year: 2019, _location: 'San Francisco' }
        },
        StudentHolberton {
            _firstName: 'Jason',
            _lastName: 'Sandler',
            _holbertonClass: HolbertonClass { _year: 2019, _location: 'San Francisco' }
        }
    ]
    [
        'Guillaume Salva - 2020 - San Francisco',
        'John Doe - 2020 - San Francisco',
        'Albert Clinton - 2019 - San Francisco',
        'Donald Bush - 2019 - San Francisco',
        'Jason Sandler - 2019 - San Francisco'
    ]
    ╭─green@greenhouse 
    ╰─➤  
    ```

###  10. Vroom
- File: [`10-car.js`](./10-car.js "10-car.js")
- Task: Implement a class named `Car`:
    - Constructor attributes:
        - brand (String)
        - motor (String)
        - color (String)
    - Store attributes in an "underscore" version (`name` = `_name`)
    - Add method: `cloneCar`, and return the object of the class `Car`
        - *Hint: Symbols in ES6*
- Example Execution: ([`10-main.js`](./10-main.js "10-main.js"))
    ```
    ╭─green@greenhouse 
    ╰─➤  cat 10-main.js 
    import Car from "./10-car.js";

    class TestCar extends Car {}

    const tc1 = new TestCar("Nissan", "Turbo", "Pink");
    const tc2 = tc1.cloneCar();

    console.log(tc1);
    console.log(tc1 instanceof TestCar);

    console.log(tc2);
    console.log(tc2 instanceof TestCar);

    console.log(tc1 == tc2);
    ╭─green@greenhouse
    ╰─➤  npm run dev 10-main.js 

    TestCar { _brand: 'Nissan', _motor: 'Turbo', _color: 'Pink' }
    true
    TestCar { _brand: 'Nissan', _motor: 'Turbo', _color: 'Pink' }
    true
    false
    ╭─green@greenhouse 
    ╰─➤  
    ```

### 11. EVCar 
- File: [`100-evcar.js`](./100-evcar.js "100-evcar.js")
- Task: Import `Car` from `10-car.js`.
    - Implement a class named `EVCar` that extends the `Car` class:
        - Constructor attributes:
            - brand (String)
            - motor (String)
            - color (String)
            - range (String)
    - Store attributes in an "underscore" version (`name` = `_name`)
    - Implement `cloneCar` to return a `Car` instance when called on an `EVCar` object
- Example Execution: ([`100-main.js`](./100-main.js "100-main.js"))
    ```
    ╭─green@greenhouse 
    ╰─➤  cat 100-main.js 
    import EVCar from './100-evcar.js';

    const ec1 = new EVCar("Tesla", "Turbo", "Red", "250");
    console.log(ec1);

    const ec2 = ec1.cloneCar();
    console.log(ec2);
    ╭─green@greenhouse 
    ╰─➤  npm run dev 100-main.js

    EVCar {
        _brand: 'Tesla',
        _motor: 'Turbo',
        _color: 'Red',
        _range: '250'
    }
    Car { _brand: undefined, _motor: undefined, _color: undefined }
    ╭─green@greenhouse 
    ╰─➤  
    ```