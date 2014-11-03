content {
    defaultHeaderType = 2
}
styles.content {
    imgtext {
        maxW = 1140
        # 50% col, margin between 30px
        maxWInText = 555
        maxWInText = 750
        textMargin = 20
        colSpace = 30
        rowSpace = 30

        linkWrap {
            width = 1200
            newWindow = 1
            lightboxEnabled = 1
            lightboxCssClass = prettyPhoto
            lightboxRelAttribute = prettyPhoto[{field:uid}]
        }
        borderThick = 1
        borderSpace = 10
    }

    uploads {
        filesizeBytesLabels = " | Kb| Mb| Gb"
    }

    media {
        defaultVideoWidth = 370
        defaultVideoHeight = 208

        defaultAudioWidth = 370
        defaultAudioHeight = 30
    }
}

plugin.tx_bootstrapcore {
		theme {
				baseDir = fileadmin/hkvw2014/theme
				libDir = fileadmin/hkvw2014/lib
		}
    website {
        domain = www.heimatverein-werther.de
        logoPath = fileadmin/hkvw2014/theme/img/HKVW_Logo.png
        lang {
            locale = de_DE.UTF-8
            localeShort = de
        }
        metaNav {
            pageId = 9
        }
        homepage {
        		pageId = 1
        		teaserColPos = 2
        }
        footer {
            pageId = 8
            leftColPos = 10
            centerColPos = 11
            rightColPos = 12
        }
    }
}


