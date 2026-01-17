// Providers:

var REG_NONE = NewRegistrar("none"); // No registrar.
var DSP_DIGITALOCEAN = NewDnsProvider("digitalocean");

// Domains:

D(
  "openstreetmap.be",

  REG_NONE,
  DnsProvider(DSP_DIGITALOCEAN),

  DefaultTTL(3600),

  A("@", "185.199.108.153"), // GitHub Pages
  A("@", "185.199.109.153"), // GitHub Pages
  A("@", "185.199.110.153"), // GitHub Pages
  A("@", "185.199.111.153"), // GitHub Pages

  CNAME("tile", "tile.osm.be.", TTL(43200)),
  CNAME("www", "web.fastmail.com.", TTL(43200)),

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
  DnsProvider(DSP_DIGITALOCEAN),

  DefaultTTL(3600),

  A("@", "103.168.172.37"),
  A("@", "103.168.172.52"),

  A("docker", "146.190.224.8"),
  A("tile", "142.93.238.240"),

  A("hiking", "79.99.201.128"),

  CNAME("buildings", "grb.byteless.net.", TTL(43200)),
  CNAME("community", "jbelien.github.io.", TTL(43200)),
  CNAME("cyclofix", "osmbe.github.io.", TTL(43200)),
  CNAME("historical", "osmbe.github.io.", TTL(43200)),
  CNAME("jekyll", "osmbe.github.io.", TTL(43200)),
  CNAME("mapcomplete", "mapcomplete.github.io.", TTL(43200)),
  CNAME("play", "osmbe.github.io.", TTL(43200)),
  CNAME("report", "jbelien.github.io.", TTL(43200)),
  CNAME("welcome", "2-x-rai4ihq-b62c5e7ddypzg.fr-3.platformsh.site.", TTL(43200)),
  CNAME("www", "web.fastmail.com.", TTL(43200)),

  CNAME("mailing", "docker.osm.be.", TTL(43200)),
  CNAME("new.buildings", "docker.osm.be.", TTL(43200)),
  CNAME("proxy", "docker.osm.be.", TTL(43200)),
  CNAME("status", "docker.osm.be.", TTL(43200)),
  CNAME("uptime", "docker.osm.be.", TTL(43200)),

  // Redirections
  CNAME("members", "docker.osm.be.", TTL(43200)),

  // Fastmail - https://www.fastmail.help/hc/en-us/articles/1500000280261
  MX("@", 10, "in1-smtp.messagingengine.com."),
  MX("@", 20, "in2-smtp.messagingengine.com."),
  TXT("@", "v=spf1 include:spf.messagingengine.com include:_spf.google.com ?all"),
  TXT("_dmarc", "v=DMARC1; p=none;"),
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
