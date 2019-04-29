
/*jQuery写法 
$('.mod-tab .tab').on('click', function(){
    console.log(this)
    // 选项卡操作 1234
    $(this).addClass('active')
        .siblings()
        .removeClass('active')
    //对应的内容操作
    $(this).parents('.mod-tab')
    // 查找符合选择器的后代元素
    .find('.panel')
    // 所有E中的元素
    .eq($(this).index())
    .addClass('active')
    .siblings()
    .removeClass('active')
  })
  */
//  原生js写法
document.querySelectorAll('.mod-tab .tab').forEach(function(node){
    node.addEventListener('click',function(){
        // console.log(this)
        var index 
        this.parentElement.querySelectorAll('.tab').forEach(function(tab, idx){
            tab.classList.remove('active');
            if(node === tab){
                index = idx ;
            }
        })
        this.classList.add('active');
        this.parentElement.nextElementSibling.querySelectorAll('.panel').forEach(function(panel){
            panel.classList.remove('active');
        })
        this.parentElement.nextElementSibling.querySelectorAll('.panel')[index].classList.add('active')

    })
})