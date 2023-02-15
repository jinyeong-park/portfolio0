"use strict";
(() => {
var exports = {};
exports.id = 327;
exports.ids = [327];
exports.modules = {

/***/ 2759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Projects),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/layout.js + 3 modules
var layout = __webpack_require__(4810);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./config/index.js
const DATABASE_ID = process.env.NOTION_DATABASE_ID;
const TOKEN = process.env.NOTION_TOKEN;

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/projects/project-item.js


function ProjectItem({ data  }) {
    const title = data.properties.Name.title[0].plain_text;
    const github = data.properties.Github.url;
    const youtube = data.properties.Youtube.url;
    const description = data.properties.Description.rich_text[0].plain_text;
    const imgSrc = data.cover.file?.url || data.cover.external.url;
    const tags = data.properties.Tags.multi_select;
    const start1 = data.properties.WorkPeriod.date.start;
    const end1 = data.properties.WorkPeriod.date.end;
    const calculatedPeriod = (start, end)=>{
        const startDateStringArray = start.split("-");
        const endDateStringArray = end.split("-");
        var startDate = new Date(startDateStringArray[0], startDateStringArray[1], startDateStringArray[2]);
        var endDate = new Date(endDateStringArray[0], endDateStringArray[1], endDateStringArray[2]);
        console.log(`startDate: ${startDate}`);
        console.log(`endDate: ${endDate}`);
        const diffInMs = Math.abs(endDate - startDate);
        const result = diffInMs / (1000 * 60 * 60 * 24);
        console.log(`기간 : ${result}`);
        return result;
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "project-card",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                className: "rounded-t-xl",
                src: imgSrc,
                alt: "cover image",
                width: "100%",
                height: "50%",
                layout: "responsive",
                objectFit: "cover",
                quality: 100
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "p-4 flex flex-col",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "text-2xl font-bold",
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "mt-4 text-xl",
                        children: description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: github,
                        children: "\uAE43\uD5C8\uBE0C \uBC14\uB85C\uAC00\uAE30"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: youtube,
                        children: "\uC720\uD29C\uBE0C \uC2DC\uC5F0\uC601\uC0C1 \uBCF4\uB7EC\uAC00\uAE30"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "my-1 ",
                        children: [
                            "\uC791\uC5C5\uAE30\uAC04 : ",
                            start1,
                            " ~ ",
                            end1,
                            " (",
                            calculatedPeriod(start1, end1),
                            "\uC77C)"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex items-start mt-2",
                        children: tags.map((aTag)=>/*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30",
                                children: aTag.name
                            }, aTag.id)
                        )
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./pages/projects.js





function Projects({ projects  }) {
    console.log(projects);
    return /*#__PURE__*/ jsx_runtime_.jsx(layout/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col items-center justify-center min-h-screen px-3 mb-10",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                            children: "\uBE61\uCF54\uB529 \uD3EC\uD2B8\uD3F4\uB9AC\uC624"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "description",
                            content: "\uC624\uB298\uB3C4 \uBE61\uCF54\uB529!"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "icon",
                            href: "/favicon.ico"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                    className: "text-4xl font-bold sm:text-6xl",
                    children: [
                        "\uCD1D \uD504\uB85C\uC81D\uD2B8 :",
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "pl-4 text-blue-500",
                            children: projects.results.length
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "grid grid-cols-1 gap-8 p-12 m-4 md:grid-cols-2",
                    children: projects.results.map((aProject)=>/*#__PURE__*/ jsx_runtime_.jsx(ProjectItem, {
                            data: aProject
                        }, aProject.id)
                    )
                })
            ]
        })
    });
};
// 빌드 타임에 호출
// export async function getStaticProps() {
// 각 요청 때마다 호출
async function getServerSideProps() {
    const options = {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Notion-Version": "2022-02-22",
            "Content-Type": "application/json",
            Authorization: `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
            sorts: [
                {
                    "property": "Name",
                    "direction": "ascending"
                }
            ],
            page_size: 100
        })
    };
    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options);
    const projects = await res.json();
    const projectNames = projects.results.map((aProject)=>aProject.properties.Name.title[0].plain_text
    );
    console.log(`projectNames : ${projectNames}`);
    return {
        props: {
            projects
        }
    };
}


/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 3468:
/***/ ((module) => {

module.exports = require("react-social-icons");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,61,810], () => (__webpack_exec__(2759)));
module.exports = __webpack_exports__;

})();