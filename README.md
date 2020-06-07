This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Deploy on Heroku

1. Replace the scripts in package.json for the next:
     "scripts": {
        "dev": "next dev",
        "build": "next build",
        "start": "next start -p $PORT",
        "heroku-postbuild": "npm run build"
    },

2. Replace the next code in your .gitignore:
    node_modules/
    .next/
    *.log

3. Deploy to github your project (add - commit - push master)
4. Open your heroku panel and create a new app
5. In the panel of your new app select github connection
6. Give the permissions for use your github account
7. Find the name of the repository of your project (default master branch)
8. Press "DEPLOY BRANCH" and wait to finish the deploy process
9. Activate the "AUTOMATIC DEPLOY" option

* For update changes just repeat the step 3.
