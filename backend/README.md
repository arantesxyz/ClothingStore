# ClothingStore Backend

REST API for ClothingStore app

## Stack

- [TypeScript](https://www.typescriptlang.org/)
- [EsLint](https://eslint.org/)
- [Express](https://expressjs.com/)
- [TypeORM](https://typeorm.io/#/)
- [JWT](https://jwt.io/)
- [bCrypt](https://www.npmjs.com/package/bcrypt)
<!-- - [jest](https://jestjs.io/) -->
- DockerFile and more...

## Installation

Clone this repo and use the package manager [yarn](https://yarnpkg.com/) to install the dependencies.

```bash
yarn
```

## Building and running with docker
You might wanna run migrations first. After installing the repo run:
```
yarn typeorm migration:run
```
### Building
```
docker build -t <tagName> .
```

### Running
```
docker run -d \
-e DATABASE_CONNECTION=mysql \
-e DATABASE_HOST=localhost \
-e DATABASE_PORT=3306 \
-e DATABASE_USERNAME=test \
-e DATABASE_PASSWORD=test \
-e DATABASE_DATABASE=test \
-e JWT_SECRET=secret \
-p 3000:3000 \
<tagName>
```

Replace `<tagname>` with a name for the docker image.

## Scripts

- dev   -> Starts the app in development mode
- typeorm   -> Run typeorm using ts-node
<!-- - test  -> Run the tests using [jest](https://jestjs.io/). -->

## Contributing
We do not accept PR's, feel free to open an issue.

## License
[MIT](https://choosealicense.com/licenses/mit/)
