import React from "react";
import NTfound from "./pages/notfound/index";

const NTfound404 = () => {
    return <NTfound />;
};

NTfound404.getLayout = function getLayout(pages) {
    return pages;
};

export default NTfound404;
