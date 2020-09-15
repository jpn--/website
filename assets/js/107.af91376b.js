(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{298:function(e,t,i){"use strict";i.r(t);var a=i(6),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h2",{attrs:{id:"fundamentals"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#fundamentals"}},[e._v("#")]),e._v(" Fundamentals")]),e._v(" "),i("p",[e._v('Freight modeling is the process of mathematically representing the economic demand for transporting commodities and manufactured products over a spatial network. There are several aspects of modeling freight that make it fundamentally different than modeling person travel. Most fundamentally, moving freight over a network typically involves multiple persons (here called "agents") making a sequence of transactional decisions in a business environment. These agents can include (but are not limited to) persons working as manufacturers, shippers, carriers, purchasers and consumers. We may safely assume that the individual choices made by freight agents are rational in much the same way we assume that individual commuters maximize their utility when making travel mode, destination and network choices. But while the travel choice of an individual person represents a complete and self-contained economic transaction, the sequence of choices made by individual freight agents moving a single commodity from raw material to final consumer are strung together into what is called the "'),i("a",{attrs:{href:"Supply_chain"}},[e._v(" supply chain")]),e._v('". When layered atop one another, the multiplicity of single supply-chains at work in the freight economy become massively complex and nearly impossible to evaluate using familiar modeling measures-of-efficiency such as '),i("a",{attrs:{href:"user_optimality"}},[e._v("user optimality")]),e._v(" or "),i("a",{attrs:{href:"system_optimality"}},[e._v("system optimality")]),e._v(".")]),e._v(" "),i("p",[e._v("In order to make freight modeling computationally tractable as well as more compatible with standard travel demand modeling practice, numerous simplifications must be made. These simplifications are undertaken mainly to achieve data compatibility with other travel demand model components; specifically the data formats required for trip generation arrays, two dimensional origin-destination matrices, mode share calculations and centroid-based network assignment. In the course of making these simplifications, substantial fidelity to the economic forces at work is inevitably compromised. Therefore it is important to carefully consider the planning application that the model is intended to serve and ensure that important policy sensitivities are not being overlooked or ignored.")]),e._v(" "),i("h2",{attrs:{id:"common-simplifications"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#common-simplifications"}},[e._v("#")]),e._v(" Common Simplifications")]),e._v(" "),i("p",[e._v("A common motivation for freight modeling is to contribute to metropolitan and statewide planning applications; the primary objective being to achieve a full accounting of vehicular trips in network assignment. Doing so, allows network performance to be validated against observed traffic counts and performance metrics to be assessed under alternative network scenarios.")]),e._v(" "),i("p",[e._v("This objective results in two significant simplification to our understanding of freight supply chain modeling. 1) we need only obtain discrete origins and destinations for commercial vehicle trips (i.e. trucks) and 2) we need only know what vehicle class (i.e. light, medium, heavy duty) to which a truck belongs so that appropriate lane capacity can be assigned.")]),e._v(" "),i("p",[e._v("Standard sequential travel model applications are not capable of properly tracking supply chain information that would permit estimating the determinants of commodity flow, freight mode choice and multi-stop routing algorithms. They are only capable of predicting the cumulative impacts of commercial vehicles on roadway network performance.")]),e._v(" "),i("p",[e._v("It is common practice to approach this simplification effort by formulating analogies to the sequential steps found in traditional trip-based travel modeling.")]),e._v(" "),i("h3",{attrs:{id:"commercial-vehicle-trip-generation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#commercial-vehicle-trip-generation"}},[e._v("#")]),e._v(" Commercial Vehicle Trip Generation")]),e._v(" "),i("p",[e._v("The objective of trip generation is to quantify the number of daily trips being produced or attracted to a single location.")]),e._v(" "),i("p",[e._v("In person trip generation, household and employment attributes (e.g. size, workers, income) serve as the independent variable to predict the number of daily person trips generated by purpose, (e.g. work, non-work).")]),e._v(" "),i("p",[e._v("In commercial vehicle trip generation, attributes of business enterprises serve as the independent variable to predict the number of daily truck trips generated by delivery purpose (e.g. truckload, less-than-truckload, service).")]),e._v(" "),i("p",[e._v("In regions or states serving comparatively small volumes of discretionary (i.e. non-dispatched) truck traffic, a further simplification may made by simply correlating observed network truck counts to socioeconomic data to obtain a zone-level estimate of commercial vehicle trip productions and attractions.")])])}),[],!1,null,null,null);t.default=n.exports}}]);