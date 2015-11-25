# Reveal.js Template

Strongly inspired from https://github.com/flying-sheep/revealjs-template.

## Usage

Clone it :

```sh
git clone https://github.com/hadim/revealjs-template.git
```

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

## Improvements

Some ameliorations has been made over the original Reveal.js.

- svg can contains fragments and will be integrated inside others fragments flow (use `class=fragment` and `data-fragment-index=1`). See [src/js/data-src-svg.js](src/js/data-src-svg.js).

- video with fragment class will be integrated in the fragments flow. See [src/js/video-fragment.js](src/js/video-fragment.js).

- use `bash build-pdf.sh` to generated a pdf file of your slides using Docker and [Decktape](https://github.com/astefanutti/decktape) (still experimental).

## Licence

This project is distributed under the terms of the [MIT License](https://opensource.org/licenses/MIT).
