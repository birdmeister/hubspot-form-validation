<script src="//js-eu1.hsforms.net/forms/embed/v2.js"></script> // dependent on your portal
<script>
  hbspt.forms.create({
    region: "[your region id]", // only needed for some portals, for instance 'eu1', otherwise omit
    portalId: "[your portal id]",
    formId: "[your form id]",
    cssRequired: "[your CSS, for example: form {background-color: red};]", // CSS needed to style your form
    onFormReady: function(form, e) {
      const field1 = document.getElementById("[field1 id]") // the id of a form field can be found using Inspect in the browser
      const field2 = document.getElementById("[field2 id]")

      // Validator for field1
      function validator1() {
        const value1 = field1.value;
        const value2 = field2.value;
        var isValid = false;

        if (!/^\d+$/.test(value1)) {
          field1.setCustomValidity("field1 not correct (Should be all numbers)");
        } else if (value1.length != 8) {
          field1.setCustomValidity("field1 not correct (Should be 8 digits)");
        } else if (value1 == value2) {
          field1.setCustomValidity("field1 or field2 not correct (Should not be identical)");
        } else {
          field1.setCustomValidity("");
          isValid = true;
        }
        field1.reportValidity();

        if (!isValid) {
          field1.focus();
        }

        return isValid;
      }

      // Validator for field2
      function validator2() {
        const value1 = field1.value;
        const value2 = field2.value;
        var isValid = false;

        if (!/^\d+$/.test(value2)) {
          field2.setCustomValidity(`field2 not correct (Should be all numbers)`);
        } else if (value1 == value2) {
          field2.setCustomValidity('field1 or field2 not correct (Should not be identical)');
        } else {
          field2.setCustomValidity("");
          isValid = true;
        }
        field2.reportValidity();

        if (!isValid) {
          field2.focus();
        }

        return isValid;
      }

      // Add listeners when the contents for field 1 and field2 changes
      field1.addEventListener("change", validator1);
      field2.addEventListener("change", validator2);

      // Remove any displayed error message when the user starts changing the contents for field 1 and field 2
      field1.addEventListener("input", (event) => {
        field1.setCustomValidity("");
        field1.reportValidity();
      });

      field2.addEventListener("input", (event) => {
        field2.setCustomValidity("");
        field2.reportValidity();
      });

      // Add listener when the form is being submitted
      document.querySelector("[type='submit']").addEventListener("click", function(event) {
        
        // Run both validations again when submitting the form
        if (!validator1()) {
          event.preventDefault();
          return;
        }

        if (!validator2()) {
          event.preventDefault();
          return;
        }
      })
    }
  });
</script>
