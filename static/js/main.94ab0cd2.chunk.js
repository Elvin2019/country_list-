(this["webpackJsonpcountry_list-"]=this["webpackJsonpcountry_list-"]||[]).push([[0],{33:function(e,t,n){},37:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(25),c=n.n(i),r=(n(33),n(10)),s=n(11),o=n(28),l=n(27),u=n.p+"static/media/Image_not_available.340253f9.png",h=n(0),d=function(e){e.name;var t=e.imageSize,n=e.shortName,a=t.split("x");return Object(h.jsx)("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw1 shadow-5",style:{width:+a[0]+40,height:+a[1]+40},children:Object(h.jsx)("img",{alt:"countries",src:"https://flagcdn.com/".concat(t,"/").concat(n.toLowerCase(),".png"),onError:function(e){e.currentTarget.onerror=null,e.currentTarget.src=u}})})},g=function(e){var t=e.countries,n=e.imageSize;return Object(h.jsx)("div",{children:t.map((function(e,a){return Object(h.jsx)(d,{imageSize:n,name:t[a].country_name,shortName:t[a].country_short_name},a)}))})},j=function(e){e.searchfield;var t=e.searchChange;return Object(h.jsx)("div",{className:"pa2",children:Object(h.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search countries",onChange:t})})},m=function(e){return Object(h.jsx)("div",{style:{overflow:"scroll",border:"5px solid black",height:window.innerHeight-200},children:e.children})},b=n(2),f=n(3),p=n(60),v=["list","defaultValue","onChange"],x=function(e){var t=e.list,n=void 0===t?[]:t,a=e.defaultValue,i=e.onChange,c=Object(f.a)(e,v);return Object(h.jsx)(p.a.Select,Object(b.a)(Object(b.a)({"aria-label":"Default select example",defaultValue:a,onChange:i},c),{},{children:n.map((function(e){return Object(h.jsxs)("option",{value:e.value,children:[" ",e.title]},e.value)}))}))},O=(n(37),n(15)),w=n.n(O),C="apiUneversalAuthToken",y=function(){function e(){Object(r.a)(this,e)}return Object(s.a)(e,null,[{key:"getAccessToken",value:function(){return w.a.get("https://www.universal-tutorial.com/api/getaccesstoken",{headers:{Accept:"application/json","api-token":"YH3VyqLiNTTQAX17wgRw5hOb_9YyqMM6jqcOnmWXc2ypIIOx6uhAqCK5QiW-RMGjU-s","user-email":"elvinahmadov0@gmail.com"}}).then((function(e){return e.data}))}},{key:"getCountries",value:function(){return w.a.get("https://www.universal-tutorial.com/api/countries/",{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem(C)),Accept:"application/json"}}).then((function(e){return e.data}))}}]),e}(),S=(n(56),"32x24"),k=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.onSizeChange=function(t){e.setState({imageSize:t.target.value})},e.state={countries:[],searchfield:"",imageSize:S},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;y.getAccessToken().then((function(e){sessionStorage.setItem(C,e.auth_token)})).then((function(){return y.getCountries().then((function(t){e.setState({countries:t})}))}))}},{key:"render",value:function(){var e=this.state,t=e.countries,n=e.searchfield,a=t.filter((function(e){return e.country_name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(h.jsxs)("div",{className:"tc",children:[Object(h.jsxs)("div",{className:"sticky",children:[Object(h.jsx)("h1",{className:"f1",children:"Countries"}),Object(h.jsxs)("div",{className:"wrapper ",children:[Object(h.jsx)(x,{list:[{value:"16x12",title:"16x12"},{value:"32x24",title:"32x24"},{value:"64x48",title:"64x48"},{value:"128x96",title:"128x96"},{value:"256x192",title:"256x192"}],defaultValue:S,onChange:this.onSizeChange,style:{width:"150px",textAlign:"center",justifyContent:"center"},className:" b--green bg-lightest-blue"}),Object(h.jsx)(j,{searchChange:this.onSearchChange})]})]}),Object(h.jsx)("div",{className:"content",children:Object(h.jsx)(m,{children:Object(h.jsx)(g,{countries:a,imageSize:this.state.imageSize})})})]}):Object(h.jsx)("h1",{children:"Loading"})}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(57);c.a.render(Object(h.jsx)(k,{}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.94ab0cd2.chunk.js.map