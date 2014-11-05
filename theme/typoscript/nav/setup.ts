lib.navbar = COA
lib.navbar {
		wrap = <nav class="navbar navbar-default navbar-fixed-top hkvw-mainnav" role="navigation"><div class="container">|</div></nav>

    10 = TEXT
    10 {
        value = <span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>
        wrap = <div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#hkvw-navbar-main">|</button></div>
    }
    20 = HMENU
    20.wrap = <div class="collapse navbar-collapse" id="hkvw-navbar-main"><div class="navbar-right logo"><img class="img-responsive" src="{$plugin.tx_bootstrapcore.website.logoPath}"></div>|</div>
    20 {
        entryLevel = 0
        #excludeUidList = 11,12
        1 = TMENU
        1 {
            wrap = <ul class="nav navbar-nav">|</ul>
            expAll = 1

            NO = 1
            NO.allWrap >
            NO.wrapItemAndSub = <li class="normal">|</li>
            CUR = 1
            CUR < .NO
            CUR.wrapItemAndSub = <li class="active">|</li>
            ACT = 1
            ACT < .CUR
						IFSUB = 1
            IFSUB < .NO
            IFSUB.wrapItemAndSub = <li class="dropdown">|</li>
            IFSUB.ATagParams = class="dropdown-toggle" role="button" data-toggle="dropdown" data-target="#"
            IFSUB.ATagBeforeWrap = 1
            IFSUB.stdWrap.wrap = |<b class="caret"></b>
            CURIFSUB = 1
            CURIFSUB < .IFSUB
            CURIFSUB.wrapItemAndSub = <li class="dropdown active">|</li>
            ACTIFSUB = 1
            ACTIFSUB < .CURIFSUB
        }


        2 = TMENU
        2 {
            wrap = <ul class="dropdown-menu" role="menu">|</ul>
            expAll = 1

            NO = 1
            NO.allWrap >
            NO.wrapItemAndSub = <li class="sub normal">|</li>
            CUR = 1
            CUR < .NO
            CUR.wrapItemAndSub = <li class="sub active">|</li>
            ACT = 1
            ACT < .CUR

            IFUSB < .1.IFSUB
            CURIFSUB < .1.CURIFSUB
            ACTIFSUB < .1.ACTIFSUB

            SPC = 1
            SPC.doNotLinkIt = 1
            SPC.doNotShowLink = 1
            SPC.allWrap = <li class="divider"></li>
        }

        3 < .2
        3.IFSUB >
        3.CURIFSUB >
        3.ACTIFSUB >
    }
}

lib.breadcrumb = COA
lib.breadcrumb {
  20 = HMENU
  20 {
    special = rootline
    special.range = 0|-1

    1 = TMENU
    1 {
      wrap = <ol class="breadcrumb">|</ol>
      expAll = 1
      NO = 1
      NO.allWrap >
      NO.wrapItemAndSub = <li>|</li>
      CUR = 1
      CUR < .NO
      CUR.wrapItemAndSub = <li class="active">|</li>
    }
  }
}

lib.subnav = COA
lib.subnav.wrap = <ul class="nav nav-list" id="sidebar-nav">|</ul>
lib.subnav {
    10 = TEXT
    10.wrap = <li class="list-group-item">|</li>
    10.data = leveltitle:1
    10.typolink.parameter.data = leveluid:1
    20 = HMENU
    20.wrap = |
    20 {
        entryLevel = 1
        1 = TMENU
        1 {
            wrap = |
            expAll = 0
            NO = 1
            NO.allWrap >
            NO.wrapItemAndSub = <li class="list-group-item">|</li>
            CUR = 1
            CUR < .NO
            CUR.wrapItemAndSub = <li class="list-group-item active">|</li>
            ACT = 1
            ACT < .CUR
            IFSUB = 1
            IFSUB < .NO
            IFSUB.wrapItemAndSub = <li class="list-group-item">|</li>
            IFSUB.ATagBeforeWrap = 1
            IFSUB.stdWrap.wrap = |

            CURIFSUB = 1
            CURIFSUB < .IFSUB
            CURIFSUB.wrapItemAndSub = <li class="list-group-item active">|</li>

            ACTIFSUB = 1
            ACTIFSUB < .IFSUB
            ACTIFSUB.wrapItemAndSub = <li class="list-group-item active">|</li>
        }
        2 = TMENU
        2 {
            wrap = <ul class="list-group">|</ul>
            expAll = 0

            NO = 1
            NO.allWrap >
            NO.wrapItemAndSub = <li class="list-group-item">|</li>
            CUR = 1
            CUR < .NO
            CUR.wrapItemAndSub = <li class="list-group-item active">|</li>
            ACT = 1
            ACT < .CUR

            IFUSB < .1.IFSUB
            ACTIFSUB < .1.ACTIFSUB
            CURIFSUB < .1.CURIFSUB

            SPC = 1
            SPC.doNotLinkIt = 1
            SPC.doNotShowLink = 1
            SPC.allWrap = <li class="divider"></li>
        }
        3 > .2
        3.IFSUB >
        3.ACTIFSUB >
    }
}