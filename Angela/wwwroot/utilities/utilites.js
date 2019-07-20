
//*********utilities js***********


function SpecialCharacters(str, element) {
    let chars = /[#$><%&*();=+]/;
    let valid = chars.test(str);
    
    if (str.length <= 0) {
        element.style.background = "red";
        element.style.color = "black";
        
        return false;
    }
    if (valid==false) {
        element.style.background = "white";
         element.style.color = "black";
        return true 
        
    } else {
        element.style.background = "white";
        element.style.color = "red";
        return false;
       
    }

}
function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode == 46) 
        return true;
    
    if (charCode > 31 && (charCode < 48 || charCode > 57 ) )
        return false;

    return true;
}
function createlementarryfortxt(arr, node, obj) {
    if (!node)
        return;
   
  
    if (/*node.tagName == "INPUT" &&*/ node.type == "text" || node.type == "password") {
        let d = obj[node.id] = node.id;
        arr.push(node);
    }
    
    if (node.hasChildNodes()) {
        for (let i = 0; i < node.childNodes.length; i++) {
            createlementarryfortxt(arr, node.childNodes[i], obj);
        }
          
    }
   
}
//this function return all the elements
function populateFields(obj, rootElement) {
    if (!rootElement)
        return;
    if (rootElement.id && rootElement.id.length > 0) {
        obj[rootElement.id] = rootElement;

    }
    if (rootElement.hasChildNodes()) {
        for (let i = 0; i < rootElement.childNodes.length; i++)
            populateFields(obj, rootElement.childNodes[i]);
    }
}
function populateFieldsFORMultiID(obj, rootElement, inc) {

    if (!rootElement)
        return;
    if (rootElement.id && rootElement.id.length > 0) {


        obj[rootElement.id] = rootElement;
        rootElement.id = rootElement.id + inc;
        
    }
    if (rootElement.hasChildNodes()) {
        for (let i = 0; i < rootElement.childNodes.length; i++)

            populateFieldsFORMultiID(obj, rootElement.childNodes[i], inc);
    }
}
//this function send http rquest to server/html files



function sendHttprquest(url, onComplete, body = null) {
    let httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (this.readyState == 4) {
            onComplete(this.status == 200, this.responseText);
        }
    };
    if (body) {
        httpRequest.open('POST', url, true);
        httpRequest.setRequestHeader("Content-type", "application/json");
        httpRequest.send(JSON.stringify(body));
    } else {
        httpRequest.open('GET', url, true);
        httpRequest.send();
    }
}

function currencyFormat(num) {
    num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    return Number(num);
}

    function addTOContainer(FirstPageElement, divcontainer) {
        populateFields(FirstPageElement, document.getElementById(FirstPageElement.id))
        divcontainer.appendChild(FirstPageElement);
    }


    function removeAllChildNodes(node) {
        while (node.hasChildNodes()) {
            node.removeChild(node.firstChild);
        }
    }

    function message(msg, element, Tcolor) {

        element.style.color = Tcolor;
        element.innerHTML = msg;


    }

    function lockUI(elemnt1, element2, element3, element4, element5, element6, element7, element8, element9, element10) {
        let bool = !elemnt1.disabled;
        elemnt1.disabled = bool;
        if (element2)
            element2.disabled = bool;
        if (element3)
            element3.disabled = bool;
        if (element4)
            element4.disabled = bool;
        if (element5)
            element5.disabled = bool;
        if (element6)
            element6.disabled = bool;
        if (element7)
            element7.disabled = bool;
        if (element8)
            element8.disabled = bool;
        if (element9)
            element9.disabled = bool;
        if (element10)
            element10.disabled = bool;
}
function tosetdate(dateStr) {
    let parts = dateStr.split(/[T:]/);
    
    return parts[0];
}
function tostringdate(dateStr) {
    let parts = dateStr.split(/[-T:]/);
    let time = new Date(parts[0], parts[1] - 1, +parts[2]);
    return time.toLocaleDateString('en-GB');
    
    
}
function tostringdatetopdf(dateStr) {
    let parts = dateStr.split(/[-T:]/);
    return parts[2] + "-" + parts[1] + "-" + parts[0];

}
function todaydormatpdf() {
    let current_datetime = new Date()
    let formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear(); 
    return formatted_date;

}
function todaydormat() {
    let current_datetime = new Date()
    let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate();
    return formatted_date;

}
function DatenowString() {
   let someDate = new Date();
    let dateFormated = someDate.toISOString().substr(0, 10);
    return dateFormated ;

}
function subtime(time) {
    let parts = time.split(/[-T:]/);
    

    time = new Date(parts[0], parts[1] - 1, +parts[2]);
   let time2 =Date.now();

   
    

    let res = (time - time2) / 1000;
    let days = Math.floor(res / 86400);
    return days;

}
function changetoserverformat(str) {
    let format = str.replace(/[/]/g,"-");
    let string=format.split("-");
    let set = string[2]+ "-"+ string[1] + "-"+ string[0];
    return set;
}
function formarData(n) {
    for (var i = 0; i < n.length; i++) {
        if (n[i]==",") {
            n.slice(n[i]);
        }
    }
    return n.replace()
}
function formatNumber(n) {
   
    return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}


function opendefaultemail(body) {
    sendHttprquest("api/Email/open", function (succsess, response) {

        if (succsess) {


            if (response != "true") {
                alert("לא ניתן לשלוח מייל");
            }

        } else {
            alert("לא ניתן לשלוח מייל");
        }

    }, body);
}
function sendatchmentmail(pdf, Email) {
    sendHttprquest("api/PDF/pdf", function (success, response) {

        if (success) {

            Email.attachment = response;
            opendefaultemail(Email);

        } else {
            alert("לא ניתן לייצר קובץ")
        }


    }, pdf);
}
function creatpdf(pdf) {
    sendHttprquest("api/PDF/pdf", function (success, response) {

        if (success) {


        } else {
            alert("לא ניתן לייצר קובץ");
        }


    }, pdf);


}
function clear_form_elements(ele) {

    $(ele).find(':input').each(function () {
        switch (this.type) {
            case 'password':
            
            
            case 'text':
            case 'number':
            case 'date':
            case 'email':
            case 'search':
                $(this).empty();
                break;
            case 'checkbox':
            case 'radio':
                this.checked = false;
                break;
        }
    });

}