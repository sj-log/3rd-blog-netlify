import React from "react";
import {Helmet} from "react-helmet";

export default class Application extends React.Component {
    render() {
        return (<div className="application">
            <Helmet defaultTitle="log" titleTemplate="%s | Sj">

                <meta charSet="utf-8"/>
                <meta name="description" content="Sj Blog Article"/>
                <meta property="og:type" content="article"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="theme-color" content="#000000"/>

                <title itemProp="name" lang="en">{`Log`}</title>

                <link rel="shortcut icon" href="/PUBLIC_URL//favicon.ico"/>
                <link rel="manifest" href="/PUBLIC_URL/manifest.json"/>
                <link rel="apple-touch-icon" href="logo192.png"/>
                <link rel="canonical" href="http://mysite.com/example"/>

                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                {/* Google Search Console */}
                <meta name="google-site-verification" content="WEsHUyxBDviVZl97dxUfxTM97JitX-6kDwmSPRE7jMA" />
              
                {/* Google Adsense */}
<script>
    {` (adsbygoogle = window.adsbygoogle || []).push({
          google_ad_client: "ca-pub-9404465753932962",
          enable_page_level_ads: true
     });`}
</script>

             {/* Google Analytics */}
                <script
                    async="async"
                    src="https://www.googletagmanager.com/gtag/js?id=UA-116676814-1"></script>
                <script>
                    {
                        `  window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', 'UA-116676814-1');`
                    }</script>

            </Helmet>
        </div>
        );
    }
};