function guaranteeEdit(id,response){
    populateFields(this, document.getElementById(id));
 
    this.Editresponse = response;
   
    this.valid = true;


    this.showditels = function () {
        //this.Editresponse.employees = main.User.User_pointer.user;
        //this.Editresponse.employees.password = null;
        if (this.Editresponse.guarantee.extension == "הקמה") {
            this.togle.style.display = "none";
        } else {
            this.togle.style.display = "block";
        }     
        message(" ", this.EguaraenteeMessage);
        lockUI(main.disconect, main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search);
        lockUI(this.Newprotocol, this.ExtensionProtocol, this.Guaranteeconfirm, this.GuaranteeLetter, this.extensionconfirm, this.extensionLetter);
        this.insertInerHTML(this.Editresponse.employees.username, this.Euser);
        this.insertInerHTML(this.Editresponse.guarantee.status, this.editstatus);
        this.insertInerHTML(this.Editresponse.guarantee.castumerName , this.Eusername);
        this.insertInerHTML(this.Editresponse.customer.acountNumber, this.EcustomerAcount);
        this.insertInerHTML(this.Editresponse.guarantee.guaranteeNumber, this.EguaranteeNumber);
        this.insertValue(this.Editresponse.guarantee.amount, this.Eamount);
        this.insertValue(this.Editresponse.guarantee.estimatedAmount, this.EestimatedAmount);
        this.insertValue(this.Editresponse.guarantee.commission, this.Ecommission);
        this.insertValue(this.Editresponse.guarantee.commissionPercent,this.EcommissiomPercent);
        this.insertValue(this.Editresponse.guarantee.documentsCommission, this.EDocumentsCommission);
        this.insertValue(this.Editresponse.guarantee.documentsCommissionPercent, this.EDocumentsCommissionPercent);
        this.Estartdate.innerHTML = tostringdate(this.Editresponse.guarantee.startDate);
        this.Eenddate.innerHTML = tostringdate(this.Editresponse.guarantee.expirationDate);
        this.Enewenddate.value = tosetdate(this.Editresponse.guarantee.starttreatment);
        this.insertInerHTML(this.Editresponse.guarantee.guaranteeType, this.Etype);
        this.insertValue(this.Editresponse.guarantee.essence, this.Eessence);
        this.insertValue(this.Editresponse.guarantee.about, this.Eabout);
        this.insertValue(this.Editresponse.guarantee.indexType, this.Eindex);
        this.Eindexdate.value = tosetdate(this.Editresponse.guarantee.indexDate);
        this.insertValue(this.Editresponse.guarantee.currency, this.Ecurency);
        this.insertValue(this.Editresponse.guarantee.currencyValue, this.Ecurencyvalue);
        this.insertInerHTML(this.Editresponse.customer.compantName, this.Ecustomername);
        this.insertInerHTML(this.Editresponse.customer.contactman, this.Ecustomercontacte);
        this.insertInerHTML(this.Editresponse.customer.companyMail, this.ECompanyMail);
        this.insertInerHTML(this.Editresponse.customer.companyPhone, this.ECompanyPhone);
        this.insertInerHTML(this.Editresponse.customer.companyFax, this.ECompanyFax);
        this.insertInerHTML(this.Editresponse.customer.companyAddress, this.ECompanyAddress);
        this.insertInerHTML(this.Editresponse.beneficiary.beneficiaryName, this.EbeneficiaryName);
        this.insertInerHTML(this.Editresponse.beneficiary.beneficiaryMail, this.EbeneficiaryMail);
        this.insertInerHTML(this.Editresponse.beneficiary.beneficiaryPhone, this.EbeneficiaryPhone);
        this.insertInerHTML(this.Editresponse.beneficiary.beneficiaryFax, this.EbeneficiaryFax);
        this.insertInerHTML(this.Editresponse.beneficiary.beneficiaryAddress, this.EbeneficiaryAddress);
        this.insertInerHTML(this.Editresponse.group.groupName, this.GroupName);
        this.insertInerHTML(this.Editresponse.group.groupMail, this.GroupMail);
        this.insertInerHTML(this.Editresponse.group.groupPhone, this.GroupPhone);
        this.insertInerHTML(this.Editresponse.group.groupFax, this.GroupFax);
        this.ECompanyMail.href ="maitl:"+this.ECompanyMail.value;



        this.companySendEmil = {
            from: this.Editresponse.employees.employeMail,
            to: this.Editresponse.customer.companyMail,
            body: "",
            subject: " בנוגע לערבות מספר" + this.Editresponse.customer.acountNumber + "-" + this.Editresponse.guarantee.guaranteeNumber + " " + "לקוח-" + this.Editresponse.customer.compantName
            , attachment: null
        }
        this.beneficiarySendEmil = {
            from: this.Editresponse.employees.employeMail,
            to: this.Editresponse.beneficiary.beneficiaryMail,
            body: "",
            subject: " בנוגע לערבות מספר" + this.Editresponse.customer.acountNumber + "-" + this.Editresponse.guarantee.guaranteeNumber + " " + "לקוח-" + this.Editresponse.customer.compantName
            , attachment: null
        }
        this.groupSendEmail = {
            from: this.Editresponse.employees.employeMail,
            to: this.Editresponse.group.groupMail,
            body: "",
            subject: " בנוגע לערבות מספר" + this.Editresponse.customer.acountNumber + "-" + this.Editresponse.guarantee.guaranteeNumber + " " + "לקוח-" + this.Editresponse.customer.compantName
            , attachment: null
        }
        //אתחל קבציים
    

    }.bind(this);

    this.insertValue= function (response, element) {


        element.value = response;



    }.bind(this);
    this.insertInerHTML = function (response,element) {


        element.innerHTML=response;
      


    }.bind(this);
    this.EguaraenteeEdit.onclick = function () {
      
        this.Dtitel.innerHTML = "אישור סטטוס";
        this.Dmessagebody.innerHTML = "האם לאשר סטטוס" + ":" + this.Eselect.value;
        $('#myModal').modal('show'); 

    }.bind(this);

    this.ECompanyMail.onclick = function () {
        opendefaultemail(this.companySendEmil);
    }.bind(this);

    this.EbeneficiaryMail.onclick = function () {
        opendefaultemail(this.beneficiarySendEmil);
    }.bind(this);

    this.GroupMail.onclick = function () {
        opendefaultemail(this.groupSendEmail);
    }.bind(this);


    this.Dsave.onclick = function () {
        $('#myModal').modal('hide');

        this.Editresponse.employees = main.User.User_pointer.user;
        this.Editresponse.employees.password = null;
      
        

        this.Editresponse.guarantee.status = this.Eselect.value;
        this.Editresponse.guarantee.employeeID = main.User.User_pointer.user.employeeID;
        this.Editresponse.guarantee.amount = this.Eamount.value;
        this.Editresponse.guarantee.estimatedAmount = this.EestimatedAmount.value;
        this.Editresponse.guarantee.commission = this.Ecommission.value;
        this.Editresponse.guarantee.commissionPercent = this.EcommissiomPercent.value;
        this.Editresponse.guarantee.documentsCommission = this.EDocumentsCommission.value;
        this.Editresponse.guarantee.documentsCommissionPercent = this.EDocumentsCommissionPercent.value;
        this.Editresponse.guarantee.essence = this.Eessence.value;
        this.Editresponse.guarantee.about = this.Eabout.value;
        this.Editresponse.guarantee.indexType = this.Eindex.value;
        this.Editresponse.guarantee.indexDate = this.Eindexdate.value;
        this.Editresponse.guarantee.currency = this.Ecurency.value;
        this.Editresponse.guarantee.currencyValue = this.Ecurencyvalue.value;
        this.Editresponse.guarantee.starttreatment = this.Enewenddate.value;

        if (this.Editresponse.guarantee.status == "מאושר") {
            if (this.Editresponse.guarantee.extension =="הקמה") {
                this.Editresponse.guarantee.extension ="הוקם";
            }
            
            if (this.Editresponse.guarantee.extension == "עדכון") {
                this.Editresponse.guarantee.expirationDate = this.Enewenddate.value;
                let enddate = subtime(this.Enewenddate.value);
                let validdate = SpecialCharacters(this.Enewenddate.value, this.Enewenddate);

                if (validdate == true) {

                    if (enddate < -1) {
                        lockUI(main.disconect, main.myTasks, main.newguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search, this.EguaraenteeEdit);
                        lockUI(this.Newprotocol, this.ExtensionProtocol, this.Guaranteeconfirm, this.GuaranteeLetter, this.extensionconfirm, this.extensionLetter);
                        message("תאריך סיום אינו חוקי", this.EguaraenteeMessage, "red");
                        this.valid = false;

                    } else {

                        this.valid = true;
                    }

                } else {
                    lockUI(main.disconect, main.myTasks, main.newguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search, this.EguaraenteeEdit);
                    lockUI(this.Newprotocol, this.ExtensionProtocol, this.Guaranteeconfirm, this.GuaranteeLetter, this.extensionconfirm, this.extensionLetter);
                    message("תאריך סיום אינו חוקי", this.EguaraenteeMessage, "red");
                    this.valid = false;
                }

            } else {
                this.valid = true;
               
            }
         
         
          
           

        } else {
            if (this.Editresponse.guarantee.extension == "הארכה") {

                let format = changetoserverformat(this.Eenddate.innerHTML);
                this.Editresponse.guarantee.expirationDate = format;
                
            }
            this.valid = true;
            
        }
        
        if (this.valid == true) {
            sendHttprquest("api/Tempdata/update", function (success, response) {
              
                message("נא המתן....", this.EguaraenteeMessage, "blue");
                if (success) {
                    
                    this.Euser.innerHTML = this.Editresponse.employees.username;
                    this.editstatus.innerHTML = this.Eselect.value;
                    message("  עודכן בהצלחה", this.EguaraenteeMessage, "blue");
                    if (main.disconect.disabled == true) {
                        lockUI(main.disconect, main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search, this.EguaraenteeEdit);
                        lockUI(this.Newprotocol, this.ExtensionProtocol, this.Guaranteeconfirm, this.GuaranteeLetter, this.extensionconfirm, this.extensionLetter);
                    }
                    
                

                    //חזרה למסך המסימות  במידה ואושר יש להנפיק טופס ירוק


                }
                else {
                    message("  לא ניתן לעדכן ערבות זו..", this.EguaraenteeMessage, "red");
                    if (main.disconect.disabled == true) {
                        lockUI(main.disconect, main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search, this.EguaraenteeEdit);
                        lockUI(this.Newprotocol, this.ExtensionProtocol, this.Guaranteeconfirm, this.GuaranteeLetter, this.extensionconfirm, this.extensionLetter);
                    }
                }

            }.bind(this), this.Editresponse);
        }
     




    }.bind(this);


    this.EcommissiomPercent.onkeyup = function () {
        let Ecommission = this.EestimatedAmount.value * this.EcommissiomPercent.value/100;
        Ecommission = Ecommission.toFixed(2);
        this.Ecommission.value = Ecommission;
    }.bind(this);

    this.EDocumentsCommissionPercent.onkeyup = function () {
        let EDocumentsCommission = this.EestimatedAmount.value * this.EDocumentsCommissionPercent.value/100;
        EDocumentsCommission = EDocumentsCommission.toFixed(2);
        this.EDocumentsCommission.value = EDocumentsCommission;
    }.bind(this);

    this.Ecommission.onkeyup = function () {
        let fixed = this.Ecommission.value / this.EestimatedAmount.value
        fixed = fixed * 100;
        fixed= fixed.toFixed(2);
        this.EcommissiomPercent.value = fixed;
    }.bind(this);

    this.EDocumentsCommission.onkeyup = function () {
        let fixed = this.EDocumentsCommission.value / this.EestimatedAmount.value;
        fixed = fixed * 100;
        fixed = fixed.toFixed(2);
        this.EDocumentsCommissionPercent.value = fixed;
    }.bind(this);

    this.EestimatedAmount.onkeyup = function () {
        if (this.Ecommission.value < 0)
            return;
        let Ecommission = this.EestimatedAmount.value * this.EcommissiomPercent.value/100;
        Ecommission = Ecommission.toFixed(2);
        this.Ecommission.value = Ecommission;
        let EDocumentsCommission = this.EestimatedAmount.value * this.EDocumentsCommissionPercent.value/100;
        EDocumentsCommission = EDocumentsCommission.toFixed(2);
        this.EDocumentsCommission.value = EDocumentsCommission;
    }.bind(this);


    this.GuaranteeLetter.onclick = function () {
        sendHttprquest("Files/GuaranteeLetter.html", function (success, response) {
            removeAllChildNodes(main.myfiles);
            if (success) {
                main.myfiles.innerHTML = response;
                let file = new setfiles("GuaranteeLetter", this.Editresponse, main.myfiles.id);

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
                let file = new setfiles("Guaranteeconfirm", this.Editresponse, main.myfiles.id);

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
                let file = new setfiles("extensionconfirm", this.Editresponse, main.myfiles.id);

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
                let file = new setfiles("extensionLetter", this.Editresponse, main.myfiles.id);

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
                let file = new setfiles("ExtensionProtocol", this.Editresponse, main.myfiles.id);

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
                let file = new setfiles("Newprotocol", this.Editresponse, main.myfiles.id);

            } else {
                alert("בעייה בטעינת הקובץ");
            }
        }.bind(this));


    }.bind(this);
    //this.showditels();
}