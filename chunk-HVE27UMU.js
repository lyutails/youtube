import{B as le,Da as W,Gb as X,Ia as q,Ka as C,Wb as y,a as d,b as h,ca as S,cc as ue,da as m,db as o,fa as O,ha as v,hb as z,j as se,jc as de,lc as ce,ob as c,p as oe,pc as Y,ra as x,sa as l,v as ae,vb as Z,za as N}from"./chunk-MGU3A3HE.js";var De=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(o(z),o(q))},e.\u0275dir=l({type:e});let t=e;return t})(),Ye=(()=>{let e=class e extends De{};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=W(e)))(s||e)}})(),e.\u0275dir=l({type:e,features:[c]});let t=e;return t})(),te=new v("");var Ke={provide:te,useExisting:m(()=>be),multi:!0};function Je(){let t=Y()?Y().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Qe=new v(""),be=(()=>{let e=class e extends De{constructor(i,r,s){super(i,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Je())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(o(z),o(q),o(Qe,8))},e.\u0275dir=l({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&X("input",function(f){return s._handleInput(f.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(f){return s._compositionEnd(f.target.value)})},features:[y([Ke]),c]});let t=e;return t})();function p(t){return t==null||(typeof t=="string"||Array.isArray(t))&&t.length===0}function Ae(t){return t!=null&&typeof t.length=="number"}var F=new v(""),I=new v(""),et=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,he=class{static min(e){return tt(e)}static max(e){return it(e)}static required(e){return nt(e)}static requiredTrue(e){return rt(e)}static email(e){return st(e)}static minLength(e){return ot(e)}static maxLength(e){return at(e)}static pattern(e){return lt(e)}static nullValidator(e){return Me(e)}static compose(e){return Oe(e)}static composeAsync(e){return Ne(e)}};function tt(t){return e=>{if(p(e.value)||p(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n<t?{min:{min:t,actual:e.value}}:null}}function it(t){return e=>{if(p(e.value)||p(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n>t?{max:{max:t,actual:e.value}}:null}}function nt(t){return p(t.value)?{required:!0}:null}function rt(t){return t.value===!0?null:{required:!0}}function st(t){return p(t.value)||et.test(t.value)?null:{email:!0}}function ot(t){return e=>p(e.value)||!Ae(e.value)?null:e.value.length<t?{minlength:{requiredLength:t,actualLength:e.value.length}}:null}function at(t){return e=>Ae(e.value)&&e.value.length>t?{maxlength:{requiredLength:t,actualLength:e.value.length}}:null}function lt(t){if(!t)return Me;let e,n;return typeof t=="string"?(n="",t.charAt(0)!=="^"&&(n+="^"),n+=t,t.charAt(t.length-1)!=="$"&&(n+="$"),e=new RegExp(n)):(n=t.toString(),e=t),i=>{if(p(i.value))return null;let r=i.value;return e.test(r)?null:{pattern:{requiredPattern:n,actualValue:r}}}}function Me(t){return null}function Ee(t){return t!=null}function we(t){return ue(t)?oe(t):t}function Fe(t){let e={};return t.forEach(n=>{e=n!=null?d(d({},e),n):e}),Object.keys(e).length===0?null:e}function Ie(t,e){return e.map(n=>n(t))}function ut(t){return!t.validate}function Se(t){return t.map(e=>ut(e)?e:n=>e.validate(n))}function Oe(t){if(!t)return null;let e=t.filter(Ee);return e.length==0?null:function(n){return Fe(Ie(n,e))}}function xe(t){return t!=null?Oe(Se(t)):null}function Ne(t){if(!t)return null;let e=t.filter(Ee);return e.length==0?null:function(n){let i=Ie(n,e).map(we);return le(i).pipe(ae(Fe))}}function Pe(t){return t!=null?Ne(Se(t)):null}function fe(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function ke(t){return t._rawValidators}function Ge(t){return t._rawAsyncValidators}function K(t){return t?Array.isArray(t)?t:[t]:[]}function k(t,e){return Array.isArray(t)?t.includes(e):t===e}function pe(t,e){let n=K(e);return K(t).forEach(r=>{k(n,r)||n.push(r)}),n}function ge(t,e){return K(e).filter(n=>!k(t,n))}var G=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=xe(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Pe(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},u=class extends G{get formDirective(){return null}get path(){return null}},_=class extends G{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},T=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},dt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Jt=h(d({},dt),{"[class.ng-submitted]":"isSubmitted"}),Qt=(()=>{let e=class e extends T{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(o(_,2))},e.\u0275dir=l({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&Z("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[c]});let t=e;return t})(),ei=(()=>{let e=class e extends T{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(o(u,10))},e.\u0275dir=l({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,s){r&2&&Z("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)("ng-submitted",s.isSubmitted)},features:[c]});let t=e;return t})();var b="VALID",P="INVALID",V="PENDING",A="DISABLED",g=class{},j=class extends g{constructor(e,n){super(),this.value=e,this.source=n}},M=class extends g{constructor(e,n){super(),this.pristine=e,this.source=n}},E=class extends g{constructor(e,n){super(),this.touched=e,this.source=n}},D=class extends g{constructor(e,n){super(),this.status=e,this.source=n}},J=class extends g{constructor(e){super(),this.source=e}},Q=class extends g{constructor(e){super(),this.source=e}};function ie(t){return(R(t)?t.validators:t)||null}function ct(t){return Array.isArray(t)?xe(t):t||null}function ne(t,e){return(R(e)?e.asyncValidators:t)||null}function ht(t){return Array.isArray(t)?Pe(t):t||null}function R(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function Te(t,e,n){let i=t.controls;if(!(e?Object.keys(i):i).length)throw new S(1e3,"");if(!i[n])throw new S(1001,"")}function je(t,e,n){t._forEachChild((i,r)=>{if(n[r]===void 0)throw new S(1002,"")})}var w=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._events=new se,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===b}get invalid(){return this.status===P}get pending(){return this.status==V}get disabled(){return this.status===A}get enabled(){return this.status!==A}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(pe(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(pe(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(ge(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(ge(e,this._rawAsyncValidators))}hasValidator(e){return k(this._rawValidators,e)}hasAsyncValidator(e){return k(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let n=this.touched===!1;this.touched=!0;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(h(d({},e),{sourceControl:i})),n&&e.emitEvent!==!1&&this._events.next(new E(!0,i))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(n=>n.markAllAsTouched(e))}markAsUntouched(e={}){let n=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:i})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i),n&&e.emitEvent!==!1&&this._events.next(new E(!1,i))}markAsDirty(e={}){let n=this.pristine===!0;this.pristine=!1;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(h(d({},e),{sourceControl:i})),n&&e.emitEvent!==!1&&this._events.next(new M(!1,i))}markAsPristine(e={}){let n=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),n&&e.emitEvent!==!1&&this._events.next(new M(!0,i))}markAsPending(e={}){this.status=V;let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new D(this.status,n)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(h(d({},e),{sourceControl:n}))}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=A,this.errors=null,this._forEachChild(r=>{r.disable(h(d({},e),{onlySelf:!0}))}),this._updateValue();let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new j(this.value,i)),this._events.next(new D(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(h(d({},e),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=b,this._forEachChild(i=>{i.enable(h(d({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(h(d({},e),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e,n){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},n),this._parent._updateTouched({},n))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===b||this.status===V)&&this._runAsyncValidator(i,e.emitEvent)}let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new j(this.value,n)),this._events.next(new D(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(h(d({},e),{sourceControl:n}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?A:b}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,n){if(this.asyncValidator){this.status=V,this._hasOwnPendingAsyncValidator={emitEvent:n!==!1};let i=we(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:n,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1,this,n.shouldHaveEmitted)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,n,i){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||i)&&this._events.next(new D(this.status,n)),this._parent&&this._parent._updateControlsErrors(e,n,i)}_initObservables(){this.valueChanges=new C,this.statusChanges=new C}_calculateStatus(){return this._allControlsDisabled()?A:this.errors?P:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(V)?V:this._anyControlsHaveStatus(P)?P:b}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,n){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),r&&this._events.next(new M(this.pristine,n))}_updateTouched(e={},n){this.touched=this._anyControlsTouched(),this._events.next(new E(this.touched,n)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){R(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=ct(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=ht(this._rawAsyncValidators)}},me=class extends w{constructor(e,n,i){super(ie(n),ne(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,i={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){je(this,!0,e),Object.keys(e).forEach(i=>{Te(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n,this),this._updateTouched(n,this),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,i)=>(e[i]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,i)=>i._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let i=this.controls[n];i&&e(i,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,i]of Object.entries(this.controls))if(this.contains(n)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,i,r)=>((i.enabled||this.disabled)&&(n[r]=i.value),n))}_reduceChildren(e,n){let i=e;return this._forEachChild((r,s)=>{i=n(i,r,s)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var H=new v("CallSetDisabledState",{providedIn:"root",factory:()=>L}),L="always";function $(t,e){return[...e.path,t]}function ee(t,e,n=L){re(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),pt(t,e),mt(t,e),gt(t,e),ft(t,e)}function ve(t,e,n=!0){let i=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(i),e.valueAccessor.registerOnTouched(i)),U(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function B(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function ft(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function re(t,e){let n=ke(t);e.validator!==null?t.setValidators(fe(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=Ge(t);e.asyncValidator!==null?t.setAsyncValidators(fe(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();B(e._rawValidators,r),B(e._rawAsyncValidators,r)}function U(t,e){let n=!1;if(t!==null){if(e.validator!==null){let r=ke(t);if(Array.isArray(r)&&r.length>0){let s=r.filter(a=>a!==e.validator);s.length!==r.length&&(n=!0,t.setValidators(s))}}if(e.asyncValidator!==null){let r=Ge(t);if(Array.isArray(r)&&r.length>0){let s=r.filter(a=>a!==e.asyncValidator);s.length!==r.length&&(n=!0,t.setAsyncValidators(s))}}}let i=()=>{};return B(e._rawValidators,i),B(e._rawAsyncValidators,i),n}function pt(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Be(t,e)})}function gt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Be(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function Be(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function mt(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function vt(t,e){t==null,re(t,e)}function yt(t,e){return U(t,e)}function Ue(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function _t(t){return Object.getPrototypeOf(t.constructor)===Ye}function Ct(t,e){t._syncPendingControls(),e.forEach(n=>{let i=n.control;i.updateOn==="submit"&&i._pendingChange&&(n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function Re(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(s=>{s.constructor===be?n=s:_t(s)?i=s:r=s}),r||i||n||null}function Vt(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function ye(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function _e(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var He=class extends w{constructor(e=null,n,i){super(ie(n),ne(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),R(n)&&(n.nonNullable||n.initialValueIsDefault)&&(_e(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){ye(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){ye(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){_e(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Dt=t=>t instanceof He,bt=(()=>{let e=class e extends u{ngOnInit(){this._checkParentType(),this.formDirective.addFormGroup(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormGroup(this)}get control(){return this.formDirective.getFormGroup(this)}get path(){return $(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=W(e)))(s||e)}})(),e.\u0275dir=l({type:e,features:[c]});let t=e;return t})();var At={provide:_,useExisting:m(()=>Mt)},Ce=Promise.resolve(),Mt=(()=>{let e=class e extends _{constructor(i,r,s,a,f,Xe){super(),this._changeDetectorRef=f,this.callSetDisabledState=Xe,this.control=new He,this._registered=!1,this.name="",this.update=new C,this._parent=i,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=Re(this,a)}ngOnChanges(i){if(this._checkForErrors(),!this._registered||"name"in i){if(this._registered&&(this._checkName(),this.formDirective)){let r=i.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in i&&this._updateDisabled(i),Ue(i,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){ee(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(i){Ce.then(()=>{this.control.setValue(i,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(i){let r=i.isDisabled.currentValue,s=r!==0&&ce(r);Ce.then(()=>{s&&!this.control.disabled?this.control.disable():!s&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(i){return this._parent?$(i,this._parent):[i]}};e.\u0275fac=function(r){return new(r||e)(o(u,9),o(F,10),o(I,10),o(te,10),o(de,8),o(H,8))},e.\u0275dir=l({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[y([At]),c,N]});let t=e;return t})(),ii=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=l({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})();var Le=new v("");var Et={provide:u,useExisting:m(()=>$e)},$e=(()=>{let e=class e extends u{constructor(i,r,s){super(),this.callSetDisabledState=s,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new C,this._setValidators(i),this._setAsyncValidators(r)}ngOnChanges(i){this._checkFormPresent(),i.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(U(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(i){let r=this.form.get(i.path);return ee(r,i,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(i),r}getControl(i){return this.form.get(i.path)}removeControl(i){ve(i.control||null,i,!1),Vt(this.directives,i)}addFormGroup(i){this._setUpFormContainer(i)}removeFormGroup(i){this._cleanUpFormContainer(i)}getFormGroup(i){return this.form.get(i.path)}addFormArray(i){this._setUpFormContainer(i)}removeFormArray(i){this._cleanUpFormContainer(i)}getFormArray(i){return this.form.get(i.path)}updateModel(i,r){this.form.get(i.path).setValue(r)}onSubmit(i){return this.submitted=!0,Ct(this.form,this.directives),this.ngSubmit.emit(i),this.form._events.next(new J(this.control)),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this.submitted=!1,this.form._events.next(new Q(this.form))}_updateDomValue(){this.directives.forEach(i=>{let r=i.control,s=this.form.get(i.path);r!==s&&(ve(r||null,i),Dt(s)&&(ee(s,i,this.callSetDisabledState),i.control=s))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(i){let r=this.form.get(i.path);vt(r,i),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(i){if(this.form){let r=this.form.get(i.path);r&&yt(r,i)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){re(this.form,this),this._oldForm&&U(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(r){return new(r||e)(o(F,10),o(I,10),o(H,8))},e.\u0275dir=l({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,s){r&1&&X("submit",function(f){return s.onSubmit(f)})("reset",function(){return s.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[y([Et]),c,N]});let t=e;return t})(),wt={provide:u,useExisting:m(()=>We)},We=(()=>{let e=class e extends bt{constructor(i,r,s){super(),this.name=null,this._parent=i,this._setValidators(r),this._setAsyncValidators(s)}_checkParentType(){ze(this._parent)}};e.\u0275fac=function(r){return new(r||e)(o(u,13),o(F,10),o(I,10))},e.\u0275dir=l({type:e,selectors:[["","formGroupName",""]],inputs:{name:[0,"formGroupName","name"]},features:[y([wt]),c]});let t=e;return t})(),Ft={provide:u,useExisting:m(()=>qe)},qe=(()=>{let e=class e extends u{constructor(i,r,s){super(),this.name=null,this._parent=i,this._setValidators(r),this._setAsyncValidators(s)}ngOnInit(){this._checkParentType(),this.formDirective.addFormArray(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormArray(this)}get control(){return this.formDirective.getFormArray(this)}get formDirective(){return this._parent?this._parent.formDirective:null}get path(){return $(this.name==null?this.name:this.name.toString(),this._parent)}_checkParentType(){ze(this._parent)}};e.\u0275fac=function(r){return new(r||e)(o(u,13),o(F,10),o(I,10))},e.\u0275dir=l({type:e,selectors:[["","formArrayName",""]],inputs:{name:[0,"formArrayName","name"]},features:[y([Ft]),c]});let t=e;return t})();function ze(t){return!(t instanceof We)&&!(t instanceof $e)&&!(t instanceof qe)}var It={provide:_,useExisting:m(()=>St)},St=(()=>{let e=class e extends _{set isDisabled(i){}constructor(i,r,s,a,f){super(),this._ngModelWarningConfig=f,this._added=!1,this.name=null,this.update=new C,this._ngModelWarningSent=!1,this._parent=i,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=Re(this,a)}ngOnChanges(i){this._added||this._setUpControl(),Ue(i,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}get path(){return $(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(o(u,13),o(F,10),o(I,10),o(te,10),o(Le,8))},e.\u0275dir=l({type:e,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[y([It]),c,N]});let t=e;return t})();var Ze=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=x({type:e}),e.\u0275inj=O({});let t=e;return t})(),Ve=class extends w{constructor(e,n,i){super(ie(n),ne(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,n={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}insert(e,n,i={}){this.controls.splice(e,0,n),this._registerControl(n),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(e,n={}){let i=this._adjustIndex(e);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:n.emitEvent})}setControl(e,n,i={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),n&&(this.controls.splice(r,0,n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,n={}){je(this,!1,e),e.forEach((i,r)=>{Te(this,!1,r),this.at(r).setValue(i,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(e.forEach((i,r)=>{this.at(r)&&this.at(r).patchValue(i,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e=[],n={}){this._forEachChild((i,r)=>{i.reset(e[r],{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n,this),this._updateTouched(n,this),this.updateValueAndValidity(n)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(n=>n._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((n,i)=>i._syncPendingControls()?!0:n,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((n,i)=>{e(n,i)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(n=>n.enabled&&e(n))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};var ni=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:H,useValue:i.callSetDisabledState??L}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=x({type:e}),e.\u0275inj=O({imports:[Ze]});let t=e;return t})(),ri=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:Le,useValue:i.warnOnNgModelWithFormControl??"always"},{provide:H,useValue:i.callSetDisabledState??L}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=x({type:e}),e.\u0275inj=O({imports:[Ze]});let t=e;return t})();export{te as a,be as b,F as c,he as d,Qt as e,ei as f,me as g,He as h,Mt as i,ii as j,$e as k,qe as l,St as m,Ve as n,ni as o,ri as p};
