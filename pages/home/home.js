Page({
  data:{
    lists:[
      {id:1,text:'健康大户晒课联合开发客户交首付西葫芦',finished:true},
      {id:1,text:'护卫了还是对落户状况需回欧洲',finished:true},
      {id:1,text:'会哦的时候色鱼和熊掌见客户',finished:true},
      {id:1,text:'框架下课件登记细则',finished:false},
      {id:1,text:'时间想想就看着看着',finished:false},
      {id:1,text:'看到了自登记卡兹',finished:false},
      {id:1,text:'健康大户晒课联合开发客户交首付西葫芦',finished:true},
      {id:1,text:'护卫了还是对落户状况需回欧洲',finished:true},
      {id:1,text:'会哦的时候色鱼和熊掌见客户',finished:true},
      {id:1,text:'框架下课件登记细则',finished:false},
      {id:1,text:'时间想想就看着看着',finished:false},
      {id:1,text:'看到了自登记卡兹',finished:false},
    ],visibleConfirm:false
  },
  confirm(event){
console.log(event.detail)
  },
  confirmCreate(event){
let content = event.detail
if(content){
  let todo = [{id:this.data.lists.length+1,text:content,finished:false}]
  this.data.lists = todo.concat(this.data.lists)
  this.setData({ lists:this.data.lists })
  this.hidenConfirm()
}
  },
  destroyTodo(event){
let index = event.currentTarget.dataset.index
this.data.lists[index].finished = true
this.setData({ lists: this.data.lists})
  },
  showConfirm(){
    this.setData({visibleConfirm:true})
  },
  hidenConfirm(){
    this.setData({visibleConfirm:false})
  }
})