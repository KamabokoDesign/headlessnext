# Headless Next.js with Wordpress

## Table of Contents

## Download MAMP + Setup MAMP

1. [Download and Install MAMP](https://www.mamp.info/en/downloads/)
1. Start up MAMP > Start > Should open in `localhost:8888` or `localhost`

## Setup MAMP

1. Scroll down to MySQL or go to url `http://localhost:8888/phpMyAdmin/?lang=en`
1. Hit Databases > Create Database > Add a Database name > Name it the same thing as your next.js repo > Create

## Download Wordpress

1. [You can download Wordpress here](https://wordpress.org/download/#download-install)

## Setup Wordpress in MAMP

1. Applications > MAMP > htdocs > create a new folder, name it the same thing as your next.js repo
1. Open up your Wordpress download zip > open up the folder > select all files > copy > open up the MAMP wordpress htdocs folder
1. Open up your localhost at `http://localhost:8888/headlessnext` (headlessnext should be the name of your folder you put in the MAMP folder)
1. Choose your language
1. Database name should be the name of your next.js repo or the database you named in your Wordpress install
1. Username: root > Password: root > Database Host and Table Prefix keep default
1. Run the installation
1. Site title can be whatever you want
1. Username: root & Password: root
1. You in fam

## Install the Wordpress API

1. Install the `WPGraphQL` Wordpress Plugin & activate

The reason for favouring GraphQL is that it's faster than the REST API and GraphQL gives us the power and flexibility to return only the data we need. Using the WPGraphiQL plugins also allows us to both build our queries directly inside of our WordPress instance before moving them into Next.js. [Source](https://dev.to/kendalmintcode/configuring-wordpress-as-a-headless-cms-with-next-js-3p1o)

## Run the Next.js Project

```
npm run dev
```

## Add an .env file
