---
marp: true
theme: gaia
# theme: base-theme
size: 16:9
paginate: false
title:
header: "[Back](./index.md#5)"
---

## RESTful APIs

出处: Roy Thomas Fielding 在[UCI](https://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm)提交的论文--"Architectural Styles and
the Design of Network-based Software Architectures".

在论文的[第五章](https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm)提出了REST的感念，[第六章](https://www.ics.uci.edu/~fielding/pubs/dissertation/evaluation.htm)中分享REST的应用经验

---

## A Practice of the RESTful APIs

**Get many resources**
GET /users
GET /users/:userId/roles

Result: array of resources | pagination object with data
Status Codes: 200

---

**Get one resource**
GET /users/:id
GET /users/:userId/roles/:id

Request Params: `:id` - some resource field (slug)
Result: resource object
Status Codes: 200 | 404

---

**Create one resource**
POST /users
POST /users/:userId/roles

Request Body: resource object | resource object with nested (relational) resources
Result: created resource object
Status Codes: 201

---

**Create many resources**
POST /users/bulk
POST /users/:userId/roles/bulk

Request Body: array of resources objects | array of resources objects with nested (relational) resources

{
  "bulk": [{ "name": "aaa" }, { "name": "xxx" }]
}
Result: array of created resources
Status codes: 201

---
**Replace one resource**
PUT /users/:id
PUT /users/:userId/roles/:id

Request Params: `:id` - some resource field (slug)
Request Body: resource object | resource object with nested (relational) resources (or partial)
Result: replaced resource object
Status codes: 200

---

**Update one resource**
PATCH /users/:id
PATCH /users/:userId/roles/:id

Request Params: `:id` - some resource field (slug)
Request Body: resource object (or partial) | resource object with nested (relational) resources (or partial)
Result: updated partial resource object
Status codes: 200 | 404

---

**Delete one resource**
DELETE /users/:id
DELETE /users/:userId/roles/:id

Request Params: `:id` - some resource field (slug)
Result: empty | resource object
Status codes: 200 | 404
