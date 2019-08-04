// 为了防止文档在完全加载（就绪）之前运行jQuery代码
$(document).ready(function() {
  $("p.red").css("background-color","red")
  $("p").click(function() {
    $(this).hide()
  })
})