(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{274:function(e,t,a){"use strict";a.r(t);var o=a(6),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),a("p",[e._v("As equilibrium-based traffic assignment methods became more prevalent in travel forecasting models, a need arose for better methods of estimating delay both on network links (e.g., street segments) and nodes (e.g., intersections). From the earliest models, delay was estimated using volume-delay functions (VDFs) – the most popular and well recognized VDF being the “BPR curve”. (BPR is an acronym for the Bureau of Public Roads, the predecessor agency to the Federal Highway Administration.) The BPR curve satisfied a number of important requirements that were imposed by travel models as they existed through the 1980’s. It is a smooth, increasing monotonic function between delay and volume on a link. It could compute a travel time for each possible volume, and it could be integrated in closed form (a mathematical operation) that was essential to user-equilibrium traffic assignment algorithms that were formulated as minimization problems. Various other VDFs have been proposed to replace the BPR curve.")]),e._v(" "),a("p",[e._v("A 1991 report sponsored by the Federal Highway Administration, “Delay/Volume Relations for Travel Forecasting Based upon the 1985 Highway Capacity Manual,” by Horowitz criticized the BPR curve and other VDFs as being inconsistent with the 1985 US Highway Capacity Manual (HCM) – the most authoritative document on traffic delay at that time. This report made a number of recommendations for improvement (for both VDFs in general and the BPR curve in particular):")]),e._v(" "),a("p",[e._v("• Conflicting and opposing traffic volumes at signed and signalized intersections (along with opposing volumes on "),a("a",{attrs:{href:"Two_Lane_Highways"}},[e._v("two-lane roads")]),e._v(") are not represented in VDFs, but they have a large impact on delay and therefore should be included.")]),e._v(" "),a("p",[e._v("• The concept of “practical capacity” in these VDFs should be replaced by true capacity, taken to be the service flow for LOS (level of service) E in the HCM.")]),e._v(" "),a("p",[e._v("• Parameters of these VDFs therefore need to be re-calibrated, and these parameters should be allowed to vary by functional class on uninterrupted road segments.")]),e._v(" "),a("p",[e._v("The first recommendation about conflicting and opposing traffic was particularly difficult to immediately implement, because none of the traffic assignment algorithms that were formulated as optimization problems (e.g., Frank-Wolfe decomposition) could find a solution when delays were calculated realistically. Other, less troublesome, issues were the possibility of non-unique solutions, slower execution times, much more complicated software, and the need for many more pieces of input data about such things as intersection and approach geometry, sign placement, and signal timing. Subsequent research demonstrated the viability of the method of successive averages (MSA) as a means to finding an equilibrium solution when delay calculations follow the operational analysis procedures from the HCM, and has since been implemented in a variety of travel demand forecasting models from the city to metropolitan level.")]),e._v(" "),a("p",[e._v("Another method infrequently used for improving delay estimates for trip-based travel forecasting is the concept of a blended model. Blended models are described in "),a("a",{attrs:{href:"NCHRP_Report_765"}},[e._v("NCHRP Report 765")]),e._v(". A blended model will combine a travel forecasting model with either a mesoscopic traffic model (such as dynamic traffic assignment) or a microscopic traffic model (sometimes called “traffic microsimulation”). Traffic microsimulations are widely regarded as being more versatile and accurate in their estimates of delay. Because traffic microsimulations are computationally intensive, they have been limited to smaller networks or on subareas of larger networks.")]),e._v(" "),a("hr")])}),[],!1,null,null,null);t.default=i.exports}}]);