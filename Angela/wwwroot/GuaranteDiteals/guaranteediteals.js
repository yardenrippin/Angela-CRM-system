function showGuaranteeDetails(id, guaranteeNumber, customerNumber) {
    populateFields(this, document.getElementById(id));

    this.guaranteenumber = guaranteeNumber;
    this.customernumber = customerNumber;
    var GuaranteeEdit;


    this.myobje = {
        guarantee: {},
        customer: {},
        employees: {},
        beneficiary: {},
        group: {},
        


    };


    this.renderG = function (isex) {

        //this.myobje.employees = main.User.User_pointer.user;
        //this.myobje.employees.password = null;
        this.isex = isex;
        if (this.guaraenteeEdit.disabled == true) {

            this.guaraenteeEdit.disabled == false;
        }
        sendHttprquest("api/Customers/get?AcountNumber=" + this.customernumber, function (success, response) {

            if (success && response.length > 0) {
                lockUI(main.disconect, main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search, this.guaraenteeEdit);
                lockUI(this.Newprotocol, this.ExtensionProtocol, this.Guaranteeconfirm, this.GuaranteeLetter, this.extensionconfirm, this.extensionLetter);
                message("נא המתן....", this.guaraenteeMessage, "blue");
                let cusomerResponse = JSON.parse(response);


                if (cusomerResponse > 0) {
                    message("אזהרה! חשבון כפול ....", guaraenteeMessage, "red");
                }
                for (let i = 0; i < cusomerResponse.length; i++) {

                    this.groupid = cusomerResponse[i].groupID;
                    this.customerid = cusomerResponse[i].customerID
                    this.customerAcount.innerHTML = cusomerResponse[i].acountNumber;
                    this.customername.innerHTML = cusomerResponse[i].compantName;
                    this.customercontacte.innerHTML = cusomerResponse[i].contactman;
                    this.CompanyMail.innerHTML = cusomerResponse[i].companyMail;
                    this.CompanyPhone.innerHTML = cusomerResponse[i].companyPhone;
                    this.CompanyFax.innerHTML = cusomerResponse[i].companyFax;
                    this.CompanyAddress.innerHTML = cusomerResponse[i].companyAddress;

                    this.myobje.customer = cusomerResponse[i];

                    this.renderGuarantee("api/Guarantees/getByCustomer?CustomerID=" + cusomerResponse[i].customerID + "&Guaranteenumber=" + this.guaranteenumber);


                }









            } else {

                message("לקוח לא קיים ....", guaraenteeMessage, "red");
            }






        }.bind(this));


    }.bind(this);

    this.renderGuarantee = function (url) {

        sendHttprquest(url, function (success, response) {

            if (success && response.length > 0) {

                let guaranteeResponse = JSON.parse(response);

               

                if (guaranteeResponse.length > 1) {
                    message("אזהרה! ערבות כפולה ללקוח זה ....", this.guaraenteeMessage, "red");
                }
                for (var i = 0; i < guaranteeResponse.length; i++) {

                    this.beneficiarid = guaranteeResponse[i].beneficiaryID;
                    this.employeeId = guaranteeResponse[i].employeeID;
                    if (guaranteeResponse[i].status == "מאושר") {
                        this.status.style.color = "green";
                    } if (guaranteeResponse[i].status == "מבוטל") {
                        this.status.style.color = "red";
                    }

                    this.ex = guaranteeResponse[i].extension
                    this.status.innerHTML = guaranteeResponse[i].status;
                    this.guaranteeowner.innerHTML = guaranteeResponse[i].castumerName;
                    this.guaranteeNumber.innerHTML = guaranteeResponse[i].guaranteeNumber;
                    this.amountx.innerHTML = guaranteeResponse[i].amount;
                    this.estimatedAmount.innerHTML = guaranteeResponse[i].estimatedAmount;
                    this.commission.innerHTML = guaranteeResponse[i].commission;
                    this.commissiomPercent.innerHTML = "(" + guaranteeResponse[i].commissionPercent + "%)";
                    this.DocumentsCommission.innerHTML = guaranteeResponse[i].documentsCommission;
                    this.DocumentsCommissionPercent.innerHTML = "(" + guaranteeResponse[i].documentsCommissionPercent + "%)";


                    this.startdate.innerHTML = tostringdate(guaranteeResponse[i].startDate);
                    this.enddate.innerHTML = tostringdate(guaranteeResponse[i].expirationDate);
                    this.timer.innerHTML = subtime(guaranteeResponse[i].expirationDate) + " יום";

                    this.type.innerHTML = guaranteeResponse[i].guaranteeType;
                    this.essence.innerHTML = guaranteeResponse[i].essence;
                    this.about.innerHTML = guaranteeResponse[i].about;
                    this.index.innerHTML = guaranteeResponse[i].indexType;
                    this.indexdate.innerHTML = tostringdate(guaranteeResponse[i].indexDate);
                    this.curency.innerHTML = guaranteeResponse[i].currency;
                    this.curencyvalue.innerHTML = guaranteeResponse[i].currencyValue;
                    // טיפול קבצים

                    this.myobje.guarantee = guaranteeResponse[i];


                    this

                    this.renderbeneficiary("api/Beneficiary/getbyid?beneficiaryID=" + this.beneficiarid);

                    this.rendersrc("api/Groups/getgroup?=" + this.groupid);


                }


            } else {

                message("מספר ערבות : " + this.guaranteenumber + " לא נמצא  ללקוח זה ", this.guaraenteeMessage, "red");

                lockUI(main.disconect, main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search);
                lockUI(this.Newprotocol, this.ExtensionProtocol, this.Guaranteeconfirm, this.GuaranteeLetter, this.extensionconfirm, this.extensionLetter);


            }


        }.bind(this));


    }.bind(this);
    this.renderbeneficiary = function (url) {
        sendHttprquest(url, function (success, response) {
            if (success && response.length > 0) {

                let beneficiaryresponse = JSON.parse(response);
                this.mybeneficiaryresponse = beneficiaryresponse;
                //לנסות למצוא משהו יותר אלגנטי
                this.beneficiaryName.innerHTML = beneficiaryresponse[0].beneficiaryName;
                this.beneficiaryMail.innerHTML = beneficiaryresponse[0].beneficiaryMail;
                this.beneficiaryPhone.innerHTML = beneficiaryresponse[0].beneficiaryPhone;
                this.beneficiaryFax.innerHTML = beneficiaryresponse[0].beneficiaryFax;
                this.beneficiaryAddress.innerHTML = beneficiaryresponse[0].beneficiaryAddress;
                this.myobje.beneficiary = beneficiaryresponse[0];
            } else {
                message(" אזהרה לערבות זו לא קיים מוטב", this.guaraenteeMessage, "red");

                lockUI(main.disconect, main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search, this.guaraenteeEdit);
                lockUI(this.Newprotocol, this.ExtensionProtocol, this.Guaranteeconfirm, this.GuaranteeLetter, this.extensionconfirm, this.extensionLetter);
            }



        }.bind(this));
    }.bind(this);
    this.rendersrc = function (url) {
        sendHttprquest(url, function (success, response) {

            if (success && response.length > 0) {
                let groupresponse = JSON.parse(response);
                this.mygroupresponse = groupresponse;

                //לנסות למצוא משהו יותר אלגנטי

                this.GroupName.innerHTML = groupresponse[0].groupName;
                this.GroupMail.innerHTML = groupresponse[0].groupMail;
                this.GroupPhone.innerHTML = groupresponse[0].groupPhone;
                this.GroupFax.innerHTML = groupresponse[0].groupFax;
                this.myobje.group = groupresponse[0];
                if (this.guaraenteeMessage.innerHTML == "נא המתן....") {
                    message("", this.guaraenteeMessage);
                }


                if (main.myTasks.disabled == true) {
                    lockUI(main.disconect, main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search, this.guaraenteeEdit);
                    lockUI(this.Newprotocol, this.ExtensionProtocol, this.Guaranteeconfirm, this.GuaranteeLetter, this.extensionconfirm, this.extensionLetter);
                }

            } else {
                message(" אזהרה לערבות זו אין מנהל עסקים", this.guaraenteeMessage, "red");
                lockUI(main.disconect, main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search, this.guaraenteeEdit);
                lockUI(this.Newprotocol, this.ExtensionProtocol, this.Guaranteeconfirm, this.GuaranteeLetter, this.extensionconfirm, this.extensionLetter);
            }
            this.renderemployee("api/Employees/getbyid?=" + this.employeeId);

        }.bind(this));

    }.bind(this);
    this.renderemployee = function (url) {
        sendHttprquest(url, function (success, response) {
            let myempployeeresponse = JSON.parse(response);
            if (success && myempployeeresponse != null) {



                this.myobje.employees = myempployeeresponse;


            } else {
                message(" אזהרה לערבות זו לא משוייך עובד", this.guaraenteeMessage, "red");

                lockUI(main.disconect, main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search, this.guaraenteeEdit);
                lockUI(this.Newprotocol, this.ExtensionProtocol, this.Guaranteeconfirm, this.GuaranteeLetter, this.extensionconfirm, this.extensionLetter);
            }

            this.companySendEmil = {
                from: this.myobje.employees.employeMail,
                to: this.myobje.customer.companyMail,
                body: "",
                subject: " בנוגע לערבות מספר" + this.myobje.customer.acountNumber + "-" + this.myobje.guarantee.guaranteeNumber + " " + "לקוח-" + this.myobje.customer.compantName
                , attachment: null
            }
            this.beneficiarySendEmil = {
                from: this.myobje.employees.employeMail,
                to: this.myobje.beneficiary.beneficiaryMail,
                body: "",
                subject: " בנוגע לערבות מספר" + this.myobje.customer.acountNumber + "-" + this.myobje.guarantee.guaranteeNumber + " " + "לקוח-" + this.myobje.customer.compantName
                , attachment: null
            }
            this.groupSendEmail = {
                from: this.myobje.employees.employeMail,
                to: this.myobje.group.groupMail,
                body: "",
                subject: " בנוגע לערבות מספר" + this.myobje.customer.acountNumber + "-" + this.myobje.guarantee.guaranteeNumber + " " + "לקוח-" + this.myobje.customer.compantName
                , attachment: null
            }

        }.bind(this));


    }.bind(this);


    this.renderfile = function () {
        //רינדור קבצים
    }

    this.guaraenteeEdit.onclick = function () {
        message(" אנא המתן....", this.guaraenteeMessage, "blue");
        lockUI(main.disconect, main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search, this.guaraenteeEdit);
        lockUI(this.Newprotocol, this.ExtensionProtocol, this.Guaranteeconfirm, this.GuaranteeLetter, this.extensionconfirm, this.extensionLetter);

        if (this.isex == true && this.ex == "הקמה") {
            lockUI(main.disconect, main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search, this.guaraenteeEdit);
            lockUI(this.Newprotocol, this.ExtensionProtocol, this.Guaranteeconfirm, this.GuaranteeLetter, this.extensionconfirm, this.extensionLetter);
            message(" לא ניתן לערוך ערבות טרם הוקמה", this.guaraenteeMessage, "red");
            return;
        }
        //if (this.isex == false && this.ex == "הוקם") {

        //}
        if (/*this.isex  == true &&*/ this.ex == "הוקם") {

            lockUI(main.disconect, main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search, this.guaraenteeEdit);
            lockUI(this.Newprotocol, this.ExtensionProtocol, this.Guaranteeconfirm, this.GuaranteeLetter, this.extensionconfirm, this.extensionLetter);
            sendHttprquest("api/Guarantees/updateExtension?guaranteeid=" + this.myobje.guarantee.guaranteeID + "&Extension=עדכון", function (success, response) {
                if (success) {
                    lockUI(main.disconect, main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search, this.guaraenteeEdit);
                    lockUI(this.Newprotocol, this.ExtensionProtocol, this.Guaranteeconfirm, this.GuaranteeLetter, this.extensionconfirm, this.extensionLetter);

                    this.myobje.guarantee.extension = response;
                    //sendHttprquest("api/Tempdata/updateEX?id=" + this.myobje.guarantee.guaranteeID + "&str=עדכון", function (success, response) {
                    //    if (success) {
                    this.addtotempdata();
                    //    } else {
                    //        alert("לא ניתן לשייך סוג עריכה יש להעביר על מנת לשנות תוקף ערבות זו בעתיד יש לפנות לצוות התמיה");
                    //        lockUI(main.disconect,main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search, this.guaraenteeEdit);
                    //    }
                    //}.bind(this));

                } else {
                    alert("לא ניתן לשייך סוג עריכה  מנת לשנות תוקף ערבות זו בעתיד יש לפנות לצוות התמיכה");
                    lockUI(main.disconect, main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search, this.guaraenteeEdit);
                    lockUI(this.Newprotocol, this.ExtensionProtocol, this.Guaranteeconfirm, this.GuaranteeLetter, this.extensionconfirm, this.extensionLetter);
                }
            }.bind(this));


        } else {
            this.addtotempdata();
        }







    }.bind(this);

    this.addtotempdata = function () {
        sendHttprquest("api/Tempdata/Add", function (success, response) {

            if (success) {
                lockUI(main.disconect, main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search, this.guaraenteeEdit);
                lockUI(this.Newprotocol, this.ExtensionProtocol, this.Guaranteeconfirm, this.GuaranteeLetter, this.extensionconfirm, this.extensionLetter);
                let editresponse = JSON.parse(response);
              
                sendHttprquest("Guaranteeedit/guaranteeedit.html", function (success, response) {

                    if (success) {
                        removeAllChildNodes(main.main_container);
                        message("", this.guaraenteeMessage);
                        main.main_container.innerHTML = response;
                        GuaranteeEdit = new guaranteeEdit(main.main_container.id, editresponse);
                        GuaranteeEdit.showditels();
                    } else {
                        message(" בעייה בטעינת הדף", this.guaraenteeMessage, "blue");
                    }



                }.bind(this));


                //call to new class and new html file
            } else {
                message(" אזהרה לא ניתן לערוך ערבות זו", this.guaraenteeMessage, "red");
                lockUI(main.disconect, main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search, this.guaraenteeEdit);
                lockUI(this.Newprotocol, this.ExtensionProtocol, this.Guaranteeconfirm, this.GuaranteeLetter, this.extensionconfirm, this.extensionLetter);
            }

           
           
        }.bind(this), this.myobje);
    }.bind(this);

    this.CompanyMail.onclick = function () {
        opendefaultemail(this.companySendEmil);
    }.bind(this);

    this.beneficiaryMail.onclick = function () {
        opendefaultemail(this.beneficiarySendEmil);
    }.bind(this);

    this.GroupMail.onclick = function () {
        opendefaultemail(this.groupSendEmail);
    }.bind(this);

    this.GuaranteeLetter.onclick = function () {
        sendHttprquest("Files/GuaranteeLetter.html", function (success, response) {
            removeAllChildNodes(main.myfiles);
            if (success) {
                main.myfiles.innerHTML = response;
                let file = new setfiles("GuaranteeLetter", this.myobje, main.myfiles.id);
                
            } else {
                alert("בעייה בטעינת הקובץ");
            }
        }.bind(this));
    }.bind(this);

        this.Guaranteeconfirm.onclick = function () {
            removeAllChildNodes(main.myfiles);
            sendHttprquest("Files/Guaranteeconfirm.html", function (success, response) {
                if (success) {
                    main.myfiles.innerHTML = response;
                    let file = new setfiles("Guaranteeconfirm", this.myobje, main.myfiles.id);

                } else {
                    alert("בעייה בטעינת הקובץ");
                }
            }.bind(this));

        
    }.bind(this);
    this.extensionconfirm.onclick = function () {
        removeAllChildNodes(main.myfiles);
        sendHttprquest("Files/extensionconfirm.html", function (success, response) {
            if (success) {
                main.myfiles.innerHTML = response;
                let file = new setfiles("extensionconfirm", this.myobje, main.myfiles.id);

            } else {
                alert("בעייה בטעינת הקובץ");
            }
        }.bind(this));


    }.bind(this);
    this.extensionLetter.onclick = function () {
        removeAllChildNodes(main.myfiles);
        sendHttprquest("Files/extensionLetter.html", function (success, response) {
            if (success) {
                main.myfiles.innerHTML = response;
                let file = new setfiles("extensionLetter", this.myobje, main.myfiles.id);

            } else {
                alert("בעייה בטעינת הקובץ");
            }
        }.bind(this));


    }.bind(this);
    this.ExtensionProtocol.onclick = function () {
        removeAllChildNodes(main.myfiles);
        sendHttprquest("Files/ExtensionProtocol.html", function (success, response) {
            if (success) {
                main.myfiles.innerHTML = response;
                let file = new setfiles("ExtensionProtocol", this.myobje, main.myfiles.id);

            } else {
                alert("בעייה בטעינת הקובץ");
            }
        }.bind(this));


    }.bind(this);
    this.Newprotocol.onclick = function () {
        removeAllChildNodes(main.myfiles);
        sendHttprquest("Files/Newprotocol.html", function (success, response) {
            if (success) {
                main.myfiles.innerHTML = response;
                let file = new setfiles("Newprotocol", this.myobje, main.myfiles.id);

            } else {
                alert("בעייה בטעינת הקובץ");
            }
        }.bind(this));


    }.bind(this);
}
