# OWASP Top 10 

The OWASP Top 10 is a standard awareness document for developers and web application security. It represents a broad consensus about the most critical security risks to web applications.

## Table of Content

- [OWASP Top 10](#owasp-top-10)
  - [Table of Content](#table-of-content)
  - [A1-Injection](#a1-injection)
    - [Overview](#overview)
    - [SQL Injection](#sql-injection)
      - [Types of SQLI](#types-of-sqli)
      - [Detectability](#detectability)
      - [Tools](#tools)
      - [Mitigation](#mitigation)
      - [Demo (DVWA)](#demo-dvwa)
      - [References](#references)
  - [A2-Broken Authentication](#a2-broken-authentication)

## A1-Injection

### Overview
Occur when untrusted data is sent to an interpreter as part of a command or query.
The attacker’s hostile data can trick the interpreter into executing unintended commands or accessing data without proper authorization.

### SQL Injection
Web applications became more complex, database driven.
SQL injection is a particularly widespread and dangerous form of injection.
To exploit a SQL injection flaw, the attacker must find a parameter that the web application passes through to a database.

By carefully embedding malicious SQL commands into the content of the parameter, the attacker can trick the web application into forwarding a malicious query to the database.
#### Types of SQLI

**SQL Injection Based on 1=1 is Always True**
```SQL
SELECT * FROM Users WHERE userID = 105 OR 1=1;
```

**SQL Injection Based on ""="" is Always True**
```SQL
'SELECT * FROM Users WHERE Name ="' + uName + '" AND Pass ="' + uPass + '"'
SELECT * FROM Users WHERE Name ="John Doe" AND Pass 
SELECT * FROM Users WHERE Name ="" or ""="" AND Pass ="" or ""=""
```

**SQL Injection Based on Batched SQL Statements**
```SQL
SELECT * FROM Users WHERE UserId = 105; DROP TABLE Suppliers;
```



#### Detectability
Injection flaws are common with applications written in PHP or ASP because these tend to have older functional interfaces. They are much less common with J2EE and ASP.NET applications  

Easy to identify when examining code, hard to discover via testing.

The best way to detect injection flaws is by 
- Performing a source code review 
- Using a static code analyzer to scan code automatically
- Using a dynamic application test tool (DAST)
- Fuzzing tools.

#### Tools

**OWASP ZAP**
OWASP ZAP (Zed Attack Proxy) is an open-source web application security scanner.
[Official Website](https://www.zaproxy.org/)

**SQLMAP**
SQLMap is an open-source penetration testing tool that automates the process of detecting and exploiting SQL injection flaws and taking over of database servers.
[Official Website](https://sqlmap.org/)

#### Mitigation

Neutralization of input data is considered the main defense approach against SQL injection attacks. This should be achieved by sanitizing input data before using it in SQL queries within application or by means of security software such as WAF or IDS/IPS system.

To avoid SQL injection flaws is simple. Developers need to either:

- Stop writing dynamic queries
- Prevent user supplied input which contains malicious SQL from affecting the logic of the executed query.

#### Demo (DVWA)
[YouTube Video](https://youtu.be/NOGj_Nvv5Fg)

#### References

https://owasp.org/www-community/Injection_Flaws#
https://www.youtube.com/watch?v=3ZjkIA1k8Ac
https://www.w3schools.com/sql/sql_injection.asp
https://grca-academy.com/a1-injection-owsap/
https://owasp.org/www-project-top-ten/2017/A1_2017-Injection#
https://cheatsheetseries.owasp.org/cheatsheets/Query_Parameterization_Cheat_Sheet.html
https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html
https://cheatsheetseries.owasp.org/cheatsheets/Query_Parameterization_Cheat_Sheet.html

## A2-Broken Authentication
