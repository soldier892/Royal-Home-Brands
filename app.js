/*
$('#gModal2').modal({
    backdrop: 'static',
    keyboard: false
  });

  $("#log-fail").hide();
$("#gModal2").modal("show"); */
 


$(document).ready(function(){
	
	/*
    $("#log-btn").click(function(){

        var user = $("#user").val();
        var pass = $("#pass").val();

        if(user=="admin" && pass=="admin")
        {
            $("#gModal2").modal("hide");
        }
        else{
           

            $("#log-fail").show();

        }


    });
*/
    $( "#po" ).selectmenu({
        placeholder:"Purchase Order"
    });
  } );

    var temp = null;
    var initv = true;

    function init(){

        
       
       if(localStorage.getItem("po"))
       {

       var arr = localStorage.getItem("po").split(',');
       }
	   //$("#po").append("<option>Purchase Order ..</option>");
       $.each(arr, function(i,v){

        $("#po").append("<option>"+v+"</option>");

        

       });
        /*
       $('[id^="id"]').each(function(i,e){

            var id = $(this).attr("id");
            document.getElementById(id).readOnly = true;

            



       });
       */
        

    }

    init();

    $( "#po" ).trigger("selectmenuselect");
	
    $( function() {

        
        
       

      $("#po").on("selectmenuselect", function(){
        
        initv=false;
        
        var val = $("#po").val();

       

        

        if(!localStorage.getItem(val))
        {
			var balance = JSON.parse(localStorage.getItem('balance'));
            $('[id^="id2"]').each(function(i,e){
    
               
			   //if(i<6){
				   /*
				   if($('#'+balance[i].item_type).siblings().children('#id2').attr('id')=="id2") {
					
					$('#'+balance[i].item_type).siblings().children('#id2').val(balance[i].bal);
					//$('#'+balance[i].item_type).siblings().children('#id2').prop("readonly", true);
					}
				
					if($('#'+balance[i].item_type).siblings().children('#id3').attr('id')=="id3") {
					
					$('#'+balance[i].item_type).siblings().children('#id3').prop("readonly", true);
					} */
			   //}
			   //else{
				   $(this).val(balance[i].bal);
				    $(this).prop("readonly", true);
				   
			   //}
				
				
                
                //$(this).parent().siblings(".bal").text("0");
                //document.getElementById($(this).attr("id")).readOnly = false;
		
            });
			
			$('[id^="id3"]').each(function(i,e){
    
				   $(this).val(0);
				    $(this).prop("readonly", true);

            });
				
               
    
                //$(this).val(balance[i].bal);
                //$(this).parent().siblings(".bal").text("0");
                //document.getElementById($(this).attr("id")).readOnly = false;
		
        }
        else if(localStorage.getItem(val)) {

            var data = JSON.parse(localStorage.getItem(val));
			
			var balance = JSON.parse(localStorage.getItem('balance'));
			
		
            $.each(data, function(i,v){
				/*	
                var id1 = data[i].id1;
				var id2 = data[i].id2;
				var id3 = data[i].id3;
				var id4 = data[i].id4;
				var id5 = data[i].id5;
				var id6 = data[i].id6;
				var id7 = data[i].id7;
				var id8 = data[i].id8;

                var bal = data[i].bal;
				*/
				var item_type = data[i].item_type;
                
				/*
                $('#'+item_type).siblings().children('#'+id).val(val)
                $('#'+id).parent().siblings(".bal").text(bal);
                $('#'+id).siblings("#forTable").text(val);
				*/
				$('#'+item_type).siblings().children('#id1').val(data[i].id1);
				$('#'+item_type).siblings().children('#id2').val(data[i].id2);
				$('#'+item_type).siblings().children('#id3').val(data[i].id3);
				$('#'+item_type).siblings().children('#id4').val(data[i].id4);
				$('#'+item_type).siblings().children('#id5').val(data[i].id5);
				$('#'+item_type).siblings().children('#id6').val(data[i].id6);
				$('#'+item_type).siblings().children('#id7').val(data[i].id7);
				$('#'+item_type).siblings().children('#id8').val(data[i].id8);
				$('#'+item_type).siblings(".bal").text(data[i].bal);
				
				
				if($('#'+item_type).siblings().children('#id2').attr('id')=="id2") {
					
					$('#'+item_type).siblings().children('#id2').val(balance[i].bal);
					$('#'+item_type).siblings().children('#id2').prop("readonly", true);
				}
				if($('#'+item_type).siblings().children('#id3').attr('id')=="id3") {
					
					//$('#'+item_type).siblings().children('#'+id).val(balance[i%8].bal);
					$('#'+item_type).siblings().children('#id3').prop("readonly", true);
				}
				
				/*
				if($('#'+item_type).siblings().children('#'+id).attr('id')=="id2") {
					
					$('#'+item_type).siblings().children('#'+id).val(balance[i%8].bal);
					$('#'+item_type).siblings().children('#'+id).prop("readonly", true);
				}
				if($('#'+item_type).siblings().children('#'+id).attr('id')=="id3") {
					
					//$('#'+item_type).siblings().children('#'+id).val(balance[i%8].bal);
					$('#'+item_type).siblings().children('#'+id).prop("readonly", true);
				}
				*/
				
            })



        }

        

    

    

          
    
        

      });

   $("#add-po-btn").click(function(){

        var add=null;
        var po = $("#add-po").val();
        
        if(po==""){


            $("#mtext").text("Empty Input");
                $("#mtitle").text("Alert");
                $("#gModal").modal("show");

        }

        else{
        
        if(localStorage.getItem("po"))
        {
        var arr = localStorage.getItem("po").split(',');
        
        $.each(arr, function(i,v){

            if(v==po)
            {
                
                add="false"
                $("#mtext").text("Purchase Order Already Exists");
                $("#mtitle").text("Alert");
                $("#gModal").modal("show");

                return false;
            }

        });
    }
    if(po.includes("-")|| po.includes(".")){

        $("#mtext").text("Invalid Input");
$("#mtitle").text("Alert");
$("#gModal").modal("show");


    }
        else if(add!="false")
        {
        $("#po").append("<option>"+po+"</option>");

        var arr = new Array();

        $("option").each(function(i){
        
           arr.push( $(this).val());
           localStorage.setItem("po", arr)
    
        });

        $("#mtext").text("Purchase Order Added");
        $("#mtitle").text("Alert");
        $("#gModal").modal("show");
		$("#add-po").val("");


        $("#po").selectmenu("refresh");
        }
        
        }
        
   });
	
	
	
	//$('[id^="id1"]').each(function(i,e){
    
		$(".qty").change(function(){
			//alert("id1");
			var id3 = $(this).parent().siblings(3).children('#id3').val($(this).val() - $(this).parent().siblings(3).children('#id2').val());  
		
		});

    //});
	
	//$('[id^="id7"]').each(function(i,e){
		
		$(".issue").change(function(){
			//alert("id7");
			$(this).parent().siblings('.bal').text($(this).parent().siblings(1).children('#id1').val()-$(this).val() - $(this).parent().siblings(3).children('#id8').val());
		});
	//});
	
	//$('[id^="id8"]').each(function(i,e){
		
		$(".waste").change(function(){	
			//alert("id8");
			$(this).parent().siblings('.bal').text($(this).parent().siblings(1).children('#id1').val()-$(this).val() - $(this).parent().siblings(3).children('#id7').val());
		});
	//});
	
	
	/*
	function id1change(element){
		element.parent().siblings(3).children('#id3').val(element.val() - element.parent().siblings(3).children('#id2').val());
	}
	function id7change(element){
			element.parent().siblings('.bal').text(element.parent().siblings(1).children('#id1').val()-element.val() - $(this).parent().siblings(3).children('#id8').val());
	
	}
	function id8change(element){
			element.parent().siblings('.bal').text(element.parent().siblings(1).children('#id1').val()-element.val() - $(this).parent().siblings(3).children('#id7').val());
	
	}
	*/
	
   $("#save").click(function(){

    

    var po = $("#po").val();

    var array = [];
	var array1 = [];
    var save = true;
/*
    $('[id^="id"]').each(function(i,e){


        var id = $(this).attr("id");
        if(document.getElementById(id).readOnly != true && $(this).val()!="")
        {

            

            $("#mtext").text("Unsaved Values");
        $("#mtitle").text("Alert");
        $("#gModal").modal("show");
            save=false;
            return false;

            
        }

    });
        */
        if(save!=false){
       
        /*

        $('[id^="id"]').each(function(i,e){ 
			
                var id = $(this).attr("id"); 
			var val = $(this).val();
			var bal = $(this).parent().siblings(".bal").text();
			var item_type = $(this).parent().siblings(".item_type").attr('id');
			var obj = {po:po,item_type:item_type,id:id, val:val ,bal:bal}
			array.push(obj);
		
			localStorage.setItem(po, JSON.stringify(array));
		
		
		
        $("#mtext").text("Data Saved Locally");
        $("#mtitle").text("Success");
        $("#gModal").modal("show");

    });
	
	*/
		$('[class^="item_type"]').each(function(i,e){ 
					var id = $(this).attr("id"); 
					var id1 = $(this).siblings().children('#id1').val();
					var id2 = $(this).siblings().children('#id2').val();
					var id3 = $(this).siblings().children('#id3').val();
					var id4 = $(this).siblings().children('#id4').val();
					var id5 = $(this).siblings().children('#id5').val();
					var id6 = $(this).siblings().children('#id6').val();
					var id7 = $(this).siblings().children('#id7').val();
					var id8 = $(this).siblings().children('#id8').val();
			//var val = $(this).val();
			var bal = $(this).siblings(".bal").text();
			//var item_type = $(this).parent().siblings(".item_type").attr('id');
			var obj = {po:po,item_type:id,id1:id1, id2:id2, id3:id3, id4:id4, id5:id5, id6:id7, id8:id8,bal:bal}
			array.push(obj);
			localStorage.setItem(po, JSON.stringify(array));
			
			var obj1 = {item_type:id,bal:bal}
			array1.push(obj1);
			
			localStorage.setItem('balance', JSON.stringify(array1));
			
			
			$("#mtext").text("Data Saved Locally");
        $("#mtitle").text("Success");
        $("#gModal").modal("show");
			

		});
		
        
        }
        
    

        
    
    
        
        
        

   });

   
    


$("[id^='tick']").each(function(i){

    

   
$(this).click(function(){
    var id = $(this).attr('id');
    var rid = id.replace("tick","");

 if (document.getElementById('id'+rid).readOnly == true && initv==false)
{
    
    $("#mtext").text("Value Already Saved, Please Edit First");
    $("#mtitle").text("Alert");
    $("#gModal").modal("show");

}

  else  if(initv!=true){

    
    

   

    $('[id=id'+rid+']').each(function(i,e){

       
        var val = $(this).val();

        if(val.includes("-")|| val.includes(".")){

            $("#mtext").text("Invalid Input");
    $("#mtitle").text("Alert");
    $("#gModal").modal("show");


        }

        else if(val=="")
        {
            $("#mtext").text("Empty Input");
            $("#mtitle").text("Alert");
            $("#gModal").modal("show");

        }

        else{
        $(this).siblings("#forTable").text(val);
        var id = $(this).attr('id');

       
        
       
       
        
        
       
       
    

       
       

        
            
        

        var id = $(this).attr('id');
        if($(this).hasClass("qty")){

            var val2 = +($(this).parent().siblings(".bal").text());

            if(temp==null)
            {
                
                

                $(this).parent().siblings(".bal").text(parseInt(val,10)+val2);
            }


            else if(temp!=null && temp<val)
            {
                var test = val-temp;
                var val2 = +($(this).parent().siblings(".bal").text());

                $(this).parent().siblings(".bal").text(parseInt(test,10)+val2);

            }

            else if(temp!=null && temp>val){

                var test = temp-val;
                var val2 = +($(this).parent().siblings(".bal").text());

                $(this).parent().siblings(".bal").text(val2-parseInt(test,10));


            }
            
            
            temp=null;
             
           
        }

        else if($(this).hasClass("qi")){

            var bal = +($(this).parent().siblings(".bal").text());
            
            if(temp==null){
                $(this).parent().siblings(".bal").text(bal-val);
            }

            else if(temp!=null && temp<val){
                $(this).parent().siblings(".bal").text((temp-val)+bal);
            }

            else if(temp!=null && temp>val){
                $(this).parent().siblings(".bal").text(bal-(val-temp));
            }
            
            temp=null;
        }

        else if($(this).hasClass("w")){

            var bal = +($(this).parent().siblings(".bal").text());
            
            if(temp==null){
                $(this).parent().siblings(".bal").text(bal-val);
            }

            else if(temp!=null && temp<val){
                $(this).parent().siblings(".bal").text((temp-val)+bal);
            }

            else if(temp!=null && temp>val){
                $(this).parent().siblings(".bal").text(bal-(val-temp));
            }
            
            temp=null;

            
        }

        else  {


         

        }

        

      

       
        document.getElementById(id).readOnly = true;

       

        
    }

       

    

            
        

        

    });

}



else{
    $("#mtext").text("Select a Purchase Order First");
    $("#mtitle").text("Alert");
    $("#gModal").modal("show");
}

});

    

});

$("[id^='id']").each(function(i){

    
        
    
      


});




$("[id^='eid']").each(function(i){

        
      $(this).click(function(){


        
        var id = $(this).siblings(":input").attr("id");

        

        if(document.getElementById(id).readOnly == false)
        {
            $(this).siblings(":input").focus();
        }

        else{

        if(initv!=true){

            $(this).siblings(":input").focus();
          
        temp = $(this).siblings(":input").val();
        
          var eid = $(this).attr('id');
          
          var id = eid.substr(1);
          
          
          document.getElementById(id).readOnly = false;
        }

        else{
            $("#mtext").text("Select a Purchase Order First");
            $("#mtitle").text("Alert");
            $("#gModal").modal("show");
        }
    }

      });    
        


});











})

