import "../../../Styles/Supportform.css";

const SupportForm = () => {
  return (
    <div className="main_Supportform_div frontsupportflex">
      <div className="bachground-purple">
        <h3 className="main_support_h3">
          ENHANCE YOUR CUSTOMER SUPPORT WITH AI SOLUTIONS.
        </h3>
        <p className="main_support_p">
          Fill out the form below, and our team will connect with you to discuss
          how we can tailor our services to meet your unique needs.
        </p>
      </div>
      <div className="main_support_flex_div">
        <div className="main_support_flex_left_div">
          <h3>TRANSFORM YOUR CUSTOMER SUPPORT EXPERIENCE</h3>
          <p>
            Complete the form to learn how our AI solutions can revolutionise
            your customer support and drive your business forward.
          </p>
        </div>
        <div className="main_support_flex_right_div">
          <div className="main_support_flex_right_div_section">
            <input
              className="supportform_input_style"
              placeholder="FIRST NAME"
            />
            <input
              className="supportform_input_style"
              placeholder="LAST NAME"
            />
          </div>
          {/* ---------------------------------------------- */}
          <div className="main_support_flex_right_div_section">
            <input
              className="supportform_input_style"
              placeholder="BUSINESS EMAIL"
            />
            <input className="supportform_input_style" placeholder="PHONE" />
          </div>
          {/* ---------------------------------------------- */}
          <div className="main_support_flex_right_div_section">
            <input
              className="supportform_input_style"
              placeholder="COUNTRY CODE"
            />
            {/* <input
              className="supportform_input_style"
              placeholder="SIZE OF CUSTOMER SERVICE DEPARTMENT"
            /> */}
            <select
              style={{ color: "grey" }}
              className="supportform_input_style"
            >
              <option value="" disabled selected>
                SIZE OF CUSTOMER SERVICE DEPARTMENT
              </option>
              <option value="1-5">1-5</option>
              <option value="6-10">6-10</option>
              <option value="6-10">11-15</option>
              <option value="6-10">16-20</option>
              <option value="6-10">21-25</option>
              <option value="6-10">25+</option>
            </select>
          </div>
          {/* ---------------------------------------------- */}
          <div className="main_support_flex_right_div_section">
            {/* <input className="supportform_input_style" placeholder="YOUR CRM" /> */}
            <select
              style={{ color: "grey" }}
              className="supportform_input_style"
            >
              <option value="" disabled selected>
                YOUR CRM
              </option>
              <option value="option1">Salesforce</option>
              <option value="option2">Zendesk</option>
              <option value="option1">Freshworks</option>
              <option value="option2">Genesys</option>
              <option value="option1">LiveChat</option>
              <option value="option2">LivePerson</option>
              <option value="option1">Giosg</option>
              <option value="option2">Partnership inquiry</option>
              <option value="option1">Kustomer</option>
              <option value="option2">Gorgias</option>
              <option value="option1">Dixa</option>
              <option value="option2">Intercom</option>
              <option value="option1">Cisco</option>
              <option value="option2">ServiceNow</option>
              <option value="option1">Nice</option>
              <option value="option2">Oracle</option>
              <option value="option1">Verint</option>
              <option value="option2">Zoho</option>
              <option value="option1">Eventim</option>
              <option value="option2">SAP</option>
              <option value="option1">LiveAgent</option>
              <option value="option2">Facebook</option>
              <option value="option1">Sunshine</option>
              <option value="option2">ZendeskSupport</option>
              <option value="option1">FreshChat</option>
              <option value="option2">Microsoft</option>
              <option value="option1">SunCo</option>
              <option value="option2">Elisa OC</option>
              <option value="option1">Freshdesk</option>
              <option value="option2">Livechat</option>
              <option value="option1">Novomind</option>
              <option value="option2">Public API</option>
              <option value="option1">Freshsales </option>
              <option value="option2">Hubspot </option>
              <option value="option2">Agile CRM </option>
              <option value="option2">Cratio CRM software </option>
              <option value="option2">Engagebay </option>
              <option value="option2">Pipedrive </option>
              <option value="option2">Insightly </option>
              <option value="option2">Kylas Sales CRM </option>
              <option value="option2">NetSuite </option>
              <option value="option2">SugarCRM </option>
              <option value="option2">LeadSquared </option>{" "}
              <option value="option2">Microsoft Dynamics 365</option>
              <option value="option2">SalesBabu CRM</option>
              <option value="option2">Creatio </option>
              <option value="option2">Maple CRM</option>
              <option value="option2">SalezShark </option>
              <option value="option2">SAP </option>
              <option value="option2">Zendesk Sell </option>
              <option value="option2">ClickUP </option>
              <option value="option2">Solid Performers </option>
              <option value="option2">Apptivo </option>
              <option value="option2">ezeeCRM </option>
              <option value="option2">Monday.com</option>
              <option value="option2">Less annoying </option>
              <option value="option2">Capsule </option>
              <option value="option2">Act! LLC </option>
            </select>
          </div>

          {/* ---------------------------------------------- */}
          <div className="main_support_flex_right_div_section">
            <input
              className="supportform_input_style_message"
              placeholder="YOUR MESSAGE"
            />
          </div>
          {/* ---------------------------------------------- */}
          <div className="main_support_flex_right_div_section">
            <input
              className="supportform_input_style"
              placeholder="HOW DID YOU HEAR ABOUT US?"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportForm;
