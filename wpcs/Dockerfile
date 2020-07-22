FROM php:7.4-cli

WORKDIR /tmp

RUN apt-get update -y \
	&& apt-get install -y wget unzip \
	&& rm -rf /var/lib/apt/lists/*

RUN wget https://squizlabs.github.io/PHP_CodeSniffer/phpcs.phar \
	&& chmod +x phpcs.phar \
	&& mv phpcs.phar /usr/local/bin/phpcs

RUN wget https://github.com/WordPress/WordPress-Coding-Standards/archive/master.zip \
	&& unzip master.zip \
	&& rm master.zip \
	&& mv WordPress-Coding-Standards-master wpcs \
	&& phpcs --config-set installed_paths `pwd`/wpcs \
	&& phpcs --config-set default_standard WordPress

USER www-data

WORKDIR /app
