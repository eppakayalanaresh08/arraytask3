list1=['Hyderabad', 'Bangalore', 'Chennai', 'Delhi', 'Pune', 'Kolkata']
list2=['Gujarat', 'Pune', 'Rajasthan', 'Bangalore', 'Vizag', 'Delhi']


// let list1 = ['Arjun', 'Adwait', 'Swapnil', 'Amit', 'Vishal', 'Adnan'];
// let list2 = ['Adwait', 'Laxman', 'Amit', 'Adnan', 'Nitin', 'Gaurav'];

// a. Get a unique set of users from List1 which are not in List2
let uniqueList1 = list1.filter(user => !list2.includes(user));
console.log(uniqueList1);

// b. Get a unique set of users from List2 which are not in List1
let uniqueList2 = list2.filter(user => !list1.includes(user));
console.log(uniqueList2);

// c. Get a set of users who are present in both List1 and List2 (intersection of list1 & list2)
let commonUsers = list1.filter(user => list2.includes(user));
console.log(commonUsers);




// 2 way method









// let listone1 = ['Arjun', 'Adwait', 'Swapnil', 'Amit', 'Vishal', 'Adnan'];
// let listtwo2 = ['Adwait', 'Laxman', 'Amit', 'Adnan', 'Nitin', 'Gaurav'];

// let uniqueListitem1 = []
// let uniqueListitem2 = []
// let commonUsersitem = [];

// // a. Get a unique set of users from List1 which are not in List2
// for (let i = 0; i < listone1.length; i++) {
//     let found = false;
//     for (let j = 0; j < listtwo2.length; j++) {
//         if (listone1[i] === listtwo2[j]) {
//             found = true;
//             break;
//         }
//     }
//     if (!found) uniqueListitem1.push(listone1[i]);
// }

// console.log(uniqueListitem1);

// // b. Get a unique set of users from List2 which are not in List1
// for (let i = 0; i < listtwo2.length; i++) {
//     let found = false;
//     for (let j = 0; j < listone1.length; j++) {
//         if (listtwo2[i] === listone1[j]) {
//             found = true;
//             break;
//         }
//     }
//     if (!found) uniqueListitem2.push(listtwo2[i]);
// }

// console.log(uniqueListitem2);

// // c. Get a set of users who are present in both List1 and List2 (intersection of list1 & list2)
// for (let i = 0; i < listone1.length; i++) {
//     for (let j = 0; j < listtwo2.length; j++) {
//         if (listone1[i] === listtwo2[j]) {
//             commonUsersitem.push(listone1[i]);
//             break;
//         }
//     }
// }

// console.log(commonUsersitem);
