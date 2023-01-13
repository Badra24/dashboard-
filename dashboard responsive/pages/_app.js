import { MantineProvider } from "@mantine/core";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";
import React from "react";
import Layout from "../Layout/layout";
import "../styles/demo/Demos.scss";
import "../styles/layout/layout.scss";
import { LayoutProvider } from "./../Layout/context/layoutcontext";

export default function MyApp({ Component, pageProps }) {
    return (
        <LayoutProvider>
            <Layout>
                <MantineProvider withGlobalStyles withNormalizeCSS>
                    <Component {...pageProps} />
                </MantineProvider>
            </Layout>
        </LayoutProvider>
    );
}

// if (Component.getLayout) {
//     return <LayoutProvider>{Component.getLayout(<Component {...pageProps} />)}</LayoutProvider>;
// } else {
//     return (
//         <LayoutProvider>
//             <Layout>
//                 <Component {...pageProps} />
//             </Layout>
//         </LayoutProvider>
//     );
// }
