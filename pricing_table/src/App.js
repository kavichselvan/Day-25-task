import "./App.css";
//Fonts-family imported...
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Kalam:wght@300&display=swap');
</style>;

//------------------------------------------------------------------------------

function App() {

  //Array of objects data to pass arguments
  //to the invoked function...
  const data = [
    {
      header: "FREE",
      sub_header: "$0/month",
      list_1: "✅Single User",
      list_2: "✅5GB Storage",
      list_3: "✅Unlimited Public Projects",
      list_4: "✅Community Access",
      list_5: <option disabled>❌Unlimited Private Projects</option>,
      list_6: <option disabled>❌Dedicated Phone Support</option>,
      list_7: <option disabled>❌Free Subdomain</option>,
      list_8: <option disabled>❌Monthly Status Reports</option>,
    },
    {
      header: "PLUS",
      sub_header: "$9/month",
      list_1: <b>✅5 User</b>,
      list_2: "✅50GB Storage",
      list_3: "✅Unlimited Public Projects",
      list_4: "✅Community Access",
      list_5: "✅Unlimited Private Projects",
      list_6: "✅Dedicated Phone Support",
      list_7: "✅Free Subdomain",
      list_8: <option disabled>❌Monthly Status Reports</option>,
    },
    {
      header: "PRO",
      sub_header: "$49/month",
      list_1: <b>✅Unlimited User</b>,
      list_2: "✅150GB Storage",
      list_3: "✅Unlimited Public Projects",
      list_4: "✅Community Access",
      list_5: "✅Unlimited Private Projects",
      list_6: "✅Dedicated Phone Support",
      list_7: (
        <b>
          ✅Unlimited <span>Free Subdomain</span>
        </b>
      ),
      list_8: "✅Monthly Status Reports",
    },
  ];

  return (
    <div className="App">
      {/* Title of the cards.. */}
      <h4 className="animate-charcter" id="title">💲PRICING TABLE</h4>
      {/* map method is used to get the data  dynamically
      from the array of objects... */}
      {data.map((item, index) => ( 
        // Function invoked
        <PriceTable
          key={index}
          title={item.header}
          sub_title={item.sub_header}
          list_1={item.list_1}
          list_2={item.list_2}
          list_3={item.list_3}
          list_4={item.list_4}
          list_5={item.list_5}
          list_6={item.list_6}
          list_7={item.list_7}
          list_8={item.list_8}
        />
      ))}
      ;
    </div>
  );
}
//------------------------------------------------------------------------------

export default App;

//------------------------------------------------------------------------------
//?PriceTable functional components:-

function PriceTable(props) {
  return (
    <div className="container">
      <div className="cards">
        <p className="headers">{props.title}</p>
        <p className="sub-headers">{props.sub_title}</p>
        <hr></hr>

        <ul>
          <li>{props.list_1}</li>
          <li>{props.list_2}</li>
          <li>{props.list_3}</li>
          <li>{props.list_4}</li>
          <li>{props.list_5}</li>
          <li>{props.list_6}</li>
          <li>{props.list_7}</li>
          <li>{props.list_8}</li>
        </ul>

        <div>
          <button className="footer-btn" type="button">
            <b>BUTTON</b>
          </button>
        </div>
      </div>
    </div>
  );
}

//------------------------------------------------------------------------------