(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{R1fx:function(e,t,n){"use strict";n.r(t),n.d(t,"QuizModule",(function(){return L}));var i=n("ofXK"),s=n("PCNd"),r=n("tyNb"),o=n("SxV6"),c=n("lJxs"),u=n("VovJ"),b=n("fXoL"),l=n("lV75"),a=n("x6JD"),d=n("tk/3");let g=(()=>{class e{constructor(e){this.http=e}get url(){return l.a.baseUrl}startQuiz(e,t){let n=this.url+"questionnaire";return t&&(n+=a.a.getOptionsQuery(t)),this.http.post(n,e).pipe(Object(c.a)(e=>e.data))}sendQuizResult(e,t,n){let i=`${this.url}questionnaire/${e}`;return n&&(i+=a.a.getOptionsQuery(n)),this.http.put(i,t).pipe(Object(c.a)(e=>e.data))}}return e.\u0275fac=function(t){return new(t||e)(b.Ub(d.b))},e.\u0275prov=b.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var h=n("CZ+i"),p=n("/JoM"),f=n("UYTb"),m=n("aF9I"),v=n("+x79");let P=(()=>{class e{constructor(){this.startQuiz=new b.n}selectCategory(e){this.selectedCategory=e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=b.Fb({type:e,selectors:[["app-before-start"]],inputs:{categories:"categories"},outputs:{startQuiz:"startQuiz"},decls:15,vars:0,consts:[[1,"non-quiz"],[1,"mb-5"],[1,"before-actions"],[1,"primary",3,"click"]],template:function(e,t){1&e&&(b.Qb(0,"div",0),b.Qb(1,"h2"),b.Ac(2,"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u043d\u0430 \u0442\u0435\u0441\u0442\u043e\u0432\u044b\u0439 \u044d\u043a\u0437\u0430\u043c\u0435\u043d"),b.Pb(),b.Qb(3,"p"),b.Ac(4,"\u0423 \u0432\u0430\u0441 \u0431\u0443\u0434\u0435\u0442 "),b.Qb(5,"b"),b.Ac(6,"45 \u043c\u0438\u043d\u0443\u0442"),b.Pb(),b.Ac(7," \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0439\u0442\u0438 \u0442\u0435\u0441\u0442"),b.Pb(),b.Qb(8,"p",1),b.Ac(9,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0448\u0438\u0431\u0438\u0442\u044c\u0441\u044f \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c "),b.Qb(10,"b"),b.Ac(11,"5 \u0440\u0430\u0437\u0430"),b.Pb(),b.Pb(),b.Qb(12,"div",2),b.Qb(13,"button",3),b.Xb("click",(function(){return t.startQuiz.emit("8e34bd6e-2305-11ec-a9fa-3cecef02c254")})),b.Ac(14,"\u041d\u0410\u0427\u0410\u0422\u042c \u0422\u0415\u0421\u0422"),b.Pb(),b.Pb(),b.Pb())},styles:[".non-quiz[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:400px;text-align:center}.non-quiz[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:red}.before-actions[_ngcontent-%COMP%]{max-width:200px}.before-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}"]}),e})();const x=function(e,t,n){return{current:e,correct:t,failed:n}};function O(e,t){if(1&e){const e=b.Rb();b.Qb(0,"div",2),b.Xb("click",(function(){b.pc(e);const n=t.index,i=b.bc();return i.currentNumber=n+1,i.changeNumber.emit(n+1)})),b.Ac(1),b.Pb()}if(2&e){const e=t.$implicit,n=t.index,i=b.bc();b.hc("ngClass",b.lc(2,x,i.currentNumber===n+1,!0===e.isRightAnswer,!1===e.isRightAnswer)),b.zb(1),b.Cc(" ",e.number," ")}}let Q=(()=>{class e{constructor(){this.changeNumber=new b.n}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=b.Fb({type:e,selectors:[["app-numbers"]],inputs:{questionNumbers:"questionNumbers",currentNumber:"currentNumber"},outputs:{changeNumber:"changeNumber"},decls:2,vars:1,consts:[[1,"numbers"],["class","question-number",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"question-number",3,"ngClass","click"]],template:function(e,t){1&e&&(b.Qb(0,"div",0),b.yc(1,O,2,6,"div",1),b.Pb()),2&e&&(b.zb(1),b.hc("ngForOf",t.questionNumbers))},directives:[i.k,i.j],styles:[".numbers[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(20,1fr);grid-gap:2px}@media screen and (max-width:991px){.numbers[_ngcontent-%COMP%]{grid-template-columns:repeat(10,1fr)}}.numbers[_ngcontent-%COMP%]   .question-number[_ngcontent-%COMP%]{text-align:center;padding:5px;cursor:pointer;background:#262f36;color:#fff}.numbers[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%]{background:#ffc627;color:#000}.numbers[_ngcontent-%COMP%]   .correct[_ngcontent-%COMP%]{color:#fff;background:green}.numbers[_ngcontent-%COMP%]   .failed[_ngcontent-%COMP%]{color:#fff;background:#8b0000}"]}),e})();var w=n("5rUV");function q(e,t){1&e&&b.Mb(0,"app-no-paid-content")}function C(e,t){if(1&e){const e=b.Rb();b.Qb(0,"app-before-start",7),b.Xb("startQuiz",(function(t){return b.pc(e),b.bc(2).startQuiz(t)})),b.Pb()}if(2&e){const e=b.bc(2);b.hc("categories",e.categories)}}function M(e,t){if(1&e){const e=b.Rb();b.Qb(0,"app-numbers",17),b.Xb("changeNumber",(function(t){return b.pc(e),b.bc(3).selectQuestion(t)})),b.Pb()}if(2&e){const e=b.bc(3);b.hc("questionNumbers",e.questionNumbers)("currentNumber",e.currentQuestionNumber)}}function A(e,t){if(1&e){const e=b.Rb();b.Qb(0,"app-question",19),b.Xb("selectedAnswer",(function(t){b.pc(e);const n=b.bc().index;return b.bc(3).selectAnswer(t,n)})),b.Pb()}if(2&e){const e=b.bc(),t=e.index;b.hc("question",e.$implicit)("questionNumber",t+1)}}function _(e,t){if(1&e&&(b.Qb(0,"div"),b.yc(1,A,1,2,"app-question",18),b.Pb()),2&e){const e=t.index,n=b.bc(3);b.zb(1),b.hc("ngIf",e+1===n.currentQuestionNumber)}}function z(e,t){if(1&e){const e=b.Rb();b.Qb(0,"div",20),b.Qb(1,"button",21),b.Xb("click",(function(){return b.pc(e),b.bc(3).finishQuiz()})),b.Ac(2,"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c"),b.Pb(),b.Pb()}}function y(e,t){if(1&e){const e=b.Rb();b.Qb(0,"div",8),b.Qb(1,"div",9),b.Ac(2),b.Pb(),b.Qb(3,"div"),b.yc(4,M,1,2,"app-numbers",10),b.Pb(),b.yc(5,_,2,1,"div",11),b.Qb(6,"div",12),b.Qb(7,"button",13),b.Xb("click",(function(){return b.pc(e),b.bc(2).changeQuestion(!1)})),b.Mb(8,"i",14),b.Ac(9," \u041d\u0430\u0437\u0430\u0434"),b.Pb(),b.Qb(10,"button",13),b.Xb("click",(function(){return b.pc(e),b.bc(2).changeQuestion(!0)})),b.Ac(11,"\u0412\u043f\u0435\u0440\u0435\u0434 "),b.Mb(12,"i",15),b.Pb(),b.Pb(),b.yc(13,z,3,0,"div",16),b.Pb()}if(2&e){const e=b.bc(2);b.zb(2),b.Bc(e.timer),b.zb(2),b.hc("ngIf",null==e.questionNumbers?null:e.questionNumbers.length),b.zb(1),b.hc("ngForOf",e.questions),b.zb(8),b.hc("ngIf",e.answeredQuestions.length)}}const k=function(e,t,n){return{correct:e,incorrect:t,skipped:n}};function I(e,t){if(1&e){const e=b.Rb();b.Qb(0,"div",46),b.Xb("click",(function(){b.pc(e);const n=t.index;return b.bc(3).scrollToQuestion(n+1)})),b.Ac(1),b.Pb()}if(2&e){const e=t.$implicit,n=t.index;b.hc("ngClass",b.lc(2,k,(null==e?null:e.rightAnswerId)===(null==e?null:e.selectedAnswerId),(null==e?null:e.rightAnswerId)!==(null==e?null:e.selectedAnswerId)&&null!==(null==e?null:e.selectedAnswerId),null===(null==e?null:e.selectedAnswerId))),b.zb(1),b.Cc(" ",n+1," ")}}function N(e,t){if(1&e){const e=b.Rb();b.Qb(0,"div",46),b.Xb("click",(function(){b.pc(e);const n=t.index;return b.bc(3).scrollToQuestion(n+1)})),b.Ac(1),b.Pb()}if(2&e){const e=t.$implicit,n=t.index;b.hc("ngClass",b.lc(2,k,(null==e?null:e.rightAnswerId)===(null==e?null:e.selectedAnswerId),(null==e?null:e.rightAnswerId)!==(null==e?null:e.selectedAnswerId)&&null!==(null==e?null:e.selectedAnswerId),null===(null==e?null:e.selectedAnswerId))),b.zb(1),b.Cc(" ",n+1," ")}}function S(e,t){if(1&e&&b.Mb(0,"app-question",48),2&e){const e=b.bc(),t=e.index;b.hc("question",e.$implicit)("questionNumber",t+1)("isResults",!0)}}function R(e,t){if(1&e&&(b.Qb(0,"div"),b.yc(1,S,1,3,"app-question",47),b.Pb()),2&e){const e=t.$implicit;b.zb(1),b.hc("ngIf",e.selectedAnswerId)}}function F(e,t){if(1&e){const e=b.Rb();b.Qb(0,"div"),b.Qb(1,"h2",22),b.Ac(2),b.Pb(),b.Qb(3,"p",23),b.Ac(4),b.Pb(),b.Qb(5,"h1",22),b.Ac(6),b.Pb(),b.Qb(7,"div",24),b.Mb(8,"img",25),b.Mb(9,"div",26),b.Pb(),b.Qb(10,"div",27),b.Qb(11,"div",28),b.Qb(12,"div",29),b.Qb(13,"div",30),b.Ac(14," \u0412\u0430\u0448 \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441 "),b.Pb(),b.Pb(),b.Qb(15,"div",31),b.Qb(16,"div",32),b.Qb(17,"div",33),b.Ac(18,"\u0412\u0430\u0448 \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441"),b.Pb(),b.Qb(19,"div",34),b.yc(20,I,2,6,"div",35),b.Pb(),b.Qb(21,"div",36),b.Qb(22,"div",37),b.Mb(23,"div",38),b.Ac(24),b.Pb(),b.Qb(25,"div",39),b.Mb(26,"div",40),b.Ac(27),b.Pb(),b.Qb(28,"div",41),b.Mb(29,"div",42),b.Ac(30),b.Pb(),b.Pb(),b.Pb(),b.Pb(),b.Pb(),b.Qb(31,"div",43),b.Qb(32,"div",33),b.Ac(33,"\u0412\u0430\u0448 \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441"),b.Pb(),b.Qb(34,"div",34),b.yc(35,N,2,6,"div",35),b.Pb(),b.Qb(36,"div",36),b.Qb(37,"div",37),b.Mb(38,"div",38),b.Ac(39),b.Pb(),b.Qb(40,"div",39),b.Mb(41,"div",40),b.Ac(42),b.Pb(),b.Qb(43,"div",41),b.Mb(44,"div",42),b.Ac(45),b.Pb(),b.Pb(),b.Pb(),b.Qb(46,"div",44),b.yc(47,R,2,1,"div",11),b.Pb(),b.Pb(),b.Qb(48,"div",45),b.Qb(49,"button",21),b.Xb("click",(function(){return b.pc(e),b.bc(2).refreshQuiz()})),b.Ac(50,"\u041f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0435\u0449\u0435 \u0440\u0430\u0437"),b.Pb(),b.Pb(),b.Pb()}if(2&e){const e=b.bc(2);b.zb(2),b.Bc(e.finishText),b.zb(2),b.Dc(" \u0412\u044b \u043e\u0442\u0432\u0435\u0442\u0438\u043b\u0438 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u043d\u0430 ",e.numberOfRightAnswers," \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432 \u0438\u0437 ",e.questions.length," "),b.zb(2),b.Cc("",e.numberOfRightAnswers/e.questions.length*100," %"),b.zb(2),b.vc("left","calc("+e.numberOfRightAnswers/e.questions.length*100+"% - 18px)"),b.hc("src","assets/images/compact-car.png",b.rc),b.zb(1),b.vc("width",e.numberOfRightAnswers/e.questions.length*100+"%"),b.zb(11),b.hc("ngForOf",e.questions),b.zb(4),b.Cc(" ",e.numberOfRightAnswers," \u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e "),b.zb(3),b.Cc(" ",e.numberOfWrongAnswers," \u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e "),b.zb(3),b.Cc(" ",e.numberOfSkippedAnswers," \u041f\u0440\u043e\u043f\u0443\u0449\u0435\u043d\u043e "),b.zb(5),b.hc("ngForOf",e.questions),b.zb(4),b.Cc(" ",e.numberOfRightAnswers," \u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e "),b.zb(3),b.Cc(" ",e.numberOfWrongAnswers," \u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e "),b.zb(3),b.Cc(" ",e.numberOfSkippedAnswers," \u041f\u0440\u043e\u043f\u0443\u0449\u0435\u043d\u043e "),b.zb(2),b.hc("ngForOf",e.questions)}}function j(e,t){if(1&e&&(b.Qb(0,"div",4),b.yc(1,C,1,1,"app-before-start",5),b.yc(2,y,14,4,"div",6),b.yc(3,F,51,18,"div",2),b.Pb()),2&e){const e=b.bc();b.zb(1),b.hc("ngIf",!e.isStarted),b.zb(1),b.hc("ngIf",e.isStarted&&!e.isFinished),b.zb(1),b.hc("ngIf",e.isFinished)}}const T=[{path:"",component:(()=>{class e{constructor(e,t,n,i,s,r,o){this.quizService=e,this.dataValueService=t,this.authService=n,this.router=i,this.storageService=s,this.renderer=r,this.el=o,this.quizCategory={category_data_value_id:"8e34bd6e-2305-11ec-a9fa-3cecef02c254"},this.currentQuestionNumber=1,this.numberOfRightAnswers=0,this.numberOfWrongAnswers=0,this.numberOfSkippedAnswers=0,this.timer="45:00",this.questionNumbers=[],this.answeredQuestions=[],this.quizSeconds=0}ngOnInit(){this.storageService.get("selectedPriceId")?this.router.navigate([u.a.student,u.a.paying]):this.authService.getLocalIsStudentPaid().pipe(Object(o.a)()).subscribe(e=>{null===e?this.authService.refreshToken().pipe(Object(o.a)()).subscribe(e=>{this.getCategories(),this.authService.setLocalIsStudentPaid(e),this.isStudentPaid=e}):(this.isStudentPaid=e,this.getCategories())})}ngOnDestroy(){clearInterval(this.interval)}startQuiz(e){this.quizCategory.category_data_value_id=e,this.isStarted=!0,this.isFinished=!1,this.questions=[],this.questionNumbers=[],this.answeredQuestions=[],this.currentQuestionNumber=1,this.getQuestions()}finishQuiz(){const e={used_time:this.quizSeconds,questionnaireQuestions:this.answeredQuestions};console.log(this.questions),this.numberOfSkippedAnswers=this.questions.filter(e=>!e.selectedAnswerId).length,this.numberOfWrongAnswers=this.questions.filter(e=>null!==e.selectedAnswerId&&null!==e.rightAnswerId&&e.selectedAnswerId!==e.rightAnswerId).length,console.log("Correct",this.numberOfRightAnswers,"WrongAnswer",this.numberOfWrongAnswers,"Skiiped",this.numberOfSkippedAnswers),this.isFinished=!0,clearInterval(this.interval),this.finishText=this.numberOfRightAnswers>35?"\u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u044e! \u0432\u044b \u0441\u0434\u0430\u043b\u0438 \u0442\u0435\u0441\u0442!":"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u0432\u044b \u043d\u0435 \u0441\u0434\u0430\u043b\u0438 \u0442\u0435\u0441\u0442!",this.quizService.sendQuizResult(this.quizId,e,{include:["questionnaireQuestions.question.questionAnswers"]}).pipe(Object(o.a)()).subscribe(e=>{})}selectAnswer(e,t){this.questions[t].selectedAnswerId=e.answerId,this.questionNumbers[t].isRightAnswer=this.questions[t].rightAnswerId===e.answerId,this.numberOfRightAnswers=this.questionNumbers.filter(e=>e.isRightAnswer).length,this.allAnswered=!this.questionNumbers.find(e=>null===e.isRightAnswer),this.answeredQuestions.push({id:e.questionId,question_answer_id:e.answerId}),this.currentQuestionNumber<this.questions.length&&(this.currentQuestionNumber=this.currentQuestionNumber+1)}selectQuestion(e){this.currentQuestionNumber=e}refreshQuiz(){this.isStarted=!1,this.isFinished=!1,this.timer="45:00"}changeQuestion(e){e&&this.currentQuestionNumber<this.questions.length-1?this.currentQuestionNumber++:!e&&this.currentQuestionNumber>0&&this.currentQuestionNumber--}getQuestions(){this.quizService.startQuiz(this.quizCategory,{include:["questionnaireQuestions.question.questionAnswers","questionnaireQuestions.question.image"]}).pipe(Object(o.a)()).subscribe(e=>{e&&(this.quizId=e.id,this.questions=e.questionnaireQuestions.data.map(e=>{var t,n,i,s,r,o,c,u,b,l,a,d;return{questionId:null==e?void 0:e.id,imageUrl:(null===(s=null===(i=null===(n=null===(t=null==e?void 0:e.question)||void 0===t?void 0:t.data)||void 0===n?void 0:n.image)||void 0===i?void 0:i.data)||void 0===s?void 0:s.url)||null,content:(null===(o=null===(r=null==e?void 0:e.question)||void 0===r?void 0:r.data)||void 0===o?void 0:o.content)||null,explanation:(null===(u=null===(c=null==e?void 0:e.question)||void 0===c?void 0:c.data)||void 0===u?void 0:u.explanation)||null,answers:(null===(l=null===(b=null==e?void 0:e.question)||void 0===b?void 0:b.data)||void 0===l?void 0:l.questionAnswers.data)||null,selectedAnswerId:null,rightAnswerId:null===(d=null===(a=null==e?void 0:e.question)||void 0===a?void 0:a.data)||void 0===d?void 0:d.questionAnswers.data.find(e=>e.is_true).id}}),this.questions.length&&(this.quizTimer(),this.getQuestionsNumbers()))})}getCategories(){this.dataValueService.getDataValues({include:["dataValues"]}).pipe(Object(c.a)(e=>e.data[0].dataValues.data),Object(o.a)()).subscribe(e=>{this.categories=e})}getQuestionsNumbers(){var e;for(let t=0;t<this.questions.length;t++)null===(e=this.questionNumbers)||void 0===e||e.push({number:t+1,isRightAnswer:null})}quizTimer(){let e=44,t=60;const n=e=>1===(""+e).length?"0"+e:""+e;this.interval=setInterval(()=>{this.quizSeconds++,t--,-1===t&&(e--,t=59),0===e&&0===t&&(clearInterval(this.interval),this.finishQuiz()),this.timer=`${n(e)}:${n(t)}`},1e3)}scrollToQuestion(e){console.log("SCROLL TO QUESTION",e);const t=this.el.nativeElement.querySelector("#question-"+e);t&&this.renderer.setProperty(document.documentElement,"scrollTop",t.offsetTop)}}return e.\u0275fac=function(t){return new(t||e)(b.Lb(g),b.Lb(h.a),b.Lb(p.a),b.Lb(r.c),b.Lb(f.a),b.Lb(b.E),b.Lb(b.l))},e.\u0275cmp=b.Fb({type:e,selectors:[["app-quiz"]],decls:5,vars:2,consts:[[1,"minus-header-footer-height"],[1,"container","py-50"],[4,"ngIf"],["class","body",4,"ngIf"],[1,"body"],[3,"categories","startQuiz",4,"ngIf"],["class","start-quiz",4,"ngIf"],[3,"categories","startQuiz"],[1,"start-quiz"],[1,"timer"],[3,"questionNumbers","currentNumber","changeNumber",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"actions"],[3,"click"],[1,"bx","bx-left-arrow-alt"],[1,"bx","bx-right-arrow-alt"],["class","text-center mt-3",4,"ngIf"],[3,"questionNumbers","currentNumber","changeNumber"],[3,"question","questionNumber","selectedAnswer",4,"ngIf"],[3,"question","questionNumber","selectedAnswer"],[1,"text-center","mt-3"],[1,"primary",3,"click"],[1,"text-center"],[1,"text-center","mb-3"],[1,"progress","drivertt-progress","car-progress","mb-5"],["alt","Car under progress",1,"car-image",3,"src"],[1,"progress-bar"],[1,"quiz-result","d-md-flex"],[1,"hoverable-sticky-slide","d-md-none"],[1,"toggle-sticky-btn"],[1,"help-text"],[1,"help-content"],[1,"progress-box","p-1"],[1,"mb-2","fs-6","fw-bold"],[1,"boxes-container","mb-3"],["class","q-box",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"legends"],[1,"legend","me-3"],[1,"dot","correct"],[1,"legend","ms-1"],[1,"dot","incorrect"],[1,"legend"],[1,"dot"],[1,"progress-box","p-3","order-md-2","sticky-md-top","mb-4","mx-auto","d-none","d-md-block"],[1,"questions-container","order-md-1"],[1,"text-center","py-5"],[1,"q-box",3,"ngClass","click"],[3,"question","questionNumber","isResults",4,"ngIf"],[3,"question","questionNumber","isResults"]],template:function(e,t){1&e&&(b.Qb(0,"div",0),b.Qb(1,"div",1),b.yc(2,q,1,0,"app-no-paid-content",2),b.yc(3,j,4,3,"div",3),b.Pb(),b.Pb(),b.Mb(4,"app-footer")),2&e&&(b.zb(2),b.hc("ngIf",!t.isStudentPaid),b.zb(1),b.hc("ngIf",t.isStudentPaid))},directives:[i.l,m.a,v.a,P,i.k,Q,w.a,i.j],styles:[".timer[_ngcontent-%COMP%]{text-align:center;font-size:25px;margin-bottom:20px}@media screen and (max-width:768px){app-footer[_ngcontent-%COMP%]{display:none}}.actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:none;display:flex;align-items:center;font-size:16px;border:none;border-bottom:1px solid grey;padding:10px}.drivertt-progress[_ngcontent-%COMP%]{background-color:#f08581!important;border-radius:20px}.drivertt-progress[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{background-color:#6ead76!important;border-radius:20px!important}.car-progress[_ngcontent-%COMP%]{display:flex;position:relative;overflow:visible}.car-progress[_ngcontent-%COMP%]   .car-image[_ngcontent-%COMP%]{width:42px;height:42px;position:absolute;top:50%;left:-25px;transform:translateY(-50%)}.quiz-result[_ngcontent-%COMP%]{gap:10px}.progress-box[_ngcontent-%COMP%]{width:280px;height:-moz-fit-content;height:fit-content;box-shadow:0 1px 10px 0 #ccc;border-radius:10px;flex-shrink:0}.progress-box[_ngcontent-%COMP%]   .boxes-container[_ngcontent-%COMP%]{display:flex;gap:6px;flex-wrap:wrap}.progress-box[_ngcontent-%COMP%]   .boxes-container[_ngcontent-%COMP%]   .q-box[_ngcontent-%COMP%]{display:flex;width:30px;height:30px;background:#d6d6d6;align-items:center;justify-content:center;border-radius:4px;flex-shrink:0;cursor:pointer}.progress-box[_ngcontent-%COMP%]   .boxes-container[_ngcontent-%COMP%]   .q-box.correct[_ngcontent-%COMP%]{background-color:#6ead76!important}.progress-box[_ngcontent-%COMP%]   .boxes-container[_ngcontent-%COMP%]   .q-box.incorrect[_ngcontent-%COMP%]{background-color:#f08581!important}.progress-box[_ngcontent-%COMP%]   .legends[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.progress-box[_ngcontent-%COMP%]   .legends[_ngcontent-%COMP%]   .legend[_ngcontent-%COMP%]{display:flex;align-items:center}.progress-box[_ngcontent-%COMP%]   .legends[_ngcontent-%COMP%]   .legend[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{width:10px;height:10px;border-radius:50%;margin-right:.25rem;background:#d6d6d6}.progress-box[_ngcontent-%COMP%]   .legends[_ngcontent-%COMP%]   .legend[_ngcontent-%COMP%]   .dot.correct[_ngcontent-%COMP%]{background-color:#6ead76!important}.progress-box[_ngcontent-%COMP%]   .legends[_ngcontent-%COMP%]   .legend[_ngcontent-%COMP%]   .dot.incorrect[_ngcontent-%COMP%]{background-color:#f08581!important}.hoverable-sticky-slide[_ngcontent-%COMP%]{position:fixed;background:#fff;box-shadow:0 1px 10px 0 #ccc;width:280px;right:-280px;top:200px;height:max-content;transition:right .4s ease-in-out;-o-transition:right .4s ease-in-out;-ms-transition:right .4s ease-in-out;-moz-transition:right .4s ease-in-out;-webkit-transition:right .4s ease-in-out;z-index:1}.hoverable-sticky-slide[_ngcontent-%COMP%]:hover{right:0}.hoverable-sticky-slide[_ngcontent-%COMP%]   .toggle-sticky-btn[_ngcontent-%COMP%]{position:absolute;right:280px;padding:15px;background:#f08581;color:#000;min-height:85px;width:35px;height:145px}.hoverable-sticky-slide[_ngcontent-%COMP%]   .toggle-sticky-btn[_ngcontent-%COMP%]   .help-text[_ngcontent-%COMP%]{transform:rotate(90deg);font-size:1rem;white-space:nowrap;font-weight:700}.hoverable-sticky-slide[_ngcontent-%COMP%]   .help-content[_ngcontent-%COMP%]{padding:10px;font-size:14px}.hoverable-sticky-slide[_ngcontent-%COMP%]   .help-content[_ngcontent-%COMP%]   .progress-box[_ngcontent-%COMP%]{box-shadow:none!important}.hoverable-sticky-slide[_ngcontent-%COMP%]   .help-content[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]{text-align:center;margin-top:2px;line-height:1.2}"]}),e})()}];let X=(()=>{class e{}return e.\u0275mod=b.Jb({type:e}),e.\u0275inj=b.Ib({factory:function(t){return new(t||e)},imports:[[r.g.forChild(T)],r.g]}),e})(),L=(()=>{class e{}return e.\u0275mod=b.Jb({type:e}),e.\u0275inj=b.Ib({factory:function(t){return new(t||e)},imports:[[i.c,X,s.a]]}),e})()}}]);