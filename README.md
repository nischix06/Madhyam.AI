This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Netlify environment configuration

Set `MONGODB_URI` in **Site configuration → Environment variables** using your existing database connection string. Make it available to Functions in every deploy context that needs database access, then trigger a new deploy. Do not commit connection strings or `.env.local`; that file is only for local development.

Database helpers validate configuration when a connection is requested, so importing API routes during a build does not require database credentials. A successful build does not verify runtime database connectivity; database-backed pages and APIs still require a valid URI and network access to the database.

Also configure the variables for the features you use:

| Feature | Environment variables |
| --- | --- |
| Authentication | `NEXTAUTH_SECRET`, `NEXTAUTH_URL` (the deployed site URL) |
| Cloudinary uploads | `CLOUDINARY_URL`, or `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, and `CLOUDINARY_API_SECRET` |
| Razorpay payments | `RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET`, `RAZORPAY_WEBHOOK_SECRET` |
| GitHub API access | `GITHUB_TOKEN` |
| GitHub App integration | `GITHUB_APP_ID`, `GITHUB_APP_PRIVATE_KEY`, `GITHUB_APP_INSTALLATION_ID`, `GITHUB_WEBHOOK_SECRET` |
| GitHub device login | `GITHUB_CLIENT_ID` (or `NEXT_PUBLIC_GITHUB_CLIENT_ID`) |

Keep secrets in server-side variables. For GitHub App deployments, use `GITHUB_APP_PRIVATE_KEY` rather than a path to a private key file on a local machine.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
