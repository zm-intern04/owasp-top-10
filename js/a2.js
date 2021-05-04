const resList = document.querySelector('#resList')

res = [
    {
        "name": "https://auth0.com/blog/what-is-broken-authentication/"
    },
    {
        "name": "https://auth0.com/blog/what-is-credential-stuffing/"
    }
]

res.map(r =>{
    resList.innerHTML += `
    <li><a href="${r.name}">${r.name}</a></li>
    `
})