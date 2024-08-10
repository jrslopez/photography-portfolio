import React, { Fragment } from "react"

const Validation = () => {
  const validationSubmission = () => {
    var forms = document.querySelectorAll(".needs-validation")

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }

          form.classList.add("was-validated")
        },
        false
      )
    })
  }

  return (
    <Fragment>
      <form
        className="row g-3 needs-validation"
        novalidate
        onSubmit={validationSubmission}
      >
        <div class="col-md-4 position-relative form-group">
          <label for="validationTooltip01" class="form-label">
            First name
          </label>
          <input type="text" class="form-control" id="validationTooltip01" />
          <div class="valid-tooltip">Looks good!</div>
          <div className="invalid-feedback">UHMMMM</div>
        </div>
        <div class="col-md-4 position-relative form-group">
          <label for="validationTooltip02" class="form-label">
            Last name
          </label>
          <input type="text" class="form-control" id="validationTooltip02" />
          <div class="valid-tooltip">Looks good!</div>
          <div className="invalid-feedback">UHMMMM</div>
        </div>
        <div class="col-md-4 position-relative">
          <label for="validationTooltipUsername" class="form-label">
            Username
          </label>
          <div class="input-group has-validation">
            <span
              class="input-group-text"
              id="validationTooltipUsernamePrepend"
            >
              @
            </span>
            <input
              type="text"
              class="form-control"
              id="validationTooltipUsername"
              aria-describedby="validationTooltipUsernamePrepend"
            />
            <div class="invalid-tooltip">
              Please choose a unique and valid username.
            </div>
          </div>
        </div>
        <div class="col-md-6 position-relative">
          <label for="validationTooltip03" class="form-label">
            City
          </label>
          <input type="text" class="form-control" id="validationTooltip03" />
          <div class="invalid-tooltip">Please provide a valid city.</div>
        </div>
        <div class="col-md-3 position-relative">
          <label for="validationTooltip04" class="form-label">
            State
          </label>
          <select class="form-select" id="validationTooltip04">
            <option selected disabled value="">
              Choose...
            </option>
            <option>...</option>
          </select>
          <div class="invalid-tooltip">Please select a valid state.</div>
        </div>
        <div class="col-md-3 position-relative">
          <label for="validationTooltip05" class="form-label">
            Zip
          </label>
          <input type="text" class="form-control" id="validationTooltip05" />
          <div class="invalid-tooltip">Please provide a valid zip.</div>
        </div>
        <div class="col-12">
          <button class="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
        <div class="col-md-4">
          <label for="validationCustomUsername" class="form-label">
            Username
          </label>
          <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend">
              @
            </span>
            <input
              type="text"
              class="form-control"
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              required
            />
            <div class="invalid-feedback">Please choose a username.</div>
          </div>
        </div>
      </form>
    </Fragment>
  )
}

export default Validation
