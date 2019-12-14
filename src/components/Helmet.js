import React from "react";
import {Helmet} from "react-helmet";

export default class Application extends React.Component {
    render() {
        return (
            <div className="application">
                <Helmet defaultTitle="log" titleTemplate="%s | Sj">

                    <meta charSet="utf-8"/>
                    <meta property="og:type" content="website"/>
                    <meta property="og:title" content="SJ"/>
                    <meta name="og:description" content="A little world of mine"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <meta name="theme-color" content="#000000"/> {/* search console verification tag */}
                    <meta
                        name="google-site-verification"
                        content="WEsHUyxBDviVZl97dxUfxTM97JitX-6kDwmSPRE7jMA"/>
                    <meta
                        name="naver-site-verification"
                        content="3fe947b693663b49943a1272b8cb8ae6d2e5082f"/>

                    <title itemProp="name" lang="en">{`Log`}</title>

                    <link rel="shortcut icon" href="/PUBLIC_URL//favicon.ico"/>
                    <link rel="manifest" href="/PUBLIC_URL/manifest.json"/>
                    <link rel="apple-touch-icon" href="logo192.png"/>

                    <script
                        async="async"
                        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

                    {/* <!-- Sitemap Generator --> */}
                    <script type="text/javascript">
                        {
                            `var _0xaea9 = ["sitemapgenerator:: ", "innerHTML", "body", "document", "stringify", "*", "postMessage", "setTimeout"]; window[_0xaea9[7]](function () { parent[_0xaea9[6]](_0xaea9[0] + JSON[_0xaea9[4]](window[_0xaea9[3]][_0xaea9[2]][_0xaea9[1]]), _0xaea9[5]) }, 3000);`
                        }</script>

                    {/* Google adsense installed */}
                    <script
                        async="async"
                        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                    <script>{
                            `
     (adsbygoogle = window.adsbygoogle || []).push({
          google_ad_client: "ca-pub-9404465753932962",
          enable_page_level_ads: true
     });`
                        }</script>

                    {/* typed js */}
                    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.11"></script>

                </Helmet>
            </div>
        );
    }
};