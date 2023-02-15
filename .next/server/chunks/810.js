"use strict";
exports.id = 810;
exports.ids = [810];
exports.modules = {

/***/ 4810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next-themes"
var external_next_themes_ = __webpack_require__(1162);
;// CONCATENATED MODULE: ./components/dark-mode-toggle-button.js


function DarkModeToggleButton() {
    // theme : 현재 값 가져오기 getter
    // setTheme : 현재 값 바꾸기 setter
    const { theme , setTheme  } = (0,external_next_themes_.useTheme)();
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
            className: " inline-flex items-center border-0 py-1 px-3 rounded text-base mt-4 md:mt-0 focus:outline-none bg-gray-100 hover:bg-gray-50 hover:text-orange-500 dark:bg-slate-600 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-yellow-300 ",
            type: "button",
            onClick: ()=>setTheme(theme === "dark" ? "light" : "dark")
            ,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "visible dark:invisible dark:h-0 dark:w-0 h-5 w-5",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fillRule: "evenodd",
                        d: "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",
                        clipRule: "evenodd"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "visible dark:visible dark:h-5 dark:w-5 h-0 w-0",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                    })
                })
            ]
        })
    });
};

// EXTERNAL MODULE: external "react-social-icons"
var external_react_social_icons_ = __webpack_require__(3468);
;// CONCATENATED MODULE: ./components/header.js




function Header() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("header", {
            className: "text-gray-600 body-font",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            className: "flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    width: "30px",
                                    src: "logo.svg"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "ml-3 text-xl",
                                    children: "Jenny Park"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                        className: "md:ml-auto flex flex-wrap items-center text-base justify-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "mr-5 hover:text-gray-900",
                                    children: "Home"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/projects",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "mr-5 hover:text-gray-900",
                                    children: "Projects"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "#contact",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "mr-5 hover:text-gray-900",
                                    children: "Contact"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(DarkModeToggleButton, {})
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./components/footer.js


function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("footer", {
            className: "body-font",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "flex title-font font-medium items-center md:justify-start justify-center text-gray-900",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "ml-3 text-xl",
                                    children: "Jenny Park's Portfolio"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4",
                            children: "\xa9 2020 Thanks Tailblocks for inspiration!"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: "inline-flex sm:ml-auto sm:mt-0 mt-4 sm:flex",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://linkedin.com/in/jennypark7",
                                    className: "ml-3 text-gray-500",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                        fill: "currentColor",
                                        stroke: "currentColor",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "0",
                                        className: "w-5 h-5",
                                        viewBox: "0 0 24 24",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                stroke: "none",
                                                d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                cx: "4",
                                                cy: "4",
                                                r: "2",
                                                stroke: "none"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://github.com/jinyeong-park",
                                    className: "ml-3 text-gray-500",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        fill: "currentColor",
                                        stroke: "currentColor",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "0",
                                        className: "w-5 h-5",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://www.facebook.com/jinyeongpark.jenny/",
                                    className: "ml-3 text-gray-500",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        fill: "currentColor",
                                        stroke: "currentColor",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "0",
                                        className: "w-5 h-5",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};

;// CONCATENATED MODULE: ./components/layout.js



function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-primary",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
};


/***/ })

};
;