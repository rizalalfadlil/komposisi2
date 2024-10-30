This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### 1. Back End
```bash
cd backend

#install dependency
npm i

#create database
npx sequelize-cli db:create

#migrate database
npx sequelize-cli db:migrate

#seed database
npx sequelize-cli db:seed:all

#run server
npm start

```
### 2. Front end
```bash
#install dependency
npm i

#run app
npm run dev
```