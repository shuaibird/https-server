+function($) {
  $(function() {
    var template = (function () {/*

      <div class="category-navigation">
        <ul class="category-navigation-level1">
          <li>
            <div class="category-navigation-heading">平台概述</div>
            <ul class="category-navigation-level2">
              <li>这是板块A</li>
              <li>这是板块B</li>
            </ul>
          </li>
          <li>
            <div class="category-navigation-heading">快速入门</div>
            <ul class="category-navigation-level2">
              <li>这是板块A</li>
              <li>这是板块B</li>
            </ul>
          </li>
          <li>
            <div class="category-navigation-heading">开发文档</div>
            <ul class="category-navigation-level2">
              <li>这是板块A</li>
              <li>这是板块B</li>
            </ul>
          </li>
        </ul>
      </div>

    */}).toString().split('\n').slice(1, -1).join('\n')

    $('.content-sidebar').append(template)
  })
}(jQuery)