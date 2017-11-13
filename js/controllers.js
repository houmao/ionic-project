angular.module('starter.controllers', [])
.controller('statusCtr', function($scope) {

})
  .controller('onceCtr',function ($scope) {
    $scope.times=5;
    $scope.totalOil=80;
    $scope.init=true;
    $scope.item={};
    $scope.option = {
      color: ['#3398DB'],
      tooltip : {
        trigger: 'axis',
        triggerOn:'click',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '12%',
        bottom: '3%',
        containLabel: true
      },
      xAxis :{
        name:'日期',
        data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
          alignWithLabel: true
        }
      },
      yAxis : [
        {
          type : 'value',
          name:'油量(升)'
        }
      ],
      series : [
        {
          name:'直接访问',
          type:'bar',
          barWidth: '60%',
          data:[10, 52, 200, 334, 390, 330, 220]
        }
      ]
    };
    $scope.sayHello=function(items){
      $scope.item.value=items.value;
      $scope.item.name=items.name;
      $scope.init=false;
    };
    $scope.ratingsObject = {
      iconOn: 'ion-ios-star',    //Optional
      iconOff: 'ion-ios-star-outline',   //Optional
      iconOnColor: 'rgb(200, 200, 100)',  //Optional
      iconOffColor:  'rgb(200, 100, 100)',    //Optional
      rating:  2, //Optional
      minRating:1,    //Optional
      readOnly: true, //Optional
      callback: function(rating, index) {    //Mandatory
        $scope.ratingsCallback(rating, index);
      }
    };
    $scope.ratingsCallback = function(rating, index) {
      console.log('Selected rating is : ', rating, ' and the index is : ', index);
    };
  })
  .controller('totalCtr', function($scope) {
    $scope.data = ['周一','周二','周三','周四','周五','周六','周日'];
  })
  .controller('historyCtr', function($scope) {

  })
  .controller('lowCtr',function ($scope) {
    var PatternSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAVCAIAAAA8SdJPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDQyQTBBNTE1NjI5MTFFN0FEMUI5NEE3OUY1N0ZFRjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDQyQTBBNTI1NjI5MTFFN0FEMUI5NEE3OUY1N0ZFRjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NDEzOUJENjU2MjkxMUU3QUQxQjk0QTc5RjU3RkVGMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NDEzOUJENzU2MjkxMUU3QUQxQjk0QTc5RjU3RkVGMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr3x3AEAAACVSURBVHja7JRBCgMxDAMlO/vw/rAPiq06oZf25rLQhVaB3DLIihGVEySSMOJTCQlp3O42AQPBkHo4MT1dBm0rI7AAWoelph9bIAkbYThPZ7LGi+Vye0Vf3ezf5rhq9r/A+u/XF/9xlVhqT5fdx16pZJUXTdi3hZ7t3PaYOeXFiZW1OKpmqbkbku2d8MMiD3jhAnwIMAA1XUeDcEGmGgAAAABJRU5ErkJggg==';
    var PatternImg = new Image();
    PatternImg.src = PatternSrc;
    $scope.option = {
      color: ['#3398DB'],
      tooltip : {
        trigger: 'axis',
        triggerOn:'click',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '12%',
        bottom: '3%',
        containLabel: true
      },
      xAxis :{
        name:'日期',
        data : ['3L', '4L', '5L', '6L', '7L', '8L', '9L'],
        axisLine: {show: false},
        axisTick:{
          show: false
        }
      },
      yAxis : [
        {
          type : 'value',
          name:'油量(升)',
          show:false
        }
      ],
      series : [
        {
          name: '直接访问',
          type: 'bar',
          barWidth: '60%',
          data: [3, 4, 5, 6, 7, 8, 9],
          itemStyle: {
            normal: {
              barBorderRadius: [50, 50, 0, 0],
              color: {image: PatternImg,repeat: 'repeat'}
            }
          }
        }
      ]
    };
  })
  .directive('echarts', function() {
    return {
      scope: {
        id: "@",
        options:'=',
        greet:'&'
      },
      restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
      template: '<div style="height:400px;"></div>',
      replace: true,
      link: function(scope, iElm, iAttrs, controller) {
        var myChart;
        if (myChart != null && myChart != "" && myChart != undefined) {
          myChart.dispose();
        }
        myChart = echarts.init(document.getElementById(scope.id));
        myChart.setOption(scope.options);
        scope.$watch('options',function(newValue){
          if(newValue){
            myChart.setOption(newValue,true);
            myChart.hideLoading();
          }
        });
        function eConsole(param) {
          if (typeof param.seriesIndex != 'undefined') {
            scope.greet({items:param});
          }
        }
        myChart.on('click', eConsole);
      }
    };
  })
  .directive('echarts1', function() {
    return {
      scope: {
        id: "@",
        legend: "=",
        item: "=",
        data: "="
      },
      restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
      template: '<div style="height:400px;"></div>',
      replace: true,
      link: function($scope, iElm, iAttrs, controller) {
        var option = {
          title: {
            text: '累计用油量',
            left:'center'
          },
          tooltip: {
            trigger: 'axis'
          },
          grid: {
            left: '3%',
            right: '14%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            name:'里程(千米)',
            boundaryGap: false,
            data: $scope.data
          },
          yAxis: {
            type: 'value',
            name:'累计用油量'
          },
          series: [
            {
              name:'用油量',
              type:'line',
              stack: '总量',
              data:[0, 60, 101,160, 190, 210, 240],
              smooth:true,
              areaStyle:{
                normal:{
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 1,
                    colorStops: [{
                      offset: 0, color: 'rgba(117,136,228,0.5)' // 0% 处的颜色
                    },  {
                      offset: 1, color: 'rgba(117,136,228,0.5)' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                  }
                }
              }
            },
            {
              name: '平行于x轴的趋势线',
              type: 'line',

              markLine: {
                data: [{
                  yAxis: 240
                }
                ],
                lineStyle: {
                  normal: {
                    // color: colors[0]
                  }
                }
              }

            }
          ]
        };

        var myChart1;
        // 基于准备好的dom，初始化echarts图表
        if (myChart1 != null && myChart1 != "" && myChart1 != undefined) {
          myChart1.dispose();
        }
        myChart1 = echarts.init(document.getElementById($scope.id));
        // 为echarts对象加载数据
        myChart1.setOption(option);
      }
    };
  })
  .directive('echarts2',function () {
    return {
      scope: {
        id: "@",
        options:'=',
        greet:'&'
      },
      restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
      template: '<div style="height:400px;"></div>',
      replace: true,
      link: function(scope, iElm, iAttrs, controller) {
        var myChart2;
        if (myChart2 != null && myChart2 != "" && myChart2 != undefined) {
          myChart2.dispose();
        }
        myChart2 = echarts.init(document.getElementById(scope.id));
        myChart2.setOption(scope.options);
        scope.$watch('options',function(newValue){
          if(newValue){
            myChart2.setOption(newValue,true);
            myChart2.hideLoading();
          }
        });
        function eConsole(param) {
          if (typeof param.seriesIndex != 'undefined') {
            scope.greet({items:param});
          }
        }
        myChart2.on('click', eConsole);
      }
    };
  });
