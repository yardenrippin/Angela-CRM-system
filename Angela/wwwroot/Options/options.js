function runoptions(id) {
   
    populateFields(this, document.getElementById(id));
    this.employeeobj = {};
    this.customerobj = {};
    this.groupobj = {};
    this.addarr = [this.employeNumber, this.Username, this.password, this.Password2, this.employeMail, this.employePhone];
    this.updetarr = [this.upUsername, this.uppassword, this.upemployeMail, this.upemployePhone];
    this.AddCusomerArr = [this.AcountNumber, this.CompantName, this.Contactman, this.CompanyMail, this.CompanyPhone, this.Companyfax, this.CompanyAddress, this.ExecutionCommission, this.FormalCommission, this.CreditsecurityCommission, this.DocumentsCommission];
    this.updateCustomerArr = [this.upCompantName, this.upCompanyMail, this.upCompanyMail, this.upCompanyPhone, this.upCompanyfax, this.upCompanyAddress, this.upExecutionCommission, this.upFormalCommission, this.upCreditsecurityCommission, this.upDocumentsCommission];
    this.addgroupArr = [this.GroupName, this.GroupMail, this.GroupPhone, this.GroupFax];
    this.updategrouparr = [this.upGroupName, this.upGroupMail, this.upGroupPhone, this.upGroupFax]
 
    this.isedit = true;

    this.Dsave.onclick = function () {
        switch (this.Dsave.innerHTML) {
            case "הוסף עובד":
                this.actionupdate("api/Employees/Add", this.emmessage, this.employeeobj);
                break;
            case "עדכן עובד":
                let befor = this.employeeobj.username;
                this.actionupdate("api/Employees/update", this.emmessage, this.employeeobj);
                //this.updateemployeetemp();
                //if (main.User.User_pointer.user.username == befor) {
                //    main.User.User_pointer.user.username = this.employeeobj.username;
                //}
                main.User.User_pointer.user.username = this.employeeobj.username;
                break;
            case "הסר עובד":
                this.actiondelete("api/Employees/delete?EmployeeID=" + this.remove_employee, this.emmessage);
                break;
            case "הוסף לקוח":
                this.actionupdate("api/Customers/Add", this.Cmmessage, this.customerobj);
            case "עדכן לקוח":
                this.actionupdate("api/Customers/update", this.Cmmessage, this.customerobj);
                this.updatcustomertmp();
                break;
            case "הוסף מחלקה":
                this.actionupdate("api/Groups/add", this.groupmmessage, this.groupobj);
            case "עדכן מחלקה":

                this.actionupdate("api/Groups/update", this.groupmmessage, this.groupobj);
                this.updatgruoptemp();
        } 
    }.bind(this);
   

        //action add/update
        this.actionupdate = function (url,messages,obj) {
            sendHttprquest(url, function (success, response) {
                let res = Number(response);
                if (success && res > 0) {
                    lockUI(main.disconect, main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search)
                    lockUI(this.addem, this.updateem, this.selectem, this.removeem, this.updatecu, this.addcu, this.selectcu, this.addgroup, this.selectgroup, this.updatgroup);
                    this.isedit = true;
                    this.renderoptions ();
                    message("עודכן בהצלחה", messages, "blue");
                   
                    $('#Modal').modal('hide');
                } else {

                    message("עדכון נכשל", messages, "red");
                    $('#Modal').modal('hide');
                    lockUI(main.disconect, main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search);
                    lockUI(this.addem, this.updateem, this.selectem, this.removeem, this.updatecu, this.addcu, this.selectcu, this.addgroup, this.selectgroup, this.updatgroup);
                }


            }.bind(this), obj );
        }.bind(this);

    //action delete
    this.actiondelete = function (url) {
        sendHttprquest(url, function (success, response) {
            let res = JSON.parse(response);
            lockUI(main.disconect, main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search);
            lockUI(this.addem, this.updateem, this.selectem, this.removeem, this.updatecu, this.addcu, this.selectcu, this.addgroup, this.selectgroup, this.updatgroup);
            if (success) {

                if (res==true) {
              
                
                    this.isedit = true;
                    this.renderoptions();
                    message("עודכן בהצלחה", this.emmessage, "blue");

                    $('#Modal').modal('hide');
                } else {
                    message("לא ניתן להסיר עובד שיש לו ערביות משוכיות", this.emmessage, "blue");
                    lockUI(main.disconect, main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search);
                    lockUI(this.addem, this.updateem, this.selectem, this.removeem, this.updatecu, this.addcu, this.selectcu, this.addgroup, this.selectgroup, this.updatgroup);
                    $('#Modal').modal('hide');
                    this.isedit = true;
                }
            } else {
                message("עדכון נכשל", this.emmessage, "red");
                $('#Modal').modal('hide');
                this.isedit = true;
                lockUI(main.disconect, main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search)
                lockUI(this.addem, this.updateem, this.selectem, this.removeem, this.updatecu, this.addcu, this.selectcu, this.addgroup, this.selectgroup, this.updatgroup);
            }


        }.bind(this));
    }.bind(this);

    this.renderoptions = function () {
       
        $(this.selectGroup).empty();
        $(this.selectGroup2).empty();
        $(this.selectEmployee).empty();
        $(this.selectEmployee2).empty();
        $(this.selectGroup3).empty();
        $(this.selectGroup4).empty();
        $(this.selectGroup5).empty();

        message("", this.emmessage);

        this.addem.disabled = false;
        this.updateem.disabled = false;
        this.selectem.disabled = false;
        this.removeem.disabled = false; 
        this.getupemploye.style.display = "block";
        this.settupemploye.style.display = "none";
        this.getupcustomers.style.display = "block";
        this.settupcustomers.style.display = "none";
        this.getupgroup.style.display = "block";
        this.settupgroup.style.display = "none";
        if (this.isedit == true) {
            this.isedit = false;
            if (main.User.User_pointer.user.permission != "מנהל") {
                message("נדרשת הרשאת מנהל לאיזור זה...", this.divoptionsmessage, "red");
                lockUI(this.addem, this.updateem, this.selectem, this.removeem, this.updatecu, this.addcu, this.selectcu, this.addgroup, this.selectgroup, this.updatgroup);
                return;
            }
            message("אנא המתן...", this.divoptionsmessage, "blue");
            lockUI(main.disconect, main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search)
            lockUI(this.addem, this.updateem, this.selectem, this.removeem, this.updatecu, this.addcu, this.selectcu, this.addgroup, this.selectgroup, this.updatgroup);

            sendHttprquest("api/Employees/getall", function (success, response) {

                if (success && response != null) {
                    this.emploteeList = JSON.parse(response);

                    for (var i = 0; i < this.emploteeList.length; i++) {
                        let option = document.createElement("option");
                        option.innerHTML = this.emploteeList[i].username + " " + this.emploteeList[i].employeNumber;
                        option.value = this.emploteeList[i].employeeID;
                        this.selectEmployee.appendChild(option);
                        $(option).clone().appendTo(this.selectEmployee2);

                    }
                    sendHttprquest("api/Groups/getall", function (success, response) {
                        if (success && response != null) {
                            this.groupList = JSON.parse(response);
                            for (var i = 0; i < this.groupList.length; i++) {
                                let option = document.createElement("option");
                                option.innerHTML = this.groupList[i].groupName;
                                option.value = this.groupList[i].groupID;
                                this.selectGroup.appendChild(option);
                                    $(option).clone().appendTo(this.selectGroup2);
                                    $(option).clone().appendTo(this.selectGroup3);
                                $(option).clone().appendTo(this.selectGroup4);
                                $(option).clone().appendTo(this.selectGroup5);
                            }
                            lockUI(main.disconect, main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search)
                            lockUI(this.addem, this.updateem, this.selectem, this.removeem, this.updatecu, this.addcu, this.selectcu, this.addgroup, this.selectgroup, this.updatgroup);
                            message("", this.divoptionsmessage);
                        }
                        else {
                            message("שאילתת מנהלי עסיקם  נכשלה", this.divoptionsmessage, "red");
                            lockUI(main.disconect, main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search)
                            lockUI(this.addem, this.updateem, this.selectem, this.removeem, this.updatecu, this.addcu, this.selectcu, this.addgroup, this.selectgroup, this.updatgroup);
                        }

                    }.bind(this));

                } else {
                    message("שאילתת עובדים כשלה", this.divoptionsmessage, "red");
                    lockUI(main.disconect, main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search)
                    lockUI(this.addem, this.updateem, this.selectem, this.removeem, this.updatecu, this.addcu, this.selectcu, this.addgroup, this.selectgroup, this.updatgroup);
                }

            }.bind(this));

        }

    }.bind(this);


    //-------------------------------------------------------------------employees--------------------------------------------------------------------------

  
         
    //add employee.btn
    this.addem.onclick = function () {
        message("", this.emmessage);
        lockUI(main.disconect, main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search)
        lockUI(this.addem, this.updateem, this.selectem, this.removeem, this.updatecu, this.addcu, this.selectcu, this.addgroup, this.selectgroup, this.updatgroup);
        if (this.password.value != this.Password2.value) {
            message("ססמאות לא תואמות אנא נסה שנית", this.emmessage, "red");
            lockUI(main.disconect, main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search)
            lockUI(this.addem, this.updateem, this.selectem, this.removeem, this.updatecu, this.addcu, this.selectcu, this.addgroup, this.selectgroup, this.updatgroup);
            return;

        }
        let isvalid = true;
        for (var i = 0; i < this.addarr.length; i++) {

            let valid = SpecialCharacters(this.addarr[i].value, this.addarr[i]);
            if (valid == false) {
                isvalid = false;
            }
        }
            for (var i = 0; i < this.emploteeList.length; i++) {
                if (this.emploteeList[i].username == this.Username.value || this.emploteeList[i].employeNumber == this.employeNumber.value) {
                    message("משתמש או מס משתמש קיים במערכת", this.emmessage, "red");
                    lockUI(main.disconect, main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search)
                    lockUI(this.addem, this.updateem, this.selectem, this.removeem, this.updatecu, this.addcu, this.selectcu, this.addgroup, this.selectgroup, this.updatgroup);
                    return;

                }
            }
       
        if (isvalid == true) {
           
            //this.employeeobj.employeeID = null;
            this.employeeobj.employeNumber = this.employeNumber.value;
            this.employeeobj.username = this.Username.value;
            this.employeeobj.password = this.password.value;
            this.employeeobj.employeMail = this.employeMail.value;
            this.employeeobj.employePhone = this.employePhone.value;
            this.employeeobj.Titel = "";
            this.employeeobj.Permission = this.permission.value;
            this.employeeobj.groupID = this.selectGroup.value;

           
            this.Dsave.innerHTML = "הוסף עובד"
            this.Dmessagebody.innerHTML="האם להוסיף עובד ?"
            $('#Modal').modal('show');
            
        } else {
            message("אחד או יותר מהפרטים שהוזנו אינם חוקיים", this.emmessage, "red");
            lockUI(main.disconect, main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search)
            lockUI(this.addem, this.updateem, this.selectem, this.removeem, this.updatecu, this.addcu, this.selectcu, this.addgroup, this.selectgroup, this.updatgroup);
        }
        
        
    }.bind(this);

    




    

    //select employee
    this.selectem.onclick = function () {
        message("", this.emmessage);
        lockUI(main.disconect, main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search)
        lockUI(this.addem, this.updateem, this.selectem, this.removeem, this.updatecu, this.addcu, this.selectcu, this.addgroup, this.selectgroup, this.updatgroup);
        let number = Number(this.selectEmployee.value);
        sendHttprquest("api/Employees/getbyid?id=" + number, function (success, response) {
            this.employeeobj = JSON.parse(response);
            this.updatenumber = this.employeeobj.employeNumber;
            if (success && response.length > 0) {
                this.getupemploye.style.display = "none";
                this.settupemploye.style.display = "block";

                this.upUsername.value = this.employeeobj.username;
                this.uppassword.value = null;
                this.upemployeMail.value = this.employeeobj.employeMail;
                this.upemployePhone.value = this.employeeobj.employePhone;


                lockUI(main.disconect, main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search)
                lockUI(this.addem, this.updateem, this.selectem, this.removeem, this.updatecu, this.addcu, this.selectcu, this.addgroup, this.selectgroup, this.updatgroup);
            } else {
                message("שאילתה עובד נכשלה", this.emmessage, "red");
                lockUI(main.disconect, main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search)
                lockUI(this.addem, this.updateem, this.selectem, this.removeem, this.updatecu, this.addcu, this.selectcu, this.addgroup, this.selectgroup, this.updatgroup);
            }


        }.bind(this));




    }.bind(this);
    //send update em to data
    this.updateem.onclick = function () {
        message("", this.emmessage);

        lockUI(main.disconect, main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search)
        lockUI(this.addem, this.updateem, this.selectem, this.removeem, this.updatecu, this.addcu, this.selectcu, this.addgroup, this.selectgroup, this.updatgroup);
        let isvalid = true;
        for (var i = 0; i < this.updetarr.length; i++) {

            let valid = SpecialCharacters(this.updetarr[i].value, this.updetarr[i]);
            if (valid == false) {
                isvalid = false;
            }
        }
   

        if (isvalid == true) {
            //this.updetarr = [this.upUsername, this.uppassword, this.upemployeMail, this.upemployePhone];
            //this.employeeobj.employeeID = null;
            this.employeeobj.employeeID = this.selectEmployee.value;
            this.employeeobj.employeNumber = this.updatenumber;
            this.employeeobj.username = this.upUsername.value;
            this.employeeobj.password = this.uppassword.value;
            this.employeeobj.employeMail = this.upemployeMail.value;
            this.employeeobj.employePhone = this.upemployePhone.value;
            this.employeeobj.Titel = "";
            this.employeeobj.Permission = this.uppermission.value;
            this.employeeobj.groupID = this.selectGroup2.value;


            this.Dsave.innerHTML = "עדכן עובד"
            this.Dmessagebody.innerHTML = "האם לעדכן עובד ?"
            $('#Modal').modal('show');

        } else {
            message("אחד או יותר מהפרטים שהוזנו אינם חוקיים", this.emmessage, "red");
            lockUI(main.disconect, main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search)
            lockUI(this.addem, this.updateem, this.selectem, this.removeem, this.updatecu, this.addcu, this.selectcu, this.addgroup, this.selectgroup, this.updatgroup);
        }

    }.bind(this);
    //renove employee
    this.removeem.onclick = function () {

        message("", this.emmessage);
        this.remove_employee = this.selectEmployee2.value;
        this.Dsave.innerHTML = "הסר עובד"
        this.Dmessagebody.innerHTML = "האם להסיר עובד ?"
        $('#Modal').modal('show');


    }.bind(this);
  

    //---------------------------------------------------------------customers---------------------------------------------------------------


    //add new customer
    this.addcu.onclick = function () {
        message("", this.Cmmessage);

    lockUI(main.disconect, main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search)
        lockUI(this.addem, this.updateem, this.selectem, this.removeem, this.updatecu, this.addcu, this.selectcu, this.addgroup, this.selectgroup, this.updatgroup);
    let isvalid = true;
        for (var i = 0; i < this.AddCusomerArr.length; i++) {

            let valid = SpecialCharacters(this.AddCusomerArr[i].value, this.AddCusomerArr[i]);
        if (valid == false) {
            isvalid = false;
        }
    }


    if (isvalid == true) {
        //this.AddCusomerArr = [this.AcountNumber, this.CompantName, this.Contactman, this.CompanyMail, this.CompanyPhone
        //    , this.Companyfax, this.CompanyAddress, this.ExecutionCommission, this.FormalCommission, this.CreditsecurityCommission, this.DocumentsCommission];
       
        this.customerobj.acountNumber = this.AcountNumber.value;
        this.customerobj.compantName = this.CompantName.value;
        this.customerobj.contactman = this.Contactman.value;
        this.customerobj.companyMail= this.CompanyMail.value;
        this.customerobj.companyPhone = this.CompanyPhone.value;
        this.customerobj.companyFax = this.Companyfax.value;
        this.customerobj.companyAddress = this.CompanyAddress.value;
        this.customerobj.Guaranteecounter = 0;
        this.customerobj.executionCommission = this.ExecutionCommission.value;
        this.customerobj.formalCommission=this.FormalCommission.value;
        this.customerobj.creditsecurityCommission= this.CreditsecurityCommission.value;
        this.customerobj.documentsCommission =this.DocumentsCommission .value;
        this.customerobj.groupID = this.selectGroup3.value;

        let num = Number(this.AcountNumber.value);

        sendHttprquest("api/Customers/firstordefualt?AcountNumber=" + num, function (success, response) {
            let myresponse = JSON.parse(response);
            if (success && myresponse==true) {
                this.Dsave.innerHTML = "הוסף לקוח"
                this.Dmessagebody.innerHTML = "האם להוסיף לקוח ?"
                $('#Modal').modal('show');
            } else {
                lockUI(main.disconect, main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search)
                lockUI(this.addem, this.updateem, this.selectem, this.removeem, this.updatecu, this.addcu, this.selectcu, this.addgroup, this.selectgroup, this.updatgroup);
                message("לקוח זה קיים במערכת", this.Cmmessage, "red");
            }
        }).bind(this);

    } else {
            message("אחד או יותר מהפרטים שהוזנו אינם חוקיים", this.Cmmessage, "red");
        lockUI(main.disconect, main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search)
        lockUI(this.addem, this.updateem, this.selectem, this.removeem, this.updatecu, this.addcu, this.selectcu, this.addgroup, this.selectgroup, this.updatgroup);
    }

}.bind(this);

    //select customer
    this.selectcu.onclick = function () {
        message("", this.Cmmessage);
        lockUI(main.disconect, main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search)
        lockUI(this.addem, this.updateem, this.selectem, this.removeem, this.updatecu, this.addcu, this.selectcu, this.addgroup, this.selectgroup, this.updatgroup);
        let number = Number(this.Selectcustomer.value);
        sendHttprquest("api/Customers/get?AcountNumber=" + number, function (success, response) {
           
            
            if (success && response.length > 0) {
                this.cuontresponse = -1;
                this.customerobj = JSON.parse(response);
                this.getupcustomers.style.display = "none";
                this.settupcustomers.style.display = "block";
                if (this.customerobj.length>1) {
                    message("הזהרה לקוח מספר לקוח כפול במערכת", this.Cmmessage, "red");
                }
                for (var i = 0; i < this.customerobj.length; i++) {
                    this.upCompantName.value = this.customerobj[i].compantName;
                    this.upContactman.value = this.customerobj[i].contactman;
                    this.upCompanyMail.value = this.customerobj[i].companyMail;
                    this.upCompanyPhone.value = this.customerobj[i].companyPhone;
                    this.upCompanyfax.value = this.customerobj[i].companyFax;
                    this.upCompanyAddress.value = this.customerobj[i].companyAddress;

                    this.upExecutionCommission.value = this.customerobj[i].executionCommission;
                    this.upFormalCommission.value = this.customerobj[i].formalCommission;
                    this.upCreditsecurityCommission.value = this.customerobj[i].creditsecurityCommission;
                    this.upDocumentsCommission.value = this.customerobj[i].documentsCommission;
                    this.cuontresponse++;
                }
                this.customerobj = this.customerobj[this.cuontresponse];


                lockUI(main.disconect, main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search)
                lockUI(this.addem, this.updateem, this.selectem, this.removeem, this.updatecu, this.addcu, this.selectcu, this.addgroup, this.selectgroup, this.updatgroup);
            } else {
                message("לקוח מספר: " + this.Selectcustomer.value +  " לא קיים במערכת", this.Cmmessage, "red");
                lockUI(main.disconect, main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search)
                lockUI(this.addem, this.updateem, this.selectem, this.removeem, this.updatecu, this.addcu, this.selectcu, this.addgroup, this.selectgroup, this.updatgroup);
            }


        }.bind(this));




    }.bind(this);
    //send update cusomer to data
    this.updatecu.onclick = function () {
        message("", this.emmessage);

        lockUI(main.disconect, main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search)
        lockUI(this.addem, this.updateem, this.selectem, this.removeem, this.updatecu, this.addcu, this.selectcu, this.addgroup, this.selectgroup, this.updatgroup);
        let isvalid = true;
        for (var i = 0; i < this.updateCustomerArr.length; i++) {

            let valid = SpecialCharacters(this.updateCustomerArr[i].value, this.updateCustomerArr[i]);
            if (valid == false) {
                isvalid = false;
            }
        }


        if (isvalid == true) {
           
         
               
          
           
            this.customerobj.compantName = this.upCompantName.value;
            this.customerobj.contactman = this.upContactman.value
            this.customerobj.companyMail = this.upCompanyMail.value;
            this.customerobj.companyPhone = this.upCompanyPhone.value;
            this.customerobj.companyFax = this.upCompanyfax.value;
            this.customerobj.companyAddress = this.upCompanyAddress.value;

            this.customerobj.executionCommission = this.upExecutionCommission.value;
            this.customerobj.formalCommission = this.upFormalCommission.value;
            this.customerobj.creditsecurityCommission = this.upCreditsecurityCommission.value;
            this.customerobj.documentsCommission = this.upDocumentsCommission.value;
            this.customerobj.groupID = this.selectGroup4.value;

            this.Dsave.innerHTML = "עדכן לקוח"
            this.Dmessagebody.innerHTML = "האם לעדכן לקוח ?"
            $('#Modal').modal('show');

        } else {
            message("אחד או יותר מהפרטים שהוזנו אינם חוקיים", this.emmessage, "red");
            lockUI(main.disconect, main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search);
            lockUI(this.addem, this.updateem, this.selectem, this.removeem, this.updatecu, this.addcu, this.selectcu, this.addgroup, this.selectgroup, this.updatgroup);
        }

    }.bind(this);





    //---------------------------------------------------------------groups------------------------------------------------------------------

    this.addgroup.onclick = function () {
        message("אנא המתן", this.groupmmessage, "blue");
        lockUI(main.disconect, main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search);
        lockUI(this.addem, this.updateem, this.selectem, this.removeem, this.updatecu, this.addcu, this.selectcu, this.addgroup, this.selectgroup, this.updatgroup);
     
        for (var i = 0; i < this.groupList.length; i++) {
            if (this.groupList[i].groupName==this.GroupName.value ) {
                lockUI(main.disconect, main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search);
                lockUI(this.addem, this.updateem, this.selectem, this.removeem, this.updatecu, this.addcu, this.selectcu, this.addgroup, this.selectgroup, this.updatgroup);
                message("קבוצה זו קיימת במערכת", this.groupmmessage, "red");
                return;
            }
            let isvalid = true;
            for (var i = 0; i < this.addgroupArr.length; i++) {

                let valid = SpecialCharacters(this.addgroupArr[i].value, this.addgroupArr[i]);
                if (valid == false) {
                    isvalid = false;
                }
            }


            if (isvalid == true) {
          
               
                this.groupobj.groupName = this.GroupName.value;
                this.groupobj.groupMail = this.GroupMail.value;
                this.groupobj.groupPhone = this.GroupPhone.value;
                this.groupobj.groupFax = this.GroupFax.value;



                this.Dsave.innerHTML = "הוסף מחלקה"
                this.Dmessagebody.innerHTML = "האם להוסיף מחלקה ?"
                $('#Modal').modal('show');

            } else {
                message("אחד או יותר מהפרטים שהוזנו אינם חוקיים", this.groupmmessage, "red");
                lockUI(main.disconect, main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search);
                lockUI(this.addem, this.updateem, this.selectem, this.removeem, this.updatecu, this.addcu, this.selectcu, this.addgroup, this.selectgroup, this.updatgroup);
            }

        }
      

    }.bind(this);

    this.selectgroup.onclick = function () {

       
        message("", this.groupmmessage);
        lockUI(main.disconect, main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search);
            lockUI(this.addem, this.updateem, this.selectem, this.removeem, this.updatecu, this.addcu, this.selectcu, this.addgroup, this.selectgroup, this.updatgroup);
        let number = Number(this.selectGroup5.value);
        sendHttprquest("api/Groups/getgroup?groupid=" + number, function (success, response) {
            this.groupobj = JSON.parse(response);
                
                if (success && response.length > 0) {
                  
                    this.getupgroup.style.display = "none";
                    this.settupgroup.style.display = "block";
                    let count = -1;
                    for (var i = 0; i < this.groupobj.length; i++) {
                        this.upGroupName.value = this.groupobj[i].groupName
                        this.upGroupMail.value = this.groupobj[i].groupMail;
                        this.upGroupPhone.value = this.groupobj[i].groupPhone;
                        this.upGroupFax.value = this.groupobj[i].groupFax;
                        count++;
                    }
                    this.groupobj = this.groupobj[count];



                    lockUI(main.disconect, main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search)
                    lockUI(this.addem, this.updateem, this.selectem, this.removeem, this.updatecu, this.addcu, this.selectcu, this.addgroup, this.selectgroup, this.updatgroup);
                } else {
                    message("שאילתה קבוצה נכשלה", this.groupmmessage, "red");
                    lockUI(main.disconect, main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search)
                    lockUI(this.addem, this.updateem, this.selectem, this.removeem, this.updatecu, this.addcu, this.selectcu, this.addgroup, this.selectgroup, this.updatgroup);
                }


         
        }.bind(this));

    }.bind(this);

    this.updategroup.onclick = function () {

        message("", this.groupmmessage);

        lockUI(main.disconect, main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search)
        lockUI(this.addem, this.updateem, this.selectem, this.removeem, this.updatecu, this.addcu, this.selectcu, this.addgroup, this.selectgroup, this.updatgroup);
        let isvalid = true;
        for (var i = 0; i < this.updategrouparr.length; i++) {

            let valid = SpecialCharacters(this.updategrouparr[i].value, this.updategrouparr[i]);
            if (valid == false) {
                isvalid = false;
            }
        }


        if (isvalid == true) {


            this.groupobj.groupID = this.selectGroup5.value;
            this.groupobj.groupName = this.upGroupName.value;
            this.groupobj.groupMail = this.upGroupMail.value;
            this.groupobj.groupPhone = this.upGroupPhone.value;
            this.groupobj.groupFax = this.upGroupFax.value;


          

            this.Dsave.innerHTML = "עדכן מחלקה"
            this.Dmessagebody.innerHTML = "האם לעדכן מחלקה ?"
            $('#Modal').modal('show');

        } else {
            message("אחד או יותר מהפרטים שהוזנו אינם חוקיים", this.groupmmessage, "red");
            lockUI(main.disconect, main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search);
            lockUI(this.addem, this.updateem, this.selectem, this.removeem, this.updatecu, this.addcu, this.selectcu, this.addgroup, this.selectgroup, this.updatgroup);
        }

    }.bind(this);

    this.updateemployeetemp = function () {
        sendHttprquest("api/Tempdata/updateemployee/", function (success, response) {
            if (success && response == "true") {

            } else {
                alert("לא ניתן לעדכן ברשימה זמנית")
            }

        }.bind(this), this.employeeobj);
    }.bind(this);

    this.updatcustomertmp = function () {
        sendHttprquest("api/Tempdata/updatecuscustomer/", function (success, response) {
            if (success && response == "true") {

            } else {
                alert("לא ניתן לעדכן ברשימה זמנית")
            }

        }.bind(this), this.customerobj);
    }.bind(this);

    this.updatgruoptemp = function () {
        sendHttprquest("api/Tempdata/updategroup/", function (success, response) {
            if (success && response == "true") {

            } else {
                alert("לא ניתן לעדכן ברשימה זמנית")
            }

        }.bind(this), this.groupobj);
    }.bind(this);

}