// Async vs sync
// event loop, callstack, web API, callbackqueue
// call API, timer (setTimeout, setInterval), DOM events (click, scroll)

// setTimeout(() => {
//   console.log("Timer executed");
// }, 2000)

// let count = 0
// setInterval(() => {
//   console.log(++count)
// }, 1000)

// let count;
// setTimeout(() => {
//   count = 0
//   setTimeout(() => {
//     console.log("Nested timer executed");
//   }, 3000);
// }, 1000);

// xml http request => ajax => axios, fetch
// callback hell

const promise = new Promise((resolve, reject) => {
  resolve(10)
  reject("Error occurred")
})

promise
  .then((res) => {
    console.log(res)
    return new Promise((resolve, reject) => {
      resolve(40)
      reject("Error in second promise")
    })
  })
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
  .finally(() => {
    console.log("finally")
  })


// Promise.All
const promise1 = Promise.resolve(10)
const promise2 = Promise.resolve('err')
const promise3 = Promise.resolve(30)
// const promise4 = Promise.reject('err2')
const promiseAll = Promise.all([promise1, promise2, promise3])
// .then((res) => {
//   console.log(res)
//   return res
// })


// async await
const fetchPromise = async () => {
  try {
    const res = await promise1
    console.log(res)
    return res

  } catch (err) {
    console.log(err)
  }
}
// async await always returns a promise
//  
console.log(fetchPromise())

// axios and fetch
const usersAPI = 'http://localhost:3000/'


fetch(`${usersAPI}/users`)
  .then((res) => {
    return res.json() // returns a promise 
  })
  .then((data) => {
    console.log(data) // actual data
  })

const fetchUsers = async () => {
  const res = await fetch(`${usersAPI}/users`)
  const data = await res.json();
  console.log(data)
}
fetchUsers()

axios.get(`${usersAPI}/users`)
  .then((res) => {
    console.log(res)
  })

const fetchUsersAxios = async () => {
  const res = await axios.get(`${usersAPI}/users`)
  console.log(res.data)
  render(res.data)
}
fetchUsersAxios()

const container = document.querySelector('.container')
function render (data) {
  let html = ''
  for (let value of data) {
    html += `<p>${value.username}<p>`
  }
  container.innerHTML = html
}

