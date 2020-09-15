(window.webpackJsonp=window.webpackJsonp||[]).push([[272],{463:function(e,t,a){"use strict";a.r(t);var r=a(6),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Hello TF Resource volunteers!! Here are some common problems in the raw imported pages, and how to fix them!")]),e._v(" "),a("ul",[a("li",[e._v("Markdown format "),a("a",{attrs:{href:"https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet",target:"_blank",rel:"noopener noreferrer"}},[e._v("cheat-sheet here"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("The best way to see what a page is "),a("em",[e._v("supposed")]),e._v(" to look like is to open up the old "),a("a",{attrs:{href:"http://old.tfresource.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://old.tfresource.org"),a("OutboundLink")],1),e._v(" website, and navigate to the page with the same name. (Use the search bar to get there quickly). Having that page open side-by-side will help you figure out what needs to be done.")]),e._v(" "),a("h2",{attrs:{id:"page-junk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#page-junk"}},[e._v("#")]),e._v(" Page Junk")]),e._v(" "),a("p",[e._v("Sometimes there will be some random things like")]),e._v(" "),a("p",[e._v("}}")]),e._v(" "),a("p",[e._v("__TOC__")]),e._v(" "),a("p",[e._v("or just random headings with no content below them.")]),e._v(" "),a("p",[e._v("Just "),a("strong",[e._v("DELETE")]),e._v(" random page junk.")]),e._v(" "),a("h2",{attrs:{id:"broken-links"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#broken-links"}},[e._v("#")]),e._v(" Broken Links")]),e._v(" "),a("p",[e._v('Many TF Resource page names got changed because of spaces, capitalization, etc. Check every link on your page, and if it leads to a "404" page then it very likely is just a matter of fixing the file name.')]),e._v(" "),a("ul",[a("li",[e._v("Pages now begin with an initial capital letter, and all spaces have been changed to under_scores.")]),e._v(" "),a("li",[e._v("e.g. a link pointing to "),a("code",[e._v("temporal data")]),e._v(" would now be "),a("code",[e._v("Temporal_data")])]),e._v(" "),a("li",[e._v("Note you DO NOT NEED the "),a("code",[e._v(".md")]),e._v(" extension to link to a page name: just use its full exact name "),a("em",[e._v("before")]),e._v(" the .md extension.")])]),e._v(" "),a("h2",{attrs:{id:"missing-images"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#missing-images"}},[e._v("#")]),e._v(" Missing Images")]),e._v(" "),a("p",[e._v("If you see a broken image icon like this: "),a("img",{attrs:{src:"/broken_link",alt:""}})]),e._v(" "),a("p",[e._v("...it probably means the filename of the image file was "),a("em",[e._v("slightly modified")]),e._v(". Every image filename now starts with a capital letter, and spaces in filenames were converted to under_scores.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Try capitalizing the first letter of the filename in the link so for example"),a("br"),e._v(" "),a("code",[e._v("![my-image](this image.jpg) --\x3e ![my-image](This_image.jpg)")])])]),e._v(" "),a("li",[a("p",[e._v("See if replacing spaces or hyphens with underlines does the trick.")])]),e._v(" "),a("li",[a("p",[e._v("Look on Github at the folder containing all of the images here; and copy its filename exactly."),a("br"),e._v("\n==> All images files are "),a("a",{attrs:{href:"https://github.com/tfresource/website/tree/source/.vuepress/public/topics",target:"_blank",rel:"noopener noreferrer"}},[e._v("listed here on Github"),a("OutboundLink")],1),e._v(".")])])]),e._v(" "),a("p",[e._v("If none of these tricks work, maybe the image didn't get copied over correctly. You can copy it directly from the old site:")]),e._v(" "),a("ul",[a("li",[e._v("Find and click on the image on "),a("a",{attrs:{href:"http://old.tfresource.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://old.tfresource.org"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v('Right-click and "Save As...", and save to your computer somewhere')]),e._v(" "),a("li",[e._v("Then upload that file to the "),a("code",[e._v(".vuepress/public/topics")]),e._v(" folder, where all image files are stored.")])]),e._v(" "),a("h2",{attrs:{id:"math-and-equations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#math-and-equations"}},[e._v("#")]),e._v(" Math and Equations")]),e._v(" "),a("p",[e._v("Some math imported properly, but some didn't. All math should use LaTex format.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Equations that stand alone, centered, on a line should be surrounded by double-$$ with no spaces before/after, like so:"),a("br"),e._v(" "),a("code",[e._v("$$\\alpha + \\beta$$")])])]),e._v(" "),a("li",[a("p",[e._v("Math that you want in-line as part of a sentence is surrounded by "),a("code",[e._v("$single-dollars$")]),e._v(" instead.")])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://upmath.me/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Upmath"),a("OutboundLink")],1),e._v(" is a nice interactive editor where you can experiment with LaTeX math codes, and then copy the math codes to your page when you get it right.")])])]),e._v(" "),a("h2",{attrs:{id:"tables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tables"}},[e._v("#")]),e._v(" Tables")]),e._v(" "),a("p",[e._v("Oh, tables. Simple tables get converted easily. Complicated tables did not survive the conversion very well. It might be easiest to go back to the original table code on tfresource.org and start from there, if it is really truly mangled.")]),e._v(" "),a("p",[e._v("You'll probably find that fixing tables is difficult in the web editor; you may want to follow the "),a("a",{attrs:{href:"Contributing-Dev-Instructions"}},[e._v("Developer Instructions")]),e._v(" instead.")]),e._v(" "),a("ul",[a("li",[e._v("We are using Github-flavored tables, there is a "),a("a",{attrs:{href:"https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#tables",target:"_blank",rel:"noopener noreferrer"}},[e._v("good cheat-sheet here"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Get rid of "),a("code",[e._v("<center>blah</center>")]),e._v(" formatting, it generally just breaks everything\nBilly will review/fix the worst of the tables if they are too much for you.")])]),e._v(" "),a("h2",{attrs:{id:"when-you-re-finished"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#when-you-re-finished"}},[e._v("#")]),e._v(" When you're finished")]),e._v(" "),a("p",[e._v("Check out the "),a("strong",[e._v("Preview Changes")]),e._v(" tab in the web editor to see a (more or less) accurate rendering of your page.")]),e._v(" "),a("p",[e._v("Save your file in the web editor by clicking "),a("strong",[e._v("Propose Changes")]),e._v(" and then "),a("strong",[e._v("Create Pull Request")]),e._v(".")]),e._v(" "),a("ul",[a("li",[e._v("Remember, your changes won't show up live until they've been reviewed and merged. So just move on to the next page! 😃")])]),e._v(" "),a("p",[e._v("Thanks for your help!")])])}),[],!1,null,null,null);t.default=o.exports}}]);