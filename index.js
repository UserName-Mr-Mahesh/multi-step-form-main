function Info(){
    let name=document.getElementById("name");
    let email=document.getElementById("email");
    let ph=document.getElementById("phoneNumberInput");
    if(name.value!="" && email.value!="" && ph.value!=""){
        let info=document.getElementById("info");
        info.style.display="none";
        let plan=document.getElementById("plan");
        plan.style.display="block";
        let s1=document.getElementById("s1");
        s1.style.backgroundColor="transparent";
        s1.style.color="white";
        let s2=document.getElementById("s2");
        s2.style.backgroundColor="white";
        s2.style.color="black";
    }
    else{
        let span=document.getElementById("span");
        span.innerHTML="enter all fields";
        span.style.color="red";
    }
}
function InfoBack(){
    let info=document.getElementById("info");
    info.style.display="block";
    let plan=document.getElementById("plan");
    plan.style.display="none";
    let s1=document.getElementById("s1");
    s1.style.backgroundColor="white";
    s1.style.color="black";
    let s2=document.getElementById("s2");
    s2.style.backgroundColor="transparent";
    s2.style.color="white";
}


function Plan(){
    let servicea = document.getElementById("service-a");
    if(servicea.innerHTML!=""){
        let ons=document.getElementById("ons");
        ons.style.display="block";
        let plan=document.getElementById("plan");
        plan.style.display="none";
        let s2=document.getElementById("s2");
        s2.style.backgroundColor="transparent";
        s2.style.color="white";
        let s3=document.getElementById("s3");
        s3.style.backgroundColor="white";
        s3.style.color="black"
        let arcade=document.getElementById("Arcade");
        let op11=document.getElementById("op11");    
        let op22=document.getElementById("op22");    
        let op33=document.getElementById("op33");
        if(arcade.innerHTML=="$9/mo"){
            op11.innerHTML="+$1/mo";
            op22.innerHTML="+$2/mo";
            op33.innerHTML="+$2/mo";
        }
        else{
            op11.innerHTML="+$10/yr";
            op22.innerHTML="+$20/yr";
            op33.innerHTML="+$20/yr";
        }
    }
    else{
        let msg=document.getElementById("msg");
        msg.innerHTML="Please Select any one Option";
        msg.style.color="red";
        msg.style.position="relative";
        msg.style.top="45px";
    }
}
function PlanBack(){

    let ons=document.getElementById("ons");
    ons.style.display="none";
    let plan=document.getElementById("plan");
    plan.style.display="block";
    let s2=document.getElementById("s2");
    s2.style.backgroundColor="white";
    s2.style.color="black";
    let s3=document.getElementById("s3");
    s3.style.backgroundColor="transparent";
    s3.style.color="white"
    let up=document.getElementById("up");
    up.style.display="none";
    let s4=document.getElementById("s4");
    s4.style.backgroundColor="transparent";
    s4.style.color="white";
}

function Ons(){
    let ip1=document.getElementById("ip1");
    let ip2=document.getElementById("ip2");
    let ip3=document.getElementById("ip3");

    if(ip1.innerHTML!="" || ip2.innerHTML!="" || ip3.innerHTML!="" ){
        let ons=document.getElementById("ons");
        ons.style.display="none";
        let up=document.getElementById("up");
        up.style.display="block";
        let s3=document.getElementById("s3");
        s3.style.backgroundColor="transparent";
        s3.style.color="white";
        let s4=document.getElementById("s4");
        s4.style.backgroundColor="white";
        s4.style.color="black";
        let serviceb=document.getElementById("service-b");
        let ip11=document.getElementById("ip11");
        let ip22=document.getElementById("ip22");
        let ip33=document.getElementById("ip33");
        let match1 = serviceb.innerHTML.match(/\d+/);
        let match2= ip11.innerHTML.match(/\d+/);
        let match3 = ip22.innerHTML.match(/\d+/);
        let match4= ip33.innerHTML.match(/\d+/);
        let result=document.getElementById("result")
        let per=document.getElementById("per");
        let arcade=document.getElementById("Arcade");
        
        if(arcade.innerHTML=="$9/mo"){
            result.innerHTML= (match1 ? parseInt(match1[0], 10) : 0)+(match2 ? parseInt(match2[0], 10) : 0)+(match3 ? parseInt(match3[0], 10) : 0)+(match4 ? parseInt(match4[0], 10) : 0)+"/mo";
            per.innerHTML="month";   
        }else{
            result.innerHTML= (match1 ? parseInt(match1[0], 10) : 0)+(match2 ? parseInt(match2[0], 10) : 0)+(match3 ? parseInt(match3[0], 10) : 0)+(match4 ? parseInt(match4[0], 10) : 0)+"/yr";
            per.innerHTML="year";
        }
    }else{
        let alert=document.getElementById("alert");
        alert.innerHTML="Please Select any one Option";
        alert.style.color="red";
        alert.style.position="relative";
        alert.style.top="45px";
    }
    
}
function op1(){
    let op1=document.getElementById("op1");
    let ip1=document.getElementById("ip1");
    ip1.innerHTML=op1.innerHTML;
    let op11=document.getElementById("op11");
    let ip11=document.getElementById("ip11");
    ip11.innerHTML=op11.innerHTML;
}
function op2(){
    let op2=document.getElementById("op2");
    let ip2=document.getElementById("ip2");
    ip2.innerHTML=op2.innerHTML;
    let op22=document.getElementById("op22");
    let ip22=document.getElementById("ip22");
    ip22.innerHTML=op22.innerHTML;
}
function op3(){
    let op3=document.getElementById("op3");
    let ip3=document.getElementById("ip3");
    ip3.innerHTML=op3.innerHTML;
    let op33=document.getElementById("op33");
    let ip33=document.getElementById("ip33");
    ip33.innerHTML=op33.innerHTML;
}
function OnsBack(){
    let ons=document.getElementById("ons");
    ons.style.display="block";
    let up=document.getElementById("up");
    up.style.display="none";
    let s3=document.getElementById("s3");
    s3.style.backgroundColor="white";
    s3.style.color="black";
    let s4=document.getElementById("s4");
    s4.style.backgroundColor="transparent";
    s4.style.color="white";
}

function Up(){
    let up=document.getElementById("up");
    up.style.display="none";
    let thanks=document.getElementById("thanks");
    thanks.style.display="block";
}

function arcade(){
    let arcade=document.getElementById("Arcade");
    let serviceb=document.getElementById("service-b");
    let servicea = document.getElementById("service-a");
    servicea.innerHTML="Arcade";
    if(arcade.innerHTML=="$9/mo"){
        serviceb.innerHTML="$9/mo"
    }
    else{
        serviceb.innerHTML="$90/yr"
    }
}
function advanced(){
    let arcade=document.getElementById("Arcade");
    let serviceb=document.getElementById("service-b");
    let servicea = document.getElementById("service-a");
    servicea.innerHTML="Advanced";
    if(arcade.innerHTML=="$9/mo"){
        serviceb.innerHTML="$12/mo"
    }
    else{
        serviceb.innerHTML="$120/yr"
    }
}
function pro(){
    let arcade=document.getElementById("Arcade");
    let serviceb=document.getElementById("service-b");
    let servicea = document.getElementById("service-a");
    servicea.innerHTML="Pro";
    if(arcade.innerHTML=="$9/mo"){
        serviceb.innerHTML="$15/mo"
    }
    else{
        serviceb.innerHTML="$150/yr"
    }
}
function Change(){
    let change=document.getElementById("change1");
    let arcade=document.getElementById("Arcade");
    let advanced=document.getElementById("Advanced");
    let pro=document.getElementById("Pro");
    if(change.style.right==""){
        change.style.right="0px";
        change.style.left="";
        arcade.innerHTML="$90/yr<br>2 months free";
        advanced.innerHTML="$120/yr<br>2 months free";
        pro.innerHTML="$150/yr<br>2 months free";
    }
    else{   
        change.style.left="0px";
        change.style.right="";
        arcade.innerText="$9/mo";
        advanced.innerText="$12/mo";
        pro.innerText="$15/mo";
    }
}