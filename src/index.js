import 'babel-core/polyfill';
import 'whatwg-fetch';

import head   from 'reveal.js/lib/js/head.min';
import Reveal from 'reveal.js/js/reveal';

import loadDataSrcSVG      from './js/data-src-svg';
import loadPrintCSS        from './js/print-css';
import loadVideoFragment   from './js/video-fragment';

var prefix = 'node_modules/reveal.js/plugin';

document.addEventListener('DOMContentLoaded', (event) => {
  window.Reveal = Reveal; // plugins need that

  // see: https://github.com/hakimel/reveal.js#configuration
  Reveal.initialize({

  // The "normal" size of the presentation, aspect ratio will be preserved
  // when the presentation is scaled to fit different resolutions. Can be
  // specified using percentage units.
  width: 960,
  height: 700,

  // Factor of the display size that should remain empty around the content
  margin: 0.05,

  // Bounds for smallest/largest possible scale to apply to content
  minScale: 0.2,
  maxScale: 1.5,

  // Display controls in the bottom right corner
  controls: false,

  // Display a presentation progress bar
  progress: true,

  // Display the page number of the current slide
  // Slide number formatting can be configured using these variables:
  //  h: current slide's horizontal index
  //  v: current slide's vertical index
  //  c: current slide index (flattened)
  //  t: total number of slides (flattened)
  slideNumber: 'c/t',

  // Push each slide change to the browser history
  history: true,

  // Enable keyboard shortcuts for navigation
  keyboard: true,

  // Enable the slide overview mode
  overview: true,

  // Vertical centering of slides
  center: false,

  // Enables touch navigation on devices with touch input
  touch: true,

  // Loop the presentation
  loop: true,

  // Change the presentation direction to be RTL
  rtl: false,

  // Turns fragments on and off globally
  fragments: true,

  // Flags if the presentation is running in an embedded mode,
  // i.e. contained within a limited portion of the screen
  embedded: false,

  // Flags if we should show a help overlay when the questionmark
  // key is pressed
  help: true,

  // Number of milliseconds between automatically proceeding to the
  // next slide, disabled when set to 0, this value can be overwritten
  // by using a data-autoslide attribute on your slides
  autoSlide: 0,

  // Stop auto-sliding after user input
  autoSlideStoppable: true,

  // Enable slide navigation via mouse wheel
  mouseWheel: false,

  // Hides the address bar on mobile devices
  hideAddressBar: true,

  // Opens links in an iframe preview overlay
  previewLinks: false,

  // Transition style
  transition: 'slide', // none/fade/slide/convex/concave/zoom

  // Transition speed
  transitionSpeed: 'default', // default/fast/slow

  // Transition style for full page slide backgrounds
  backgroundTransition: 'default', // none/fade/slide/convex/concave/zoom

  // Number of slides away from the current that are visible
  viewDistance: 10,

  // Parallax background image
  parallaxBackgroundImage: '', // e.g. "'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg'"

  // Parallax background size
  parallaxBackgroundSize: '', // CSS syntax, e.g. "2100px 900px"

  // Amount to move parallax background (horizontal and vertical) on slide change
  // Number, e.g. 100
  parallaxBackgroundHorizontal: '',
  parallaxBackgroundVertical: '',

  // Optional reveal.js plugins
  dependencies: [
    //{ src: `${prefix}/markdown/marked.js`, condition: () => !!document.querySelector('[data-markdown]') },
    //{ src: `${prefix}/markdown/markdown.js`, condition: () => !!document.querySelector('[data-markdown]') },
    //{ src: `${prefix}/highlight/highlight.js`, async: true, condition: () => !!document.querySelector('pre code'), callback: () => hljs.initHighlightingOnLoad(//) },
    //{ src: `${prefix}/zoom-js/zoom.js`, async: true },
    //{ src: `${prefix}/notes/notes.js`, async: true },
    //{ src: `${prefix}/math/math.js`, async: true },
    ],
  });

  loadDataSrcSVG();
  loadPrintCSS();
  loadVideoFragment();

  // insert code here
});
