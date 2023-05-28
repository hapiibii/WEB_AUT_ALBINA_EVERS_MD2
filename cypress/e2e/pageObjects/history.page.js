class HistoryPage  {

    static get menuButton() {

        return cy.get("#menu-toggle");
    }

    static get sideWrapper() {
        return cy.get("#sidebar-wrapper");
    }

    static get historySelect() {
        return cy.get('a[href="history.php#history"]');
    }

    static get paragraphCheck() {
        return cy.get('div.col-sm-12.text-center p');
    }

}

export default HistoryPage;