function clk(){
    new Audio('Click.mp3').play();
    // h1=document.getElementById('hr').value
    m1=document.getElementById('min').value
    s1=document.getElementById('sec').value
    x=document.getElementById('am_pm').value
    // console.log(x)
    if(x=='pm'){
        if(document.getElementById('hr').value=='12'){
            h1=='12';
        }
        else{
        h1=parseInt(document.getElementById('hr').value)+12;
        // console.log(h1)
        }
    }
    else if(x=='am'){
        // h1=document.getElementById('hr').value;
        if(document.getElementById('hr').value=='12'){
            h1='0'
        }
        else{
            h1=document.getElementById('hr').value;
        }
    }
    else{
        h1=document.getElementById('hr').value;
    }
    // console.log(h1)
    // console.log(m1)
    // console.log(s1)
    // return h1,m1,s1;
    document.getElementsByTagName('body')[0].classList.toggle('change');
}
setInterval(() => {
    d=new Date;
    h=d.getHours();
    m=d.getMinutes();
    s=d.getSeconds();
    
    sRotation=6*s;
    mRotation=(6*m)+(0.1*s);
    hRotation=(30*h)+(0.5*m)+(0.0083333*s);

    document.getElementById('second').style.transform=`rotate(${sRotation}deg)`;
    document.getElementById('minute').style.transform=`rotate(${mRotation}deg)`;
    document.getElementById('hour').style.transform=`rotate(${hRotation}deg)`;

    // let clk=new Audio('Click.mp3');
    // clk.play();
    // new Audio('Click.mp3').play();
    // console.log(s);
    // console.log(h);
    // console.log(d)

    // function clk(){
    //     h1=document.getElementById('hr').value
    //     console.log(h1)
    // }

    
    // var h1=document.getElementById('hr').value
    // var m1=document.getElementById('min').value
    // var s1=document.getElementById('sec').value
    document.getElementById('btn').setAttribute('onclick','clk()')
    // clk();
    // console.log(h1)
    // clk(h1);
    // clk(m1);
    // clk(s1);
    if(h==h1 && m==m1 && s==s1){
        new Audio('Ring.mp3').play();
        // console.log(h)
    }
}, 1000);

// function clk(){
//     h1=document.getElementById('hr').value
// console.log(h1)
// }
