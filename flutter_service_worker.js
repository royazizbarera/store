'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4792407e06dac1c9555b8b74929687a8",
"assets/AssetManifest.json": "d396c7e8c213b4d08da726e4ee0f16cd",
"assets/assets/images/background.png": "97bcdff34666d1b3e9ccbac7b1a58d95",
"assets/assets/images/cello/1.jpg": "2ed49e8d21e3911f7b96d204977cfae5",
"assets/assets/images/cello/10.jpg": "9442a89fa3a66606338f6d05ac22c76c",
"assets/assets/images/cello/11.jpg": "9453c1ed54f70c295826067841dc678e",
"assets/assets/images/cello/12.jpg": "279542e1ce532165dd58d8f064516944",
"assets/assets/images/cello/13.jpg": "129013529b8e5fae5f0ca25686f6caa1",
"assets/assets/images/cello/14.jpg": "a6ade633a6d549a2a0f8dcebf9ca1cf9",
"assets/assets/images/cello/15.jpg": "a6f9b868de1cf390203e36f2ea593def",
"assets/assets/images/cello/16.jpg": "ac3e426cf86824c381dd80dace932d89",
"assets/assets/images/cello/17.jpg": "af17317feb40592dbad005141282fbc7",
"assets/assets/images/cello/18.jpg": "bd8754a8c39aac848f99527f698b9a72",
"assets/assets/images/cello/19.jpg": "c3de6dc2613ad282a9ab1f606924efa7",
"assets/assets/images/cello/2.jpg": "5e8541a8e1cbaa105c08f167378833aa",
"assets/assets/images/cello/20.jpg": "d5b19cb32bf8652fd53164e41be5a0da",
"assets/assets/images/cello/21.jpg": "e52d969c48e785c0283277623535d411",
"assets/assets/images/cello/22.jpg": "f0dcdda4984a25996624171225175000",
"assets/assets/images/cello/23.jpg": "f2f95bc76864b884a269f2f7ce882a43",
"assets/assets/images/cello/24.jpg": "f41d4dce472dae3594daf802f85986bc",
"assets/assets/images/cello/3.jpg": "06c73a0d6fdec86b764caf1bf77d012f",
"assets/assets/images/cello/4.jpg": "7d70a654312ab1af820b785515d46854",
"assets/assets/images/cello/5.jpg": "7f0667c4a6ee4472251cee934bd783f3",
"assets/assets/images/cello/6.jpg": "63b4e8ddcc9f382c5e0051db8c7056a3",
"assets/assets/images/cello/7.jpg": "66ab6abb45d99949472469cb5dfdac70",
"assets/assets/images/cello/8.jpg": "753de2bd4187f858f1bda18bcae3140e",
"assets/assets/images/cello/9.jpg": "2674f9dc2dc2399427c5bf7dd71b67ff",
"assets/assets/images/clock.png": "c0091febbdfb94bacb488b00f4521d5a",
"assets/assets/images/himakom.png": "b37fa23a4344028a1211dc5cba6108fc",
"assets/assets/images/img-3.png": "0589c0e7f254945c7f642cb57b723bce",
"assets/assets/images/light-1.png": "6c8ba31eab30d40b5ce914be52ca484e",
"assets/assets/images/light-2.png": "82bff49a319cf52b57967f67ead32154",
"assets/FontManifest.json": "87e04ddd47dc3c85e29dd1916b289700",
"assets/fonts/MaterialIcons-Regular.otf": "f27ccc8e6272e74176e554a58761bcd1",
"assets/NOTICES": "6b1f080fd27d2bb76dc8b37217db1cbe",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/flutterfire_ui/assets/countries.json": "8c937aac9f3b69162be779fbcd6199d2",
"assets/packages/flutterfire_ui/assets/fonts/SocialIcons.ttf": "a1207fae1578da27a062cb73d424aed9",
"assets/packages/flutterfire_ui/assets/icons/apple_dark.svg": "1b587ffd7d75c462847f8137a93f3161",
"assets/packages/flutterfire_ui/assets/icons/apple_light.svg": "2508cc7c5d302fd37edff1b87fedb594",
"assets/packages/flutterfire_ui/assets/icons/facebook.svg": "5fad3daafe7c7c5163fca56662d2738a",
"assets/packages/flutterfire_ui/assets/icons/google.svg": "3b5ceaea5e2391782d39df225a375d5d",
"assets/packages/flutterfire_ui/assets/icons/twitter.svg": "6086e2aad26effea1344c8e118520e32",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "103d71cb055ee38ae9247ea73dcfa73d",
"/": "103d71cb055ee38ae9247ea73dcfa73d",
"main.dart.js": "7c9f3a810ee2a99408655d002a98c59c",
"manifest.json": "b75c20bf47b0d2bbdc6090acf6f4379f",
"version.json": "d1eb7b5b0c3e383d240f3549a5cf58a6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
