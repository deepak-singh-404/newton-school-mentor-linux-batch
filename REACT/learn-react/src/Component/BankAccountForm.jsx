import React, { useState, useEffect } from "react"

// ----create form --------

// -name of the account holder
// -available balance
// -amount to be debited
// -mobile no
// -account no.
// -confirm account no.

const BankAccountForm = () => {
    // it helps us to manage state inside the component
    const [accountHolderName, setAccountHolderName] = useState("") //it is hook offer from react, which return two things, 1 value, 2 ,method/function to change the value
    const [availableBalance, setAvailableBalance] = useState("")
    const [amountToBeDebited, setAmountToBeDebited] = useState("")
    const [mobileNo, setMobileNo] = useState("")
    const [accountNo, setAccountNo] = useState("")
    const [confirmAccountNo, setConfirmAccountNo] = useState("")
    const [isMatch, setIsMatch] = useState(true)
    const [amountToBeWithdrawnError, setAmountToBeWithdrawnError] = useState(false)


    useEffect(() => {
        if (Number(amountToBeDebited) > Number(availableBalance)) {
            setAmountToBeWithdrawnError(true)
        }
        else {
            setAmountToBeWithdrawnError(false)
        }
    }, [availableBalance, amountToBeDebited])

    //dependency
    useEffect(() => {
        if (Number(accountNo) !== Number(confirmAccountNo)) {
            setIsMatch(false)
        }
        else {
            setIsMatch(true)
        }
    }, [accountNo, confirmAccountNo])

    return (<div>
        <h1>BANK ACCOUNT FORM</h1>
        <form>
            <input placeholder="Account holder name"
                value={accountHolderName} type="text" onChange={(e) => setAccountHolderName(e.target.value)} />

            <br />

            <input placeholder="Available balance" value={availableBalance} type="text"
                onChange={(e) => setAvailableBalance(e.target.value)}
            />
            <br />

            <input placeholder="Amount to be debited" value={amountToBeDebited} type="text"
                onChange={(e) => setAmountToBeDebited(e.target.value)}
            />
            {amountToBeWithdrawnError && <h4>Debit amount should be less than available balance</h4>}


            <br />
            <input placeholder="Mobile number" value={mobileNo} type="text"
                onChange={(e) => setMobileNo(e.target.value)} />
            <br />

            <input placeholder="Account number" value={accountNo} type="text"
                onChange={(e) => setAccountNo(e.target.value)}
            />
            <br />

            <input placeholder="Confirm account number" value={confirmAccountNo} type="text"
                onChange={(e) => setConfirmAccountNo(e.target.value)} />
            <br />

            {!isMatch && <h4>Account number mismatch</h4>}

            <button type="submit" >Submit</button>
        </form>

    </div>)
}

export default BankAccountForm