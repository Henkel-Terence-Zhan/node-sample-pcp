---
marp: true
title: "[KT] Product Category Implementation"
theme: gaia
# theme: base-theme
size: 16:9
paginate: false
---

<!-- # [KT] Product Category Implementation -->

## Requirements

**Audience:**
All FE developers

**Target:**
After the session FE developers could build a service could offer a PCP page could use for.

- Include how to design database
- How to design APIs
- How to deal the special requirement APIs

---

## Introduction

- Frontend
- Backend
<!-- - 前后端区别 -->
- RESTful API

    ---
- Sample - Implementing APIs of the Product Category Page
    1. Design Database
    1. Docker
    1. Coding
    1. Security

---

## Frontend

- HTML
- CSS
- JS

    ---
- ***Browser***

    ---

- Framework

---

## Backend

- **OS** / Network / WebService

    ---
- Design Patterns

- Database
    1. SQL
        <!-- 
        1. T-SQL                     - MSSQL
        1. PL/SQL                    - Oracle
        1. SQL/PSM(ISO Standard)     - MySQL     
        -->
    1. NoSQL(**Not Only SQL**)

    ---

- Programming Language

---
<!-- 
## 前后端区别

**前端：** 主要是展示，侧重交互-用户体验
**后端：** 

--- -->

<!-- ## 规范 -->
## RESTful API

一种风格约定

- HTTP
  - Method
  - Status Codes
<!-- 
  - 20X    -    正常的
  - 40X    -    已知的异常
      - 401
      - 403
  - 50X    -    未捕获的异常/未知的异常 
-->

- Resources/ Resources metadata

    ---

- [more](./restful-api.md)

---

## [Sample](./sample.md)

以 “Product Category Page” 为例子

- DB Design
- Nest
- Project Initialization
