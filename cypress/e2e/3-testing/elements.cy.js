/// <reference types="cypress" />

import AppointmentPage from "../pageObjects/appointment.page";
import HistoryPage from "../pageObjects/history.page";

describe('DemoQA testing HW Scenario1', () => {

    context("CURA making an appointment", () => {

        beforeEach(() => {
    
            cy.visit("/");
            

            

          })

          it("Make an appointment", () => {

            AppointmentPage.makeAppointmentButton.click();

            //Set username and password

            AppointmentPage.usernameField.type("John Doe");
            AppointmentPage.passwordField.type("ThisIsNotAPassword");

            //Click login

            AppointmentPage.loginButton.click();

            //Set the values of:
                //Facility - "Seoul CURA Healthcare Center"
            AppointmentPage.selectField.select("Seoul CURA Healthcare Center");
                //Check - "Apply for hospital readmission"
            AppointmentPage.checkBox.click();
                //Select - "Medicaid"
            AppointmentPage.radioButton.click();
                //Set Date value by using the widget - "30"
                AppointmentPage.datePicker.click();
            AppointmentPage.pickDate.contains("30").click();
                //Set comment - "CURA Healthcare Service"
            AppointmentPage.commentType.type("CURA Healthcare Service", {force:true});
                //Click - "Book Appointment"
            AppointmentPage.bookAppointment.click();

            //VALIDATION

            //Validate that previously set values are correct

            cy.get("#facility").should("have.text", "Seoul CURA Healthcare Center");
            cy.get("#hospital_readmission").should("have.text", "Yes");
            cy.get("#program").should("have.text", "Medicaid");
            cy.get("#visit_date").should("have.text", "30/04/2023");
            cy.get("#comment").should("have.text", "CURA Healthcare Service");

          });

    });

})

describe('DemoQA testing HW Scenario2', () => {

    context("CURA history testing", () => {

        beforeEach(() => {
    
            cy.visit("/");
            

            

        })

        it("History check", () => {

            //Click - Make Appointment

            AppointmentPage.makeAppointmentButton.click();

            //Set username and password fields with the demo account credentials

            AppointmentPage.usernameField.type("John Doe");
            AppointmentPage.passwordField.type("ThisIsNotAPassword");

            //Click - Login

            AppointmentPage.loginButton.click();

            //Click - Menu/Stack/Burger icon

            HistoryPage.menuButton.click();

            //Validate that the sidebar is active

            HistoryPage.sideWrapper.should("have.class", "active");

            //Click - History

            HistoryPage.historySelect.click();

            //Validate that - No appointment - is visible

            HistoryPage.paragraphCheck.should("have.text", "No appointment.");

        });


        });

})