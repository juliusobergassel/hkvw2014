config {
  index_enable = 1
  index_externals = 1
  index_metatags = 1
}

plugin.tx_indexedsearch {
  templateFile = {$plugin.tx_bootstrapcore.theme.baseDir}/tmpl/indexed_search/indexed_search.html
  search {
    rootPidList = {plugin.tx_bootstrapcore.indexed_search.rootPidList}
    page_links = 10
  }
  _DEFAULT_PI_VARS.type = 1
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

<form class="navbar-form navbar-left" role="search">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>

lib.nav_searchbox = COA_INT
lib.nav_searchbox {
  stdWrap.prefixComment = 2 | lib.nav_searchbox
  10 = TEXT
  10.typolink.parameter = {$plugin.tx_bootstrapcore.indexed_search.searchUID}
  10.typolink.target = {$plugin.tx_bootstrapcore.indexed_search.searchUID}
  10.typolink.returnLast = url
  10.wrap = <form class="navbar-form navbar-right nav_searchbox" action="|" method="post" role="search">
  20 = COA
  20 {
    10 = TEXT
    10.data = GPvar : plugin.tx_indexedsearch |sword
    10.htmlSpecialChars = 1
    10.wrap = <div class="form-group"><input name="tx_indexedsearch[sword]" value="|" class="form-control searchbox-sword" type="text" placeholder="Suche ..." /></div>
    20 = COA
    20 {
      10 = TEXT
      10.value = <input type="hidden" name="tx_indexedsearch[sections]" value="0" />
      20 = TEXT
      20.value = <input type="hidden" name="tx_indexedsearch[submit_button]" value="Search" />
      30 = TEXT
      30.value = <button type="submit" class="btn btn-default" />Suchen</button>
      30 >
    }
  }
  wrap = | </form>
}