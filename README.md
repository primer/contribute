# Contribution guidelines

Contribution guidelines for the Primer Design System.

## Local development

```shell
# Clone the repository
git clone https://github.com/primer/contribute.git
cd contribute

# Install dependencies
yarn

# Start local development server
yarn start
```

## Deployment

We deploy this site using [Vercel](https://vercel.com). Every push to a branch other than `main` will deploy to a URL unique to the branch name. Merges to `main` will automatically deploy the site to production.
