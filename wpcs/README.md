# wpcs
> WordPress Coding Standard with Docker

[![Docker Pulls](https://img.shields.io/docker/pulls/ivankristianto/wpcs.svg?maxAge=2592000)]()

## Base Coding Standard
[WordPress/WordPress-Coding-Standards](https://github.com/WordPress/WordPress-Coding-Standards)

### Installation
    docker pull ivankristianto/wpcs

### Usage

    docker run --rm -v "$PWD:/app" \
      ivankristianto/wpcs:latest \
      phpcs .

### Libraries Added

* PHP_CodeSniffer
* WordPress/WordPress-Coding-Standards

Enjoy !!

