# HubSpot form validation
[This file](https://github.com/birdmeister/hubspot-form-validation/blob/main/hubspot-form-validation-example.js) shows an example of HubSpot form field validations using JavaScript (without jQuery).

HubSpot is a great tool for creating forms using drag and drop. For each field on the form, the following settings are available:
- Label
- Help Text
- Placeholder text
- Default value
- Field specific validations. For example, adding a list of 'Email domains to block' for an Email field

When we need more complex client-side validations, we need to write these ourselves using JavaScript.

## Preliminary steps
1. Create a form in HubSpot
2. Set the form to 'Raw HTML' (on 'Style & preview')
3. Copy the form Embed code (HTML). We are only interested in the values for 'portalId', 'formId', and 'region' (this is not for all portals).
4. Create a webpage or landingpage that will contain the form

## Embedding the form

## Example Use Case
The form has 2 fields (field1 and field2). Both fields can contain strings. The following custom validations are needed, in addition to both fields being required.

Field1
- Should be all numbers
- Should be 8 characters
- Should not be identical to Field2

Field2
- Should be all numbers
- Should not be identical to Field1

## Adding custom validations to the form

## Styling the form



## References
1. How to customize the form embed code: https://legacydocs.hubspot.com/docs/methods/forms/advanced_form_options
