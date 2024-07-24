# GitHub Users and Repositories API

## Overview

GitHub Users and Repositories API is a backend service to provide user informations and their respective repositories;

![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![TypeORM](https://img.shields.io/badge/TypeORM-v0.3.20-blue?style=for-the-badge)

## Features

- **Import Data from GitHub**: Import user information and their repositories from GitHub to local database.
- **Fetch User**: Fetch user information and their repositories.
- **Search Repositories**: Search repositories by part of repository name.
- **API Documentation**: Comprehensive API documentation using Swagger.
- **Testing**: Testing framework using Jest for unit tests.

## Getting Started

### Pre-requisites

- Docker (optional)
- Node.js (version 20 or higher) if you are running without Docker
- Yarn (version 1.22.22 or higher) if you are running without Docker

### Installation

1. Clone the repository:

```bash
  git clone https://github.com/EdersonDav/github_repositories_api.git
```

2. Navigate to the project directory:

```bash
  cd github_repositories_api
```

3. Set environment:

```bash
  cp .env.example .env 
```

#### With Docker

4. Run:

```bash
  docker compose up --build
```

#### Without Docker

4. Install dependencies:

```bash
  yarn install
```

5. Run:

```bash
  yarn start:dev
```

### Running Unit Tests With Docker
- To run unit tests without coverage, execute: `docker exec -it github_api yarn test`

### Running Unit Tests Without Docker

- To run unit tests without coverage, execute: `yarn test`

## Documentations and Managers

### GitHub Users and Repositories Swagger Documentation

The API documentation is available at `{base_url}:{port}/api-docs` when the application is running.

