
# React Responsive Viewer
A simple way to load up a proxied whitelist (to bypass x-frame-options) of hosts into multiple iframes for testing responsive layouts. Also a fun trial with react.js
## Installation
`npm install`
## Usage
1. `npm run dev`
2. Load up a simple http server (I used [node-static](https://github.com/cloudhead/node-static))
3. `cd src/client/public`
4. `static .`
5. Visit `http://localhost:8080`
6. Adjust height to your liking
7. Browse a different host/page that you've whitelisted
