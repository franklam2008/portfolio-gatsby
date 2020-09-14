import websiteScreenShot from "../../images/wtFrontPage.png"
export const skillsFrontEndCon = [
  { name: "React", imgName: "react.png" },
  { name: "TypeScript", imgName: "typescript.png" },
  { name: "Angular2", imgName: "angular.png" },
  { name: "Ngrx", imgName: "ngrx.png" },
  { name: "RxJS", imgName: "rxjs.png" },
  { name: "Gatsby", imgName: "gatsby.png" },
  { name: "JS ES6", imgName: "javaS.png" },
  { name: "SCSS", imgName: "scss.png" },
  { name: "Bootstrap 5", imgName: "bootstrap.png" },
  { name: "Adobe XD", imgName: "xd.png" },
  { name: "HTML 5", imgName: "html.png" },
  { name: "Jquery", imgName: "jquery.png" },
  { name: "WordPress", imgName: "wordPress.png" },
]
export const skillsBackEndCon = [
  { name: "Node JS", imgName: "node.png" },
  { name: "Graphql", imgName: "graphql.png" },
  { name: "Firebase", imgName: "firebase.png" },
  { name: "ExpressJS", imgName: "express.png" },
]
export const skillsOthersCon = [
  { name: "Contentful", imgName: "contentful.png" },
  { name: "Git", imgName: "git.png" },
  { name: "VS Code", imgName: "vs.png" },
]
export const projectsCon = [
  {
    title: "Huntington Bank BAO",
    meta: "Angular, Ngrx, RxJS",
    text: `Worked on Angular project for Huntington bank BAO flow. Utilized Ngrx and RxJS for app state management. Unfortunately, I cannot showcase code here for obvious reason.`,
    imgName: "hnb.png",
  },
  {
    title: "Professional Banking Dashboard",
    meta: "React, Create-React-App, Material UI",
    text: `React built professional banking dashboard with Redux for state management and Material UI design`,
    imgName: "garden.png",
    btnName: "GitHub",
    btnHref: "https://github.com/franklam2008/banking-dashboard",
    btn2Name: "Live Site",
    btn2Href: "https://banking-dashboard.netlify.com",
  },
  {
    title: "Media Application",
    meta: "React, FireBase, Bootstrap",
    text: `Media Single Page React Application built with FireBase authentication. Custom UX/UI design with Bootstrap. Hosting in serverless Netlify.`,
    imgName: "react1.png",
    btnName: "GitHub",
    btnHref: "https://github.com/franklam2008/Media-Application",
    btn2Name: "Live Site",
    btn2Href: "https://franklam.app/",
  },
  {
    title: "this.Portfolio",
    meta: "React, Gatsby, Semantic UI",
    text: `React built portfolio with Gatsby JS and Semantic UI design. It is deployed in a cPanel hosting server, FastComet.`,
    imgName: "gatsby.png",
    btnName: "GitHub",
    btnHref: "https://github.com/franklam2008/Portfolio",
  },
  {
    title: "React E-commerce",
    meta: "React, Gatsby, Contentful",
    text: `Gatsby built E-commerce website with lightspeed load time and custom SEO for excellent user experience, manage product inventory with Contentful Graphql API.`,
    imgName: "contentful.png",
    btnName: "GitHub",
    btnHref: "https://github.com/franklam2008/shop-gatsby",
    btn2Name: "Live Site",
    btn2Href: "https://shop-gatsby.netlify.com/",
  },

  {
    title: "Business E-commerce",
    meta: "WordPress, PHP",
    text: ` WordPress built E-commerce website that generate over hundred
    thousand sales via the utilization of Getresponse and Pipedrive
    for custom HTML email marketing campaign and CRM. Live chat
    integrates with Tidio and Zendesk for the support ticket system.`,
    imgName: "wordPress1.png",
    btnName: "Showcase",
    btnHref: websiteScreenShot,
  },
  {
    title: "Node Js App",
    meta: "Node, Express, MongoDB",
    text: `Handles API requests and submit to Airtable, Twilio and
    SendGrid. It also perform Web Scraping with Puppeteer in order
    to collect information from other existing website.`,
    imgName: "express.png",
    btnName: "GitHub",
    btnHref: "https://github.com/franklam2008/WebScrapingAPI",
  },
]
