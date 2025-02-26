This shows an issue with `@workos-inc/authkit-nextjs`. The project was created with:

```sh
npx create-next-app@latest
```

Options:

```
✔ What is your project named? … next-esm-example
✔ Would you like to use TypeScript? … Yes
✔ Would you like to use ESLint? … Yes
✔ Would you like to use Tailwind CSS? … No
✔ Would you like your code inside a `src/` directory? … No
✔ Would you like to use App Router? (recommended) … No
✔ Would you like to use Turbopack for `next dev`? … No
✔ Would you like to customize the import alias (`@/*` by default)? … No
Creating a new Next.js app in /Users/eric/Code/qawolf/next-esm-example.
```

And then:

```sh
npm i @workos-inc/authkit-nextjs
```

Then added this in `pages/_app.tsx`

```ts
import { AuthKitProvider } from "@workos-inc/authkit-nextjs/components";
```

When running `npm run build`, there is an error due to Node.js code imported by browser code:

```
node:http
Module build failed: UnhandledSchemeError: Reading from "node:http" is not handled by plugins (Unhandled scheme).
Webpack supports "data:" and "file:" URIs by default.
You may need an additional plugin to handle "node:" URIs.
    at /Users/eric/Code/qawolf/next-esm-example/node_modules/next/dist/compiled/webpack/bundle5.js:28:406935
    at Hook.eval [as callAsync] (eval at create (/Users/eric/Code/qawolf/next-esm-example/node_modules/next/dist/compiled/webpack/bundle5.js:13:9218), <anonymous>:6:1)
    at Object.processResource (/Users/eric/Code/qawolf/next-esm-example/node_modules/next/dist/compiled/webpack/bundle5.js:28:406860)
    at processResource (/Users/eric/Code/qawolf/next-esm-example/node_modules/next/dist/compiled/loader-runner/LoaderRunner.js:1:5308)
    at iteratePitchingLoaders (/Users/eric/Code/qawolf/next-esm-example/node_modules/next/dist/compiled/loader-runner/LoaderRunner.js:1:4667)
    at runLoaders (/Users/eric/Code/qawolf/next-esm-example/node_modules/next/dist/compiled/loader-runner/LoaderRunner.js:1:8590)
    at NormalModule._doBuild (/Users/eric/Code/qawolf/next-esm-example/node_modules/next/dist/compiled/webpack/bundle5.js:28:406722)
    at NormalModule.build (/Users/eric/Code/qawolf/next-esm-example/node_modules/next/dist/compiled/webpack/bundle5.js:28:408735)
    at /Users/eric/Code/qawolf/next-esm-example/node_modules/next/dist/compiled/webpack/bundle5.js:28:82434
    at NormalModule.needBuild (/Users/eric/Code/qawolf/next-esm-example/node_modules/next/dist/compiled/webpack/bundle5.js:28:412676)

Import trace for requested module:
node:http
./node_modules/@workos-inc/node/lib/common/net/node-client.js
./node_modules/@workos-inc/node/lib/index.js
./node_modules/@workos-inc/authkit-nextjs/dist/esm/workos.js
./node_modules/@workos-inc/authkit-nextjs/dist/esm/actions.js
./node_modules/@workos-inc/authkit-nextjs/dist/esm/components/impersonation.js
./node_modules/@workos-inc/authkit-nextjs/dist/esm/components/index.js
```
