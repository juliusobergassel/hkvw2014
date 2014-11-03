config {
    linkVars := addToList(L)
    sys_language_overlay = 1
    sys_language_mode = content_fallback
}
[globalVar = GP:L = 1]
    config {
        sys_language_uid = 1
        locale_all = en_US.UTF-8
        language = en
        htmlTag_langKey = en
    }
[global]
[globalVar = GP:L = 2]
    config {
        sys_language_uid = 2
        locale_all = fr_FR.UTF-8
        language = fr
        htmlTag_langKey = fr
    }
[global]