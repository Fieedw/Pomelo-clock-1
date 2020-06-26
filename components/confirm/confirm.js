Component({
  properties:{
    visible:{
type: Boolean,
value: false,
    },
    placeholder:{
      type: String,
      value:""
    }
  },
  methods: {
    confirm(){
      this.triggerEvent('confirm',this.data.value)
    },
    cancel(){
this.triggerEvent('cancel','取消')
    },
    watchValue(event){
this.data.value = event.detail.value
    }
  }
})