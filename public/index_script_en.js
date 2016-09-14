(function($) {

// Home page hot search keywords
var searchKeyword = (function() {/*
  <span><a href="/hc/search/results/?type=kb&keyword=SDK">SDK</a></span> 
  <span><a href="/hc/search/results/?type=kb&keyword=Android">Android</a></span> 
  <span><a href="/hc/search/results/?type=kb&keyword=GAgent">GAgent</a></span> 
  <span><a href="/hc/search/results/?type=kb&keyword=Gokit">Gokit</a></span> 
  <span><a href="/hc/search/results/?type=kb&keyword=Hardware access">Hardware access</a></span>
*/}).toString().split('\n').slice(1, -1).join('\n');
$('#search-keyword').append(searchKeyword);


// Home page Article Navigation Template
var contentNavList = (function() {/*

  <div class="content-nav-list">
    <p>For iOS App development</p>
    <ul>
      <li><a href="/hc/kb/article/197938">IOS App development-The preparatory work</a></li>
      <li><a href="/hc/kb/article/203026">IOS App development-System initialization</a></li>
      <li><a href="/hc/kb/article/199967">IOS App development-User management</a></li>
      <li><a href="/hc/kb/article/200379">IOS App development-Device configuration</a></li>
      <li><a href="/hc/kb/article/200611">IOS App development-Device accessing</a></li>
    </ul>
    <span><a href="/hc/kb/section/104970">View all documents<span class="content-nav-list-num">（7 articles）</span></a></span>
  </div>

  <div class="content-nav-list">
    <p>For Android App development</p>
    <ul>
      <li><a href="/hc/kb/article/197602">Android App development-The preparatory work</a></li>
      <li><a href="/hc/kb/article/203016">Android App development-System initialization</a></li>
      <li><a href="/hc/kb/article/199904">Android App development-User management</a></li>
      <li><a href="/hc/kb/article/200262">Android App development-Device configuration</a></li>
      <li><a href="/hc/kb/article/200221">Android App development-Device accessing</a></li>
    </ul>
    <span><a href="/hc/kb/section/104971">View all documents<span class="content-nav-list-num">（7 articles）</span></a></span>
  </div>

  <div class="content-nav-list">
    <p>For WeChat accessing</p>
    <ul>
      <li><a href="/hc/kb/article/197435">WeChat App development process</a></li>
      <li><a href="/hc/kb/article/197530">Gizwits API</a></li>
      <li><a href="/hc/kb/article/197425">FAQ</a></li>
    </ul>
    <span><a href="/hc/kb/section/104973">View all documents<span class="content-nav-list-num">（3 articles）</span></a></span>
  </div>

  <div class="content-nav-list">
    <p>For hardware developers</p>
    <ul>
      <li><a href="/hc/kb/article/198888">Know more about the process</a></li>
      <li><a href="/hc/kb/article/204852">Specification for Wi-Fi Modules</a></li>
    </ul>
    <span><a href="/hc/kb/section/83911">View all documents<span class="content-nav-list-num">（1 articles）</span></a></span>
  </div>

  <div class="content-nav-list">
    <p>Quick Start</p>
    <ul>
      <li><a href="/hc/kb/article/196384">Know more about Gizwits</a></li>
      <li><a href="/hc/kb/article/198795">How to sign up</a></li>
      <li><a href="/hc/kb/article/143617">How to design the product</a></li>
      <li><a href="/hc/kb/article/204811">How to manage data points</a></li>
      <li><a href="/hc/kb/article/198852">How to manage the application</a></li>
    </ul>
    <span><a href="/hc/kb/category/27074">View all documents<span class="content-nav-list-num">（12 articles）</span></a></span>
  </div>

  <div class="content-nav-list">
    <p>GoKit Development Kit</p>
    <ul>
      <li><a href="http://www.gizwits.com/zh-cn/gokit" target="_blank"> Apply Gokit</a></li>
      <li><a href="http://site.gizwits.com/zh-cn/document/gokit/intro/" target="_blank">Intro to GoKit </a></li>
      <li><a href="http://site.gizwits.com/zh-cn/document/gokit/i_01_stared/" target="_blank">GoKit started guide</a></li>
    </ul>
    <span><a href="http://site.gizwits.com/en/document/gokit/intro/">View all documents<span class="content-nav-list-num">（3 articles）</span></a></span>
  </div>

  <div class="content-nav-list">
    <p>Open source</p>
    <ul>
      <li><a href="http://site.gizwits.com/zh-cn/developer/resource/open_source?type=app_source_code" target="_blank">Open source App</a></li>
      <li><a href="http://site.gizwits.com/zh-cn/developer/resource/open_source?type=sample_source_code" target="_blank">Open source hardware</a></li>
      <li><a href="http://site.gizwits.com/zh-cn/developer/resource/open_source?type=ble_source_code" target="_blank">Open source sample</a></li>
    </ul>
    <span><a href="http://site.gizwits.com/en/developer/resource/hardware?type=GoKit">View all documents<span class="content-nav-list-num">（3 articles）</span></a></span>
  </div>

  <div class="content-nav-list">
    <p>Commercial Projects</p>
    <ul>
      <li><a href="/hc/kb/article/164214/" target="_blank">Intelligent Planter for Garden Staff</a></li>
      <li><a href="/posts/view/id/164227/" target="_blank">Sous Vide Intelligent Cooking Utensil</a></li>
      <li><a href="/posts/view/id/164224/" target="_blank">Intelligent Curtain</a></li>
      <li><a href="/hc/kb/article/164253/" target="_blank">Linptech Intelligent Switch</a></li>
    </ul>
    <span><a href="http://docs.gizwits.com/agent#/hc/post?categoryId=91739">View all documents<span class="content-nav-list-num">（4 articles）</span></a></span>
  </div>

   <div class="content-nav-list">
    <p>Partners</p>
    <ul>
      <li><a href="/posts/view/id/164419/" target="_blank">Community-ICkey electronic ICKey</a></li>
      <li><a href="/posts/view/id/164421/" target="_blank">Community-Electronic enthusiasts</a></li>
      <li><a href="/posts/view/id/164422/" target="_blank">Ecologyl-WeChat hardware platform</a></li>
    </ul>
    <span><a href="http://docs.gizwits.com/agent#/hc/post?categoryId=91799">View all documents<span class="content-nav-list-num">（3 articles）</span></a></span>
  </div>

*/}).toString().split('\n').slice(1, -1).join('\n');
$('.content-nav-list-container > .wrap').append(contentNavList);
})(jQuery);