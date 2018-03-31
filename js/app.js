; (function () {
	const todos = [
		{
			id: 1,
			title: "吃饭",
			done: true
		},
		{
			id: 2,
			title: "吃饭1",
			done: true
		},
		{
			id: 3,
			title: "吃饭2",
			done: false
		},
		{
			id: 4,
			title: "吃饭3",
			done: true,
			
		}
	];
	new Vue({
		el: "#todoapp",
		data: {
			todos,
			inputText:"",
			currentEdit:null,
			backTitle:""
		},
		methods: {
			add: function (e) {
				const {inputText,todos}=this
				// console.log(this.inputText)
				if(inputText.trim().length==0){
					return 
				}
				const lastItem=todos[todos.length-1]
				const id=lastItem ? lastItem.id+1:1
				this.todos.push({
					id:id,
					title:inputText,
					done:false,
					// currentEdit:null
				})
				this.inputText=""
			},
			removeTodo:function(index){
				this.todos.splice(index,1)
			},
			getEditing:function(item){
				// console.log(111)
				this.currentEdit=item
				this.backTitle=item.title
			},
			saveEdit:function(item,index){
				// console.log(this.currentEdit)
				if(item.title.trim().length==0){
					this.todos.splice(index,1)
				}else{
					this.currentEdit=null
				}
			},
			// 取消编辑，就失去了焦点
			cancelEdit:function(){
				// console.log(111)
				this.currentEdit.title=this.backTitle
				this.currentEdit=null
				
			}
		}
	})
})();
