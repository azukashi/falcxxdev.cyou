[![Project banner](https://cdn.upload.systems/uploads/dHldOBCN.webp)](https://www.falcxxdev.cyou)
![Vercel status](https://img.shields.io/github/deployments/gifaldyazkaa/falcxxdev.cyou/Production?label=Vercel&logo=vercel&logoColor=%23000&style=for-the-badge) ![Repo size](https://img.shields.io/github/repo-size/gifaldyazkaa/falcxxdev.cyou?logo=github&style=for-the-badge) ![Wakatime stats](https://wakatime.com/badge/user/aac434b8-a027-4f92-ac90-e5b2ae48b541/project/67fe8ea2-3fe3-4f1c-b837-fe554b8e01e0.svg?style=for-the-badge)

## ➡️ Development

### 🛠️ Requirements

A [node.js](https://nodejs.org) >= 18.x setup with [pnpm](https://pnpm.io) is recommended.

### 📦 Install dependencies

```sh
$ pnpm install
```

### 📝 Edit [Sanity](https://sanity.io) Project ID to yours

`nuxt.config.ts`

```ts
export default defineNuxtConfig({
    // ...
    image: {
        sanity: {
            projectId: 'your-sanity-projectId',
        },
    },
    sanity: {
        projectId: 'your-sanity-projectId',
    },
    // ...
});
```

### 🏃 Run it on development server

```sh
$ pnpm run dev
# Running on http://localhost:3000
# or
$ pnpm run dev --host=0.0.0.0
# Running on http://localhost:3000
# Running on http://192.x.x.x:3000
```

### ⚡ Optimizing for Production

```sh
# Server deployment (SSR)
$ pnpm run build

# Static deployment (Pre-rendered [No Server (/api) Route])
$ pnpm run generate
```

## 📃️ License

Source code distributed under MIT License. See [LICENSE](./LICENSE) for more information.
