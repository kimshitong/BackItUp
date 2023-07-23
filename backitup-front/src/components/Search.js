import React, { useState } from "react"

function Search(props) {

  const [displayESG, setDisplayESG] = useState(false)

  const showESG = () => {
    const updatedESG = !displayESG; // Toggle the value of displayESG
    setDisplayESG(updatedESG); // Update the state

    props.setEsg(updatedESG); // Pass the updated value to props.setEsg
  }

  return (
    <form class="align-items-stretch">
      <div class="row align-items-center">
        <div class="col-8">
          <div class="input-group my-3 align-items-center">

            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">Search</span>
            </div>
            <input
              type="text"
              class="form-control"
              value={props.filterBy}
              onChange={props.changeBy}
              placeholder="By title..."
              aria-label="Username"
              aria-describedby="basic-addon1" />
          </div>
        </div>
        <div class="col">
          <div class="bg-light rounded d-flex flex-row">
            <button
              type="button"
              className={!displayESG
                ? 'btn btn-admin-dark flex-fill my-2 mx-1 shadow-sm'
                : 'btn btn-admin-inactive flex-fill my-2 mx-1'}
              onClick={() => showESG()}
              onChange={props.filterHandler}>All opportunities</button>
            <button
              type="button"
              className={displayESG
                ? 'btn btn-admin-dark flex-fill my-2 mx-1 shadow-sm'
                : 'btn btn-admin-inactive flex-fill my-2 mx-1'}
              onClick={() => showESG()} onChange={props.filterHandler}>ESG only</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Search