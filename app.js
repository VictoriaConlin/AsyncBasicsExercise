// ASYNC BASICS EXERCISE

// 1
let name1 = "Luke Skywalker";

function lukeName() {
  console.log(`Question 1`);
  console.log(name1);
}

function luke(n1, callback) {
  setTimeout(() => {
    callback(n1);
  }, 1000);
}
luke(`Mark Hamill`, n => {
    console.log(n);
});
lukeName();

// 2
let name2 = "Han Solo";

function hanName() {
  console.log(`Question 2`);
  console.log(name2);
}

function han(n){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            name2 = n;
            resolve();
        }, 2000)
    })
}
han(`Harrison Ford`)
.then(hanName);



// 3
let name3 = "Leia Organa";

function leiaName() {
  console.log(`Question 3`);
  console.log(name3);
}

function leia(n){
    return new Promise ((resolve,reject) => {
    setTimeout(() => {
    name3 = n;
    resolve();
    }, 3000);
    });
}

async function princess(){
    const organa = await leia(`Carrie Fisher`);
    console.log(organa);
    leiaName();
}
princess()

// 4
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('First Promise')
    }, 2000);
  });
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Second Promise')
    }, 3000);
  });
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Third Promise')
    }, 4000);
  });

  Promise.all([p1, p2,p3])
  .then((values) => console.log(values));