function newguaranee(id) {
    populateFields(this, document.getElementById(id));
    
    
    this.valuevalid = true;
    this.Nupdateguarantee.disabled = true;
    
    this.elementstringarry = [this.Ninvolved, this.Namount, this.NestimatedAmount,
        this.Ncommission, this.NcommissiomPercent, this.NDocumentsCommission, this.NDocumentsCommissionPercent, this.Nstartdate, this.Nenddate,
        this.Nessence, this.Nabout, this.Nindex, this.Nindexdate, this.Ncurency, this.Ncurencyvalue, this.NbeneficiaryName,
        this.NbeneficiaryMail, this.NbeneficiaryPhone, this.NbeneficiaryFax, this.NbeneficiaryAddress];

    this.myobj = {
        guarantee: {},
        customer: {},
        employees: {},
        beneficiary: {},
        group: {},
        fiels: {},



    };
   

    this.NguaraenteeEdit.onclick = function () {
       
        this.myobj.employees = main.User.User_pointer.user;
        this.myobj.employees.password = null;
      
        if (this.NInput.value.length <= 0) {
            message("נא הקלד מס לקוח", this.NguaraenteeMessage, "red");

        }
        else {
            lockUI(main.disconect,main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search, this.NguaraenteeEdit, this.Nupdateguarantee);
            message("אנא המתן....", this.NguaraenteeMessage, "blue");
            let cnumber=this.NInput.value;
            sendHttprquest("api/Customers/get?AcountNumber=" + cnumber, function (success, response) {
                
                if (success && response.length > 0) {
                  
                   
                    let customerresponse = JSON.parse(response);
                    this.myobj.customer = customerresponse[i];
                    lockUI(main.disconect,main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search, this.NguaraenteeEdit, this.Nupdateguarantee);

                    if (customerresponse.length > 1) {
                        message("מספר חשבון כפול במערכת", this.NguaraenteeMessage, "red");
                    }
                    
                    for (var i = 0; i < customerresponse.length; i++) {
                        
                        this.counter = customerresponse[i].guaranteecounter;
                        this.Ncustomername.innerHTML = customerresponse[i].compantName;
                        this.Ninvolved.value = customerresponse[i].compantName;
                        this.groupid = customerresponse[i].groupID;
                        this.customerid = customerresponse[i].customerID

                        this.NDocumentsCommissionPercent.value = customerresponse[i].documentsCommission;
                           
                        this.Ncustomercontacte.innerHTML = customerresponse[i].contactman;
                        this.NCompanyMail.innerHTML = customerresponse[i].companyMail;
                        this.NCompanyPhone.innerHTML = customerresponse[i].companyPhone;
                        this.NCompanyFax.innerHTML = customerresponse[i].companyFax;
                        this.NCompanyAddress.innerHTML = customerresponse[i].companyAddress;
                            this.Ntype.innerHTML = this.Nselect.value;

                        this.myobj.customer = customerresponse[i];

                            this.getsrc("api/Groups/getgroup?=" + this.groupid);
                            switch (this.Ntype.innerHTML) {
                                case "ביצוע":
                                    this.NcommissiomPercent.value = customerresponse[i].executionCommission;
                                    
                                        break;
                                case "פורמלית":
                                    this.NcommissiomPercent.value = customerresponse[i].formalCommission;
                                   
                                    break;
                                case "אבטחת אשראי":
                                    this.NcommissiomPercent.value = customerresponse[i].creditsecurityCommission;
                                    
                                    break;
                                case "":
                                    this.val = -1;
                                    break;


                            }
                        this.NcommissiomPercent.onkeyup = function () {

                            let Ncommission = this.NestimatedAmount.value * this.NcommissiomPercent.value/100;
                            Ncommission = Ncommission.toFixed(2);
                            this.Ncommission.value = Ncommission;
                        }.bind(this);

                        this.NDocumentsCommissionPercent.onkeyup = function () {
                            let NDocumentsCommission = this.NestimatedAmount.value * this.NDocumentsCommissionPercent.value/100;
                            NDocumentsCommission = NDocumentsCommission.toFixed(2);
                            this.NDocumentsCommission.value = NDocumentsCommission;
                        }.bind(this);

                        this.Ncommission.onkeyup = function () {
                          
                            let fixed = this.Ncommission.value / this.NestimatedAmount.value
                            fixed = fixed * 100;
                            fixed = fixed.toFixed(2);
                            this.NcommissiomPercent.value = fixed;

                        }.bind(this);

                        this.NDocumentsCommission.onkeyup = function () {
                            let fixed= this.NDocumentsCommission.value / this.NestimatedAmount.value;
                            fixed = fixed * 100;
                            fixed = fixed.toFixed(2);
                            this.NDocumentsCommissionPercent.value = fixed;

                        }.bind(this);
                            this.NestimatedAmount.onkeyup = function () {
                                
                                if (this.Ncommission.value < 0) 
                                    return;
                                 
                                let Ncommission = this.NestimatedAmount.value * this.NcommissiomPercent.value/100;
                                Ncommission = Ncommission.toFixed(2);
                                
                                this.Ncommission.value = Ncommission;
                                let NDocumentsCommission = this.NestimatedAmount.value * this.NDocumentsCommissionPercent.value/100;
                                NDocumentsCommission = NDocumentsCommission.toFixed(2);
                                this.NDocumentsCommission.value = NDocumentsCommission;
                                

                        }.bind(this);
                        //this.Nstartdate.value = DatenowString();
                        //this.Nenddate.value = DatenowString();
                        //this.Nindexdate.value = DatenowString();
                        

                        this.getsrc("api/Groups/getgroup?=" + this.groupid);
                        
                        }
                    this.Nupdateguarantee.disabled = false;
                    
                    this.Nupdateguarantee.className = "btn btn-success"; 
                    message("", this.NguaraenteeMessage, );


                    } else {

                    lockUI(main.disconect,main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search, this.NguaraenteeEdit, this.Nupdateguarantee);
                    message("לקוח  לא נמצא במערכת", this.NguaraenteeMessage, "red");
                    }



                }.bind(this));
            
          
        }




        }.bind(this);



    this.Nupdateguarantee.onclick = function () {
        message("אנא המתן....", this.NguaraenteeMessage, "blue");
     

     
        lockUI(main.disconect,main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search, this.NguaraenteeEdit, this.Nupdateguarantee);
            for (var i = 0; i < this.elementstringarry.length; i++) {
                
                 let isvalid = SpecialCharacters(this.elementstringarry[i].value, this.elementstringarry[i]);
                if (isvalid===false) {
                    this.valuevalid = false;
                    
                    
                }

        }
        //validation of date;
        let startdate = subtime(this.Nstartdate.value);
        let enddate = subtime(this.Nenddate.value);
        let indexdate = subtime(this.Nindexdate.value);
        if (startdate < -1)  {
            this.valuevalid = false;
            alert("תאריך התחלה אינו חוקי");
        }
        if (enddate < -1 && enddate <= startdate) {
            this.valuevalid = false;
            alert("תאריך סיום אינו חוקי");
        } if (indexdate >= -1) {
            this.valuevalid = false;
            alert("תאריך מדד אינו חוקי");
        }
         
        if (this.valuevalid === true ) {
                //start send to date
                
                this.addbeneficiary("api/Beneficiary/add");


            } else {
            lockUI(main.disconect,main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search, this.NguaraenteeEdit, this.Nupdateguarantee);
            message("אחד או יותר מהשדות אינם חוקיים", this.NguaraenteeMessage, "red");
            this.valuevalid = true;
            }

        }.bind(this);


    //this function add/pul beneficiary from db
    this.addbeneficiary = function (url) {
        
        this.myobj.beneficiary.beneficiaryName = this.NbeneficiaryName.value;
        this.myobj.beneficiary.beneficiaryMail = this.NbeneficiaryMail.value;
        this.myobj.beneficiary.beneficiaryPhone = this.NbeneficiaryPhone.value;
        this.myobj.beneficiary.beneficiaryFax = this.NbeneficiaryFax.value;
        this.myobj.beneficiary.beneficiaryAddress = this.NbeneficiaryAddress.value;

        sendHttprquest(url, function (success, response) {
            this.beneficiaryid = Number(response);
            this.myobj.beneficiary.beneficiaryID = this.beneficiaryid;
            if (success && response >= 0) {

                this.increaseCustomercounter("api/Customers/increasecounter?counter=" + this.counter + "&CustomerID=+" + this.customerid);
                

            } else {
                alert("בעייה בטעינת  נתנוני המוטב");
                this.increaseCustomercounter("api/Customers/increasecounter?counter=" + this.counter + "&CustomerID=+" + this.customerid);

            }



        }.bind(this),this.myobj.beneficiary);

    }.bind(this);
    //this function add new guarantee to data

    this.addguarantee = function (url) {
         
           
        this.myobj.guarantee.dateCreated = todaydormat();
        this.myobj.guarantee.employeeID = main.User.User_pointer.user.employeeID;
        this.myobj.guarantee.customerID = this.customerid;
        this.myobj.guarantee.castumerName = this.Ninvolved.value;
        this.myobj.guarantee.guaranteeNumber = Number(this.counter) + 1;
        this.myobj.guarantee.beneficiaryID = this.beneficiaryid;
        this.myobj.guarantee.startDate = this.Nstartdate.value;
        this.myobj.guarantee.expirationDate = this.Nenddate.value; 
        this.myobj.guarantee.guaranteeType = this.Ntype.innerHTML;
        this.myobj.guarantee.essence = this.Nessence.value;
        this.myobj.guarantee.about = this.Nabout.value;
        this.myobj.guarantee.amount = this.Namount.value;
        this.myobj.guarantee.estimatedAmount = this.NestimatedAmount.value;
        this.myobj.guarantee.commission = this.Ncommission.value;
        this.myobj.guarantee.commissionPercent = this.NcommissiomPercent.value;
        this.myobj.guarantee.documentsCommission = this.NDocumentsCommission.value;
        this.myobj.guarantee.documentsCommissionPercent = this.NDocumentsCommissionPercent.value;
        this.myobj.guarantee.indexType = this.Nindex.value;
        this.myobj.guarantee.indexDate = this.Nindexdate.value; 
        this.myobj.guarantee.currency = this.Ncurency.value;
        this.myobj.guarantee.currencyValue = this.Ncurencyvalue.value;
        this.myobj.guarantee.status = "ממתין לאישור";
        this.myobj.guarantee.note = null;
        this.myobj.guarantee.sentTObusinessManager = "2019-08-06T00:00:00";//future option
        this.myobj.guarantee.sentTOcustomer = "2019-08-06T00:00:00";//future option
        this.myobj.guarantee.sentToManagerSignature = "2019-08-06T00:00:00";//future option
        this.myobj.guarantee.starttreatment = this.Nenddate.value;
        this.myobj.guarantee.endoftreatment = "2017-01-24T00:00:00";//future option
        this.myobj.guarantee.extension = "הקמה";


     
      
        sendHttprquest(url, function (success, response) {
            let num = Number(response);
            this.myobj.guarantee.guaranteeID = num;
            if (success && num > 0 && this.counter != this.myobj.guarantee.guaranteeNumber) {

                
                sendHttprquest("api/Tempdata/Add", function (success, response) {
                 
                    if (success) {
                        //todo
                        //לפתוח אפשריות שליחה למנהל עסקים + עמלות + טיוטת ערבות
                        message("" , this.NguaraenteeMessage);
                        lockUI(main.disconect,main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search, this.NguaraenteeEdit, this.Nupdateguarantee);
                        this.Nupdateguarantee.disabled = true;
                        this.Nupdateguarantee.className = "btn btn-secondary";
                        
                        sendHttprquest("GuaranteDiteals/garanteediteals.html", function (success, response) {

                            removeAllChildNodes(main.main_container);
                            if (success) {
                                message("", this.main_container);
                                main.main_container.innerHTML = response;
                                main.GuaranteeDiteals.GuaranteeDiteals_as_poiinter == true;
                                let GuaranteeDetails = new showGuaranteeDetails(main.main_container.id, this.myobj.guarantee.guaranteeNumber, this.NInput.value);
                                GuaranteeDetails.renderG(false); 

                                
                            } else {
                                message("בעייה בטעינת הדף אנא פנה לצוות התמיכה", this.main_container, "red");


                            }

                        }.bind(this))
                        

                    } else {
                        message("שידור נתוני עריכה נכשלו נא פתח אפשרות לעריכה", this.NguaraenteeMessage, "red");
                        this.Nupdateguarantee.disabled = true;
                        this.Nupdateguarantee.className = "btn btn-secondary";
                        lockUI(main.disconect,main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search, this.NguaraenteeEdit, this.Nupdateguarantee);
                    }

                }.bind(this),this.myobj);
         

            } else {
                message("שידור נתונ לבסיס הנתונים נכשל", this.NguaraenteeMessage, "red");
                lockUI(main.disconect,main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search, this.NguaraenteeEdit, this.Nupdateguarantee);
            }



        }.bind(this), this.myobj.guarantee);

        



    }.bind(this);


       //function toget group from data
    this.getsrc = function (url) {
        sendHttprquest(url, function (success, response) {
           
            if (success && response.length > 0) {
                let groupresponse = JSON.parse(response);
                this.myobj.group = groupresponse;
                
                //לנסות למצוא משהו יותר אלגנטי
                
                this.GroupName.innerHTML = groupresponse[0].groupName;
                this.GroupMail.innerHTML = groupresponse[0].groupMail;
                this.GroupPhone.innerHTML = groupresponse[0].groupPhone;
                this.GroupFax.innerHTML = groupresponse[0].groupFax;
                this.myobj.group = groupresponse[0];
              


              

            } else {
                this.GroupName.innerHTML = "לא נמצא מנהל עסקים";
                this.GroupMail.innerHTML = "לא נמצא מנהל עסקים";
                this.GroupPhone.innerHTML = "לא נמצא מנהל עסקים";
                this.GroupFax.innerHTML = "לא נמצא מנהל עסקים";
                
            }


        }.bind(this));

    }.bind(this);
    
    this.increaseCustomercounter = function (url) {

        sendHttprquest(url, function (success, response) {
            if (success && response =="true") {
               

                this.addguarantee("api/Guarantees/add");
            } else {

                message("בעייה בשרת אנא נסה שוב", this.NguaraenteeMessage, "red");
                lockUI(main.disconect,main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search, this.NguaraenteeEdit, this.Nupdateguarantee);
            }



        }.bind(this));
    }.bind(this);

  
}