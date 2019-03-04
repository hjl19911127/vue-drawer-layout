<template>
  <div>
    <div v-if="name === 'demo1'">
<pre style="background:#fdf6e3;color:#586e75"><span style="color:#93a1a1">&lt;</span><span style="color:#268bd2;font-weight:700">template</span><span style="color:#93a1a1">></span>
  <span style="color:#93a1a1">&lt;</span><span style="color:#268bd2;font-weight:700">vue</span><span style="color:#93a1a1">-drawer-layout</span><span style="color:#93a1a1">></span>
    <span style="color:#93a1a1">&lt;</span><span style="color:#268bd2;font-weight:700">div</span> <span style="color:#93a1a1">class</span>=<span style="color:#269186"><span style="color:#269186">"</span>drawer<span style="color:#269186">"</span></span> <span style="color:#93a1a1">slot</span>=<span style="color:#269186"><span style="color:#269186">"</span>drawer<span style="color:#269186">"</span></span><span style="color:#93a1a1">></span>
      <span style="color:#93a1a1">&lt;</span><span style="color:#268bd2;font-weight:700">div</span> <span style="color:#93a1a1">class</span>=<span style="color:#269186"><span style="color:#269186">"</span>text<span style="color:#269186">"</span></span><span style="color:#93a1a1">></span>This is drawer<span style="color:#93a1a1">&lt;/</span><span style="color:#268bd2;font-weight:700">div</span><span style="color:#93a1a1">></span>
    <span style="color:#93a1a1">&lt;/</span><span style="color:#268bd2;font-weight:700">div</span><span style="color:#93a1a1">></span>
    <span style="color:#93a1a1">&lt;</span><span style="color:#268bd2;font-weight:700">div</span> <span style="color:#93a1a1">class</span>=<span style="color:#269186"><span style="color:#269186">"</span>content<span style="color:#269186">"</span></span> <span style="color:#93a1a1">slot</span>=<span style="color:#269186"><span style="color:#269186">"</span>content<span style="color:#269186">"</span></span><span style="color:#93a1a1">></span>
      <span style="color:#93a1a1">&lt;</span><span style="color:#268bd2;font-weight:700">div</span> <span style="color:#93a1a1">class</span>=<span style="color:#269186"><span style="color:#269186">"</span>text<span style="color:#269186">"</span></span><span style="color:#93a1a1">></span>This is content.<span style="color:#93a1a1">&lt;/</span><span style="color:#268bd2;font-weight:700">div</span><span style="color:#93a1a1">></span>
    <span style="color:#93a1a1">&lt;/</span><span style="color:#268bd2;font-weight:700">div</span><span style="color:#93a1a1">></span>
  <span style="color:#93a1a1">&lt;/</span><span style="color:#268bd2;font-weight:700">vue</span><span style="color:#93a1a1">-drawer-layout</span><span style="color:#93a1a1">></span>
<span style="color:#93a1a1">&lt;/</span><span style="color:#268bd2;font-weight:700">template</span><span style="color:#93a1a1">></span>
</pre>
    </div>
    <div v-if="name === 'demo2'">
<pre style="background:#fdf6e3;color:#586e75"><span style="color:#93a1a1">&lt;</span><span style="color:#268bd2;font-weight:700">template</span><span style="color:#93a1a1">></span>
  <span style="color:#93a1a1">&lt;</span><span style="color:#268bd2;font-weight:700">vue</span><span style="color:#93a1a1">-drawer-layout</span>
    :<span style="color:#93a1a1">reverse</span>=<span style="color:#269186"><span style="color:#269186">"</span>true<span style="color:#269186">"</span></span><span style="color:#93a1a1">></span>
    <span style="color:#93a1a1">&lt;</span><span style="color:#268bd2;font-weight:700">div</span> <span style="color:#93a1a1">class</span>=<span style="color:#269186"><span style="color:#269186">"</span>drawer<span style="color:#269186">"</span></span> <span style="color:#93a1a1">slot</span>=<span style="color:#269186"><span style="color:#269186">"</span>drawer<span style="color:#269186">"</span></span><span style="color:#93a1a1">></span>
      <span style="color:#93a1a1">&lt;</span><span style="color:#268bd2;font-weight:700">div</span> <span style="color:#93a1a1">class</span>=<span style="color:#269186"><span style="color:#269186">"</span>text<span style="color:#269186">"</span></span><span style="color:#93a1a1">></span>This is drawer<span style="color:#93a1a1">&lt;/</span><span style="color:#268bd2;font-weight:700">div</span><span style="color:#93a1a1">></span>
    <span style="color:#93a1a1">&lt;/</span><span style="color:#268bd2;font-weight:700">div</span><span style="color:#93a1a1">></span>
    <span style="color:#93a1a1">&lt;</span><span style="color:#268bd2;font-weight:700">div</span> <span style="color:#93a1a1">class</span>=<span style="color:#269186"><span style="color:#269186">"</span>content<span style="color:#269186">"</span></span> <span style="color:#93a1a1">slot</span>=<span style="color:#269186"><span style="color:#269186">"</span>content<span style="color:#269186">"</span></span><span style="color:#93a1a1">></span>
      <span style="color:#93a1a1">&lt;</span><span style="color:#268bd2;font-weight:700">div</span> <span style="color:#93a1a1">class</span>=<span style="color:#269186"><span style="color:#269186">"</span>text<span style="color:#269186">"</span></span><span style="color:#93a1a1">></span>This is content.<span style="color:#93a1a1">&lt;/</span><span style="color:#268bd2;font-weight:700">div</span><span style="color:#93a1a1">></span>
    <span style="color:#93a1a1">&lt;/</span><span style="color:#268bd2;font-weight:700">div</span><span style="color:#93a1a1">></span>
  <span style="color:#93a1a1">&lt;/</span><span style="color:#268bd2;font-weight:700">vue</span><span style="color:#93a1a1">-drawer-layout</span><span style="color:#93a1a1">></span>
<span style="color:#93a1a1">&lt;/</span><span style="color:#268bd2;font-weight:700">template</span><span style="color:#93a1a1">></span>
</pre>
    </div>
    <div v-if="name === 'demo3'">
<pre style="background:#fdf6e3;color:#586e75"><span style="color:#93a1a1">&lt;</span><span style="color:#268bd2;font-weight:700">template</span><span style="color:#93a1a1">></span>
  <span style="color:#93a1a1">&lt;</span><span style="color:#268bd2;font-weight:700">vue</span><span style="color:#93a1a1">-drawer-layout</span>
    :<span style="color:#93a1a1">content-drawable</span>=<span style="color:#269186"><span style="color:#269186">"</span>true<span style="color:#269186">"</span></span><span style="color:#93a1a1">></span>
    <span style="color:#93a1a1">&lt;</span><span style="color:#268bd2;font-weight:700">div</span> <span style="color:#93a1a1">class</span>=<span style="color:#269186"><span style="color:#269186">"</span>drawer<span style="color:#269186">"</span></span> <span style="color:#93a1a1">slot</span>=<span style="color:#269186"><span style="color:#269186">"</span>drawer<span style="color:#269186">"</span></span><span style="color:#93a1a1">></span>
      <span style="color:#93a1a1">&lt;</span><span style="color:#268bd2;font-weight:700">div</span> <span style="color:#93a1a1">class</span>=<span style="color:#269186"><span style="color:#269186">"</span>text<span style="color:#269186">"</span></span><span style="color:#93a1a1">></span>This is drawer<span style="color:#93a1a1">&lt;/</span><span style="color:#268bd2;font-weight:700">div</span><span style="color:#93a1a1">></span>
    <span style="color:#93a1a1">&lt;/</span><span style="color:#268bd2;font-weight:700">div</span><span style="color:#93a1a1">></span>
    <span style="color:#93a1a1">&lt;</span><span style="color:#268bd2;font-weight:700">div</span> <span style="color:#93a1a1">class</span>=<span style="color:#269186"><span style="color:#269186">"</span>content<span style="color:#269186">"</span></span> <span style="color:#93a1a1">slot</span>=<span style="color:#269186"><span style="color:#269186">"</span>content<span style="color:#269186">"</span></span><span style="color:#93a1a1">></span>
      <span style="color:#93a1a1">&lt;</span><span style="color:#268bd2;font-weight:700">div</span> <span style="color:#93a1a1">class</span>=<span style="color:#269186"><span style="color:#269186">"</span>text<span style="color:#269186">"</span></span><span style="color:#93a1a1">></span>This is content.<span style="color:#93a1a1">&lt;/</span><span style="color:#268bd2;font-weight:700">div</span><span style="color:#93a1a1">></span>
    <span style="color:#93a1a1">&lt;/</span><span style="color:#268bd2;font-weight:700">div</span><span style="color:#93a1a1">></span>
  <span style="color:#93a1a1">&lt;/</span><span style="color:#268bd2;font-weight:700">vue</span><span style="color:#93a1a1">-drawer-layout</span><span style="color:#93a1a1">></span>
<span style="color:#93a1a1">&lt;/</span><span style="color:#268bd2;font-weight:700">template</span><span style="color:#93a1a1">></span>
</pre>
    </div>
    <div v-if="name === 'demo4'">
<pre style="background:#fdf6e3;color:#586e75"><span style="color:#93a1a1">&lt;</span><span style="color:#268bd2;font-weight:700">template</span><span style="color:#93a1a1">></span>
  <span style="color:#93a1a1">&lt;</span><span style="color:#268bd2;font-weight:700">vue</span><span style="color:#93a1a1">-drawer-layout</span>
    :<span style="color:#93a1a1">drawer-width</span>=<span style="color:#269186"><span style="color:#269186">"</span>480<span style="color:#269186">"</span></span>
    :<span style="color:#93a1a1">drawable-distance</span>=<span style="color:#269186"><span style="color:#269186">"</span>160<span style="color:#269186">"</span></span>
    :<span style="color:#93a1a1">z-index</span>=<span style="color:#269186"><span style="color:#269186">"</span>0<span style="color:#269186">"</span></span>
    :<span style="color:#93a1a1">content-drawable</span>=<span style="color:#269186"><span style="color:#269186">"</span>true<span style="color:#269186">"</span></span><span style="color:#93a1a1">></span>
    <span style="color:#93a1a1">&lt;</span><span style="color:#268bd2;font-weight:700">div</span> <span style="color:#93a1a1">class</span>=<span style="color:#269186"><span style="color:#269186">"</span>drawer<span style="color:#269186">"</span></span> <span style="color:#93a1a1">slot</span>=<span style="color:#269186"><span style="color:#269186">"</span>drawer<span style="color:#269186">"</span></span><span style="color:#93a1a1">></span>
      <span style="color:#93a1a1">&lt;</span><span style="color:#268bd2;font-weight:700">div</span> <span style="color:#93a1a1">class</span>=<span style="color:#269186"><span style="color:#269186">"</span>text<span style="color:#269186">"</span></span><span style="color:#93a1a1">></span>This is drawer<span style="color:#93a1a1">&lt;/</span><span style="color:#268bd2;font-weight:700">div</span><span style="color:#93a1a1">></span>
    <span style="color:#93a1a1">&lt;/</span><span style="color:#268bd2;font-weight:700">div</span><span style="color:#93a1a1">></span>
    <span style="color:#93a1a1">&lt;</span><span style="color:#268bd2;font-weight:700">div</span> <span style="color:#93a1a1">class</span>=<span style="color:#269186"><span style="color:#269186">"</span>content<span style="color:#269186">"</span></span> <span style="color:#93a1a1">slot</span>=<span style="color:#269186"><span style="color:#269186">"</span>content<span style="color:#269186">"</span></span><span style="color:#93a1a1">></span>
      <span style="color:#93a1a1">&lt;</span><span style="color:#268bd2;font-weight:700">div</span> <span style="color:#93a1a1">class</span>=<span style="color:#269186"><span style="color:#269186">"</span>text<span style="color:#269186">"</span></span><span style="color:#93a1a1">></span>This is content.<span style="color:#93a1a1">&lt;/</span><span style="color:#268bd2;font-weight:700">div</span><span style="color:#93a1a1">></span>
    <span style="color:#93a1a1">&lt;/</span><span style="color:#268bd2;font-weight:700">div</span><span style="color:#93a1a1">></span>
  <span style="color:#93a1a1">&lt;/</span><span style="color:#268bd2;font-weight:700">vue</span><span style="color:#93a1a1">-drawer-layout</span><span style="color:#93a1a1">></span>
<span style="color:#93a1a1">&lt;/</span><span style="color:#268bd2;font-weight:700">template</span><span style="color:#93a1a1">></span>
</pre>
    </div>
    <div v-if="name === 'demo5'">
<pre style="background:#fdf6e3;color:#586e75"><span style="color:#93a1a1">&lt;</span><span style="color:#268bd2;font-weight:700">template</span><span style="color:#93a1a1">></span>
  <span style="color:#93a1a1">&lt;</span><span style="color:#268bd2;font-weight:700">vue</span><span style="color:#93a1a1">-drawer-layout</span>
    <span style="color:#93a1a1">ref</span>=<span style="color:#269186"><span style="color:#269186">"</span>drawerLayout<span style="color:#269186">"</span></span><span style="color:#93a1a1">></span>
    <span style="color:#93a1a1">&lt;</span><span style="color:#268bd2;font-weight:700">div</span> <span style="color:#93a1a1">class</span>=<span style="color:#269186"><span style="color:#269186">"</span>drawer<span style="color:#269186">"</span></span> <span style="color:#93a1a1">slot</span>=<span style="color:#269186"><span style="color:#269186">"</span>drawer<span style="color:#269186">"</span></span><span style="color:#93a1a1">></span>
      <span style="color:#93a1a1">&lt;</span><span style="color:#268bd2;font-weight:700">div</span> <span style="color:#93a1a1">class</span>=<span style="color:#269186"><span style="color:#269186">"</span>text<span style="color:#269186">"</span></span><span style="color:#93a1a1">></span>This is drawer<span style="color:#93a1a1">&lt;/</span><span style="color:#268bd2;font-weight:700">div</span><span style="color:#93a1a1">></span>
      <span style="color:#93a1a1">&lt;</span><span style="color:#268bd2;font-weight:700">a</span> <span style="color:#93a1a1">href</span>=<span style="color:#269186"><span style="color:#269186">"</span>javascript:void(0)<span style="color:#269186">"</span></span> <span style="color:#93a1a1">class</span>=<span style="color:#269186"><span style="color:#269186">"</span>btn<span style="color:#269186">"</span></span>
           @<span style="color:#93a1a1">click</span>=<span style="color:#269186"><span style="color:#269186">"</span>handleToggleDrawer<span style="color:#269186">"</span></span><span style="color:#93a1a1">></span>Hide Drawer<span style="color:#93a1a1">&lt;/</span><span style="color:#268bd2;font-weight:700">a</span><span style="color:#93a1a1">></span>
    <span style="color:#93a1a1">&lt;/</span><span style="color:#268bd2;font-weight:700">div</span><span style="color:#93a1a1">></span>
    <span style="color:#93a1a1">&lt;</span><span style="color:#268bd2;font-weight:700">div</span> <span style="color:#93a1a1">class</span>=<span style="color:#269186"><span style="color:#269186">"</span>content<span style="color:#269186">"</span></span> <span style="color:#93a1a1">slot</span>=<span style="color:#269186"><span style="color:#269186">"</span>content<span style="color:#269186">"</span></span><span style="color:#93a1a1">></span>
      <span style="color:#93a1a1">&lt;</span><span style="color:#268bd2;font-weight:700">div</span> <span style="color:#93a1a1">class</span>=<span style="color:#269186"><span style="color:#269186">"</span>text<span style="color:#269186">"</span></span><span style="color:#93a1a1">></span>This is content.<span style="color:#93a1a1">&lt;/</span><span style="color:#268bd2;font-weight:700">div</span><span style="color:#93a1a1">></span>
      <span style="color:#93a1a1">&lt;</span><span style="color:#268bd2;font-weight:700">a</span> <span style="color:#93a1a1">href</span>=<span style="color:#269186"><span style="color:#269186">"</span>javascript:void(0)<span style="color:#269186">"</span></span> <span style="color:#93a1a1">class</span>=<span style="color:#269186"><span style="color:#269186">"</span>btn<span style="color:#269186">"</span></span>
           @<span style="color:#93a1a1">click</span>=<span style="color:#269186"><span style="color:#269186">"</span>handleToggleDrawer<span style="color:#269186">"</span></span><span style="color:#93a1a1">></span>Show Drawer<span style="color:#93a1a1">&lt;/</span><span style="color:#268bd2;font-weight:700">a</span><span style="color:#93a1a1">></span>
    <span style="color:#93a1a1">&lt;/</span><span style="color:#268bd2;font-weight:700">div</span><span style="color:#93a1a1">></span>
  <span style="color:#93a1a1">&lt;/</span><span style="color:#268bd2;font-weight:700">vue</span><span style="color:#93a1a1">-drawer-layout</span><span style="color:#93a1a1">></span>
<span style="color:#93a1a1">&lt;/</span><span style="color:#268bd2;font-weight:700">template</span><span style="color:#93a1a1">></span>
<span style="color:#93a1a1">&lt;</span><span style="font-style:italic">script</span><span style="color:#93a1a1">></span>
  <span style="color:#073642;font-weight:700">export</span> <span style="color:#859900">default</span> <span style="color:#268bd2">{</span>
    methods: <span style="color:#268bd2">{</span>
      handleToggleDrawer<span style="color:#93a1a1">(</span><span style="color:#93a1a1">)</span> <span style="color:#268bd2">{</span>
        <span style="color:#268bd2">this</span>.<span style="color:#859900">$</span>refs.drawerLayout.toggle<span style="color:#93a1a1">(</span><span style="color:#93a1a1">)</span>;
      <span style="color:#268bd2">}</span>
    <span style="color:#268bd2">}</span>
  <span style="color:#268bd2">}</span>
<span style="color:#93a1a1">&lt;/</span><span style="font-style:italic">script</span><span style="color:#93a1a1">></span>
</pre>
    </div>
    <div v-if="name === 'demo6'">
<pre style="background:#fdf6e3;color:#586e75"><span style="color:#93a1a1">&lt;</span><span style="color:#268bd2;font-weight:700">template</span><span style="color:#93a1a1">></span>
  <span style="color:#93a1a1">&lt;</span><span style="color:#268bd2;font-weight:700">vue</span><span style="color:#93a1a1">-drawer-layout</span>
    <span style="color:#93a1a1">ref</span>=<span style="color:#269186"><span style="color:#269186">"</span>drawerLayout<span style="color:#269186">"</span></span>
    @<span style="color:#93a1a1">slide-start</span>=<span style="color:#269186"><span style="color:#269186">"</span>handleSlideStart<span style="color:#269186">"</span></span>
    @<span style="color:#93a1a1">slide-move</span>=<span style="color:#269186"><span style="color:#269186">"</span>handleSlideMove<span style="color:#269186">"</span></span>
    @<span style="color:#93a1a1">slide-end</span>=<span style="color:#269186"><span style="color:#269186">"</span>handleSlideEnd<span style="color:#269186">"</span></span>
    @<span style="color:#93a1a1">mask-click</span>=<span style="color:#269186"><span style="color:#269186">"</span>handleMaskClick<span style="color:#269186">"</span></span><span style="color:#93a1a1">></span>
    <span style="color:#93a1a1">&lt;</span><span style="color:#268bd2;font-weight:700">div</span> <span style="color:#93a1a1">class</span>=<span style="color:#269186"><span style="color:#269186">"</span>drawer<span style="color:#269186">"</span></span> <span style="color:#93a1a1">slot</span>=<span style="color:#269186"><span style="color:#269186">"</span>drawer<span style="color:#269186">"</span></span><span style="color:#93a1a1">></span>
      <span style="color:#93a1a1">&lt;</span><span style="color:#268bd2;font-weight:700">div</span> <span style="color:#93a1a1">class</span>=<span style="color:#269186"><span style="color:#269186">"</span>text<span style="color:#269186">"</span></span><span style="color:#93a1a1">></span>This is drawer<span style="color:#93a1a1">&lt;/</span><span style="color:#268bd2;font-weight:700">div</span><span style="color:#93a1a1">></span>
    <span style="color:#93a1a1">&lt;/</span><span style="color:#268bd2;font-weight:700">div</span><span style="color:#93a1a1">></span>
    <span style="color:#93a1a1">&lt;</span><span style="color:#268bd2;font-weight:700">div</span> <span style="color:#93a1a1">class</span>=<span style="color:#269186"><span style="color:#269186">"</span>content<span style="color:#269186">"</span></span> <span style="color:#93a1a1">slot</span>=<span style="color:#269186"><span style="color:#269186">"</span>content<span style="color:#269186">"</span></span><span style="color:#93a1a1">></span>
      <span style="color:#93a1a1">&lt;</span><span style="color:#268bd2;font-weight:700">div</span> <span style="color:#93a1a1">class</span>=<span style="color:#269186"><span style="color:#269186">"</span>text<span style="color:#269186">"</span></span><span style="color:#93a1a1">></span>This is content.<span style="color:#93a1a1">&lt;/</span><span style="color:#268bd2;font-weight:700">div</span><span style="color:#93a1a1">></span>
    <span style="color:#93a1a1">&lt;/</span><span style="color:#268bd2;font-weight:700">div</span><span style="color:#93a1a1">></span>
  <span style="color:#93a1a1">&lt;/</span><span style="color:#268bd2;font-weight:700">vue</span><span style="color:#93a1a1">-drawer-layout</span><span style="color:#93a1a1">></span>
<span style="color:#93a1a1">&lt;/</span><span style="color:#268bd2;font-weight:700">template</span><span style="color:#93a1a1">></span>
<span style="color:#93a1a1">&lt;</span><span style="font-style:italic">script</span><span style="color:#93a1a1">></span>
  <span style="color:#073642;font-weight:700">export</span> <span style="color:#859900">default</span> <span style="color:#268bd2">{</span>
    methods: <span style="color:#268bd2">{</span>
      handleSlideStart<span style="color:#93a1a1">(</span><span style="color:#93a1a1">)</span> <span style="color:#268bd2">{</span>
        console<span style="color:#268bd2">.info</span><span style="color:#93a1a1">(</span><span style="color:#269186"><span style="color:#c60000">'</span>slide-start<span style="color:#c60000">'</span></span><span style="color:#93a1a1">)</span>;
      <span style="color:#268bd2">}</span>,
      handleSlideMove<span style="color:#93a1a1">(</span>position<span style="color:#93a1a1">)</span> <span style="color:#268bd2">{</span>
        console<span style="color:#268bd2">.info</span><span style="color:#93a1a1">(</span><span style="color:#269186"><span style="color:#c60000">'</span>slide-move<span style="color:#c60000">'</span></span>, position<span style="color:#93a1a1">)</span>;
      <span style="color:#268bd2">}</span>,
      handleSlideEnd<span style="color:#93a1a1">(</span>visible<span style="color:#93a1a1">)</span> <span style="color:#268bd2">{</span>
        console<span style="color:#268bd2">.info</span><span style="color:#93a1a1">(</span><span style="color:#269186"><span style="color:#c60000">'</span>slide-end<span style="color:#c60000">'</span></span>, visible<span style="color:#93a1a1">)</span>;
      <span style="color:#268bd2">}</span>,
      handleMaskClick<span style="color:#93a1a1">(</span><span style="color:#93a1a1">)</span> <span style="color:#268bd2">{</span>
        console<span style="color:#268bd2">.info</span><span style="color:#93a1a1">(</span><span style="color:#269186"><span style="color:#c60000">'</span>mask-click<span style="color:#c60000">'</span></span><span style="color:#93a1a1">)</span>;
        <span style="color:#268bd2">this</span>.<span style="color:#859900">$</span>refs.drawerLayout.toggle<span style="color:#93a1a1">(</span><span style="color:#b58900">false</span><span style="color:#93a1a1">)</span>;
      <span style="color:#268bd2">}</span>
    <span style="color:#268bd2">}</span>
  <span style="color:#268bd2">}</span>
<span style="color:#93a1a1">&lt;/</span><span style="font-style:italic">script</span><span style="color:#93a1a1">></span>
</pre>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      name: ''
    }
  }
</script>
