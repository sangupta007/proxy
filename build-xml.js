const fs = require('fs');
const uuidv1 = require('uuid/v1');

(function(){
    var d = new Date();
    var ts = d.toISOString();    
    let uuidStr = "ICI"+ uuidv1().replace(/-/g, "");
    let xmlStr = `<upi:ReqHbt xmlns:upi="http://npci.org/upi/schema/"><Head ver="1.0" ts="${ts}" orgId="400011" msgId="${uuidStr}"/><Txn id="${uuidStr}" note="taxi-bill" refId="${uuidStr}" custRef="806711014630" refUrl="https://mystar.com/orderid" ts="${ts}" type="PAY"></Txn><HbtMsg type="EODE" value="${ts}"/></upi:ReqHbt>`;
    
    console.log(xmlStr);
    fs.writeFileSync(`C:\\Users\\384041\\Desktop\\nodebook\\proxy\\sign-java\\sign\\src\\ReqHbt.xml`, xmlStr);
    fs.writeFileSync(`C:\\Users\\384041\\Desktop\\nodebook\\proxy\\sign-java\\sign\\src\\id.txt`, uuidStr);
    // fs.writeFileSync(`C:\\Users\\384041\\Desktop\\nodebook\\proxy\\sign-java\\sign\\src\\req-hbt.xml`, xmlStr);
})()