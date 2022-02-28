let arr = [
    {name: "A", age: 14, gender: "M"},
    {name: "B", age: 34, gender: "M"},
    {name: "C", age: 24, gender: "F"},
    {name: "D", age: 44, gender: "F"},
    {name: "E", age: 44, gender: "M"},
    {name: "I", age: 28, gender: "F"},
    {name: "G", age: 36, gender: "M"},
    {name: "H", age: 47, gender: "F"}]
    // Task : to filter out all the females from the array and print their ages
    //  sol1
    // let nameOfLadies=arr.filter(function (g){
    //     if(g.gender=='F'){
    //         return true;
    //     }else{
    //         return false;
    //     }
    // })

    // let a=nameOfLadies.map(function (ag){
    //     return ag.age;
    // })
    // console.log(a);
//    sol2
// Chaining of Higher Order Functions | filter() and map()
// Chaining the filter() and map() together!
// basically output of filter can be mapped
    let nameOfLadies1=arr.filter(function (g){
        if(g.gender=='F'){
            return true;
        }else{
            return false;
        }
    }).map(function(n){
        return n.age;
    })
    console.log(nameOfLadies1);