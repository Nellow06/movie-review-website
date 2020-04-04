$(function(){
	$('.comment').click(function(e){
		// console.log("------------------")
		const target = $(this)
		const commentId = target.data('cid')
		const toId = target.data('tid')
		
		if($('#toId').length>0){
			$('#toId').val(toId)
		}else{
			$('<input>').attr({
				type: 'hidden',
				name: 'comment[tid]',
				id: 'toId',
				value: toId
			}).appendTo('#commentForm')
		}

		if($('#commentId').length>0){
			$('#commentId').val(commentId)
		}else{
			$('<input>').attr({
				type: 'hidden',
				name: 'comment[cid]',
				id: 'commentId',
				value: commentId
			}).appendTo('#commentForm')
		}
	})
})