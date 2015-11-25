# Reveal.js Template

Strongly inspired from https://github.com/flying-sheep/revealjs-template.

## Usage

Locally :

```sh
npm install -g gulp
npm install
gulp build
gulp
```


Using docker :

```sh
pip install docker-compose  # add sudo if needed
docker-compose up --force-recreate
```

Slides are available at http://localhost:8000.

- Modifications in `index.html`, `data/` and `src/` will automatically trigger `build/` update.
- Upon modifications, slides on your browser should automatically reload.
