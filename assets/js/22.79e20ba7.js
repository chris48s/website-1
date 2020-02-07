(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{376:function(e,t,a){e.exports=a.p+"assets/img/cmso-1.25f92f63.png"},440:function(e,t,a){"use strict";a.r(t);var r=a(0),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("Researchers worldwide try to understand how cells move, a process extremely important for many physiological and pathological conditions. "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Cell_migration",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cell migration"),r("OutboundLink")],1),r("br"),e._v("\nis in fact involved in many processes, like wound healing, neuronal development and cancer invasion. The "),r("a",{attrs:{href:"https://cmso.science/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cell Migration Standardization Organization"),r("OutboundLink")],1),e._v(" (CMSO) is a community building standards for cell migration data, in order to"),r("br"),e._v("\nenable data sharing in the field. The organization has three main working groups:")]),e._v(" "),r("ul",[r("li",[e._v("Minimal reporting requirement (developing "),r("a",{attrs:{href:"https://github.com/CellMigStandOrg/MIACME",target:"_blank",rel:"noopener noreferrer"}},[e._v("MIACME"),r("OutboundLink")],1),e._v(", i.e. the Minimum Information About a Cell Migration Experiment)")]),e._v(" "),r("li",[e._v("Controlled Vocabularies")]),e._v(" "),r("li",[e._v("Data Formats and APIs")])]),e._v(" "),r("p",[e._v("In our last working group, we discussed where the Data Package specifications"),r("sup",{staticClass:"footnote-ref"},[r("a",{attrs:{href:"#fn1",id:"fnref1"}},[e._v("[1]")])]),e._v(" could be used or expanded for the definition of a standard format and the corresponding libraries to interact with these"),r("br"),e._v("\nstandards. In particular, we have started to address the"),r("br"),e._v("\nstandardization of cell tracking data. This is data produced using tracking software that reconstructs cell movement in time based on images from a microscope.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(376),alt:"Diagram"}}),e._v(" "),r("br"),e._v(" "),r("em",[e._v("In pink, the "),r("a",{attrs:{href:"http://isa-tools.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ISA"),r("OutboundLink")],1),e._v(" (Investigation Study Assay) model to annotate the experimental metadata; in blue, the "),r("a",{attrs:{href:"http://www.openmicroscopy.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OME"),r("OutboundLink")],1),e._v(" (Open Microscopy Environment) model for the imaging data; in green, our biotracks format based on the Data Package specification for the analytics data (cell tracking, positions, features etc.); in purple, CV: Controlled Vocabulary; and in turquoise, "),r("a",{attrs:{href:"https://github.com/CellMigStandOrg/MIACME",target:"_blank",rel:"noopener noreferrer"}},[e._v("MIACME"),r("OutboundLink")],1),e._v(": Minimum Information About a Cell Migration Experiment.  "),r("a",{attrs:{href:"https://creativecommons.org/licenses/by-sa/4.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC BY-SA 4.0"),r("OutboundLink")],1),e._v(" Credit: Paola Masuzzo (text) and CMSO (diagram).")])]),e._v(" "),r("p",[e._v("CMSO deals specifically with cell migration data (a subject of cell biology). Our main challenge lies in the heterogeneity of the data. This diversity has its origin in two factors:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Experimentally")]),e._v(": Cell migration data can be produced using many diverse techniques (imaging, non-imaging, dynamic, static, high-throughput/screening, etc.)")]),e._v(" "),r("li",[r("strong",[e._v("Analytically")]),e._v(": These data are produced using many diverse software packages, each of these writing data to specific (sometimes proprietary) file formats.")])]),e._v(" "),r("p",[e._v("This diversity hampers (or at least makes very difficult) procedures like meta-analysis, data integration, data mining, and last but not least, data "),r("em",[e._v("reproducibility")]),e._v(".")]),e._v(" "),r("p",[e._v("CMSO has developed and is about to release the first specification of a "),r("a",{attrs:{href:"https://cellmigstandorg.github.io/Tracks/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cell Tracking format"),r("OutboundLink")],1),e._v(". This"),r("br"),e._v("\nspecification is built on a tabular representation, i.e. data are stored in tables.  Current v0.1 of this specification can be seen at "),r("a",{attrs:{href:"https://cellmigstandorg.github.io/Tracks/v0.1/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("CMSO is using the "),r("em",[e._v("Tabular")]),e._v(" Data Package"),r("sup",{staticClass:"footnote-ref"},[r("a",{attrs:{href:"#fn2",id:"fnref2"}},[e._v("[2]")])]),e._v(" specification to represent cell migration-derived tracking data, as illustrated"),r("br"),e._v(" "),r("a",{attrs:{href:"https://github.com/CellMigStandOrg/biotracks/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(". The"),r("br"),e._v("\nspecification is used for two goals:")]),e._v(" "),r("ol",[r("li",[r("strong",[e._v("Create a Data Package representation")]),e._v(" where the data—in our"),r("br"),e._v("\ncase objects (e.g.  cells detected in microscopy images), links,"),r("br"),e._v("\nand optionally tracks—are stored in CSV files, while metadata and"),r("br"),e._v("\nschema"),r("sup",{staticClass:"footnote-ref"},[r("a",{attrs:{href:"#fn3",id:"fnref3"}},[e._v("[3]")])]),e._v(" information are stored in a JSON file.")]),e._v(" "),r("li",[r("strong",[e._v("Write")]),e._v(" this Data Package to a pandas"),r("sup",{staticClass:"footnote-ref"},[r("a",{attrs:{href:"#fn4",id:"fnref4"}},[e._v("[4]")])]),e._v(" dataframe, to aid quick"),r("br"),e._v("\ninspection and visualization.")])]),e._v(" "),r("p",[e._v("You can see some examples"),r("br"),e._v(" "),r("a",{attrs:{href:"https://github.com/CellMigStandOrg/biotracks/tree/master/examples",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("I am an Open Science fan and advocate, so I try to keep up to date"),r("br"),e._v("\nwith the initiatives of the"),r("br"),e._v(" "),r("a",{attrs:{href:"https://okfn.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Open Knowledge International"),r("OutboundLink")],1),e._v(" teams. I think I first became aware of Frictionless Data when I saw"),r("br"),e._v("\na tweet and I checked the specs out. Also, CMSO really wanted to keep"),r("br"),e._v("\na possible specification and file format light and simple. So"),r("br"),e._v("\ndifferent people of the team must have googled for ‘CSV and JSON"),r("br"),e._v("\nformats’ or something like that, and Frictionless Data popped out 😃.")]),e._v(" "),r("p",[e._v("I have opened a couple of issues on the"),r("br"),e._v(" "),r("a",{attrs:{href:"https://github.com/frictionlessdata/specs",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub page of the spec"),r("OutboundLink")],1),e._v(", detailing what I would like to see developed in the Frictionless Data project. The"),r("br"),e._v("\nCMSO is not sure yet if the Data Package representation will be the"),r("br"),e._v("\none we’ll go for in the very end, because we would first like to know"),r("br"),e._v("\nhow sustainable/sustained this spec will be in the future.")]),e._v(" "),r("p",[e._v("CMSO is looking into expanding the"),r("br"),e._v(" "),r("a",{attrs:{href:"https://github.com/CellMigStandOrg/biotracks/tree/master/examples",target:"_blank",rel:"noopener noreferrer"}},[e._v("list of examples"),r("OutboundLink")],1),r("br"),e._v("\nwe have so far in terms of tracking software. Personally, I would like"),r("br"),e._v("\nto choose a reference data set (a live-cell, time-lapse microscopy"),r("br"),e._v("\ndata set) , and run different cell tracking algorithms/software"),r("br"),e._v("\npackages on it. Then I want to put the results into a common, light"),r("br"),e._v("\nand easy-to-interpret CSV+JSON format (the biotracks format), and show"),r("br"),e._v("\npeople how data containerization"),r("sup",{staticClass:"footnote-ref"},[r("a",{attrs:{href:"#fn5",id:"fnref5"}},[e._v("[5]")])]),e._v(" can be the way to go to"),r("br"),e._v("\nenable research data exchange and knowledge discovery at large.")]),e._v(" "),r("p",[e._v("With most other specifications, cell tracking data are  stored in tabular format, but metadata"),r("br"),e._v("\nare never kept together with the data, which makes data interpretation"),r("br"),e._v("\nand sharing very difficult. The Frictionless Data specifications take good care of"),r("br"),e._v("\nthis aspect. Some other formats are based on XML"),r("sup",{staticClass:"footnote-ref"},[r("a",{attrs:{href:"#fn6",id:"fnref6"}},[e._v("[6]")])]),e._v(" annotation,"),r("br"),e._v("\nwhich certainly does the job, but are perhaps heavier (even though"),r("br"),e._v("\nperhaps more sustainable in the long term). I hate Excel formats, and"),r("br"),e._v("\nunfortunately I need to parse those too. I love the integration with"),r("br"),e._v("\nPython"),r("sup",{staticClass:"footnote-ref"},[r("a",{attrs:{href:"#fn7",id:"fnref7"}},[e._v("[7]")])]),e._v(" and the pandas"),r("sup",{staticClass:"footnote-ref"},[r("a",{attrs:{href:"#fn4",id:"fnref4:1"}},[e._v("[4:1]")])]),e._v(" system, this is a big plus"),r("br"),e._v("\nwhen doing data science.")]),e._v(" "),r("p",[e._v("As a researcher, I mostly deal with research data. I am pretty sure if"),r("br"),e._v("\nthis could work for cell migration data, it could work for many cell"),r("br"),e._v("\nbiology disciplines as well. I recommend speaking to more researchers and data producers to determine additional use cases!")]),e._v(" "),r("hr",{staticClass:"footnotes-sep"}),e._v(" "),r("section",{staticClass:"footnotes"},[r("ol",{staticClass:"footnotes-list"},[r("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[r("p",[e._v("Data Package: "),r("a",{attrs:{href:"/specs/data-package"}},[e._v("/specs/data-package")]),e._v(" "),r("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[e._v("↩︎")])])]),e._v(" "),r("li",{staticClass:"footnote-item",attrs:{id:"fn2"}},[r("p",[e._v("Tabular Data Package: "),r("a",{attrs:{href:"/specs/tabular-data-package"}},[e._v("/specs/tabular-data-package")]),e._v(" "),r("a",{staticClass:"footnote-backref",attrs:{href:"#fnref2"}},[e._v("↩︎")])])]),e._v(" "),r("li",{staticClass:"footnote-item",attrs:{id:"fn3"}},[r("p",[e._v("Table Schema: "),r("a",{attrs:{href:"/specs/table-schema"}},[e._v("/specs/table-schema")]),e._v(" "),r("a",{staticClass:"footnote-backref",attrs:{href:"#fnref3"}},[e._v("↩︎")])])]),e._v(" "),r("li",{staticClass:"footnote-item",attrs:{id:"fn4"}},[r("p",[e._v("Pandas: Python package for data analysis: "),r("a",{attrs:{href:"http://pandas.pydata.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://pandas.pydata.org/"),r("OutboundLink")],1),e._v(" "),r("a",{staticClass:"footnote-backref",attrs:{href:"#fnref4"}},[e._v("↩︎")]),e._v(" "),r("a",{staticClass:"footnote-backref",attrs:{href:"#fnref4:1"}},[e._v("↩︎")])])]),e._v(" "),r("li",{staticClass:"footnote-item",attrs:{id:"fn5"}},[r("p",[e._v("Design Philosophy: "),r("a",{attrs:{href:"/specs"}},[e._v("/specs")]),e._v(" "),r("a",{staticClass:"footnote-backref",attrs:{href:"#fnref5"}},[e._v("↩︎")])])]),e._v(" "),r("li",{staticClass:"footnote-item",attrs:{id:"fn6"}},[r("p",[e._v("Extensible Markup Language: "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/XML",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://en.wikipedia.org/wiki/XML"),r("OutboundLink")],1),e._v(" "),r("a",{staticClass:"footnote-backref",attrs:{href:"#fnref6"}},[e._v("↩︎")])])]),e._v(" "),r("li",{staticClass:"footnote-item",attrs:{id:"fn7"}},[r("p",[e._v("Data Package-aware libraries in Python: "),r("a",{attrs:{href:"https://github.com/frictionlessdata/datapackage-py",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/frictionlessdata/datapackage-py"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://github.com/frictionlessdata/tableschema-py",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/frictionlessdata/tableschema-py"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://github.com/frictionlessdata/goodtables-py",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/frictionlessdata/goodtables-py"),r("OutboundLink")],1),e._v(" "),r("a",{staticClass:"footnote-backref",attrs:{href:"#fnref7"}},[e._v("↩︎")])])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);