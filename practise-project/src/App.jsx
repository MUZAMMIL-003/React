import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import data from './components/data'
import ButtonFunc from './components/Button'

///////////// Counter //////////
function App() {
  const [counter, counterFunc] = useState(0)

  const updatecounter = () => {
    counterFunc(counter + 1);
  }
  const deleteCounter = () => {
    counterFunc(counter - 1);
  }

  const [liked, setLiked] = useState(true);

  function handleChange(e) {
    setLiked(e.target.checked);
  }


  ////////////////Input //////////////////////

  // const [userName, setUserName] = useState("Abc")
  // let handleInputChange = (e) => setUserName(e.target.value);
  // console.log(userName)



  //////////////// Transections //////////////////////////
  const [amount, setAmount] = useState(0)
  const [type, setType] = useState("income")
  const [Transaction, setTransactions] = useState([])

  let SubmitBttn = () => {
    setTransactions([...Transaction, { amount, type }])
    setAmount("")
    setType("income")
  }
  console.log(Transaction)
  return (
    <>
      {/* hero section  */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src={data.src}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {/* SUPER SAIYAN GOKU */}
              {data.heading1}
              {data.heading2}
            </h1>
            <label>
              <input
                type="checkbox"
                checked={liked}
                onChange={handleChange}
              />

            </label>
            <h2>You {liked ? 'liked' : 'did not like'} this.</h2>
            <p className="mb-8 leading-relaxed">
              {data.description}
            </p>
            <div className="flex justify-center gap-4">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Counter :
              </h1>
              <button onClick={updatecounter} className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                Add
              </button>
              <div className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                {counter}
              </div>
              <button onClick={deleteCounter} className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                Less
              </button>

            </div>
          </div>
          <br /><br />



          {/* ///////////////////////////////  Use State.................... */}
          <center>
            <h2>Usage of UseState With Input </h2><br />
            <div>
              {/* <input value={userName} type="text" onChange={handleInputChange} className='border border-blue-400' /> */}
            </div>
            <h5>"Open Console To See Results!"</h5>

            <div>
              <h1>TranSactions</h1>
              <input type="number" placeholder='Add Your Amount ' value={amount} className='border border-yellow-500' onChange={(e) => setAmount(e.target.value)} />
              <select value={type} name="" id="" className='border border-yellow-900' onChange={(e) => setType(e.target.value)} >
                <option>Expense</option>
                <option >income</option>
              </select>
              <button type='Submit' onClick={SubmitBttn} >Submit</button>
            </div>

            <div>
              {
                Transaction.map((data, index) => {
                  return <div className='flex'>
                    <h1 className='font-bold underline text-3xl w-60'> {index + 1} {")"}  {data.amount}</h1>
                    <h1 className={`font-bold underline text-3xl ${data.type === "income" ? "text-green-500" : " text-red-500"} `}>{data.type}</h1>
                  </div>
                })
              }
            </div>

          </center>
        </div>
      </section>

      

    </>
  )
}

export default App