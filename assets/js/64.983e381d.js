(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{255:function(e,a,t){"use strict";t.r(a);var i=t(6),s=Object(i.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("There are a few items that are useful to keep in mind when developing a choice model for use within a larger travel model framework that might not be applicable or on the radar for modelers developing specifications for use in research.")]),e._v(" "),t("h2",{attrs:{id:"good-attributes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#good-attributes"}},[e._v("#")]),e._v(" Good Attributes")]),e._v(" "),t("p",[e._v("A good choice model usually has the following attributes:")]),e._v(" "),t("ol",[t("li",[t("strong",[e._v("Practical")]),e._v(" to use")]),e._v(" "),t("li",[t("strong",[e._v("Consistent")]),e._v(" with evidence and common sense")]),e._v(" "),t("li",[t("strong",[e._v("Useful")]),e._v(" to researchers or decision-makers")]),e._v(" "),t("li",[e._v("...might not be the most statistically strong (in fact, it probably isn't)")])]),e._v(" "),t("p",[e._v("Developing a choice model is as much art as it is science. This is especially true when developing a model that will be used in practice.")]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"practical"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#practical"}},[e._v("#")]),e._v(" Practical")]),e._v(" "),t("h3",{attrs:{id:"inputs-are-forecastable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#inputs-are-forecastable"}},[e._v("#")]),e._v(" Inputs are Forecastable")]),e._v(" "),t("p",[t("em",[e._v("Can you (easily and reliably) forecast your independent variables?")])]),e._v(" "),t("p",[e._v("Possibly suspect/difficult variables:")]),e._v(" "),t("ul",[t("li",[e._v("[ = f( Yelp Scores)")]),e._v(" "),t("li",[e._v("Residential Location Choice = f ( School Quality)")]),e._v(" "),t("li",[e._v("Bike Utility = f(potholes)")]),e._v(" "),t("li",[e._v("Walk Utility = f(violent crime)")])]),e._v(" "),t("p",[t("em",[e._v("Remember: Garbage In Garbage Out")]),e._v(" "),t("img",{attrs:{src:"GIGO.jpeg",alt:"Garbage In Garbage Out",title:"fig:Garbage In Garbage Out"}})]),e._v(" "),t("h3",{attrs:{id:"do-mechanics-work-with-your-travel-model"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#do-mechanics-work-with-your-travel-model"}},[e._v("#")]),e._v(" Do mechanics work with your travel model?")]),e._v(" "),t("p",[e._v('Are these variables "available to you" in your model system?')]),e._v(" "),t("ul",[t("li",[e._v("Person/HH/trip level (easier in microsimulation framework)")]),e._v(" "),t("li",[e._v("LOS variables (çan you 'skim' them?)")])]),e._v(" "),t("p",[e._v("Does adding this variable significantly contribute to run time, memory, or storage requirements?")]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"consistent"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#consistent"}},[e._v("#")]),e._v(" Consistent")]),e._v(" "),t("h3",{attrs:{id:"use-common-sense"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#use-common-sense"}},[e._v("#")]),e._v(" Use Common Sense")]),e._v(" "),t("p",[e._v("If your findings are inconsistent with past research, common sense, and anecdotal evidence, you have done one of the following:")]),e._v(" "),t("ol",[t("li",[e._v("Made a discovery (yay!)")]),e._v(" "),t("li",[e._v("Come across a statistical anomaly (annoying…)")]),e._v(" "),t("li",[e._v("Poorly specified your variable (bad!)")])]),e._v(" "),t("p",[e._v("Possible questions to help you differentiate garbage from discovery:")]),e._v(" "),t("ul",[t("li",[e._v("can you talk about your finding with a "),t("strong",[e._v("straight face")]),e._v("?")]),e._v(" "),t("li",[e._v("can you "),t("strong",[e._v("tell a story")]),e._v("?")]),e._v(" "),t("li",[e._v("are there underlying "),t("strong",[e._v("missing variables")]),e._v("?")]),e._v(" "),t("li",[e._v("are there multiple "),t("strong",[e._v("variables obscuring each other")]),e._v("?")]),e._v(" "),t("li",[e._v("is the sample "),t("strong",[e._v("robust enough")]),e._v("?")])]),e._v(" "),t("p",[e._v("Example Model Revision:\n"),t("img",{attrs:{src:"ExampleModelRevision.png",alt:"Example Model Revision",title:"fig:Example Model Revision"}})]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"useful"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#useful"}},[e._v("#")]),e._v(" Useful")]),e._v(" "),t("p",[t("em",[e._v('"Does [ whatever specification you are considering] have valid and relevant sensitivities?"')])]),e._v(" "),t("p",[e._v(":")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(":   AKA\n")])])]),t("p",[t("em",[e._v('"…will it make sense and will anybody care?"')])]),e._v(" "),t("h3",{attrs:{id:"is-your-model-specification-valid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#is-your-model-specification-valid"}},[e._v("#")]),e._v(" Is Your Model Specification Valid?")]),e._v(" "),t("p",[t("strong",[e._v("Example 1")])]),e._v(" "),t("p",[e._v("Possible Model:\n:   Transit utility increases with "),t("a",{attrs:{href:"Traffic_Analysis_Zones"}},[e._v("TAZ")]),e._v(" population")]),e._v(" "),t("p",[e._v("Incorrect Implication:\n:   We can increase transit usage by making our TAZs larger")]),e._v(" "),t("p",[e._v("Better Model (find the real cause):\n:   Transit utility increases with shorter walk access distances and more frequent transit service (which happen to be common in dense areas with high TAZ populations)")]),e._v(" "),t("p",[t("strong",[e._v("Example 2")])]),e._v(" "),t("p",[e._v("Possible Model:\n:   Bike LOS increases as the average traffic / lane at an intersection decreases")]),e._v(" "),t("p",[e._v("Incorrect Implication:\n:   We can get more people to bike by widening roads at intersections")]),e._v(" "),t("p",[e._v("Better Model (find the real cause):\n:   Bike LOS increases as conflicts with cars decrease")]),e._v(" "),t("h3",{attrs:{id:"is-your-model-specification-relevant"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#is-your-model-specification-relevant"}},[e._v("#")]),e._v(" Is Your Model Specification Relevant?")]),e._v(" "),t("p",[t("em",[e._v('"What questions are you trying to answer?"')])]),e._v(" "),t("p",[e._v("Make sure you have the sensitivity you need to answer your boss's boss's questions.")]),e._v(" "),t("p",[t("strong",[e._v("Example")]),e._v("\nare parking maximums the next hot political battle in your region? make sure you have parking competitiveness in your models!")]),e._v(" "),t("hr")])}),[],!1,null,null,null);a.default=s.exports}}]);