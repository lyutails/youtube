import{a as T}from"./chunk-H3B4BPUP.js";import{g as z,i as F}from"./chunk-63PWIT3F.js";import{g as B,i as E}from"./chunk-VBQUAAPI.js";import{$b as x,Aa as h,Ac as O,Ba as b,Bb as n,Cb as d,Cc as I,Db as k,Dc as D,Eb as y,Gb as S,Hb as u,Kb as M,Qb as r,Sb as s,Xb as P,Zb as g,_b as _,cb as c,db as p,qa as f,sb as C,ta as v,ub as m,xb as w}from"./chunk-MGU3A3HE.js";var j=(()=>{let i=class i{transform(o){return o?.slice(0,-5)}};i.\u0275fac=function(a){return new(a||i)},i.\u0275pipe=v({name:"cutDate",type:i,pure:!0,standalone:!0});let e=i;return e})();var V=e=>({"background-image":e}),A=e=>({color:e});function U(e,i){if(e&1){let t=y();k(0,"div",0),n(1,"div",1),r(2),d(),n(3,"div",2)(4,"div",3),r(5),n(6,"mat-icon",4),r(7,"visibility"),d()(),n(8,"div",5),r(9),n(10,"mat-icon",4),r(11,"thumb_up"),d()(),n(12,"div",6),r(13),n(14,"mat-icon",4),r(15,"thumb_down"),d()(),n(16,"div",7),r(17),n(18,"mat-icon",4),r(19,"comment"),d()(),n(20,"button",8)(21,"mat-icon",4),r(22,"favorite"),d()()(),n(23,"div",9),r(24),d(),n(25,"div",10),r(26),_(27,"cutDate"),d(),n(28,"button",11),S("click",function(){h(t);let a=u();return b(a.navigateToMain())}),r(29),_(30,"uppercase"),d()}if(e&2){let t=u();m("ngStyle",g(15,V,"url("+t.card.snippet.thumbnails.maxres.url+")"?"url("+t.card.snippet.thumbnails.maxres.url+")":"../../../../public/favicon_youtube_angular_colours.svg")),c(2),s(" Description: ",t.card.snippet.description?t.card.snippet.description:"good long meaningful text"," "),c(3),s(" ",t.card.statistics.viewCount?t.card.statistics.viewCount:"0"," "),c(4),s(" ",t.card.statistics.likeCount?t.card.statistics.likeCount:"0"," "),c(4),s(" ",t.card.statistics.dislikeCount?t.card.statistics.dislikeCount:"0"," "),c(4),s(" ",t.card.statistics.commentCount?t.card.statistics.commentCount:"0"," "),c(3),M("id",t.card.id),m("ngStyle",g(17,A,t.isFavourite?"#be003d":"#000000")),c(4),s(" ",t.card.snippet.title," "),c(2),s(" ",x(27,11,t.card.snippet.publishedAt)," "),c(3),s(" ",x(30,13,t.returnBackButtonName)," ")}}var nt=(()=>{let i=class i{constructor(o,a,l,N){this.route=o,this.youtubeService=a,this.router=l,this.loadingService=N,this.isFavourite=!1,this.buttonName="more...",this.returnBackButtonName="back"}ngOnInit(){let o=this.route.snapshot.paramMap.get("id");if(!o){this.router.navigate(["/404"]);return}setTimeout(()=>{this.youtubeService.getRealDetailedCard(o).subscribe(a=>{a.items[0]?[this.card]=a.items:this.router.navigate(["/404"])})},100)}navigateToMain(){this.router.navigate(["/main"])}};i.\u0275fac=function(a){return new(a||i)(p(B),p(F),p(E),p(T))},i.\u0275cmp=f({type:i,selectors:[["app-card-details"]],standalone:!0,features:[P],decls:1,vars:1,consts:[[1,"card_pic",3,"ngStyle"],[1,"card_description"],[1,"card_stats"],[1,"card_stat","view"],[1,"header_icon"],[1,"card_stat","like"],[1,"card_stat","dislike"],[1,"card_stat","comments"],["type","button",1,"card_stat","favourite",3,"id","ngStyle"],[1,"card_title"],[1,"card_public-date"],["type","button",1,"card_come-back",3,"click"]],template:function(a,l){a&1&&C(0,U,31,19),a&2&&w(l.card?0:-1)},dependencies:[D,O,I,z,j],styles:[".card_pic[_ngcontent-%COMP%]{width:80%;aspect-ratio:1/.6;background-repeat:no-repeat;background-size:contain;background-position:center center;margin:0 auto}.card_stats[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row;align-items:center;justify-content:space-between}.card_stat[_ngcontent-%COMP%]{width:18%;font-size:.6rem;transition:all .2s ease-in-out;display:flex;flex-direction:column;align-items:center;text-align:center}.card_stat.favourite[_ngcontent-%COMP%]{border:none;background-color:transparent}.card_stat.favourite[_ngcontent-%COMP%]:hover{cursor:pointer;color:#be003d}.card_stat[_ngcontent-%COMP%]:nth-child(4){border-right:1px solid oklch(0% 0 0)}.card_title[_ngcontent-%COMP%]{width:100%;text-align:center;padding-bottom:10px;font-size:1.2rem;font-weight:600;margin-top:20px}.card_id[_ngcontent-%COMP%]{font-size:.6rem}.card_button[_ngcontent-%COMP%]{font-size:.8rem}.card_description[_ngcontent-%COMP%], .card_public-date[_ngcontent-%COMP%]{width:80%;margin:0 auto;text-align:center}.card_come-back[_ngcontent-%COMP%]{padding:10px 20px;background-color:oklch(75.93% .15 14.33);border-radius:10px;border:none;font-size:.9rem;transition:all .2s ease-in-out;margin:0 auto;display:block}.card_come-back[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:oklch(75.93% .15 14.33/50%)}@media screen and (max-width: 1200px) and (min-width: 650px){.filters_wrapper[_ngcontent-%COMP%]{font-size:.8rem;width:90%}}@media screen and (max-width: 800px) and (min-width: 320px){.filters_wrapper[_ngcontent-%COMP%]{flex-direction:column;font-size:.8rem;row-gap:5px;margin-top:5px;margin-bottom:5px;width:90%}.card_wrapper[_ngcontent-%COMP%]{width:45%}}"]});let e=i;return e})();export{nt as CardDetailsComponent};
