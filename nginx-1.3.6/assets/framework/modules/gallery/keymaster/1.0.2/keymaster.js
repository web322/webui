define("gallery/keymaster/1.0.2/keymaster",[],function(e,t,n){(function(e){function a(e,t){var n=e.length;while(n--)if(e[n]===t)return n;return-1}function f(e,t){var n,s,u,f,l;n=e.keyCode;if(n==93||n==224)n=91;if(n in i){i[n]=!0;for(u in o)o[u]==n&&(h[u]=!0);return}if(!h.filter.call(this,e))return;if(!(n in r))return;for(f=0;f<r[n].length;f++){s=r[n][f];if(s.scope==t||s.scope=="all"){l=s.mods.length>0;for(u in i)if(!i[u]&&a(s.mods,+u)>-1||i[u]&&a(s.mods,+u)==-1)l=!1;(s.mods.length==0&&!i[16]&&!i[18]&&!i[17]&&!i[91]||l)&&s.method(e,s)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}}function l(e){var t=e.keyCode,n;if(t==93||t==224)t=91;if(t in i){i[t]=!1;for(n in o)o[n]==t&&(h[n]=!1)}}function c(){for(t in i)i[t]=!1;for(t in o)h[t]=!1}function h(e,t,n){var i,s,a,f;n===undefined&&(n=t,t="all"),e=e.replace(/\s/g,""),i=e.split(","),i[i.length-1]==""&&(i[i.length-2]+=",");for(a=0;a<i.length;a++){s=[],e=i[a].split("+");if(e.length>1){s=e.slice(0,e.length-1);for(f=0;f<s.length;f++)s[f]=o[s[f]];e=[e[e.length-1]]}e=e[0],e=u[e]||e.toUpperCase().charCodeAt(0),e in r||(r[e]=[]),r[e].push({shortcut:i[a],scope:t,method:n,key:i[a],mods:s})}}function p(e){var t=(e.target||e.srcElement).tagName;return t!="INPUT"&&t!="SELECT"&&t!="TEXTAREA"}function d(e){s=e||"all"}function v(){return s||"all"}function m(e){var t,n,i;for(t in r){n=r[t];for(i=0;i<n.length;)n[i].scope===e?n.splice(i,1):i++}}function g(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&e.attachEvent("on"+t,function(){n(window.event)})}var t,r={},i={16:!1,18:!1,17:!1,91:!1},s="all",o={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,command:91},u={backspace:8,tab:9,clear:12,enter:13,"return":13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,"delete":46,home:36,end:35,pageup:33,pagedown:34,",":188,".":190,"/":191,"`":192,"-":189,"=":187,";":186,"'":222,"[":219,"]":221,"\\":220};for(t=1;t<20;t++)o["f"+t]=111+t;for(t in o)h[t]=!1;g(document,"keydown",function(e){f(e,s)}),g(document,"keyup",l),g(window,"focus",c),e.key=h,e.key.setScope=d,e.key.getScope=v,e.key.deleteScope=m,e.key.filter=p,typeof n!="undefined"&&(n.exports=key)})(this)});