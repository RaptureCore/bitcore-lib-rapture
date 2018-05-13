Bitcore-RAPTURE Library
=======

A pure and powerful JavaScript RAPTURE library.

## Principles

RAPTURE is a powerful new peer-to-peer platform for the next generation of financial technology. The decentralized nature of the RAPTURE network allows for highly resilient RAPTURE infrastructure, and the developer community needs reliable, open-source tools to implement rapture apps and services.

## Get Started

```
npm install bitcore-lib-rapture
```

```
bower install bitcore-lib-rapture
```

## Documentation

The complete docs are hosted here: [bitcore documentation](http://bitcore.io/guide/). There's also a [bitcore API reference](http://bitcore.io/api/) available generated from the JSDocs of the project, where you'll find low-level details on each bitcore utility.

- [Read the Developer Guide](http://bitcore.io/guide/)
- [Read the API Reference](http://bitcore.io/api/)

To get community assistance and ask for help with implementation questions, please use our [community forums](https://forum.bitcore.io/).

## Examples

* [Generate a random address](https://github.com/rapturepay/bitcore-lib-rapture/blob/master/docs/examples.md#generate-a-random-address)
* [Generate a address from a SHA256 hash](https://github.com/rapturepay/bitcore-lib-rapture/blob/master/docs/examples.md#generate-a-address-from-a-sha256-hash)
* [Import an address via WIF](https://github.com/rapturepay/bitcore-lib-rapture/blob/master/docs/examples.md#import-an-address-via-wif)
* [Create a Transaction](https://github.com/rapturepay/bitcore-lib-rapture/blob/master/docs/examples.md#create-a-transaction)
* [Sign a Rapture message](https://github.com/rapturepay/bitcore-lib-rapture/blob/master/docs/examples.md#sign-a-bitcoin-message)
* [Verify a Rapture message](https://github.com/rapturepay/bitcore-lib-rapture/blob/master/docs/examples.md#verify-a-bitcoin-message)
* [Create an OP RETURN transaction](https://github.com/rapturepay/bitcore-lib-rapture/blob/master/docs/examples.md#create-an-op-return-transaction)
* [Create a 2-of-3 multisig P2SH address](https://github.com/rapturepay/bitcore-lib-rapture/blob/master/docs/examples.md#create-a-2-of-3-multisig-p2sh-address)
* [Spend from a 2-of-2 multisig P2SH address](https://github.com/rapturepay/bitcore-lib-rapture/blob/master/docs/examples.md#spend-from-a-2-of-2-multisig-p2sh-address)


## Security

We're using Bitcore in production, as are [many others](http://bitcore.io#projects), but please use common sense when doing anything related to finances! We take no responsibility for your implementation decisions.

If you find a security issue, please email security@bitpay.com.

## Contributing

Please send pull requests for bug fixes, code optimization, and ideas for improvement.

## Building the Browser Bundle

To build a bitcore-lib-rapture full bundle for the browser:

```sh
gulp browser
```

This will generate files named `bitcore-lib-rapture.js` and `bitcore-lib-rapture.min.js`.

You can also use our pre-generated files, provided for each release along with a PGP signature by one of the project's maintainers.

## Development & Tests

```sh
git clone https://github.com/RaptureCore/rapturecore-lib
cd rapturecore-lib
npm install
```

Run all the tests:

```sh
gulp test
```

You can also run just the Node.js tests with `gulp test:node`, just the browser tests with `gulp test:browser`
or create a test coverage report (you can open `coverage/lcov-report/index.html` to visualize it) with `gulp coverage`.

## License

Code released under [the MIT license](https://github.com/RaptureCore/rapturecore-lib/blob/master/LICENSE).

Copyright 2013-2018 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.
