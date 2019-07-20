function start(id) {
    this.mainid = document.getElementById(id);
    populateFields(this, this.mainid);


    //********************************************************Future uising **************************************************************
    const fullDataFields = [
        //guaranteefield
        { fieldName: "guaranteeID", title: "ID", className: "key", fieldType: "pk", Url: "api/???" },
        { fieldName: "dateCreated", title: "תאריך התחלה", className: "key", fieldType: "datetime" },
        { fieldName: "empploeeID", title: "ID", className: "key", fieldType: "fk", foreignTable: "employees", foreignDisplay: "username", Url: "api/???" },
        { fieldName: "customerID", title: "ID", className: "key", fieldType: "fk", foreignTable: "employees", foreignDisplay: "username", Url: "api/???" },
        { fieldName: "guaranteeNumber", title: "מספר ערבות", className: "key", fieldType: "string" },
        { fieldName: "startDate", title: "תאריך התחלה", className: "key", fieldType: "datetime" },
        { fieldName: "expirationDate", title: "תאריך סיום", className: "key", fieldType: "datetime" },
        { fieldName: "GuaranteeType", title: "סוג ערבות", className: "key", fieldType: "string" },
        { fieldName: "Essence", title: "מהות", className: "key", fieldType: "string" },
        { fieldName: "About", title: "בנוגע ל", className: "key", fieldType: "string" },
        { fieldName: "amount", title: "סכום", className: "key", fieldType: "dacimel" },
        { fieldName: "estimatedAmount", title: "סכום משוערך", className: "key", fieldType: "dacimel" },
        { fieldName: "commission", title: "עמלה", className: "key", fieldType: "dacimel" },
        { fieldName: "commissionPercent", title: "אחוז עמלה", className: "key", fieldType: "dacimel" },
        { fieldName: "documentsCommission", title: "עמלת מסמכים", className: "key", fieldType: "dacimel" },
        { fieldName: "documentsCommissionPercent", title: "אחוז עמלת מסמכים", className: "key", fieldType: "dacimel" },
        { fieldName: "indexType", title: "מדד", className: "key", fieldType: "string" },
        { fieldName: "indexDate", title: "תאריך", className: "key", fieldType: "date" },
        { fieldName: "currency", title: "מטבע", className: "key", fieldType: "string" },
        { fieldName: "currencyValue", title: "ערך מטבע", className: "key", fieldType: "string" },
        { fieldName: "stasus", title: "סטטוס", className: "key", fieldType: "string" },
        { fieldName: "note", title: "הערות", className: "key", fieldType: "string" },
        { fieldName: "sentTObusinessManager", title: "נשלח למנהל עסקים", className: "key", fieldType: "datetime" },
        { fieldName: "sentTOcustomer", title: "נשלח ללקוח", className: "key", fieldType: "datetime" },
        { fieldName: "SentToManagerSignature", title: "נשלח לחתימת לקוח", className: "key", fieldType: "datetime" },
        { fieldName: "starttreatment", title: "תחילת טיפול", className: "key", fieldType: "datetime" },
        { fieldName: "endoftreatment", title: "סיום טיפול", className: "key", fieldType: "datetime" },
        { fieldName: "extension", title: "הארכה", className: "key", fieldType: "int" },

        //employeefild

        { fieldName: "empploeeID", title: "ID", className: "key", fieldType: "fk", foreignTable: "employees", foreignDisplay: "username", Url: "api/???" },
        { fieldName: "username", title: "עובד", className: "key", fieldType: "fk", foreignTable: "employees", foreignDisplay: "username", Url: "api/???" },
        { fieldName: "empploeeID", title: "ID", className: "key", fieldType: "fk", foreignTable: "employees", foreignDisplay: "username", Url: "api/???" },
        { fieldName: "empploeeID", title: "ID", className: "key", fieldType: "fk", foreignTable: "employees", foreignDisplay: "username", Url: "api/???" },
        { fieldName: "empploeeID", title: "ID", className: "key", fieldType: "fk", foreignTable: "employees", foreignDisplay: "username", Url: "api/???" },
        { fieldName: "empploeeID", title: "ID", className: "key", fieldType: "fk", foreignTable: "employees", foreignDisplay: "username", Url: "api/???" },
        { fieldName: "empploeeID", title: "ID", className: "key", fieldType: "fk", foreignTable: "employees", foreignDisplay: "username", Url: "api/???" },
        { fieldName: "empploeeID", title: "ID", className: "key", fieldType: "fk", foreignTable: "employees", foreignDisplay: "username", Url: "api/???" },
        { fieldName: "empploeeID", title: "ID", className: "key", fieldType: "fk", foreignTable: "employees", foreignDisplay: "username", Url: "api/???" },
        { fieldName: "empploeeID", title: "ID", className: "key", fieldType: "fk", foreignTable: "employees", foreignDisplay: "username", Url: "api/???" },
        { fieldName: "empploeeID", title: "ID", className: "key", fieldType: "fk", foreignTable: "employees", foreignDisplay: "username", Url: "api/???" },
        { fieldName: "empploeeID", title: "ID", className: "key", fieldType: "fk", foreignTable: "employees", foreignDisplay: "username", Url: "api/???" },
        { fieldName: "empploeeID", title: "ID", className: "key", fieldType: "fk", foreignTable: "employees", foreignDisplay: "username", Url: "api/???" },
        { fieldName: "empploeeID", title: "ID", className: "key", fieldType: "fk", foreignTable: "employees", foreignDisplay: "username", Url: "api/???" },
        { fieldName: "empploeeID", title: "ID", className: "key", fieldType: "fk", foreignTable: "employees", foreignDisplay: "username", Url: "api/???" },
        { fieldName: "empploeeID", title: "ID", className: "key", fieldType: "fk", foreignTable: "employees", foreignDisplay: "username", Url: "api/???" },
        { fieldName: "empploeeID", title: "ID", className: "key", fieldType: "fk", foreignTable: "employees", foreignDisplay: "username", Url: "api/???" },
        { fieldName: "empploeeID", title: "ID", className: "key", fieldType: "fk", foreignTable: "employees", foreignDisplay: "username", Url: "api/???" },

    ]

       //******************************************************** end of  Future uising **************************************************************
    

    this.Guaranteetable = {
        Guaranteetable_pointer: null,
        Guaranteetable_as_pointer: false,
        Guaranteetable_respone: [],
        Guaranteetable_headers: ["עובד","נושא", "מנהל עסקים", "לקוח", "מספר חשבון", "מספר ערבות", "מוטב", "תאריך התחלה", "תאריך סיום", "סכום", "סכום משוערך", "סטטוס", "פרטים"],
   
        Guaranteetable_field: [
            { class: "employees", fieldName: "username", title: "עובד", className: "key", fieldType: "pk", foreignTable: "employees", foreignDisplay: "username", foreignUrl: "api/???" },
            { class: "guarantee", fieldName: "extension", title: "מספר ערבות", className: "key", fieldType: "string" },
            { class: "group", fieldName: "groupName", title: "מנהל עסקים", className: "key", fieldType: "pk", foreignTable: "customers", foreignDisplay: "compantName", foreignUrl: "api/???" },
            { class: "customer", fieldName: "compantName", title: "לקוח", className: "key", fieldType: "pk", foreignTable: "customers", foreignDisplay: "compantName", foreignUrl: "api/???" },
            { class: "customer", fieldName: "acountNumber", title: "מספר חשבון", className: "key", fieldType: "pk", foreignTable: "customers", foreignDisplay: "acountNumber", foreignUrl: "api/???" },
            { class: "guarantee", fieldName: "guaranteeNumber", title: "מספר ערבות", className: "key", fieldType: "string" },
            { class: "beneficiary", fieldName: "beneficiaryName", title: "מוטב", className: "key", fieldType: "pk", foreignTable: "beneficiarys", foreignDisplay: " beneficiaryName", foreignUrl: "api/???" },
            { class: "guarantee", fieldName: "startDate", title: "תאריך התחלה", className: "key", fieldType: "datetime" },
            { class: "guarantee", fieldName: "expirationDate", title: "תאריך סיום", className: "key", fieldType: "datetime" },
            { class: "guarantee", fieldName: "amount", title: "סכום", className: "key", fieldType: "bouble" },
            { class: "guarantee", fieldName: "estimatedAmount", title: "סכום משוערך", className: "key", fieldType: "bouble" },
            { class: "guarantee", fieldName: "status", title: "סטטוס", className: "key", fieldType: "bouble" },


        ]
    }
    this.User = {
        User_pointer: null,
        User_as_pointer: false
    }

    this.GuaranteeDiteals = {

        GuaranteeDiteals_pointer: null,
        GuaranteeDiteals_as_poiinter: false,
        Guarantee_Numbeer: null,
        Customer_Number: null,
        GuaranteeDiteals_Filds: fullDataFields,
        isEX: null





    }
    this.Newguarantee = {
        Newguarantee_pointer: null,
        Newguarantee_as_pointer: false,
        Newguarantee_html: null
    }

    this.Extenstion = {
        extenstion_pointer: null,
        extenstion_as_poiinter: false,
        extenstion_Numbeer: null,
        extenstion_Number: null,

    }
    this.Options = {
        options_pointer: null,
        options_as_pointer: false,
    }
    this.options.onclick = function () {
        lockUI(this.disconect,this.myTasks, this.createguarantee, this.extension, this.advancedSearch, this.statistics, this.options, this.search);
        if (this.Options.options_as_pointer == false) {
            sendHttprquest("Options/options.html", function (success, response) {
                if (success) {
                    lockUI(this.disconect,this.myTasks, this.createguarantee, this.extension, this.advancedSearch, this.statistics, this.options, this.search);
                    removeAllChildNodes(this.main_container);
                    this.main_container.innerHTML = response;
                    this.Options.options_as_pointer = true;
                    this.Options.options_pointer = new runoptions(this.main_container.id);
                    this.Options.options_pointer.renderoptions();
                }
                else {
                    message("בעייה בטעינת הדף אנא פנה לצוות התמיכה", this.main_container, "red");
                }
                

            }.bind(this));

        } else {
            lockUI(this.disconect,this.myTasks, this.createguarantee, this.extension, this.advancedSearch, this.statistics, this.options, this.search);
            removeAllChildNodes(this.main_container);
            this.main_container.appendChild(this.Options.options_pointer.divoptions);
            this.Options.options_pointer.isedit = true;
            this.Options.options_pointer.renderoptions();
            
            
        
        }
    }.bind(this);
    this.disconect.onclick = function () {
        if (this.disconect.innerHTML=="התנתק") {
            lockUI(this.disconect,this.myTasks, this.createguarantee, this.extension, this.advancedSearch, this.statistics, this.options, this.search, this.disconect);
            message("אנא המתן....", this.main_container);
            main.usernume.innerHTML = "משתמש";
            this.disconect.innerHTML == "התחבר"
            main.User.User_pointer.user = null;
            removeAllChildNodes(main.main_container);
            main.main_container.appendChild(main.User.User_pointer.LoginOrSingupPage);
            
            
        } if (this.disconect.innerHTML == "התחבר") {
            lockUI(this.disconect,this.disconect,this.myTasks, this.createguarantee, this.extension, this.advancedSearch, this.statistics, this.options, this.search, this.disconect);
            removeAllChildNodes(this.main_container);
            this.main_container.appendChild(this.User.User_pointer.LoginOrSingupPage);
            this.disconect.innerHTML == "התנתק"
        }
       

    }.bind(this);

    this.login = function () {
        lockUI(this.disconect,this.disconect,this.myTasks, this.createguarantee, this.extension, this.advancedSearch, this.statistics, this.options, this.search);
        if (this.User.User_as_pointer == false) {
            sendHttprquest("Users/loginOrSignupPage.html", function (success, response) {
                if (success) {
                    removeAllChildNodes(this.main_container);
                    this.main_container.innerHTML = response;
                    this.User.User_as_pointer = true;
                    this.User.User_pointer = new LoginOrSignup(this.main_container.id);
                } else {
                    message("בעייה בטעינת הדף אנא פנה לצוות התמיכה", this.main_container, "red");
                }


            }.bind(this));
        }
        else {
            lockUI(this.disconect,this.myTasks, this.createguarantee, this.extension, this.advancedSearch, this.statistics, this.options, this.search);
            removeAllChildNodes(this.main_container);
            this.main_container.appendChild(this.User.User_pointer.LoginOrSingupPage);
        }
    }.bind(this);


    this.createguarantee.onclick = function () {
        
        lockUI(this.disconect,this.myTasks, this.createguarantee, this.extension, this.advancedSearch, this.statistics, this.options, this.search);
        if (this.Newguarantee.Newguarantee_as_pointer == false) {

            sendHttprquest("Newguarantee/newguarantee.html", function (success, response) {

                if (success) {
                    removeAllChildNodes(this.main_container);
                    
                    this.Newguarantee.Newguarantee_html = response;
                    this.main_container.innerHTML = this.Newguarantee.Newguarantee_html;

                    lockUI(this.disconect,this.myTasks, this.createguarantee, this.extension, this.advancedSearch, this.statistics, this.options, this.search);
                    this.Newguarantee.Newguarantee_pointer = new newguaranee(this.main_container.id);
                    for (var i = 0; i < this.Newguarantee.Newguarantee_pointer.elementstringarry.length; i++) {
                        $(this.Newguarantee.Newguarantee_pointer.elementstringarry[i]).val(null);
                    }

                    this.Newguarantee.Newguarantee_as_pointer= true;
                   

                }
                else {
                    message("בעייה בטעינת הדף אנא פנה לצוות התמיכה", this.main_container, "red");
                }

            }.bind(this));


        } else {
            lockUI(this.disconect,this.myTasks, this.createguarantee, this.extension, this.advancedSearch, this.statistics, this.options, this.search);
            
            removeAllChildNodes(this.main_container);
            for (var i = 0; i < this.Newguarantee.Newguarantee_pointer.elementstringarry.length; i++) {
                $(this.Newguarantee.Newguarantee_pointer.elementstringarry[i]).val(null);
            }
            this.main_container.appendChild(this.Newguarantee.Newguarantee_pointer.newguarantee);
        }



    }.bind(this);
    //click on "המשימות שלי" button
    this.myTasks.onclick = function () {

        this.rendertbl("api/Tempdata/getbyemployee?employeeID=" + this.User.User_pointer.user.employeeID);

    }.bind(this);
    
    // הארכת ערבות
    this.extension.onclick = function () {
        lockUI(this.disconect,this.myTasks, this.createguarantee, this.extension, this.advancedSearch, this.statistics, this.options, this.search);
        if (this.Extenstion.extenstion_as_poiinter == false) {
            sendHttprquest("Extension/Extension.html", function (success, response) {
                removeAllChildNodes(this.main_container);
                if (success) {
                    lockUI(this.disconect,this.myTasks, this.createguarantee, this.extension, this.advancedSearch, this.statistics, this.options, this.search);
                    this.main_container.innerHTML = response;
                    this.Extenstion.extenstion_as_poiinter = true;
                    this.Extenstion.extenstion_poiinter = new myExtension(this.main_container.id);
                } else {
                    lockUI(this.disconect,this.myTasks, this.createguarantee, this.extension, this.advancedSearch, this.statistics, this.options, this.search);
                    message("בעייה בטעינת הדף אנא פנה לצוות התמיכה", this.main_container, "red");
                    this.GuaranteeDiteals.GuaranteeDiteals_as_poiinter == true;

                }
            }.bind(this));
        } else {
            removeAllChildNodes(this.main_container);
            lockUI(this.disconect,this.myTasks, this.createguarantee, this.extension, this.advancedSearch, this.statistics, this.options, this.search);
            this.main_container.appendChild(this.Extenstion.extenstion_poiinter.EX);

            
        }

    }.bind(this);

    this.search.onclick = function () {
       
        if (this.customerNumber.value.length > 0 && this.guaranteeNumber.value.length > 0) {
            if (this.GuaranteeDiteals.GuaranteeDiteals_as_poiinter == false) {
                sendHttprquest("GuaranteDiteals/garanteediteals.html", function (success, response) {
              
                    removeAllChildNodes(this.main_container);
                    if (success) {

                        this.main_container.innerHTML = response;
                        this.GuaranteeDiteals.GuaranteeDiteals_as_poiinter == true;
                        this.GuaranteeDiteals.GuaranteeDiteals_pointer = new showGuaranteeDetails(this.main_container.id, this.guaranteeNumber.value, this.customerNumber.value);
                        this.GuaranteeDiteals.GuaranteeDiteals_pointer.renderG(false);
                   
                     

                    } else {
                        message("בעייה בטעינת הדף אנא פנה לצוות התמיכה", this.main_container, "red");
                     
                        
                    }
                  
                }.bind(this))

            } else {
                if (this.customerNumber.value.length <= 0 && this.guaranteeNumber.value.length <= 0) {
                    this.customerNumber.placeholder = "הזן מספר חשבון";
                    this.guaranteeNumber.placeholder = "הזן מספר ערבות";


                } else if (this.guaranteeNumber.value.length <= 0) {
                    this.guaranteeNumber.placeholder = "הזן מספר ערבות";
                }
                else if (this.customerNumber.value.length <= 0) {
                    this.customerNumber.placeholder = "הזן מספר חשבון";

            
                } else {
                    removeAllChildNodes(this.main_container);
                    this.main_container.appendChild(this.GuaranteeDiteals.GuaranteeDiteals_pointer.garanteediteals);
                    this.GuaranteeDiteals.GuaranteeDiteals_pointer.customerNumber = this.customerNumber.value;
                    this.GuaranteeDiteals.GuaranteeDiteals_pointer.guaranteenumber = this.guaranteeNumber.value;

                    this.GuaranteeDiteals.GuaranteeDiteals_pointer.renderG(false);

               
                    

                }
              
                
            }
        } else {
             
            if (this.customerNumber.value.length <= 0 && this.guaranteeNumber.value.length <= 0) {
                this.customerNumber.placeholder = "הזן מספר חשבון";
                this.guaranteeNumber.placeholder = "הזן מספר ערבות";
            
                
            } else if (this.guaranteeNumber.value.length <=0) {
                this.guaranteeNumber.placeholder = "הזן מספר ערבות";
            }
            else {
                this.customerNumber.placeholder = "הזן מספר חשבון";
                
            }
        }

    
       


    }.bind(this);

    this.tasks.onclick = function () {
        $(this.selectEmployees).empty();
        $('#taskmodal').modal('show');

        sendHttprquest("api/Employees/getall", function (success, response) {

            if (success && response != null) {
                this.emploteeList = JSON.parse(response);

                for (var i = 0; i < this.emploteeList.length; i++) {
                    let option = document.createElement("option");
                    option.innerHTML = this.emploteeList[i].username ;
                    option.value = this.emploteeList[i].employeeID;
                    this.selectEmployees.appendChild(option);
                 

                }
                let option = document.createElement("option");
                option.innerHTML = "כלל העובדים";
                option.value = "כלל העובדים";
                this.selectEmployees.appendChild(option)
            }
            else {
                message("שאילתת עובדים כשלה", this.modalmessage, "red");
                $('#taskmodal').modal('hide');
            }
            }.bind(this));
    
    }.bind(this);

    this.save.onclick = function () {
        if (this.selectEmployees.value != "כלל העובדים") {
            this.rendertbl("api/Tempdata/getbyemployee?employeeID=" + Number( this.selectEmployees.value));
            

        } else {
            this.rendertbl("api/Tempdata/getall");
        }
        $('#taskmodal').modal('hide');
    }.bind(this);

    this.guaranteeCategoris.onclick = function () {
        alert("אופציה זו תפתח בקרוב אנו מתנצלים על אי הנוחות");

    }
    this.searchcustomers.onclick = function () {
        alert("אופציה זו תפתח בקרוב אנו מתנצלים על אי הנוחות");
    }
    this.searchemployees.onclick = function () {
        alert("אופציה זו תפתח בקרוב אנו מתנצלים על אי הנוחות");
    }
    this.searchcsr.onclick = function () {
        alert("אופציה זו תפתח בקרוב אנו מתנצלים על אי הנוחות");
    }
    this.statistics.onclick = function () {
        alert("אופציה זו תפתח בקרוב אנו מתנצלים על אי הנוחות");
    }


   
    this.rendertbl = function (url) {
        if (this.Guaranteetable.Guaranteetable_as_pointer == false) {


            sendHttprquest("Table/table.html", function (success, response) {
                if (success) {
                    removeAllChildNodes(this.main_container);
                    this.main_container.innerHTML = response;

                    lockUI(this.disconect, this.myTasks, this.createguarantee, this.extension, this.advancedSearch, this.statistics, this.options, this.search);
                    this.Guaranteetable.Guaranteetable_ponter = new starttbale(this.main_container.id, this.Guaranteetable.Guaranteetable_headers, this.Guaranteetable.Guaranteetable_field, true, true);
                    this.Guaranteetable.Guaranteetable_as_pointer = true;
                    this.Guaranteetable.Guaranteetable_ponter.settbl(url);
                } else {
                    message("בעייה בטעינת הדף אנא פנה לצוות התמיכה", this.main_container, "red");
                }



            }.bind(this));

        } else {

         
            lockUI(this.disconect, this.myTasks, this.createguarantee, this.extension, this.advancedSearch, this.statistics, this.options, this.search);
            removeAllChildNodes(this.main_container);
            this.Guaranteetable.Guaranteetable_ponter.settbl(url);
            this.main_container.appendChild(this.Guaranteetable.Guaranteetable_ponter.divtable);



        }


    }.bind(this);
    
      
    //***********************************Faking start to data that is on the server and not on the datd base**********************
   
    let fakarr = [
        {
            customernumber:1234, guranateenumber:1, obj: {
                guarantee: {},
                customer: {},
                employees: {},
                beneficiary: {},
                group: {},
                
            }
        }, {
            customernumber:1234, guranateenumber:2, obj: {
                guarantee: {},
                customer: {},
                employees: {},
                beneficiary: {},
                group: {},
               
            }
        }, {
            customernumber: 1234, guranateenumber: 3, obj: {
                guarantee: {},
                customer: {},
                employees: {},
                beneficiary: {},
                group: {},
                
            }
        }, {
            customernumber: 1234, guranateenumber: 14, obj: {
                guarantee: {},
                customer: {},
                employees: {},
                beneficiary: {},
                group: {},
                } },
        {
            customernumber: 5555, guranateenumber: 13, obj: {
                guarantee: {},
                customer: {},
                employees: {},
                beneficiary: {},
                group: {},
              
            }
        }, {
            customernumber: 5555, guranateenumber: 15, obj: {
                guarantee: {},
                customer: {},
                employees: {},
                beneficiary: {},
                group: {},
               
            }
        }, {
            customernumber: 5555, guranateenumber: 18, obj: {
                guarantee: {},
                customer: {},
                employees: {},
                beneficiary: {},
                group: {},
               
            }
        }, {
            customernumber: 5555, guranateenumber: 8, obj: {
                guarantee: {},
                customer: {},
                employees: {},
                beneficiary: {},
                group: {},
                } },
        {
            customernumber: 1111, guranateenumber: 1, obj: {
                guarantee: {},
                customer: {},
                employees: {},
                beneficiary: {},
                group: {},
               
            }
        }, {
            customernumber: 1111, guranateenumber: 2, obj: {
                guarantee: {},
                customer: {},
                employees: {},
                beneficiary: {},
                group: {},
               
            }
        }, {
            customernumber: 5555, guranateenumber: 2, obj: {
                guarantee: {},
                customer: {},
                employees: {},
                beneficiary: {},
                group: {},
                
            }
        }, {
            customernumber: 5555, guranateenumber: 1, obj: {
                guarantee: {},
                customer: {},
                employees: {},
                beneficiary: {},
                group: {},
                } }


    ]

    

        for (let i = 0; i < fakarr.length; i++) {
            sendHttprquest("api/Customers/get?AcountNumber=" + Number(fakarr[i].customernumber), function (success, response) {

                if (success && response.length > 0) {


                    let cusomerResponse = JSON.parse(response);
                    fakarr[i].obj.customer = cusomerResponse[0];

                    sendHttprquest("api/Guarantees/getByCustomer?CustomerID=" + fakarr[i].obj.customer.customerID + "&Guaranteenumber=" + fakarr[i].guranateenumber, function (success, response) {

                        if (success && response.length > 0) {

                            let guaranteeResponse = JSON.parse(response);
                            fakarr[i].obj.guarantee = guaranteeResponse[0];

                            sendHttprquest("api/Beneficiary/getbyid?beneficiaryID=" + fakarr[i].obj.guarantee.beneficiaryID, function (success, response) {

                                if (success && response.length > 0) {

                                    let beneficiaryresponse = JSON.parse(response);
                                    fakarr[i].obj.beneficiary = beneficiaryresponse[0];
                                    sendHttprquest("api/Groups/getgroup?=" + fakarr[i].obj.customer.groupID, function (success, response) {

                                        if (success && response.length > 0) {

                                            let groupresponse = JSON.parse(response);
                                            fakarr[i].obj.group = groupresponse[0];

                                            sendHttprquest("api/Employees/getbyid?=" + fakarr[i].obj.guarantee.employeeID, function (success, response) {
                                                let myempployeeresponse = JSON.parse(response);
                                                if (success && myempployeeresponse != null) {
                                                    if (i % 2 == 0) {
                                                        fakarr[i].obj.guarantee.status = "אישור לקוח";
                                                    } else {
                                                        fakarr[i].obj.guarantee.status = "חתימות מנהל";
                                                    }
                                                    
                                                    fakarr[i].obj.employees = myempployeeresponse;

                                                    sendHttprquest("api/Tempdata/Add", function (success, response) {

                                                 

                                                    }, fakarr[i].obj);



                                                } else {
                                                    return;
                                                }
                                            });

                                        }
                                        else {

                                            return;
                                        }
                                    });
                                }
                                else {

                                    return;
                                }


                            });

                        } else {

                            return;
                        }

                    });

                } else {

                    return;
                }




            });
        }
    }
  


  




    
    
        
 



    

