// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.


$("#pdf-btn").click(function(){

if(initv==true){
  $("#mtext").text("Select a Purchase Order First");
  $("#mtitle").text("Alert");
  $("#gModal").modal("show");
}

else{

    var doc = new jsPDF()

doc.setFontSize(12);
doc.text('Royal Home Brands', 80, 10)
doc.setFontSize(8);
doc.text('Purchase Order #'+ $("#po").val(), 85, 20)

doc.setFontSize(10);
doc.setFontType('bold')
doc.text("Packaging", 15,35);

doc.autoTable({ html: '#pack-tb', startY: 40})




    window.postMessage({
        myTypeField: 'Open Window',
        pdf:doc.output("datauri").replace("data:application/pdf;base64,",""),
        po: $("#po").val()
        
      });

    
    }  
    
    
    });
