import { useState } from "react"
function Quiz(){

const[toggle, setToggle]=useState(false)
// const[toggle2, setToggle2]=useState(false)


  const [formValues, setFormValues] = useState({
    emergency: '',
    budget: '',
    checkingAccount: '',
    allocating: '',
    creditScore: '',
    IRAcontributionLIMIT: '',
    financialEmpowerment: ''
  });


  const handleSubmission = (event) => {
    event.preventDefault();
    setToggle(true)
    // Process the form data as needed
    console.log('Form values:', formValues);
  };



  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value
    }));
  };

  return (
    <div className="cardContact">
<h2>Financial Literacy Quiz for A New Yorker</h2>
      <form onSubmit={handleSubmission}>
        <fieldset className="easyQuestions">
          <legend>
            What percentage of your income should you aim to save each month for
            emergencies and future goals?:
          </legend>

          <div>
            <input
              type="radio"
              id="5percent"
              name="emergency"
              value="5percent"
              onChange={handleChange}

            ></input>
            <label htmlFor="5percent">5%</label>
          </div>

          <div>
            <input
              type="radio"
              id="10percent"
              name="emergency"
              value="10percent"
              onChange={handleChange}

            ></input>
            <label htmlFor="10percent">10%</label>
          </div>

          <div>
            <input
              type="radio"
              id="20percent"
              name="emergency"
              value="correct"
              onChange={handleChange}

            ></input>
            <label htmlFor="20percent">20%</label>
          </div>
          <div>
            <input
              type="radio"
              id="Nopercent"
              name="emergency"
              value="Nopercent"
              onChange={handleChange}

            ></input>
            <label htmlFor="Nopercent">
              It's not necessary to save money regularly
            </label>
          </div>
        </fieldset>
        {toggle ? <div>{formValues.emergency==="correct" ? <p>✅ ANSWER: 20%</p>: <p>❌ ANSWER: 20%</p>}</div>: <p>Please Answer Questions to See Results</p>}

        {/* /////////////////////////////////////////////////////////////////////// */}

        <fieldset className="easyQuestions">
          <legend>What is a budget?</legend>

          <div>
            <input type="radio" id="plan" name="budget" value="correct" onChange={handleChange}
></input>
            <label htmlFor="plan">A plan for spending and saving money</label>
          </div>

          <div>
            <input type="radio" id="loan" name="budget" onChange={handleChange}
 value="loan"></input>
            <label htmlFor="loan">A type of loan from a bank</label>
          </div>

          <div>
            <input
              type="radio"
              id="docRequired"
              name="budget"
              value="docRequired"
              onChange={handleChange}

            ></input>
            <label htmlFor="docRequired">A document required for tax filing</label>
          </div>
          <div>
            <input
              type="radio"
              id="lowIncome"
              name="budget"
              value="lowIncome"
              onChange={handleChange}

            ></input>
            <label htmlFor="lowIncome">
              A form of government assistance for low-income individuals
            </label>
          </div>
        </fieldset>


        {toggle ? <div>{formValues.budget==="correct" ? <p>✅ ANSWER: A plan for spending and saving money </p>: <p>❌ ANSWER:A plan for spending and saving money</p>}</div>: <p>Please Answer Questions to See Results</p>}

        {/* /////////////////////////////////////////////////////////////////////// */}

        <fieldset className="easyQuestions">
          <legend>What is the purpose of having a checking account?</legend>

          <div>
            <input
              type="radio"
              id="interest"
              name="checkingAccount"
              value="interest"
              onChange={handleChange}

            ></input>
            <label htmlFor="interest">To earn interest on your money</label>
          </div>

          <div>
            <input
              type="radio"
              id="manage"
              name="checkingAccount"
              value="correct"
              onChange={handleChange}

            ></input>
            <label htmlFor="manage">
              To store and manage your day-to-day finances
            </label>
          </div>

          <div>
            <input
              type="radio"
              id="invest"
              name="checkingAccount"
              value="invest"
              onChange={handleChange}

            ></input>
            <label htmlFor="invest">To invest in the stock market</label>
          </div>
          <div>
            <input
              type="radio"
              id="save"
              name="checkingAccount"
              value="save"
              onChange={handleChange}

            ></input>
            <label htmlFor="save">o save money for retirement</label>
          </div>
        </fieldset>

        {toggle ? <div>{formValues.checkingAccount==="correct" ? <p>✅ ANSWER: To store and manage your day-to-day finances </p>: <p>❌ ANSWER:A plan for spending and saving money</p>}</div>: <p>Please Answer Questions to See Results</p>}


        {/* //////HARD QUESTIONS///////////////////////////////////////////////////////////////// */}

        <fieldset className="hardQuestions">
          <legend>What is the 50-30-20 budgeting rule?</legend>

          <div>
            <input
              type="radio"
              id="savings7"
              name="allocating"
              value="savings7"
              onChange={handleChange}

            ></input>
            <label htmlFor="savings7">
              It refers to allocating 50% of your income to savings, 30% to
              housing, and 20% to entertainment.
            </label>
          </div>

          <div>
            <input
              type="radio"
              id="essentials"
              name="allocating"
              value="correct"
              onChange={handleChange}

            ></input>
            <label htmlFor="essentials">
              It's a guideline to allocate 50% of your income to essentials, 30%
              to wants, and 20% to savings and debt repayment.
            </label>
          </div>

          <div>
            <input
              type="radio"
              id="housing"
              name="allocating"
              value="housing"
              onChange={handleChange}

            ></input>
            <label htmlFor="housing">
              It suggests spending 50% of your income on housing, 30% on
              transportation, and 20% on food.
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="rule"
              name="allocating"
              value="rule"
              onChange={handleChange}

            ></input>
            <label htmlFor="rule">
              It's a budgeting rule that applies only to retirees.
            </label>
          </div>
        </fieldset>

        {toggle ? <div>{formValues.allocating==="correct" ? <p>✅ ANSWER: It's a guideline to allocate 50% of your income to essentials, 30% to wants, and 20% to savings and debt repayment. </p>: <p>❌ ANSWER:It's a guideline to allocate 50% of your income to essentials, 30% to wants, and 20% to savings and debt repayment.</p>}</div>: <p>Please Answer Questions to See Results</p>}

        {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}

        <fieldset className="hardQuestions">
          <legend>
            What is a credit score, and how is it typically measured?
          </legend>

          <div>
            <input
              type="radio"
              id="individual"
              name="creditScore"
              value="individual"
              onChange={handleChange}

            ></input>
            <label htmlFor="individual">
              A score that measures an individual's ability to save money
            </label>
          </div>

          <div>
            <input
              type="radio"
              id="earnsAnnual"
              name="creditScore"
              value="earnsAnnual"
              onChange={handleChange}

            ></input>
            <label htmlFor="earnsAnnual">
              A score that indicates how much money a person earns annually
            </label>
          </div>

          <div>
            <input
              type="radio"
              id="representation"
              name="creditScore"
              value="correct"
              onChange={handleChange}

            ></input>
            <label htmlFor="representation">
              A numerical representation of an individual's creditworthiness,
              typically ranging from 300 to 850
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="potential"
              name="creditScore"
              value="potential"
              onChange={handleChange}

            ></input>
            <label htmlFor="potential">
              A score used by banks to determine an individual's potential
              earnings from investments
            </label>
          </div>
        </fieldset>


        {toggle ? <div>{formValues.creditScore==="correct" ? <p>✅ ANSWER: $7,000</p>: <p>❌ ANSWER:$7,000</p>}</div>: <p>Please Answer Questions to See Results</p>}

        {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}

        <fieldset className="hardQuestions">
          <legend>
            What is the maximum annual contribution limit for a Traditional IRA
            in 2023?
          </legend>

          <div>
            <input
              type="radio"
              id="5000"
              name="IRAcontributionLIMIT"
              value="5000"
              onChange={handleChange}

            ></input>
            <label htmlFor="5000">$5,000</label>
          </div>

          <div>
            <input
              type="radio"
              id="6000"
              name="IRAcontributionLIMIT"
              value="6000"
              onChange={handleChange}

            ></input>
            <label htmlFor="6000">$6,000</label>
          </div>

          <div>
            <input
              type="radio"
              id="7000"
              name="IRAcontributionLIMIT"
              value="correct"
              onChange={handleChange}

            ></input>
            <label htmlFor="7000">$7,000</label>
          </div>
          <div>
            <input
              type="radio"
              id="noLimit"
              name="IRAcontributionLIMIT"
              value="noLimit"
              onChange={handleChange}

            ></input>
            <label htmlFor="noLimit">There is no maximum limit</label>
          </div>
        </fieldset>



        {toggle ? <div>{formValues.IRAcontributionLIMIT==="correct" ? <p>✅ ANSWER: A numerical representation of an individual's creditworthiness, typically ranging from 300 to 850</p>: <p>❌ ANSWER: A numerical representation of an individual's creditworthiness, typically ranging from 300 to 850</p>}</div>: <p>Please Answer Questions to See Results</p>}



        <fieldset>
          <legend>
            True or False: In New York City, individuals with low to moderate
            incomes can access free financial counseling services through the
            NYC Financial Empowerment Centers:
          </legend>
          {/* <label for="financialEmpowerment"></label> */}

          <select
            className="hardestQuestionEver"
            name="financialEmpowerment"
            id="financialEmpowerment"
            onChange={handleChange}

          >
            <option value="">Please Select One</option>
            <option value="correct">true</option>
            <option value="false">false</option>
          </select>
        </fieldset>
        {toggle ? <div>{formValues.financialEmpowerment==="correct" ? <p>✅ ANSWER: True</p>: <p>❌ ANSWER: True</p>}</div>: <p>Please Answer Questions to See Results</p>}

        <input type="submit" />
      </form>
{/* 
<p><strong>What percentage of your income should you aim to save each month for emergencies and future goals?</strong></p>
      {toggle ? <div>{formValues.emergency==="correct" ? <p>✅ ANSWER: 20%</p>: <p>❌ ANSWER: 20%</p>}</div>: <p>Please Answer Questions to See Results</p>}

      <p><strong>What is a budget?</strong></p>
      {toggle ? <div>{formValues.budget==="correct" ? <p>✅ ANSWER: A plan for spending and saving money </p>: <p>❌ ANSWER:A plan for spending and saving money</p>}</div>: <p>Please Answer Questions to See Results</p>}
      <p><strong>What is the purpose of having a checking account?</strong></p>


      {toggle ? <div>{formValues.checkingAccount==="correct" ? <p>✅ ANSWER: To store and manage your day-to-day finances </p>: <p>❌ ANSWER:A plan for spending and saving money</p>}</div>: <p>Please Answer Questions to See Results</p>}


<p><strong>What is the 50-30-20 budgeting rule?</strong></p>
      {toggle ? <div>{formValues.allocating==="correct" ? <p>✅ ANSWER: It's a guideline to allocate 50% of your income to essentials, 30% to wants, and 20% to savings and debt repayment. </p>: <p>❌ ANSWER:It's a guideline to allocate 50% of your income to essentials, 30% to wants, and 20% to savings and debt repayment.</p>}</div>: <p>Please Answer Questions to See Results</p>}


      <p><strong>What is the maximum annual contribution limit for a Traditional IRA in 2023?</strong></p>
      {toggle ? <div>{formValues.creditScore==="correct" ? <p>✅ ANSWER: $7,000</p>: <p>❌ ANSWER:$7,000</p>}</div>: <p>Please Answer Questions to See Results</p>}

      <p><strong>What is a credit score, and how is it typically measured?</strong></p>
      {toggle ? <div>{formValues.IRAcontributionLIMIT==="correct" ? <p>✅ ANSWER: A numerical representation of an individual's creditworthiness, typically ranging from 300 to 850</p>: <p>❌ ANSWER: A numerical representation of an individual's creditworthiness, typically ranging from 300 to 850</p>}</div>: <p>Please Answer Questions to See Results</p>}

      <p><strong>True or False: In New York City, individuals with low to moderate incomes can access free financial counseling services through the NYC Financial Empowerment Centers.</strong></p>
      {toggle ? <div>{formValues.financialEmpowerment==="correct" ? <p>✅ ANSWER: True</p>: <p>❌ ANSWER: True</p>}</div>: <p>Please Answer Questions to See Results</p>}

 */}

    </div>
)}

export default Quiz