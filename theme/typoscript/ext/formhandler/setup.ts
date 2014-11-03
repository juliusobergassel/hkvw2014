plugin.Tx_Formhandler.settings {
    isErrorMarker {
         default =
     }
}
plugin.Tx_Formhandler.settings.predef.hkvwcontact {
    name = HKVWKontaktformular
    debug = 0
    addErrorAnchors = 1
    templateFile = {$plugin.tx_bootstrapcore.theme.baseDir}/tmpl/formhandler/hkvwcontact.html
    masterTemplateFile = {$plugin.tx_bootstrapcore.theme.baseDir}/tmpl/formhandler/master.html
    langFile.1 = {$plugin.tx_bootstrapcore.theme.baseDir}/tmpl/formhandler/locallang.xml
    stylesheetFile >
    formValuesPrefix = formhandler
    errorListTemplate {
        totalWrap = <div class="usermsg usermsg-error"><ul>|</ul></div>
        singleWrap = <li class="error">|</li>
    }
    singleErrorTemplate {
        singleWrap = <span class="fielderr usermsg-errortext">|</span>
    }
    singleFileMarkerTemplate {
        totalWrap = <ul>|</ul>
        singleWrap = <li style="color:maroon;">|</li>
    }
    totalFilesMarkerTemplate {
        totalWrap = <ul>|</ul>
        singleWrap = <li style="color:red;">|</li>
    }
    files {
        uploadFolder = uploads/formhandler/
        enableAjaxFileRemoval = 1
    }
    validators {
        1 {
            class = Tx_Formhandler_Validator_Default
            config {
                fieldConf {
                    name {
                        errorCheck.1 = required
                        errorCheck.2 = maxLength
                        errorCheck.2.value = 80
                    }
                    message {
                        errorCheck.1 = required
                    }
                    email {
                        errorCheck.1 = required
                        errorCheck.2 = email
                    }
										mathguard_answer.errorCheck.1 = mathGuard
                }
            }
        }
    }
    initInterceptors {
        1 {
            class = Tx_Formhandler_Interceptor_Filtreatment
        }
    }
    loggers {
        1 {
            class = Tx_Formhandler_Logger_DB
        }
    }
    finishers {
        1.class = Tx_Formhandler_Finisher_Mail
        1.config {
            limitMailsToUser = 5
            checkBinaryCrLf = message
            admin {
            		templateFile = TEXT
								templateFile.value = {$plugin.tx_bootstrapcore.theme.baseDir}/tmpl/formhandler/email-admin.html
                to_email = julius.obergassel@oglm.de
                to_name = Julius Obergassel
                subject.data = LLL:{$plugin.tx_bootstrapcore.theme.baseDir}/tmpl/formhandler/locallang.xml:email_admin_subject
                return_path =
                sender_email = webforms@heimatverein-werther.de
                sender_name.data = HKVWContact
                replyto_email.data = GPvar:formhandler|email
                replyto_name.data = GPvar:formhandler|name
                htmlEmailAsAttachment = 1
            }
            user {
								templateFile = TEXT
								templateFile.value = {$plugin.tx_bootstrapcore.theme.baseDir}/tmpl/formhandler/email-admin.html
                to_email = GPvar:formhandler|email
                to_name = GPvar:formhandler|name
                subject = Formular
                sender_email = no-reply@heimatverein-werther.de
                sender_name = Heimat- und Kulturverein Werther e.V.
                replyto_email = no-reply@heimatverein-werther.de
                replyto_name = Heimat- und Kulturverein Werther e.V.
                return_path =
                htmlEmailAsAttachment = 1
            }
        }
        2.class = Tx_Formhandler_Finisher_Redirect
				2.config {
					redirectPage = 13
				}
    }
}