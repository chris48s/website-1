# Frictionless Framework

[![Travis](https://img.shields.io/travis/frictionlessdata/frictionless-py/master.svg)](https://travis-ci.org/frictionlessdata/frictionless-py)
[![Coveralls](http://img.shields.io/coveralls/frictionlessdata/frictionless-py.svg?branch=master)](https://coveralls.io/r/frictionlessdata/frictionless-py?branch=master)
[![PyPi](https://img.shields.io/pypi/v/frictionless.svg)](https://pypi.python.org/pypi/frictionless)
[![Github](https://img.shields.io/badge/github-master-brightgreen)](https://github.com/frictionlessdata/frictionless-py)
[![Discord](https://img.shields.io/badge/chat-discord-brightgreen)](https://discord.com/channels/695635777199145130/695635777199145133)

Frictionless is a framework to describe, extract, validate, and transform tabular data. It supports a great deal of data sources and formats, as well as provides popular platforms integrations. The framework is powered by the lightweight yet comprehensive [Frictionless Data Specifications](https://specs.frictionlessdata.io/).

> **[Important Notice]** We have renamed `goodtables` to `frictionless` since version 3. The framework got various improvements and was extended to be a complete data solution. The change in not breaking for the existing software so no actions are required. Please read the [Migration Guide](migration-guide/) from `goodtables` to Frictionless Framework.
> - we continue to bug-fix `goodtables@2.x` in this [branch](https://github.com/frictionlessdata/goodtables-py/tree/goodtables) as well as it's available on [PyPi](https://pypi.org/project/goodtables/) as it was before
> - please note that `frictionless@3.x` version's API, we're working on at the moment, is not stable
> - we will release `frictionless@4.x` by the end of 2020 to be the first SemVer/stable version

## Purpose

- **Describe your data**: You can infer, edit and save metadata of your data tables. It's a first step for ensuring data quality and usability. Frictionless metadata includes general information about your data like textual description, as well as, field types and other tabular data details.
- **Extract your data**: You can read your data using a unified tabular interface. Data quality and consistency are guaranteed by a schema. Frictionless supports various file protocols like HTTP, FTP, and S3 and data formats like CSV, XLS, JSON, SQL, and others.
- **Validate your data**: You can validate data tables, resources, and datasets. Frictionless generates a unified validation report, as well as supports a lot of options to customize the validation process.
- **Transform your data**: You can clean, reshape, and transfer your data tables and datasets. Frictionless provides a pipeline capability and a lower-level interface to work with the data.

## Features

- Powerful Python framework
- Convenient command-line interface
- Low memory consumption for data of any size
- Reasonable performance on big data
- Support for compressed files
- Custom checks and formats
- Fully pluggable architecture
- The included API server
- More than 1000+ tests

## Example

```bash
$ frictionless validate data/invalid.csv
[invalid] data/invalid.csv

  row    field  code              message
-----  -------  ----------------  --------------------------------------------
             3  blank-header      Header in field at position "3" is blank
             4  duplicate-header  Header "name" in field "4" is duplicated
    2        3  missing-cell      Row "2" has a missing cell in field "field3"
    2        4  missing-cell      Row "2" has a missing cell in field "name2"
    3        3  missing-cell      Row "3" has a missing cell in field "field3"
    3        4  missing-cell      Row "3" has a missing cell in field "name2"
    4           blank-row         Row "4" is completely blank
    5        5  extra-cell        Row "5" has an extra value in field  "5"
```

## Documentation

### General

- [Getting Started](getting-started/)
- [Introduction Guide](introduction-guide/)
- [Describing Data](describing-data/)
- [Extracting Data](extracting-data/)
- [Validating Data](validating-data/)
- [Transforming Data](transforming-data/)
- [Extension Guide](extension-guide/)
- [Migration Guide](migration-guide/)
- [Schemes Reference](schemes-reference/)
- [Formats Reference](formats-reference/)
- [Errors Reference](errors-reference/)
- [API Reference](api-reference/)
- [Contributing](contributing/)
- [Changelog](changelog/)
- [Authors](authors/)

### Specific

- [Working with AWS](working-with-aws/)
- [Working with BigQuery](working-with-bigquery/)
- [Working with CKAN](working-with-ckan/)
- [Working with CSV](working-with-csv/)
- [Working with DataFlows](working-with-dataflows/)
- [Working with Elastic](working-with-elastic/)
- [Working with Excel](working-with-excel/)
- [Working with GSheet](working-with-gsheet/)
- [Working with HTML](working-with-html/)
- [Working with Inline](working-with-inline/)
- [Working with JSON](working-with-json/)
- [Working with ODS](working-with-ods/)
- [Working with Pandas](working-with-pandas/)
- [Working with Server](working-with-server/)
- [Working with SPSS](working-with-spss/)
- [Working with SQL](working-with-sql/)
- [Working with Stream](working-with-stream/)
- [Working with Text](working-with-text/)