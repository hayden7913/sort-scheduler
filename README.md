How to use this folder
======================

The aim here is to test simple pages and make experiments with static files.
For the projects without webpack-dev-server, go to the folder and then run (if you have http-server installed through ```npm install http-server --g```:

```shell
$ http-server [pathname] [options]
```

To run locally, instead:

```shell
$ node bin/http-server [pathname] [options]
```

Then go to [the address](http://localhost:8080) and test the project!

Check the [documentation for http-server](https://github.com/indexzero/http-server).

If you are testing using webpack-dev-server instead, you do not need http-server. Check the README.md for the folder to see the correct way to run.