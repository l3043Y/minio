import{M as a}from"./vendor.55b2803e.js";const l=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};l();const c=document.querySelector("#app");c.innerHTML=`
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;var u=new a.Client({endPoint:"192.168.11.80",port:9e3,useSSL:!1,accessKey:"vps-borey",secretKey:"vps-borey"});const f=["D:\\Loki.S01E05.1080p.WEB.H264-EXPLOIT[rarbg]\\Loki.S01E05.1080p.WEB.H264-EXPLOIT.mkv","D:\\Software\\CentOS-7-x86_64-DVD-2009.iso","D:\\Software\\kickstart.cfg","D:\\Software\\ubuntu-18.04.6-desktop-amd64.iso","D:\\Software\\windows11.wim","D:\\Software\\boot.iso"];let d={"Content-Type":"text/html","Content-Language":123,"X-Amz-Meta-Testing":1234,example:5678};u.fPutObject("vps","lokie4",f[0],d,function(r,o){if(r)return console.log(r);console.log("Success",o.etag,o.versionId)});
