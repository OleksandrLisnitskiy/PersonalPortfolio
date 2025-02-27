import{t as U,a as E,S as I,i as q}from"./index.28409b7f.js";import{u as G,s as P,f as K,g as O,h as Q,d as T,j as C,i as V,n as L}from"./scheduler.7a274a43.js";import{w as B,b as H}from"./paths.a6ac6759.js";function ss(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function es(e,n){U(e,1,1,()=>{n.delete(e.key)})}function ns(e,n,a,t,c,i,r,S,m,h,g,v){let d=e.length,u=i.length,f=d;const b={};for(;f--;)b[e[f].key]=f;const y=[],k=new Map,A=new Map,_=[];for(f=u;f--;){const o=v(c,i,f),l=a(o);let p=r.get(l);p?t&&_.push(()=>p.p(o,n)):(p=h(l,o),p.c()),k.set(l,y[f]=p),l in b&&A.set(l,Math.abs(f-b[l]))}const j=new Set,N=new Set;function J(o){E(o,1),o.m(S,g),r.set(o.key,o),g=o.first,u--}for(;d&&u;){const o=y[u-1],l=e[d-1],p=o.key,w=l.key;o===l?(g=o.first,d--,u--):k.has(w)?!r.has(p)||j.has(p)?J(o):N.has(w)?d--:A.get(p)>A.get(w)?(N.add(p),J(o)):(j.add(w),d--):(m(l,r),d--)}for(;d--;){const o=e[d];k.has(o.key)||m(o,r)}for(;u;)J(y[u-1]);return G(_),y}const D="@riadh-adrani-theme",X=e=>{localStorage.setItem(D,JSON.stringify(e))},F=B(!1),x=e=>F.update(n=>{var t;const a=typeof e=="boolean"?e:!n;return X(a),(t=document.querySelector(":root"))==null||t.setAttribute("data-theme",a?"dark":"light"),a}),ts=()=>{const e=localStorage.getItem(D);e?x(JSON.parse(e)):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?x(!0):x(!1)},M=e=>`${H}/logos/${e}`,s=(e,n)=>n?{dark:M(n),light:M(e)}:M(e),as={AWS:s("aws.svg"),Bootstrap:s("bootstrap.svg"),C:s("c.svg"),Cpp:s("cpp.svg"),Celery:s("celery.svg"),Django:s("django.svg"),FastApi:s("fastapi.png"),CampusGigs:s("campusgigs.png"),Flask:s("flask.svg"),Go:s("go.svg"),Empty:s("fastapi.svg"),Saprgram:s("saprgram.png"),XML:s("xml.png"),MarvelFlip:s("marvel_flip.png"),Dashboard:s("dashboard.png"),TopScore:s("dashboard.png"),LogoLAO:s("logolao.png"),Silkronic:s("silkronic.png"),UofA:s("uofa.png"),Garmonia:s("garmonia.png"),Git:s("git.svg"),Kafka:s("kafka.svg"),Neo4j:s("neo4j.svg"),Nginx:s("nginx.svg"),Numpy:s("numpy.svg"),Pandas:s("pandas.svg"),RabbitMQ:s("rabbitmq.svg"),Rust:s("rust.svg","rust-dark.png"),Scrapy:s("scrapy.png"),Selenium:s("selenium.svg"),Docker:s("docker.svg"),Kubernetes:s("kubernetes.svg"),Csharp:s("csharp.svg"),Xamarin:s("xamarin.svg"),TypeScript:s("ts.png"),VueJs:s("vue.png"),ReactJs:s("react.svg"),Dart:s("dart.png"),Kotlin:s("kotlin.png"),Python:s("python.png"),NodeJs:s("node.png"),Deno:s("deno.png","deno-dark.png"),Svelte:s("svelte.png"),ExpressJs:s("express.png"),JavaScript:s("js.png"),Fastify:s("fastify.svg","fastify-dark.png"),NestJs:s("nest.svg"),Quasar:s("quasar.svg"),SolidJs:s("solid.svg"),Electron:s("electron.png"),Flutter:s("flutter.svg"),Java:s("java.png"),AdonisJs:s("adonis.png"),Android:s("android.png"),Angular:s("angular.png"),PostgreSQL:s("postgres.png"),Firebase:s("firebase.png"),Sass:s("sass.png"),Unknown:s("no-img.svg"),MongoDB:s("mongodb.svg"),Redis:s("redis.svg"),Tailwind:s("tailwind.svg"),HTML:s("html.svg"),Premiere:s("premiere.svg"),Photoshop:s("photoshop.svg"),CSS:s("css.svg"),AfterEffects:s("after-effects.svg"),Illustrator:s("illustrator.svg"),Nuxt:s("nuxt.png"),Vite:s("vite.png"),Vitest:s("vitest.svg"),Jest:s("jest.png"),Unocss:s("unocss.svg"),Ruvy:s("ruvy.svg"),Postcss:s("postcss.svg")};let R;F.subscribe(e=>R=e);const os=e=>typeof e=="string"?e:R?e.dark:e.light;globalThis&&globalThis.__awaiter;function W(e){let n,a;return{c(){n=K("i"),this.h()},l(t){n=O(t,"I",{class:!0}),Q(n).forEach(T),this.h()},h(){C(n,"class",a=`${e[0]} ${e[1]}`)},m(t,c){V(t,n,c)},p(t,[c]){c&3&&a!==(a=`${t[0]} ${t[1]}`)&&C(n,"class",a)},i:L,o:L,d(t){t&&T(n)}}}function z(e,n,a){let{icon:t=void 0}=n,{classes:c=""}=n;return e.$$set=i=>{"icon"in i&&a(0,t=i.icon),"classes"in i&&a(1,c=i.classes)},[t,c]}class is extends I{constructor(n){super(),q(this,n,z,W,P,{icon:0,classes:1})}}export{as as A,is as U,x as a,es as b,ss as e,os as g,ts as o,F as t,ns as u};
