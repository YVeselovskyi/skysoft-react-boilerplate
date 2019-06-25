# Create React App Skysoft's boilerplate.

## Navigation
### Project config
- [.env file](#env)
- [routes config](#routes)
- [axios config](#axios)
- [axios interceptors](#interceptors)
### Project 
- [project structure](#project)
- [build project](#build)
- [deploy application](#deploy)
---
## <a name="env"></a>.env file
```
PROXY=By default, the development web server will attempt to listen on port 3000 or prompt you to attempt the next available port.

HTTPS=When set to true, Create React App will run the development server in https mode.

PUBLIC_URL=Create React App assumes your application is hosted at the serving web server's root or a subpath as specified in package.json (homepage).

```
[For more information read docs.](https://facebook.github.io/create-react-app/docs/advanced-configuration)

## <a name="routes"></a>Routes config
```javascript
const routes = {
  home: '/', // Home component.
  cars: '/cars', // All cars component.
  car: { // Specific car.
    red: '/car/red', // like red car.
    green: '/car/green', // like green car.
  },
  otherCar: '/car/:id', // other cars.
};
```

## <a name="axios"></a>Axios config.

```javascript
axios.create({
  // `url` is the server URL that will be used for the request
  url: '/user',

  // `baseURL` will be prepended to `url` unless `url` is absolute.
  // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
  // to methods of that instance.
  baseURL: 'https://some-domain.com/api/',

  // `transformRequest` allows changes to the request data before it is sent to the server
  // This is only applicable for request methods 'PUT', 'POST', 'PATCH' and 'DELETE'
  // The last function in the array must return a string or an instance of Buffer, ArrayBuffer,
  // FormData or Stream
  // You may modify the headers object.
  transformRequest: [function (data, headers) {
    // Do whatever you want to transform the data

    return data;
  }],

  // `transformResponse` allows changes to the response data to be made before
  // it is passed to then/catch
  transformResponse: [function (data) {
    // Do whatever you want to transform the data

    return data;
  }],

  // `headers` are custom headers to be sent
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // `params` are the URL parameters to be sent with the request
  // Must be a plain object or a URLSearchParams object
  params: {
    ID: 12345
  },

  // `paramsSerializer` is an optional function in charge of serializing `params`
  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  paramsSerializer: function (params) {
    return Qs.stringify(params, {arrayFormat: 'brackets'})
  },

  // `timeout` specifies the number of milliseconds before the request times out.
  // If the request takes longer than `timeout`, the request will be aborted.
  timeout: 1000, // default is `0` (no timeout)

  // `withCredentials` indicates whether or not cross-site Access-Control requests
  // should be made using credentials
  withCredentials: false, // default

  // `adapter` allows custom handling of requests which makes testing easier.
  // Return a promise and supply a valid response (see lib/adapters/README.md).
  adapter: function (config) {
    /* ... */
  },

  // `auth` indicates that HTTP Basic auth should be used, and supplies credentials.
  // This will set an `Authorization` header, overwriting any existing
  // `Authorization` custom headers you have set using `headers`.
  // Please note that only HTTP Basic auth is configurable through this parameter.
  // For Bearer tokens and such, use `Authorization` custom headers instead.
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },

  // `responseType` indicates the type of data that the server will respond with
  // options are: 'arraybuffer', 'document', 'json', 'text', 'stream'
  //   browser only: 'blob'
  responseType: 'json', // default

  // `responseEncoding` indicates encoding to use for decoding responses
  // Note: Ignored for `responseType` of 'stream' or client-side requests
  responseEncoding: 'utf8', // default

  // `xsrfCookieName` is the name of the cookie to use as a value for xsrf token
  xsrfCookieName: 'XSRF-TOKEN', // default

  // `xsrfHeaderName` is the name of the http header that carries the xsrf token value
  xsrfHeaderName: 'X-XSRF-TOKEN', // default

  // `onUploadProgress` allows handling of progress events for uploads
  onUploadProgress: function (progressEvent) {
    // Do whatever you want with the native progress event
  },

  // `onDownloadProgress` allows handling of progress events for downloads
  onDownloadProgress: function (progressEvent) {
    // Do whatever you want with the native progress event
  },

  // `maxContentLength` defines the max size of the http response content in bytes allowed
  maxContentLength: 2000,

  // `validateStatus` defines whether to resolve or reject the promise for a given
  // HTTP response status code. If `validateStatus` returns `true` (or is set to `null`
  // or `undefined`), the promise will be resolved; otherwise, the promise will be
  // rejected.
  validateStatus: function (status) {
    return status >= 200 && status < 300; // default
  },

  // `maxRedirects` defines the maximum number of redirects to follow in node.js.
  // If set to 0, no redirects will be followed.
  maxRedirects: 5, // default

  // `socketPath` defines a UNIX Socket to be used in node.js.
  // e.g. '/var/run/docker.sock' to send requests to the docker daemon.
  // Only either `socketPath` or `proxy` can be specified.
  // If both are specified, `socketPath` is used.
  socketPath: null, // default

  // `httpAgent` and `httpsAgent` define a custom agent to be used when performing http
  // and https requests, respectively, in node.js. This allows options to be added like
  // `keepAlive` that are not enabled by default.
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // 'proxy' defines the hostname and port of the proxy server.
  // You can also define your proxy using the conventional `http_proxy` and
  // `https_proxy` environment variables. If you are using environment variables
  // for your proxy configuration, you can also define a `no_proxy` environment
  // variable as a comma-separated list of domains that should not be proxied.
  // Use `false` to disable proxies, ignoring environment variables.
  // `auth` indicates that HTTP Basic auth should be used to connect to the proxy, and
  // supplies credentials.
  // This will set an `Proxy-Authorization` header, overwriting any existing
  // `Proxy-Authorization` custom headers you have set using `headers`.
  proxy: {
    host: '127.0.0.1',
    port: 9000,
    auth: {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  },

  // `cancelToken` specifies a cancel token that can be used to cancel the request
  // (see Cancellation section below for details)
  cancelToken: new CancelToken(function (cancel) {
  })
})
```

## <a name="interceptors"></a>Axios interceptors
```javascript
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });
```
## For more details about axios [Read this](https://github.com/axios/axios).

## <a name="project"></a>Project structure.

## <a name="build"></a>Creating a Production Build.

```npm run``` build creates a ```build``` directory with a production build of your app. Inside the ```build/static``` directory will be your JavaScript and CSS files. Each filename inside of ```build/static``` will contain a unique hash of the file contents. This hash in the file name enables [long term caching techniques](#static).

When running a production build of freshly created Create React App application, there are a number of ```.js``` files (called chunks) that are generated and placed in the ```build/static/js``` directory:

```main.[hash].chunk.js```

- This is your application code. ```App.js```, etc.

```[number].[hash].chunk.js```

- These files can either be vendor code, or [code splitting chunks](https://facebook.github.io/create-react-app/docs/code-splitting). Vendor code includes modules that you've imported from within node_modules. One of the potential advantages with splitting your vendor and application code is to enable [long term caching techniques](https://facebook.github.io/create-react-app/docs/production-build#static-file-caching) to improve application loading performance. Since vendor code tends to change less often than the actual application code, the browser will be able to cache them separately, and won't re-download them each time the app code changes.

```runtime~main.[hash].js```

- This is a small chunk of [webpack runtime](https://webpack.js.org/configuration/optimization/#optimization-runtimechunk) logic which is used to load and run your application. The contents of this will be embedded in your ```build/index.html``` file by default to save an additional network request. You can opt out of this by specifying ```INLINE_RUNTIME_CHUNK=false``` as documented in our [advanced configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration), which will load this chunk instead of embedding it in your ```index.html```.

If you're using [code splitting](https://facebook.github.io/create-react-app/docs/code-splitting) to split up your application, this will create additional chunks in the ```build/static``` folder as well.

## <a name="static"></a>Static File Caching

Each file inside of the ```build/static``` directory will have a unique hash appended to the filename that is generated based on the contents of the file, which allows you to use [aggressive caching techniques](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching#invalidating_and_updating_cached_responses) to avoid the browser re-downloading your assets if the file contents haven't changed. If the contents of a file changes in a subsequent build, the filename hash that is generated will be different.

To deliver the best performance to your users, it's best practice to specify a ```Cache-Control``` header for ```index.html```, as well as the files within ```build/static```. This header allows you to control the length of time that the browser as well as CDNs will cache your static assets. If you aren't familiar with what ```Cache-Control``` does, see [this article](https://jakearchibald.com/2016/caching-best-practices/) for a great introduction.

Using ```Cache-Control: max-age=31536000``` for your ```build/static assets```, and ```Cache-Control: no-cache``` for everything else is a safe and effective starting point that ensures your user's browser will always check for an updated ```index.html``` file, and will cache all of the ```build/static``` files for one year. Note that you can use the one year expiration on ```build/static``` safely because the file contents hash is embedded into the filename.

## <a name="deploy"></a>Deployment.

```npm run build``` creates a build directory with a production build of your app. Set up your favorite HTTP server so that a visitor to your site is served ```index.html```, and requests to static paths like ```/static/js/main.<hash>.js``` are served with the contents of the ```/static/js/main.<hash>.js``` file. For more information see the [production build](#build) section.

## AWS Amplify.

The AWS Amplify Console provides continuous deployment and hosting for modern web apps (single page apps and static site generators) with serverless backends. The Amplify Console offers globally available CDNs, easy custom domain setup, feature branch deployments, and password protection.

- Login to the Amplify Console [here](https://console.aws.amazon.com/amplify/home).
- Connect your Create React App repo and pick a branch. If you're looking for a Create React App+Amplify starter, try the [create-react-app-auth-amplify starter](https://github.com/swaminator/create-react-app-auth-amplify) that demonstrates setting up auth in 10 minutes with Create React App.
- The Amplify Console automatically detects the build settings. Choose Next.
- Choose Save and deploy.

If the build succeeds, the app is deployed and hosted on a global CDN with an amplifyapp.com domain. You can now continuously deploy changes to your frontend or backend. Continuous deployment allows developers to deploy updates to their frontend and backend on every code commit to their Git repository.

More information about deploy you can read on this [page](https://facebook.github.io/create-react-app/docs/deployment#aws-amplify-http-consoleamplifyaws)
