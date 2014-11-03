lib.langnav = COA
lib.langnav.wrap = <div class="langnav">|</div>
lib.langnav {
    20 = HMENU
    20 {
        special = language
        special.value = 0,1,2
        sepcial.normalWhenNoLanguage = 0
        wrap = |

        1 = TMENU
        1 {
            wrap = |
            NO = 1
            NO.linkWrap = <span>|</span>
            # Manual link creation
            NO.doNotLinkIt = 1
            NO.stdWrap.override = DE || EN || FR
            NO.stdWrap.typolink {
                parameter.data = page:uid
                additionalParams = &L=0 || &L=1 || &L=2
                addQueryString = 1
                addQueryString.exclude = L,id,cHash,no_cache
                addQueryString.method = GET
                useCacheHash = 1
                no_cache = 0
            }

            ACT < .NO
            ACT.linkWrap = <span class="active">|</span>
            USERDEF1 < .NO
            USERDEF2 < .NO
        }
    }
}