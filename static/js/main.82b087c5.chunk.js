(this["webpackJsonpevent-tracker"]=this["webpackJsonpevent-tracker"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),o=n(7),a=n.n(o),i=(n(14),n(9)),l=n(5),d=n(2),s=n(0),j=function(e){var t=e.color,n=e.text,r=e.onClick;return Object(s.jsx)("div",{children:Object(s.jsx)("button",{onClick:r,style:{backgroundColor:t},className:"btn",children:n})})},u=function(e){var t=e.title,n=e.toggleForm,r=e.showForm;return Object(s.jsxs)("header",{className:"header",children:[Object(s.jsx)("h1",{children:t}),Object(s.jsx)(j,{onClick:n,color:r?"red":"green",text:r?"Close":"Add"})]})};u.defaultProps={title:"Event Tracker"};var b=u,m=n(8),h=function(e){var t=e.event,n=e.onDelete,r=e.onToggleReminder;return Object(s.jsxs)("div",{className:"event ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return r(t.id)},children:[Object(s.jsxs)("h3",{children:[t.text,Object(s.jsx)(m.a,{onClick:function(){return n(t.id)},style:{color:"red",cursor:"pointer"}})]}),Object(s.jsx)("p",{children:t.day})]})},O=function(e){var t=e.events,n=e.onDelete,r=e.onToggleReminder;return Object(s.jsx)(s.Fragment,{children:t.map((function(e){return Object(s.jsx)(h,{event:e,onDelete:n,onToggleReminder:r},e.id)}))})},v=function(e){var t=e.onAdd,n=Object(r.useState)(""),c=Object(d.a)(n,2),o=c[0],a=c[1],i=Object(r.useState)(""),l=Object(d.a)(i,2),j=l[0],u=l[1],b=Object(r.useState)(!1),m=Object(d.a)(b,2),h=m[0],O=m[1];return Object(s.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),o?(t({text:o,day:j,reminder:h}),a(""),u(""),O(!1)):alert("Please add an event")},children:[Object(s.jsxs)("div",{className:"form-control",children:[Object(s.jsx)("label",{children:"Event"}),Object(s.jsx)("input",{type:"text",placeholder:"Add Event",value:o,onChange:function(e){return a(e.target.value)}})]}),Object(s.jsxs)("div",{className:"form-control",children:[Object(s.jsx)("label",{children:"Day & Time"}),Object(s.jsx)("input",{type:"text",placeholder:"Add Day & Time",value:j,onChange:function(e){return u(e.target.value)}})]}),Object(s.jsxs)("div",{className:"form-control form-control-check",children:[Object(s.jsx)("label",{children:"Set Reminder"}),Object(s.jsx)("input",{type:"checkbox",checked:h,onChange:function(e){return O(e.currentTarget.checked)}})]}),Object(s.jsx)("input",{className:"btn btn-block",type:"submit",value:"Save Event"})]})};var x=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)([{id:1,text:"Bouldering at Alien Bloc",day:"Nov 5th at 2:30pm",reminder:!0},{id:2,text:"Board Games at The Chanter",day:"Nov 6th at 6:30pm",reminder:!1},{id:3,text:"Drinks at Bennet's",day:"Nov 25th at 8:30pm",reminder:!0}]),a=Object(d.a)(o,2),j=a[0],u=a[1];return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)(b,{toggleForm:function(){return c(!n)},showForm:n}),n&&Object(s.jsx)(v,{onAdd:function(e){var t=Math.floor(1e4*Math.random())+1,n=Object(l.a)({id:t},e);u([].concat(Object(i.a)(j),[n]))}}),j.length>0?Object(s.jsx)(O,{events:j,onDelete:function(e){u(j.filter((function(t){return t.id!==e})))},onToggleReminder:function(e){u(j.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{reminder:!t.reminder}):t})))}}):"No Events Found"]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),o(e),a(e)}))};a.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(x,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.82b087c5.chunk.js.map