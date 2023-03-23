---
marp: true
theme: gaia
title: Implementing tutorial
header: "[Back](./index.md#7)"
---

## Introduction

1. Development Environment Dependency
1. Technical Point
1. Project Initialization

---

## Development Dependencies

1. Docker 4.x or higher
1. Node.js v16.x or higher, v16.19 is recommended
1. npm is greater than 7 version, v8.19 is recommended
1. Nest CLI 9.x or higher, v9.2 is recommended

---

## Technical

1. **Controller-Service-Repository pattern**
1. **ORM**
1. **IoC/DI**

1. *DTO Serialization*
1. Mapper

    ---
1. **Docker**

<!-- 1. Express -->
<!-- 1. Lifecycle Events -->

---

### Controller-Service-Repository pattern

|            |                                                        |
| ---------- | ------------------------------------------------------ |
| Controller | management of the REST interface to the business logic |
| Service    | business logic implementation                          |
| Repository | storage of the entity beans in the system              |
---

### ORM

---

### IoC/DI

Reference: [IOC Introduction](https://www.tutorialsteacher.com/ioc/introduction)

![image](https://www.tutorialsteacher.com/Content/images/ioc/principles-and-patterns.png)

---

### Docker

1. Image
1. Container

    ---
1. Volume
1. Network

    ---
1. Compose
1. Docker File

---

## Project Initialization

1. Docker Compose file

    ---
1. [Configuration](https://docs.nestjs.com/techniques/configuration)
1. [Typeorm](https://docs.nestjs.com/recipes/sql-typeorm)
1. [Serialization](https://docs.nestjs.com/techniques/serialization)
1. [Authentication](https://docs.nestjs.com/security/authentication)
1. [Authorization](https://docs.nestjs.com/security/authorization)

---

### Tutorial

create a project

```bash
# new a project called `pcp`
$ nest new pcp
```

docker

```bash
# create a file for the docker compose
$ touch docker-compose.yml

# create and start containers
$ docker compose up -d
```

---

using the NestJS [Configuration](https://docs.nestjs.com/techniques/configuration) module

```bash
## add dependencies
$ npm i --save @nestjs/config
```
