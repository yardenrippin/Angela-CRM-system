function myExtension(id) {

    let GuaranteeDiteals = {
        GuaranteeDiteals_as_poiinter: false,
        GuaranteeDiteals_pointer: null
    }
    populateFields(this, document.getElementById(id));


   
    this.setEX = function () {
        
        if (this.EXcustomerNumber.value.length > 0 && this.EXguaranteeNumber.value.length > 0) {
            if (GuaranteeDiteals.GuaranteeDiteals_as_poiinter == false) {
                sendHttprquest("GuaranteDiteals/garanteediteals.html", function (sccess, response) {

                    removeAllChildNodes(this.main_container);
                    if (sccess) {
                        GuaranteeDiteals.GuaranteeDiteals_as_poiinter == true;
                        main.main_container.innerHTML = response;
                        GuaranteeDiteals.GuaranteeDiteals_pointer = new showGuaranteeDetails(main.main_container.id, this.EXguaranteeNumber.value, this.EXcustomerNumber.value);
                        GuaranteeDiteals.GuaranteeDiteals_pointer.renderG(true);
                    } else {
                        message("בעייה בטעינת הדף אנא פנה לצוות התמיכה", this.main_container, "red");
                        GuaranteeDiteals.GuaranteeDiteals_as_poiinter == true;
                    }

                }.bind(this));

            } else {

                if (this.EXcustomerNumber.value.length <= 0 && this.EXguaranteeNumber.value.length <= 0) {
                    this.EXcustomerNumber.placeholder = "הזן מספר חשבון";
                    this.EXguaranteeNumber.placeholder = "הזן מספר ערבות";


                } else if (this.EXguaranteeNumber.value.length <= 0) {
                    this.EXguaranteeNumber.placeholder = "הזן מספר ערבות";
                }
                else if (this.EXcustomerNumber.value.length <= 0) {
                    this.EXcustomerNumber.placeholder = "הזן מספר חשבון";


                } else {
                    removeAllChildNodes(mian.main_container);
                    mian.main_container.appendChild(GuaranteeDiteals.GuaranteeDiteals_pointer.garanteediteals);
                    GuaranteeDiteals.GuaranteeDiteals_pointer.customerNumber = this.EXcustomerNumber.value;
                    GuaranteeDiteals.GuaranteeDiteals_pointer.guaranteenumber = this.EXguaranteeNumber.value;

                    GuaranteeDiteals.GuaranteeDiteals_pointer.renderG(true);




                }


            }
        } else {

            if (this.EXcustomerNumber.value.length <= 0 && this.EXguaranteeNumber.value.length <= 0) {
                this.EXcustomerNumber.placeholder = "הזן מספר חשבון";
                this.EXguaranteeNumber.placeholder = "הזן מספר ערבות";


            } else if (this.EXguaranteeNumber.value.length <= 0) {
                this.EXguaranteeNumber.placeholder = "הזן מספר ערבות";
            }
            else {
                this.EXcustomerNumber.placeholder = "הזן מספר חשבון";

            }
        }



    }.bind(this);

    this.EXsearch.onclick = function () {
        
        this.setEX();
    }.bind(this);
    }
