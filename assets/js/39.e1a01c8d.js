(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{445:function(e,t,a){"use strict";a.r(t);var o=a(0),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("The Workforce Data Initiative aims to modernize the US workforce through the use of data. One aspect of this initiative is to help state and local workforce boards collect, aggregate, and distribute statistics on the effectiveness of training providers and the programs they offer. The US Department of Labor mandates that every eligible training provider (ETP) work with state workforce"),a("br"),e._v("\nboards to track the outcomes of their students in order to receive federal funding.  We are building a suite of open-source tools using open data specifications in order to help make this a reality; this collection of tools is called the Training Provider Outcomes Toolkit (TPOT). This specific tool, the etp-uploader, is a website that state workforce boards can deploy for training providers to upload their individual-level data.")]),e._v(" "),a("p",[e._v("There are many hundreds or thousands of training providers within the purview of each workforce development board. Each one must securely upload their participant data to their workforce board. This means that the workforce development boards must be equipped to receive and validate the data.")]),e._v(" "),a("p",[e._v("Training providers range from small trade apprenticeships to community colleges to multi-state organizations, with a wide range of data sophistication. The ways in which the workforce data board collects participant outcomes must be easy and accessible to all organizations. At the same time, it must be easy for the board itself to automatically process and validate the datasets.")]),e._v(" "),a("p",[e._v("We use the Frictionless Data Table Schema specification to define the required columns and data value constraints.  This is decoupled from the code, allowing each state to precisely define their requirements and easily create custom instances of the site.  We expose this flexibility through a "),a("a",{attrs:{href:"https://id.heroku.com/login",target:"_blank",rel:"noopener noreferrer"}},[e._v("Heroku build script"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("We have modified the "),a("a",{attrs:{href:"https://github.com/frictionlessdata/goodtables-web",target:"_blank",rel:"noopener noreferrer"}},[e._v("goodtables-web project"),a("OutboundLink")],1),e._v(" to add support for uploading to an S3 repository.  We’ve further extended it to allow for uploading metadata about the uploaded file after it is validated.  This metadata is uploaded as a separate file.  In the future, we may use the data package standard to describe these two files as a single data package.")]),e._v(" "),a("p",[e._v("I am excited to see the new developments around goodtables-py 1.0 and beyond.  It will be nice to eventually move our upload website to the new APIs. One  possible area for improvement in the goodtables-web validator is better error messages when specific data values do not match constraints.  I’ve imagined adding a custom “data_constraint_error” field to the Table Schema that would allow for friendlier errors, or perhaps dynamically generating such error messages using the constraints themselves.")]),e._v(" "),a("p",[e._v("I think that this general structure — a validated table upload software — is very useful and could be used for a wide variety of applications.  It may make sense to allow for even more easy customizations to the site.")]),e._v(" "),a("p",[e._v("The  extension to goodtables-web is open source and available "),a("a",{attrs:{href:"https://github.com/workforce-data-initiative/etp-uploader",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(" with a demo also running at "),a("a",{attrs:{href:"http://send.dataatwork.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://send.dataatwork.org"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);