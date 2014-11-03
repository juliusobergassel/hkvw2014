# -----------------------------------------------------------------------------
# mod
# -----------------------------------------------------------------------------
mod.SHARED {
  # Language configuration
  defaultLanguageLabel = Deutsch
  defaultLanguageFlag = de
}


# -----------------------------------------------------------------------------
# TCEMAIN
# -----------------------------------------------------------------------------
# Default backend usergroup and rights for new pages
TCEMAIN {
    permissions {
        # allowed actions: show,edit,delete,new,editcontent
        user = show,edit,delete,new,editcontent
        group = show,edit,delete,new,editcontent
        everybody =
    }
    clearCacheCmd = all
    #translateToHidden = 1
}


# -----------------------------------------------------------------------------
# TCEFORM.pages
# -----------------------------------------------------------------------------
#
TCEFORM.pages {
    backend_layout.removeItems = -1
    backend_layout_next_level.removeItems = -1
    layout {
        altLabels.0 = Standard
        removeItems = 1,2,3
    }

}

# -----------------------------------------------------------------------------
# RTE
# -----------------------------------------------------------------------------
#
RTE.classes {
    lead.name = LLL:EXT:bootstrap_core/Resources/Private/Language/locallang_db.xlf:rte.classes.lead
    text-center.name = LLL:EXT:bootstrap_core/Resources/Private/Language/locallang_db.xlf:rte.classes.justifycenter
    text-left.name = LLL:EXT:bootstrap_core/Resources/Private/Language/locallang_db.xlf:rte.classes.justifyleft
    text-right.name = LLL:EXT:bootstrap_core/Resources/Private/Language/locallang_db.xlf:rte.classes.justifyright
    text-justify.name = LLL:EXT:bootstrap_core/Resources/Private/Language/locallang_db.xlf:rte.classes.justifyblock
    text-success.name = LLL:EXT:bootstrap_core/Resources/Private/Language/locallang_db.xlf:rte.classes.success
    text-info.name = LLL:EXT:bootstrap_core/Resources/Private/Language/locallang_db.xlf:rte.classes.info
    text-warning.name = LLL:EXT:bootstrap_core/Resources/Private/Language/locallang_db.xlf:rte.classes.warning
    text-danger.name = LLL:EXT:bootstrap_core/Resources/Private/Language/locallang_db.xlf:rte.classes.danger
    badge.name = LLL:EXT:bootstrap_core/Resources/Private/Language/locallang_db.xlf:rte.classes.badge
    success.name = LLL:EXT:bootstrap_core/Resources/Private/Language/locallang_db.xlf:rte.classes.success
    info.name = LLL:EXT:bootstrap_core/Resources/Private/Language/locallang_db.xlf:rte.classes.info
    warning.name = LLL:EXT:bootstrap_core/Resources/Private/Language/locallang_db.xlf:rte.classes.warning
    danger.name = LLL:EXT:bootstrap_core/Resources/Private/Language/locallang_db.xlf:rte.classes.danger
    btn.name = LLL:EXT:bootstrap_core/Resources/Private/Language/locallang_db.xlf:rte.classes.button
    lightbox.name = LLL:EXT:bootstrap_core/Resources/Private/Language/locallang_db.xlf:rte.classes.lightbox
}

RTE.classesAnchor {
    #download.titleText = Download
    download.titleText >
    externalLink.titleText >
    externalLinkInNewWindow.titleText >
    internalLink.titleText >
    internalLinkInNewWindow.titleText >
    mail.titleText >
}


RTE.default {
    contentCSS = fileadmin/hkvw2014/theme/css/rte/content.css
    showButtons := addToList(fonticon)

    # Toolbar order
    # --- additional for tables
    # table, toggleborders, bar, tableproperties, rowproperties, cellproperties, bar,
    #   rowinsertabove,rowinsertunder,rowdelete,rowsplit,bar,
    #   columninsertbefore,columninsertafter,columndelete,columnsplit,bar,
    #   cellinsertbefore,cellinsertafter,celldelete,cellmerge,cellsplit, bar, about,
    #   linebreak,
    # --- end
    toolbarOrder (
        undo, redo, bar, removeformat, chMode, formatblock,
        linebreak,
        blockstylelabel, blockstyle,
        linebreak,
        bold, italic, bar, orderedlist, unorderedlist, textstyle, link, insertcharacter, line, bar, subscript, superscript, bar, copy, cut, paste, pastetoggle, pastebehaviour, pasteastext, bar, textindicator
        ,bar ,fonticon
    )
    RTEHeightOverride = 500
    RTEWidthOverride = 700
    rteResize = 1
    enableWordClean = 1
    removeTrailingBR = 1
    removeComments = 1
    removeTagsAndContents = style,script
    showStatusBar = 0
    disableObjectResizing = 1

    buttons {
        left.useClass = text-left
        center.useClass = text-center
        right.useClass = text-right
        justifyfull.useClass = text-justify

        blockstyle.tags {
            #table.allowedClasses >
            table.allowedClasses = table, table-striped, table-bordered, table-hover, table-condensed
            div.allowedClasses = table-responsive

            blockquote.allowedClasses = pull-left, pull-right

            h1.allowedClasses = text-left, text-center, text-right
            h2.allowedClasses = text-left, text-center, text-right
            h3.allowedClasses = text-left, text-center, text-right
            h4.allowedClasses = text-left, text-center, text-right

            tr.allowedClasses = success, danger, warning, active
            td.allowedClasses = text-left, text-center, text-right, success, danger, warning, active
        }
        formatblock {
            removeItems = article,aside,footer,header,h6,nav,section
            orderItems = h1, h2, h3, h4, h5, p, quotation, div
        }
        textstyle {
            tags.span.allowedClasses >
            #tags.span.allowedClasses = text-warning, text-danger, text-info, text-success
            tags.REInlineTags >
            REInlineTags >
        }

        link {
            # enable field for link rel-attribute
            relAttribute.enabled = 1
            properties.class.allowedClasses := addToList(lightbox,btn btn-default,btn btn-primary,btn btn-info,btn btn-inverse,btn btn-primary btn-lg,btn btn-info btn-lg)
        }

        table {
            disableEnterParagraphs = 1
            # for firefox only: show special inline row/col manipulation "icons" (not useful)
            #enableHandles = 1
        }
    }


    proc {
        overruleMode = ts_css
        dontConvBRtoParagraph = 1
        remapParagraphTag = p

        #allowTags := addToList(button)
        denyTags >
        #keepPDIVattribs = xml:lang,class,style,align,id
        keepPDIVattribs = xml:lang,class,id
				removeTags = font
        #allowedClasses  < RTE.default.classesCharacter
        allowedClasses (
            external-link, internal-link, download, mail,
            text-left, text-center, text-right, text-justify,
            text-info, text-success, text-warning, text-danger
            lead, badge,
            table, success, warning, danger, active,
            lightbox, indent,
            btn, btn-default, btn-primary, btn-info, btn-success, btn-warning, btn-danger, btn-inverse, btn-link, btn-lg, btn-sm, btn-xs
        )

        allowTagsOutside = img,hr,h1,h2,h3,h4,h5,h6,br,ul,ol,li,pre,address,span,blockquote
        allowTagsInTypolists = br,font,b,i,u,a,img,span

        # Remapping b and i to strong and em (in FE)
        exitHTMLparser_db = 1
        exitHTMLparser_db {
            allowTags < RTE.default.proc.entryHTMLparser_db.allowTags
            tags.b.remap = strong
            tags.i.remap = em
            rmTagIfNoAttrib = div, span
            tags.p.fixAttrib.style.unset = 1
            tags.p.fixAttrib.align.unset >
            tags.p.allowedAttribs = class,style,align
            tags.span.fixAttrib.style.unset = 1
            tags.div.fixAttrib.style.unset = 1
        }
    }
}
RTE.default.FE < RTE.default




# -----------------------------------------------------------------------------
# TCEFORM.tt_content
# -----------------------------------------------------------------------------
#
TCEFORM.tt_content {
    header_layout {
        altLabels {
            1 = Seite
            2 = Absatz
            3 = Paragraph
            4 = In-Text
            100 = nicht anzeigen
        }
        /*
        addItems {
            6 = H3 (special)
        }
        */
        removeItems := addToList(5)
        removeItems := removeFromList(100)
    }


    # section frames
    section_frame {
        #removeItems := addToList(120,121,122,130,140,141,142,143)
        /*
        addItems {
            150 = Do not show on mobile size
            151 = Do not show on tablet and mobile size

            160 = Show only on mobile size
            161 = Show only on medium and large screens
            162 = Show only on large screens
        }
        */
    }

    layout {
        types {
            textpic {
                addItmes {
                    10 = Responsive
                }
            }
            image {
                addItmes.10 = Responsive
            }
            div {
                altLabels.0 = Normal
                }
            }

        }

    # Image position options
    /*
    # 0 = Above, center  | 8  = Below, center  | 17 = In text, right  | 25 = Col, right
    # 1 = Above, right   | 9  = Below, right   | 18 = In text, left   | 26 = Col, left
    # 2 = Above, left    | 10 = Below, left
    imageorient {
        removeItems = 0,1,8,9,17,25
        addItems {
            31 = Bildbox
        }
    }
    */

    # Menu: Accessibility bybass
    accessibility_bypass.disabled = 1
    accessibility_bypass_text.disabled = 1

}

# -----------------------------------------------------------------------------
# TCAdefaults.tt_content
# -----------------------------------------------------------------------------
#
TCAdefaults.tt_content {
    # Default header layout is h2
    #header_layout = 2
    # header position
    #header_position = center
    # show in sectino menu
    sectionIndex = 0
    # default section frame (66 = no frame)
    #section_frame = 66
    # default image cols (instead of 2)
    imagecols = 1
}

