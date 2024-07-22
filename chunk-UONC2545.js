import{b as j,d as q}from"./chunk-E7QHQ55J.js";import"./chunk-WXI33M2S.js";import{b as F,d as s,f as O,g as T,h as C,j as _,l as V,m as I,o as N,r as k}from"./chunk-I6JC32OI.js";import{n as G}from"./chunk-47QA5BBQ.js";import{a as D}from"./chunk-NRMMDTGK.js";import{i as L}from"./chunk-FZYM2UWM.js";import{Db as t,Eb as a,Fb as w,Gc as M,Hc as P,Ib as x,Jb as p,Sb as r,Tb as b,Ub as g,Zb as S,ac as y,bc as E,db as e,eb as f,ra as h,ub as u,wb as v,zb as d}from"./chunk-67MNOUTH.js";function A(i,l){i&1&&(t(0,"div"),r(1,"please enter your login email"),a())}function $(i,l){i&1&&(t(0,"div"),r(1,"* login must be at least 4 characters long"),a())}function B(i,l){if(i&1&&(t(0,"div"),r(1),a()),i&2){let n=p(2);e(),g("* should contain ",n.emailSign," sign")}}function R(i,l){if(i&1&&(t(0,"div",5),u(1,A,2,0,"div")(2,$,2,0,"div")(3,B,2,1,"div"),a()),i&2){let n=p();e(),d(n.login!=null&&n.login.hasError("required")?1:-1),e(),d(n.login!=null&&n.login.hasError("minlength")?2:-1),e(),d(n.login!=null&&n.login.hasError("email")?3:-1)}}function Z(i,l){i&1&&(t(0,"div"),r(1,"please enter your password"),a())}function U(i,l){i&1&&(t(0,"div"),r(1,"* should contain at least one lowercase letter"),a())}function H(i,l){i&1&&(t(0,"div"),r(1,"* should contain at least one capital letter"),a())}function J(i,l){if(i&1&&(t(0,"div"),r(1),a()),i&2){let n=p(2);e(),g(" * should contain at least one number ",n.passwordSpecialSymbols," ")}}function K(i,l){if(i&1&&(t(0,"div"),r(1),a()),i&2){let n=p(2);e(),g(" * should contain at least one special symbol ",n.passwordSpecialSymbols," ")}}function Q(i,l){i&1&&(t(0,"div"),r(1,"* should be at least 8 characters long"),a())}function W(i,l){if(i&1&&(t(0,"div",5),u(1,Z,2,0,"div")(2,U,2,0,"div")(3,H,2,0,"div")(4,J,2,1,"div")(5,K,2,1,"div")(6,Q,2,0,"div"),a()),i&2){let n=p();e(),d(n.password!=null&&n.password.hasError("required")?1:-1),e(),d(!(n.password==null||n.password.value==null)&&n.password.value.match("^(?=.*[a-z])")?-1:2),e(),d(!(n.password==null||n.password.value==null)&&n.password.value.match("^(?=.*[A-Z])")?-1:3),e(),d(!(n.password==null||n.password.value==null)&&n.password.value.match("(.*[0-9].*)")?-1:4),e(),d(!(n.password==null||n.password.value==null)&&n.password.value.match("(?=.*[!@#$%^&*])")?-1:5),e(),d(!(n.password==null||n.password.value==null)&&n.password.value.match(".{8,}")?-1:6)}}var ri=(()=>{let l=class l{constructor(c,m){this.loginService=c,this.router=m,this.buttonName="Submit",this.emailSign="@",this.passwordSpecialSymbols="e.g. ! @ # ?",this.inputValue="",this.isPasswordVisible=!1,this.passwordVisibilitySymbol={visible:"key",invisible:"key_off"},this.loginForm=new C({login:new _(""),password:new _("")})}onSubmit(){let c=this.loginForm.value;this.loginForm.value.login?.trim()&&this.loginForm.value.password?.trim()&&(this.loginService.toggleLoginLogout(),this.loginService.saveCredentials(c),this.router.navigate(["/main"]))}ngOnInit(){this.loginForm=new C({login:new _("",[s.required,s.minLength(4),s.email]),password:new _("",[s.required,s.minLength(4),s.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")])})}get login(){return this.loginForm.get("login")}get password(){return this.loginForm.get("password")}};l.\u0275fac=function(m){return new(m||l)(f(D),f(L))},l.\u0275cmp=h({type:l,selectors:[["app-login"]],standalone:!0,features:[S],decls:20,vars:9,consts:[[1,"login"],[1,"login_form",3,"ngSubmit","formGroup"],[1,"login_item"],["for","login",1,"login_label"],["id","login","type","text","formControlName","login","placeholder","your email...",1,"login_input"],[1,"alert","alert-danger"],["for","password",1,"login_label"],["id","password","formControlName","password","placeholder","your password...",1,"login_input",3,"type"],["matSuffix","","mat-icon-button","","type","button",3,"click"],["type","submit",1,"login_button",3,"disabled"]],template:function(m,o){m&1&&(t(0,"div",0)(1,"form",1),x("ngSubmit",function(){return o.onSubmit()}),t(2,"div",2)(3,"label",3),r(4,"Login"),a(),w(5,"input",4),t(6,"mat-icon"),r(7,"email"),a()(),u(8,R,4,3,"div",5),t(9,"div",2)(10,"label",6),r(11,"Password"),a(),w(12,"input",7),t(13,"button",8),x("click",function(){return o.isPasswordVisible=!o.isPasswordVisible}),t(14,"mat-icon"),r(15),a()()(),u(16,W,7,6,"div",5),t(17,"button",9),r(18),y(19,"uppercase"),a()()()),m&2&&(e(),v("formGroup",o.loginForm),e(7),d(o.login!=null&&o.login.invalid&&(o.login!=null&&o.login.touched)?8:-1),e(4),v("type",o.isPasswordVisible?"text":"password"),e(3),b(o.isPasswordVisible?o.passwordVisibilitySymbol.visible:o.passwordVisibilitySymbol.invisible),e(),d(o.password!=null&&o.password.invalid&&(o.password!=null&&o.password.touched)?16:-1),e(),v("disabled",!o.loginForm.valid),e(),g(" ",E(19,7,o.buttonName)," "))},dependencies:[k,V,F,O,T,I,N,M,P,q,G,j],styles:[".login[_ngcontent-%COMP%]{width:90vw;margin:0 auto;display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1 0 auto;flex-wrap:wrap;position:relative;padding:20px 0}.login_form[_ngcontent-%COMP%]{width:40%;margin:0 auto;display:flex;flex-direction:column;align-items:center;justify-content:center;border:1px solid oklch(0% 0 0/50);padding:10px 20px;border-radius:10px}.login_text[_ngcontent-%COMP%]{font-size:2rem;text-align:center}.login_item[_ngcontent-%COMP%]{width:80%;display:flex;flex-direction:row;align-items:center;justify-content:space-between}.login_input[_ngcontent-%COMP%]{outline:none}.login_input[_ngcontent-%COMP%]:focus::placeholder{color:transparent}.login_label[_ngcontent-%COMP%]{pointer-events:none}.login_button[_ngcontent-%COMP%]{padding:5px 10px;margin-top:20px}input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid oklch(59.98% .236 15.45)}.alert.alert-danger[_ngcontent-%COMP%]{color:#eb0d4f}@media screen and (min-width: 320px) and (max-width: 499.99px){.login_form[_ngcontent-%COMP%]{width:80%}}@media screen and (min-width: 500px) and (max-width: 999.99px){.login_form[_ngcontent-%COMP%]{width:50%}}@media screen and (min-width: 320px) and (max-width: 999.99px){.login_item[_ngcontent-%COMP%]{flex-direction:column}}"]});let i=l;return i})();export{ri as LoginComponent};
