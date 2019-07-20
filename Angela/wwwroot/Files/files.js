function setfiles(type, data, id) {
    
   
    switch (type) {
        case "extensionconfirm":
            populateFields(this, document.getElementById(id));
            this.datenow.innerHTML = todaydormatpdf();
            this.fullnumber.innerHTML = data.customer.acountNumber + "-" + data.guarantee.guaranteeNumber;
            this.beneficiarynametxt.innerHTML = data.beneficiary.beneficiaryName;
            this.creationdate.innerHTML = tostringdatetopdf(data.guarantee.dateCreated);
            this.amonttxt.innerHTML = data.guarantee.amount + " " + data.guarantee.currency;
            this.cusomernametxt.innerHTML = data.customer.compantName;
            this.exdate.innerHTML = tostringdatetopdf(data.guarantee.startDate);
            this.exdate2.innerHTML = tostringdatetopdf(data.guarantee.startDate);
            this.number.innerHTML = data.customer.acountNumber;
            this.Commission.innerHTML = data.guarantee.commission;
            this.CommissionPercent.innerHTML = data.guarantee.commissionPercent;
            this.DocumentsCommission.innerHTML = data.guarantee.documentsCommission;
            this.DocumentsCommissionPercent.innerHTML = data.guarantee.documentsCommissionPercent;
            this.email = {
                from: main.User.User_pointer.user.employeMail,
                to: data.customer.companyMail,
                body: "לקוח יקר שלום להלן מסמסך הארכת ערבות לחתימתחם ושליחה חזרה למייל ערביות ולכתובת מייל זה ",
                subject: " בנוגע להארכת ערבות מספר" + data.customer.acountNumber + "-" + data.guarantee.guaranteeNumber + " " + "לקוח-" + data.customer.compantName,
                attachment: null
            }
            this.pdf = { Name: "פרוטקול הקמה " + this.fullnumber.innerHTML, HTML: this.extensionconfirmfile.outerHTML, type: ".pdf" };
            sendatchmentmail(this.pdf, this.email);
            break;
        case "extensionLetter":
            populateFields(this, document.getElementById(id));

            this.datenow.innerHTML = todaydormatpdf();
            this.fullnumber.innerHTML = data.customer.acountNumber + "-" + data.guarantee.guaranteeNumber;
            this.beneficiarynametxt.innerHTML = data.beneficiary.beneficiaryName;
            this.creationdate.innerHTML = tostringdatetopdf(data.guarantee.dateCreated);
            this.amonttxt.innerHTML = data.guarantee.amount + " " + data.guarantee.currency;
            this.cusomernametxt.innerHTML = data.customer.compantName;
            this.exdate.innerHTML = tostringdatetopdf(data.guarantee.startDate);
            this.exdate2.innerHTML = tostringdatetopdf(data.guarantee.startDate);
            this.email = {
                from: main.User.User_pointer.user.employeMail,
                to: data.customer.companyMail,
                body: "לקוח יקר שלום להלן מסמסך הארכת ערבות  ",
                subject: " בנוגע להארכת ערבות מספר" + data.customer.acountNumber + "-" + data.guarantee.guaranteeNumber + " " + "לקוח-" + data.customer.compantName,
                attachment: null
            }
            this.pdf = { Name: "פרוטקול הקמה " + this.fullnumber.innerHTML, HTML: this.extensionLetterfile.outerHTML, type: ".pdf" };
            sendatchmentmail(this.pdf, this.email);

            break;
        case "ExtensionProtocol":
            populateFields(this, document.getElementById(id));
            this.now.innerHTML = todaydormatpdf();
            this.csr.innerHTML = data.group.groupName;
            this.fullnumber.innerHTML = data.customer.acountNumber + "-" + data.guarantee.guaranteeNumber;
            this.amonttxt.innerHTML = data.guarantee.amount + " " + data.guarantee.currency;
            this.examonttxt.innerHTML = data.guarantee.estimatedAmount;
            this.cusomernametxt.innerHTML = data.customer.compantName;
            this.beneficiarynametxt.innerHTML = data.beneficiary.beneficiaryName;
            this.type.innerHTML = data.guarantee.guaranteeType;
            this.date.innerHTML = tostringdatetopdf(data.guarantee.startDate);
            this.indextxt.innerHTML = data.guarantee.indexType;
            this.indexdatetxt.innerHTML = tostringdatetopdf(data.guarantee.indexDate);
            this.number.innerHTML = data.customer.acountNumber;
            this.CommissionPercent.innerHTML = data.guarantee.commissionPercent;
            this.DocumentsCommission.innerHTML = data.guarantee.documentsCommission;

            this.email = {
                from: main.User.User_pointer.user.employeMail,
                to: data.group.groupMail,
                body: "שלום רב להלן פרוטוקול הארכת ערבות ",
                subject: " בנוגע להארכת ערבות מספר" + data.customer.acountNumber + "-" + data.guarantee.guaranteeNumber + " " + "לקוח-" + data.customer.compantName,
                attachment: null
            }
            this.pdf = { Name: "פרוטקול הקמה " + this.fullnumber.innerHTML, HTML: this.ExtensionProtocolfile.outerHTML, type: ".pdf" };
            sendatchmentmail(this.pdf, this.email);
            break;
        case "Guaranteeconfirm":

            populateFields(this, document.getElementById(id));
            this.datenow.innerHTML = todaydormatpdf();
            this.beneficiarynametxt.innerHTML = data.beneficiary.beneficiaryName;
            this.amonttxt2.innerHTML = data.guarantee.amount + " " + data.guarantee.currency;
            this.fullnumber.innerHTML = data.customer.acountNumber + "-" + data.guarantee.guaranteeNumber;
            this.amonttxt.innerHTML = data.guarantee.amount; " " + data.guarantee.currency;
            this.date.innerHTML = tostringdatetopdf(data.guarantee.startDate);
            this.cusomernametxt.innerHTML = data.customer.compantName;
            this.beneficiarynametxt2.innerHTML = data.beneficiary.beneficiaryName;
            this.indextxt.innerHTML = data.guarantee.indexType;
            this.indexdatetxt.innerHTML = tostringdatetopdf(data.guarantee.indexDate);
            this.exdate.innerHTML = tostringdatetopdf(data.guarantee.expirationDate);
            this.number.innerHTML = data.customer.acountNumber;
            this.Commission.innerHTML = data.guarantee.commission;
            this.CommissionPercent.innerHTML = data.guarantee.commissionPercent;
            this.DocumentsCommission.innerHTML = data.guarantee.documentsCommission;
            this.DocumentsCommissionPercent.innerHTML = data.guarantee.documentsCommissionPercent;
            this.email = {
                from: main.User.User_pointer.user.employeMail,
                to: data.customer.companyMail,
                body: "לקוח יקר שלום להלן מסמסך הקמת ערבות לחתימתחם ושליחה חזרה למייל ערביות ולכתובת מייל זה  ",
                subject: " בנוגע לערבות מספר" + data.customer.acountNumber + "-" + data.guarantee.guaranteeNumber + " " + "לקוח-" + data.customer.compantName,
                attachment: null
            }
            this.pdf = { Name: "עמלות+כתב ערבות " + this.fullnumber.innerHTML, HTML: this.Guaranteeconfirmfile.outerHTML, type: ".pdf" };
            sendatchmentmail(this.pdf, this.email);
            break;
       
        case "GuaranteeLetter":
         
            
            populateFields(this, document.getElementById(id));
            this.datenow.innerHTML = todaydormatpdf();
            this.beneficiarynametxt.innerHTML = data.beneficiary.beneficiaryName;
            this.amonttxt2.innerHTML = data.guarantee.amount + " " + data.guarantee.currency;
            this.fullnumber.innerHTML = data.customer.acountNumber + "-" + data.guarantee.guaranteeNumber;
            this.amonttxt.innerHTML = data.guarantee.amount + " " + data.guarantee.currency;
            this.date.innerHTML = tostringdatetopdf(data.guarantee.startDate);
            this.cusomernametxt.innerHTML = data.customer.compantName;
            this.beneficiarynametxt2.innerHTML = data.beneficiary.beneficiaryName;
            this.indextxt.innerHTML = data.guarantee.indexType;
            this.indexdatetxt.innerHTML = tostringdatetopdf(data.guarantee.indexDate);
            this.exdate.innerHTML = tostringdatetopdf(data.guarantee.expirationDate);

            this.email = {
                        from: main.User.User_pointer.user.employeMail,
                        to: data.customer.companyMail,
                        body: "לקוח יקר שלום להלן מכתב הערבות",
                        subject: " בנוגע לערבות מספר" + data.customer.acountNumber + "-" + data.guarantee.guaranteeNumber + " " + "לקוח-" + data.customer.compantName,
                        attachment: null
                        }
            this.pdf = { Name: "כתב ערבות " + this.fullnumber.innerHTML, HTML: this.GuaranteeLetterfile.outerHTML, type: ".pdf"};
            sendatchmentmail(this.pdf, this.email);

            
            break;

        case "Newprotocol":
            populateFields(this, document.getElementById(id));
            this.now.innerHTML = todaydormatpdf();
            this.csr.innerHTML = data.group.groupName;
            this.fullnumber.innerHTML = data.customer.acountNumber + "-" + data.guarantee.guaranteeNumber;
            this.amonttxt.innerHTML = data.guarantee.amount + " " + data.guarantee.currency;
            this.examonttxt.innerHTML = data.guarantee.estimatedAmount;
            this.cusomernametxt.innerHTML = data.customer.compantName;
            this.beneficiarynametxt.innerHTML = data.beneficiary.beneficiaryName;
            
            this.type.innerHTML = data.guarantee.guaranteeType;
            this.exdate.innerHTML = tostringdatetopdf(data.guarantee.startDate);
            this.indextxt.innerHTML = data.guarantee.indexType;
            this.indexdatetxt.innerHTML = tostringdatetopdf(data.guarantee.indexDate);
            this.number.innerHTML = data.customer.acountNumber;
            this.CommissionPercent.innerHTML = data.guarantee.commissionPercent;
            this.DocumentsCommission.innerHTML = data.guarantee.documentsCommission;

            this.email = {
                from: main.User.User_pointer.user.employeMail,
                to: data.group.groupMail,
                body: "שלום רב להלן פרוטוקול הקמת ערבות ",
                subject: " בנוגע להקמת ערבות מספר" + data.customer.acountNumber + "-" + data.guarantee.guaranteeNumber + " " + "לקוח-" + data.customer.compantName,
                attachment: null
            }
            this.pdf = { Name: "פרוטקול הקמה " + this.fullnumber.innerHTML, HTML: this.Newprotocolfile.outerHTML, type: ".pdf" };
            sendatchmentmail(this.pdf, this.email);
            break;
    }
    
}