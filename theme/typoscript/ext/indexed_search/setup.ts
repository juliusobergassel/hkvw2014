config {
  index_enable = 1
  index_externals = 1
  index_metatags = 0
}

plugin.tx_indexedsearch {
  templateFile = {$plugin.tx_bootstrapcore.theme.baseDir}/tmpl/indexed_search/indexed_search.html
  search {
    rootPidList = {plugin.tx_bootstrapcore.indexed_search.rootPidList}
    page_links = 10
  }
  dateFormat {
    created = %d.%m.%Y
    modified = %d.%m.%Y
  }
  blind {
    type = 1
    media = 1
    sections = 1
    order = 1
    group = 1
  }

  show {
    rules = 0
    resultNumber = 1
    advancedSearchLink = 1
  }

  rules_stdWrap.wrap = <div class="alert alert-info"><button type="button" class="close" data-dismiss="alert">&times;</button>|</div>
  whatis_stdWrap.wrap = <div class="alert alert-info">|</div>
  _CSS_DEFAULT_STYLE >
}
plugin.tx_indexedsearch._DEFAULT_PI_VARS.lang = 0