# NextAuth Product App

A full-stack product management app built with Next.js, MongoDB, and NextAuth for authentication. Easily manage products with CRUD operations and secure user login.

---

## Live Site

[View the live app here](https://nextauth-product-app.vercel.app/)

---

## Setup & Installation

1. **Clone the repository**
   ```bash
   git clonehttps://github.com/Sadek-H/NextAuth-Product-app
   cd nextauth-product-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables**

   Create a `.env.local` file in the root directory:
   ```
   DB_USER=your-mongodb-username
   DB_PASS=your-mongodb-password
   NEXTAUTH_SECRET=your-random-secret
   
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Route Summary

| Route                       | Description                        |
|-----------------------------|------------------------------------|
| `/`                         | Home page                          |
| `/products`                 | List all products                  |
| `/products/add`             | Add a new product                  |
| `/products/[id]`            | View product details               |
| `/api/products`             | Products API (GET, POST)           |
| `/api/products/[id]`        | Product API (GET, PUT, DELETE)     |
| `/api/auth/*`               | NextAuth authentication endpoints  |

---

For more details, see the [NextAuth Product App Documentation](https://github.com/your-username/nextauth-product-app-docs).
