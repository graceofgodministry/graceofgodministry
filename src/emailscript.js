function sendEmail(params){
    var tempParams ={
        from_name: document.getElementById("name").value,
        to_name: document.getElementById("email").value,
        phone: document.getElementById("number").value,
        message: document.getElementById("message").value,


    };

    emailjs.send("service_7ja2ipu", "template_ifpjsbk", tempParams).then(function(res){
        // ClearFields();
    })
}


