class AppointmentPage  {

    static get makeAppointmentButton() {
        return cy.get("#btn-make-appointment");
    }

    static get usernameField() {
        return cy.get("#txt-username");
    }

    static get passwordField() {
        return cy.get("#txt-password");
    }

    static get loginButton() {
        return cy.get("#btn-login");
    }

    static get selectField() {
        return cy.get("#combo_facility");
    }

    static get checkBox() {
        return cy.get("#chk_hospotal_readmission");
    }

    static get radioButton() {
        return cy.get("#radio_program_medicaid");
    }

    static get datePicker() {
        return cy.get("#txt_visit_date");
    }

    static get pickDate() {
        return cy.get(".datepicker-days");
    }

    static get commentType() {
        return cy.get("#txt_comment");
    }

    static get bookAppointment() {
        return cy.get("#btn-book-appointment");
    }

}

export default AppointmentPage;