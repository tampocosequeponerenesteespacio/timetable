(this["webpackJsonptimetable-v2"]=this["webpackJsonptimetable-v2"]||[]).push([[0],{28:function(n,A,C){},29:function(n,A,C){"use strict";C.r(A);var H=C(14),e=C.n(H),s=C(17),B=C(0),t=function(n,A){var C=n.split(":"),H=A.split(":");return parseInt(3600*C[0]+60*C[1])<=parseInt(3600*H[0]+60*H[1])},c=function(n){var A=new Date(n).toLocaleTimeString();return t(A,"8:00")?0:t(A,"8:45")?1:t(A,"9:30")?2:t(A,"10:15")?3:t(A,"10:40")?4:t(A,"11:25")?5:t(A,"12:10")?6:t(A,"12:55")?7:t(A,"13:40")?8:t(A,"14:25")?9:t(A,"15:15")?10:t(A,"15:55")?11:"H"},m=function(n){var A=new Date(n).toLocaleTimeString();return t(A,"8:00")?1:t(A,"8:45")?2:t(A,"9:30")?3:t(A,"10:15")?4:t(A,"10:40")?"B":t(A,"11:25")?5:t(A,"12:10")?6:t(A,"12:55")?7:t(A,"13:40")?8:t(A,"14:25")?9:t(A,"15:15")?10:t(A,"15:55")?11:"H"},i=C(1),I=function(n){var A=n.date,C=n.teacher,H=A.getDay(),e=c(A),s=C.slice(11*(H-1)+1,11*H+1);return s.splice(4,0,"-"),s.map((function(n,A){var C=n.replace(/"/g,"");return A===e?Object(i.jsx)("td",{className:"highlight",children:C},n+A):Object(i.jsx)("td",{children:C},n+A)}))},E=function(n){var A=n.date,C=c(A);return["",1,2,3,4,"B",5,6,7,8,9,10,11].map((function(n,A){return C===A-1?Object(i.jsx)("td",{style:{fontWeight:"bold"},className:"highlight",children:n},Math.random()):Object(i.jsx)("td",{style:{fontWeight:"bold"},children:n},Math.random())}))},F=function(n){var A=n.date,C=n.teachers;return Object(i.jsx)("table",{children:Object(i.jsxs)("tbody",{children:[Object(i.jsx)("tr",{children:Object(i.jsx)(E,{date:A})},"header"),C.map((function(n){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:n[0].replace(/"/g,"")},n[0]+"td"),Object(i.jsx)(I,{teacher:n,date:A})]},n[0]+"tr")}))]})})},O='" LPI\n21";"\n\n";"\n\n";"\n\n";"4m\nBi\xf3logos\nC17";"1F\nCHEM\nG23";;;;"\n\n";"\n\n";"\n\n";"\n\n";"4m\nQu\xedmicos\nC17";"4m\nQu\xedmicos\nC17";;"1F\nCHEM\nG23";"1F\nCHEM\nG23";"4m\nBi\xf3logos\nC17";"\n\n";"\n\n";"\n\n";"\n\n";"\n\n";;"7C\nCHEM\nA21";"7C\nCHEM\nA21";;"\n\n";"4m\nBi\xf3logos\nC17";"4m\nBi\xf3logos\nC17";"\n\n";"\n\n";"\n\n";"\n\n";"7D\nCHEM\nA22";"7D\nCHEM\nA22";"\n\n";"4m\nQu\xedmicos\nC17";"4m\nQu\xedmicos\nC17";"\n\n";;"\n\n";"4m\nF\xedsicos 1\nC17";"4m\nF\xedsicos 1\nC17";"\n\n";"\n\n";"7F\nCHEM\nA24";"7F\nCHEM\nA24";"4m\nF\xedsicos 1\nC17";"4m\nF\xedsicos 1\nC17";;;"\n\n";"\n\n";"\n\n";\n" EVA\n21";"1E\nTUT\nH22";"1E\nCHEM\nH22";"1E\nCHEM\nH22";"\n\n";;;"8E\nCHEM\nA13";"\n\n";"\n\n";"\n\n";"\n\n";"1E\nTUT\nH22";"7E\nCHEM\nA23";"7E\nCHEM\nA23";"1E\nCHEM\nH22";"8A\nCHEM\nA17";"7B\nCHEM\nA26";"7B\nCHEM\nA26";;"1E\nTUT\nH22";"\n\n";"\n\n";"1E\nTUT\nH22";"8F\nCHEM\nA14";"8F\nCHEM\nA14";;"8E\nCHEM\nA13";"8E\nCHEM\nA13";;;"\n\n";"\n\n";"\n\n";"1E\nTUT\nH22";"8A\nCHEM\nA17";"8A\nCHEM\nA17";"\n\n";;;;;"\n\n";"1C\nCHEM\nH21";"1C\nCHEM\nH21";"1E\nTUT\nH22";"1C\nCHEM\nH21";;"8F\nCHEM\nA14";"\n\n";"\n\n";"\n\n";"\n\n";"7A\nCHEM\nA25";"7A\nCHEM\nA25";"\n\n";\n" RAG\n26";"1B\nTUT\nG21";"3m A2\n1CHEM\nF21";"3m A2\n1CHEM\nF21";"\n\n";C;;"8D\nCHEM\nA12";"\n\n";"1B\nCHEM\nG21";"\n\n";"\n\n";"1B\nTUT\nG21";"3m A2\n1CHEM\nF21";"3m A2\n1CHEM\nF21";"2m A2\n1CHEM\nF21";"2m A2\n1CHEM\nF21";"1A\nCHEM\nG24";"1A\nCHEM\nG24";;"1B\nTUT\nG21";"\n\n";"\n\n";"1B\nTUT\nG21";"8D\nCHEM\nA12";"8D\nCHEM\nA12";"3m A2\n1CHEM\nF21";"2m A2\n1CHEM\nF21";"2m A2\n1CHEM\nF21";;;"\n\n";;"\n\n";"1B\nTUT\nG21";"8B\nCHEM\nA16";"8B\nCHEM\nA16";"\n\n";"2m A2\n1CHEM\nF21";"2m A2\n1CHEM\nF21";"3m A2\n1CHEM\nF21";"3m A2\n1CHEM\nF21";"\n\n";"1B\nCHEM\nG21";"1B\nCHEM\nG21";"1B\nTUT\nG21";"8B\nCHEM\nA16";;"2m A2\n1CHEM\nF21";C;"\n\n";"1A\nCHEM\nG24";"\n\n";"\n\n";"\n\n";"\n\n";\n" XMU\n26";"1D\nTUT\nG22";;"\n\n";;"3F\nSCI\nC13";"3F\nSCI\nC13";"2ABC set2\nSCI\nG12";"2ABC set2\nSCI\nG12";"\n\n";"\n\n";"\n\n";"1D\nTUT\nG22";;;;"1D\nCHEM\nG22";"1D\nCHEM\nG22";C;;"1D\nTUT\nG22";"3C\nSCI\nH12";"3C\nSCI\nH12";"1D\nTUT\nG22";"2DEF\nSCI\nH11";"2DEF\nSCI\nH11";"8C\nCHEM\nA11";;;;;"\n\n";"\n\n";"\n\n";"1D\nTUT\nG22";;"3C\nSCI\nA15";"3C\nSCI\nA15";;C;"2ABC\nSCI\nG12";"2ABC\nSCI\nG12";"\n\n";"4m\nF\xedsicos 2\nF21";"4m\nF\xedsicos 2\nF21";"1D\nTUT\nG22";"1D\nCHEM\nG22";"8C\nCHEM\nA11";"8C\nCHEM\nA11";"4m\nF\xedsicos 2\nC12";"4m\nF\xedsicos 2\nC12";"3F\nSCI\nC13";"3F\nSCI\nH12";"\n\n";"2DEF\nSCI\nH11";"2DEF\nSCI\nH11";\n" CCA\n28";"1F\nTUT\nG23";"3m A2\n1BIO\nF12";"3m A2\n1BIO\nF12";"4m\nF\xedsicos 2\nF12";;;;;"\n\n";"1C\nBIO\nH21";"1C\nBIO\nH21";"1F\nTUT\nG23";"3m A2\n1BIO\nF12";"3m A2\n1BIO\nF12";"2m A2\n1BIO\nF11";"2m A2\n1BIO\nF11";;"4m\nF\xedsicos 2\nF12";;"1F\nTUT\nG23";"\n\n";"\n\n";"1F\nTUT\nG23";;;"3m A2\n1BIO\nF12";"2m A2\n1BIO\nF11";"2m A2\n1BIO\nF11";"4m\nF\xedsicos 2\nF12";"4m\nF\xedsicos 2\nF12";;"1F\nBIO\nG23";"1F\nBIO\nG23";"1F\nTUT\nG23";"1C\nBIO\nH21";;"\n\n";"2m A2\n1BIO\nF11";"2m A2\n1BIO\nF11";"3m A2\n1BIO\nF12";"3m A2\n1BIO\nF12";"\n\n";"4m\nQu\xedmicos\nF12";"4m\nQu\xedmicos\nF12";"1F\nTUT\nG23";"1F\nBIO\nG23";;"2m A2\n1BIO\nF11";"4m\nQu\xedmicos\nF12";"4m\nQu\xedmicos\nF12";;;"\n\n";"\n\n";"\n\n";\n" CKR\n26";"7B\nTUT\nA26";;"8C\nBIO\nA11";"8A\nBIO\nA17";"1E\nBIO\nH22";;;;"\n\n";"2m setA\n2BIO\nF11";"2m setA\n2BIO\nF11";"7B\nTUT\nA26";;;;"1B\nBIO\nG21";"1B\nBIO\nG21";"\n\n";;"7B\nTUT\nA26";"8C\nBIO\nA11";"8C\nBIO\nA11";"7B\nTUT\nA26";"8A\nBIO\nA17";"8A\nBIO\nA17";;"8B\nBIO\nA16";"8B\nBIO\nA16";;;"\n\n";"2m A2\n2BIO\nF11";"2m A2\n2BIO\nF11";"7B\nTUT\nA26";"2m A2\n2BIO\nF11";"7B\nBIO\nA26";"7B\nBIO\nA26";"8B\nBIO\nA16";"7F\nBIO\nA24";"7F\nBIO\nA24";;"\n\n";"1E\nBIO\nH22";"1E\nBIO\nH22";"7B\nTUT\nA26";;;"\n\n";"2m A2\n2BIO\nF11";"2m A2\n2BIO\nF11";"\n\n";;"1B\nBIO\nG21";"\n\n";"\n\n";\n" FGR\n27";"\n\n";"1D\nBIO\nG22";"1D\nBIO\nG22";"4m\nF\xedsicos 1\nF11";"7E\nBIO\nA23";"7E\nBIO\nA23";"3m A2\n2BIO\nF11";"3m A2\n2BIO\nF11";"\n\n";"\n\n";"1A\nBIO\nG24";"\n\n";;"8E\nBIO\nA13";"8E\nBIO\nA13";;"3m A2\n2BIO\nF11";"4m\nF\xedsicos 1\nF11";;"\n\n";"\n\n";"\n\n";"\n\n";"\n\n";"1A \nBIO\nG24";"1A\nBIO\nG24";"7A\nBIO\nA25";"7A\nBIO\nA25";"4m\nF\xedsicos 1\nF11";"4m\nF\xedsicos 1\nF11";"\n\n";"\n\n";"1D\nBIO\nG22";"\n\n";;;"\n\n";"8D\nBIO\nA12";"8D\nBIO\nA12";"\n\n";;"\n\n";"3m A2\n2BIO\nF11";"3m A2\n2BIO\nF11";"\n\n";"3m A2\n2BIO\nF11";"3m A2\n2BIO\nF11";"8D\nBIO\nA12";"\n\n";;;"\n\n";"8E\nBIO\nA13";"\n\n";"\n\n";\n" LGR\n27";"7D\nTUT\nA22";;;"8F\nBIO\nA14";"3E\nSCI\nB3";"3E\nSCI\nB3";"2ABC\nSCI\nG14";"2ABC\nSCI\nG14";"\n\n";"7C\nBIO\nA21";"7C\nBIO\nA21";"7D\nTUT\nA22";"4m\nBi\xf3logos\nH23";"4m\nBi\xf3logos\nH23";;;;;;"7D\nTUT\nA22";"3B\nSCI\nB1";"3B\nSCI\nB1";"7D\nTUT\nA22";"2DEF\nSCI\nG11";"2DEF\nSCI\nG11";"\n\n";;"8F\nBIO\nA14";"8F\nBIO\nA14";;"\n\n";"7D\nBIO\nA22";"7D\nBIO\nA22";"7D\nTUT\nA22";;"3B\nSCI\nB1";"3B\nSCI\nB1";"4m\nBi\xf3logos\nH23";"4m\nBi\xf3logos\nH23";"2ABC\nSCI\nG14";"2ABC\nSCI\nG14";"\n\n";"\n\n";"\n\n";"7D\nTUT\nA22";;;"\n\n";;;"3E\nSCI\nB3";"3E\nSCI\nB3";"\n\n";"2DEF set1\nSCI\nG11";"2DEF set1\nSCI\nG11";\n" MAG\n26";"\n\n";"3m A2\n1PHY\nLibr.";"3m A2\n1PHY\nLibr.";"\n\n";;;"\n\n";"\n\n";"\n\n";"2m A2\n2PHY\nH24";"2m A2\n2PHY\nH24";"\n\n";"3m A2\n1PHY\nLibr.";"3m A2\n1PHY\nLibr.";C;"\n\n";"1A\nCHEM\nG24";"1A\nCHEM\nG24";;"\n\n";"7A\nPHY\nA25";"7A\nPHY\nA25";"\n\n";;;"3m A2\n1PHY\nLibr.";"8C\nPHY\nA11";"8C\nPHY\nA11";;;"\n\n";"2m A2\n2PHY\nH24";"2m A2\n2PHY\nH24";"\n\n";"2m A2\n2PHY\nH24";"8C\nPHY\nA11";C;"1A\nPHY\nG24";"1A\nPHY\nG24";"3m A2\n1PHY\nLibr.";"3m A2\n1PHY\nLibr.";"\n\n";"1B\nCHEM\nG21";"1B\nCHEM\nG21";"\n\n";"\n\n";;;"2m A2\n2PHY\nH24";"2m A2\n2PHY\nH24";C;;"1A\nPHY\nG24";"\n\n";"\n\n";\n" MTO\n28";"8B\nTUT\nA16";"1E\nCHEM\nH22";"1E\nCHEM\nH22";;"3D\nSCI\nC22";"3D\nSCI\nC22";C;"\n\n";"\n\n";"1B\nPHY\nG21";"1B\nPHY\nG21";"8B\nTUT\nA16";"4m\nF\xedsicos 2\nC12";"4m\nF\xedsicos 2\nC12";C;"1E\nPHY\nH22";"1E\nPHY\nH22";"\n\n";;"8B\nTUT\nA16";"\n\n";"\n\n";"8B\nTUT\nA16";"7E\nPHY\nA23";"7E\nPHY\nA23";"8B\nPHY\nA16";;;"8E\nPHY\nA13";;"\n\n";"\n\n";"\n\n";"8B\nTUT\nA16";"1B\nPHY\nG21";;"\n\n";"4m\nF\xedsicos 2\nC12";"4m\nF\xedsicos 2\nC12";C;;"\n\n";"4m\nBi\xf3logos\nL22";"4m\nBi\xf3logos\nL22";"8B\nTUT\nA16";"1E\nPHY\nH22";"8B\nPHY\nA16";"8B\nPHY\nA16";"4m\nBi\xf3logos\nL22";"4m\nBi\xf3logos\nL22";"3D\nSCI\nC22";"3D\nSCI\nC22";"\n\n";"8E\nPHY\nA13";"8E\nPHY\nA13";\n" NRE\n27";"\n\n";;;"4m\nQu\xedmicos\nL24";"1D\nPHY\nG22";;"\n\n";C;"\n\n";"\n\n";"\n\n";"\n\n";C;"8D\nPHY\nA12";"8D\nPHY\nA12";"1F\nCHEM\nG23";"1F\nCHEM\nG23";"4m\nQu\xedmicos\nL24";;"\n\n";"3A\nSCI\nB2";"3A\nSCI\nB2";"\n\n";"2DEF\nSCI\nC21";"2DEF\nSCI\nC21";"8A\nPHY\nA17";"7B\nPHY\nA26";"7B\nPHY\nA26";"4m\nQu\xedmicos\nL24";"4m\nQu\xedmicos\nL24";"\n\n";"\n\n";"\n\n";"\n\n";;"3A\nSCI\nB2";"3A\nSCI\nB2";C;"\n\n";"\n\n";;"\n\n";"1D\nPHY\nG22";"1D\nPHY\nG22";"\n\n";"8A\nPHY\nA17";"8A\nPHY\nA17";;;"7D\nPHY\nA22";"7D\nPHY\nA22";;"8D\nPHY\nA12";"2DEF\nSCI\nC21";"2DEF\nSCI\nC21";\n" POR\n25";"7A\nTUT\nA25";"1F\nPHY\nG23";"1F\nPHY\nG23";"\n\n";"7C\nPHY\nA21";"7C\nPHY\nA21";"2ABC\nSCI\nG13";"2ABC\nSCI\nG13";"\n\n";"\n\n";"\n\n";"7A\nTUT\nA25";"4m\nF\xedsicos 1\nL24";"4m\nF\xedsicos 1\nL24";"1C\nPHY\nH21";"1D\nCHEM\nG22";"1D\nCHEM\nG22";"\n\n";;"7A\nTUT\nA25";"\n\n";"\n\n";"7A\nTUT\nA25";;"1C\nPHY\nH21";"1C\nPHY\nH21";"\n\n";;;C;"\n\n";"\n\n";"\n\n";"7A\nTUT\nA25";"8F\nPHY\nA14";;"\n\n";"4m\nF\xedsicos 1\nH23";"4m\nF\xedsicos 1\nH23";"2ABC\nSCI\nG13";"2ABC\nSCI\nG13";"\n\n";"1C\nCHEM\nH21";"1C\nCHEM\nH21";"7A\nTUT\nA25";"\n\n";;;"1F\nPHY\nG23";"7F\nPHY\nA24";"7F\nPHY\nA24";;"8F\nPHY\nA14";"8F\nPHY\nA14";"\n\n";\n\n'.split(";"),o=O.slice(0,56),T=O.slice(56,112),r=O.slice(112,168),l=O.slice(168,224),G=O.slice(224,280),a=O.slice(280,336),M=O.slice(336,392),j=O.slice(392,448),P=O.slice(448,504),Y=O.slice(504,560),b=O.slice(560,616),h=O.slice(616,672),d={SCI:[o,T,r,l,G,a,M,j,P,Y,b,h],PHY:[P,Y,b,h],CHE:[o,T,r,l],BIO:[G,a,M,j]},D=C(8),S=C(2);var u=function(){var n=Object(B.useState)(new Date),A=Object(s.a)(n,2),C=A[0],H=A[1];Object(B.useEffect)((function(){setInterval((function(){H(new Date)}),1e3)}),[]);var e={padding:5};return Object(i.jsxs)("div",{className:"maindiv",children:[Object(i.jsxs)(D.a,{children:[Object(i.jsxs)("div",{style:{marginBottom:"20px"},children:[Object(i.jsx)(D.b,{style:e,to:"/",children:Object(i.jsx)("button",{className:"menuButton sci",children:"SCIENCE"})}),Object(i.jsx)(D.b,{style:e,to:"/phy",children:Object(i.jsx)("button",{className:"menuButton phy",children:"PHYSICS"})}),Object(i.jsx)(D.b,{style:e,to:"/chem",children:Object(i.jsx)("button",{className:"menuButton chem",children:"CHEMISTRY"})}),Object(i.jsx)(D.b,{style:e,to:"/bio",children:Object(i.jsx)("button",{className:"menuButton bio",children:"BIOLOGY"})})]}),Object(i.jsxs)(S.c,{children:[Object(i.jsx)(S.a,{path:"/phy",children:Object(i.jsx)(F,{date:C,teachers:d.PHY})}),Object(i.jsx)(S.a,{path:"/chem",children:Object(i.jsx)(F,{date:C,teachers:d.CHE})}),Object(i.jsx)(S.a,{path:"/bio",children:Object(i.jsx)(F,{date:C,teachers:d.BIO})}),Object(i.jsx)(S.a,{path:"/",children:Object(i.jsx)(F,{date:C,teachers:d.SCI})})]})]}),Object(i.jsxs)("div",{children:[Object(i.jsxs)("h1",{children:["Period: ",m(C)]}),Object(i.jsx)("h1",{children:C.toLocaleTimeString()})]})]})};C(28);e.a.render(Object(i.jsx)(u,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.823b481d.chunk.js.map