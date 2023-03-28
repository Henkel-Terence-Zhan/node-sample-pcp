---
marp: true
theme: gaia
# theme: base-theme
size: 16:9
paginate: false
title:
header: "[Back](./index.md#5)"
---

## RESTful API

出处: *Architectural Styles and
the Design of Network-based Software Architectures*

REST这个词，是Roy Thomas Fielding在他2000年的[博士论文](https://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm)中提出的。在论文的[第五章](https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm)提出了REST的感念，[第六章](https://www.ics.uci.edu/~fielding/pubs/dissertation/evaluation.htm)中分享REST实践的经验。

也可以参考阮一峰的[理解RESTful架构](https://www.ruanyifeng.com/blog/2011/09/restful.html)

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

---

**其它处理方式--前缀**
多端：2B/2C
可以添加 /2b 或 /2c 前缀，如： GET /2b/users

版本:
可以添加 /v{version} 前缀 如：GET /v1/users

**其它处理方式--后缀**
批量添加数据
可以添加 /bulk 后缀, 如：POST /users/bulk

重置密码
可以添加 /{metadata}_{action} 如：PATCH /users/:id/password_reset
