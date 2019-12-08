import React from "react";
import {Helmet} from "react-helmet";

export default class Application extends React.Component {
    render() {
        return (
            <div className="application">
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

                    <script
                        async
                        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

                  
{/* typed js */}
<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.11"></script>


                </Helmet>
            </div>
        );
    }
};