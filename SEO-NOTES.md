# SEO notes

## IndexNow

Used to ping Bing and other IndexNow engines when new pages go live. No account is required.

- **host:** `good1uck.github.io`
- **key:** `1038b95573efc13630b5d31aee50da39`
- **keyLocation:** `https://good1uck.github.io/looty-bay/1038b95573efc13630b5d31aee50da39.txt`
- **endpoint:** `https://api.indexnow.org/indexnow`

The key file is a passthrough copy from `src/1038b95573efc13630b5d31aee50da39.txt` and must be served at the keyLocation URL with the key as its only content.

To submit URLs, POST JSON:

```json
{
  "host": "good1uck.github.io",
  "key": "1038b95573efc13630b5d31aee50da39",
  "keyLocation": "https://good1uck.github.io/looty-bay/1038b95573efc13630b5d31aee50da39.txt",
  "urlList": [
    "https://good1uck.github.io/looty-bay/en/guides/example/"
  ]
}
```

A `200` or `202` response is success. Submit only new or updated page URLs in the nightly routine, not the whole sitemap every night.

robots.txt already points to `https://good1uck.github.io/looty-bay/sitemap.xml`.
