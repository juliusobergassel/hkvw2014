config {
    # In bootstrap_core defined
    /*
    cache_period = 43200
    sendCacheHeaders = 0
    absRefPrefix = /
    prefixLocalAnchors = all
    extTarget =
    intTarget =
    tx_realurl_enable = 1
    simulateStaticDocuments = 0
    noScaleUp = 1
	  */
    spamProtectEmailAddresses = 1
    spamProtectEmailAddresses_atSubst = [at]
    spamProtectEmailAddresses_lastDotSubst = .
		/*
    sys_language_uid = 0
    language = {$plugin.tx_bootstrapcore.website.lang.localeShort}
    locale_all = {$plugin.tx_bootstrapcore.website.lang.locale}
    htmlTag_langKey < config.language
    #htmlTag_setParams = lang="de" dir="ltr" class="no-js"
    pageTitleFirst = 1
    #concatenateCss = 1
    #concatenateJs = 1
    # multi lang handling
    #sys_language_softMergeIfNotBlank = tx_news_domain_model_news:categories, tt_content:image, sys_file_reference,sys_file
		*/
}

page {
    bodyTag = <body>

    10 = FLUIDTEMPLATE
    10 {
        layoutRootPath = {$plugin.tx_bootstrapcore.theme.baseDir}/tmpl/backend_layout/Layouts/
        partialRootPath = {$plugin.tx_bootstrapcore.theme.baseDir}/tmpl/backend_layout/Partials/
        file.cObject = CASE
        file.cObject {
            key.data = levelfield:-1, backend_layout_next_level, slide
            key.override.field = backend_layout
            default = TEXT
            default.value = {$plugin.tx_bootstrapcore.theme.baseDir}/tmpl/backend_layout/tmpl_twocol_teaser.html
            3 = TEXT
            3.value 			= {$plugin.tx_bootstrapcore.theme.baseDir}/tmpl/backend_layout/tmpl_twocol.html
            1 = TEXT
            1.value       = {$plugin.tx_bootstrapcore.theme.baseDir}/tmpl/backend_layout/tmpl_onecol.html
            2 = TEXT
            2.value 			= {$plugin.tx_bootstrapcore.theme.baseDir}/tmpl/backend_layout/tmpl_onecol_teaser.html
            5 = TEXT
            5.value 			= {$plugin.tx_bootstrapcore.theme.baseDir}/tmpl/backend_layout/tmpl_twocol_teaser.html
            6 = TEXT
            6.value 			= {$plugin.tx_bootstrapcore.theme.baseDir}/tmpl/backend_layout/tmpl_twocol_teaser_noscroll.html
            4 = TEXT
            4.value 			= {$plugin.tx_bootstrapcore.theme.baseDir}/tmpl/backend_layout/tmpl_twocol_noscroll.html
        }
        variables {
            content < styles.content.get
            content_sidebar < styles.content.get
            content_sidebar.select.where = colPos=1
            content_teaser < styles.content.get
            content_teaser.select.where = colPos=2
        }
    }

    meta {
        X-UA-Compatible = IE=edge,chrome=1
        X-UA-Compatible.httpEquivalent = 1
        viewport = width=device-width, initial-scale=1.0
        description = TEXT
        description.data = field:description
        author   = Heimat- und Kulturverein Werther e.V.
        designer = oglm webdesign und entwicklung
        robots   = noindex,nofollow
        #google = notranslate
        #apple-mobile-web-app-capable = no
    }

    includeCSS {
        #bootstrap_core = typo3conf/ext/bootstrap_core/Resources/Public/Css/content.css
        bootstrap = {$plugin.tx_bootstrapcore.theme.libDir}/bootstrap/3.2/css/bootstrap.min.css
        bootstrap.forceOnTop = 1
        lightbox = {$plugin.tx_bootstrapcore.theme.libDir}/jquery/prettyphoto/css/prettyPhoto.min.css
        hkvw2014_content = {$plugin.tx_bootstrapcore.theme.baseDir}/css/Content.css
        hkvw2014_main = {$plugin.tx_bootstrapcore.theme.baseDir}/css/HKVWMain.css
        hkvw2014_print = {$plugin.tx_bootstrapcore.theme.baseDir}/css/HKVWPrint.css
        hkvw2014_print.media = print
    }
    headerData {
    		10 = COA
        10 {
            10 = TEXT
            10.value (
                <link rel="shortcut icon" href="fileadmin/favicons/favicon.ico" />
                <link rel="apple-touch-icon-precomposed" sizes="144x144" href="fileadmin/favicons/apple-touch-icon-144x144-precomposed.png">
                <link rel="apple-touch-icon-precomposed" sizes="114x114" href="fileadmin/favicons/apple-touch-icon-114x114-precomposed.png">
                <link rel="apple-touch-icon-precomposed" sizes="72x72" href="fileadmin/favicons/apple-touch-icon-72x72-precomposed.png">
                <link rel="apple-touch-icon-precomposed" href="fileadmin/favicons/apple-touch-icon-precomposed.png">
            )
        }
    		20 = TEXT
        20.value (
<!--[if lt IE 9]>
<script src="{$plugin.tx_bootstrapcore.theme.libDir}/html5shiv/html5shiv.min.js"></script>
<![endif]-->
        )

        /*
        20 = CASE
        20 {
            stdWrap.wrap = <link rel="stylesheet" type="text/css" href="fileadmin/hkvw2014/theme/css/#" media="all">
            stdWrap.splitChar = #
            key.data = levelfield:-1, layout, slide
            # default add-on css
            default = TEXT
            default.value = layout_default.css
            2 = TEXT
            2.value = layout_news.css
        }
        */
    }

    includeJSlibs {
        jquery = {$plugin.tx_bootstrapcore.theme.libDir}/jquery/jquery-2.1.1.min.js
    }
    includeJSFooterlibs {
        bootstrap = {$plugin.tx_bootstrapcore.theme.libDir}/bootstrap/3.2/js/bootstrap.min.js
        lightbox = {$plugin.tx_bootstrapcore.theme.libDir}/jquery/prettyphoto/js/jquery.prettyPhoto.js
        hkvw2014 = {$plugin.tx_bootstrapcore.theme.baseDir}/js/hkvw2014.js
        piwik = {$plugin.tx_bootstrapcore.theme.baseDir}/js/piwikanalysis.js
    }
}



tt_content {
    div {
        /*
        override.cObject {
            default.value = <hr>
            1.value = <hr class="style2">
            2.value = <hr class="style3">
        }
        */
    }
    media {
        /*
        # for use with fitvids
        20.mimeConf.swfobject.layout = <div class="embed-container">###SWFOBJECT###</div>
        */
    }
    image.20 {
        maxW >
        maxW.cObject = CASE
        maxW.cObject {
            key.data = levelfield:-1, backend_layout_next_level, slide
            key.override.data = TSFE:page|backend_layout
            default = TEXT
            default.value = {$styles.content.imgtext.maxW}
            1 = CASE
            1 {
                key.field = colPos
                default = TEXT
                default.value = 750
                1 = TEXT
                1.value = 360
            }

        }
    }

    uploads.20 {
        /*
        linkProc {
            combinedLink = 0
            jumpurl >
        }
        renderObj {
            # preview image
            10 {
                file.width = 100
                stdWrap {
                    wrap = <div class="img" style="width: 140px">|</div>
                }
            }
            # icon
            # change to diff set of custom icons for downloads, default is typo3/gfx/fileicons/
            15.file.import = typo3conf/ext/bootstrap_core/Resources/Public/Icons/fileicons/
            15.file.import.wrap = |.png
            # start text-wrap
            18 = TEXT
            18.value = <div class="text">
            # file name/link
            25 < .20
            25 {
                wrap (
                 <p class="dl-link"><span class="glyphicon glyphicon-download"></span>
                 |</p>
                )
                wrap.override >
            }
            # title of download
            20 {
                # instead of name use title (works only if media object used and title given)
                data = file:current:title
                typolink >
             #   wrap = <h4 class="dl">|</h4>
                wrap = <span class="dl">|</span>
                wrap.override >
                # activate if file extension should be stripped from filename
                #replacement.20 < .replacement._20
                #replacement._20 >
            }
            # description
            30.wrap = <p class="dl-descr">|</p>
            30.wrap = <span class="dl-descr">|</span>

            # close text-wrap
            50 = TEXT
            50.value = </div>

            wrap {
                cObject {
                    10 {
                        oddEvenClass >
                        elementClass = dl-ext-{file:current:extension}
                    }
                    20 {
                        #value = <div class="dl-entry {register:elementClass}">|<div class="clearfix"></div></div>
                        value = <li class="dl-entry {register:elementClass}">|<div class="clearfix"></div></li>
                    }
                }
            }
        }
        */
    }

    gridelements_pi1 {
        10 =< lib.stdheader
    }
}

/* --------------------
 * Layout blocks, libs
 */
lib {
	navlogo = COA
	navlogo {
		wrap = <div class="navbar-right logo">|</div>
		10 = TEXT
		10.value = <img src="{$plugin.tx_bootstrapcore.website.logoPath}" class="img-responsive" />
		10.typolink.parameter = 1
	}
	sslogo = COA
	sslogo {
	  wrap = <div class="small-screen-logo">|</div>
		10 = TEXT
		10.value = <img src="{$plugin.tx_bootstrapcore.website.logoPath}" class="img-responsive" />
		10.typolink.parameter = 1
	}
	mainTeaser = COA
	mainTeaser {
    10 < styles.content.get
		10 {
            select.pidInList = {$plugin.tx_bootstrapcore.website.homepage.pageId}
            select.where = colPos={$plugin.tx_bootstrapcore.website.homepage.teaserColPos}
    }
	}
	copyright = COA
	copyright {
		10 = COA
		10 {
			20.wrap = <div><p>|</p></div>
			10 = TEXT
			10.value = &copy;&nbsp;|&nbsp;Heimat-&nbsp;und&nbsp;Kulturverein&nbsp;Werther&nbsp;e.V.&nbsp;2006&nbsp;-&nbsp;
			20 = TEXT
			20.data = date:U
			20.strftime = %Y
		}
		10 >
		20 = HMENU
		20 {
			wrap = <ol class="breadcrumb">|</ol>
			special = directory
      special.value = {$plugin.tx_bootstrapcore.website.metaNav.pageId}
			includeNotInMenu = true
			1 = TMENU
			1 {
				wrap = |
				expAll = 1
				NO = 1
				NO.allWrap >
				#NO.wrapItemAndSub = | |*| &nbsp;&#124;&nbsp;| |*| &nbsp;&#124;&nbsp;|
	      NO.wrapItemAndSub = <li>|</li>
	      CUR = 1
	      CUR < .NO
	      CUR.wrapItemAndSub = <li class="active">|</li>
			}
		}
	}
	footerContent = COA
	footerContent.wrap = <div class="panel"><div class="panel-footer"><div class="container"><div class="row">|</div></div></div></div>
	footerContent {
        10 < styles.content.get
        10 {
            select.pidInList = {$plugin.tx_bootstrapcore.website.footer.pageId}
            select.where = colPos={$plugin.tx_bootstrapcore.website.footer.leftColPos}
            stdWrap.wrap = <div class="col-md-4 col-sm-4">|</div>
        }
        20 < .10
        20.select.where = colPos={$plugin.tx_bootstrapcore.website.footer.centerColPos}
        20.stdWrap.wrap = <div class="col-md-4 col-sm-4 text-center">|</div>
        30 = COA
        30.stdWrap.wrap = <div class="col-md-4 col-sm-4 text-right">|</div>
        30 {
        		10 < lib.copyright
        		20 < lib.footerContent.10
        		20 {
        				select.where = colPos={$plugin.tx_bootstrapcore.website.footer.rightColPos}
        				stdWrap.wrap = <div class="footer-pulldown">|</div>
        		}
        }
	}
}
