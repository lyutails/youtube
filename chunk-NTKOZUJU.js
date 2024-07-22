import{b as U,c as W,d as J,f as K,g as Q,h as et}from"./chunk-DLFGI63B.js";import{a as F,b as X,c as Z,d as tt}from"./chunk-HBLAWEZZ.js";import{n as q}from"./chunk-47QA5BBQ.js";import{m as S,u as G,w as j}from"./chunk-GXJWM7TA.js";import{i as Y}from"./chunk-FZYM2UWM.js";import{$b as L,Ba as O,Bb as $,Ca as T,Cb as E,Db as a,Dc as A,Eb as p,Fb as y,Fc as I,Gb as z,Gc as H,Hc as w,Ib as k,Jb as f,Sb as c,Tb as B,Ub as h,Zb as x,_b as N,ac as u,bc as g,cc as v,db as s,e as R,eb as V,la as b,ra as _,ua as d,ub as P,v as M,wb as l,zb as D}from"./chunk-67MNOUTH.js";var it=(()=>{let t=class t{transform(i,n){return n===!1?[...i].sort((r,m)=>new Date(m.snippet.publishedAt).getTime()-new Date(r.snippet.publishedAt).getTime()):[...i]}};t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=d({name:"dateAsc",type:t,pure:!0,standalone:!0});let e=t;return e})();var nt=(()=>{let t=class t{transform(i,n){return n===!1?[...i].sort((r,m)=>new Date(r.snippet.publishedAt).getTime()-new Date(m.snippet.publishedAt).getTime()):[...i]}};t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=d({name:"dateDesc",type:t,pure:!0,standalone:!0});let e=t;return e})();var ot=(()=>{let t=class t{transform(i,n){return n===!1?[...i].sort((r,m)=>+r.statistics.viewCount-+m.statistics.viewCount):[...i]}};t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=d({name:"viewsCountAsc",type:t,pure:!0,standalone:!0});let e=t;return e})();var rt=(()=>{let t=class t{transform(i,n){return n===!1?[...i].sort((r,m)=>+m.statistics.viewCount-+r.statistics.viewCount):[...i]}};t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=d({name:"viewsCountDesc",type:t,pure:!0,standalone:!0});let e=t;return e})();var at=(()=>{let t=class t{transform(i){return i?.replace("GMT+0300 (Moscow Standard Time)","")}};t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=d({name:"cutCustomDate",type:t,pure:!0,standalone:!0});let e=t;return e})();var mt=e=>({"background-image":e}),pt=(()=>{let t=class t{constructor(){this.router=b(Y),this.store=b(S),this.buttonNameMore="more",this.buttonNameDelete="delete"}goToCard(i){this.router.navigate(["/card",i])}deleteCard(){this.store.dispatch(G.deleteCard({id:this.customCard.customId}))}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=_({type:t,selectors:[["app-custom-card"]],inputs:{customCard:"customCard"},standalone:!0,features:[x],decls:16,vars:13,consts:[[1,"custom-card_pic",3,"ngStyle"],[1,"custom-card_title"],[1,"custom-card_description"],["type","button",1,"card_button",3,"click"],[1,"card_app-custom-button"]],template:function(n,r){n&1&&(y(0,"div",0),a(1,"div",1),c(2),p(),a(3,"div"),c(4),p(),a(5,"div",2),c(6),p(),a(7,"div"),c(8),p(),a(9,"div"),c(10),u(11,"cutCustomDate"),p(),a(12,"button",3),k("click",function(){return r.deleteCard()}),a(13,"app-custom-button",4),c(14),u(15,"uppercase"),p()()),n&2&&(l("ngStyle",L(11,mt,"url("+r.customCard.img+")")),s(2),B(r.customCard.title),s(2),B(r.customCard.linkVideo),s(2),B(r.customCard.description),s(2),h("#",r.customCard.tags,""),s(2),B(g(11,7,r.customCard.date)),s(4),h(" ",g(15,9,r.buttonNameDelete)," "))},dependencies:[w,A,H,tt,at],styles:[".custom-card_pic[_ngcontent-%COMP%]{width:100%;aspect-ratio:1/.6;background-repeat:no-repeat;background-size:contain;margin-bottom:10px;background-position:center center}.custom-card_title[_ngcontent-%COMP%]{text-align:center;padding-bottom:10px;font-size:.8rem;font-weight:600;text-overflow:ellipsis}.custom-card_description[_ngcontent-%COMP%]{text-align:center;font-size:.8rem;text-overflow:ellipsis}.custom-card_button[_ngcontent-%COMP%]{font-size:.8rem;background-color:transparent;border:none;border-radius:5px}"]});let e=t;return e})();function dt(e,t){if(e&1){let o=z();a(0,"div",0)(1,"button",1),k("click",function(){O(o);let n=f();return T(n.turnPreviousPage())}),a(2,"mat-icon",2),c(3),p()(),a(4,"button",3),c(5),p(),a(6,"button",1),k("click",function(){O(o);let n=f();return T(n.turnNextPage())}),a(7,"mat-icon",2),c(8),p()()()}if(e&2){let o=t,i=f();s(),l("disabled",o===1),s(2),h(" ",i.paginationButtonSymbols.previous,""),s(2),h(" ",o," "),s(),l("disabled",!i.youtubeService.nextPageToken),s(2),h(" ",i.paginationButtonSymbols.next,"")}}var ct=(()=>{let t=class t{constructor(){this.paginationButtonSymbols={previous:"keyboard_arrow_left",next:"keyboard_arrow_right"},this.nextPageToken=1,this.store=b(S),this.currentPageNumber$=this.store.select(Q),this.youtubeService=b(F)}turnNextPage(){this.store.dispatch(j.nextPage())}turnPreviousPage(){this.store.dispatch(j.previousPage())}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=_({type:t,selectors:[["app-pagination-buttons"]],standalone:!0,features:[x],decls:2,vars:3,consts:[[1,"pagination-buttons_wrapper"],["type","button",1,"pagination-buttons_item","turn",3,"click","disabled"],[1,"pagination-buttons_icon"],["type","button",1,"pagination-buttons_item","number"]],template:function(n,r){if(n&1&&(P(0,dt,9,5,"div",0),u(1,"async")),n&2){let m;D((m=g(1,1,r.currentPageNumber$))?0:-1,m)}},dependencies:[q,w,I],styles:[".pagination-buttons_wrapper[_ngcontent-%COMP%]{width:300px;display:flex;align-items:center;justify-content:space-between}.pagination-buttons_item[_ngcontent-%COMP%]{width:18%;aspect-ratio:1/1;border-radius:50%;background-color:#ffdadb;display:flex;align-items:center;justify-content:center;transition:all .2s ease-in-out}.pagination-buttons_item.number[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:700}.pagination-buttons_item.turn[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#ffb2b8}"]});let e=t;return e})();var lt=(e,t)=>t.customId,ft=(e,t)=>t.id,ut=()=>({display:"block"});function gt(e,t){if(e&1&&y(0,"app-custom-card",0),e&2){let o=t.$implicit;l("ngStyle",N(3,ut))("customCard",o)("appColouredByDateBorder",o.date)}}function ht(e,t){e&1&&(a(0,"div",1),c(1,"is Loading..."),p())}function Ct(e,t){if(e&1&&y(0,"app-search-item",3),e&2){let o=t.$implicit,i=f(3);l("card",o)("initialFavoriteValue",i.heartsIds.includes(o.id))("appColouredByDateBorder",o.snippet.publishedAt)("ngStyle",N(4,ut))}}function bt(e,t){if(e&1&&($(0,Ct,1,5,"app-search-item",3,ft),u(2,"dateAsc"),u(3,"dateDesc"),u(4,"viewsCountAsc"),u(5,"viewsCountDesc"),u(6,"wordsPipe")),e&2){let o=f(2);E(v(6,12,v(5,9,v(4,6,v(3,3,v(2,0,t,o.youtubeService.dateAscSort),o.youtubeService.dateDescSort),o.youtubeService.viewsAscSort),o.youtubeService.viewsDescSort),o.youtubeService.filterSearchInputValue))}}function _t(e,t){if(e&1&&(P(0,bt,7,15),u(1,"async")),e&2){let o,i=f();D((o=g(1,1,i.items$))?0:-1,o)}}var oe=(()=>{let t=class t{constructor(i,n){this.youtubeService=i,this.store=n,this.filterValueDownFromApp="",this.fakeSearchDownFromApp="",this.getFakeSearchValue="",this.gotViewsCountAcsOrder=!0,this.gotViewsCountDescOrder=!0,this.gotDateAsc=!0,this.gotDateDesc=!0,this.gotFilterValue="",this.responseCardsOnRequest=[],this.realAPICards=[],this.items$=this.store.select(U),this.customCards$=this.store.select(J),this.heartsIds$=this.store.select(K),this.subscriptions=new R,this.isLoading$=this.store.select(W)}ngOnInit(){this.subscriptions.add(this.heartsIds$.pipe(M(i=>i)).subscribe(i=>{this.heartsIds=i})),this.subscriptions.add(this.isLoading$.pipe(M(i=>i)).subscribe(i=>{this.isLoading=i}))}getCardsBasedOnHeaderInputValue(){return this.realAPICards}ngOnDestroy(){this.subscriptions.unsubscribe()}};t.\u0275fac=function(n){return new(n||t)(V(F),V(S))},t.\u0275cmp=_({type:t,selectors:[["app-search-results"]],inputs:{filterValueDownFromApp:"filterValueDownFromApp",fakeSearchDownFromApp:"fakeSearchDownFromApp",getFakeSearchValue:"getFakeSearchValue",gotViewsCountAcsOrder:"gotViewsCountAcsOrder",gotViewsCountDescOrder:"gotViewsCountDescOrder",gotDateAsc:"gotDateAsc",gotDateDesc:"gotDateDesc"},standalone:!0,features:[x],decls:6,vars:3,consts:[[1,"card_wrapper",3,"ngStyle","customCard","appColouredByDateBorder"],[1,"is_loading"],[1,"pagination-buttons"],[1,"card_wrapper",3,"card","initialFavoriteValue","appColouredByDateBorder","ngStyle"]],template:function(n,r){n&1&&($(0,gt,1,4,"app-custom-card",0,lt),u(2,"async"),P(3,ht,2,0,"div",1)(4,_t,2,3),y(5,"app-pagination-buttons",2)),n&2&&(E(g(2,1,r.customCards$)),s(3),D(r.isLoading?3:4))},dependencies:[w,A,I,et,Z,X,ot,rt,it,nt,pt,ct],styles:[".card_wrapper[_ngcontent-%COMP%]{width:30%;max-height:30rem;display:flex;flex-direction:column;align-items:center;justify-content:space-between;text-align:center;border-bottom:10px solid oklch(0% 0 0);padding-bottom:5px;display:none}.is_loading[_ngcontent-%COMP%]{font-size:1.2rem}@media screen and (min-width: 650px) and (max-width: 1000px){.card_wrapper[_ngcontent-%COMP%]{width:45%}}@media screen and (min-width: 320px) and (max-width: 649.99px){.card_wrapper[_ngcontent-%COMP%]{width:100%}}"]});let e=t;return e})();export{oe as a};
