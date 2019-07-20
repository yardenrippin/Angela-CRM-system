function LoginOrSignup(id) {
    populateFields(this, document.getElementById(id));
    
    this.btnLogin.onclick= function (event) {
        lockUI(this.txtEmployeNumber, this.txtLoginPassword);
        message("", this.divmessages, );

        let user = {
            EmployeNumber: this.txtEmployeNumber.value.split(' ').join(''),
            password: this.txtLoginPassword.value.split(' ').join('')
        };    
        if (user.EmployeNumber == null || user.password == null) {
            message("חייב להכניס שם משתמש וסיסמא!", this.divmessages, "red");
            lockUI(this.txtEmployeNumber, this.txtLoginPassword);
            return;
        }
        let txtEmployeNumber = SpecialCharacters(this.txtEmployeNumber.value, this.txtEmployeNumber);
        let txtLoginPassword = SpecialCharacters(this.txtLoginPassword.value, this.txtLoginPassword);

        if (txtEmployeNumber == true && txtLoginPassword == true) {
            sendHttprquest("api/Employees/login?EmployeNumber=" + user.EmployeNumber + "&Password=" + user.password, function (success, response) {

              
                if (success) {
                    this.user = JSON.parse(response);
                    lockUI(this.txtEmployeNumber, this.txtLoginPassword);
                    removeAllChildNodes(main.main_container);
                    message(" ברוך הבא " + this.user.username +" "+ "המסוף מוכן לעבודה ", main.main_container, ); 
                    main.usernume.innerHTML = this.user.username;
                    main.disconect.innerHTML = "התנתק";
                    lockUI(main.disconect,main.myTasks, main.createguarantee, main.extension, main.advancedSearch, main.statistics, main.options, main.search);
                
                } else {
                    message("ססימא או שם משתמש אינם נכונים", this.divmessages, "red");
                    lockUI(this.txtEmployeNumber, this.txtLoginPassword);
                }

            }.bind(this));

        } else {
            message("אחד או יותר  מהפרטים שהוזנו אינם חוקיים", this.divmessages, "red");
            lockUI(this.txtEmployeNumber, this.txtLoginPassword);
        }
      
    }.bind(this);

 
    //לחיצה על כפתור שחזר סיסמה
    this.btnForgetPassword.onclick = function (event) {
        message("לשחזור סיסמא אנא פנה  למנהל הישיר שלך", this.divmessages, "red");
    }.bind(this);

    // פונקציה שפועלת כאשר לוחצים אנטר על אחד משדות הסיסמה login\singup
    this.enterOnPassword = function (event) {

        if (event.keyCode == 13) {
            if (event.target == this.txtLoginPassword) {
                this.btnLoginClicked(event);
                return;
            }
            if (event.target == this.txtPasswordSignupCheck) {
                this.btnSignupClicked(event);
                return;
            }
            if (event.target == this.txtResetEmail) {
                this.btnResetPasswordClicked(event);
                return;
            } 
        }
    }.bind(this);

    //לחיצה על כפתור שכחתי סיסמה
    this.btnForgetPasswordClicked = function (event) {
        this.divLogin.style.display = "none";
        this.divSignup.style.display = "none";
        this.divResetPassword.style.display = "block";
        this.txtResetEmail.focus();
    }.bind(this);

  

   

    // בקשה לטעינת דף HTML
    //sendHttprquest("User/LoginOrSingup/loginOrSignupPage.html", function (success, response) {
    //    if (success) {
    //        document.getElementById(id).innerHTML = response;

    //        //אתחול כל השדות
    //        populateFields(this, document.getElementById(id));

    //        //הצגת דיב כניסה
    //        this.divLogin.style.display = "block";
    //        this.divSignup.style.display = "none";
    //        this.divResetPassword.style.display = "none";

    //        // קביעת איוונטים לכפתור ולמקש האנטר 
    //        this.btnForgetPassword.onclick = this.btnForgetPasswordClicked;
    //        this.btnGoToSignup.onclick = this.btnGoToSignupClicked;
    //        this.btnbtnBackToLoginFromSignup.onclick = this.btnbtnBackToLoginFromResetPassword.onclick = this.btnbtnBackToLoginClicked;
    //        this.btnSignup.onclick = this.btnSignupClicked;
    //        this.btnLogin.onclick = this.btnLoginClicked;
    //        this.btnResetPassword.onclick = this.btnResetPasswordClicked;
    //        this.txtPasswordSignupCheck.onkeypress = this.enterOnPassword;
    //        this.txtLoginPassword.onkeypress = this.enterOnPassword;
    //        this.txtResetEmail.onkeypress = this.enterOnPassword;
    //        this.userID = null;

    //        this.txtLoginEmail.focus();
    //    }
    //}.bind(this));
}