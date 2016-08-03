+function($) {

  // 修改说明：只修改dataModel内容，heading为一级菜单，section为对应的二级菜单，修改为相对应的title和url即可

  var dataModel = [
    {
      heading: '平台概述',
      section: [
        {
          title: '概述',
          url: '#'
        },
        {
          title: '概述',
          url: '#'
        }
      ]
    },

    {
      heading: '快速入门',
      section: [
        {
          title: '概述',
          url: '#'
        },
        {
          title: '云端管理',
          url: '#'
        },
        {
          title: '设备端开发',
          url: '#'
        }
      ]
    },

    {
      heading: '开发文档',
      section: [
        {
          title: '概述',
          url: '#'
        },
        {
          title: 'WiFi产品APP开发开源框架使用指南',
          url: '#'
        },
        {
          title: 'WiFi产品iOS SDK 2.0 集成指南',
          url: '#'
        }
      ]
    }
  ]


  var template = '<div class="category-navigation"><ul>'

  dataModel.forEach(function(data) {
    var heading = '<div class="category-navigation-heading"><span class="ui-element-triangle">&#9656;</span>' + data.heading +'</div>'
    template += '<li>' + heading + '<ul class="category-navigation-section">'

    data.section.forEach(function(item) {
      var menu = '<li><a href="' + item.url + '" title="' + item.title + '">' + item.title + '</a></li>'
      template += menu
    })

    template += '</ul></li>'
  })

  template += '</ul></div>'


  $(function() {
    $('.content-sidebar').append($(template))

    $('.category-navigation-heading').click(function() {
      var $this = $(this)
      var categorySection = $this.next()
      var triangle = $this.find('.ui-element-triangle')
      categorySection.is(':visible') ? triangle.html('&#9656;') : triangle.html('&#9662;')
      categorySection.slideToggle()
    })

    var heading = $('title').text().split('-')[0].trim()

    dataModel.forEach(function(item, index) {
      if(item.heading === heading) {
        $('.category-navigation-heading').eq(index)
          .addClass('active')
          .find('.ui-element-triangle').html('&#9662;') 

        $('.category-navigation-section').eq(index).attr('style', 'display: block')
      }
    })

  })
}(jQuery)
