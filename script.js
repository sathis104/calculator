            let outputScreen = document.getElementById("output");
            function display(num){
                outputScreen.value += num;
            }
            function Calculate(){
            try{
                outputScreen.value = eval(outputScreen.value);
            }
            catch(err){
                alert("Syntax error")
            }
            }
            function Clear(){
                outputScreen.value=""
            }
            function del(){
                outputScreen.value=outputScreen.value.slice(0,-1)
            }
