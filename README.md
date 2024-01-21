# itty-router-without-content

Repro of issue with `withContent`.

To run:

1. Install and run dev server (uses `npm` below, but use whatever package manager you like):

```bash
git clone git@github.com:smcstewart/itty-router-without-content.git
cd itty-router-without-content
npm install
npm run dev
```

2. Open a new terminal and run `cURL` (or whatever else you like: e.g. `httpie`) and perhaps something like `jq` for a pretty-printed response:

```bash
curl -v --request POST \
  --url http://localhost:8787/ \
  --header 'Content-Type: application/json'
```

3. You will see a HTTP `500` `Internal Server Error` and the following JSON response:

```bash
{
  "status": 500,
  "error": "Unexpected end of JSON input"
}
```
