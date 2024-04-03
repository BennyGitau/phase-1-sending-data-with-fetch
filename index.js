// Add your code here
fetch("http://localhost:3000/dogs", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
  body: JSON.stringify({
    dogName: "Byron",
    dogBreed: "Poodle",
  })

})
  .then(response => response.json())
  .then(dog => console.log(dog))


function submitData(userName, userEmail){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: `${userName}`,
            email: `${userEmail}`,
        })
        
    })
    .then(response => response.json())
    .then((user) => {
        const p = document.createElement("p")
        p.textContent = user.id;
        document.querySelector("body").appendChild(p);
    })
    .catch((error) => {
        if(error) {
        const p = document.createElement("p")
        p.textContent = "Unauthorized Access"
        document.querySelector("body").appendChild(p);
        }
    })

}
submitData("Benny", "Benny@gmail.com")