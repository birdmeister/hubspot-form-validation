# HubSpot form validation
[This file](https://github.com/birdmeister/hubspot-form-validation/blob/main/hubspot-form-validation-example.js) is an example on how to setup HubSpot custom form field validations using JavaScript (without jQuery).

HubSpot is a great tool for creating forms using drag and drop. For each field on the form, the following values can be set:
- Label
- Help text
- Placeholder text
- Default value
- Field specific validations. For example, adding a list of 'Email domains to block' to an Email field

When we need custom client-side field validations, we need to write these ourselves using JavaScript.

## Preliminary steps
1. Create a form in HubSpot
2. Set the form to 'Raw HTML' (on the 'Style & preview' tab)
3. Copy the form Embed code (HTML). In the end we are only interested in the values for 'portalId', 'formId', and 'region' ('region' is only available for some portals for instance when hosted in Europe).
4. Create a webpage or landingpage that will contain the form
5. Embed the form (see next section)

## Embedding the form
Instead of using a Form module on a page, we need to use a Rich Text module, as we need to add HTML. Once we have added a Rich Text module, we need to edit the Source code (Advanced > Source code). Once we add the HTML (see the example file), the form will be displayed. To ensure there are no errors, open a JavaScript console in the browser and inspect any warnings or errors.

## Example Use Case
The form has two fields: _field1_ and _field2_. Both fields are for strings. The following custom validations are needed, in addition for both fields being required.

_Field1_ custom validations:
- Should be all digits
- Should be 8 characters
- Should not be identical to Field2

_Field2_ custom validations:
- Should be all digits
- Should not be identical to Field1

## Adding custom validations to the form
[This file](https://github.com/birdmeister/hubspot-form-validation/blob/main/hubspot-form-validation-example.js) shows how to setup these validations. The validations are carried out when the contents of a field is changed and when the form is submitted.

## Styling the form
When calling 'hbspt.forms.create', the field 'cssRequired' needs to contain styling using CSS. When using 'Raw HTML' the CSS is not carried over to the form.

## Outstanding work
- Instead of using 'setCustomValidity()' show the error message in the same position as where HubSpot shows the error message. I have not yet figured out on how to do this.

## Remarks
- It is not possible to add custom form field validations for HubSpot MarketingHub Free and Starter edition
- The above is for the [Forms API v2](https://legacydocs.hubspot.com/docs/methods/forms/forms_overview). At this moment, [Forms API v3](https://developers.hubspot.com/docs/api/marketing/forms) is in beta
- This example is for single-language forms

## References
1. How to customize the form embed code: https://legacydocs.hubspot.com/docs/methods/forms/advanced_form_options
