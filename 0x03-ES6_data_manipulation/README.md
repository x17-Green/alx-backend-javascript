# 0x03. ES6 data manipulation 

### Description
This project is about data manipulation in JavaScript using ES6 features.

![](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/6ab7bec4727cb5c91257.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20240729%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240729T085400Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=35dbcc9c845fa924c0e8f9d284abb57c8638473636acbf2d1bdaa3c18f595b46)


## Resources

**Read or watch**:

- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")
- [Typed Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Typed_arrays "Typed Array")
- [Set Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set "Set Data Structure")
- [Map Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map "Map Data Structure")
- [WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap "WeakMap")

## Learning Objectives

At the end of this project, you are expected to be able to [explain to anyone](https://fs.blog/feynman-learning-technique/ "explain to anyone"), **without the help of Google**:

- How to use map, filter and reduce on arrays
- Typed arrays
- The Set, Map, and Weak link data structures

## Requirements

- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All your files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the `js` extension
- Your code will be tested using `Jest` and the command `npm run test`
- Your code will be verified against lint using ESLint
- Your code needs to pass all the tests and lint. You can verify the entire project running `npm run full-test`
- All of your functions must be exported

## Tasks, Files & Description

### 0. Basic list of objects 
- File: [`0-get_list_students.js`](./0-get_list_students.js "0-get_list_students.js")
- Task: Create a function named `getListStudents`
    - Return an array of objects with three attributes
        - id
        - firstName
        - location
    - The array contains the following students in order:
        - `Guillaume`, id: `1`, in `San Francisco`
        - `James`, id: `2`, in `Columbia`
        - `Serena`, id: `5`, in `San Francisco`
- Example Execution ([`0-main.js`](./0-main.js "0-main.js"))
    ```
    ╭─green@greenhouse 
    ╰─➤  cat 0-main.js
    import getListStudents from "./0-get_list_students.js";

    console.log(getListStudents());
    ╭─green@greenhouse 
    ╰─➤  npm run dev 0-main.js

    [
        { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
        { id: 2, firstName: 'James', location: 'Columbia' },
        { id: 5, firstName: 'Guillaume', location: 'San Francisco' }
    ]
    ╭─green@greenhouse 
    ╰─➤  
    ```

### 1. More mapping 
- File: [`1-get_list_student_ids.js`](./1-get_list_student_ids.js "1-get_list_student_ids.js")
- Task: Create a function `getListStudentIds`
    - Returns an array of `ids` from a list of object
    - The list of objects is the same as in the previous task
    - If argument is not array, function returns empty array.
        - *use the map function on the array.*
- Example Execution: ([`1-main.js`](./1-main.js "1-main.js"))
    ```
    ╭─green@greenhouse 
    ╰─➤  cat 1-main.js 
    import getListStudentIds from "./1-get_list_student_ids.js";
    import getListStudents from "./0-get_list_students.js";

    console.log(getListStudentIds("hello"));
    console.log(getListStudentIds(getListStudents()));
    ╭─green@greenhouse 
    ╰─➤  npm run dev 1-main.js

    []
    [ 1, 2, 5 ]
    ╭─green@greenhouse 
    ╰─➤  
    ```

### 2. Filter 
- File: [`2-get_students_by_loc.js`](./2-get_students_by_loc.js "2-get_students_by_loc.js")
- Task: Create a function `getStudentsByLocation`
    - Returns an array of objects located in a specific city
    - Should accept two parameters
        - List of `students` (from `getListStudents`)
        - `city` (String)
    - *You must use the filter function on the array.*
- Example Execution: ([`2-main.js`](./2-main.js "2-main.js"))
    ```
    ╭─green@greenhouse 
    ╰─➤  cat 2-main.js 
    import getListStudents from "./0-get_list_students.js";
    import getStudentsByLocation from "./2-get_students_by_loc.js";

    const students = getListStudents();

    console.log(getStudentsByLocation(students, 'San Francisco'));
    ╭─green@greenhouse 
    ╰─➤  npm run dev 2-main.js                

    [
        { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
        { id: 5, firstName: 'Serena', location: 'San Francisco' }
    ]
    ╭─green@greenhouse 
    ╰─➤  
    ```

### 3. Reduce 
- File: [`3-get_ids_sum.js`](./3-get_ids_sum.js "3-get_ids_sum.js")
- Task: Create a function `getStudentIdsSum`
    - Returns the sum of all the student ids.
    - Should accept one parameter
        - List of `students` (from `getListStudents`)
    - *You must use the reduce function on the array.*
- Example Execution: ([`3-main.js`](./3-main.js "3-main.js"))
    ```
    ╭─green@greenhouse 
    ╰─➤  cat 3-main.js
    import getListStudents from "./0-get_list_students.js";
    import getStudentIdsSum from "./3-get_ids_sum.js";

    const students = getListStudents();
    const value = getStudentIdsSum(students);

    console.log(value);
    ╭─green@greenhouse 
    ╰─➤  npm run dev 3-main.js

    8
    ╭─green@greenhouse 
    ╰─➤  
    ```

### 4. Combine
- File: [`4-update_grade_by_city.js`](./4-update_grade_by_city.js "4-update_grade_by_city.js")
- Task: Create a function `updateStudentGradeByCity`
    - Returns an array of objects located in a specific city with new grades
    - Should accept three parameters
        - List of `students` (from `getListStudents`)
        - `city` (String)
        - `newGrades` (Strings)
    - `newGrades` is an array of objects with this format:
        ```
        {
            studentId: 31,
            grade: 78,
        }
        ```
        - If "student" doesn't have grade in `newGrade`
            - Return `N/A`
    - *You must use the `filter` and `map` functions combined on the array.*
- Example Execution: ([`4-main.js`](./4-main.js "4-main.js"))
    ```
    ╭─green@greenhouse 
    ╰─➤  cat 4-main.js 
    import getListStudents from "./0-get_list_students.js";
    import updateStudentGradeByCity from "./4-update_grade_by_city.js";

    console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }, { studentId: 1, grade: 86 }]));

    console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }]));
    ╭─green@greenhouse 
    ╰─➤  npm run dev 4-main.js
    [
        {
            id: 1,
            firstName: 'Guillaume',
            location: 'San Francisco',
            grade: 86
        },
        { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
    ]
    [
        {
            id: 1,
            firstName: 'Guillaume',
            location: 'San Francisco',
            grade: 'N/A'
        },
        { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
    ]
    ╭─green@greenhouse 
    ╰─➤  
    ```

### 5. Typed Arrays 
- File: [`5-typed_arrays.js`](./5-typed_arrays.js "5-typed_arrays.js")
- Task: Create a function `createInt8TypedArray`
    - Returns new `ArrayBuffer` with `Int8` value at specific position
    - Should accept three arguments
        - `length` (Number)
        - `position` (Number)
        - `value` (Number)
    - If can't add value, throw Error
        - `Position outside range`
- Example Execution: ([`5-main.js`](./5-main.js "5-main.js"))
    ```
    ╭─green@greenhouse 
    ╰─➤  cat 5-main.js 
    import createInt8TypedArray from "./5-typed_arrays.js";

    ╭─green@greenhouse 
    ╰─➤  npm run dev 5-main.js         

    DataView {
        byteLength: 10,
        byteOffset: 0,
        buffer: ArrayBuffer {
            [Uint8Contents]: <00 00 59 00 00 00 00 00 00 00>,
            byteLength: 10
        }
    }
    ╭─green@greenhouse 
    ╰─➤  
    ```

### 6. Set data structure 
- File: [`6-set.js`](./6-set.js "6-set.js")
- Task: Create a function `setFromArray`
    - Returns new `Set` from array
    - Should accept one argument
        - `array` (Array)
            - If `array` is not an array, throw Error
                - `Input must be an array`
- Example Execution: ([`6-main.js`](./6-main.js "6-main.js"))
    ```
    ╭─green@greenhouse 
    ╰─➤  cat 6-main.js 
    import setFromArray from "./6-set.js";

    console.log(setFromArray([12, 32, 15, 78, 98, 15]));
    ╭─green@greenhouse ~
    ╰─➤  npm run dev 6-main.js

    Set(5) { 12, 32, 15, 78, 98 }
    ╭─green@greenhouse 
    ╰─➤  
    ```

### 7. More set data structure
- File: [`7-has_array_values.js`](./7-has_array_values.js "7-has_array_values.js")
- Task: Create a function `hasValuesFromArray`
    - Returns `true` if `array` has values, `false` otherwise
    - Should accept two argument
        - `set` (Set)
        - `array` (Array)
            - If `array` is not an array, throw Error
                - `Input must be an array`
- Example Execution: ([`7-main.js`](./7-main.js "7-main.js"))
    ```
    ╭─green@greenhouse 
    ╰─➤  cat 7-main.js 
    import hasValuesFromArray from "./7-has_array_values.js";

    console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1]));
    console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [10]));
    console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1, 10]));
    ╭─green@greenhouse 
    ╰─➤  npm run dev 7-main.js

    true
    false
    true
    ╭─green@greenhouse 
    ╰─➤  
    ```
### 8. Clean set
- File: [`8-clean_set.js`](./8-clean_set.js "8-clean_set.js")
- Task: Create a function `cleanSet`
    - Returns a new set with all values from `set` with a specific string (`startString`).
    - Should accept two argument
        - `set` (Set)
        - `startString` (String)
        - Append rest of string if value starts with `startString`.
            - String contains values of set separated by `-`
- Example Execution: ([`8-main.js`](./8-main.js "8-main.js"))
    ```
    ╭─green@greenhouse 
    ╰─➤  cat 8-main.js 
    import cleanSet from "./8-clean_set.js";

    console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
    console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));
    ╭─green@greenhouse 
    ╰─➤  npm run dev 8-main.js

    jovi-aparte-appetit

    ╭─green@greenhouse 
    ╰─➤  
    ```

### 9. Map data structure 
- File: [`9-groceries_list.js`](./9-groceries_list.js "9-groceries_list.js")
- Task: Create a function `groceriesList`
- Returns a new map with the following items:
    - name (String)
    - quantity (Number)
        ```
        Apples, 10
        Tomatoes, 10
        Pasta, 1
        Rice, 1
        Banana, 5
        ```
- Example Execution: ([`9-main.js`](./9-main.js "9-main.js"))
    ```
    ╭─green@greenhouse 
    ╰─➤  cat 9-main.js
    import groceriesList from "./9-groceries_list.js";

    console.log(groceriesList());
    ╭─green@greenhouse 
    ╰─➤  npm run dev 9-main.js

    Map(5) {
        'Apples' => 10,
        'Tomatoes' => 10,
        'Pasta' => 1,
        'Rice' => 1,
        'Banana' => 5
    }
    ╭─green@greenhouse 
    ╰─➤  
    ```

### 10. More map data structure 
- File: [`10-update_uniq_items.js`](./10-update_uniq_items.js "10-update_uniq_items.js")
- Task: Create a function `updateUniqueItems`
    - Accepts a map as an argument
    - Returns an updated map with the following changes:
        - for each entry where the quantity is 1
        - update the quantity to 100
    - Throws an error `"Cannot process"` if the argument is not a map
- Example Execution: ([`10-main.js`](./10-main.js "10-main.js"))
    ```
    ╭─green@greenhouse 
    ╰─➤  cat 1-main.js
    import getListStudentIds from "./1-get_list_student_ids.js";
    import getListStudents from "./0-get_list_students.js";

    console.log(getListStudentIds("hello"));
    console.log(getListStudentIds(getListStudents()));
    ╭─green@greenhouse 
    ╰─➤  npm run dev 10-main.js

    Map(5) {
        'Apples' => 10,
        'Tomatoes' => 10,
        'Pasta' => 1,
        'Rice' => 1,
        'Banana' => 5
    }
    Map(5) {
        'Apples' => 10,
        'Tomatoes' => 10,
        'Pasta' => 100,
        'Rice' => 100,
        'Banana' => 5
    }
    ╭─green@greenhouse 
    ╰─➤  
    ```

### 11. Weak link data structure 
- File: [`100-weak.js`](./100-weak.js "100-weak.js")
- Tasks: 
    - Export a const instance of `WeakMap`
        - Name it `weakMap`
    - Export a new function `queryAPI`
        - Accept `endpoint` arguments with the following properties:
            - `protocol` (String)
            - `name` (String)
        - Tracks the number of times `queryAPI` is called for each endpoint using `weakMap`
        - Throws an error with the message 
            - "Endpoint load is high" when number of queries is >= 5
- Example Execution: ([`100-main.js`](./100-main.js "100-main.js"))
    ```
    ╭─green@greenhouse 
    ╰─➤  cat 100-weak.js 
    import { queryAPI, weakMap } from "./100-weak.js";

    const endpoint = { protocol: 'http', name: 'getUsers' };
    weakMap.get(endpoint);

    queryAPI(endpoint);
    console.log(weakMap.get(endpoint));

    queryAPI(endpoint);
    console.log(weakMap.get(endpoint));

    queryAPI(endpoint);
    queryAPI(endpoint);
    queryAPI(endpoint);
    queryAPI(endpoint);
    ╭─green@greenhouse 
    ╰─➤  npm run dev 100-main.js

    1
    2
    .../100-weak.js:37
        throw new Error("Endpoint load is high");
        ...
    ╭─green@greenhouse 
    ╰─➤  
    ```