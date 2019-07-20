function starttbale(id, header, feilds,asadit, fromtrmp) {
    populateFields(this, document.getElementById(id));
    this.feilds = feilds
    this.header = header;
   
    this.asedit = asadit;
    this.fromtrmp = fromtrmp
    this.settbl = function (url) {
       
        removeAllChildNodes(this.trheader);
        for (let i = 0; i < this.header.length; i++) {
            message("אנא המתן..... ", this.divmessages, "blue");
            let th = document.createElement("th");
            th.innerHTML = header[i];
            this.trheader.appendChild(th);

        }

        sendHttprquest(url, function (succsees, response) {
            removeAllChildNodes(this.tableBody);
            
            if (succsees && response.length > 0) {
               

                let myresponse = JSON.parse(response);
                if (myresponse.length <= 0) {
                    message("לעובד זה אין משימות", this.divmessages, "blue");
                    return
                }
                this.sendfromshow = JSON.parse(response);
               
                for (let i = 0; i < myresponse.length; i++) {
                    let tr = document.createElement("tr");
                    tr.className = " table table - info";
                    let tblresponse = myresponse[i];
                    this.obje=myresponse[i];
                    this.rendertd(tr, this.feilds, tblresponse);


                    this.tableBody.appendChild(tr);
                    message("", this.divmessages, "blue");
                }



            }
            else {
                message("לעובד זה אין ערביות ", this.divmessages,"red");
            }
        }.bind(this));

        lockUI(main.disconect,main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search);
    }.bind(this);
    
    this.rendertd = function (tr, feild, tblresponse) {

        removeAllChildNodes(tr);

        for (let j = 0; j < feild.length; j++) {
            let td = document.createElement("td");


            if (feild[j].fieldType == "datetime") {
                tblresponse[feild[j].class][feild[j].fieldName] = tostringdate(tblresponse[feild[j].class][feild[j].fieldName]);
            }

            td.innerHTML = tblresponse[feild[j].class][feild[j].fieldName];
            td.style.fontFamily = "Arimo', sans-serif";


            tr.appendChild(td);
        }
        if (this.asedit == true) {
            let edit = document.createElement("i");
            edit.id = "edit";
            edit.className = "fas fa-search-plus fa-2x";
            edit.style.color = "green";
            let tdimag = document.createElement("td");
            tdimag.appendChild(edit);
            tr.appendChild(tdimag);
          
            
            edit.onclick = function (event) {
           
                
                if (fromtrmp == true) {
                    sendHttprquest("Guaranteeedit/guaranteeedit.html", function (success, response) {
                       
                        if (success) {
                            removeAllChildNodes(main.main_container);

                            main.main_container.innerHTML = response;
                            let GuaranteeEdit = new guaranteeEdit(main.main_container.id, this.sendfromshow[$(event.target.parentElement.parentElement).index()]);
                            GuaranteeEdit.showditels();
                        } else {
                            message(" בעייה בטעינת הדף", this.divmessages, "blue");
                        }

                    }.bind(this));
    


                }



            }.bind(this);

        }
    }
  
}