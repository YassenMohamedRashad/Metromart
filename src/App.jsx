import React from 'react'

function App() {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-6">
          <h2>Billing Details</h2>

          <div className="row mt-3 label">
            <label>First Name</label>
            <input type="text" name="firstName" className="w-75 form-control" />
          </div>

          <div className="row mt-3 label">
            <label>Company Name</label>
            <input type="text" name="companyName" className="w-75 form-control" />
          </div>

          <div className="row mt-3 label">
            <label>Street Address</label>
            <input type="text" name="streetAddress" className="w-75 form-control" />
          </div>

          <div className="row mt-3 label">
            <label>Apartment, floor, etc (optional)</label>
            <input type="text" name="apartment" className="w-75 form-control" />
          </div>

          <div className="row mt-3 label">
            <label>Town/City</label>
            <input type="text" name="town" className="w-75 form-control" />
          </div>

          <div className="row mt-3 label">
            <label>Phone Number</label>
            <input type="number" name="phone" className="w-75 form-control" />
          </div>

          <div className="row mt-3 label">
            <label>Email Address</label>
            <input type="email" name="email" className="w-75 form-control" />
          </div>

          <div className="row mt-3">
            <div class="form-check text-danger">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Save this information for faster check-out next time
              </label>
            </div>
          </div> <br />

        </div>
      </div>
    </div>
  )
}

export default App;