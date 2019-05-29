let staticContent = [
  '/',
  '/index.html?launcher=true',
  '/js/worker.js',
  '/js/main.js',
  '/manifest.json',
  '/favicon.ico',
  '/img/icon-48.png',
  '/img/icon-96.png',
  '/img/icon-144.png',
  '/img/icon-196.png',
];

let version = require

if (process.env.Node_ENV === 'development') {
  staticContent = staticContent.concat([
    '/vendor/mui.js',
    '/vendor/mui.css',
    '/css/style.css',
    '/js/critical.js',
    '/svg/search.svg',
    '/svg/search-active.svg',
    '/svg/ic_arrow_back_36px.svg',
  ]);
}

self.addEventListener('install', function (event) {
  console.log('Install');
});