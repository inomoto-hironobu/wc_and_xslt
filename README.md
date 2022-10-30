このリポジトリはWeb ComponentsとXSLTの相性を探るために活用いただけます。  
```
git clone https://github.com/inomoto-hironobu/wc_and_xslt.git
```
としたあと、それぞれトップから
```
cd first
xslt3 -t -xsl:ogp.xsl -export:ogp.sef.json -nogo
```
```
cd second
xslt3 -t -xsl:ogp.xsl -export:ogp.sef.json -nogo
```
とすればSEFが作られます。そして
```
npm run server
```
と打てばサーバーが立ち上がります。
`localhost:8080/first/sample.xhtml`と`localhost:8080/second/sample.xhtml`で確認ができます。