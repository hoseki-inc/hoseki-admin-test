(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();console.log('👋 This message is being logged by "renderer.js", included via Vite');const s=document.getElementById("btn"),l=document.getElementById("title");s.addEventListener("click",()=>{const n=l.value;window.electronAPI.setTitle(n)});const d=document.getElementById("btn2"),u=document.getElementById("filePath");d.addEventListener("click",async()=>{const n=await window.electronAPI.openFile();u.innerText=n});const a=document.querySelector(".alert");a.addEventListener("click",function(n){window.electronAPI.customNotification()});
