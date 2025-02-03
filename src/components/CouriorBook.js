import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
export default function CuriorBook() {
  var [pricee, setpricee] = useState("");
  var [quantityy, setquantity] = useState("");
  var [s_name, sets_name] = useState("");
  var [ss_address,setaddress]=useState("");
  var [ss_pincode,setpincode]=useState("");
  var [ss_mobileno,setmobileno]=useState("");
  var [ss_email,setemail]=useState("");
  var [ss_city,setcity]=useState("");
  var [rr_name, setsrr_name] = useState("");
  var [rr_address,setrraddress]=useState("");
  var [rr_pincode,setrrpincode]=useState("");
  var [rr_mobileno,setrrmobileno]=useState("");
  var [rr_email,setrremail]=useState("");
  var [rr_city,setrrcity]=useState("");
  var [ss_item,setitem]=useState("");
  var [bdate,setdate]=useState("");
  var [btime,settime]=useState("");

  var kelometer = useRef();
  var quantity = useRef();
  var sanderName = useRef();
  var s_address=useRef();
  var  s_pincode=useRef();
  var s_mobileno=useRef();
  var s_email=useRef();
  var s_city=useRef();
  var s_item=useRef();
  var recieverName = useRef();
  var r_address=useRef();
  var r_pincode=useRef();
  var r_mobileno=useRef();
  var r_email=useRef();
  var r_city=useRef();
  var date=useRef();
  var time=useRef();

  const navigate = useNavigate();

  function f1(event) {
    event.preventDefault();
    var distancevalue = parseInt(kelometer.current.value, 10);
    var quantityvalue = parseInt(quantity.current.value, 10);
    var sendername = sanderName.current.value;
    var senderaddress=s_address.current.value;
    var senderpincode=s_pincode.current.value;
    var sendermobileno=s_mobileno.current.value;
    var senderemail=s_email.current.value;
    var sendercity=s_city.current.value;
    var recievername = recieverName.current.value;
    var recieveraddress=r_address.current.value;
    var recieverpincode=r_pincode.current.value;
    var recievermobileno=r_mobileno.current.value;
    var recieveremail=r_email.current.value;
    var recievercity=r_city.current.value;
    var senderitem=s_item.current.value;
    var ddate=date.current.value;
    var ttime=time.current.value;




    if (!isNaN(distancevalue) && !isNaN(quantityvalue)) {
      var price = distancevalue * quantityvalue * 8;
      setpricee(price);
      setquantity(quantityvalue);
      sets_name(sendername);
      setaddress(senderaddress);
      setpincode(senderpincode);
      setmobileno(sendermobileno);
      setemail(senderemail);
      setcity(sendercity);
      setsrr_name(recievername);
      setrraddress(recieveraddress);
      setrrpincode(recieverpincode);
      setrrmobileno(recievermobileno);
      setrremail(recieveremail);
      setrrcity(recievercity);
      setitem(senderitem);
      setdate(ddate);
      settime(ttime);




    } else {
      alert("please enter valid data");
    }
  }

  function handleReset() {
    setpricee("");
    setquantity("");
    sets_name("");
    kelometer.current.value = "";
    quantity.current.value = "";
    sanderName.current.value = "";
  }

  function Gotobill() {
    navigate("/bill", {
      state: { Sender_name: s_name, quantity: quantityy, price: pricee ,
              sender_add:ss_address,sender_pinc:ss_pincode,sender_mobile:ss_mobileno,
              sender_email:ss_email,sender_city:ss_city,sender_item:ss_item,bookingdate:bdate,
              bookingtime:btime,

              reciever_name: rr_name, 
              reciever_add:rr_address,reciever_pinc:rr_pincode,reciever_mobile:rr_mobileno,
              reciever_email:rr_email,reciever_city:rr_city
      },
    });
  }

  return (
    <div className="row courierbookrow">
    <div className="container ok">
      <div className="row" id="mirror">
        <h3 id="title">CUSTOMER REGISTRATION FORM</h3>
        <h4 id="title">CREATE PICKUP REQUEST</h4>
        <hr />
        <form id="cform">
          <table id="tabl" align="center" cellPadding={6}>
            <thead id="tablehead">
              <tr id="tablerow">
                <th id="headcoloum" colSpan={2}>
                  SENDER
                </th>
                <th colSpan={2}>RECEIVER</th>
              </tr>
            </thead>
            <tbody id="tablebody">
              <tr className="tbodyrowss">
                <td id="tdataname">Name</td>
                <td>
                  <input id="inputt"
                    type="text"
                    placeholder="please enter name"
                    ref={sanderName}
                  />
                </td>
                <td>Name</td>
                <td>
                  <input id="inputt" type="text" placeholder="please enter name"
                  ref={recieverName}
                  />
                </td>
              </tr>

              <tr className="tbodyrowss">
                <td>Address</td>
                <td>
                  <textarea id="inputt" ref={s_address}></textarea>
                </td>
                <td>Address</td>
                <td>
                  <textarea id="inputt" ref={r_address}></textarea>
                </td>
              </tr>
              <tr className="tbodyrowss">
                <td>Pin code</td>
                <td>
                  <input ref={s_pincode} id="inputt" type="Number" />
                </td>
                <td>Pin code</td>
                <td>
                  <input ref={r_pincode} id="inputt" type="Number" />
                </td>
              </tr>
              <tr className="tbodyrowss">
                <td>Mobile No:</td>
                <td>
                  <input ref={s_mobileno} id="inputt" type="Number" />
                </td>
                <td>Mobile No:</td>
                <td>
                  <input ref={r_mobileno} id="inputt" type="Number" />
                </td>
              </tr>
              <tr className="tbodyrowss">
                <td>Email</td>
                <td>
                  <input ref={s_email} id="inputt" type="email" />
                </td>
                <td>Email</td>
                <td>
                  <input ref={r_email} id="inputt" type="email" />
                </td>
              </tr>
              <tr className="tbodyrowss">
                <td>City :</td>
                <td>
                  {" "}
                  <select ref={s_city} id="inputt">
                    <option>Select...</option>
                    <option Value="Mumbai">Mumbai</option>
                    <option value="Pune">Pune</option>
                    <option value="Nashik">Nashik</option>
                    <option value="Goa">Goa</option>
                  </select>
                </td>
                <td>City :</td>
                <td>
                  {" "}
                  <select ref={r_city} id="inputt">
                    <option>Select...</option>
                    <option Value="Mumbai">Mumbai</option>
                    <option value="Pune">Pune</option>
                    <option value="Nashik">Nashik</option>
                    <option value="Goa">Goa</option>
                  </select>
                </td>
              </tr>
              <tr className="tbodyrowss">
                <td>Date</td>
                <td>
                  <input ref={date} id="inputt" type="Date" />
                </td>
                <td>Time</td>
                <td>
                  <input ref={time} id="inputt" type="Time" />
                </td>
              </tr>

              <tr className="tbodyrowss">
                <td>Distance</td>
                <td>
                  <select id="inputt" ref={kelometer}>
                    <option value="10">1-10km</option>
                    <option value="20">11-20km</option>
                    <option value="30">21-30km</option>
                    <option value="40">31-40km</option>
                    <option value="50">41-50km</option>
                    <option value="60">51-60km</option>
                    <option value="70">61-70km</option>
                    <option value="80">71-80km</option>
                    <option value="90">81-90km</option>
                    <option value="100">91-100km</option>
                    <option value="110">101-110km</option>
                  </select>
                </td>
                <td>Item</td>
                <td>
                  <input ref={s_item} id="inputt" type="text" />
                </td>
              </tr>
              <tr className="tbodyrowss">
                <td>Enter Quantity</td>
                <td>
                  <input id="inputt" type="Number" ref={quantity} />
                </td>
                <td>Price</td>
                <td>
                  <input id="inputt" type="Number" value={pricee} readOnly />
                </td>
              </tr>
              <tr className="tbodyrowss">
                <td id="lastrow1" colSpan={4}>
                  <button id="lastrow" type="button" onClick={f1}>
                    Calculate Price
                  </button>
                </td>
              </tr>
              <tr className="tbodyrowss">
                <td id="lastbtn11" colSpan={2}>
                  {" "}
                  <button id="lastbtn1" type="button" onClick={Gotobill}>
                    Submit
                  </button>
                </td>
                <td id="lastbtn22" colSpan={2}>
                  <button id="lastbtn2" type="reset" onClick={handleReset}>
                    Reset
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
    </div>
  );
}



