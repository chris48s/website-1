(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{374:function(a,t,e){a.exports=e.p+"assets/img/data-world-1.5a4d0891.png"},375:function(a,t,e){a.exports=e.p+"assets/img/data-world-2.6312c262.png"},439:function(a,t,e){"use strict";e.r(t);var o=e(0),s=Object(o.a)({},(function(){var a=this,t=a.$createElement,o=a._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[o("p",[a._v("At data.world, we deal with a great diversity of data, both in terms of content and in terms of source format - most people working with data are emailing each other spreadsheets or CSVs, and not formally defining schema or semantics for what’s contained in these data files.")]),a._v(" "),o("p",[a._v("When [data.world][dataworld] ingests tabular data, we “virtualize” the tables away from their source format, and build layers of type and semantic information on top of the raw data. What this allows us to do is to produce a clean Tabular Data Package"),o("sup",{staticClass:"footnote-ref"},[o("a",{attrs:{href:"#fn1",id:"fnref1"}},[a._v("[1]")])]),a._v(" for any dataset, whether the input is CSV files, Excel Spreadsheets, JSON data, SQLite Database files - any format that we know how to extract tabular information from - we can present it as cleaned-up CSV data with a "),o("code",[a._v("datapackage.json")]),a._v(" that describes the schema and metadata of the contents.")]),a._v(" "),o("p",[o("img",{attrs:{src:e(374),alt:"Available Data"}}),a._v(" "),o("br"),a._v(" "),o("em",[a._v("Tabular Data Package structure on disk")])]),a._v(" "),o("p",[a._v("We would also like to see graph data packages developed as part of the Frictionless Data specifications, or “Universal Data Packages” that can encapsulate both tabular and graph data.  It would be great to be able to present tabular and graph data in the same package and develop software that knows how to use these things together.")]),a._v(" "),o("p",[a._v("To elaborate on this, it makes a lot of sense to normalize tabular data down to clean, well-formed CSVs or data that is more graph-like, and to normalize it to a standard format.  RDF"),o("sup",{staticClass:"footnote-ref"},[o("a",{attrs:{href:"#fn2",id:"fnref2"}},[a._v("[2]")])]),a._v(" is a well-established and standardized format, with many serialized forms that could be used interchangeably (RDF XML, Turtle, N-Triples, or JSON-LD, for example).  The metadata in the "),o("code",[a._v("datapackage.json")]),a._v(" would be extremely minimal, since the schema for RDF data is encoded into the data file itself.  It might be helpful to use the "),o("code",[a._v("datapackage.json")]),a._v(" descriptor to catalog the standard taxonomies and ontologies that were in use, for example, it would be useful to know if a file contained SKOS"),o("sup",{staticClass:"footnote-ref"},[o("a",{attrs:{href:"#fn3",id:"fnref3"}},[a._v("[3]")])]),a._v(" vocabularies, or OWL"),o("sup",{staticClass:"footnote-ref"},[o("a",{attrs:{href:"#fn4",id:"fnref4"}},[a._v("[4]")])]),a._v(" classes.")]),a._v(" "),o("p",[a._v("In the coming days, we want to continue to enrich the metadata we include in Tabular Data Packages exported from [data.world][dataworld], and we’re looking  into using "),o("code",[a._v("datapackage.json")]),a._v(" as an import format as well as an export option.")]),a._v(" "),o("p",[a._v("[data.world][dataworld] works with lots of data across many domains - what’s great about Frictionless Data is that it’s a lightweight set of content specifications that can be a starting point for building domain-specific content standards - it really helps with the “first mile” of standardizing data and making it interoperable.")]),a._v(" "),o("p",[o("img",{attrs:{src:e(375),alt:"Available Data"}}),a._v(" "),o("br"),a._v(" "),o("em",[a._v("Tabular datasets can be downloaded as Tabular Data Packages")])]),a._v(" "),o("p",[a._v("In a certain sense, a Tabular Data Package is sort of like an open-source, cross-platform, accessible replacement for spreadsheets that can act as a “binder” for several related tables of data.  "),o("strong",[a._v("I could easily imagine web or desktop-based tools that look and function much like a traditional spreadsheet, but  use Data Packages as their serialization format.")])]),a._v(" "),o("p",[a._v("To read more about Data Package integration at [data.world][dataworld], read our post: "),o("a",{attrs:{href:"https://meta.data.world/try-this-frictionless-data-world-ad36b6422ceb#.rbbf8k40t",target:"_blank",rel:"noopener noreferrer"}},[a._v("Try This: Frictionless data.world"),o("OutboundLink")],1),a._v(".  Sign up, and starting playing with data.")]),a._v(" "),o("hr",{staticClass:"footnotes-sep"}),a._v(" "),o("section",{staticClass:"footnotes"},[o("ol",{staticClass:"footnotes-list"},[o("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[o("p",[a._v("Tabular Data Package specifications: "),o("a",{attrs:{href:"/specs/tabular-data-package"}},[a._v("/specs/tabular-data-package")]),a._v(" "),o("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[a._v("↩︎")])])]),a._v(" "),o("li",{staticClass:"footnote-item",attrs:{id:"fn2"}},[o("p",[a._v("RDF: Resource Description Framework: "),o("a",{attrs:{href:"https://www.w3.org/RDF/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.w3.org/RDF/"),o("OutboundLink")],1),a._v(" "),o("a",{staticClass:"footnote-backref",attrs:{href:"#fnref2"}},[a._v("↩︎")])])]),a._v(" "),o("li",{staticClass:"footnote-item",attrs:{id:"fn3"}},[o("p",[a._v("SKOS: Simple Knowledge Organization System: "),o("a",{attrs:{href:"https://www.w3.org/2004/02/skos/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.w3.org/2004/02/skos/"),o("OutboundLink")],1),a._v(" "),o("a",{staticClass:"footnote-backref",attrs:{href:"#fnref3"}},[a._v("↩︎")])])]),a._v(" "),o("li",{staticClass:"footnote-item",attrs:{id:"fn4"}},[o("p",[a._v("OWL Web Ontology Language: "),o("a",{attrs:{href:"https://www.w3.org/TR/owl-ref/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.w3.org/TR/owl-ref/"),o("OutboundLink")],1),o("br"),a._v("\n[dataworld]: "),o("a",{attrs:{href:"https://data.world/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://data.world/"),o("OutboundLink")],1),a._v(" "),o("a",{staticClass:"footnote-backref",attrs:{href:"#fnref4"}},[a._v("↩︎")])])])])])])}),[],!1,null,null,null);t.default=s.exports}}]);