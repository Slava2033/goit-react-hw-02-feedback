(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),o=n.n(c),s=n(5),i=n.n(s),r=(n(16),n(6)),d=n(7),b=n(8),l=n(10),u=n(9),j=function(e){var t=e.title,n=e.children;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:t}),n]})},h=n(2),p=n.n(h);function f(e){var t=e.message;return Object(a.jsx)("p",{children:t})}var O=function(e){var t=e.good,n=e.neutral,c=e.bad,o=e.total,s=e.positiveFeedbackPercentage;return Object(a.jsx)(a.Fragment,{children:o?Object(a.jsxs)("ul",{className:p.a.box,children:[Object(a.jsxs)("li",{className:p.a.options,children:[" Good:",t," "]}),Object(a.jsxs)("li",{className:p.a.options,children:[" Neutral:",n," "]}),Object(a.jsxs)("li",{className:p.a.options,children:[" Bad:",c," "]}),Object(a.jsxs)("li",{className:p.a.options,children:[" Total:",o," "]}),Object(a.jsxs)("li",{className:p.a.options,children:["Positive feedback: ",s,"%"]})]}):Object(a.jsx)(f,{message:"No feedback given"})})},g=n(4),v=n.n(g),x=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(a.jsx)("div",{className:v.a.options,children:t.map((function(e){return Object(a.jsx)("button",{className:v.a.button,type:"button","data-feedback":e,onClick:n,children:e},e)}))})},k=["good","bad","neutral"],F=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(){var t=e.state,n=t.good,a=t.neutral;return n+t.bad+a},e.countPositiveFeedbackPercentage=function(){var t=e.countTotalFeedback(),n=e.state.good;return t?Math.round(n/t*100):0},e.handleFeedback=function(t){var n=t.target.dataset.feedback;e.setState((function(e){return Object(r.a)({},n,e[n]+1)}))},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad,o=this.countTotalFeedback(),s=this.countPositiveFeedbackPercentage();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(j,{title:"Please leave feedback",children:Object(a.jsx)(x,{options:k,onLeaveFeedback:this.handleFeedback})}),Object(a.jsx)(j,{title:"Statistics",children:Object(a.jsx)(O,{good:t,neutral:n,bad:c,total:o,positiveFeedbackPercentage:s})})]})}}]),n}(c.Component),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),o(e),s(e)}))};i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(F,{})}),document.getElementById("root")),m()},2:function(e,t,n){e.exports={box:"statistics_box__EVX7_",options:"statistics_options__2JPXw"}},4:function(e,t,n){e.exports={options:"feedbackOptions_options__1I9pO",button:"feedbackOptions_button__2Lb-3"}}},[[17,1,2]]]);
//# sourceMappingURL=main.90fd115d.chunk.js.map