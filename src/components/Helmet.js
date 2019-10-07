import React from "react";
import {Helmet} from "react-helmet";


export default class Application extends React.Component {
    render() {
        return (
            <div className="application">
                <Helmet defaultTitle="Sj log" titleTemplate="%s | Sj">

                    <meta charSet="utf-8"/>
                    <meta name="description" content="Sj Blog Article"/>
                    <meta property="og:type" content="article"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <meta name="theme-color" content="#000000"/>

                    <title itemProp="name" lang="en">{`Sj Log`}</title>

                    <link rel="shortcut icon" href="/PUBLIC_URL//favicon.ico"/>
                    <link rel="manifest" href="/PUBLIC_URL/manifest.json"/>
                    <link rel="apple-touch-icon" href="logo192.png"/>
                    <link rel="canonical" href="http://mysite.com/example"/>
                </Helmet>
            </div>
        );
    }
};
