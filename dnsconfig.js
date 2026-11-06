// Providers:

var REG_NONE = NewRegistrar("none"); // No registrar.
var DSP_INFOMANIAK = NewDnsProvider("infomaniak");

// Domains:

D(
  "openstreetmap.be",

  REG_NONE,
  DnsProvider(DSP_INFOMANIAK),

  DefaultTTL(3600),

  A("@", "185.199.108.153"), // GitHub Pages
  A("@", "185.199.109.153"), // GitHub Pages
  A("@", "185.199.110.153"), // GitHub Pages
  A("@", "185.199.111.153"), // GitHub Pages
  AAAA("@", "2606:50c0:8000::153"), // GitHub Pages
  AAAA("@", "2606:50c0:8001::153"), // GitHub Pages
  AAAA("@", "2606:50c0:8002::153"), // GitHub Pages
  AAAA("@", "2606:50c0:8003::153"), // GitHub Pages

  CNAME("www", "containers.osm.be."),

  CNAME("tile", "tile.osm.be.", TTL(43200)),

  // Fastmail - https://www.fastmail.help/hc/en-us/articles/1500000280261
  MX("@", 10, "in1-smtp.messagingengine.com."),
  MX("@", 20, "in2-smtp.messagingengine.com."),
  TXT("@", "v=spf1 include:spf.messagingengine.com ?all"),
  CNAME("fm1._domainkey", "fm1.openstreetmap.be.dkim.fmhosted.com."),
  CNAME("fm2._domainkey", "fm2.openstreetmap.be.dkim.fmhosted.com."),
  CNAME("fm3._domainkey", "fm3.openstreetmap.be.dkim.fmhosted.com."),

  TXT("_github-challenge-osmbe", "43d1e54aa1"),
  TXT("_github-pages-challenge-osmbe", "97d20329e5ae4b3afae295f72515dd")
);

D(
  "osm.be",

  REG_NONE,
  DnsProvider(DSP_INFOMANIAK),

  DefaultTTL(3600),

  A("@", "91.214.191.54"), // Redirection via containers.osm.be

  A("containers", "91.214.191.54"),
  AAAA("containers", "2001:1600:13:101::1a48"),
  A("tile", "142.93.238.240"),

  A("hiking", "79.99.201.128"),

  A("panoramax", "83.228.220.174"),
  AAAA("panoramax", "2001:1600:18:203::1d"),
  A("images.panoramax", "83.228.220.174"),
  AAAA("images.panoramax", "2001:1600:18:203::1d"),

  CNAME("buildings", "grb.byteless.net.", TTL(43200)),
  CNAME("community", "jbelien.github.io.", TTL(43200)),
  CNAME("cyclofix", "osmbe.github.io.", TTL(43200)),
  CNAME("historical", "osmbe.github.io.", TTL(43200)),
  // CNAME("jekyll", "osmbe.github.io.", TTL(43200)),
  CNAME("mapcomplete", "mapcomplete.github.io.", TTL(43200)),
  CNAME("play", "osmbe.github.io.", TTL(43200)),
  CNAME("report", "jbelien.github.io.", TTL(43200)),

  CNAME("listmonk", "containers.osm.be.", TTL(43200)),
  CNAME("new.buildings", "containers.osm.be.", TTL(43200)),
  CNAME("proxy", "containers.osm.be.", TTL(43200)),
  CNAME("status", "containers.osm.be.", TTL(43200)),
  CNAME("uptime", "containers.osm.be.", TTL(43200)),
  CNAME("welcome", "containers.osm.be.", TTL(43200)),

  // Redirections
  CNAME("members", "containers.osm.be.", TTL(43200)),
  CNAME("www", "containers.osm.be.", TTL(43200)),

  // Fastmail - https://www.fastmail.help/hc/en-us/articles/1500000280261
  // Mailjet - https://documentation.mailjet.com/hc/en-us/articles/360049641733-Authenticating-Domains-with-SPF-and-DKIM-A-Complete-Guide
  // Scaleway - https://www.scaleway.com/en/docs/transactional-email/how-to/authenticate-domain/
  MX("@", 10, "in1-smtp.messagingengine.com."),
  MX("@", 20, "in2-smtp.messagingengine.com."),
  TXT("@", "v=spf1 include:spf.messagingengine.com include:spf.mailjet.com include:_spf.tem.scaleway.com include:_spf.google.com ~all"),
  TXT("_dmarc", "v=DMARC1; p=none;"),
  TXT("cfa73439-877f-4af4-85e8-877082f1b9f0._domainkey", "v=DKIM1; h=sha256; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxkrA+BDFXfEu1zJxpSdCU+AoLF7NQFgFn9CEhh5XdsqyOcHuYxOmKoa1rsdAalkEc0fbnFt/dvKMRNaI/29NptSzuCwBLDZ3cINAyo1uFpsqxQP/YUQs8JbciyFadxzS1W3v6SbJZiQU6O50AR4xWWTqnuj9eRBC3gR5hjGyylpYaRQg9oIZG1wiPizauaiOVWlObCNDUU9tweDlO0nesYhBPtzrKGpHKTYoRE+JHN6wZh81c0SpB88jto0nxx96QHwHkT8s+nXmZRhEU4bGtFvRJWqDNbHURA0mQD8RXhy2vmnhvbEIwuONKn5x6hy78kxUNQz9BycL9+O6/R+zUQIDAQAB"),
  TXT("mailjet._domainkey", "k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtjMDwl05qMu+oRFhoDOrNPbbot/VnldM/Yc/8Oo+XkBzNZifaeuEY8q3PvhhJkG7bSnlVxb0tgr5G8Orme8mi6CES0QrqlniY2T78It4EzZuG47+5k7rahi9AaWPJxQSl64LtzM6Ijr8AUf7EeOjv7s0qFvvbzo00NKZWlvygMwDSXaU1sV2Ci6ZaXflE1KFnu20ZR4XOuAfz8pak8megMQPzQiulCnkuVqxl59GaZOLLfnXeBZnz4ewCcuSZhyVMq+2NsBXza9wQUv1NVwpOzqszx3yt1vM1isS6OcNBNzVtQea+RnBixy1dHoZLkzZDixUjaPdZiizPeBmd/CHHwIDAQAB"),
  CNAME("fm1._domainkey", "fm1.osm.be.dkim.fmhosted.com."),
  CNAME("fm2._domainkey", "fm2.osm.be.dkim.fmhosted.com."),
  CNAME("fm3._domainkey", "fm3.osm.be.dkim.fmhosted.com."),
  CNAME("k2._domainkey", "dkim2.mcsv.net."),
  CNAME("k3._domainkey", "dkim3.mcsv.net."),

  TXT("_github-challenge-osmbe", "0929d6a96c"),
  TXT("_github-pages-challenge-osmbe", "c014dd962f7ee4f0223cfb30c1755c"),
  TXT("_github-pages-challenge-jbelien.report", "dee80906a3559de895b1763b79cd8d"),
  TXT("_github-pages-challenge-jbelien.community", "3fbf8f6a3952111acd1fe1f65511a0"),
  TXT("_github-pages-challenge-mapcomplete.mapcomplete", "abc032979de3caa4ba4743f791c411")
);
