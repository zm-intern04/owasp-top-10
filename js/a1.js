const resList = document.querySelector('#resList')

res = [
    {
        "name": "https://owasp.org/www-community/Injection_Flaws#"
    },
    {
        "name": "https://www.youtube.com/watch?v=3ZjkIA1k8Ac"
    },
    {
        "name": "https://www.w3schools.com/sql/sql_injection.asp"
    },
    {
        "name": "https://grca-academy.com/a1-injection-owsap/"
    },
    {
        "name": "https://owasp.org/www-project-top-ten/2017/A1_2017-Injection#"
    },
    {
        "name": "https://cheatsheetseries.owasp.org/cheatsheets/Query_Parameterization_Cheat_Sheet.html"
    },
    {
        "name": "https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html"
    },
    {
        "name": "https://cheatsheetseries.owasp.org/cheatsheets/Query_Parameterization_Cheat_Sheet.html"
    },
    {
        "name": "https://www.sqlshack.com/sql-injection-detection-and-prevention/"
    }
]

res.map(r =>{
    resList.innerHTML += `
    <li><a href="${r.name}">${r.name}</a></li>
    `
})