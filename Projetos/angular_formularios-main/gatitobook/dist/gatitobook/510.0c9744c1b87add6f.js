"use strict";(self.webpackChunkgatitobook=self.webpackChunkgatitobook||[]).push([[510],{5510:(gt,A,r)=>{r.r(A),r.d(A,{AnimaisModule:()=>ut});var T=r(3116),l=r(6019),t=r(3556);let I=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[l.ez]]}),o})();var c=r(6217);function y(o,i){if(1&o&&(t.TgZ(0,"h4",3),t._uU(1),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Oqu(n.titulo)}}const b=["*"];let F=(()=>{class o{constructor(){this.titulo=""}ngOnInit(){}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-cartao"]],inputs:{titulo:"titulo"},ngContentSelectors:b,decls:4,vars:1,consts:[[1,"card","border-light","text-center"],["class","card-header",4,"ngIf"],[1,"card-block","text-justify"],[1,"card-header"]],template:function(n,e){1&n&&(t.F$t(),t.TgZ(0,"div",0),t.YNc(1,y,2,1,"h4",1),t.TgZ(2,"div",2),t.Hsn(3),t.qZA(),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngIf",e.titulo))},directives:[l.O5],styles:[""]}),o})(),f=(()=>{class o{constructor(){this.urlOriginal="",this.descricao=""}set url(n){this.urlOriginal=n.startsWith("data")?n:`http://localhost:3000/imgs/${n}`}get url(){return this.urlOriginal}ngOnInit(){}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-animal"]],inputs:{descricao:"descricao",url:"url"},decls:1,vars:2,consts:[[1,"img-thumbnail",3,"src","alt"]],template:function(n,e){1&n&&t._UZ(0,"img",0),2&n&&t.Q6J("src",e.url,t.LSH)("alt",e.descricao)},styles:[""]}),o})();function J(o,i){1&o&&(t.TgZ(0,"p",3),t._uU(1," Desculpe n\xe3o h\xe1 animais\n"),t.qZA())}const q=function(o){return["/animais",o]};function U(o,i){if(1&o&&(t.TgZ(0,"div",4),t.TgZ(1,"a",5),t.TgZ(2,"app-cartao"),t._UZ(3,"app-animal",6),t.TgZ(4,"i",7),t._uU(5),t.qZA(),t.TgZ(6,"i",8),t._uU(7),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o){const n=i.$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(5,q,n.id)),t.xp6(2),t.Q6J("url",n.url)("descricao",n.description),t.xp6(2),t.Oqu(n.likes),t.xp6(2),t.Oqu(n.comments)}}let O=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-grade-fotos-animais"]],inputs:{animais:"animais"},decls:3,vars:2,consts:[["class","text-center text-muted",4,"ngIf"],[1,"row"],["class","col-3",4,"ngFor","ngForOf"],[1,"text-center","text-muted"],[1,"col-3"],[3,"routerLink"],[3,"url","descricao"],["aria-hidden","true",1,"fa","fa-heart-o","fa-1x","mr-2"],["aria-hidden","true",1,"fa","fa-comment-o","fa-1x","mr-2","ml-2"]],template:function(n,e){1&n&&(t.YNc(0,J,2,0,"p",0),t.TgZ(1,"div",1),t.YNc(2,U,8,7,"div",2),t.qZA()),2&n&&(t.Q6J("ngIf",!(null!=e.animais&&e.animais.length)),t.xp6(2),t.Q6J("ngForOf",e.animais))},directives:[l.O5,l.sg,c.yS,F,f],styles:[""]}),o})(),w=(()=>{class o{constructor(n){this.activatedRoute=n}ngOnInit(){this.activatedRoute.params.subscribe(n=>{this.animais=this.activatedRoute.snapshot.data.animais})}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(c.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-lista-animais"]],decls:1,vars:1,consts:[[3,"animais"]],template:function(n,e){1&n&&t._UZ(0,"app-grade-fotos-animais",0),2&n&&t.Q6J("animais",e.animais)},directives:[O],styles:[""]}),o})();var S=r(4753),Y=r(2835),L=r(2997),M=r(8305),$=r(5044),_=r(8260),g=r(4522),E=r(1650);const u=_.N.API;let v=(()=>{class o{constructor(n,e){this.httpClient=n,this.tokenService=e}listaDoUsuario(n){return this.httpClient.get(`${u}/${n}/photos`)}buscaPorID(n){return this.httpClient.get(`${u}/photos/${n}`)}excluiAnimal(n){return this.httpClient.delete(`${u}/photos/${n}`)}curtir(n){return this.httpClient.post(`${u}/photos/${n}/like`,{},{observe:"response"}).pipe((0,S.U)(()=>!0),(0,Y.K)(e=>304===e.status?(0,L.of)(!1):function(o,i){const n=(0,$.m)(o)?o:()=>o,e=a=>a.error(n());return new M.y(e)}(e)))}upload(n,e,a){const m=new FormData;return m.append("description",n),m.append("allowComments",e.toString()),m.append("imageFile",a),this.httpClient.post(`${u}/photos/upload`,m,{observe:"events",reportProgress:!0})}}return o.\u0275fac=function(n){return new(n||o)(t.LFG(g.eN),t.LFG(E.B))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var C=r(3067),P=r(7384),s=r(7537);const Z=_.N.API;let G=(()=>{class o{constructor(n){this.http=n}buscaComentario(n){return this.http.get(`${Z}/photos/${n}/comments`)}incluiComentario(n,e){return this.http.post(`${Z}/photos/${n}/comments`,{commentText:e})}}return o.\u0275fac=function(n){return new(n||o)(t.LFG(g.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var x=r(2847);function R(o,i){if(1&o&&(t.TgZ(0,"li"),t.TgZ(1,"p",10),t._uU(2),t.qZA(),t.TgZ(3,"em"),t._uU(4),t.ALo(5,"date"),t.qZA(),t.TgZ(6,"p",11),t._uU(7),t.qZA(),t.qZA()),2&o){const n=i.$implicit;t.xp6(2),t.hij(" ",n.userName," "),t.xp6(2),t.Oqu(t.xi3(5,3,n.date,"dd-MM-yyyy HH:mm")),t.xp6(3),t.Oqu(n.text)}}function z(o,i){1&o&&t._UZ(0,"app-mensagem",12),2&o&&t.Q6J("mensagem","Tamanho de 300 caracteres")}function B(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"div"),t.TgZ(2,"ul",1),t.YNc(3,R,8,6,"li",2),t.qZA(),t.qZA(),t.TgZ(4,"div",3),t.TgZ(5,"form",4),t.NdJ("submit",function(){return t.CHM(n),t.oxw().gravar()}),t.TgZ(6,"div",5),t._UZ(7,"textarea",6),t.TgZ(8,"div",7),t.TgZ(9,"button",8),t._uU(10," Publicar "),t.qZA(),t.qZA(),t.qZA(),t.YNc(11,z,1,1,"app-mensagem",9),t.qZA(),t.qZA(),t.qZA()}if(2&o){const n=i.ngIf,e=t.oxw();let a;t.xp6(3),t.Q6J("ngForOf",n),t.xp6(2),t.Q6J("formGroup",e.comentarioForm),t.xp6(4),t.Q6J("disabled",e.comentarioForm.invalid),t.xp6(2),t.Q6J("ngIf",!(null==(a=e.comentarioForm.get("comentario"))||null==a.errors||!a.errors.maxLength))}}let H=(()=>{class o{constructor(n,e){this.comentarioService=n,this.formBuilder=e}ngOnInit(){this.comentarios$=this.comentarioService.buscaComentario(this.animalId),this.comentarioForm=this.formBuilder.group({comentario:["",s.kI.maxLength(300)]})}gravar(){var n,e;const a=null!==(e=null===(n=this.comentarioForm.get("comentario"))||void 0===n?void 0:n.value)&&void 0!==e?e:"";this.comentarios$=this.comentarioService.incluiComentario(this.animalId,a).pipe((0,C.w)(()=>this.comentarioService.buscaComentario(this.animalId)),(0,P.b)(()=>{this.comentarioForm.reset(),alert("Salvo Comentario")}))}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(G),t.Y36(s.qu))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-comentarios"]],inputs:{animalId:"animalId"},decls:2,vars:3,consts:[[4,"ngIf"],[1,"list-unstyled","comentario-list"],[4,"ngFor","ngForOf"],[1,"mt-4"],[3,"formGroup","submit"],[1,"input-group"],["formControlName","comentario",1,"form-control"],[1,"input-group-append"],["type","submit",1,"btn","btn-primary","pull-left",3,"disabled"],[3,"mensagem",4,"ngIf"],[1,"text-dark","font-weight-bold","mr-1"],[1,"break-word","mb-2"],[3,"mensagem"]],template:function(n,e){1&n&&(t.YNc(0,B,12,4,"div",0),t.ALo(1,"async")),2&n&&t.Q6J("ngIf",t.lcZ(1,1,e.comentarios$))},directives:[l.O5,l.sg,s._Y,s.JL,s.sg,s.Fj,s.JJ,s.u,x.c],pipes:[l.Ov,l.uU],styles:[".comentario-list[_ngcontent-%COMP%]{height:50vh;overflow-y:auto}"]}),o})();function j(o,i){if(1&o&&t._UZ(0,"app-comentarios",12),2&o){const n=t.oxw(2);t.Q6J("animalId",n.animalId)}}function X(o,i){1&o&&(t.TgZ(0,"p"),t._uU(1),t.qZA()),2&o&&(t.xp6(1),t.Oqu("Usu\xe1rio sem permiss\xe3o para coment\xe1rios no animal."))}function W(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"div",1),t.TgZ(1,"div",2),t.TgZ(2,"div",3),t._UZ(3,"app-animal",4),t.qZA(),t.TgZ(4,"div",5),t.TgZ(5,"small"),t.TgZ(6,"p",6),t._uU(7),t.qZA(),t.TgZ(8,"i",7),t.NdJ("click",function(){return t.CHM(n),t.oxw().curtir()}),t._uU(9),t.qZA(),t.TgZ(10,"i",8),t._uU(11),t.qZA(),t.TgZ(12,"i",9),t.NdJ("click",function(){return t.CHM(n),t.oxw().excluir()}),t.qZA(),t.qZA(),t.YNc(13,j,1,1,"app-comentarios",10),t.YNc(14,X,2,1,"ng-template",null,11,t.W1O),t.qZA(),t.qZA(),t.qZA()}if(2&o){const n=i.ngIf,e=t.MAs(15);t.xp6(3),t.Q6J("url",n.url)("descricao",n.description),t.xp6(4),t.Oqu(n.description),t.xp6(2),t.Oqu(n.likes),t.xp6(2),t.Oqu(n.comments),t.xp6(2),t.Q6J("ngIf",n.allowComments)("ngIfElse",e)}}let K=(()=>{class o{constructor(n,e,a){this.animaisService=n,this.activatedRoute=e,this.router=a}ngOnInit(){this.animalId=this.activatedRoute.snapshot.params.animalId,this.animal$=this.animaisService.buscaPorID(this.animalId)}curtir(){this.animaisService.curtir(this.animalId).subscribe(n=>{n&&(this.animal$=this.animaisService.buscaPorID(this.animalId))})}excluir(){this.animaisService.excluiAnimal(this.animalId).subscribe(()=>{this.router.navigate(["/animais/"])},n=>console.log(n))}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(v),t.Y36(c.gz),t.Y36(c.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-detalhe-animal"]],decls:2,vars:3,consts:[["class","bg-white border",4,"ngIf"],[1,"bg-white","border"],[1,"row"],[1,"col-lg-8"],[3,"url","descricao"],[1,"col-lg-4"],[1,"text-left","break-word"],[1,"fa","fa-heart-o","fa-2x","mr-2","pull-left",3,"click"],[1,"fa","fa-comment-o","fa-2x","mr-2","ml-2"],[1,"fa","fa-trash-o","fa-2x","pull-right",3,"click"],[3,"animalId",4,"ngIf","ngIfElse"],["warning",""],[3,"animalId"]],template:function(n,e){1&n&&(t.YNc(0,W,16,7,"div",0),t.ALo(1,"async")),2&n&&t.Q6J("ngIf",t.lcZ(1,1,e.animal$))},directives:[l.O5,f,H],pipes:[l.Ov],styles:[""]}),o})();var V=r(423);function tt(o,i){1&o&&t._UZ(0,"app-mensagem",17),2&o&&t.Q6J("mensagem","Por favor selecione a foto")}function nt(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"div",6),t.TgZ(1,"button",13),t.NdJ("click",function(){return t.CHM(n),t.MAs(4).click()}),t._UZ(2,"i",14),t.qZA(),t.TgZ(3,"input",15,16),t.NdJ("change",function(a){return t.CHM(n),t.oxw().gravaArquivo(a.target)}),t.qZA(),t.YNc(5,tt,1,1,"app-mensagem",8),t.qZA()}if(2&o){const n=t.oxw();let e;t.xp6(3),t.Q6J("formControlName","file"),t.xp6(2),t.Q6J("ngIf",!(null==(e=n.formAnimal.get("file"))||null==e.errors||!e.errors.required))}}function ot(o,i){if(1&o&&t._UZ(0,"app-animal",18),2&o){const n=t.oxw();t.Q6J("url",n.preview)}}function et(o,i){1&o&&t._UZ(0,"app-mensagem",17),2&o&&t.Q6J("mensagem","Tamanho m\xe1ximo do campo \xe9 300 caracteres")}const it=function(){return["animais"]};function at(o,i){if(1&o&&(t.TgZ(0,"div"),t.TgZ(1,"button",19),t._uU(2," Enviar "),t.qZA(),t.TgZ(3,"a",20),t._uU(4,"Cancelar"),t.qZA(),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("disabled",n.formAnimal.invalid),t.xp6(2),t.Q6J("routerLink",t.DdM(2,it))}}function rt(o,i){if(1&o&&(t.TgZ(0,"div",21),t._uU(1),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.hij(" Percentual de upload ",n.percentualConcluido," % ")}}let st=(()=>{class o{constructor(n,e,a){this.animalService=n,this.formBuilder=e,this.router=a,this.percentualConcluido=0}ngOnInit(){this.formAnimal=this.formBuilder.group({file:["",s.kI.required],description:["",s.kI.maxLength(300)],allowComments:[!0]})}upload(){var n,e,a,m;const p=null!==(e=null===(n=this.formAnimal.get("allowComments"))||void 0===n?void 0:n.value)&&void 0!==e&&e,dt=null!==(m=null===(a=this.formAnimal.get("description"))||void 0===a?void 0:a.value)&&void 0!==m?m:"";this.animalService.upload(dt,p,this.file).pipe((0,V.x)(()=>this.router.navigate(["animais"]))).subscribe(d=>{var h;if(d.type===g.dt.UploadProgress){const ft=null!==(h=d.total)&&void 0!==h?h:1;this.percentualConcluido=Math.round(d.loaded/ft*100)}},d=>console.log(d))}gravaArquivo(n){const[e]=null==n?void 0:n.files;this.file=e;const a=new FileReader;a.onload=m=>this.preview=m.target.result,a.readAsDataURL(e)}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(v),t.Y36(s.qu),t.Y36(c.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-novo-animal"]],decls:17,vars:8,consts:[[1,"container"],[1,"row",3,"formGroup","submit"],[1,"col-md-6","text-center"],["class","form-group",4,"ngIf","ngIfElse"],["previewImage",""],[1,"col-md-6"],[1,"form-group"],["placeholder","Descri\xe7\xe3o do aninal",1,"form-control","form-control-sm",3,"formControlName"],[3,"mensagem",4,"ngIf"],[1,"text-muted"],["type","checkbox",3,"formControlName"],[4,"ngIf","ngIfElse"],["uploaddiv",""],["type","button",1,"btn","btn-primary",3,"click"],[1,"fa","fa-image","fa-4x","align-middle"],["type","file","hidden","","accept","image/*",3,"formControlName","change"],["fileInput",""],[3,"mensagem"],["title","Preview",3,"url"],["type","submit",1,"btn","btn-primary","btn-block",3,"disabled"],[1,"btn","btn-secondary","btn-block",3,"routerLink"],[1,"text-center","display-4"]],template:function(n,e){if(1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"form",1),t.NdJ("submit",function(){return e.upload()}),t.TgZ(2,"div",2),t.YNc(3,nt,6,2,"div",3),t.YNc(4,ot,1,1,"ng-template",null,4,t.W1O),t.qZA(),t.TgZ(6,"div",5),t.TgZ(7,"div",6),t._UZ(8,"textarea",7),t.YNc(9,et,1,1,"app-mensagem",8),t.qZA(),t.TgZ(10,"div",6),t.TgZ(11,"label",9),t._uU(12,"Permite coment\xe1rio "),t._UZ(13,"input",10),t.qZA(),t.qZA(),t.YNc(14,at,5,3,"div",11),t.YNc(15,rt,2,1,"ng-template",null,12,t.W1O),t.qZA(),t.qZA(),t.qZA()),2&n){const a=t.MAs(5),m=t.MAs(16);let p;t.xp6(1),t.Q6J("formGroup",e.formAnimal),t.xp6(2),t.Q6J("ngIf",!e.preview)("ngIfElse",a),t.xp6(5),t.Q6J("formControlName","description"),t.xp6(1),t.Q6J("ngIf",!(null==(p=e.formAnimal.get("description"))||null==p.errors||!p.errors.maxLength)),t.xp6(4),t.Q6J("formControlName","allowComments"),t.xp6(1),t.Q6J("ngIf",!e.percentualConcluido)("ngIfElse",m)}},directives:[s._Y,s.JL,s.sg,l.O5,s.Fj,s.JJ,s.u,s.Wl,x.c,f,c.yS],styles:[""]}),o})();var mt=r(9468),lt=r(5400);const ct=[{path:"",component:w,resolve:{animais:(()=>{class o{constructor(n,e){this.animaisService=n,this.usuarioService=e}resolve(n,e){return this.usuarioService.retornaUsuario().pipe((0,C.w)(a=>{var m;const p=null!==(m=a.name)&&void 0!==m?m:"";return this.animaisService.listaDoUsuario(p)}),(0,mt.q)(1))}}return o.\u0275fac=function(n){return new(n||o)(t.LFG(v),t.LFG(lt.i))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()}},{path:"novo",component:st},{path:":animalId",component:K}];let pt=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[c.Bz.forChild(ct)],c.Bz]}),o})(),ut=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[l.ez,pt,I,T.m]]}),o})()}}]);