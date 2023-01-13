import GetConfig from "next/config";
import Head from "next/head";
import { useRouter } from "next/router";
import PrimeReact from "primereact/api";
import { useEventListener, useUnmountEffect } from "primereact/hooks";
import { classNames, DomHandler } from "primereact/utils";
import React, { useContext, useEffect, useRef } from "react";
import AppConfig from "./Config";
import { LayoutContext } from "./context/layoutcontext";
import AppFooter from "./Footer";
import AppSidebar from "./SideBar";
import AppTopbar from "./Topbar";

const Layout = (props) => {
    const { layoutConfig, layoutState, setLayoutState } = useContext(LayoutContext);
    const topbarRef = useRef(null);
    const sidebarRef = useRef(null);
    const contextPath = GetConfig().publicRuntimeConfig.contextPath;
    const router = useRouter();
    const [clickMenuOutsideListener, unClickMenuOutsideListener] = useEventListener({
        type: "click",
        listener: (event) => {
            const isOutsideClicked = !(sidebarRef.current.isSameNode(event.target) || sidebarRef.current.contains(event.target) || topbarRef.current.menubutton.isSameNode(event.target) || topbarRef.current.menubutton.contains(event.target));

            if (isOutsideClicked) {
                hiddenMenu();
            }
        },
    });

    const [cliclProfileMenuOutsideListener, uncliclProfileMenuOutsideListener] = useEventListener({
        type: "click",
        listener: (event) => {
            const isOutsideClicked = !(topbarRef.current.topbarmenu.isSameNode(event.target) || topbarRef.current.topbarmenu.contains(event.target) || topbarRef.current.topbarmenubutton.isSameNode(event.target) || topbarRef.current.topbarmenubutton.contains(event.target));

            if (isOutsideClicked) {
                hiddenProfileMenu();
            }
        },
    });

    const hiddenMenu = () => {
        setLayoutState((prevLayutState) => ({ ...prevLayutState, overLayMenuActive: false, staticMenuMobileActive: false, menuHoverActive: false }));
        unClickMenuOutsideListener();
        unBlockBodyScroll();
    };

    const hiddenProfileMenu = () => {
        setLayoutState((prevLayoutState) => ({ ...prevLayoutState, profileSidebarVisible: false }));
        uncliclProfileMenuOutsideListener();
    };

    const blockBodyScroll = () => {
        DomHandler.addClass("blocked-scroll");
    };

    const unBlockBodyScroll = () => {
        DomHandler.removeClass("blocked-scroll");
    };

    useEffect(() => {
        if (layoutState.overLayMenuActive || layoutState.staticMenuMobileActive) {
            clickMenuOutsideListener();
        }

        layoutState.staticMenuMobileActive && blockBodyScroll();
    }, [layoutState.overLayMenuActive, layoutState.staticMenuMobileActive]);
    useEffect(() => {
        if (layoutState.profileSidebarVisible) {
            cliclProfileMenuOutsideListener();
        }
    }, [layoutState.profileSidebarVisible]);

    useEffect(() => {
        router.events.on("routeChangeComplete", () => {
            hiddenMenu();
            hiddenProfileMenu();
        });
    }, []);

    PrimeReact.ripple = true;

    useUnmountEffect(() => {
        unClickMenuOutsideListener();
        uncliclProfileMenuOutsideListener();
    });

    const containerClass = classNames("layout-wrapper", {
        "layout-theme-light": layoutConfig.colorScheme === "light",
        "layout-theme-dark": layoutConfig.colorScheme === "dark",
        "layout-overlay": layoutConfig.menuMode === "overlay",
        "layout-static": layoutConfig.menuMode === "static",
        "layout-static-inactive": layoutState.staticMenuDesktopInactive && layoutConfig.menuMode === "static",
        "layout-overlay-active": layoutState.overlayMenuActive,
        "layout-mobile-active": layoutState.staticMenuMobileActive,
        "p-input-filled": layoutConfig.inputStyle === "filled",
        "p-ripple-disabled": !layoutConfig.ripple,
    });

    return (
        <React.Fragment>
            <Head>
                <title>Ximply</title>
                <meta charSet="UTF-8" />
                <meta name="description" content="The ultimate collection of design-agnostic, flexible and accessible React UI Components." />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <meta property="og:type" content="website"></meta>
                <meta property="og:title" content="Sakai by PrimeReact | Free Admin Template for NextJS"></meta>
                <meta property="og:url" content="https://www.primefaces.org/sakai-react"></meta>
                <meta property="og:description" content="The ultimate collection of design-agnostic, flexible and accessible React UI Components." />
                <meta property="og:image" content="https://www.primefaces.org/static/social/sakai-nextjs.png"></meta>
                <meta property="og:ttl" content="604800"></meta>
                <link rel="icon" href={`${contextPath}/favicon.ico`} type="image/x-icon"></link>
            </Head>
            <div className={containerClass}>
                <AppTopbar ref={topbarRef} />
                <div ref={sidebarRef} className="layout-sidebar">
                    <AppSidebar />
                </div>
                <div className="layout-main-container">
                    <div className="layout-main">{props.children}</div>
                    <AppFooter />
                </div>
                <AppConfig />
                {/* <div className="layout-mask"></div> */}
            </div>
        </React.Fragment>
    );
};

export default Layout;
